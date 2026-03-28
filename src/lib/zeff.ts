/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ElementData {
  Z: number;
  s: string;
  A: number;
  n: string;
  cat: string;
}

export const PERIODIC: ElementData[] = [
  {Z:1,s:"H", A:1.008, n:"Hydrogen", cat:"Nonmetal"},{Z:2,s:"He", A:4.0026, n:"Helium", cat:"Noble Gas"},{Z:3,s:"Li", A:6.94, n:"Lithium", cat:"Alkali Metal"},
  {Z:4,s:"Be", A:9.0122, n:"Beryllium", cat:"Alkaline Earth Metal"},{Z:5,s:"B", A:10.81, n:"Boron", cat:"Metalloid"},{Z:6,s:"C", A:12.011, n:"Carbon", cat:"Nonmetal"},
  {Z:7,s:"N", A:14.007, n:"Nitrogen", cat:"Nonmetal"},{Z:8,s:"O", A:15.999, n:"Oxygen", cat:"Nonmetal"},{Z:9,s:"F", A:18.998, n:"Fluorine", cat:"Halogen"},
  {Z:10,s:"Ne", A:20.180, n:"Neon", cat:"Noble Gas"},{Z:11,s:"Na", A:22.990, n:"Sodium", cat:"Alkali Metal"},{Z:12,s:"Mg", A:24.305, n:"Magnesium", cat:"Alkaline Earth Metal"},
  {Z:13,s:"Al", A:26.982, n:"Aluminium", cat:"Post-transition Metal"},{Z:14,s:"Si", A:28.085, n:"Silicon", cat:"Metalloid"},{Z:15,s:"P", A:30.974, n:"Phosphorus", cat:"Nonmetal"},
  {Z:16,s:"S", A:32.06, n:"Sulfur", cat:"Nonmetal"},{Z:17,s:"Cl", A:35.45, n:"Chlorine", cat:"Halogen"},{Z:18,s:"Ar", A:39.948, n:"Argon", cat:"Noble Gas"},
  {Z:19,s:"K", A:39.098, n:"Potassium", cat:"Alkali Metal"},{Z:20,s:"Ca", A:40.078, n:"Calcium", cat:"Alkaline Earth Metal"},{Z:21,s:"Sc", A:44.956, n:"Scandium", cat:"Transition Metal"},
  {Z:22,s:"Ti", A:47.867, n:"Titanium", cat:"Transition Metal"},{Z:23,s:"V", A:50.942, n:"Vanadium", cat:"Transition Metal"},{Z:24,s:"Cr", A:51.996, n:"Chromium", cat:"Transition Metal"},
  {Z:25,s:"Mn", A:54.938, n:"Manganese", cat:"Transition Metal"},{Z:26,s:"Fe", A:55.845, n:"Iron", cat:"Transition Metal"},{Z:27,s:"Co", A:58.933, n:"Cobalt", cat:"Transition Metal"},
  {Z:28,s:"Ni", A:58.693, n:"Nickel", cat:"Transition Metal"},{Z:29,s:"Cu", A:63.546, n:"Copper", cat:"Transition Metal"},{Z:30,s:"Zn", A:65.38, n:"Zinc", cat:"Transition Metal"},
  {Z:31,s:"Ga", A:69.723, n:"Gallium", cat:"Post-transition Metal"},{Z:32,s:"Ge", A:72.630, n:"Germanium", cat:"Metalloid"},{Z:33,s:"As", A:74.922, n:"Arsenic", cat:"Metalloid"},
  {Z:34,s:"Se", A:78.971, n:"Selenium", cat:"Nonmetal"},{Z:35,s:"Br", A:79.904, n:"Bromine", cat:"Halogen"},{Z:36,s:"Kr", A:83.798, n:"Krypton", cat:"Noble Gas"},
  {Z:37,s:"Rb", A:85.468, n:"Rubidium", cat:"Alkali Metal"},{Z:38,s:"Sr", A:87.62, n:"Strontium", cat:"Alkaline Earth Metal"},{Z:39,s:"Y", A:88.906, n:"Yttrium", cat:"Transition Metal"},
  {Z:40,s:"Zr", A:91.224, n:"Zirconium", cat:"Transition Metal"},{Z:41,s:"Nb", A:92.906, n:"Niobium", cat:"Transition Metal"},{Z:42,s:"Mo", A:95.95, n:"Molybdenum", cat:"Transition Metal"},
  {Z:43,s:"Tc", A:98, n:"Technetium", cat:"Transition Metal"},{Z:44,s:"Ru", A:101.07, n:"Ruthenium", cat:"Transition Metal"},{Z:45,s:"Rh", A:102.91, n:"Rhodium", cat:"Transition Metal"},
  {Z:46,s:"Pd", A:106.42, n:"Palladium", cat:"Transition Metal"},{Z:47,s:"Ag", A:107.87, n:"Silver", cat:"Transition Metal"},{Z:48,s:"Cd", A:112.41, n:"Cadmium", cat:"Transition Metal"},
  {Z:49,s:"In", A:114.82, n:"Indium", cat:"Post-transition Metal"},{Z:50,s:"Sn", A:118.71, n:"Tin", cat:"Post-transition Metal"},{Z:51,s:"Sb", A:121.76, n:"Antimony", cat:"Metalloid"},
  {Z:52,s:"Te", A:127.60, n:"Tellurium", cat:"Metalloid"},{Z:53,s:"I", A:126.90, n:"Iodine", cat:"Halogen"},{Z:54,s:"Xe", A:131.29, n:"Xenon", cat:"Noble Gas"},
  {Z:55,s:"Cs", A:132.91, n:"Caesium", cat:"Alkali Metal"},{Z:56,s:"Ba", A:137.33, n:"Barium", cat:"Alkaline Earth Metal"},{Z:57,s:"La", A:138.91, n:"Lanthanum", cat:"Lanthanide"},
  {Z:58,s:"Ce", A:140.12, n:"Cerium", cat:"Lanthanide"},{Z:59,s:"Pr", A:140.91, n:"Praseodymium", cat:"Lanthanide"},{Z:60,s:"Nd", A:144.24, n:"Neodymium", cat:"Lanthanide"},
  {Z:61,s:"Pm", A:145, n:"Promethium", cat:"Lanthanide"},{Z:62,s:"Sm", A:150.36, n:"Samarium", cat:"Lanthanide"},{Z:63,s:"Eu", A:151.96, n:"Europium", cat:"Lanthanide"},
  {Z:64,s:"Gd", A:157.25, n:"Gadolinium", cat:"Lanthanide"},{Z:65,s:"Tb", A:158.93, n:"Terbium", cat:"Lanthanide"},{Z:66,s:"Dy", A:162.50, n:"Dysprosium", cat:"Lanthanide"},
  {Z:67,s:"Ho", A:164.93, n:"Holmium", cat:"Lanthanide"},{Z:68,s:"Er", A:167.26, n:"Erbium", cat:"Lanthanide"},{Z:69,s:"Tm", A:168.93, n:"Thulium", cat:"Lanthanide"},
  {Z:70,s:"Yb", A:173.05, n:"Ytterbium", cat:"Lanthanide"},{Z:71,s:"Lu", A:174.97, n:"Lutetium", cat:"Lanthanide"},{Z:72,s:"Hf", A:178.49, n:"Hafnium", cat:"Transition Metal"},
  {Z:73,s:"Ta", A:180.95, n:"Tantalum", cat:"Transition Metal"},{Z:74,s:"W", A:183.84, n:"Tungsten", cat:"Transition Metal"},{Z:75,s:"Re", A:186.21, n:"Rhenium", cat:"Transition Metal"},
  {Z:76,s:"Os", A:190.23, n:"Osmium", cat:"Transition Metal"},{Z:77,s:"Ir", A:192.22, n:"Iridium", cat:"Transition Metal"},{Z:78,s:"Pt", A:195.08, n:"Platinum", cat:"Transition Metal"},
  {Z:79,s:"Au", A:196.97, n:"Gold", cat:"Transition Metal"},{Z:80,s:"Hg", A:200.59, n:"Mercury", cat:"Transition Metal"},{Z:81,s:"Tl", A:204.38, n:"Thallium", cat:"Post-transition Metal"},
  {Z:82,s:"Pb", A:207.2, n:"Lead", cat:"Post-transition Metal"},{Z:83,s:"Bi", A:208.98, n:"Bismuth", cat:"Post-transition Metal"},{Z:84,s:"Po", A:209, n:"Polonium", cat:"Post-transition Metal"},
  {Z:85,s:"At", A:210, n:"Astatine", cat:"Metalloid"},{Z:86,s:"Rn", A:222, n:"Radon", cat:"Noble Gas"},{Z:87,s:"Fr", A:223, n:"Francium", cat:"Alkali Metal"},
  {Z:88,s:"Ra", A:226, n:"Radium", cat:"Alkaline Earth Metal"},{Z:89,s:"Ac", A:227, n:"Actinium", cat:"Actinide"},{Z:90,s:"Th", A:232.04, n:"Thorium", cat:"Actinide"},
  {Z:91,s:"Pa", A:231.04, n:"Protactinium", cat:"Actinide"},{Z:92,s:"U", A:238.03, n:"Uranium", cat:"Actinide"},{Z:93,s:"Np", A:237, n:"Neptunium", cat:"Actinide"},
  {Z:94,s:"Pu", A:244, n:"Plutonium", cat:"Actinide"},{Z:95,s:"Am", A:243, n:"Americium", cat:"Actinide"},{Z:96,s:"Cm", A:247, n:"Curium", cat:"Actinide"},
  {Z:97,s:"Bk", A:247, n:"Berkelium", cat:"Actinide"},{Z:98,s:"Cf", A:251, n:"Californium", cat:"Actinide"},{Z:99,s:"Es", A:252, n:"Einsteinium", cat:"Actinide"},
  {Z:100,s:"Fm", A:257, n:"Fermium", cat:"Actinide"},{Z:101,s:"Md", A:258, n:"Mendelevium", cat:"Actinide"},{Z:102,s:"No", A:259, n:"Nobelium", cat:"Actinide"},
  {Z:103,s:"Lr", A:266, n:"Lawrencium", cat:"Actinide"},{Z:104,s:"Rf", A:267, n:"Rutherfordium", cat:"Transition Metal"},{Z:105,s:"Db", A:268, n:"Dubnium", cat:"Transition Metal"},
  {Z:106,s:"Sg", A:269, n:"Seaborgium", cat:"Transition Metal"},{Z:107,s:"Bh", A:270, n:"Bohrium", cat:"Transition Metal"},{Z:108,s:"Hs", A:269, n:"Hassium", cat:"Transition Metal"},
  {Z:109,s:"Mt", A:278, n:"Meitnerium", cat:"Transition Metal"},{Z:110,s:"Ds", A:281, n:"Darmstadtium", cat:"Transition Metal"},{Z:111,s:"Rg", A:282, n:"Roentgenium", cat:"Transition Metal"},
  {Z:112,s:"Cn", A:285, n:"Copernicium", cat:"Transition Metal"},{Z:113,s:"Nh", A:286, n:"Nihonium", cat:"Post-transition Metal"},{Z:114,s:"Fl", A:289, n:"Flerovium", cat:"Post-transition Metal"},
  {Z:115,s:"Mc", A:289, n:"Moscovium", cat:"Post-transition Metal"},{Z:116,s:"Lv", A:293, n:"Livermorium", cat:"Post-transition Metal"},{Z:117,s:"Ts", A:294, n:"Tennessine", cat:"Halogen"},
  {Z:118,s:"Og", A:294, n:"Oganesson", cat:"Noble Gas"}
];

export const ELEMENTS_DB: Record<string, {Z: number, A: number}> = {};
PERIODIC.forEach(e => ELEMENTS_DB[e.s] = {Z: e.Z, A: e.A});

export interface Material {
  f: string;
  cat: string;
  desc?: string;
}

export const MATERIALS: Record<string, Material> = {
  "custom_formula": {f:"", cat:"Custom", desc: "User-defined chemical formula for analysis."},
  // Table 1: Controlled Items (Precursors)
  "acetic_anhydride": {f:"C4H6O3", cat:"Table 1", desc: "Essential precursor for the manufacture of heroin and certain explosives."},
  "n_acetylanthranilic_acid": {f:"C9H9NO3", cat:"Table 1", desc: "Precursor used in the illicit manufacture of methaqualone."},
  "ephedrine": {f:"C10H15NO", cat:"Table 1", desc: "Primary precursor for the manufacture of methamphetamine."},
  "ergometrine": {f:"C19H23N3O2", cat:"Table 1", desc: "Precursor used in the illicit manufacture of LSD."},
  "ergotamine": {f:"C33H35N5O5", cat:"Table 1", desc: "Precursor used in the illicit manufacture of LSD."},
  "isosafrole": {f:"C10H10O2", cat:"Table 1", desc: "Precursor used in the illicit manufacture of MDA and MDMA (Ecstasy)."},
  "lysergic_acid": {f:"C16H16N2O2", cat:"Table 1", desc: "Direct precursor for the manufacture of LSD."},
  "mdp2p": {f:"C10H10O3", cat:"Table 1", desc: "Key precursor for the manufacture of MDMA (Ecstasy)."},
  "norephedrine": {f:"C9H13NO", cat:"Table 1", desc: "Precursor used in the manufacture of amphetamine-type stimulants."},
  "p2p": {f:"C9H10O", cat:"Table 1", desc: "Phenyl-2-propanone; essential precursor for methamphetamine and amphetamine."},
  "potassium_permanganate": {f:"KMnO4", cat:"Table 1", desc: "Oxidizing agent used in cocaine processing and as a component in some explosive mixtures."},
  "pseudoephedrine": {f:"C10H15NO", cat:"Table 1", desc: "Common precursor for the illicit manufacture of methamphetamine."},
  "safrole": {f:"C10H10O2", cat:"Table 1", desc: "Essential precursor for the manufacture of MDA and MDMA (Ecstasy)."},
  // Table 2: Controlled Items
  "acetone": {f:"C3H6O", cat:"Table 2", desc: "Common solvent used in the extraction and purification of cocaine and heroin."},
  "anthranilic_acid": {f:"C7H7NO2", cat:"Table 2", desc: "Precursor for the manufacture of methaqualone."},
  "ethyl_ether": {f:"C4H10O", cat:"Table 2", desc: "Highly flammable solvent used in the processing of cocaine and other drugs."},
  "hydrochloric_acid": {f:"HCl", cat:"Table 2", desc: "Used in the final stage of drug processing to create hydrochloride salts (e.g., Cocaine HCl)."},
  "mek": {f:"C4H8O", cat:"Table 2", desc: "Methyl ethyl ketone; solvent used in the manufacture of various illicit drugs."},
  "phenylacetic_acid": {f:"C8H8O2", cat:"Table 2", desc: "Precursor used in the manufacture of P2P and amphetamine/methamphetamine."},
  "piperidine": {f:"C5H11N", cat:"Table 2", desc: "Essential precursor for the manufacture of PCP (Phencyclidine)."},
  "sulphuric_acid": {f:"H2SO4", cat:"Table 2", desc: "Used in the extraction of cocaine and the manufacture of various synthetic drugs and explosives."},
  "toluene": {f:"C7H8", cat:"Table 2", desc: "Solvent commonly used in the illicit processing of cocaine and synthetic drugs."},
  // Psychotropic Substances
  "amfetamine": {f:"C9H13N", cat:"Psychotropic", desc: "Central nervous system stimulant; high potential for abuse and illicit distribution."},
  "amobarbital": {f:"C11H18N2O3", cat:"Psychotropic", desc: "Barbiturate derivative with sedative and hypnotic properties; controlled substance."},
  "allobarbital": {f:"C10H12N2O3", cat:"Psychotropic", desc: "Barbiturate derivative; used as a sedative and hypnotic."},
  "alprazolam": {f:"C17H13ClN4", cat:"Psychotropic", desc: "Benzodiazepine (Xanax); commonly abused sedative/anxiolytic."},
  "amfepramone": {f:"C13H19NO", cat:"Psychotropic", desc: "Stimulant drug used as an appetite suppressant; controlled substance."},
  "brolamfetamine": {f:"C11H16BrNO2", cat:"Psychotropic", desc: "DOB; potent psychedelic amphetamine derivative."},
  "buprenorphine": {f:"C29H41NO4", cat:"Psychotropic", desc: "Semi-synthetic opioid used to treat opioid addiction; high potential for diversion."},
  "butalbital": {f:"C11H16N2O3", cat:"Psychotropic", desc: "Intermediate-acting barbiturate; often found in combination medications."},
  "barbital": {f:"C8H12N2O3", cat:"Psychotropic", desc: "The first commercially available barbiturate; sedative and hypnotic."},
  "benzfetamine": {f:"C17H21N", cat:"Psychotropic", desc: "Anorectic drug; sympathomimetic amine related to amphetamine."},
  "bromazepam": {f:"C14H10BrN3O", cat:"Psychotropic", desc: "Benzodiazepine derivative; used for anxiety and panic disorders."},
  "cathinone": {f:"C9H11NO", cat:"Psychotropic", desc: "Naturally occurring stimulant found in Khat; precursor to many synthetic cathinones ('bath salts')."},
  "cathine": {f:"C9H13NO", cat:"Psychotropic", desc: "Stimulant found in Khat; controlled under international drug conventions."},
  "cyclobarbital": {f:"C12H16N2O3", cat:"Psychotropic", desc: "Barbiturate derivative with sedative-hypnotic effects."},
  "camazepam": {f:"C19H18ClN2O3", cat:"Psychotropic", desc: "Benzodiazepine derivative; used as an anxiolytic."},
  "chlordiazepoxide": {f:"C16H14ClN3O", cat:"Psychotropic", desc: "The first benzodiazepine (Librium); used for anxiety and alcohol withdrawal."},
  "clobazam": {f:"C16H13ClN2O2", cat:"Psychotropic", desc: "Benzodiazepine used primarily as an anticonvulsant."},
  "clonazepam": {f:"C15H10ClN3O3", cat:"Psychotropic", desc: "Benzodiazepine (Klonopin); used for seizures and panic disorders."},
  "clorazepate": {f:"C16H11Cl2N2O4", cat:"Psychotropic", desc: "Benzodiazepine used for anxiety and seizure disorders."},
  "clotiazepam": {f:"C12H15ClN2OS", cat:"Psychotropic", desc: "Thienodiazepine drug; similar effects to benzodiazepines."},
  "cloxazolam": {f:"C17H14Cl2N2O2", cat:"Psychotropic", desc: "Benzodiazepine derivative with anxiolytic properties."},
  "dexamphetamine": {f:"C9H13N", cat:"Psychotropic", desc: "Potent CNS stimulant; used for ADHD and narcolepsy; high abuse potential."},
  "delorazepam": {f:"C15H10Cl2N2O", cat:"Psychotropic", desc: "Benzodiazepine derivative; used as an anxiolytic and hypnotic."},
  "diazepam": {f:"C16H13ClN2O", cat:"Psychotropic", desc: "Benzodiazepine (Valium); widely used and abused sedative/anxiolytic."},
  "estazolam": {f:"C16H11ClN4", cat:"Psychotropic", desc: "Benzodiazepine derivative used for short-term treatment of insomnia."},
  "ethchlorvynol": {f:"C7H9ClO", cat:"Psychotropic", desc: "GABAergic sedative and hypnotic medication."},
  "ethyl_loflazepate": {f:"C18H14ClFN2O3", cat:"Psychotropic", desc: "Benzodiazepine derivative with long-acting effects."},
  "etilamfetamine": {f:"C11H17N", cat:"Psychotropic", desc: "Stimulant drug of the amphetamine class."},
  "ethinamate": {f:"C9H13NO2", cat:"Psychotropic", desc: "Short-acting carbamate derivative used as a hypnotic."},
  "eticyclidine": {f:"C14H21N", cat:"Psychotropic", desc: "PCE; dissociative anesthetic drug with effects similar to PCP."},
  "fenetylline": {f:"C18H23N5O2", cat:"Psychotropic", desc: "Captagon; stimulant used in some regions, often associated with illicit use."},
  "fencamfamin": {f:"C14H19N", cat:"Psychotropic", desc: "Stimulant drug used to treat fatigue and narcolepsy."},
  "fenproporex": {f:"C12H15N2", cat:"Psychotropic", desc: "Stimulant drug used as an appetite suppressant; metabolizes into amphetamine."},
  "fludiazepam": {f:"C16H12ClFN2O", cat:"Psychotropic", desc: "Benzodiazepine derivative with potent anxiolytic effects."},
  "flunitrazepam": {f:"C16H12FN3O3", cat:"Psychotropic", desc: "Rohypnol; potent benzodiazepine often associated with drug-facilitated crimes."},
  "flurazepam": {f:"C21H23ClFN3O", cat:"Psychotropic", desc: "Benzodiazepine derivative used for the treatment of insomnia."},
  "glutethimide": {f:"C13H15NO2", cat:"Psychotropic", desc: "Hypnotic sedative; often used in combination with codeine ('sets and sevens')."},
  "halazepam": {f:"C17H12F3ClN2O", cat:"Psychotropic", desc: "Benzodiazepine derivative used for the treatment of anxiety."},
  "haloxazolam": {f:"C17H14Cl2N2O2", cat:"Psychotropic", desc: "Benzodiazepine derivative with hypnotic properties."},
  "ketazolam": {f:"C20H17ClN2O3", cat:"Psychotropic", desc: "Benzodiazepine derivative used for anxiety."},
  "lsd": {f:"C20H25N3O", cat:"Psychotropic", desc: "Lysergic acid diethylamide; extremely potent hallucinogen."},
  "lefetamine": {f:"C16H17N", cat:"Psychotropic", desc: "Stimulant drug with analgesic and antitussive effects."},
  "loprazolam": {f:"C23H21ClN6O3", cat:"Psychotropic", desc: "Benzodiazepine derivative with hypnotic and anxiolytic properties."},
  "lorazepam": {f:"C15H10Cl2N2O2", cat:"Psychotropic", desc: "Benzodiazepine (Ativan); high potential for dependence and abuse."},
  "lormetazepam": {f:"C16H12Cl2N2O2", cat:"Psychotropic", desc: "Benzodiazepine derivative used as a hypnotic."},
  "levamfetamine": {f:"C9H13N", cat:"Psychotropic", desc: "L-isomer of amphetamine; CNS stimulant."},
  "methamphetamine": {f:"C10H15N", cat:"Psychotropic", desc: "Highly addictive CNS stimulant; significant illicit manufacture and trafficking."},
  "methylphenidate": {f:"C14H19NO2", cat:"Psychotropic", desc: "Ritalin; stimulant used for ADHD; frequently diverted for illicit use."},
  "meprobamate": {f:"C9H18N2O4", cat:"Psychotropic", desc: "Carbamate derivative used as an anxiolytic; high potential for abuse."},
  "methaqualone": {f:"C16H14N2O", cat:"Psychotropic", desc: "Quaalude; sedative-hypnotic with a high history of illicit use."},
  "methylphenobarbital": {f:"C13H14N2O3", cat:"Psychotropic", desc: "Barbiturate derivative used as an anticonvulsant and sedative."},
  "methyprylon": {f:"C10H17NO2", cat:"Psychotropic", desc: "Sedative and hypnotic drug of the piperidinedione class."},
  "mazindol": {f:"C16H13ClN2O", cat:"Psychotropic", desc: "Stimulant drug used as an appetite suppressant."},
  "medazepam": {f:"C16H15ClN2", cat:"Psychotropic", desc: "Benzodiazepine derivative used for anxiety."},
  "mefenorex": {f:"C12H16ClN", cat:"Psychotropic", desc: "Stimulant drug used as an appetite suppressant; metabolizes to amphetamine."},
  "midazolam": {f:"C18H13ClFN3", cat:"Psychotropic", desc: "Short-acting benzodiazepine used for sedation and anesthesia."},
  "nimetazepam": {f:"C16H13N3O3", cat:"Psychotropic", desc: "Benzodiazepine derivative with potent hypnotic properties."},
  "nitrazepam": {f:"C15H11N3O3", cat:"Psychotropic", desc: "Benzodiazepine used for insomnia and infantile spasms."},
  "nordazepam": {f:"C15H11ClN2O", cat:"Psychotropic", desc: "Active metabolite of several benzodiazepines; used as an anxiolytic."},
  "oxazepam": {f:"C15H11ClN2O2", cat:"Psychotropic", desc: "Benzodiazepine used for anxiety and alcohol withdrawal."},
  "oxazolam": {f:"C18H17ClN2O2", cat:"Psychotropic", desc: "Benzodiazepine derivative with anxiolytic effects."},
  "pcp": {f:"C17H25N", cat:"Psychotropic", desc: "Phencyclidine; dissociative drug with significant hallucinogenic and neurotoxic effects."},
  "pentazocine": {f:"C19H27NO", cat:"Psychotropic", desc: "Opioid pain medication; potential for abuse and dependence."},
  "phenmetrazine": {f:"C11H15NO", cat:"Psychotropic", desc: "Stimulant drug formerly used as an appetite suppressant; high abuse potential."},
  "pentobarbital": {f:"C11H18N2O3", cat:"Psychotropic", desc: "Short-acting barbiturate; used for sedation and in veterinary medicine."},
  "phenobarbital": {f:"C12H12N2O3", cat:"Psychotropic", desc: "Long-acting barbiturate; used as an anticonvulsant and sedative."},
  "pipradrol": {f:"C18H21NO", cat:"Psychotropic", desc: "Mild CNS stimulant; used for obesity and ADHD."},
  "psilocybine": {f:"C12H17N2O4P", cat:"Psychotropic", desc: "Naturally occurring psychedelic compound found in 'magic mushrooms'."},
  "pemoline": {f:"C9H8N2O2", cat:"Psychotropic", desc: "Stimulant drug formerly used for ADHD and narcolepsy."},
  "phendimetrazine": {f:"C12H17NO", cat:"Psychotropic", desc: "Stimulant drug used as an appetite suppressant."},
  "phentermine": {f:"C10H15N", cat:"Psychotropic", desc: "Sympathomimetic amine used as an appetite suppressant."},
  "pinazepam": {f:"C18H13ClN2O", cat:"Psychotropic", desc: "Benzodiazepine derivative used as an anxiolytic."},
  "prazepam": {f:"C19H17ClN2O", cat:"Psychotropic", desc: "Benzodiazepine derivative used for anxiety disorders."},
  "pyrovalerone": {f:"C15H21NO", cat:"Psychotropic", desc: "Stimulant drug used for the treatment of fatigue or lethargy."},
  "rolicyclidine": {f:"C13H17N", cat:"Psychotropic", desc: "PHP; dissociative anesthetic drug similar to PCP."},
  "secobarbital": {f:"C12H18N2O3", cat:"Psychotropic", desc: "Short-acting barbiturate; used for insomnia and pre-anesthesia."},
  "secbutabarbital": {f:"C10H16N2O3", cat:"Psychotropic", desc: "Intermediate-acting barbiturate; used as a sedative."},
  "temazepam": {f:"C16H13ClN2O2", cat:"Psychotropic", desc: "Benzodiazepine used for the short-term treatment of insomnia."},
  "tetrazepam": {f:"C16H17ClN2O", cat:"Psychotropic", desc: "Benzodiazepine used as a muscle relaxant."},
  "triazolam": {f:"C17H12Cl2N4", cat:"Psychotropic", desc: "Short-acting benzodiazepine (Halcion) used for insomnia."},
  "mda": {f:"C10H13NO2", cat:"Psychotropic", desc: "Tenamfetamine; psychedelic and entactogen drug of the amphetamine class."},
  // Original items
  "tnt": {f:"C7H5N3O6", cat:"Explosive", desc: "Trinitrotoluene; a standard high explosive used in military and industrial applications."},
  "rdx": {f:"C3H6N6O6", cat:"Explosive", desc: "Cyclotrimethylenetrinitramine; a powerful military high explosive."},
  "petn": {f:"C5H8N4O12", cat:"Explosive", desc: "Pentaerythritol tetranitrate; a highly sensitive high explosive used in detonators."},
  "hmx": {f:"C4H8N8O8", cat:"Explosive", desc: "High-melting explosive; a powerful and relatively insensitive military high explosive."},
  "nitroglycerin": {f:"C3H5N3O9", cat:"Explosive", desc: "Highly sensitive explosive liquid; primary component of dynamite."},
  "c4": {f:"C3H6N6O6", cat:"Explosive (C4)", desc: "Plastic explosive composed of RDX and plasticizers; widely used by military."},
  "tATP": {f:"C9H18O6", cat:"Explosive (TATP)", desc: "Triacetone triperoxide; a highly unstable primary explosive often used in improvised devices."},
  "anfo": {f:"NH4NO3", cat:"Explosive (ANFO)", desc: "Ammonium Nitrate/Fuel Oil; a widely used industrial explosive mixture."},
  "cocaine": {f:"C17H21NO4", cat:"Drug", desc: "Potent stimulant alkaloid; highly addictive and widely trafficked illicit drug."},
  "heroin": {f:"C21H23NO5", cat:"Drug", desc: "Semi-synthetic opioid synthesized from morphine; highly addictive illicit drug."},
  "morphine": {f:"C17H19NO3", cat:"Drug", desc: "Natural opiate alkaloid; used medically for pain but high potential for abuse."},
  "ethanol": {f:"C2H6O", cat:"Household", desc: "Common alcohol found in beverages and used as a solvent/fuel."},
  "polyethylene": {f:"C2H4", cat:"Plastic", desc: "The most common plastic; used in packaging and containers."},
  "aluminum": {f:"Al", cat:"Metal", desc: "Lightweight metal used in construction, packaging, and aerospace."},
  "iron": {f:"Fe", cat:"Metal", desc: "Essential metal for construction and manufacturing; primary component of steel."},
  "lead": {f:"Pb", cat:"Metal", desc: "Heavy metal used in batteries, radiation shielding, and ammunition."},
  "glass": {f:"SiO2", cat:"Mineral", desc: "Amorphous solid used in windows, bottles, and laboratory equipment."}
};

export const P = 2.94;

export interface ColorBand {
  min: number;
  max: number;
  name: string;
  base: [number, number, number];
  light: [number, number, number];
}

export const BANDS: ColorBand[] = [
  {min:0, max:10, name:'Organic', base:[234, 88, 12], light:[255, 237, 213]}, // Orange 600, Orange 100
  {min:10, max:18, name:'Inorganic', base:[22, 163, 74], light:[220, 252, 231]}, // Green 600, Green 100
  {min:18, max:56, name:'Metals', base:[37, 99, 235], light:[219, 234, 254]}, // Blue 600, Blue 100
  {min:56, max:118, name:'X-rays Blocked', base:[23, 23, 23], light:[163, 163, 163]} // Neutral 900, Neutral 400
];

export function mapZtoColor(Z: number) {
  const band = BANDS.find(b => Z <= b.max) || BANDS[BANDS.length - 1];
  
  // Calculate discrete incremental level (1 to 10)
  const range = band.max - band.min;
  const normalized = (Z - band.min) / (range || 1);
  const level = Math.ceil(normalized * 10);
  const clampedLevel = Math.max(1, Math.min(10, level));
  
  // Ratio for interpolation (0 for level 1, 1 for level 10)
  const ratio = (clampedLevel - 1) / 9;

  const r = Math.round(band.light[0] + (band.base[0] - band.light[0]) * ratio);
  const g = Math.round(band.light[1] + (band.base[1] - band.light[1]) * ratio);
  const b = Math.round(band.light[2] + (band.base[2] - band.light[2]) * ratio);
  
  return {
    rgb: [r, g, b],
    css: `rgb(${r},${g},${b})`,
    band: band.name,
    range: `${band.min}–${band.max}`,
    level: clampedLevel
  };
}

export function contrastTextColor(rgb: number[]) {
  const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  return brightness > 128 ? '#041821' : '#ffffff';
}

export function parseFormula(formula: string) {
  const cleaned = formula.replace(/\u00B7/g, '·');
  const primary = cleaned.split('·')[0];
  const re = /([A-Z][a-z]?)(\d*)/g;
  let m;
  const out: Record<string, number> = {};
  while ((m = re.exec(primary)) !== null) {
    const sym = m[1];
    const cnt = m[2] ? parseInt(m[2], 10) : 1;
    out[sym] = (out[sym] || 0) + cnt;
  }
  if (Object.keys(out).length === 0) throw new Error('Cannot parse formula. Use e.g. C7H5N3O6');
  return out;
}

export function computeZeffFromFormula(formula: string) {
  const fd = parseFormula(formula);
  let sumA = 0;
  let sumZ = 0;
  let sumZZP = 0;
  for (const [sym, count] of Object.entries(fd)) {
    const e = ELEMENTS_DB[sym];
    if (!e) throw new Error(`Element '${sym}' not in database.`);
    sumA += e.A * count;
    const electrons = e.Z * count;
    sumZ += electrons;
    sumZZP += electrons * Math.pow(e.Z, P);
  }
  const zeff = Math.pow(sumZZP / sumZ, 1 / P);
  return { molar: sumA, zeff };
}

export const ACRONYMS: Record<string, string> = {
  'tnt': 'TNT (Trinitrotoluene)',
  'rdx': 'RDX (Research Department Explosive)',
  'c4': 'C4 (Composition C-4)',
  'petn': 'PETN (Pentaerythritol Tetranitrate)',
  'hmx': 'HMX (High Melting Explosive)',
  'tATP': 'TATP (Triacetone Triperoxide)',
  'anfo': 'ANFO (Ammonium Nitrate/Fuel Oil)',
  'mek': 'MEK (Methyl Ethyl Ketone)',
  'lsd': 'LSD (Lysergic Acid Diethylamide)',
  'mda': 'MDA (Methylenedioxyamphetamine)',
  'mdma': 'MDMA (Methylenedioxymethamphetamine)',
  'thc': 'THC (Tetrahydrocannabinol)',
  'pcp': 'PCP (Phencyclidine)',
  'ng': 'NG (Nitroglycerin)'
};

export function titleCaseLabel(key: string) {
  if (ACRONYMS[key]) return ACRONYMS[key];
  return key.replace(/_/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
