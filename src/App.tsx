/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  PERIODIC, 
  MATERIALS, 
  ELEMENTS_DB, 
  mapZtoColor, 
  contrastTextColor, 
  computeZeffFromFormula, 
  titleCaseLabel,
  BANDS
} from './lib/zeff';

export default function App() {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [customFormula, setCustomFormula] = useState<string>('');
  const [result, setResult] = useState<{
    formula: string;
    mass: string;
    zeff: string;
    band: string;
    range: string;
    color: string;
    textColor: string;
    explanation: string;
    category: string;
    level: number;
    description: string;
  } | null>(null);

  const materialKeys = useMemo(() => {
    return Object.keys(MATERIALS).sort((a, b) => 
      a === 'custom_formula' ? -1 : a.localeCompare(b)
    );
  }, []);

  const onCalculate = () => {
    if (!selectedMaterial) return;
    
    try {
      let formula = (selectedMaterial === 'custom_formula') ? customFormula : MATERIALS[selectedMaterial].f;
      
      if (selectedMaterial === 'custom_formula' && !formula.trim()) {
        alert('Please enter a custom formula first.');
        return;
      }

      const res = computeZeffFromFormula(formula);
      const col = mapZtoColor(res.zeff);
      
      setResult({
        formula: formula,
        mass: res.molar.toFixed(3),
        zeff: res.zeff.toFixed(3),
        band: col.band,
        range: col.range,
        color: col.css,
        textColor: contrastTextColor(col.rgb),
        explanation: `${titleCaseLabel(selectedMaterial)} — formula used: ${formula}.`,
        category: MATERIALS[selectedMaterial].cat || 'Custom',
        level: col.level,
        description: MATERIALS[selectedMaterial].desc || 'No additional context available for this material.'
      });
    } catch (err: any) {
      alert('Error calculating: ' + err.message);
      console.error(err);
    }
  };

  const handleClear = () => {
    setSelectedMaterial('');
    setCustomFormula('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <header className="relative w-full overflow-hidden bg-[#0ea5a4] py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5a4] via-[#0d9488] to-[#38bdf8]"></div>
        
        {/* Decorative Watermark */}
        <div className="absolute -right-20 -bottom-20 text-[300px] font-black text-white/5 select-none pointer-events-none">
          Z
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[900px] mx-auto relative z-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xl"
            >
              <span className="text-white font-black text-2xl">Z</span>
            </motion.div>
            <div className="h-px w-12 bg-white/30"></div>
            <span className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-bold">Forensic Analysis</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4">
            Z_eff <span className="text-white/40">Visual</span>
          </h1>
          
          <p className="text-white/70 text-sm md:text-lg max-w-xl font-medium leading-relaxed">
            Comprehensive visualization of effective atomic numbers for materials, compounds, and precursors.
          </p>
        </motion.div>
      </header>

      <div className="max-w-[900px] mx-auto p-4 md:p-7 -mt-10 relative z-20 pb-20">
        <main className="space-y-5">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-gray-50"
          >
            <h2 className="text-2xl font-black mb-2 tracking-tight">Select Material</h2>
            <p className="text-gray-400 text-sm mb-8 font-medium">
              Choose a material from the list and press Calculate to see its Z_eff properties.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block font-bold text-sm mb-2 text-gray-800">Material (compounds / proxies)</label>
                <div className="flex gap-2">
                  <button 
                    onClick={onCalculate}
                    className="px-4 py-2.5 bg-[#0ea5a4] text-white font-bold rounded-lg text-sm hover:bg-[#0d9488] transition-colors shadow-sm"
                  >
                    Calculate
                  </button>
                  <select 
                    className="flex-1 p-2.5 rounded-lg border border-gray-100 bg-white text-sm focus:ring-2 focus:ring-[#0ea5a4]/20 outline-none"
                    value={selectedMaterial}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSelectedMaterial(val);
                      setCustomFormula('');
                      setResult(null);
                    }}
                  >
                    <option value="">— Select material —</option>
                    {materialKeys.map(k => (
                      <option key={k} value={k}>
                        {k === 'custom_formula' ? 'Custom Formula (Enable Input)' : titleCaseLabel(k)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="pill">
                  Category: {result?.category || '—'}
                </div>
                <div className="ml-auto text-gray-400 text-[11px]">Tip: use Custom Formula for any formula</div>
              </div>

              {selectedMaterial === 'custom_formula' && (
                <div>
                  <label className="block font-bold text-sm mb-2 text-gray-800">Custom formula</label>
                  <input 
                    type="text"
                    className="w-full p-2.5 rounded-lg border border-gray-100 bg-white text-sm focus:ring-2 focus:ring-[#0ea5a4]/20 outline-none"
                    placeholder="e.g. C7H5N3O6"
                    value={customFormula}
                    onChange={(e) => {
                      setCustomFormula(e.target.value);
                      setResult(null);
                    }}
                  />
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button onClick={handleClear} className="btn btn-ghost w-full">Clear Selection</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="stat">
                <small>Interpreted formula</small>
                <span>{result?.formula || '—'}</span>
              </div>
              <div className="stat">
                <small>Molar mass (g/mol)</small>
                <span>{result?.mass || '—'}</span>
              </div>
            </div>

            <div 
              className="swatch mt-5" 
              style={{ 
                background: result?.color || 'transparent',
                color: result?.textColor || '#041821'
              }}
            >
              <div className="band">
                {result ? `${result.band} (${result.range})` : 'Band'}
                {result && <span className="ml-2 opacity-70">— Level {result.level}/10</span>}
              </div>
              <div className="zeff">Z_eff ≈ {result?.zeff || '—'}</div>
            </div>

            <div className="mt-4 text-center text-gray-400 text-xs">
              {result?.explanation || 'Select element or material and press Calculate.'}
            </div>

            {result && (
              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Material Context Summary</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {result.description}
                </p>
              </div>
            )}
          </motion.section>
        </main>
      </div>

      <footer className="mt-8 text-center text-gray-400 text-[11px]">
        Values are approximations for instructor demonstrations (no operational instructions provided).
      </footer>
    </div>
  );
}
