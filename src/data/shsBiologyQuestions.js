const biologyQuestions = [
  {
    question: "What is the basic unit of life?",
    options: ["Tissue", "Organ", "Cell", "Organism"],
    answer: "Cell"
  },
  {
    question: "The study of living organisms is known as:",
    options: ["Ecology", "Biochemistry", "Biology", "Anatomy"],
    answer: "Biology"
  },
  {
    question: "Which of the following is not a characteristic of living things?",
    options: ["Respiration", "Growth", "Reproduction", "Evaporation"],
    answer: "Evaporation"
  },
  {
    question: "Which instrument is used to observe cells?",
    options: ["Telescope", "Periscope", "Microscope", "Binoculars"],
    answer: "Microscope"
  },
  {
    question: "A group of similar cells performing the same function is called:",
    options: ["Organ", "Organism", "Tissue", "System"],
    answer: "Tissue"
  },
  {
    question: "What is the jelly-like substance inside a cell called?",
    options: ["Nucleus", "Cytoplasm", "Chloroplast", "Vacuole"],
    answer: "Cytoplasm"
  },
  {
    question: "Which part of the plant cell contains chlorophyll?",
    options: ["Vacuole", "Mitochondria", "Chloroplast", "Nucleus"],
    answer: "Chloroplast"
  },
  {
    question: "The control center of the cell is the:",
    options: ["Nucleus", "Cell membrane", "Cytoplasm", "Ribosome"],
    answer: "Nucleus"
  },
  {
    question: "Which of these is found in plant cells but not in animal cells?",
    options: ["Nucleus", "Cell wall", "Mitochondria", "Ribosomes"],
    answer: "Cell wall"
  },
  {
    question: "The structure that controls the movement of substances in and out of the cell is:",
    options: ["Nucleus", "Cell wall", "Cytoplasm", "Cell membrane"],
    answer: "Cell membrane"
  },
  {
    question: "Which cell organelle is responsible for energy production?",
    options: ["Chloroplast", "Mitochondrion", "Nucleus", "Vacuole"],
    answer: "Mitochondrion"
  },
  {
    question: "Which of the following is multicellular?",
    options: ["Amoeba", "Paramecium", "Human", "Euglena"],
    answer: "Human"
  },
  {
    question: "The outermost layer of a plant cell is the:",
    options: ["Cell wall", "Cell membrane", "Chloroplast", "Cytoplasm"],
    answer: "Cell wall"
  },
  {
    question: "Which cell structure is responsible for protein synthesis?",
    options: ["Ribosome", "Nucleus", "Vacuole", "Mitochondria"],
    answer: "Ribosome"
  },
  {
    question: "Living things respond to:",
    options: ["Light only", "Sound only", "Stimuli", "Water"],
    answer: "Stimuli"
  },
  {
    question: "Which of the following organisms is unicellular?",
    options: ["Fish", "Human", "Amoeba", "Insect"],
    answer: "Amoeba"
  },
  {
    question: "A cell that contains a nucleus is called:",
    options: ["Prokaryotic", "Eukaryotic", "Virus", "Bacterial"],
    answer: "Eukaryotic"
  },
  {
    question: "A virus is considered non-living because it:",
    options: ["Has DNA", "Reproduces only inside a host", "Has a protein coat", "Can mutate"],
    answer: "Reproduces only inside a host"
  },
  {
    question: "Organisms that make their own food are called:",
    options: ["Heterotrophs", "Carnivores", "Autotrophs", "Omnivores"],
    answer: "Autotrophs"
  },
  {
    question: "Which of these is not found in animal cells?",
    options: ["Vacuole", "Chloroplast", "Mitochondrion", "Nucleus"],
    answer: "Chloroplast"
  },
  {
    question: "Which of the following functions is not performed by all living organisms?",
    options: ["Movement", "Feeding", "Reproduction", "Singing"],
    answer: "Singing"
  },
  {
    question: "Which cell part is responsible for cell division?",
    options: ["Centrosome", "Vacuole", "Ribosome", "Cell wall"],
    answer: "Centrosome"
  },
  {
    question: "The smallest unit of classification of living organisms is:",
    options: ["Phylum", "Genus", "Species", "Family"],
    answer: "Species"
  },
  {
    question: "The liquid portion of the cytoplasm is called:",
    options: ["Matrix", "Stroma", "Cytosol", "Gel"],
    answer: "Cytosol"
  },
  {
    question: "Which organelle contains digestive enzymes?",
    options: ["Lysosome", "Chloroplast", "Mitochondrion", "Nucleus"],
    answer: "Lysosome"
  },

  // Continue up to 50
  {
    question: "What is the main function of the vacuole in plant cells?",
    options: ["Photosynthesis", "Respiration", "Storage", "Protein synthesis"],
    answer: "Storage"
  },
  {
    question: "What is the function of the nucleolus?",
    options: ["Controls cell activities", "Produces ribosomes", "Stores DNA", "Breaks down waste"],
    answer: "Produces ribosomes"
  },
  {
    question: "Which structure is selectively permeable?",
    options: ["Cell wall", "Nucleus", "Cell membrane", "Chloroplast"],
    answer: "Cell membrane"
  },
  {
    question: "Which cell structure is responsible for packaging proteins?",
    options: ["Ribosome", "Golgi body", "Nucleus", "Vacuole"],
    answer: "Golgi body"
  },
  {
    question: "The organelle that contains genetic material is the:",
    options: ["Mitochondrion", "Nucleus", "Chloroplast", "Vacuole"],
    answer: "Nucleus"
  },
  {
    question: "The process by which living things increase in size is:",
    options: ["Development", "Metabolism", "Growth", "Movement"],
    answer: "Growth"
  },
  {
    question: "The process by which living organisms produce energy is called:",
    options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
    answer: "Respiration"
  },
  {
    question: "Which of the following cell structures is not membrane-bound?",
    options: ["Mitochondria", "Ribosomes", "Nucleus", "Lysosomes"],
    answer: "Ribosomes"
  },
  {
    question: "Which part of the microscope holds the objective lenses?",
    options: ["Stage", "Base", "Nosepiece", "Eyepiece"],
    answer: "Nosepiece"
  },
  {
    question: "In scientific investigations, the factor that is changed is the:",
    options: ["Constant", "Control", "Variable", "Result"],
    answer: "Variable"
  },
  {
    question: "Which of these is not a tool used in Biology?",
    options: ["Bunsen burner", "Microscope", "Scalpel", "Beaker"],
    answer: "Bunsen burner"
  },
  {
    question: "Which term refers to the maintenance of a stable internal environment?",
    options: ["Photosynthesis", "Homeostasis", "Metabolism", "Osmosis"],
    answer: "Homeostasis"
  },
  {
    question: "Which organelle helps in the detoxification of harmful substances?",
    options: ["Smooth ER", "Rough ER", "Lysosome", "Chloroplast"],
    answer: "Smooth ER"
  },
  {
    question: "Living things take in materials from their environment for growth. This process is called:",
    options: ["Respiration", "Feeding", "Photosynthesis", "Excretion"],
    answer: "Feeding"
  },
  {
    question: "The process of removing metabolic waste from the body is known as:",
    options: ["Excretion", "Egestion", "Secretion", "Digestion"],
    answer: "Excretion"
  },
  {
    question: "Which cell component regulates what enters and leaves the nucleus?",
    options: ["Nuclear envelope", "Cell membrane", "Cytoplasm", "Nucleolus"],
    answer: "Nuclear envelope"
  },
  {
    question: "Which of the following is a non-living component in the ecosystem?",
    options: ["Fungus", "Bacteria", "Air", "Plant"],
    answer: "Air"
  },
  {
    question: "Living organisms need energy to:",
    options: ["Look pretty", "Breathe only", "Perform life processes", "Sleep"],
    answer: "Perform life processes"
  },
  {
    question: "All living organisms are made up of:",
    options: ["Atoms", "Cells", "Organs", "Systems"],
    answer: "Cells"
  },
  {
    question: "Which structure separates the inside of the cell from its environment?",
    options: ["Cell wall", "Plasma membrane", "Nucleus", "Cytoplasm"],
    answer: "Plasma membrane"
  },
  {
    question: "Which structure separates the inside of the cell from its environment?",
    options: ["Cell wall", "Plasma membrane", "Nucleus", "Cytoplasm"],
    answer: "Plasma membrane"
  },
  {
    question: "What is the role of mitochondria in cells?",
    options: ["Protein synthesis", "Cell division", "Energy production", "DNA replication"],
    answer: "Energy production"
  },
  {
    question: "The green pigment in chloroplasts is called:",
    options: ["Haemoglobin", "Chlorophyll", "Carotene", "Xanthophyll"],
    answer: "Chlorophyll"
  },
  {
    question: "Which part of a microscope is used to focus the image clearly?",
    options: ["Eyepiece", "Stage", "Coarse adjustment knob", "Objective lens"],
    answer: "Coarse adjustment knob"
  },
  {
    question: "Which organelle is abundant in liver cells due to its detoxifying role?",
    options: ["Golgi body", "Rough ER", "Smooth ER", "Chloroplast"],
    answer: "Smooth ER"
  },
  {
    question: "What is the correct order of organization in living organisms from simplest to most complex?",
    options: ["Organ – Tissue – Cell – System", "Cell – Tissue – Organ – System", "System – Organ – Cell – Tissue", "Tissue – System – Organ – Cell"],
    answer: "Cell – Tissue – Organ – System"
  },
  {
    question: "Which element is essential for the synthesis of chlorophyll in plants?",
    options: ["Iron", "Magnesium", "Potassium", "Nitrogen"],
    answer: "Magnesium"
  },
  {
    question: "What is the main transport tissue in plants responsible for moving water?",
    options: ["Xylem", "Phloem", "Cambium", "Parenchyma"],
    answer: "Xylem"
  },
  {
    question: "Which of the following is a product of anaerobic respiration in yeast?",
    options: ["Carbon dioxide and water", "Ethanol and carbon dioxide", "Lactic acid", "Oxygen and glucose"],
    answer: "Ethanol and carbon dioxide"
  },
  {
    question: "Which of these is excreted by the lungs?",
    options: ["Urea", "Oxygen", "Carbon dioxide", "Salt"],
    answer: "Carbon dioxide"
  },
  {
    question: "What term describes the maintenance of a stable internal environment?",
    options: ["Adaptation", "Homeostasis", "Irritability", "Assimilation"],
    answer: "Homeostasis"
  },
  {
    question: "Which of these bones is part of the axial skeleton?",
    options: ["Femur", "Humerus", "Skull", "Pelvis"],
    answer: "Skull"
  },
  {
    question: "The gap between two neurons is called the:",
    options: ["Axon", "Synapse", "Dendrite", "Node"],
    answer: "Synapse"
  },
{
  question: "What term describes the different forms of a gene?",
  options: ["Loci", "Alleles", "Chromosomes", "Traits"],
  answer: "Alleles"
},
{
  question: "The theory of natural selection was proposed by:",
  options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Watson and Crick"],
  answer: "Charles Darwin"
},
{
  question: "What is the primary source of energy in an ecosystem?",
  options: ["Green plants", "The sun", "Animals", "Water"],
  answer: "The sun"
},
{
  question: "A cactus has spines instead of leaves mainly to:",
  options: ["Trap water", "Protect from predators", "Reduce water loss", "Photosynthesize efficiently"],
  answer: "Reduce water loss"
},
{
  question: "Which of the following is a non-biodegradable pollutant?",
  options: ["Paper", "Vegetable peels", "Plastic", "Cotton"],
  answer: "Plastic"
},
{
  question: "Which of these traits shows discontinuous variation?",
  options: ["Height", "Skin color", "Tongue rolling", "Weight"],
  answer: "Tongue rolling"
},
{
  question: "Which disease is caused by a deficiency of insulin?",
  options: ["Malaria", "Diabetes", "HIV/AIDS", "Kwashiorkor"],
  answer: "Diabetes"
},
{
  question: "Which of the following is a modern application of biotechnology?",
  options: ["Vaccination", "Grafting", "Tissue culture", "Irrigation"],
  answer: "Tissue culture"
},
// Continuing the biologyQuestions array

// Nutrition in Plants and Animals
{
  question: "Which macronutrient is mainly responsible for energy supply in the human body?",
  options: ["Proteins", "Fats", "Carbohydrates", "Vitamins"],
  answer: "Carbohydrates"
},
{
  question: "In photosynthesis, the light-dependent reactions take place in the:",
  options: ["Cytoplasm", "Chloroplast stroma", "Thylakoid membranes", "Nucleus"],
  answer: "Thylakoid membranes"
},
{
  question: "A deficiency of Vitamin C in humans causes:",
  options: ["Night blindness", "Scurvy", "Rickets", "Kwashiorkor"],
  answer: "Scurvy"
},
{
  question: "Which enzyme breaks down proteins in the stomach?",
  options: ["Amylase", "Pepsin", "Lipase", "Trypsin"],
  answer: "Pepsin"
},
{
  question: "The organ where most absorption of digested food occurs is the:",
  options: ["Stomach", "Large intestine", "Small intestine", "Liver"],
  answer: "Small intestine"
},

// Transport in Plants and Animals
{
  question: "Which of these is not a component of blood?",
  options: ["Platelets", "Plasma", "Capillaries", "White blood cells"],
  answer: "Capillaries"
},
{
  question: "In plants, the phloem transports:",
  options: ["Water", "Minerals", "Hormones", "Sugars"],
  answer: "Sugars"
},
{
  question: "Which chamber of the heart pumps oxygenated blood to the body?",
  options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
  answer: "Left ventricle"
},
{
  question: "What structure prevents the backflow of blood in veins?",
  options: ["Valves", "Arteries", "Capillaries", "Muscles"],
  answer: "Valves"
},
{
  question: "Which blood cells are involved in fighting infections?",
  options: ["Red blood cells", "Platelets", "White blood cells", "Plasma"],
  answer: "White blood cells"
},

// Respiration
{
  question: "Which gas is released during aerobic respiration?",
  options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
  answer: "Carbon dioxide"
},
{
  question: "What is the main site of cellular respiration in a cell?",
  options: ["Nucleus", "Cytoplasm", "Ribosome", "Mitochondrion"],
  answer: "Mitochondrion"
},
{
  question: "The equation for aerobic respiration includes:",
  options: ["Glucose + oxygen ? energy + water + carbon dioxide", "Glucose ? lactic acid", "Starch + oxygen ? sugar", "Protein + water ? amino acids"],
  answer: "Glucose + oxygen ? energy + water + carbon dioxide"
},
{
  question: "Anaerobic respiration in muscles produces:",
  options: ["Alcohol", "Carbon dioxide", "Lactic acid", "Water"],
  answer: "Lactic acid"
},
{
  question: "Which of the following is an energy currency of the cell?",
  options: ["ATP", "DNA", "RNA", "NADH"],
  answer: "ATP"
},

// Excretion
{
  question: "The main excretory organ in humans is the:",
  options: ["Liver", "Lungs", "Kidney", "Heart"],
  answer: "Kidney"
},
{
  question: "Urea is formed in which organ?",
  options: ["Kidney", "Liver", "Skin", "Lungs"],
  answer: "Liver"
},
{
  question: "Which part of the kidney filters blood?",
  options: ["Ureter", "Loop of Henle", "Nephron", "Bladder"],
  answer: "Nephron"
},
{
  question: "Sweat glands excrete water and:",
  options: ["Proteins", "Salts", "Oxygen", "Bile"],
  answer: "Salts"
},
{
  question: "The process by which metabolic waste is removed from the body is called:",
  options: ["Egestion", "Osmosis", "Excretion", "Diffusion"],
  answer: "Excretion"
},

// Homeostasis
{
  question: "Which hormone helps to lower blood sugar levels?",
  options: ["Adrenaline", "Glucagon", "Insulin", "Thyroxine"],
  answer: "Insulin"
},
{
  question: "Which organ controls body temperature?",
  options: ["Liver", "Heart", "Hypothalamus", "Skin"],
  answer: "Hypothalamus"
},
{
  question: "Homeostasis is the maintenance of:",
  options: ["Internal balance", "Growth", "Cell division", "Body movement"],
  answer: "Internal balance"
},
{
  question: "In cold conditions, the body responds by:",
  options: ["Sweating", "Dilating blood vessels", "Shivering", "Producing insulin"],
  answer: "Shivering"
},
{
  question: "Which of these is NOT involved in homeostasis?",
  options: ["Skin", "Liver", "Brain", "Muscle"],
  answer: "Muscle"
},

// Support and Movement
{
  question: "Which of the following is an example of a hinge joint?",
  options: ["Shoulder", "Skull", "Elbow", "Hip"],
  answer: "Elbow"
},
{
  question: "What type of skeleton do insects have?",
  options: ["Endoskeleton", "Hydrostatic skeleton", "Exoskeleton", "Cartilage"],
  answer: "Exoskeleton"
},
{
  question: "Which connective tissue joins muscles to bones?",
  options: ["Ligament", "Cartilage", "Tendon", "Nerve"],
  answer: "Tendon"
},
{
  question: "What type of muscle is found in the heart?",
  options: ["Smooth muscle", "Voluntary muscle", "Cardiac muscle", "Skeletal muscle"],
  answer: "Cardiac muscle"
},
{
  question: "The vertebral column is part of the:",
  options: ["Appendicular skeleton", "Axial skeleton", "External skeleton", "None"],
  answer: "Axial skeleton"
},

// Coordination (Nervous and Endocrine Systems)
{
  question: "Which part of the brain controls voluntary movement?",
  options: ["Cerebellum", "Medulla", "Cerebrum", "Hypothalamus"],
  answer: "Cerebrum"
},
{
  question: "Which gland secretes growth hormone?",
  options: ["Pancreas", "Adrenal", "Pituitary", "Thyroid"],
  answer: "Pituitary"
},
{
  question: "Nerve impulses are transmitted by:",
  options: ["Hormones", "Nephrons", "Neurons", "Arteries"],
  answer: "Neurons"
},
{
  question: "Which structure carries impulses away from a neuron’s cell body?",
  options: ["Dendrite", "Axon", "Synapse", "Nucleus"],
  answer: "Axon"
},
{
  question: "Adrenaline prepares the body for:",
  options: ["Digestion", "Relaxation", "Fight or flight", "Growth"],
  answer: "Fight or flight"
},

// Reproduction in Plants and Animals
{
  question: "What is the male gamete in plants called?",
  options: ["Pollen grain", "Egg cell", "Anther", "Ovule"],
  answer: "Pollen grain"
},
{
  question: "Which of these is a form of asexual reproduction?",
  options: ["Fertilization", "Budding", "Pollination", "Copulation"],
  answer: "Budding"
},
{
  question: "Which hormone triggers ovulation in females?",
  options: ["FSH", "LH", "Estrogen", "Progesterone"],
  answer: "LH"
},
{
  question: "Which part of the flower develops into the fruit?",
  options: ["Ovule", "Ovary", "Style", "Petal"],
  answer: "Ovary"
},
{
  question: "Fertilization in humans occurs in the:",
  options: ["Ovary", "Uterus", "Fallopian tube", "Vagina"],
  answer: "Fallopian tube"
},
// Continuing the biologyQuestions array

// Genetics
{
  question: "What is the basic unit of heredity?",
  options: ["Gene", "Chromosome", "Nucleus", "DNA"],
  answer: "Gene"
},
{
  question: "A person with identical alleles for a trait is said to be:",
  options: ["Heterozygous", "Homozygous", "Dominant", "Recessive"],
  answer: "Homozygous"
},
{
  question: "What is the genotype of a person with two dominant alleles?",
  options: ["AA", "Aa", "aa", "AB"],
  answer: "AA"
},
{
  question: "Which of the following is not a sex-linked trait?",
  options: ["Color blindness", "Baldness", "Hemophilia", "Blood group"],
  answer: "Blood group"
},
{
  question: "The physical expression of a gene is known as:",
  options: ["Genotype", "Chromosome", "Phenotype", "Trait"],
  answer: "Phenotype"
},

// Evolution
{
  question: "Which scientist is most associated with the theory of natural selection?",
  options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Isaac Newton"],
  answer: "Charles Darwin"
},
{
  question: "Fossils provide evidence for:",
  options: ["Genetics", "Evolution", "Respiration", "Digestion"],
  answer: "Evolution"
},
{
  question: "The change in characteristics of a species over generations is called:",
  options: ["Photosynthesis", "Evolution", "Mutation", "Adaptation"],
  answer: "Evolution"
},
{
  question: "A structure that no longer serves its original function is:",
  options: ["Vestigial", "Adaptive", "Dominant", "Beneficial"],
  answer: "Vestigial"
},
{
  question: "The wing of a bird and the flipper of a whale are examples of:",
  options: ["Analogous structures", "Homologous structures", "Vestigial structures", "Mutated structures"],
  answer: "Homologous structures"
},

// Ecology
{
  question: "The natural home or environment of an organism is its:",
  options: ["Community", "Habitat", "Niche", "Territory"],
  answer: "Habitat"
},
{
  question: "A group of the same species living in an area is called a:",
  options: ["Community", "Population", "Habitat", "Ecosystem"],
  answer: "Population"
},
{
  question: "Which of the following is a biotic factor?",
  options: ["Temperature", "Sunlight", "Soil", "Predators"],
  answer: "Predators"
},
{
  question: "The ultimate source of energy in an ecosystem is the:",
  options: ["Sun", "Plants", "Soil", "Water"],
  answer: "Sun"
},
{
  question: "Which of the following is a decomposer?",
  options: ["Fungus", "Rabbit", "Snake", "Hawk"],
  answer: "Fungus"
},

// Pollution
{
  question: "Which gas is a major cause of acid rain?",
  options: ["Carbon dioxide", "Oxygen", "Sulphur dioxide", "Nitrogen"],
  answer: "Sulphur dioxide"
},
{
  question: "Water pollution can be caused by:",
  options: ["Excess rainfall", "Detergents", "Ozone", "Wind"],
  answer: "Detergents"
},
{
  question: "Oil spills in oceans affect:",
  options: ["Air pressure", "Marine life", "Volcanoes", "Soil formation"],
  answer: "Marine life"
},
{
  question: "Air pollution can lead to:",
  options: ["Improved visibility", "Respiratory problems", "Soil fertility", "Water clarity"],
  answer: "Respiratory problems"
},
{
  question: "Greenhouse gases contribute to:",
  options: ["Ozone formation", "Global warming", "Volcanic eruptions", "Earthquakes"],
  answer: "Global warming"
},

// Conservation
{
  question: "Which of these is a method of conserving wildlife?",
  options: ["Deforestation", "Poaching", "Game reserves", "Overfishing"],
  answer: "Game reserves"
},
{
  question: "Conservation helps to maintain:",
  options: ["Pollution", "Soil erosion", "Biodiversity", "Carbon dioxide"],
  answer: "Biodiversity"
},
{
  question: "One of the aims of conservation is to:",
  options: ["Destroy habitats", "Preserve natural resources", "Promote extinction", "Increase pollution"],
  answer: "Preserve natural resources"
},
{
  question: "Which of the following is a renewable natural resource?",
  options: ["Petroleum", "Coal", "Water", "Uranium"],
  answer: "Water"
},
{
  question: "What is the role of afforestation in conservation?",
  options: ["Depletes resources", "Improves air pollution", "Increases biodiversity", "Reduces plant life"],
  answer: "Increases biodiversity"
},

// Biotechnology
{
  question: "Which of the following is a product of biotechnology?",
  options: ["Baked bread", "Plastic bags", "Insulin", "Salt"],
  answer: "Insulin"
},
{
  question: "Genetically modified organisms (GMOs) are developed using:",
  options: ["Photosynthesis", "Breeding", "Genetic engineering", "Fertilization"],
  answer: "Genetic engineering"
},
{
  question: "Which microorganism is used in the production of alcohol?",
  options: ["Bacteria", "Mould", "Virus", "Yeast"],
  answer: "Yeast"
},
{
  question: "Biotechnology is applied in which of the following fields?",
  options: ["Mining", "Construction", "Medicine", "Astronomy"],
  answer: "Medicine"
},
{
  question: "Which process uses bacteria to break down waste in sewage treatment?",
  options: ["Filtration", "Fermentation", "Decomposition", "Neutralization"],
  answer: "Decomposition"
},

// Adaptation
{
  question: "Which adaptation helps desert plants reduce water loss?",
  options: ["Large leaves", "Thin cuticle", "Waxy cuticle", "Broad stomata"],
  answer: "Waxy cuticle"
},
{
  question: "Gills in fish are adapted for:",
  options: ["Feeding", "Swimming", "Excretion", "Breathing"],
  answer: "Breathing"
},
{
  question: "Camouflage is an example of:",
  options: ["Structural adaptation", "Behavioral adaptation", "Physiological adaptation", "Evolution"],
  answer: "Structural adaptation"
},
{
  question: "Which feature helps birds in flight?",
  options: ["Sharp claws", "Hollow bones", "Thick skin", "Blunt beak"],
  answer: "Hollow bones"
},
{
  question: "Plants that grow in salty environments are called:",
  options: ["Hydrophytes", "Xerophytes", "Halophytes", "Mesophytes"],
  answer: "Halophytes"
},
// Continuing biologyQuestions array

// Cell structure & function
{
  question: "Which of the following is found in plant cells but not in animal cells?",
  options: ["Mitochondrion", "Nucleus", "Cell wall", "Ribosome"],
  answer: "Cell wall"
},
{
  question: "The function of the nucleus is to:",
  options: ["Control cell activities", "Store food", "Produce energy", "Support the cell"],
  answer: "Control cell activities"
},
{
  question: "Which organelle is responsible for energy production?",
  options: ["Chloroplast", "Ribosome", "Mitochondrion", "Nucleolus"],
  answer: "Mitochondrion"
},
{
  question: "Which part of the cell controls the movement of substances in and out?",
  options: ["Cytoplasm", "Cell wall", "Nucleus", "Cell membrane"],
  answer: "Cell membrane"
},
{
  question: "The jelly-like substance in the cell where reactions occur is the:",
  options: ["Nucleus", "Cytoplasm", "Mitochondrion", "Chloroplast"],
  answer: "Cytoplasm"
},

// Levels of organization
{
  question: "The correct sequence of biological organization from smallest to largest is:",
  options: ["Cell ? Organ ? Tissue ? System", "Cell ? Tissue ? Organ ? System", "Tissue ? Cell ? System ? Organ", "System ? Organ ? Cell ? Tissue"],
  answer: "Cell ? Tissue ? Organ ? System"
},
{
  question: "Which of the following is a tissue?",
  options: ["Skin", "Muscle", "Heart", "Stomach"],
  answer: "Muscle"
},
{
  question: "Several organs working together form a:",
  options: ["Tissue", "Cell", "System", "Organ"],
  answer: "System"
},
{
  question: "Which of these is an organ in the human body?",
  options: ["Muscle", "Blood", "Liver", "Neuron"],
  answer: "Liver"
},
{
  question: "A collection of similar cells performing a specific function is called:",
  options: ["System", "Tissue", "Organ", "Organism"],
  answer: "Tissue"
},

// Classification of living things
{
  question: "Which kingdom contains organisms like moulds and mushrooms?",
  options: ["Plantae", "Fungi", "Animalia", "Protista"],
  answer: "Fungi"
},
{
  question: "Which of these is a characteristic of vertebrates?",
  options: ["No backbone", "Presence of gills", "Backbone", "Exoskeleton"],
  answer: "Backbone"
},
{
  question: "Which group of vertebrates lays eggs and has moist skin?",
  options: ["Reptiles", "Mammals", "Amphibians", "Birds"],
  answer: "Amphibians"
},
{
  question: "The two main groups of plants are:",
  options: ["Algae and fungi", "Mosses and ferns", "Seedless and flowering", "Non-flowering and flowering"],
  answer: "Non-flowering and flowering"
},
{
  question: "An animal without a backbone is called a(n):",
  options: ["Insect", "Vertebrate", "Arthropod", "Invertebrate"],
  answer: "Invertebrate"
},

// Nutrition
{
  question: "The process by which green plants make their food is:",
  options: ["Respiration", "Digestion", "Photosynthesis", "Transpiration"],
  answer: "Photosynthesis"
},
{
  question: "Which of the following is not a class of food?",
  options: ["Carbohydrates", "Proteins", "Vitamins", "Water vapour"],
  answer: "Water vapour"
},
{
  question: "Which vitamin helps in blood clotting?",
  options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
  answer: "Vitamin K"
},
{
  question: "An example of a food rich in protein is:",
  options: ["Rice", "Milk", "Orange", "Cassava"],
  answer: "Milk"
},
{
  question: "Which mineral is essential for strong bones and teeth?",
  options: ["Iron", "Calcium", "Zinc", "Iodine"],
  answer: "Calcium"
},

// Transport
{
  question: "What is the function of red blood cells?",
  options: ["To fight diseases", "To carry oxygen", "To transport waste", "To clot blood"],
  answer: "To carry oxygen"
},
{
  question: "In plants, water moves from roots to leaves through the:",
  options: ["Phloem", "Stomata", "Xylem", "Chloroplast"],
  answer: "Xylem"
},
{
  question: "Which component of blood helps in clotting?",
  options: ["White blood cells", "Plasma", "Red blood cells", "Platelets"],
  answer: "Platelets"
},
{
  question: "The heart is part of the:",
  options: ["Digestive system", "Respiratory system", "Circulatory system", "Nervous system"],
  answer: "Circulatory system"
},
{
  question: "Which blood vessel carries blood from the heart to the body?",
  options: ["Vein", "Artery", "Capillary", "Ventricle"],
  answer: "Artery"
},

// Excretion
{
  question: "Excretion is the removal of:",
  options: ["Undigested food", "Useless waste products", "Sweat", "Carbon dioxide only"],
  answer: "Useless waste products"
},
{
  question: "Which organ excretes urea from the body?",
  options: ["Liver", "Kidney", "Lung", "Heart"],
  answer: "Kidney"
},
{
  question: "Which of these is an excretory product in humans?",
  options: ["Glucose", "Urea", "Protein", "Oxygen"],
  answer: "Urea"
},
{
  question: "The lungs remove which waste product?",
  options: ["Carbon dioxide", "Urea", "Sweat", "Saliva"],
  answer: "Carbon dioxide"
},
{
  question: "The skin helps in excretion through the removal of:",
  options: ["Saliva", "Urine", "Sweat", "Tears"],
  answer: "Sweat"
},

// Growth
{
  question: "Growth in living things is usually accompanied by:",
  options: ["Decrease in size", "Cell multiplication", "Energy loss", "Change in color"],
  answer: "Cell multiplication"
},
{
  question: "The hormone responsible for growth in plants is called:",
  options: ["Adrenaline", "Gibberellin", "Auxin", "Insulin"],
  answer: "Auxin"
},
{
  question: "Growth in animals occurs through:",
  options: ["Cell expansion", "Increase in cell number", "Water absorption", "Respiration"],
  answer: "Increase in cell number"
},
{
  question: "Which part of a plant continues to grow throughout its life?",
  options: ["Flower", "Fruit", "Root tip", "Leaf"],
  answer: "Root tip"
},
{
  question: "Which of the following is NOT a condition necessary for germination?",
  options: ["Light", "Water", "Oxygen", "Temperature"],
  answer: "Light"
},
// Part 5 - SHS 2 Biology Questions (Questions 177-211)

// Reproduction
{
  question: "Which organ in the female reproductive system produces eggs?",
  options: ["Ovary", "Uterus", "Fallopian tube", "Vagina"],
  answer: "Ovary"
},
{
  question: "The process by which plants produce seeds is called:",
  options: ["Pollination", "Fertilization", "Germination", "Photosynthesis"],
  answer: "Fertilization"
},
{
  question: "In humans, fertilization usually takes place in the:",
  options: ["Ovary", "Uterus", "Fallopian tube", "Vagina"],
  answer: "Fallopian tube"
},
{
  question: "Which of the following is a characteristic of asexual reproduction?",
  options: ["Involves gametes", "Produces genetically identical offspring", "Requires two parents", "Increases genetic variation"],
  answer: "Produces genetically identical offspring"
},
{
  question: "The male reproductive cell is called:",
  options: ["Sperm", "Egg", "Zygote", "Embryo"],
  answer: "Sperm"
},

// Respiration
{
  question: "Which gas is required for respiration?",
  options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  answer: "Oxygen"
},
{
  question: "The main site of aerobic respiration in cells is the:",
  options: ["Chloroplast", "Mitochondrion", "Nucleus", "Ribosome"],
  answer: "Mitochondrion"
},
{
  question: "Anaerobic respiration produces which gas?",
  options: ["Oxygen", "Carbon dioxide", "Methane", "Lactic acid"],
  answer: "Lactic acid"
},
{
  question: "The by-products of aerobic respiration are:",
  options: ["Oxygen and glucose", "Carbon dioxide and water", "Nitrogen and water", "Methane and oxygen"],
  answer: "Carbon dioxide and water"
},
{
  question: "In humans, the respiratory organ is the:",
  options: ["Kidney", "Lung", "Heart", "Stomach"],
  answer: "Lung"
},

// Photosynthesis
{
  question: "Which pigment absorbs light for photosynthesis?",
  options: ["Chlorophyll", "Carotene", "Xanthophyll", "Hemoglobin"],
  answer: "Chlorophyll"
},
{
  question: "Photosynthesis mainly takes place in the:",
  options: ["Roots", "Stem", "Leaves", "Flowers"],
  answer: "Leaves"
},
{
  question: "Which gas is released during photosynthesis?",
  options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"],
  answer: "Oxygen"
},
{
  question: "The raw materials for photosynthesis are:",
  options: ["Water and carbon dioxide", "Oxygen and glucose", "Nitrogen and water", "Glucose and oxygen"],
  answer: "Water and carbon dioxide"
},
{
  question: "Photosynthesis occurs in which cell organelle?",
  options: ["Chloroplast", "Mitochondrion", "Nucleus", "Ribosome"],
  answer: "Chloroplast"
},

// Genetics
{
  question: "The physical appearance of an organism is called its:",
  options: ["Genotype", "Phenotype", "Chromosome", "Allele"],
  answer: "Phenotype"
},
{
  question: "Genes are located on:",
  options: ["Mitochondria", "Chromosomes", "Ribosomes", "Cell membrane"],
  answer: "Chromosomes"
},
{
  question: "An organism with two identical alleles for a trait is said to be:",
  options: ["Homozygous", "Heterozygous", "Dominant", "Recessive"],
  answer: "Homozygous"
},
{
  question: "The term for different forms of a gene is:",
  options: ["Allele", "Chromosome", "DNA", "Trait"],
  answer: "Allele"
},
{
  question: "In humans, the sex chromosomes are:",
  options: ["XY for male and XX for female", "XX for male and XY for female", "YY for male and XX for female", "XX for male and YY for female"],
  answer: "XY for male and XX for female"
},

// Ecology
{
  question: "Which of these is a producer in a food chain?",
  options: ["Grass", "Rabbit", "Lion", "Snake"],
  answer: "Grass"
},
{
  question: "An organism that feeds on dead plants and animals is called a:",
  options: ["Producer", "Consumer", "Decomposer", "Herbivore"],
  answer: "Decomposer"
},
{
  question: "Which of the following is an example of a herbivore?",
  options: ["Lion", "Cow", "Wolf", "Snake"],
  answer: "Cow"
},
{
  question: "The interaction where both organisms benefit is called:",
  options: ["Parasitism", "Mutualism", "Commensalism", "Predation"],
  answer: "Mutualism"
},
{
  question: "Which of these is a non-living component of the environment?",
  options: ["Water", "Plants", "Animals", "Fungi"],
  answer: "Water"
},
// Part 6 - SHS 2 Biology Questions (Questions 212-246)

// Nutrition
{
  question: "Which nutrient is the main source of energy for the body?",
  options: ["Protein", "Carbohydrate", "Fat", "Vitamins"],
  answer: "Carbohydrate"
},
{
  question: "Which vitamin is essential for blood clotting?",
  options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
  answer: "Vitamin K"
},
{
  question: "The process of breaking down food into simpler forms is called:",
  options: ["Digestion", "Absorption", "Assimilation", "Excretion"],
  answer: "Digestion"
},
{
  question: "Which organ produces bile?",
  options: ["Pancreas", "Liver", "Stomach", "Small intestine"],
  answer: "Liver"
},
{
  question: "The nutrient responsible for growth and repair is:",
  options: ["Protein", "Carbohydrate", "Fat", "Minerals"],
  answer: "Protein"
},

// Transport
{
  question: "The main function of red blood cells is to:",
  options: ["Fight infections", "Carry oxygen", "Clot blood", "Produce hormones"],
  answer: "Carry oxygen"
},
{
  question: "Which blood vessel carries blood away from the heart?",
  options: ["Vein", "Artery", "Capillary", "Lymph vessel"],
  answer: "Artery"
},
{
  question: "The liquid part of the blood is called:",
  options: ["Plasma", "Platelets", "Red blood cells", "White blood cells"],
  answer: "Plasma"
},
{
  question: "Which organ pumps blood around the body?",
  options: ["Lung", "Kidney", "Heart", "Liver"],
  answer: "Heart"
},
{
  question: "Capillaries connect:",
  options: ["Veins and arteries", "Arteries and veins", "Arteries and capillaries", "Veins and capillaries"],
  answer: "Arteries and veins"
},

// Excretion
{
  question: "The main excretory organ in humans is the:",
  options: ["Lung", "Skin", "Kidney", "Liver"],
  answer: "Kidney"
},
{
  question: "The functional unit of the kidney is the:",
  options: ["Nephron", "Neuron", "Alveolus", "Nephrite"],
  answer: "Nephron"
},
{
  question: "Which of these is not an excretory product?",
  options: ["Urea", "Carbon dioxide", "Water", "Glucose"],
  answer: "Glucose"
},
{
  question: "Sweat glands help in the removal of:",
  options: ["Urea", "Water", "Salt", "All of the above"],
  answer: "All of the above"
},
{
  question: "The tube that carries urine from the kidney to the bladder is the:",
  options: ["Ureter", "Urethra", "Renal vein", "Renal artery"],
  answer: "Ureter"
},

// Coordination and Response
{
  question: "The basic unit of the nervous system is the:",
  options: ["Neuron", "Axon", "Dendrite", "Synapse"],
  answer: "Neuron"
},
{
  question: "Which part of the brain controls voluntary movement?",
  options: ["Cerebrum", "Cerebellum", "Medulla", "Spinal cord"],
  answer: "Cerebrum"
},
{
  question: "Reflex actions are controlled by the:",
  options: ["Brain", "Spinal cord", "Medulla", "Cerebellum"],
  answer: "Spinal cord"
},
{
  question: "The chemical messengers released by glands are called:",
  options: ["Neurotransmitters", "Hormones", "Enzymes", "Antibodies"],
  answer: "Hormones"
},
{
  question: "The part of the eye that controls the amount of light entering is the:",
  options: ["Cornea", "Pupil", "Iris", "Retina"],
  answer: "Iris"
},

// Microorganisms and Disease
{
  question: "Bacteria that cause disease are called:",
  options: ["Pathogens", "Producers", "Consumers", "Decomposers"],
  answer: "Pathogens"
},
{
  question: "Malaria is caused by a:",
  options: ["Bacterium", "Virus", "Protozoan", "Fungus"],
  answer: "Protozoan"
},
{
  question: "Vaccination is used to:",
  options: ["Treat diseases", "Prevent diseases", "Cause diseases", "Diagnose diseases"],
  answer: "Prevent diseases"
},
{
  question: "Which microorganism is used in baking?",
  options: ["Bacteria", "Yeast", "Virus", "Protozoa"],
  answer: "Yeast"
},
{
  question: "The disease caused by lack of vitamin C is:",
  options: ["Rickets", "Scurvy", "Anemia", "Beriberi"],
  answer: "Scurvy"
},
// Part 7 - SHS 2 Biology Questions (Questions 247-281)

// Reproduction
{
  question: "The site of implantation of the fertilized egg in humans is the:",
  options: ["Ovary", "Uterus", "Fallopian tube", "Vagina"],
  answer: "Uterus"
},
{
  question: "The hormone responsible for the development of male secondary sexual characteristics is:",
  options: ["Estrogen", "Testosterone", "Progesterone", "Insulin"],
  answer: "Testosterone"
},
{
  question: "Which structure carries sperm from the testes to the urethra?",
  options: ["Vas deferens", "Fallopian tube", "Epididymis", "Ureter"],
  answer: "Vas deferens"
},
{
  question: "The female hormone that prepares the uterus for pregnancy is:",
  options: ["Estrogen", "Progesterone", "Testosterone", "Oxytocin"],
  answer: "Progesterone"
},
{
  question: "The release of the egg from the ovary is called:",
  options: ["Fertilization", "Ovulation", "Menstruation", "Gestation"],
  answer: "Ovulation"
},

// Nutrition
{
  question: "Which nutrient deficiency causes anemia?",
  options: ["Vitamin A", "Iron", "Calcium", "Vitamin C"],
  answer: "Iron"
},
{
  question: "Fats in the diet provide:",
  options: ["Energy storage", "Protection of organs", "Insulation", "All of the above"],
  answer: "All of the above"
},
{
  question: "The enzyme responsible for breaking down starch in the mouth is:",
  options: ["Amylase", "Lipase", "Protease", "Maltase"],
  answer: "Amylase"
},
{
  question: "Where does most nutrient absorption take place in the human digestive system?",
  options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
  answer: "Small intestine"
},
{
  question: "Vitamin D is essential for the absorption of:",
  options: ["Iron", "Calcium", "Protein", "Carbohydrates"],
  answer: "Calcium"
},

// Transport
{
  question: "White blood cells are important for:",
  options: ["Clotting", "Transporting oxygen", "Fighting infections", "Carrying nutrients"],
  answer: "Fighting infections"
},
{
  question: "The heartbeat is controlled by:",
  options: ["Pacemaker", "Brain", "Lungs", "Kidney"],
  answer: "Pacemaker"
},
{
  question: "Blood pressure is highest in the:",
  options: ["Veins", "Arteries", "Capillaries", "Heart chambers"],
  answer: "Arteries"
},
{
  question: "Platelets are responsible for:",
  options: ["Transporting oxygen", "Blood clotting", "Fighting infection", "Carrying nutrients"],
  answer: "Blood clotting"
},
{
  question: "The valve between the left atrium and left ventricle is the:",
  options: ["Tricuspid valve", "Bicuspid valve", "Pulmonary valve", "Aortic valve"],
  answer: "Bicuspid valve"
},

// Excretion
{
  question: "The process of filtering blood in the kidney occurs in the:",
  options: ["Nephron", "Renal cortex", "Renal pelvis", "Ureter"],
  answer: "Nephron"
},
{
  question: "Which part of the brain controls water balance in the body?",
  options: ["Hypothalamus", "Medulla", "Cerebrum", "Cerebellum"],
  answer: "Hypothalamus"
},
{
  question: "The urine passes out of the body through the:",
  options: ["Ureter", "Urethra", "Bladder", "Kidney"],
  answer: "Urethra"
},
{
  question: "Excess amino acids are converted into:",
  options: ["Glucose", "Fat", "Urea", "Protein"],
  answer: "Urea"
},
{
  question: "Kidney failure results in the accumulation of:",
  options: ["Oxygen", "Carbon dioxide", "Urea", "Glucose"],
  answer: "Urea"
},

// Coordination and Response
{
  question: "The gap between two neurons is called the:",
  options: ["Synapse", "Axon", "Dendrite", "Nucleus"],
  answer: "Synapse"
},
{
  question: "The reflex action helps to:",
  options: ["Protect the body from harm", "Control voluntary actions", "Regulate hormones", "Digest food"],
  answer: "Protect the body from harm"
},
{
  question: "The part of the brain responsible for balance is the:",
  options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
  answer: "Cerebellum"
},
{
  question: "The receptor for sound is located in the:",
  options: ["Eye", "Ear", "Nose", "Tongue"],
  answer: "Ear"
},
{
  question: "Hormones are secreted by:",
  options: ["Nerves", "Glands", "Muscles", "Bones"],
  answer: "Glands"
},
// Part 8 - SHS 2 Biology Questions (Questions 282-316)

// Reproduction
{
  question: "Which part of the female reproductive system produces eggs?",
  options: ["Ovary", "Uterus", "Vagina", "Fallopian tube"],
  answer: "Ovary"
},
{
  question: "The hormone that triggers labor contractions is:",
  options: ["Oxytocin", "Testosterone", "Estrogen", "Progesterone"],
  answer: "Oxytocin"
},
{
  question: "The process of fusion of male and female gametes is called:",
  options: ["Fertilization", "Pollination", "Germination", "Meiosis"],
  answer: "Fertilization"
},
{
  question: "The placenta is responsible for:",
  options: ["Nourishing the fetus", "Producing sperm", "Producing eggs", "Triggering menstruation"],
  answer: "Nourishing the fetus"
},
{
  question: "The menstrual cycle typically lasts about:",
  options: ["7 days", "14 days", "28 days", "35 days"],
  answer: "28 days"
},

// Nutrition
{
  question: "Scurvy results from deficiency of which vitamin?",
  options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  answer: "Vitamin C"
},
{
  question: "Which nutrient is important for bone development?",
  options: ["Calcium", "Iron", "Vitamin C", "Carbohydrate"],
  answer: "Calcium"
},
{
  question: "Enzymes that digest proteins are called:",
  options: ["Lipases", "Proteases", "Amylases", "Maltases"],
  answer: "Proteases"
},
{
  question: "The large intestine is mainly responsible for:",
  options: ["Absorption of nutrients", "Water absorption", "Protein digestion", "Fat digestion"],
  answer: "Water absorption"
},
{
  question: "Which vitamin is produced by the skin in the presence of sunlight?",
  options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  answer: "Vitamin D"
},

// Transport
{
  question: "The left side of the heart pumps blood to the:",
  options: ["Lungs", "Body", "Kidneys", "Brain"],
  answer: "Body"
},
{
  question: "Veins carry blood:",
  options: ["Away from the heart", "To the heart", "Between organs", "To the lungs only"],
  answer: "To the heart"
},
{
  question: "Which component of blood helps in clotting?",
  options: ["Plasma", "Red blood cells", "Platelets", "White blood cells"],
  answer: "Platelets"
},
{
  question: "The largest artery in the human body is the:",
  options: ["Pulmonary artery", "Carotid artery", "Aorta", "Femoral artery"],
  answer: "Aorta"
},
{
  question: "The blood vessels where exchange of gases takes place are:",
  options: ["Arteries", "Veins", "Capillaries", "Lymph vessels"],
  answer: "Capillaries"
},

// Excretion
{
  question: "The urinary bladder stores:",
  options: ["Urine", "Blood", "Bile", "Sweat"],
  answer: "Urine"
},
{
  question: "The kidney filters waste from the:",
  options: ["Blood", "Lymph", "Urine", "Air"],
  answer: "Blood"
},
{
  question: "Which organ excretes carbon dioxide?",
  options: ["Skin", "Liver", "Lungs", "Kidney"],
  answer: "Lungs"
},
{
  question: "Water balance in the body is regulated mainly by:",
  options: ["Kidney", "Liver", "Heart", "Lungs"],
  answer: "Kidney"
},
{
  question: "The functional filtration unit of the kidney is the:",
  options: ["Neuron", "Nephron", "Alveolus", "Nephritis"],
  answer: "Nephron"
},

// Coordination and Response
{
  question: "The brain region responsible for memory and reasoning is the:",
  options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
  answer: "Cerebrum"
},
{
  question: "The sensory receptors for taste are located on the:",
  options: ["Tongue", "Skin", "Nose", "Ear"],
  answer: "Tongue"
},
{
  question: "The autonomic nervous system controls:",
  options: ["Voluntary actions", "Involuntary actions", "Reflexes", "Muscle contractions"],
  answer: "Involuntary actions"
},
{
  question: "The spinal cord is protected by the:",
  options: ["Skull", "Vertebral column", "Rib cage", "Pelvis"],
  answer: "Vertebral column"
},
{
  question: "Hormones affect target organs by:",
  options: ["Direct nerve impulses", "Binding to receptors", "Changing DNA", "Increasing body temperature"],
  answer: "Binding to receptors"
},
// Part 9 - SHS 2 Biology Questions (Questions 317-351)

// Reproduction
{
  question: "Sperms mature and are stored in the:",
  options: ["Testes", "Vas deferens", "Epididymis", "Urethra"],
  answer: "Epididymis"
},
{
  question: "Which of the following is NOT a function of the placenta?",
  options: ["Nutrient exchange", "Waste removal", "Gas exchange", "Production of sperm"],
  answer: "Production of sperm"
},
{
  question: "The hormone responsible for milk production is:",
  options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
  answer: "Prolactin"
},
{
  question: "The human egg is fertilized in the:",
  options: ["Ovary", "Fallopian tube", "Uterus", "Vagina"],
  answer: "Fallopian tube"
},
{
  question: "The external male reproductive organ is the:",
  options: ["Testes", "Penis", "Scrotum", "Prostate gland"],
  answer: "Penis"
},

// Nutrition
{
  question: "Proteins are made up of:",
  options: ["Amino acids", "Fatty acids", "Simple sugars", "Vitamins"],
  answer: "Amino acids"
},
{
  question: "Which vitamin is essential for blood clotting?",
  options: ["Vitamin K", "Vitamin A", "Vitamin D", "Vitamin C"],
  answer: "Vitamin K"
},
{
  question: "The enzyme lipase breaks down:",
  options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
  answer: "Fats"
},
{
  question: "The digestion of proteins begins in the:",
  options: ["Mouth", "Stomach", "Small intestine", "Large intestine"],
  answer: "Stomach"
},
{
  question: "The main function of dietary fiber is to:",
  options: ["Provide energy", "Aid digestion", "Build muscles", "Regulate blood sugar"],
  answer: "Aid digestion"
},

// Transport
{
  question: "The pulmonary artery carries blood:",
  options: ["From heart to lungs", "From lungs to heart", "From heart to body", "From body to heart"],
  answer: "From heart to lungs"
},
{
  question: "Red blood cells contain:",
  options: ["Chlorophyll", "Hemoglobin", "Myoglobin", "Insulin"],
  answer: "Hemoglobin"
},
{
  question: "Which blood vessel has valves to prevent backflow?",
  options: ["Arteries", "Veins", "Capillaries", "Venules"],
  answer: "Veins"
},
{
  question: "The part of the heart that receives oxygenated blood is the:",
  options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
  answer: "Left atrium"
},
{
  question: "The liquid part of blood is called:",
  options: ["Plasma", "Serum", "Lymph", "Platelets"],
  answer: "Plasma"
},

// Excretion
{
  question: "The skin excretes waste through:",
  options: ["Sweat glands", "Sebaceous glands", "Hair follicles", "Nails"],
  answer: "Sweat glands"
},
{
  question: "The kidneys are located in the:",
  options: ["Abdominal cavity", "Thoracic cavity", "Pelvic cavity", "Cranial cavity"],
  answer: "Abdominal cavity"
},
{
  question: "Excess water is removed from the body by the:",
  options: ["Lungs", "Kidneys", "Liver", "Skin"],
  answer: "Kidneys"
},
{
  question: "The excretory product of plants is:",
  options: ["Oxygen", "Carbon dioxide", "Latex", "All of the above"],
  answer: "All of the above"
},
{
  question: "The ureter connects the kidney to the:",
  options: ["Bladder", "Urethra", "Liver", "Heart"],
  answer: "Bladder"
},

// Coordination and Response
{
  question: "The longest part of a neuron is the:",
  options: ["Axon", "Dendrite", "Synapse", "Cell body"],
  answer: "Axon"
},
{
  question: "The nervous system is made up of the brain, spinal cord, and:",
  options: ["Nerves", "Muscles", "Bones", "Hormones"],
  answer: "Nerves"
},
{
  question: "The reflex action is controlled by the:",
  options: ["Spinal cord", "Brain", "Cerebellum", "Medulla"],
  answer: "Spinal cord"
},
{
  question: "The receptors that detect light are located in the:",
  options: ["Ear", "Skin", "Eye", "Nose"],
  answer: "Eye"
},
{
  question: "The chemical messengers that regulate body functions are called:",
  options: ["Enzymes", "Hormones", "Neurotransmitters", "Antibodies"],
  answer: "Hormones"
},
// Part 10 - SHS 2 Biology Questions (Questions 352-401)

// Reproduction
{
  question: "The process by which pollen grains land on the stigma is called:",
  options: ["Fertilization", "Pollination", "Germination", "Fertilizer"],
  answer: "Pollination"
},
{
  question: "Which hormone maintains the uterine lining during pregnancy?",
  options: ["Estrogen", "Progesterone", "Testosterone", "Oxytocin"],
  answer: "Progesterone"
},
{
  question: "The part of the sperm that contains enzymes to penetrate the egg is the:",
  options: ["Midpiece", "Head", "Tail", "Acrosome"],
  answer: "Acrosome"
},
{
  question: "Which structure connects the ovary to the uterus?",
  options: ["Fallopian tube", "Vagina", "Cervix", "Ureter"],
  answer: "Fallopian tube"
},
{
  question: "Ovulation occurs approximately on day:",
  options: ["7", "14", "21", "28"],
  answer: "14"
},

// Nutrition
{
  question: "Carbohydrates are mainly broken down by the enzyme:",
  options: ["Amylase", "Lipase", "Protease", "Maltase"],
  answer: "Amylase"
},
{
  question: "Which vitamin is important for night vision?",
  options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  answer: "Vitamin A"
},
{
  question: "Minerals such as iron are important for:",
  options: ["Oxygen transport", "Energy storage", "Nerve transmission", "Muscle contraction"],
  answer: "Oxygen transport"
},
{
  question: "The process of breaking down food into simpler substances is:",
  options: ["Digestion", "Respiration", "Photosynthesis", "Excretion"],
  answer: "Digestion"
},
{
  question: "The organ where most absorption of nutrients occurs is the:",
  options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
  answer: "Small intestine"
},

// Transport
{
  question: "The vena cava carries blood to the:",
  options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
  answer: "Right atrium"
},
{
  question: "Oxygen is carried in the blood mainly by:",
  options: ["Plasma", "Red blood cells", "White blood cells", "Platelets"],
  answer: "Red blood cells"
},
{
  question: "The thick muscular wall of the heart is called the:",
  options: ["Myocardium", "Endocardium", "Epicardium", "Pericardium"],
  answer: "Myocardium"
},
{
  question: "Capillaries connect:",
  options: ["Arteries to veins", "Veins to arteries", "Arteries to arteries", "Veins to veins"],
  answer: "Arteries to veins"
},
{
  question: "The lymphatic system helps to:",
  options: ["Transport oxygen", "Fight infections", "Digest food", "Control blood pressure"],
  answer: "Fight infections"
},

// Excretion
{
  question: "The main nitrogenous waste in humans is:",
  options: ["Urea", "Ammonia", "Uric acid", "Carbon dioxide"],
  answer: "Urea"
},
{
  question: "Which part of the nephron is responsible for filtration?",
  options: ["Bowman’s capsule", "Loop of Henle", "Collecting duct", "Distal tubule"],
  answer: "Bowman’s capsule"
},
{
  question: "The skin excretes waste mainly in the form of:",
  options: ["Sweat", "Urine", "Carbon dioxide", "Feces"],
  answer: "Sweat"
},
{
  question: "Excess salts are mainly removed by the:",
  options: ["Kidneys", "Liver", "Skin", "Lungs"],
  answer: "Kidneys"
},
{
  question: "Which organ produces bile to help digest fats?",
  options: ["Liver", "Pancreas", "Gall bladder", "Kidney"],
  answer: "Liver"
},

// Coordination and Response
{
  question: "Neurons transmit impulses by:",
  options: ["Chemical and electrical signals", "Only chemical signals", "Only electrical signals", "Magnetic signals"],
  answer: "Chemical and electrical signals"
},
{
  question: "The cerebellum controls:",
  options: ["Balance and coordination", "Memory", "Speech", "Breathing"],
  answer: "Balance and coordination"
},
{
  question: "The gap between two neurons is called the:",
  options: ["Synapse", "Axon", "Dendrite", "Myelin sheath"],
  answer: "Synapse"
},
{
  question: "The peripheral nervous system includes:",
  options: ["Cranial and spinal nerves", "Brain and spinal cord", "Muscles", "Bones"],
  answer: "Cranial and spinal nerves"
},
{
  question: "Reflex actions are:",
  options: ["Voluntary", "Involuntary", "Learned", "Complex"],
  answer: "Involuntary"
},

// Additional Questions Across Topics
{
  question: "The basic unit of life is the:",
  options: ["Cell", "Tissue", "Organ", "Organ system"],
  answer: "Cell"
},
{
  question: "Which organelle is known as the powerhouse of the cell?",
  options: ["Mitochondrion", "Ribosome", "Nucleus", "Chloroplast"],
  answer: "Mitochondrion"
},
{
  question: "Photosynthesis takes place in the:",
  options: ["Chloroplast", "Mitochondrion", "Nucleus", "Ribosome"],
  answer: "Chloroplast"
},
{
  question: "Green plants store food as:",
  options: ["Starch", "Glucose", "Protein", "Fat"],
  answer: "Starch"
},
{
  question: "Which gas is essential for photosynthesis?",
  options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  answer: "Carbon dioxide"
},
{
  question: "Which blood group is known as the universal donor?",
  options: ["O", "A", "B", "AB"],
  answer: "O"
},
{
  question: "The hormone insulin is produced by the:",
  options: ["Pancreas", "Liver", "Adrenal gland", "Thyroid"],
  answer: "Pancreas"
},
{
  question: "In genetics, a visible characteristic is called a:",
  options: ["Phenotype", "Genotype", "Allele", "Chromosome"],
  answer: "Phenotype"
},
{
  question: "The basic building blocks of proteins are:",
  options: ["Amino acids", "Fatty acids", "Nucleotides", "Monosaccharides"],
  answer: "Amino acids"
},
{
  question: "The process by which organisms produce offspring is:",
  options: ["Reproduction", "Respiration", "Excretion", "Nutrition"],
  answer: "Reproduction"
},
{
  question: "The smallest blood vessels in the body are:",
  options: ["Capillaries", "Arteries", "Veins", "Venules"],
  answer: "Capillaries"
},
{
  question: "Which vitamin deficiency causes rickets?",
  options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B12"],
  answer: "Vitamin D"
},
{
  question: "The function of red blood cells is to:",
  options: ["Transport oxygen", "Fight infection", "Clot blood", "Produce hormones"],
  answer: "Transport oxygen"
},
{
  question: "Which part of the brain controls breathing?",
  options: ["Medulla", "Cerebrum", "Cerebellum", "Hypothalamus"],
  answer: "Medulla"
},
{
  question: "Plants lose water mainly through the process of:",
  options: ["Transpiration", "Respiration", "Photosynthesis", "Excretion"],
  answer: "Transpiration"
},
// Part 11 - SHS 2 Biology Questions (Questions 402-451)

// Reproduction
{
  question: "What is the male reproductive cell called?",
  options: ["Sperm", "Ovum", "Zygote", "Embryo"],
  answer: "Sperm"
},
{
  question: "The fusion of male and female gametes is called:",
  options: ["Fertilization", "Pollination", "Germination", "Meiosis"],
  answer: "Fertilization"
},
{
  question: "The part of the female reproductive system where fertilization usually occurs is:",
  options: ["Fallopian tube", "Ovary", "Uterus", "Vagina"],
  answer: "Fallopian tube"
},
{
  question: "Which hormone triggers ovulation?",
  options: ["Luteinizing hormone", "Follicle-stimulating hormone", "Estrogen", "Progesterone"],
  answer: "Luteinizing hormone"
},
{
  question: "After fertilization, the zygote develops into a:",
  options: ["Blastocyst", "Embryo", "Foetus", "Gamete"],
  answer: "Embryo"
},

// Nutrition
{
  question: "Lipase breaks down:",
  options: ["Fats", "Proteins", "Carbohydrates", "Nucleic acids"],
  answer: "Fats"
},
{
  question: "Which nutrient is the main source of energy?",
  options: ["Carbohydrates", "Proteins", "Vitamins", "Minerals"],
  answer: "Carbohydrates"
},
{
  question: "Deficiency of vitamin C causes:",
  options: ["Scurvy", "Rickets", "Anemia", "Night blindness"],
  answer: "Scurvy"
},
{
  question: "The process by which green plants prepare their own food is called:",
  options: ["Photosynthesis", "Respiration", "Transpiration", "Excretion"],
  answer: "Photosynthesis"
},
{
  question: "Chlorophyll is found in the:",
  options: ["Chloroplasts", "Mitochondria", "Nucleus", "Cell membrane"],
  answer: "Chloroplasts"
},

// Transport
{
  question: "Which blood vessels carry blood away from the heart?",
  options: ["Arteries", "Veins", "Capillaries", "Venules"],
  answer: "Arteries"
},
{
  question: "The largest artery in the body is the:",
  options: ["Aorta", "Vena cava", "Pulmonary artery", "Carotid artery"],
  answer: "Aorta"
},
{
  question: "The valves in the heart prevent:",
  options: ["Backflow of blood", "Blood clotting", "Blood pressure", "Infection"],
  answer: "Backflow of blood"
},
{
  question: "Plasma is the:",
  options: ["Liquid part of blood", "Cell part of blood", "Blood clotting factor", "White blood cells"],
  answer: "Liquid part of blood"
},
{
  question: "Red blood cells are produced in the:",
  options: ["Bone marrow", "Liver", "Spleen", "Kidney"],
  answer: "Bone marrow"
},

// Excretion
{
  question: "The functional unit of the kidney is the:",
  options: ["Nephron", "Glomerulus", "Bowman’s capsule", "Collecting duct"],
  answer: "Nephron"
},
{
  question: "The tube that carries urine from the bladder to the outside is the:",
  options: ["Urethra", "Ureter", "Vas deferens", "Fallopian tube"],
  answer: "Urethra"
},
{
  question: "Which organ removes worn-out red blood cells?",
  options: ["Spleen", "Liver", "Kidney", "Lungs"],
  answer: "Spleen"
},
{
  question: "Sweat glands are found in the:",
  options: ["Skin", "Kidneys", "Liver", "Lungs"],
  answer: "Skin"
},
{
  question: "The waste product removed by the lungs is:",
  options: ["Carbon dioxide", "Urea", "Uric acid", "Water"],
  answer: "Carbon dioxide"
},

// Coordination and Response
{
  question: "Which part of the brain is responsible for thinking?",
  options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
  answer: "Cerebrum"
},
{
  question: "The nerve cells that carry impulses away from the CNS are called:",
  options: ["Motor neurons", "Sensory neurons", "Interneurons", "Axons"],
  answer: "Motor neurons"
},
{
  question: "Which sense organ detects sound?",
  options: ["Ear", "Eye", "Nose", "Skin"],
  answer: "Ear"
},
{
  question: "The reflex arc includes:",
  options: ["Receptor, sensory neuron, motor neuron, effector", "Brain, spinal cord, muscles", "Neuron, gland, muscle", "Axon, dendrite, synapse"],
  answer: "Receptor, sensory neuron, motor neuron, effector"
},
{
  question: "The gap between two neurons is called the:",
  options: ["Synapse", "Dendrite", "Axon", "Myelin sheath"],
  answer: "Synapse"
},

// Additional Questions Across Topics
{
  question: "DNA stands for:",
  options: ["Deoxyribonucleic acid", "Dioxyribonucleic acid", "Deoxyribogenetic acid", "Dioxyribogenetic acid"],
  answer: "Deoxyribonucleic acid"
},
{
  question: "The base pairs in DNA are:",
  options: ["A-T and G-C", "A-G and T-C", "A-C and G-T", "A-T and C-G"],
  answer: "A-T and G-C"
},
{
  question: "Which organelle is involved in protein synthesis?",
  options: ["Ribosome", "Mitochondrion", "Chloroplast", "Nucleus"],
  answer: "Ribosome"
},
{
  question: "Osmosis is the movement of water from:",
  options: ["High concentration to low concentration", "Low concentration to high concentration", "Equal concentration to high concentration", "Low to low concentration"],
  answer: "High concentration to low concentration"
},
{
  question: "The function of white blood cells is to:",
  options: ["Fight infection", "Transport oxygen", "Clot blood", "Carry nutrients"],
  answer: "Fight infection"
},
{
  question: "The breathing rate is controlled by the:",
  options: ["Medulla", "Cerebellum", "Cerebrum", "Hypothalamus"],
  answer: "Medulla"
},
{
  question: "In plants, water is transported by:",
  options: ["Xylem", "Phloem", "Cambium", "Epidermis"],
  answer: "Xylem"
},
{
  question: "The organ that produces bile is the:",
  options: ["Liver", "Pancreas", "Gall bladder", "Kidney"],
  answer: "Liver"
},
{
  question: "Which gas is released during photosynthesis?",
  options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  answer: "Oxygen"
},
{
  question: "Which macronutrient is essential for muscle repair?",
  options: ["Protein", "Carbohydrate", "Fat", "Vitamin"],
  answer: "Protein"
},
// Part 12 - SHS 2 Biology Questions (Questions 452-501)

// Reproduction
{
  question: "What is the main function of the placenta?",
  options: ["Nutrient and gas exchange between mother and fetus", "Produce hormones", "Protect fetus from infection", "Initiate labor"],
  answer: "Nutrient and gas exchange between mother and fetus"
},
{
  question: "The hormone responsible for milk production is:",
  options: ["Prolactin", "Oxytocin", "Estrogen", "Testosterone"],
  answer: "Prolactin"
},
{
  question: "Which process involves the release of an egg from the ovary?",
  options: ["Ovulation", "Fertilization", "Implantation", "Menstruation"],
  answer: "Ovulation"
},
{
  question: "The male hormone responsible for secondary sexual characteristics is:",
  options: ["Testosterone", "Estrogen", "Progesterone", "Luteinizing hormone"],
  answer: "Testosterone"
},
{
  question: "The fluid that nourishes sperm in the male reproductive system is produced by the:",
  options: ["Seminal vesicles", "Prostate gland", "Cowper's gland", "Epididymis"],
  answer: "Seminal vesicles"
},

// Nutrition
{
  question: "Which vitamin is important for blood clotting?",
  options: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
  answer: "Vitamin K"
},
{
  question: "Minerals important for strong bones include:",
  options: ["Calcium and phosphorus", "Iron and sodium", "Potassium and magnesium", "Zinc and copper"],
  answer: "Calcium and phosphorus"
},
{
  question: "Which enzyme breaks down starch into maltose?",
  options: ["Amylase", "Lipase", "Protease", "Maltase"],
  answer: "Amylase"
},
{
  question: "Which part of the digestive system absorbs most nutrients?",
  options: ["Small intestine", "Large intestine", "Stomach", "Esophagus"],
  answer: "Small intestine"
},
{
  question: "Deficiency of iodine causes:",
  options: ["Goiter", "Scurvy", "Rickets", "Beriberi"],
  answer: "Goiter"
},

// Transport
{
  question: "Which blood cells help fight infections?",
  options: ["White blood cells", "Red blood cells", "Platelets", "Plasma cells"],
  answer: "White blood cells"
},
{
  question: "Which blood vessel carries oxygenated blood to the heart?",
  options: ["Pulmonary vein", "Pulmonary artery", "Aorta", "Vena cava"],
  answer: "Pulmonary vein"
},
{
  question: "The substance that helps blood to clot is:",
  options: ["Platelets", "Red blood cells", "White blood cells", "Plasma"],
  answer: "Platelets"
},
{
  question: "Capillaries are:",
  options: ["Smallest blood vessels", "Largest blood vessels", "Veins", "Arteries"],
  answer: "Smallest blood vessels"
},
{
  question: "Which part of the heart receives oxygenated blood from the lungs?",
  options: ["Left atrium", "Right atrium", "Left ventricle", "Right ventricle"],
  answer: "Left atrium"
},

// Excretion
{
  question: "The main waste product excreted by the kidney is:",
  options: ["Urea", "Carbon dioxide", "Sweat", "Bile"],
  answer: "Urea"
},
{
  question: "Which organ excretes bile?",
  options: ["Liver", "Kidney", "Lung", "Skin"],
  answer: "Liver"
},
{
  question: "The part of the nephron where filtration takes place is:",
  options: ["Glomerulus", "Bowman's capsule", "Loop of Henle", "Collecting duct"],
  answer: "Glomerulus"
},
{
  question: "Sweat helps in:",
  options: ["Regulating body temperature", "Excreting urea", "Producing hormones", "Digesting food"],
  answer: "Regulating body temperature"
},
{
  question: "Kidneys help in maintaining:",
  options: ["Water balance", "Oxygen supply", "Glucose levels", "Fat metabolism"],
  answer: "Water balance"
},

// Coordination and Response
{
  question: "The part of the brain that controls balance and coordination is:",
  options: ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"],
  answer: "Cerebellum"
},
{
  question: "Reflex actions are:",
  options: ["Involuntary", "Voluntary", "Slow", "Complex"],
  answer: "Involuntary"
},
{
  question: "Which sense organ detects smell?",
  options: ["Nose", "Tongue", "Skin", "Ear"],
  answer: "Nose"
},
{
  question: "The cell body of a neuron contains:",
  options: ["Nucleus", "Axon", "Dendrites", "Synapse"],
  answer: "Nucleus"
},
{
  question: "The junction between two neurons is called the:",
  options: ["Synapse", "Axon", "Dendrite", "Myelin sheath"],
  answer: "Synapse"
},

// Additional questions across topics
{
  question: "Which gas is essential for cellular respiration?",
  options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
  answer: "Oxygen"
},
{
  question: "Which blood group is known as the universal donor?",
  options: ["O negative", "A positive", "B positive", "AB positive"],
  answer: "O negative"
},
{
  question: "The green pigment in plants is called:",
  options: ["Chlorophyll", "Carotene", "Xanthophyll", "Anthocyanin"],
  answer: "Chlorophyll"
},
{
  question: "The process of loss of water vapor from leaves is called:",
  options: ["Transpiration", "Respiration", "Photosynthesis", "Evaporation"],
  answer: "Transpiration"
},
{
  question: "Which nutrient is important for growth and repair of tissues?",
  options: ["Protein", "Carbohydrates", "Fats", "Vitamins"],
  answer: "Protein"
},
{
  question: "Which part of the plant transports food?",
  options: ["Phloem", "Xylem", "Cambium", "Epidermis"],
  answer: "Phloem"
},
{
  question: "Enzymes are mainly made of:",
  options: ["Proteins", "Carbohydrates", "Lipids", "Nucleic acids"],
  answer: "Proteins"
},
{
  question: "Which vitamin helps in calcium absorption?",
  options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
  answer: "Vitamin D"
},
{
  question: "Which of these is NOT a function of the liver?",
  options: ["Filtering blood", "Producing bile", "Storing glucose", "Producing insulin"],
  answer: "Producing insulin"
},
{
  question: "The part of the cell responsible for energy production is the:",
  options: ["Mitochondrion", "Ribosome", "Chloroplast", "Nucleus"],
  answer: "Mitochondrion"
},
// Part 13 - SHS 3 Biology Questions (Questions 502-551)

// Genetics
{
  question: "What is the basic unit of heredity?",
  options: ["Gene", "Chromosome", "DNA", "Allele"],
  answer: "Gene"
},
{
  question: "In Mendelian genetics, the phenotype is:",
  options: ["The observable traits", "The genetic makeup", "A type of gene", "A chromosome"],
  answer: "The observable traits"
},
{
  question: "A heterozygous genotype consists of:",
  options: ["Two different alleles", "Two identical alleles", "Only dominant alleles", "Only recessive alleles"],
  answer: "Two different alleles"
},
{
  question: "What does DNA stand for?",
  options: ["Deoxyribonucleic acid", "Deoxyribose nucleic acid", "Deoxynucleotide acid", "Deoxyribose nitrate acid"],
  answer: "Deoxyribonucleic acid"
},
{
  question: "The process by which DNA is copied into RNA is called:",
  options: ["Transcription", "Translation", "Replication", "Mutation"],
  answer: "Transcription"
},

// Evolution
{
  question: "The theory that explains evolution through natural selection was proposed by:",
  options: ["Charles Darwin", "Gregor Mendel", "Jean-Baptiste Lamarck", "Alfred Wallace"],
  answer: "Charles Darwin"
},
{
  question: "Survival of the fittest means:",
  options: ["Organisms best adapted to their environment survive", "Only the strongest survive", "All organisms survive", "Weak organisms survive"],
  answer: "Organisms best adapted to their environment survive"
},
{
  question: "Which of the following is NOT an evidence of evolution?",
  options: ["Fossil records", "Comparative anatomy", "Photosynthesis", "Embryology"],
  answer: "Photosynthesis"
},
{
  question: "Speciation refers to:",
  options: ["Formation of new species", "Extinction of species", "Migration of species", "Survival of species"],
  answer: "Formation of new species"
},
{
  question: "Mutation is:",
  options: ["A change in DNA sequence", "A change in blood group", "A change in environment", "A type of gene"],
  answer: "A change in DNA sequence"
},

// Biotechnology
{
  question: "The technique used to make identical copies of DNA is called:",
  options: ["Polymerase Chain Reaction (PCR)", "Gel electrophoresis", "Cloning", "Transcription"],
  answer: "Polymerase Chain Reaction (PCR)"
},
{
  question: "Which organism is commonly used in genetic engineering?",
  options: ["Bacteria", "Algae", "Fungi", "Protozoa"],
  answer: "Bacteria"
},
{
  question: "Genetically modified organisms (GMOs) are organisms that have:",
  options: ["Genes from other species", "No genes", "Only dominant genes", "Only recessive genes"],
  answer: "Genes from other species"
},
{
  question: "The enzyme used to cut DNA at specific sequences is called:",
  options: ["Restriction enzyme", "Ligase", "Polymerase", "Helicase"],
  answer: "Restriction enzyme"
},
{
  question: "Which process involves transferring a gene from one organism to another?",
  options: ["Gene cloning", "Genetic engineering", "Mutation", "Natural selection"],
  answer: "Genetic engineering"
},

// Ecology
{
  question: "An ecosystem includes:",
  options: ["All living and non-living things in an area", "Only animals", "Only plants", "Only microorganisms"],
  answer: "All living and non-living things in an area"
},
{
  question: "Producers in an ecosystem are:",
  options: ["Organisms that make their own food", "Organisms that eat others", "Organisms that decompose", "Organisms that parasitize others"],
  answer: "Organisms that make their own food"
},
{
  question: "Which of the following is a biotic factor?",
  options: ["Plants", "Temperature", "Water", "Soil"],
  answer: "Plants"
},
{
  question: "The gradual change in the structure of a community over time is called:",
  options: ["Succession", "Pollution", "Erosion", "Deforestation"],
  answer: "Succession"
},
{
  question: "The process by which nitrogen is converted into a usable form by plants is called:",
  options: ["Nitrogen fixation", "Photosynthesis", "Respiration", "Transpiration"],
  answer: "Nitrogen fixation"
},

// Human Physiology
{
  question: "The hormone that regulates blood sugar levels is:",
  options: ["Insulin", "Glucagon", "Adrenaline", "Thyroxine"],
  answer: "Insulin"
},
{
  question: "Which part of the human brain controls breathing?",
  options: ["Medulla", "Cerebrum", "Cerebellum", "Hypothalamus"],
  answer: "Medulla"
},
{
  question: "Which blood vessel carries blood away from the heart?",
  options: ["Artery", "Vein", "Capillary", "Vena cava"],
  answer: "Artery"
},
{
  question: "The functional unit of the kidney is called:",
  options: ["Nephron", "Glomerulus", "Bowman's capsule", "Loop of Henle"],
  answer: "Nephron"
},
{
  question: "The largest artery in the human body is the:",
  options: ["Aorta", "Pulmonary artery", "Carotid artery", "Femoral artery"],
  answer: "Aorta"
},

// Additional Year 3 questions
{
  question: "DNA is located in the:",
  options: ["Nucleus", "Cytoplasm", "Mitochondrion", "Ribosome"],
  answer: "Nucleus"
},
{
  question: "Which type of RNA carries amino acids to the ribosome?",
  options: ["tRNA", "mRNA", "rRNA", "snRNA"],
  answer: "tRNA"
},
{
  question: "The process of producing offspring that are genetically identical is called:",
  options: ["Cloning", "Sexual reproduction", "Mutation", "Crossbreeding"],
  answer: "Cloning"
},
{
  question: "Adaptations that help animals blend into their environment are called:",
  options: ["Camouflage", "Mimicry", "Migration", "Hibernation"],
  answer: "Camouflage"
},
{
  question: "Which gas is mainly responsible for the greenhouse effect?",
  options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"],
  answer: "Carbon dioxide"
},
{
  question: "The study of the interaction between organisms and their environment is called:",
  options: ["Ecology", "Biology", "Physiology", "Genetics"],
  answer: "Ecology"
},
{
  question: "The structure that stores food and water in plant cells is the:",
  options: ["Vacuole", "Chloroplast", "Nucleus", "Mitochondrion"],
  answer: "Vacuole"
},
{
  question: "Which of the following is a biodegradable pollutant?",
  options: ["Sewage", "Plastic", "Heavy metals", "Radioactive waste"],
  answer: "Sewage"
},
{
  question: "The process by which green plants make their own food is:",
  options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
  answer: "Photosynthesis"
},
{
  question: "The substance responsible for transporting oxygen in blood is:",
  options: ["Hemoglobin", "Chlorophyll", "Myoglobin", "Plasma"],
  answer: "Hemoglobin"
},
// Part 14 - SHS 3 Biology Questions (Questions 552-601)

// Genetics & Cell Biology
{
  question: "What is the shape of the DNA molecule?",
  options: ["Double helix", "Single strand", "Triple helix", "Circular"],
  answer: "Double helix"
},
{
  question: "During mitosis, chromosomes line up at the:",
  options: ["Metaphase plate", "Centromere", "Spindle fibers", "Chromatid"],
  answer: "Metaphase plate"
},
{
  question: "Which phase of cell division involves separation of sister chromatids?",
  options: ["Anaphase", "Prophase", "Metaphase", "Telophase"],
  answer: "Anaphase"
},
{
  question: "The organelle responsible for protein synthesis is the:",
  options: ["Ribosome", "Mitochondrion", "Lysosome", "Golgi apparatus"],
  answer: "Ribosome"
},
{
  question: "Which base is found in RNA but not in DNA?",
  options: ["Uracil", "Thymine", "Adenine", "Guanine"],
  answer: "Uracil"
},

// Evolution & Classification
{
  question: "The classification system developed by Linnaeus is called:",
  options: ["Binomial nomenclature", "Phylogeny", "Cladistics", "Taxonomy"],
  answer: "Binomial nomenclature"
},
{
  question: "Which kingdom includes organisms that are multicellular and photosynthetic?",
  options: ["Plantae", "Animalia", "Fungi", "Protista"],
  answer: "Plantae"
},
{
  question: "Homologous structures indicate:",
  options: ["Common ancestry", "No relation", "Different functions", "No evolution"],
  answer: "Common ancestry"
},
{
  question: "The category ranking above genus is:",
  options: ["Family", "Order", "Species", "Class"],
  answer: "Family"
},
{
  question: "The principle of natural selection requires:",
  options: ["Variation among individuals", "No competition", "Uniform population", "Random mating"],
  answer: "Variation among individuals"
},

// Biotechnology & Applications
{
  question: "The process of inserting foreign DNA into an organism is called:",
  options: ["Transformation", "Replication", "Transcription", "Translation"],
  answer: "Transformation"
},
{
  question: "Which of these is NOT a product of biotechnology?",
  options: ["Antibiotics", "Vaccines", "Fossils", "Insulin"],
  answer: "Fossils"
},
{
  question: "Gene therapy aims to:",
  options: ["Correct defective genes", "Destroy healthy cells", "Cause mutations", "Stop protein synthesis"],
  answer: "Correct defective genes"
},
{
  question: "The polymerase enzyme is used in:",
  options: ["DNA replication", "Protein synthesis", "Cell respiration", "Photosynthesis"],
  answer: "DNA replication"
},
{
  question: "The vector commonly used in genetic engineering is:",
  options: ["Plasmid", "Virus", "Bacterium", "Mitochondrion"],
  answer: "Plasmid"
},

// Ecology & Environment
{
  question: "Which of these is an abiotic factor?",
  options: ["Temperature", "Animals", "Plants", "Bacteria"],
  answer: "Temperature"
},
{
  question: "The process by which water moves through plants and evaporates from leaves is called:",
  options: ["Transpiration", "Photosynthesis", "Respiration", "Osmosis"],
  answer: "Transpiration"
},
{
  question: "A food chain shows:",
  options: ["Feeding relationships", "Energy loss", "Reproductive cycles", "Water cycles"],
  answer: "Feeding relationships"
},
{
  question: "The top consumer in a food chain is called:",
  options: ["Apex predator", "Producer", "Primary consumer", "Decomposer"],
  answer: "Apex predator"
},
{
  question: "Biomagnification refers to:",
  options: ["Increase of toxins in organisms at higher trophic levels", "Decrease of nutrients", "Energy loss", "Population growth"],
  answer: "Increase of toxins in organisms at higher trophic levels"
},

// Human Physiology
{
  question: "Which hormone regulates the fight or flight response?",
  options: ["Adrenaline", "Insulin", "Thyroxine", "Glucagon"],
  answer: "Adrenaline"
},
{
  question: "The alveoli are found in the:",
  options: ["Lungs", "Kidneys", "Heart", "Liver"],
  answer: "Lungs"
},
{
  question: "Platelets are important for:",
  options: ["Blood clotting", "Oxygen transport", "Immune defense", "Hormone transport"],
  answer: "Blood clotting"
},
{
  question: "The part of the digestive system where most absorption occurs is the:",
  options: ["Small intestine", "Stomach", "Large intestine", "Esophagus"],
  answer: "Small intestine"
},
{
  question: "The type of muscle found in the heart is:",
  options: ["Cardiac muscle", "Skeletal muscle", "Smooth muscle", "Voluntary muscle"],
  answer: "Cardiac muscle"
},

// Miscellaneous Year 3
{
  question: "Which of the following is NOT a macronutrient?",
  options: ["Vitamin C", "Carbohydrates", "Proteins", "Fats"],
  answer: "Vitamin C"
},
{
  question: "The process by which plants lose water vapor through stomata is called:",
  options: ["Transpiration", "Photosynthesis", "Respiration", "Diffusion"],
  answer: "Transpiration"
},
{
  question: "The nitrogen cycle involves the conversion of nitrogen gas into:",
  options: ["Ammonia", "Oxygen", "Carbon dioxide", "Nitrous oxide"],
  answer: "Ammonia"
},
{
  question: "Which vitamin is essential for blood clotting?",
  options: ["Vitamin K", "Vitamin A", "Vitamin D", "Vitamin C"],
  answer: "Vitamin K"
},
{
  question: "The basic building blocks of proteins are:",
  options: ["Amino acids", "Fatty acids", "Monosaccharides", "Nucleotides"],
  answer: "Amino acids"
},
{
  question: "The term 'biodiversity' refers to:",
  options: ["Variety of life forms", "Number of species extinct", "Amount of pollution", "Soil fertility"],
  answer: "Variety of life forms"
},
{
  question: "Which part of the plant is responsible for photosynthesis?",
  options: ["Leaf", "Root", "Stem", "Flower"],
  answer: "Leaf"
},
{
  question: "The process of cell death is called:",
  options: ["Apoptosis", "Mitosis", "Meiosis", "Mutation"],
  answer: "Apoptosis"
},
{
  question: "Which blood type is known as the universal donor?",
  options: ["O negative", "A positive", "B positive", "AB positive"],
  answer: "O negative"
},
{
  question: "Which structure controls water loss in plants?",
  options: ["Stomata", "Chloroplast", "Xylem", "Phloem"],
  answer: "Stomata"
},
// Part 15 - SHS 3 Biology Questions (Questions 602-651)

// Genetics & Cell Biology
{
  question: "In DNA replication, the enzyme responsible for unwinding the DNA helix is:",
  options: ["Helicase", "Ligase", "Polymerase", "Topoisomerase"],
  answer: "Helicase"
},
{
  question: "Mitochondria are known as the:",
  options: ["Powerhouse of the cell", "Protein factory", "Cell membrane", "Genetic material"],
  answer: "Powerhouse of the cell"
},
{
  question: "The phase of meiosis where crossing over occurs is:",
  options: ["Prophase I", "Metaphase II", "Anaphase I", "Telophase II"],
  answer: "Prophase I"
},
{
  question: "Which nitrogenous base pairs with adenine in DNA?",
  options: ["Thymine", "Uracil", "Cytosine", "Guanine"],
  answer: "Thymine"
},
{
  question: "The haploid number of chromosomes in humans is:",
  options: ["23", "46", "92", "69"],
  answer: "23"
},

// Evolution & Classification
{
  question: "Which scientist proposed the theory of natural selection?",
  options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "James Watson"],
  answer: "Charles Darwin"
},
{
  question: "Which domain includes bacteria?",
  options: ["Bacteria", "Archaea", "Eukarya", "Protista"],
  answer: "Bacteria"
},
{
  question: "The study of the evolutionary relationships among organisms is called:",
  options: ["Phylogeny", "Taxonomy", "Ecology", "Morphology"],
  answer: "Phylogeny"
},
{
  question: "An example of a gymnosperm is:",
  options: ["Pine tree", "Rose", "Fern", "Moss"],
  answer: "Pine tree"
},
{
  question: "Which of the following is NOT a characteristic of mammals?",
  options: ["Hair", "Lungs", "Feathers", "Mammary glands"],
  answer: "Feathers"
},

// Biotechnology & Applications
{
  question: "Polymerase Chain Reaction (PCR) is used to:",
  options: ["Amplify DNA", "Break down proteins", "Edit genes", "Clone cells"],
  answer: "Amplify DNA"
},
{
  question: "In genetic engineering, a gene inserted into an organism is called a:",
  options: ["Transgene", "Genome", "Allele", "Chromosome"],
  answer: "Transgene"
},
{
  question: "Golden rice is genetically modified to produce:",
  options: ["Vitamin A", "Vitamin C", "Iron", "Calcium"],
  answer: "Vitamin A"
},
{
  question: "Which technique is used to separate DNA fragments by size?",
  options: ["Gel electrophoresis", "Chromatography", "Centrifugation", "Spectrophotometry"],
  answer: "Gel electrophoresis"
},
{
  question: "Which of these is a clone?",
  options: ["Genetically identical organism", "Hybrid organism", "Mutated organism", "Crossbreed"],
  answer: "Genetically identical organism"
},

// Ecology & Environment
{
  question: "An ecosystem includes:",
  options: ["All living and non-living things in an area", "Only plants", "Only animals", "Only microorganisms"],
  answer: "All living and non-living things in an area"
},
{
  question: "Which cycle involves the movement of carbon between the atmosphere and living organisms?",
  options: ["Carbon cycle", "Nitrogen cycle", "Water cycle", "Phosphorus cycle"],
  answer: "Carbon cycle"
},
{
  question: "Organisms that break down dead matter are called:",
  options: ["Decomposers", "Producers", "Consumers", "Herbivores"],
  answer: "Decomposers"
},
{
  question: "Succession in ecology refers to:",
  options: ["Gradual change in community structure", "Rapid extinction", "Pollution", "Soil erosion"],
  answer: "Gradual change in community structure"
},
{
  question: "Which of the following is a renewable resource?",
  options: ["Solar energy", "Coal", "Oil", "Natural gas"],
  answer: "Solar energy"
},

// Human Physiology
{
  question: "The main function of hemoglobin is to:",
  options: ["Carry oxygen", "Fight infection", "Clot blood", "Digest food"],
  answer: "Carry oxygen"
},
{
  question: "The structure that prevents food from entering the trachea is the:",
  options: ["Epiglottis", "Larynx", "Pharynx", "Bronchi"],
  answer: "Epiglottis"
},
{
  question: "Which part of the brain controls balance and coordination?",
  options: ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"],
  answer: "Cerebellum"
},
{
  question: "The hormone insulin is produced by the:",
  options: ["Pancreas", "Thyroid", "Adrenal gland", "Pituitary gland"],
  answer: "Pancreas"
},
{
  question: "Which blood vessels carry blood away from the heart?",
  options: ["Arteries", "Veins", "Capillaries", "Venules"],
  answer: "Arteries"
},

// Miscellaneous Year 3
{
  question: "The part of the plant that transports food is the:",
  options: ["Phloem", "Xylem", "Root", "Stem"],
  answer: "Phloem"
},
{
  question: "Which vitamin is produced by the skin in the presence of sunlight?",
  options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
  answer: "Vitamin D"
},
{
  question: "A pathogen is:",
  options: ["Disease causing organism", "Helpful bacteria", "Fungi", "Virus only"],
  answer: "Disease causing organism"
},
{
  question: "The green pigment in plants responsible for photosynthesis is:",
  options: ["Chlorophyll", "Carotene", "Xanthophyll", "Anthocyanin"],
  answer: "Chlorophyll"
},
{
  question: "Which blood type is considered the universal recipient?",
  options: ["AB positive", "O negative", "A negative", "B positive"],
  answer: "AB positive"
},
{
  question: "The process by which white blood cells engulf pathogens is called:",
  options: ["Phagocytosis", "Osmosis", "Diffusion", "Respiration"],
  answer: "Phagocytosis"
},
{
  question: "The layer of skin that contains nerves and blood vessels is the:",
  options: ["Dermis", "Epidermis", "Hypodermis", "Cuticle"],
  answer: "Dermis"
},
{
  question: "Which structure in the kidney is responsible for filtering blood?",
  options: ["Glomerulus", "Nephron", "Ureter", "Bladder"],
  answer: "Glomerulus"
},
{
  question: "Which plant hormone promotes stem elongation?",
  options: ["Auxin", "Gibberellin", "Ethylene", "Cytokinin"],
  answer: "Gibberellin"
},
{
  question: "Which of the following is a function of the liver?",
  options: ["Detoxification", "Oxygen transport", "Blood clotting", "Digestion"],
  answer: "Detoxification"
},
 {
    question: "What is the correct order of organization in living organisms from simplest to most complex?",
    options: ["Organ – Tissue – Cell – System", "Cell – Tissue – Organ – System", "System – Organ – Cell – Tissue", "Tissue – System – Organ – Cell"],
    answer: "Cell – Tissue – Organ – System"
  }
];

export default biologyQuestions;
