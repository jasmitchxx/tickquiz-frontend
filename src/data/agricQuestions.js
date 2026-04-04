const agricQuestions = [
  {
    question: "Which of the following is a ruminant animal?",
    options: ["Chicken", "Goat", "Pig", "Rabbit"],
    answer: "Goat"
  },
  {
    question: "What is the primary purpose of crop rotation?",
    options: ["Increase pests", "Deplete soil", "Improve soil fertility", "Reduce rainfall"],
    answer: "Improve soil fertility"
  },
  {
    question: "Which of the following is a viral disease in poultry?",
    options: ["Newcastle disease", "Anthrax", "Blackleg", "Coccidiosis"],
    answer: "Newcastle disease"
  },
  {
    question: "Which method is used to improve the genetic quality of crops?",
    options: ["Selection", "Weeding", "Irrigation", "Fertilization"],
    answer: "Selection"
  },
  {
    question: "Which of the following is an example of a field crop?",
    options: ["Tomato", "Maize", "Mango", "Okro"],
    answer: "Maize"
  },
  {
    question: "Which crop requires well-drained sandy loam soil for optimal growth?",
    options: ["Cassava", "Yam", "Tomato", "Rice"],
    answer: "Tomato"
  },
  {
    question: "What is the main advantage of intensive animal farming?",
    options: ["Low feed cost", "High output per unit area", "Requires less labor", "No disease risk"],
    answer: "High output per unit area"
  },
  {
    question: "Which of the following is a bacterial disease of farm animals?",
    options: ["Tuberculosis", "Foot and mouth", "Fowl pox", "Ringworm"],
    answer: "Tuberculosis"
  },
  {
    question: "The best time to plant maize in Ghana is during:",
    options: ["Dry season", "Rainy season", "Cold season", "Hot season"],
    answer: "Rainy season"
  },
  {
    question: "What is the main purpose of land preparation before planting crops?",
    options: ["Reduce soil fertility", "Control pests", "Provide good seedbed", "Increase weeds"],
    answer: "Provide good seedbed"
  },
  {
    question: "Which of these animals is a non-ruminant herbivore?",
    options: ["Goat", "Rabbit", "Cattle", "Sheep"],
    answer: "Rabbit"
  },
  {
    question: "Which of the following is a sign that a crop is ready for harvest?",
    options: ["Green leaves", "Flowering stage", "Mature seeds or fruits", "Early growth"],
    answer: "Mature seeds or fruits"
  },
  {
    question: "Which method of crop improvement involves crossing two different varieties?",
    options: ["Selection", "Hybridization", "Grafting", "Weeding"],
    answer: "Hybridization"
  },
  {
    question: "Which of the following is a fungal disease in farm animals?",
    options: ["Aspergillosis", "Rinderpest", "Anthrax", "Foot and mouth"],
    answer: "Aspergillosis"
  },
  {
    question: "Which of the following is a tree crop grown in Ghana?",
    options: ["Yam", "Cocoa", "Cassava", "Maize"],
    answer: "Cocoa"
  },
  {
    question: "Which factor is most important in selecting breeding stock?",
    options: ["Color of coat", "Performance record", "Age", "Height only"],
    answer: "Performance record"
  },
  {
    question: "What is the main function of manure in crop production?",
    options: ["Control pests", "Improve soil fertility", "Irrigation", "Seed spacing"],
    answer: "Improve soil fertility"
  },
  {
    question: "Which of the following crops is a legume?",
    options: ["Maize", "Cowpea", "Cassava", "Yam"],
    answer: "Cowpea"
  },
  {
    question: "Which of the following is a viral disease in cattle?",
    options: ["Rinderpest", "Brucellosis", "Anthrax", "Trypanosomiasis"],
    answer: "Rinderpest"
  },
  {
    question: "Which of these is an ectoparasite?",
    options: ["Liver fluke", "Roundworm", "Tick", "Coccidia"],
    answer: "Tick"
  },
  {
    question: "Which practice helps in the prevention of soil erosion?",
    options: ["Overgrazing", "Cover cropping", "Deforestation", "Burning residues"],
    answer: "Cover cropping"
  },
  {
    question: "Which of the following is an example of a non-ruminant omnivore?",
    options: ["Pig", "Goat", "Cattle", "Rabbit"],
    answer: "Pig"
  },
  {
    question: "Which of the following is a method of post-harvest storage?",
    options: ["Weeding", "Drying", "Ploughing", "Irrigation"],
    answer: "Drying"
  },
  {
    question: "Which of the following is a sign of maturity in yam?",
    options: ["Flowering", "Green vines", "Yellowing leaves", "Soft tubers"],
    answer: "Yellowing leaves"
  },
  {
    question: "Which of the following improves soil aeration and water retention?",
    options: ["Ploughing", "Mulching", "Weeding", "Spraying"],
    answer: "Mulching"
  },
  {
    question: "Which crop requires a high seed rate?",
    options: ["Maize", "Cassava", "Pineapple", "Mango"],
    answer: "Maize"
  },
  {
    question: "Which is the main cause of soil erosion?",
    options: ["Heavy rainfall", "Mulching", "Weeding", "Crop rotation"],
    answer: "Heavy rainfall"
  },
  {
    question: "Which crop is propagated vegetatively?",
    options: ["Maize", "Cassava", "Cowpea", "Rice"],
    answer: "Cassava"
  },
  {
    question: "Which of these is a viral disease in poultry?",
    options: ["Fowl pox", "Ringworm", "Coccidiosis", "Trypanosomiasis"],
    answer: "Fowl pox"
  },
  {
    question: "Which of the following is a fruit crop?",
    options: ["Okro", "Tomato", "Pineapple", "Onion"],
    answer: "Pineapple"
  },
  {
    question: "What is the main function of vaccination in animal farming?",
    options: ["Control diseases", "Feed animals", "Breed animals", "Clean housing"],
    answer: "Control diseases"
  },
  {
    question: "Which of the following is a ruminant?",
    options: ["Sheep", "Pig", "Rabbit", "Chicken"],
    answer: "Sheep"
  },
  {
    question: "Which crop requires wide spacing to reduce competition?",
    options: ["Maize", "Cowpea", "Tomato", "Onion"],
    answer: "Maize"
  },
  {
    question: "Which type of water is available for crop use?",
    options: ["Gravitational water", "Hygroscopic water", "Capillary water", "Non-available water"],
    answer: "Capillary water"
  },
  {
    question: "Which of the following is an example of a cultural practice in crop farming?",
    options: ["Fertilizer application", "Vaccination", "Deworming", "Dipping"],
    answer: "Fertilizer application"
  },
  {
    question: "Which of these is used in hybrid crop production?",
    options: ["Selection", "Cross-breeding", "Mulching", "Ploughing"],
    answer: "Cross-breeding"
  },
  {
    question: "Which animal is a source of milk and meat in ruminant farming?",
    options: ["Rabbit", "Goat", "Pig", "Chicken"],
    answer: "Goat"
  },
  {
    question: "Which crop requires well-drained soil?",
    options: ["Rice", "Okro", "Tomato", "Maize"],
    answer: "Tomato"
  },
  {
    question: "Which type of erosion is caused by wind?",
    options: ["Rill erosion", "Sheet erosion", "Suspension erosion", "Gully erosion"],
    answer: "Suspension erosion"
  },
  {
    question: "Which of these crops is harvested for its seeds?",
    options: ["Maize", "Yam", "Cocoa", "Plantain"],
    answer: "Maize"
  },
  {
    question: "Which parasite lives inside the animal?",
    options: ["Lice", "Tick", "Liver fluke", "Flea"],
    answer: "Liver fluke"
  },
  {
    question: "Which crop is a root crop?",
    options: ["Cassava", "Tomato", "Mango", "Plantain"],
    answer: "Cassava"
  },
  {
    question: "Which of the following is a bacterial disease of cattle?",
    options: ["Anthrax", "Fowl pox", "Newcastle disease", "Trypanosomiasis"],
    answer: "Anthrax"
  },
  {
    question: "Which crop requires transplanting from nursery to field?",
    options: ["Onion", "Cowpea", "Maize", "Okro"],
    answer: "Onion"
  },
  {
    question: "Which of the following is an economic importance of pests?",
    options: ["Increase yield", "Reduce profit", "Improve soil", "Increase seed germination"],
    answer: "Reduce profit"
  },
  {
    question: "Which practice reduces post-harvest losses?",
    options: ["Proper storage", "Weeding", "Fertilizer application", "Irrigation"],
    answer: "Proper storage"
  },
  {
    question: "Which of the following is a type of tillage practice?",
    options: ["Terracing", "Vaccination", "Feeding", "Plucking"],
    answer: "Terracing"
  },
  {
    question: "Which of these is a major factor influencing soil erosion?",
    options: ["Wind speed", "Seed rate", "Harvesting method", "Fertilizer type"],
    answer: "Wind speed"
  },
  {
    question: "Which crop is propagated using stem cuttings?",
    options: ["Cassava", "Cowpea", "Maize", "Rice"],
    answer: "Cassava"
  },
  {
    question: "Which type of soil water cannot be absorbed by plants?",
    options: ["Gravitational", "Capillary", "Hygroscopic", "Available"],
    answer: "Hygroscopic"
  },
  {
    question: "Which crop is considered a vegetable crop?",
    options: ["Maize", "Tomato", "Cocoa", "Plantain"],
    answer: "Tomato"
  },
  {
    question: "Which of these is a method of disease control in animals?",
    options: ["Vaccination", "Mulching", "Ploughing", "Fertilizing"],
    answer: "Vaccination"
  },
  {
    question: "Which crop is harvested after the fruit matures?",
    options: ["Pineapple", "Maize", "Cassava", "Cowpea"],
    answer: "Pineapple"
  },
  {
    question: "Which of the following is a method of irrigation?",
    options: ["Drip", "Mulching", "Weeding", "Fertilizing"],
    answer: "Drip"
  },
  {
    question: "Which practice helps conserve soil moisture?",
    options: ["Mulching", "Overgrazing", "Burning residues", "Continuous cropping"],
    answer: "Mulching"
  },
  {
    question: "Which of the following is an example of a cash crop in Ghana?",
    options: ["Maize", "Cocoa", "Cassava", "Rice"],
    answer: "Cocoa"
  },
  {
    question: "What is the main purpose of terracing in agriculture?",
    options: ["Prevent soil erosion", "Increase pests", "Reduce fertility", "Control disease"],
    answer: "Prevent soil erosion"
  },
  {
    question: "Which soil type is best suited for rice cultivation?",
    options: ["Clay", "Sandy loam", "Loamy", "Laterite"],
    answer: "Clay"
  },
  {
    question: "Which of these is a perennial crop?",
    options: ["Maize", "Cassava", "Cocoa", "Rice"],
    answer: "Cocoa"
  },
  {
    question: "Which farm enterprise is concerned with bees?",
    options: ["Apiculture", "Piggery", "Poultry", "Fish farming"],
    answer: "Apiculture"
  },
  {
    question: "Which of the following is a symptom of nutrient deficiency in crops?",
    options: ["Yellowing of leaves", "Flowering", "Seed formation", "Root growth"],
    answer: "Yellowing of leaves"
  },
  {
    question: "Which method is used to control weeds in crop fields?",
    options: ["Mulching", "Vaccination", "Deworming", "Feeding"],
    answer: "Mulching"
  },
  {
    question: "Which type of fertilizer contains nitrogen, phosphorus, and potassium?",
    options: ["NPK", "Urea", "Ammonium sulfate", "Lime"],
    answer: "NPK"
  },
  {
    question: "Which practice prevents waterlogging in fields?",
    options: ["Drainage", "Mulching", "Weeding", "Fertilizing"],
    answer: "Drainage"
  },
  {
    question: "Which crop requires high rainfall for optimal growth?",
    options: ["Rice", "Maize", "Tomato", "Cowpea"],
    answer: "Rice"
  },
  {
    question: "Which of the following is a sign of over-irrigation?",
    options: ["Yellow leaves", "Soil cracking", "Wilting", "Reduced pests"],
    answer: "Yellow leaves"
  },
  {
    question: "Which of the following is a method of soil conservation?",
    options: ["Contour farming", "Overgrazing", "Deforestation", "Burning"],
    answer: "Contour farming"
  },
  {
    question: "Which of these crops is propagated through seeds?",
    options: ["Maize", "Cassava", "Pineapple", "Yam"],
    answer: "Maize"
  },
  {
    question: "Which of the following is a method of pest control in crops?",
    options: ["Chemical control", "Mulching", "Irrigation", "Pruning"],
    answer: "Chemical control"
  },
  {
    question: "Which type of irrigation involves water falling like rain?",
    options: ["Sprinkler", "Drip", "Furrow", "Surface"],
    answer: "Sprinkler"
  },
  {
    question: "Which factor affects seed germination?",
    options: ["Temperature", "Weeding", "Pruning", "Harvesting"],
    answer: "Temperature"
  },
  {
    question: "Which of the following crops is susceptible to viral diseases?",
    options: ["Tomato", "Cassava", "Maize", "Cocoa"],
    answer: "Tomato"
  },
  {
    question: "Which soil type has high water-holding capacity?",
    options: ["Clay", "Sandy", "Gravelly", "Loamy sand"],
    answer: "Clay"
  },
  {
    question: "Which of the following is a method of improving soil fertility?",
    options: ["Crop rotation", "Weeding", "Irrigation", "Ploughing only"],
    answer: "Crop rotation"
  },
  {
    question: "Which of these is an example of integrated pest management (IPM)?",
    options: ["Biological control", "Burning residues", "Overgrazing", "Continuous cropping"],
    answer: "Biological control"
  },
  {
    question: "Which crop is affected by weevils during storage?",
    options: ["Maize", "Tomato", "Cocoa", "Yam"],
    answer: "Maize"
  },
  {
    question: "Which practice improves water infiltration in soil?",
    options: ["Ploughing", "Mulching", "Overgrazing", "Deforestation"],
    answer: "Ploughing"
  },
  {
    question: "Which of the following is a type of tillage?",
    options: ["Zero tillage", "Vaccination", "Deworming", "Feeding"],
    answer: "Zero tillage"
  },
  {
    question: "Which farm enterprise is concerned with rearing pigs?",
    options: ["Piggery", "Apiculture", "Poultry", "Aquaculture"],
    answer: "Piggery"
  },
  {
    question: "Which of the following crops is propagated using vegetative methods?",
    options: ["Cassava", "Maize", "Cowpea", "Rice"],
    answer: "Cassava"
  },
  {
    question: "Which of these is a benefit of crop rotation?",
    options: ["Reduce pests", "Reduce soil fertility", "Increase disease", "Increase weeds"],
    answer: "Reduce pests"
  },
  {
    question: "Which method of planting reduces soil erosion on slopes?",
    options: ["Contour planting", "Broadcasting", "Transplanting", "Intercropping"],
    answer: "Contour planting"
  },
  {
    question: "Which of these crops is a leguminous cover crop?",
    options: ["Cowpea", "Maize", "Cassava", "Rice"],
    answer: "Cowpea"
  },
  {
    question: "Which of the following is a method of weed control?",
    options: ["Herbicide application", "Mulching", "Weeding", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which crop is harvested for its fruits?",
    options: ["Pineapple", "Cassava", "Maize", "Yam"],
    answer: "Pineapple"
  },
  {
    question: "Which soil management practice improves soil structure?",
    options: ["Ploughing", "Mulching", "Fertilizing", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which farm enterprise is concerned with rearing chickens?",
    options: ["Poultry", "Apiculture", "Piggery", "Aquaculture"],
    answer: "Poultry"
  },
  {
    question: "Which crop requires transplanting for optimal yield?",
    options: ["Rice", "Maize", "Cowpea", "Cassava"],
    answer: "Rice"
  },
  {
    question: "Which of the following is an economic importance of agriculture?",
    options: ["Provide food", "Create jobs", "Provide raw materials", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which method is used to prevent soil erosion in hilly areas?",
    options: ["Terracing", "Mulching", "Ploughing", "Broadcasting"],
    answer: "Terracing"
  },
  {
    question: "Which of these crops is grown mainly for its seed?",
    options: ["Maize", "Cassava", "Pineapple", "Yam"],
    answer: "Maize"
  },
  {
    question: "Which practice ensures sustainable crop production?",
    options: ["Crop rotation", "Overgrazing", "Deforestation", "Continuous monocropping"],
    answer: "Crop rotation"
  },
  {
    question: "Which type of irrigation uses pipes and emitters to supply water directly to roots?",
    options: ["Drip", "Sprinkler", "Furrow", "Surface"],
    answer: "Drip"
  },
  {
    question: "Which farm enterprise deals with the rearing of fish?",
    options: ["Aquaculture", "Poultry", "Apiculture", "Piggery"],
    answer: "Aquaculture"
  },
  {
    question: "Which soil conservation practice involves planting grass along contours?",
    options: ["Grassed waterways", "Ploughing", "Irrigation", "Mulching"],
    answer: "Grassed waterways"
  },
  {
    question: "Which crop is mainly grown for its leaves as food?",
    options: ["Spinach", "Maize", "Cassava", "Rice"],
    answer: "Spinach"
  },
  {
    question: "Which of these farm practices reduces post-harvest losses?",
    options: ["Proper storage", "Overgrazing", "Excessive irrigation", "Deforestation"],
    answer: "Proper storage"
  },
  {
    question: "Which of the following is a benefit of mulching?",
    options: ["Conserve soil moisture", "Control weeds", "Improve soil fertility", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of these crops is suitable for intercropping with maize?",
    options: ["Cowpea", "Cassava", "Pineapple", "Yam"],
    answer: "Cowpea"
  },
  {
    question: "Which of these practices improves soil fertility naturally?",
    options: ["Green manure", "Chemical fertilizer only", "Overgrazing", "Continuous monocropping"],
    answer: "Green manure"
  },
  {
    question: "Which of the following helps in preventing soil erosion?",
    options: ["Mulching", "Deforestation", "Overgrazing", "All of the above"],
    answer: "Mulching"
  },
  {
    question: "Which crop is harvested for its stem or tuber?",
    options: ["Cassava", "Maize", "Cowpea", "Rice"],
    answer: "Cassava"
  },
  {
    question: "Which practice involves alternating crops on the same land?",
    options: ["Crop rotation", "Monocropping", "Deforestation", "Overgrazing"],
    answer: "Crop rotation"
  },
  {
    question: "Which method of pest control uses natural enemies?",
    options: ["Biological control", "Chemical control", "Manual weeding", "Fertilization"],
    answer: "Biological control"
  },
  {
    question: "Which of these crops is grown for its seeds as food?",
    options: ["Maize", "Cassava", "Pineapple", "Yam"],
    answer: "Maize"
  },
  {
    question: "Which practice prevents water loss from soil?",
    options: ["Mulching", "Ploughing", "Deforestation", "Overgrazing"],
    answer: "Mulching"
  },
  {
    question: "Which soil type is ideal for vegetable cultivation?",
    options: ["Loamy soil", "Clay", "Sandy soil", "Laterite"],
    answer: "Loamy soil"
  },
  {
    question: "Which of the following is a monogastric animal?",
    options: ["Pig", "Cow", "Sheep", "Goat"],
    answer: "Pig"
  },
  {
    question: "Which of these is a ruminant animal?",
    options: ["Goat", "Pig", "Chicken", "Rabbit"],
    answer: "Goat"
  },
  {
    question: "Which animal is primarily reared for meat production?",
    options: ["Broiler chicken", "Cow", "Goat", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which feed is high in protein for livestock?",
    options: ["Soybean meal", "Maize", "Rice bran", "Cassava"],
    answer: "Soybean meal"
  },
  {
    question: "Which of the following is a method of livestock breeding?",
    options: ["Artificial insemination", "Vaccination", "Deworming", "Grazing"],
    answer: "Artificial insemination"
  },
  {
    question: "Which disease is caused by bacteria in livestock?",
    options: ["Anthrax", "Newcastle disease", "Fowl pox", "Coccidiosis"],
    answer: "Anthrax"
  },
  {
    question: "Which practice prevents the spread of diseases in animals?",
    options: ["Vaccination", "Overcrowding", "Poor hygiene", "Mixing ages"],
    answer: "Vaccination"
  },
  {
    question: "Which of these is a non-infectious disease in livestock?",
    options: ["Nutrient deficiency", "Anthrax", "Newcastle disease", "Fowl pox"],
    answer: "Nutrient deficiency"
  },
  {
    question: "Which of the following is used for parasite control in animals?",
    options: ["Deworming drugs", "Antibiotics", "Vaccines", "Hormones"],
    answer: "Deworming drugs"
  },
  {
    question: "Which breed of cow is known for high milk production?",
    options: ["Friesian", "N'Dama", "West African Dwarf", "Local Zebu"],
    answer: "Friesian"
  },
  {
    question: "Which type of poultry is reared for eggs?",
    options: ["Layer", "Broiler", "Turkey", "Duck"],
    answer: "Layer"
  },
  {
    question: "Which animal is suitable for intensive rearing?",
    options: ["Broiler chicken", "Goat", "Sheep", "Local pig"],
    answer: "Broiler chicken"
  },
  {
    question: "Which of the following is a sign of malnutrition in livestock?",
    options: ["Stunted growth", "Normal growth", "High fertility", "High milk yield"],
    answer: "Stunted growth"
  },
  {
    question: "Which of the following is a component of animal feed?",
    options: ["Carbohydrates", "Proteins", "Fats", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which practice improves reproductive efficiency in livestock?",
    options: ["Proper feeding", "Vaccination", "Overcrowding", "Neglect"],
    answer: "Proper feeding"
  },
  {
    question: "Which of these is an internal parasite in livestock?",
    options: ["Roundworm", "Tick", "Lice", "Flea"],
    answer: "Roundworm"
  },
  {
    question: "Which of the following affects egg production in poultry?",
    options: ["Light intensity", "Nutrition", "Disease", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of these is a method of controlling ectoparasites?",
    options: ["Dipping", "Feeding", "Vaccination", "Breeding"],
    answer: "Dipping"
  },
  {
    question: "Which of the following is a sign of good health in livestock?",
    options: ["Shiny coat", "Lethargy", "Loss of appetite", "Diarrhea"],
    answer: "Shiny coat"
  },
  {
    question: "Which type of livestock system allows animals to graze freely?",
    options: ["Extensive", "Intensive", "Semi-intensive", "Zero-grazing"],
    answer: "Extensive"
  },
  {
    question: "Which breed of sheep is known for wool production?",
    options: ["Merino", "Dorper", "West African Dwarf", "N'Dama"],
    answer: "Merino"
  },
  {
    question: "Which of these is a reproductive hormone in livestock?",
    options: ["Oxytocin", "Insulin", "Adrenaline", "Thyroxine"],
    answer: "Oxytocin"
  },
  {
    question: "Which of these animals is suitable for zero-grazing system?",
    options: ["Dairy cow", "Goat", "Sheep", "All of the above"],
    answer: "Dairy cow"
  },
  {
    question: "Which of the following is a common poultry disease?",
    options: ["Newcastle disease", "Anthrax", "Blackleg", "Foot rot"],
    answer: "Newcastle disease"
  },
  {
    question: "Which practice improves feed efficiency in livestock?",
    options: ["Balanced diet", "Overfeeding", "Starvation", "Poor housing"],
    answer: "Balanced diet"
  },
  {
    question: "Which of these livestock products is used in making cheese?",
    options: ["Milk", "Eggs", "Meat", "Honey"],
    answer: "Milk"
  },
  {
    question: "Which of the following is a sign of dehydration in animals?",
    options: ["Sunken eyes", "Shiny coat", "High milk yield", "Normal behavior"],
    answer: "Sunken eyes"
  },
  {
    question: "Which animal is reared for both meat and milk production?",
    options: ["Cow", "Chicken", "Pig", "Rabbit"],
    answer: "Cow"
  },
  {
    question: "Which of the following is an advantage of crossbreeding?",
    options: ["Improved traits", "Disease susceptibility", "Reduced fertility", "Slower growth"],
    answer: "Improved traits"
  },
  {
    question: "Which farm enterprise involves rearing bees for honey?",
    options: ["Apiculture", "Poultry", "Aquaculture", "Piggery"],
    answer: "Apiculture"
  },
  {
    question: "Which of these is a method of artificial breeding in animals?",
    options: ["Artificial insemination", "Grazing", "Feeding", "Vaccination"],
    answer: "Artificial insemination"
  },
  {
    question: "Which of the following livestock feeds is high in fiber?",
    options: ["Hay", "Maize meal", "Fish meal", "Soybean meal"],
    answer: "Hay"
  },
  {
    question: "Which of these is an advantage of intensive livestock farming?",
    options: ["High production", "Low management", "Poor hygiene", "Low disease control"],
    answer: "High production"
  },
  {
    question: "Which of these affects reproductive efficiency in livestock?",
    options: ["Nutrition", "Disease", "Temperature", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which practice improves longevity of livestock?",
    options: ["Proper housing", "Neglect", "Overcrowding", "Poor feeding"],
    answer: "Proper housing"
  },
  {
    question: "Which animal product is used in producing leather?",
    options: ["Skin", "Milk", "Eggs", "Honey"],
    answer: "Skin"
  },
  {
    question: "Which of these is a non-infectious disease in poultry?",
    options: ["Nutrient deficiency", "Newcastle disease", "Fowl pox", "Coccidiosis"],
    answer: "Nutrient deficiency"
  },
  {
    question: "Which livestock system is suitable for urban areas with limited space?",
    options: ["Zero-grazing", "Extensive", "Free-range", "Pasture grazing"],
    answer: "Zero-grazing"
  },
  {
    question: "Which practice helps in controlling animal diseases?",
    options: ["Vaccination", "Overcrowding", "Poor hygiene", "Mixing ages"],
    answer: "Vaccination"
  },
  {
    question: "Which of these is a sign of good reproductive performance in livestock?",
    options: ["High fertility", "Low milk yield", "Weak offspring", "Slow growth"],
    answer: "High fertility"
  },
  {
    question: "Which of the following livestock feeds is energy-rich?",
    options: ["Maize", "Hay", "Grass", "Straw"],
    answer: "Maize"
  },
  {
    question: "Which animal is commonly reared for wool?",
    options: ["Sheep", "Pig", "Chicken", "Goat"],
    answer: "Sheep"
  },
  {
    question: "Which farm practice reduces post-harvest losses in animal products?",
    options: ["Proper storage", "Overcrowding", "Overfeeding", "Neglect"],
    answer: "Proper storage"
  },
  {
    question: "Which animal is reared for both meat and hides?",
    options: ["Cattle", "Pig", "Chicken", "Rabbit"],
    answer: "Cattle"
  },
  {
    question: "Which of the following improves egg production in poultry?",
    options: ["Balanced diet", "Poor lighting", "Stress", "Disease"],
    answer: "Balanced diet"
  },
  {
    question: "Which of these farm practices ensures sustainable livestock production?",
    options: ["Proper feeding", "Adequate housing", "Disease control", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which livestock enterprise is considered a secondary source of income?",
    options: ["Beekeeping", "Cattle rearing", "Pig farming", "Poultry"],
    answer: "Beekeeping"
  },
  {
    question: "Which of the following is a benefit of livestock to humans?",
    options: ["Food supply", "Income generation", "Raw materials", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which animal requires high protein feed for growth?",
    options: ["Broiler chicken", "Cow", "Sheep", "Goat"],
    answer: "Broiler chicken"
  },
  {
    question: "Which of these diseases is controlled by vaccination in poultry?",
    options: ["Newcastle disease", "Coccidiosis", "Fowl pox", "All of the above"],
    answer: "Newcastle disease"
  },
  {
    question: "Which type of breeding involves mating animals of the same breed?",
    options: ["Pure breeding", "Crossbreeding", "Artificial insemination", "None of the above"],
    answer: "Pure breeding"
  },
  {
    question: "Which of these livestock enterprises can be integrated with crop farming?",
    options: ["Pig farming", "Poultry", "Cattle rearing", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which practice helps reduce animal stress and increase productivity?",
    options: ["Proper housing", "Overcrowding", "Poor feeding", "Neglect"],
    answer: "Proper housing"
  },
  {
    question: "Which of these is a benefit of intensive livestock farming?",
    options: ["High productivity", "Low disease control", "Poor hygiene", "Low feeding efficiency"],
    answer: "High productivity"
  },
  {
    question: "Which of the following is a factor of production in agriculture?",
    options: ["Land", "Labour", "Capital", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of these is a form of farm capital?",
    options: ["Tractors", "Seeds", "Fertilizers", "Labour"],
    answer: "Tractors"
  },
  {
    question: "Which of the following is a fixed cost in farming?",
    options: ["Purchase of land", "Fertilizers", "Seeds", "Labour wages"],
    answer: "Purchase of land"
  },
  {
    question: "Which of these is a variable cost in agriculture?",
    options: ["Seed purchase", "Farm building", "Tractor", "Land lease"],
    answer: "Seed purchase"
  },
  {
    question: "Which type of farming is practiced on a small scale with family labour?",
    options: ["Subsistence farming", "Commercial farming", "Industrial farming", "Plantation farming"],
    answer: "Subsistence farming"
  },
  {
    question: "Which of these is a method of improving soil fertility?",
    options: ["Crop rotation", "Monocropping", "Overgrazing", "Deforestation"],
    answer: "Crop rotation"
  },
  {
    question: "Which of the following reduces soil erosion?",
    options: ["Contour farming", "Overcultivation", "Deforestation", "Overgrazing"],
    answer: "Contour farming"
  },
  {
    question: "Which practice conserves water in agriculture?",
    options: ["Mulching", "Overwatering", "Clear-cutting", "Burning crop residues"],
    answer: "Mulching"
  },
  {
    question: "Which of the following is a consequence of overgrazing?",
    options: ["Soil erosion", "Improved pasture", "Reduced weeds", "Increased fertility"],
    answer: "Soil erosion"
  },
  {
    question: "Which of these farm tools is used for tilling the soil?",
    options: ["Hoe", "Sickle", "Spade", "Rake"],
    answer: "Hoe"
  },
  {
    question: "Which of the following is a farm record used to track expenses?",
    options: ["Cash book", "Labour register", "Crop calendar", "Weighing scale"],
    answer: "Cash book"
  },
  {
    question: "Which farm enterprise deals with production of crops for sale?",
    options: ["Commercial farming", "Subsistence farming", "Mixed farming", "Poultry farming"],
    answer: "Commercial farming"
  },
  {
    question: "Which of the following is a benefit of mechanization in agriculture?",
    options: ["Increased efficiency", "High labour costs", "Low yield", "Poor soil preparation"],
    answer: "Increased efficiency"
  },
  {
    question: "Which type of soil is best for rice cultivation?",
    options: ["Clay soil", "Sandy soil", "Loamy soil", "Rocky soil"],
    answer: "Clay soil"
  },
  {
    question: "Which of these is a method of controlling weeds?",
    options: ["Herbicides", "Crop rotation", "Mulching", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of the following is a benefit of organic farming?",
    options: ["Reduced chemical use", "High input cost", "Soil degradation", "Water pollution"],
    answer: "Reduced chemical use"
  },
  {
    question: "Which type of fertilizer provides quick nutrients to plants?",
    options: ["Chemical fertilizer", "Organic manure", "Green manure", "Compost"],
    answer: "Chemical fertilizer"
  },
  {
    question: "Which of the following is a practice that protects the environment?",
    options: ["Afforestation", "Slash-and-burn", "Deforestation", "Overgrazing"],
    answer: "Afforestation"
  },
  {
    question: "Which of these is a non-point source of water pollution?",
    options: ["Runoff from farms", "Effluent from factory", "Domestic sewage", "Oil spill"],
    answer: "Runoff from farms"
  },
  {
    question: "Which practice reduces soil compaction?",
    options: ["Avoiding overgrazing", "Overcultivation", "Monocropping", "Deforestation"],
    answer: "Avoiding overgrazing"
  },
  {
    question: "Which type of pest destroys stored farm produce?",
    options: ["Weevils", "Locusts", "Termites", "Aphids"],
    answer: "Weevils"
  },
  {
    question: "Which of the following is a method of integrated pest management?",
    options: ["Biological control", "Chemical control", "Cultural control", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of these livestock diseases is caused by viruses?",
    options: ["Newcastle disease", "Anthrax", "Blackleg", "Foot rot"],
    answer: "Newcastle disease"
  },
  {
    question: "Which agricultural enterprise is involved in fish farming?",
    options: ["Aquaculture", "Apiculture", "Poultry farming", "Pig farming"],
    answer: "Aquaculture"
  },
  {
    question: "Which practice improves soil aeration?",
    options: ["Tilling", "Mulching", "Irrigation", "Weeding"],
    answer: "Tilling"
  },
  {
    question: "Which of the following is a symptom of nutrient deficiency in plants?",
    options: ["Chlorosis", "Normal growth", "High yield", "Strong stem"],
    answer: "Chlorosis"
  },
  {
    question: "Which of the following is a method of preventing post-harvest losses?",
    options: ["Proper storage", "Early harvesting", "Overcrowding", "Neglect"],
    answer: "Proper storage"
  },
  {
    question: "Which of these is an example of a renewable agricultural resource?",
    options: ["Water", "Land", "Fertilizer", "Pesticide"],
    answer: "Water"
  },
  {
    question: "Which of the following is a factor that affects crop yield?",
    options: ["Soil fertility", "Climate", "Pest infestation", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which type of farming involves keeping crops and livestock together?",
    options: ["Mixed farming", "Monocropping", "Subsistence farming", "Plantation farming"],
    answer: "Mixed farming"
  },
  {
    question: "Which practice improves water retention in soil?",
    options: ["Mulching", "Overcultivation", "Deforestation", "Overgrazing"],
    answer: "Mulching"
  },
  {
    question: "Which farm tool is used for harvesting crops?",
    options: ["Sickle", "Hoe", "Plough", "Rake"],
    answer: "Sickle"
  },
  {
    question: "Which practice ensures farm sustainability?",
    options: ["Crop rotation", "Overgrazing", "Slash-and-burn", "Monocropping"],
    answer: "Crop rotation"
  },
  {
    question: "Which of the following is a source of agricultural credit?",
    options: ["Banks", "Cooperative societies", "Government", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of these is a function of agricultural extension services?",
    options: ["Educating farmers", "Supplying seeds", "Marketing produce", "Collecting taxes"],
    answer: "Educating farmers"
  },
  {
    question: "Which of the following is a sign of plant disease?",
    options: ["Wilting", "Strong growth", "High yield", "Healthy leaves"],
    answer: "Wilting"
  },
  {
    question: "Which of the following is a practice to prevent soil acidity?",
    options: ["Liming", "Overcultivation", "Monocropping", "Deforestation"],
    answer: "Liming"
  },
  {
    question: "Which of these livestock products can be stored for a long time?",
    options: ["Eggs", "Milk", "Fresh meat", "All perish quickly"],
    answer: "Eggs"
  },
  {
    question: "Which type of soil is best for vegetable cultivation?",
    options: ["Loamy soil", "Sandy soil", "Clay soil", "Rocky soil"],
    answer: "Loamy soil"
  },
  {
    question: "Which agricultural practice improves biodiversity?",
    options: ["Agroforestry", "Monocropping", "Overgrazing", "Slash-and-burn"],
    answer: "Agroforestry"
  },
  {
    question: "Which of the following reduces desertification?",
    options: ["Afforestation", "Overgrazing", "Slash-and-burn", "Deforestation"],
    answer: "Afforestation"
  },
  {
    question: "Which of these is an effect of over-irrigation?",
    options: ["Waterlogging", "High yield", "Improved fertility", "Reduced soil erosion"],
    answer: "Waterlogging"
  },
  {
    question: "Which farm enterprise involves rearing animals for wool, meat, or milk?",
    options: ["Animal husbandry", "Crop farming", "Apiculture", "Aquaculture"],
    answer: "Animal husbandry"
  },
  {
    question: "Which of the following is an example of farm marketing?",
    options: ["Selling produce", "Crop rotation", "Weeding", "Ploughing"],
    answer: "Selling produce"
  },
  {
    question: "Which farm activity involves recording income and expenditure?",
    options: ["Bookkeeping", "Ploughing", "Weeding", "Harvesting"],
    answer: "Bookkeeping"
  },
  {
    question: "Which practice reduces soil nutrient loss?",
    options: ["Cover cropping", "Overcultivation", "Overgrazing", "Deforestation"],
    answer: "Cover cropping"
  },
  {
    question: "Which of these is a symptom of viral plant disease?",
    options: ["Mosaic pattern on leaves", "Wilting", "Stem rot", "Normal growth"],
    answer: "Mosaic pattern on leaves"
  },
  {
    question: "Which of the following is an advantage of irrigation farming?",
    options: ["Crop growth during dry season", "High dependence on rainfall", "Reduced production", "Low yield"],
    answer: "Crop growth during dry season"
  },
  {
    question: "Which farm practice helps prevent pest infestation?",
    options: ["Crop rotation", "Monocropping", "Neglecting fields", "Slash-and-burn"],
    answer: "Crop rotation"
  },
  {
    question: "Which of these is a source of farm labour?",
    options: ["Family members", "Hired workers", "Community labour", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which agricultural enterprise involves honey production?",
    options: ["Apiculture", "Aquaculture", "Poultry farming", "Pig farming"],
    answer: "Apiculture"
  },
  {
    question: "Which of the following is a sustainable farming practice?",
    options: ["Agroforestry", "Overgrazing", "Slash-and-burn", "Monocropping"],
    answer: "Agroforestry"
  },
  {
    question: "Which type of soil erosion occurs due to wind?",
    options: ["Aeolian erosion", "Water erosion", "Gully erosion", "Sheet erosion"],
    answer: "Aeolian erosion"
  },
  {
    question: "Which of the following causes plant diseases?",
    options: ["Bacteria", "Fungi", "Viruses", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which disease affects cocoa plants?",
    options: ["Black pod disease", "Rinderpest", "Foot-and-mouth disease", "Mosaic virus"],
    answer: "Black pod disease"
  },
  {
    question: "Which pest is commonly found in stored grains?",
    options: ["Weevils", "Locusts", "Armyworms", "Aphids"],
    answer: "Weevils"
  },
  {
    question: "Which of the following is a method of controlling fungal diseases?",
    options: ["Fungicides", "Herbicides", "Insecticides", "All of the above"],
    answer: "Fungicides"
  },
  {
    question: "Which soil type is best for yam cultivation?",
    options: ["Loamy soil", "Clay soil", "Sandy soil", "Saline soil"],
    answer: "Loamy soil"
  },
  {
    question: "Which method improves soil fertility naturally?",
    options: ["Green manure", "Chemical fertilizer", "Slash-and-burn", "Overcultivation"],
    answer: "Green manure"
  },
  {
    question: "Which of these practices prevents nutrient loss from soil?",
    options: ["Cover cropping", "Overgrazing", "Deforestation", "Monocropping"],
    answer: "Cover cropping"
  },
  {
    question: "Which of the following is a benefit of agroprocessing?",
    options: ["Value addition", "Increased shelf life", "Employment creation", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of these is a method of crop preservation?",
    options: ["Drying", "Canning", "Freezing", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which disease affects cassava plants?",
    options: ["Cassava mosaic disease", "Rinderpest", "Black pod", "Leaf blight"],
    answer: "Cassava mosaic disease"
  },
  {
    question: "Which practice reduces the spread of plant diseases?",
    options: ["Field sanitation", "Overcrowding crops", "Over-irrigation", "Monocropping"],
    answer: "Field sanitation"
  },
  {
    question: "Which of the following is a physical method of pest control?",
    options: ["Handpicking", "Traps", "Barriers", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which nutrient is essential for strong stem growth in plants?",
    options: ["Potassium", "Nitrogen", "Phosphorus", "Calcium"],
    answer: "Calcium"
  },
  {
    question: "Which of these is a source of organic fertilizer?",
    options: ["Compost", "Bone meal", "Manure", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which type of irrigation is suitable for sandy soils?",
    options: ["Drip irrigation", "Flood irrigation", "Furrow irrigation", "Sprinkler irrigation"],
    answer: "Drip irrigation"
  },
  {
    question: "Which of the following is a non-chemical method of weed control?",
    options: ["Mulching", "Herbicides", "Insecticides", "Fungicides"],
    answer: "Mulching"
  },
  {
    question: "Which crop requires well-drained sandy loam soils?",
    options: ["Carrots", "Rice", "Yam", "Maize"],
    answer: "Carrots"
  },
  {
    question: "Which of these is an example of value-added agricultural product?",
    options: ["Tomato paste", "Fresh tomato", "Raw cassava", "Unprocessed maize"],
    answer: "Tomato paste"
  },
  {
    question: "Which practice improves soil structure?",
    options: ["Organic matter addition", "Overcultivation", "Overgrazing", "Deforestation"],
    answer: "Organic matter addition"
  },
  {
    question: "Which agricultural activity is involved in processing cassava into garri?",
    options: ["Agroprocessing", "Crop rotation", "Weeding", "Irrigation"],
    answer: "Agroprocessing"
  },
  {
    question: "Which pest attacks stored cocoa beans?",
    options: ["Cocoa beetle", "Locust", "Armyworm", "Termite"],
    answer: "Cocoa beetle"
  },
  {
    question: "Which fertilizer is high in nitrogen?",
    options: ["Urea", "Superphosphate", "Potash", "Compost"],
    answer: "Urea"
  },
  {
    question: "Which method of controlling weeds uses selective chemicals?",
    options: ["Herbicides", "Insecticides", "Fungicides", "Pesticides"],
    answer: "Herbicides"
  },
  {
    question: "Which of the following is a symptom of bacterial plant disease?",
    options: ["Wilting", "Leaf spots", "Root rot", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which practice reduces soil acidity?",
    options: ["Liming", "Overcultivation", "Overgrazing", "Deforestation"],
    answer: "Liming"
  },
  {
    question: "Which of these is a type of post-harvest loss?",
    options: ["Mechanical damage", "Pest infestation", "Microbial spoilage", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which livestock enterprise produces milk and meat?",
    options: ["Dairy and beef cattle", "Poultry farming", "Apiculture", "Aquaculture"],
    answer: "Dairy and beef cattle"
  },
  {
    question: "Which of the following is an example of agribusiness?",
    options: ["Seed production", "Fertilizer distribution", "Food processing", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which agricultural product is processed into ethanol?",
    options: ["Sugarcane", "Maize", "Cassava", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of these is a cultural method of pest control?",
    options: ["Crop rotation", "Intercropping", "Field sanitation", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which nutrient deficiency causes yellowing of older leaves?",
    options: ["Nitrogen", "Potassium", "Phosphorus", "Calcium"],
    answer: "Nitrogen"
  },
  {
    question: "Which of the following is a symptom of viral plant disease?",
    options: ["Mosaic pattern on leaves", "Root rot", "Wilting", "Stem gall"],
    answer: "Mosaic pattern on leaves"
  },
  {
    question: "Which type of soil erosion occurs on sloping lands?",
    options: ["Gully erosion", "Sheet erosion", "Wind erosion", "None of the above"],
    answer: "Gully erosion"
  },
  {
    question: "Which practice enhances soil water retention?",
    options: ["Mulching", "Overcultivation", "Deforestation", "Overgrazing"],
    answer: "Mulching"
  },
  {
    question: "Which agricultural enterprise involves rearing bees for honey?",
    options: ["Apiculture", "Poultry farming", "Aquaculture", "Animal husbandry"],
    answer: "Apiculture"
  },
  {
    question: "Which of the following is a method of increasing farm income?",
    options: ["Diversification", "Overcultivation", "Slash-and-burn", "Monocropping"],
    answer: "Diversification"
  },
  {
    question: "Which method is used to conserve soil on steep slopes?",
    options: ["Terracing", "Overcultivation", "Slash-and-burn", "Monocropping"],
    answer: "Terracing"
  },
  {
    question: "Which farm activity involves grading, sorting, and packaging produce?",
    options: ["Post-harvest handling", "Planting", "Irrigation", "Weeding"],
    answer: "Post-harvest handling"
  },
  {
    question: "Which of these improves soil fertility over time?",
    options: ["Organic manure", "Chemical fertilizers alone", "Monocropping", "Overgrazing"],
    answer: "Organic manure"
  },
  {
    question: "Which pest destroys maize leaves in the field?",
    options: ["Armyworm", "Weevil", "Termite", "Aphid"],
    answer: "Armyworm"
  },
  {
    question: "Which agricultural product is processed into flour?",
    options: ["Cassava", "Wheat", "Maize", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of these is a chemical method of pest control?",
    options: ["Insecticides", "Handpicking", "Traps", "Barriers"],
    answer: "Insecticides"
  },
  {
    question: "Which practice helps maintain soil biodiversity?",
    options: ["Cover cropping", "Overgrazing", "Monocropping", "Deforestation"],
    answer: "Cover cropping"
  },
  {
    question: "Which method is used to process milk into cheese?",
    options: ["Coagulation", "Fermentation", "Pasteurization", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of the following is a characteristic of sustainable agriculture?",
    options: ["Soil conservation", "Biodiversity", "Economic viability", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which agricultural enterprise involves producing silk?",
    options: ["Sericulture", "Apiculture", "Aquaculture", "Poultry farming"],
    answer: "Sericulture"
  },
  {
    question: "Which method is used to control nematodes in crops?",
    options: ["Crop rotation", "Chemical nematicides", "Resistant varieties", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which type of crop is suitable for dryland farming?",
    options: ["Sorghum", "Rice", "Taro", "Swamp yam"],
    answer: "Sorghum"
  },
  {
    question: "Which agricultural practice reduces soil salinity?",
    options: ["Leaching", "Over-irrigation", "Overgrazing", "Deforestation"],
    answer: "Leaching"
  },
  {
    question: "Which disease affects poultry birds?",
    options: ["Newcastle disease", "Foot-and-mouth disease", "Rinderpest", "Swine fever"],
    answer: "Newcastle disease"
  },
  {
    question: "Which type of feed is high in protein?",
    options: ["Soybean meal", "Maize", "Cassava peels", "Rice husk"],
    answer: "Soybean meal"
  },
  {
    question: "Which of the following is a common parasite in sheep?",
    options: ["Liver fluke", "Weevil", "Armyworm", "Aphid"],
    answer: "Liver fluke"
  },
  {
    question: "Which livestock enterprise produces both meat and milk?",
    options: ["Cattle farming", "Poultry farming", "Rabbit farming", "Apiculture"],
    answer: "Cattle farming"
  },
  {
    question: "Which practice improves animal productivity?",
    options: ["Balanced diet", "Overcrowding", "Poor sanitation", "Neglect"],
    answer: "Balanced diet"
  },
  {
    question: "Which disease is viral and affects pigs?",
    options: ["Swine fever", "Rinderpest", "Mastitis", "Fowl pox"],
    answer: "Swine fever"
  },
  {
    question: "Which livestock requires deep litter or battery cage housing?",
    options: ["Poultry", "Cattle", "Sheep", "Goats"],
    answer: "Poultry"
  },
  {
    question: "Which of the following is a zoonotic disease?",
    options: ["Anthrax", "Foot-and-mouth disease", "Mastitis", "Newcastle disease"],
    answer: "Anthrax"
  },
  {
    question: "Which type of feed is fibrous and low in protein?",
    options: ["Hay", "Soybean meal", "Fishmeal", "Groundnut cake"],
    answer: "Hay"
  },
  {
    question: "Which parasite affects the digestive system of livestock?",
    options: ["Roundworm", "Armyworm", "Locust", "Termite"],
    answer: "Roundworm"
  },
  {
    question: "Which livestock enterprise is involved in egg production?",
    options: ["Poultry farming", "Cattle farming", "Sheep farming", "Rabbit farming"],
    answer: "Poultry farming"
  },
  {
    question: "Which practice prevents livestock diseases?",
    options: ["Vaccination", "Neglect", "Overcrowding", "Poor feeding"],
    answer: "Vaccination"
  },
  {
    question: "Which mineral is essential for bone development in animals?",
    options: ["Calcium", "Nitrogen", "Potassium", "Phosphorus"],
    answer: "Calcium"
  },
  {
    question: "Which of these is a symptom of mastitis in cows?",
    options: ["Swollen udder", "Loss of feathers", "Lameness", "Diarrhea"],
    answer: "Swollen udder"
  },
  {
    question: "Which feed component provides energy for livestock?",
    options: ["Carbohydrates", "Vitamins", "Minerals", "Water"],
    answer: "Carbohydrates"
  },
  {
    question: "Which livestock enterprise involves rearing bees?",
    options: ["Apiculture", "Poultry farming", "Cattle farming", "Rabbit farming"],
    answer: "Apiculture"
  },
  {
    question: "Which method is used to improve livestock genetics?",
    options: ["Selective breeding", "Overfeeding", "Overcrowding", "Neglect"],
    answer: "Selective breeding"
  },
  {
    question: "Which livestock disease affects young calves and causes diarrhea?",
    options: ["Scours", "Rinderpest", "Swine fever", "Newcastle disease"],
    answer: "Scours"
  },
  {
    question: "Which feed is suitable for poultry chicks?",
    options: ["Starter mash", "Hay", "Cassava peels", "Rice husk"],
    answer: "Starter mash"
  },
  {
    question: "Which livestock disease is controlled by quarantine?",
    options: ["Foot-and-mouth disease", "Mastitis", "Scours", "Coccidiosis"],
    answer: "Foot-and-mouth disease"
  },
  {
    question: "Which of the following is a source of vitamins for livestock?",
    options: ["Green fodder", "Maize meal", "Rice husk", "Groundnut cake"],
    answer: "Green fodder"
  },
  {
    question: "Which livestock enterprise produces wool?",
    options: ["Sheep farming", "Poultry farming", "Goat farming", "Cattle farming"],
    answer: "Sheep farming"
  },
  {
    question: "Which type of housing is suitable for goats?",
    options: ["Simple shed", "Battery cage", "Deep litter", "Aquarium"],
    answer: "Simple shed"
  },
  {
    question: "Which practice prevents feed spoilage in livestock farming?",
    options: ["Proper storage", "Leaving feed in open", "Overwatering feed", "Neglect"],
    answer: "Proper storage"
  },
  {
    question: "Which disease affects the lungs of livestock?",
    options: ["Pneumonia", "Mastitis", "Scours", "Foot-and-mouth disease"],
    answer: "Pneumonia"
  },
  {
    question: "Which type of fish farming involves tanks or ponds?",
    options: ["Aquaculture", "Apiculture", "Poultry farming", "Rabbit farming"],
    answer: "Aquaculture"
  },
  {
    question: "Which livestock enterprise requires milking equipment?",
    options: ["Dairy cattle farming", "Poultry farming", "Sheep farming", "Rabbit farming"],
    answer: "Dairy cattle farming"
  },
  {
    question: "Which of the following is a symptom of coccidiosis in poultry?",
    options: ["Diarrhea", "Lameness", "Swollen udder", "Hair loss"],
    answer: "Diarrhea"
  },
  {
    question: "Which livestock enterprise produces meat only?",
    options: ["Beef cattle", "Dairy cattle", "Poultry layer", "Apiculture"],
    answer: "Beef cattle"
  },
  {
    question: "Which feed is high in calcium for laying hens?",
    options: ["Limestone", "Maize", "Soybean meal", "Rice bran"],
    answer: "Limestone"
  },
  {
    question: "Which livestock disease affects the nervous system?",
    options: ["Rabies", "Mastitis", "Scours", "Foot-and-mouth disease"],
    answer: "Rabies"
  },
  {
    question: "Which livestock enterprise requires vaccination against Newcastle disease?",
    options: ["Poultry farming", "Cattle farming", "Sheep farming", "Rabbit farming"],
    answer: "Poultry farming"
  },
  {
    question: "Which of the following is a by-product of dairy farming?",
    options: ["Milk", "Cheese", "Butter", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which practice ensures clean water for livestock?",
    options: ["Providing potable water", "Sharing water from pond", "Allowing stagnant water", "Neglect"],
    answer: "Providing potable water"
  },
  {
    question: "Which livestock disease is bacterial and causes abortion in cattle?",
    options: ["Brucellosis", "Foot-and-mouth disease", "Mastitis", "Newcastle disease"],
    answer: "Brucellosis"
  },
  {
    question: "Which feed is suitable for finishing pigs?",
    options: ["Grower feed", "Starter mash", "Hay", "Grass"],
    answer: "Grower feed"
  },
  {
    question: "Which practice is essential in preventing pest infestation in stored feed?",
    options: ["Proper storage", "Leaving feed uncovered", "Wet storage", "Neglect"],
    answer: "Proper storage"
  },
  {
    question: "Which livestock enterprise produces silk?",
    options: ["Sericulture", "Apiculture", "Aquaculture", "Poultry farming"],
    answer: "Sericulture"
  },
  {
    question: "Which type of feed is given to pregnant livestock to improve birth weight?",
    options: ["High-protein feed", "Roughage", "Low-energy feed", "Grass only"],
    answer: "High-protein feed"
  },
  {
    question: "Which livestock disease affects the digestive tract of poultry?",
    options: ["Coccidiosis", "Newcastle disease", "Mastitis", "Foot-and-mouth disease"],
    answer: "Coccidiosis"
  },
  {
    question: "Which of these is a measure of biosecurity in livestock farming?",
    options: ["Restricting visitors", "Proper sanitation", "Quarantine new animals", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which livestock enterprise produces honey?",
    options: ["Apiculture", "Poultry farming", "Cattle farming", "Sheep farming"],
    answer: "Apiculture"
  },
  {
    question: "Which type of feed is given to lactating cows to increase milk production?",
    options: ["High-energy feed", "Roughage", "Grass only", "Low-protein feed"],
    answer: "High-energy feed"
  },
  {
    question: "Which livestock disease is viral and affects cattle, causing fever and blisters?",
    options: ["Foot-and-mouth disease", "Mastitis", "Scours", "Rabies"],
    answer: "Foot-and-mouth disease"
  },
  {
    question: "Which practice improves egg quality in poultry?",
    options: ["Balanced diet", "Neglect", "Overcrowding", "Poor sanitation"],
    answer: "Balanced diet"
  },
  {
    question: "Which livestock disease causes swelling of the neck and throat in sheep?",
    options: ["Pulpy kidney disease", "Foot-and-mouth disease", "Coccidiosis", "Newcastle disease"],
    answer: "Pulpy kidney disease"
  },
  {
    question: "Which agricultural activity involves processing farm produce into marketable products?",
    options: ["Agroprocessing", "Weeding", "Irrigation", "Crop rotation"],
    answer: "Agroprocessing"
  },
  {
    question: "Which practice reduces livestock mortality during the rainy season?",
    options: ["Vaccination and proper housing", "Overcrowding", "Poor feeding", "Neglect"],
    answer: "Vaccination and proper housing"
  },
  {
    question: "Which feed ingredient is used to increase protein in livestock diets?",
    options: ["Groundnut cake", "Maize", "Grass", "Rice husk"],
    answer: "Groundnut cake"
  },
  {
    question: "Which livestock disease affects both animals and humans?",
    options: ["Zoonotic disease", "Foot-and-mouth disease", "Mastitis", "Scours"],
    answer: "Zoonotic disease"
  },
  {
    question: "Which livestock enterprise requires broodstock management?",
    options: ["Aquaculture", "Poultry farming", "Rabbit farming", "Apiculture"],
    answer: "Aquaculture"
  },
  {
    question: "Which agricultural product can be processed into soap and oil?",
    options: ["Groundnut", "Cassava", "Rice", "Maize"],
    answer: "Groundnut"
  },
  {
    question: "Which irrigation method is suitable for rice fields?",
    options: ["Flood irrigation", "Sprinkler irrigation", "Drip irrigation", "Furrow irrigation"],
    answer: "Flood irrigation"
  },
  {
    question: "Which is a cash crop in Ghana?",
    options: ["Cocoa", "Maize", "Cassava", "Yam"],
    answer: "Cocoa"
  },
  {
    question: "Which practice improves soil fertility naturally?",
    options: ["Crop rotation", "Mono-cropping", "Overcultivation", "Deforestation"],
    answer: "Crop rotation"
  },
  {
    question: "Which farm enterprise produces processed tomato paste?",
    options: ["Agroprocessing", "Dairy farming", "Poultry farming", "Fish farming"],
    answer: "Agroprocessing"
  },
  {
    question: "Which type of irrigation is water-efficient for vegetables?",
    options: ["Drip irrigation", "Flood irrigation", "Furrow irrigation", "Surface irrigation"],
    answer: "Drip irrigation"
  },
  {
    question: "Which practice reduces soil erosion on slopes?",
    options: ["Terracing", "Slash and burn", "Overgrazing", "Deforestation"],
    answer: "Terracing"
  },
  {
    question: "Which fertilizer is rich in nitrogen?",
    options: ["Urea", "Rock phosphate", "Potash", "Lime"],
    answer: "Urea"
  },
  {
    question: "Which is a staple crop in Ghana?",
    options: ["Maize", "Cocoa", "Oil palm", "Coffee"],
    answer: "Maize"
  },
  {
    question: "Which method involves alternating crops on the same land?",
    options: ["Crop rotation", "Mono-cropping", "Mixed cropping", "Intercropping"],
    answer: "Crop rotation"
  },
  {
    question: "Which irrigation system uses pipes to deliver water directly to plant roots?",
    options: ["Drip irrigation", "Flood irrigation", "Sprinkler irrigation", "Furrow irrigation"],
    answer: "Drip irrigation"
  },
  {
    question: "Which factor determines the choice of crop for a farm?",
    options: ["Soil type", "Market demand", "Climate", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which crop is used for making gari?",
    options: ["Cassava", "Maize", "Yam", "Rice"],
    answer: "Cassava"
  },
  {
    question: "Which farm tool is used for planting seeds in rows?",
    options: ["Seed drill", "Hoe", "Cutlass", "Plough"],
    answer: "Seed drill"
  },
  {
    question: "Which type of soil is best for growing cocoa?",
    options: ["Loamy soil", "Sandy soil", "Clay soil", "Saline soil"],
    answer: "Loamy soil"
  },
  {
    question: "Which fertilizer provides phosphorus for root development?",
    options: ["Rock phosphate", "Urea", "Potash", "Lime"],
    answer: "Rock phosphate"
  },
  {
    question: "Which practice reduces weed infestation on farms?",
    options: ["Weeding", "Overgrazing", "Slash and burn", "Deforestation"],
    answer: "Weeding"
  },
  {
    question: "Which crop is suitable for intercropping with maize?",
    options: ["Groundnut", "Cocoa", "Oil palm", "Coffee"],
    answer: "Groundnut"
  },
  {
    question: "Which method involves mixing organic matter into soil?",
    options: ["Manuring", "Deforestation", "Overcultivation", "Slash and burn"],
    answer: "Manuring"
  },
  {
    question: "Which agroprocessing product is made from oil palm?",
    options: ["Palm oil", "Gari", "Rice flour", "Tomato paste"],
    answer: "Palm oil"
  },
  {
    question: "Which irrigation system sprays water over crops like rainfall?",
    options: ["Sprinkler irrigation", "Flood irrigation", "Drip irrigation", "Furrow irrigation"],
    answer: "Sprinkler irrigation"
  },
  {
    question: "Which factor is most important for farm planning?",
    options: ["Farm size", "Capital", "Labour availability", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which soil type retains water well and is suitable for rice?",
    options: ["Clay soil", "Sandy soil", "Loamy soil", "Saline soil"],
    answer: "Clay soil"
  },
  {
    question: "Which farm enterprise converts raw crops into consumable products?",
    options: ["Agroprocessing", "Dairy farming", "Poultry farming", "Fish farming"],
    answer: "Agroprocessing"
  },
  {
    question: "Which practice helps prevent nutrient depletion in soil?",
    options: ["Crop rotation", "Overcultivation", "Deforestation", "Slash and burn"],
    answer: "Crop rotation"
  },
  {
    question: "Which fertilizer provides potassium for crop growth?",
    options: ["Potash", "Urea", "Rock phosphate", "Lime"],
    answer: "Potash"
  },
  {
    question: "Which crop is a major source of carbohydrates in Ghana?",
    options: ["Maize", "Cocoa", "Coffee", "Oil palm"],
    answer: "Maize"
  },
  {
    question: "Which farm practice improves soil structure and fertility?",
    options: ["Adding compost", "Overgrazing", "Slash and burn", "Deforestation"],
    answer: "Adding compost"
  },
  {
    question: "Which crop is used in the production of starch?",
    options: ["Cassava", "Maize", "Yam", "Rice"],
    answer: "Cassava"
  },
  {
    question: "Which tool is used to till the land before planting?",
    options: ["Plough", "Hoe", "Cutlass", "Seed drill"],
    answer: "Plough"
  },
  {
    question: "Which practice controls pests naturally on farms?",
    options: ["Biological control", "Pesticide overdose", "Overgrazing", "Deforestation"],
    answer: "Biological control"
  },
  {
    question: "Which irrigation system is most suitable for water-scarce areas?",
    options: ["Drip irrigation", "Flood irrigation", "Sprinkler irrigation", "Furrow irrigation"],
    answer: "Drip irrigation"
  },
  {
    question: "Which practice improves seed germination?",
    options: ["Seed treatment", "Planting old seeds", "Planting shallowly", "Neglecting"],
    answer: "Seed treatment"
  },
  {
    question: "Which farm activity reduces post-harvest losses?",
    options: ["Proper storage", "Leaving crops in open", "Overwatering storage", "Neglect"],
    answer: "Proper storage"
  },
  {
    question: "Which crop is commonly intercropped with cocoa?",
    options: ["Plantain", "Maize", "Cassava", "Rice"],
    answer: "Plantain"
  },
  {
    question: "Which practice conserves soil moisture?",
    options: ["Mulching", "Overcultivation", "Slash and burn", "Deforestation"],
    answer: "Mulching"
  },
  {
    question: "Which crop is used in making chocolate?",
    options: ["Cocoa", "Coffee", "Oil palm", "Maize"],
    answer: "Cocoa"
  },
  {
    question: "Which method protects crops from waterlogging?",
    options: ["Raised beds", "Flooding", "Over-irrigation", "Deforestation"],
    answer: "Raised beds"
  },
  {
    question: "Which practice improves crop yield without chemicals?",
    options: ["Organic farming", "Slash and burn", "Overcultivation", "Overgrazing"],
    answer: "Organic farming"
  },
  {
    question: "Which crop is processed into flour and used in baking?",
    options: ["Cassava", "Maize", "Yam", "Cocoa"],
    answer: "Cassava"
  },
  {
    question: "Which farm management activity involves record keeping?",
    options: ["Farm bookkeeping", "Overgrazing", "Slash and burn", "Deforestation"],
    answer: "Farm bookkeeping"
  },
  {
    question: "Which practice reduces fertilizer loss through leaching?",
    options: ["Band placement", "Broadcasting", "Over-irrigation", "Neglect"],
    answer: "Band placement"
  },
  {
    question: "Which crop is grown primarily for its oil content?",
    options: ["Oil palm", "Maize", "Cassava", "Rice"],
    answer: "Oil palm"
  },
  {
    question: "Which irrigation system is most suitable for uneven terrain?",
    options: ["Sprinkler irrigation", "Flood irrigation", "Drip irrigation", "Furrow irrigation"],
    answer: "Sprinkler irrigation"
  },
  {
    question: "Which practice helps in pest monitoring and control?",
    options: ["Regular field inspection", "Neglecting crops", "Overgrazing", "Slash and burn"],
    answer: "Regular field inspection"
  },
  {
    question: "Which crop is used for starch and ethanol production?",
    options: ["Cassava", "Maize", "Yam", "Rice"],
    answer: "Cassava"
  },
  {
    question: "Which method helps improve soil aeration and water infiltration?",
    options: ["Ploughing", "Slash and burn", "Overgrazing", "Deforestation"],
    answer: "Ploughing"
  },
  {
    question: "Which practice is used to reduce post-harvest losses in cereals?",
    options: ["Proper drying", "Leaving in field", "Over-irrigation", "Neglect"],
    answer: "Proper drying"
  },
  {
    question: "Which practice improves the shelf-life of farm produce?",
    options: ["Processing and storage", "Leaving in field", "Over-irrigation", "Neglect"],
    answer: "Processing and storage"
  },
  {
    question: "Which fertilizer is commonly applied to increase crop potassium levels?",
    options: ["Potash", "Urea", "Lime", "Rock phosphate"],
    answer: "Potash"
  },
  {
    question: "Which farm activity involves transforming crops into consumable goods?",
    options: ["Agroprocessing", "Poultry farming", "Dairy farming", "Fish farming"],
    answer: "Agroprocessing"
  },
  {
    question: "Which practice promotes sustainable agriculture?",
    options: ["Crop rotation", "Slash and burn", "Mono-cropping", "Overgrazing"],
    answer: "Crop rotation"
  },
  {
    question: "Which modern technology helps farmers monitor soil moisture?",
    options: ["Soil sensors", "Hoeing", "Ploughing", "Irrigation canals"],
    answer: "Soil sensors"
  },
  {
    question: "Which method reduces greenhouse gas emissions from farms?",
    options: ["Conservation agriculture", "Slash and burn", "Overgrazing", "Deforestation"],
    answer: "Conservation agriculture"
  },
  {
    question: "Which factor affects crop marketing prices?",
    options: ["Supply and demand", "Weather", "Quality of produce", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which practice helps farmers adapt to climate change?",
    options: ["Drought-resistant crops", "Overcultivation", "Slash and burn", "Deforestation"],
    answer: "Drought-resistant crops"
  },
  {
    question: "Which technology is used for precision farming?",
    options: ["GPS mapping", "Hand hoe", "Cutlass", "Wheelbarrow"],
    answer: "GPS mapping"
  },
  {
    question: "Which farm enterprise increases income through value addition?",
    options: ["Agroprocessing", "Crop rotation", "Mixed cropping", "Overgrazing"],
    answer: "Agroprocessing"
  },
  {
    question: "Which method helps control soil erosion on farms?",
    options: ["Contour farming", "Overgrazing", "Slash and burn", "Deforestation"],
    answer: "Contour farming"
  },
  {
    question: "Which economic factor affects farm production decisions?",
    options: ["Cost of inputs", "Labour availability", "Market price", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which modern equipment is used for planting seeds efficiently?",
    options: ["Seed drill", "Hoe", "Plough", "Cutlass"],
    answer: "Seed drill"
  },
  {
    question: "Which crop is used for biofuel production?",
    options: ["Cassava", "Maize", "Oil palm", "Rice"],
    answer: "Cassava"
  },
  {
    question: "Which practice improves resilience to pests and diseases?",
    options: ["Integrated Pest Management (IPM)", "Slash and burn", "Overcultivation", "Deforestation"],
    answer: "Integrated Pest Management (IPM)"
  },
  {
    question: "Which farm enterprise can provide regular income throughout the year?",
    options: ["Vegetable farming", "Cocoa farming", "Oil palm farming", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which practice improves soil structure naturally?",
    options: ["Adding compost", "Slash and burn", "Overcultivation", "Deforestation"],
    answer: "Adding compost"
  },
  {
    question: "Which climate factor most affects crop growth?",
    options: ["Rainfall", "Temperature", "Sunlight", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which technology helps farmers predict weather patterns?",
    options: ["Weather forecasting", "Hoeing", "Manual irrigation", "Cutlass"],
    answer: "Weather forecasting"
  },
  {
    question: "Which farm product is processed into cocoa powder and chocolate?",
    options: ["Cocoa", "Coffee", "Cassava", "Maize"],
    answer: "Cocoa"
  },
  {
    question: "Which practice conserves soil nutrients?",
    options: ["Legume intercropping", "Slash and burn", "Overcultivation", "Deforestation"],
    answer: "Legume intercropping"
  },
  {
    question: "Which irrigation system is most water-efficient?",
    options: ["Drip irrigation", "Flood irrigation", "Sprinkler irrigation", "Furrow irrigation"],
    answer: "Drip irrigation"
  },
  {
    question: "Which modern method helps farmers sell produce online?",
    options: ["Digital marketing", "Manual hawking", "Overgrazing", "Slash and burn"],
    answer: "Digital marketing"
  },
  {
    question: "Which crop is suitable for crop-livestock integration?",
    options: ["Maize", "Cassava", "Cocoa", "Coffee"],
    answer: "Maize"
  },
  {
    question: "Which practice reduces dependency on chemical fertilizers?",
    options: ["Organic manure", "Overcultivation", "Slash and burn", "Deforestation"],
    answer: "Organic manure"
  },
  {
    question: "Which technology monitors livestock health remotely?",
    options: ["Wearable sensors", "Hoe", "Plough", "Cutlass"],
    answer: "Wearable sensors"
  },
  {
    question: "Which practice improves income through multiple enterprises?",
    options: ["Mixed farming", "Mono-cropping", "Overgrazing", "Slash and burn"],
    answer: "Mixed farming"
  },
  {
    question: "Which sustainable practice prevents desertification?",
    options: ["Afforestation", "Slash and burn", "Overgrazing", "Deforestation"],
    answer: "Afforestation"
  },
  {
    question: "Which method reduces water wastage in irrigation?",
    options: ["Drip irrigation", "Flood irrigation", "Over-irrigation", "Furrow irrigation"],
    answer: "Drip irrigation"
  },
  {
    question: "Which farm enterprise uses modern storage facilities to preserve produce?",
    options: ["Agroprocessing", "Dairy farming", "Poultry farming", "Fish farming"],
    answer: "Agroprocessing"
  },
  {
    question: "Which crop is suitable for intercropping with legumes?",
    options: ["Maize", "Cocoa", "Oil palm", "Coffee"],
    answer: "Maize"
  },
  {
    question: "Which technology reduces labour in harvesting crops?",
    options: ["Mechanical harvester", "Hoeing", "Cutlass", "Plough"],
    answer: "Mechanical harvester"
  },
  {
    question: "Which practice reduces soil salinity?",
    options: ["Leaching", "Over-irrigation", "Overcultivation", "Slash and burn"],
    answer: "Leaching"
  },
  {
    question: "Which method helps control farm pests biologically?",
    options: ["Introducing natural predators", "Chemical overuse", "Overgrazing", "Slash and burn"],
    answer: "Introducing natural predators"
  },
  {
    question: "Which farm activity increases value of crops for sale?",
    options: ["Processing", "Neglect", "Overwatering", "Deforestation"],
    answer: "Processing"
  },
  {
    question: "Which factor influences farm labour requirement?",
    options: ["Farm size", "Type of crops", "Technology used", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which crop can be used for ethanol and industrial starch production?",
    options: ["Cassava", "Maize", "Rice", "Yam"],
    answer: "Cassava"
  },
  {
    question: "Which practice reduces deforestation and soil degradation?",
    options: ["Agroforestry", "Slash and burn", "Overgrazing", "Mono-cropping"],
    answer: "Agroforestry"
  },
  {
    question: "Which farm practice improves profitability by reducing waste?",
    options: ["Efficient harvesting and storage", "Leaving produce in field", "Overwatering", "Neglect"],
    answer: "Efficient harvesting and storage"
  },
  {
    question: "Which modern equipment is used for spraying pesticides accurately?",
    options: ["Knapsack sprayer", "Hoe", "Plough", "Cutlass"],
    answer: "Knapsack sprayer"
  },
  {
    question: "Which crop can be grown in arid areas using water-efficient methods?",
    options: ["Millet", "Rice", "Taro", "Yam"],
    answer: "Millet"
  },
  {
    question: "Which practice enhances soil organic matter content?",
    options: ["Adding compost", "Slash and burn", "Overcultivation", "Deforestation"],
    answer: "Adding compost"
  },
  {
    question: "Which method helps reduce farm input costs?",
    options: ["Integrated farming", "Overcultivation", "Slash and burn", "Deforestation"],
    answer: "Integrated farming"
  },
  {
    question: "Which technology helps farmers track farm expenses and profits?",
    options: ["Farm management software", "Hoe", "Plough", "Cutlass"],
    answer: "Farm management software"
  },
  {
    question: "Which practice prevents overgrazing and land degradation?",
    options: ["Rotational grazing", "Continuous grazing", "Deforestation", "Slash and burn"],
    answer: "Rotational grazing"
  },
  {
    question: "Which crop provides raw material for the textile industry?",
    options: ["Cotton", "Maize", "Cocoa", "Rice"],
    answer: "Cotton"
  },
  {
    question: "Which method improves market access for farmers?",
    options: ["Cooperative marketing", "Selling individually", "Neglect", "Overwatering"],
    answer: "Cooperative marketing"
  },
  {
    question: "Which practice ensures continuous farm productivity?",
    options: ["Sustainable farming", "Slash and burn", "Overcultivation", "Deforestation"],
    answer: "Sustainable farming"
  },
  {
    question: "Which technology helps detect crop diseases early?",
    options: ["Drone monitoring", "Hoe", "Plough", "Cutlass"],
    answer: "Drone monitoring"
  },
  {
    question: "Which crop can be processed into oil and soap products?",
    options: ["Oil palm", "Maize", "Cassava", "Rice"],
    answer: "Oil palm"
  },
  {
    question: "Which method improves livestock productivity?",
    options: ["Improved breeds and feeding", "Neglect", "Overgrazing", "Slash and burn"],
    answer: "Improved breeds and feeding"
  },
  {
    question: "Which practice reduces dependence on chemical pesticides?",
    options: ["Biological pest control", "Overuse of chemicals", "Overcultivation", "Deforestation"],
    answer: "Biological pest control"
  },
];

export default agricQuestions;