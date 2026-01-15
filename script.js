const quiz = [
  // Section 1: Introduction & Classification
  {section:1, q:"What does the term 'myco' in Mycobacterium refer to?", options:["Fungus-like","Acid-loving","Waxy","Rod-shaped"], answer:2},
  {section:1, q:"What is the primary function of the thick, waxy cell wall of Mycobacterium?", options:["Rapid reproduction","Exotoxin production","Airborne survival","Resist all antibiotics"], answer:2},
  {section:1, q:"Which of the following is NOT part of the M. tuberculosis complex?", options:["M. kansasii","M. tuberculosis","M. bovis","M. leprae"], answer:0},
  {section:1, q:"Which species causes leprosy (Hansen's Disease)?", options:["M. tuberculosis","M. bovis","M. leprae","M. avium-intracellulare"], answer:2},
  {section:1, q:"Nontuberculosis mycobacteria (NTM) are best described as:", options:["More virulent than M. tuberculosis","Opportunistic pathogens in humans","Only transmitted through water","Easily treated with first-line TB drugs"], answer:1},

  // Section 2: Bacteriology & Morphology
  {section:2, q:"What is the morphology of M. tuberculosis?", options:["Spherical (cocci)","Slender, rod-shaped","Spiral-shaped","Pleomorphic only"], answer:1},
  {section:2, q:"The unique cell wall structure of Mycobacterium is characterized by a high content of:", options:["Proteins","Carbohydrates","Lipids","Nucleic acids"], answer:2},
  {section:2, q:"What property of the cell wall is responsible for the 'acid-fast' characteristic?", options:["Peptidoglycan layer","Lipopolysaccharide (LPS)","Mycolic acid","Porin proteins"], answer:2},
  {section:2, q:"Which staining technique is specifically used to identify M. tuberculosis?", options:["Gram stain","Ziehl-Neelsen stain","India ink","Giemsa stain"], answer:1},
  {section:2, q:"What is the correct sequence of reagents in the Acid-fast stain?", options:["Methylene-blue, Acid-alcohol, Carbolfuchsin","Acid-alcohol, Carbolfuchsin, Methylene-blue","Carbolfuchsin, Acid-alcohol, Methylene-blue","Carbolfuchsin, Methylene-blue, Acid-alcohol"], answer:2},
  {section:2, q:"M. tuberculosis is best described as:", options:["Facultative anaerobe","Obligate aerobe","Obligate anaerobe","Microaerophile"], answer:1},
  {section:2, q:"What is the typical generation time of M. tuberculosis?", options:["20 minutes","1-2 hours","18-24 hours","5-7 days"], answer:2},
  {section:2, q:"On Lowenstein-Jensen (L-J) medium, how long does it typically take for visible colonies of M. tuberculosis to appear?", options:["2-3 days","1 week","3-4 weeks","8-10 weeks"], answer:2},
  {section:2, q:"Which component is part of Lowenstein-Jensen medium?", options:["Sheep blood","Chocolate","Malachite green","Sodium chloride"], answer:2},
  {section:2, q:"M. tuberculosis is RESISTANT to which of the following?", options:["Moist heat","Drying","UV radiation","Alcohol"], answer:1},
  {section:2, q:"L-forms of M. tuberculosis exhibit variation in:", options:["Antibiotic resistance only","Shape and structure","Virulence only","Growth rate only"], answer:1},
  {section:2, q:"The genome of M. tuberculosis H37Rv strain is characterized by:", options:["1.0 million bp, 70% AT","4.4 million bp, 65.6% GC","2.2 million bp, 50% GC","6.8 million bp, 75% GC"], answer:1},

  // Section 3: Virulence & Pathogenesis
  {section:3, q:"Which of the following is a virulence factor of M. tuberculosis?", options:["Exotoxin","Intracellular survival within macrophages","Invasive enzyme","Endotoxin"], answer:1},
  {section:3, q:"Which virulence factor is responsible for the microscopic appearance of 'serpentine cords'?", options:["Mycolic acid","Cord factor","Sulfatide","Wax D"], answer:1},
  {section:3, q:"What is the effect of Sulfatide and LAM?", options:["Promote phagosome-lysosome fusion","Suppress phagosome-lysosome fusion","Attract neutrophils","Act as superantigen"], answer:1},
  {section:3, q:"What role do the waxes in the cell wall play?", options:["Primary energy","Act as adjuvants","Powerful exotoxins","Inhibit T-cell activation"], answer:1},
  {section:3, q:"The primary host for M. tuberculosis is:", options:["Humans only","Cattle only","Both humans and cattle","Mice/rodents"], answer:0},
  {section:3, q:"M. bovis can infect:", options:["Only humans","Only cattle","Humans and cattle","Only birds"], answer:2},
  {section:3, q:"Most common TB transmission route?", options:["GI tract","Skin","Respiratory tract","Genital tract"], answer:2},
  {section:3, q:"Why might the patient's PPD test be negative despite TB?", options:["Vaccinated with BCG","Too early","Co-infected with HIV","Test read incorrectly"], answer:2},
  {section:3, q:"What structure forms in the lung due to immune response?", options:["Abscess","Granuloma (tubercle)","Cyst","Fibrotic plaque"], answer:1},
  {section:3, q:"A tubercle granuloma consists of all EXCEPT:", options:["Central TB core","Outer fibroblast wall","Prominent B cell layer","Multinucleated giant cells"], answer:2},
  {section:3, q:"Which type of immunity protects against M. tuberculosis?", options:["Cell-mediated","Humoral","Innate only","Complement"], answer:0},
  {section:3, q:"What is 'infection immunity' in TB?", options:["Lifetime after exposure","Depends on organism presence","Mother-child transfer","Only BCG"], answer:1},
  {section:3, q:"Immune response to protein antigens (tuberculin) leads to:", options:["Antibodies","Hypersensitivity","Immediate allergy","Complement activation"], answer:1},

  // Section 4: Disease & Clinical Features
  {section:4, q:"Systemic symptom of TB?", options:["Hemoptysis","Night sweats","Pleurisy","Cough"], answer:1},
  {section:4, q:"Specific symptom of pulmonary TB?", options:["Coughing blood","Joint pain","Skin rash","Diarrhea"], answer:0},
  {section:4, q:"Primary TB is most commonly:", options:["Severe adults","Mild children","Immediate disease","Cavitary lesions"], answer:1},
  {section:4, q:"Post-primary TB can result from:", options:["Reactivation only","Reactivation or new inhalation","Ingestion","Humoral defect"], answer:1},
  {section:4, q:"Major factor increasing global TB burden since 1993?", options:["BCG decreased effectiveness","HIV/AIDS","Global warming","Improved sanitation"], answer:1},

  // Section 5: Diagnosis
  {section:5, q:"First step in processing sputum?", options:["Inoculation","Decontamination with NaOH","Direct PCR","Centrifugation"], answer:1},
  {section:5, q:"Definitive TB diagnosis is made by:", options:["AFB stain","Tuberculin test","Culture","Chest X-ray"], answer:2},
  {section:5, q:"Positive Acid-fast stain indicates:", options:["Confirmation","Active contagious","Presence of AFB","Drug resistance"], answer:2},
  {section:5, q:"Why was initial AFB stain negative?", options:["No TB","Stain error","Few bacilli","Non-acid-fast variants"], answer:2},
  {section:5, q:"Molecular methods like PCR are used for:", options:["Replacing culture","Testing susceptibility","Rapid DNA detection","Measuring antibodies"], answer:2},
  {section:5, q:"What is Tuberculin?", options:["Killed M. bovis","PPD mixture","Toxin","Antigen"], answer:1},
  {section:5, q:"Tuberculin Skin Test is administered:", options:["Subcutaneous","Intradermal","Intramuscular","Scratch"], answer:1},
  {section:5, q:"TST is read:", options:["Immediately","24h","48-72h","1 week"], answer:2},
  {section:5, q:"What is measured in TST?", options:["Erythema diameter","Induration diameter","Pus","Skin color change"], answer:1},
  {section:5, q:"10mm induration in healthy individual?", options:["Positive","Negative","Intensive positive","Equivocal"], answer:0},
  {section:5, q:"18mm induration in symptomatic?", options:["Positive BCG","Negative","Intensive positive","False positive"], answer:2},
  {section:5, q:"Negative TST <5mm occurs in all EXCEPT:", options:["Early infection","Elderly","AIDS","Recently BCG"], answer:3},

  // Section 6: Prevention & Treatment
  {section:6, q:"BCG vaccine is:", options:["Killed TB vaccine","Live attenuated M. bovis","Subunit","DNA vaccine"], answer:1},
  {section:6, q:"BCG developed by:", options:["Waksman/Fleming","Calmette/Guerin","Koch/Pasteur","Metchnikoff/Ehrlich"], answer:1},
  {section:6, q:"BCG recommended in which country?", options:["US","UK","China","India"], answer:2},
  {section:6, q:"Who discovered streptomycin?", options:["Fleming","Waksman","Koch","Ehrlich"], answer:1},
  {section:6, q:"Standard TB drug duration?", options:["2-4 weeks","1-2 months","6-9 months","12-18 months"], answer:2},
  {section:6, q:"First-line anti-TB drug?", options:["Ciprofloxacin","Pyrazinamide","PAS","Amikacin"], answer:1},
  {section:6, q:"MDR-TB stands for:", options:["Minimally DR","Multidrug Resistant","Mutated DR","Mostly DR"], answer:1},
  {section:6, q:"MDR-TB defined as resistance to at least:", options:["Isoniazid only","Isoniazid + Rifampin","All first-line","Streptomycin+Pyrazinamide"], answer:1},
  {section:6, q:"XDR-TB stands for:", options:["Experimental","Extensively","Extremely","Exclusive"], answer:1},
  {section:6, q:"Drug-resistant TB emerges due to:", options:["Natural mutation","Incomplete treatment","BCG overuse","Genetics"], answer:1},

  // Section 7: Co-infection & Special Topics
  {section:7, q:"Why TB + HIV is deadly?", options:["HIV drugs inhibit TB","Half die, fuel each other","BCG dangerous","Both infect same cells"], answer:1},
  {section:7, q:"In AIDS patients, common mycobacterial disease is:", options:["M. leprae","M. tuberculosis","MAC","M. kansasii"], answer:2},

  // Section 8: M. leprae
  {section:8, q:"Optimal growth temp for M. leprae?", options:["37°C","30°C","25°C","42°C"], answer:1},
  {section:8, q:"M. leprae cultured on?", options:["Blood agar","L-J medium","Footpads of mice","Cell culture"], answer:2},
  {section:8, q:"Leprosy type with nodular lesions?", options:["Tuberculoid","Lepromatous","Primary","Secondary"], answer:1},
  {section:8, q:"Main transmission route for leprosy?", options:["Water","Insect","Respiratory","Sexual"], answer:2},

  // Section 9: NTM
  {section:9, q:"Virulence of NTM vs M. tuberculosis?", options:["Much less","More","Equal","Varies, mostly more"], answer:0},
  {section:9, q:"Why are NTM infections hard to treat?", options:["Always co-infected","Often resistant","Cannot culture","Replicate very fast"], answer:1},
];

let current = 0;
let score = 0;
let wrongAnswers = [];
let quizSubset = [...quiz];

const question = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const feedback = document.getElementById("feedback");
const scoreBox = document.getElementById("score");
const endSummary = document.getElementById("endSummary");
const finalScore = document.getElementById("finalScore");
const wrongList = document.getElementById("wrongList");

loadQuestion();

function loadQuestion() {
  feedback.innerText = "";
  optionsDiv.innerHTML = "";
  if(current >= quizSubset.length){
    showSummary();
    return;
  }

  question.innerText = quizSubset[current].q;

  quizSubset[current].options.forEach((opt,index)=>{
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.className="option";
    btn.onclick = ()=>{
      checkAnswer(index, btn);
    }
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(index, btn){
  if(index === quizSubset[current].answer){
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    wrongAnswers.push(quizSubset[current]);
  }
  scoreBox.innerText=`Score: ${score} / ${quizSubset.length}`;
  current++;
  setTimeout(loadQuestion, 600); // auto-next after 0.6