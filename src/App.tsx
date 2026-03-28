/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
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
    <div className="max-w-[900px] mx-auto p-4 md:p-7">
      <header className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-3 bg-gradient-to-br from-[#0ea5a4] to-[#38bdf8] text-white p-2.5 rounded-xl shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-extrabold text-xl">Z</div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Z_eff Visual</h1>
            <div className="text-[12px] opacity-90">Materials (expanded)</div>
          </div>
        </div>
      </header>

      <div className="space-y-5">
        <main className="space-y-5">
          <section className="bg-white rounded-xl p-5 shadow-sm border border-black/5">
            <h2 className="text-lg font-bold mb-2">Select Material</h2>
            <p className="text-gray-500 text-sm mb-6">
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
          </section>
        </main>
      </div>

      <footer className="mt-8 text-center text-gray-400 text-[11px]">
        Values are approximations for instructor demonstrations (no operational instructions provided).
      </footer>
    </div>
  );
}
