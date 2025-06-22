const geographyQuestions = [
  {
    question: "Which planet is known as the third planet from the sun?",
    options: ["Venus", "Earth", "Mars", "Jupiter"],
    answer: "Earth"
  },
  {
    question: "What celestial body does the Earth orbit?",
    options: ["Moon", "Sun", "Mars", "Jupiter"],
    answer: "Sun"
  },
  {
    question: "Which planet is the largest in the solar system?",
    options: ["Saturn", "Neptune", "Earth", "Jupiter"],
    answer: "Jupiter"
  },
  {
    question: "What type of rock is formed by the cooling of magma?",
    options: ["Metamorphic", "Sedimentary", "Igneous", "Organic"],
    answer: "Igneous"
  },
  {
    question: "Which is an example of a sedimentary rock?",
    options: ["Basalt", "Granite", "Limestone", "Marble"],
    answer: "Limestone"
  },
  {
    question: "What type of rock is formed under heat and pressure?",
    options: ["Sedimentary", "Metamorphic", "Igneous", "Mineral"],
    answer: "Metamorphic"
  },
  {
    question: "Which layer of the atmosphere contains the ozone layer?",
    options: ["Troposphere", "Mesosphere", "Stratosphere", "Thermosphere"],
    answer: "Stratosphere"
  },
  {
    question: "What is the most abundant gas in Earth’s atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    answer: "Nitrogen"
  },
  {
    question: "Which instrument measures air pressure?",
    options: ["Barometer", "Hygrometer", "Anemometer", "Thermometer"],
    answer: "Barometer"
  },
  {
    question: "What do we call the blanket of air surrounding Earth?",
    options: ["Hydrosphere", "Lithosphere", "Atmosphere", "Biosphere"],
    answer: "Atmosphere"
  },
  {
    question: "Which rock is a metamorphic rock?",
    options: ["Granite", "Shale", "Marble", "Sandstone"],
    answer: "Marble"
  },
  {
    question: "What element is essential for respiration and found in the atmosphere?",
    options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
    answer: "Oxygen"
  },
  {
    question: "Which gas protects the Earth from harmful UV rays?",
    options: ["Ozone", "Carbon Dioxide", "Nitrogen", "Methane"],
    answer: "Ozone"
  },
  {
    question: "The layer of the atmosphere closest to Earth is the:",
    options: ["Stratosphere", "Mesosphere", "Troposphere", "Exosphere"],
    answer: "Troposphere"
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mars", "Mercury", "Earth"],
    answer: "Mercury"
  },
  {
    question: "Which type of rock contains fossils?",
    options: ["Igneous", "Metamorphic", "Sedimentary", "Basalt"],
    answer: "Sedimentary"
  },
  {
    question: "Which is not a gas found in the atmosphere?",
    options: ["Helium", "Argon", "Sodium", "Nitrogen"],
    answer: "Sodium"
  },
  {
    question: "Which of the following is a mineral?",
    options: ["Marble", "Quartz", "Limestone", "Sand"],
    answer: "Quartz"
  },
  {
    question: "Weather occurs primarily in which layer of the atmosphere?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    answer: "Troposphere"
  },
  {
    question: "Which gas is responsible for global warming?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
    answer: "Carbon Dioxide"
  },
  {
    question: "What is the name of molten rock beneath the Earth's surface?",
    options: ["Lava", "Magma", "Ash", "Sediment"],
    answer: "Magma"
  },
  {
    question: "Which layer of the Earth is solid and metallic?",
    options: ["Mantle", "Inner Core", "Outer Core", "Crust"],
    answer: "Inner Core"
  },
  {
    question: "The Earth's crust is primarily made up of which rock type?",
    options: ["Igneous", "Sedimentary", "Metamorphic", "Organic"],
    answer: "Igneous"
  },
  {
    question: "Which gas makes up about 78% of the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
    answer: "Nitrogen"
  },
  {
    question: "Which instrument is used to measure temperature?",
    options: ["Thermometer", "Barometer", "Rain gauge", "Anemometer"],
    answer: "Thermometer"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    answer: "Mars"
  },
  {
    question: "The breaking down of rocks by weather is called:",
    options: ["Erosion", "Weathering", "Sedimentation", "Deposition"],
    answer: "Weathering"
  },
  {
    question: "The process of converting liquid to gas is called:",
    options: ["Condensation", "Evaporation", "Melting", "Freezing"],
    answer: "Evaporation"
  },
  {
    question: "Which instrument measures humidity?",
    options: ["Thermometer", "Anemometer", "Barometer", "Hygrometer"],
    answer: "Hygrometer"
  },
  {
    question: "Which celestial body reflects sunlight and orbits Earth?",
    options: ["Mars", "Moon", "Venus", "Jupiter"],
    answer: "Moon"
  },
  {
    question: "Which planet has rings around it?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Saturn"
  },
  {
    question: "Which term refers to daily atmospheric conditions?",
    options: ["Climate", "Humidity", "Weather", "Forecast"],
    answer: "Weather"
  },
  {
    question: "What causes day and night?",
    options: ["Earth’s revolution", "Sun’s movement", "Moon's orbit", "Earth’s rotation"],
    answer: "Earth’s rotation"
  },
  {
    question: "What is the Earth’s main source of energy?",
    options: ["Wind", "Coal", "Sun", "Geothermal"],
    answer: "Sun"
  },
  {
    question: "Which form of heat transfer occurs through space?",
    options: ["Conduction", "Convection", "Radiation", "Insulation"],
    answer: "Radiation"
  },
  {
    question: "The moon affects tides mainly through its:",
    options: ["Heat", "Gravity", "Light", "Size"],
    answer: "Gravity"
  },
  {
    question: "The process where water vapor changes into liquid is called:",
    options: ["Evaporation", "Condensation", "Precipitation", "Infiltration"],
    answer: "Condensation"
  },
  {
    question: "What is a large body of salt water called?",
    options: ["Lake", "Ocean", "Pond", "River"],
    answer: "Ocean"
  },
  {
    question: "Which force pulls everything toward the Earth?",
    options: ["Magnetism", "Inertia", "Friction", "Gravity"],
    answer: "Gravity"
  },
  {
    question: "What is the average weather condition of a place over a long period?",
    options: ["Weather", "Temperature", "Climate", "Precipitation"],
    answer: "Climate"
  },
  {
    question: "What tool is used to measure rainfall?",
    options: ["Thermometer", "Hygrometer", "Rain gauge", "Anemometer"],
    answer: "Rain gauge"
  },
  {
    question: "The spinning of Earth on its axis is called:",
    options: ["Rotation", "Revolution", "Orbiting", "Tilting"],
    answer: "Rotation"
  },
  {
    question: "Which type of rock is granite?",
    options: ["Sedimentary", "Metamorphic", "Igneous", "Fossil"],
    answer: "Igneous"
  },
  {
    question: "What causes seasons on Earth?",
    options: ["Earth’s orbit shape", "Sun’s orbit", "Earth’s tilted axis", "Moon’s shadow"],
    answer: "Earth’s tilted axis"
  },
  {
    question: "What do we call rain, snow, sleet, or hail?",
    options: ["Condensation", "Evaporation", "Precipitation", "Filtration"],
    answer: "Precipitation"
  },
  {
    question: "What is the outermost layer of the Earth?",
    options: ["Mantle", "Core", "Crust", "Lithosphere"],
    answer: "Crust"
  },
  {
    question: "What is the shape of the Earth?",
    options: ["Perfect sphere", "Flat", "Oblate spheroid", "Oval"],
    answer: "Oblate spheroid"
  },
  {
    question: "Which gas in the atmosphere is essential for plant photosynthesis?",
    options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Helium"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Which planet is called Earth's twin due to its size?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: "Venus"
  },
  {
    question: "Which layer lies between the crust and the outer core?",
    options: ["Mantle", "Lithosphere", "Stratosphere", "Troposphere"],
    answer: "Mantle"
  },
  {
    question: "Which of the following is an example of a lake?",
    options: ["Volcano", "Lagoon", "Lake Victoria", "Glacier"],
    answer: "Lake Victoria"
  },
  {
    question: "Which landform is formed by the action of rivers?",
    options: ["Delta", "Crater", "Canyon", "Rift Valley"],
    answer: "Delta"
  },
  {
    question: "Which ocean is the largest on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific"
  },
  {
    question: "A rift valley is formed by which geological process?",
    options: ["Folding", "Volcanic eruption", "Faulting", "Erosion"],
    answer: "Faulting"
  },
  {
    question: "What causes a fold mountain to form?",
    options: ["Tectonic plates colliding", "Lava flow", "Wind erosion", "Deposition"],
    answer: "Tectonic plates colliding"
  },
  {
    question: "Mountains formed by the accumulation of lava are called:",
    options: ["Block mountains", "Fold mountains", "Volcanic mountains", "Residual hills"],
    answer: "Volcanic mountains"
  },
  {
    question: "Which landform is created by the folding of rock layers?",
    options: ["Rift valley", "Fold mountain", "Crater", "Lava plateau"],
    answer: "Fold mountain"
  },
  {
    question: "Which of these is an external force that shapes landforms?",
    options: ["Folding", "Vulcanicity", "Weathering", "Faulting"],
    answer: "Weathering"
  },
  {
    question: "Which of these is a result of mass wasting?",
    options: ["Earthquake", "Landslide", "Volcano", "Fold mountain"],
    answer: "Landslide"
  },
  {
    question: "Which of these is not a feature of the hydrosphere?",
    options: ["River", "Ocean", "Lagoon", "Crust"],
    answer: "Crust"
  },
  {
    question: "Which landform is formed by river deposition?",
    options: ["Delta", "Crater", "Fault block", "Cave"],
    answer: "Delta"
  },
  {
    question: "Which of the following causes coastal erosion?",
    options: ["Wind", "Waves", "Tectonic uplift", "Glaciers"],
    answer: "Waves"
  },
  {
    question: "Which feature is created by a glacier?",
    options: ["Delta", "U-shaped valley", "Crater", "Lava cone"],
    answer: "U-shaped valley"
  },
  {
    question: "What type of volcano has gentle slopes?",
    options: ["Shield volcano", "Composite volcano", "Cinder cone", "Dome volcano"],
    answer: "Shield volcano"
  },
  {
    question: "Which of the following is a block mountain?",
    options: ["Andes", "Himalayas", "Vosges", "Rockies"],
    answer: "Vosges"
  },
  {
    question: "Which process breaks rocks into smaller pieces without movement?",
    options: ["Erosion", "Mass wasting", "Weathering", "Sedimentation"],
    answer: "Weathering"
  },
  {
    question: "Which force is responsible for faulting?",
    options: ["Compression", "Tension", "Subduction", "Gravity"],
    answer: "Tension"
  },
  {
    question: "What is a lagoon?",
    options: ["Mountain lake", "Shallow coastal water body", "Glacial valley", "Desert lake"],
    answer: "Shallow coastal water body"
  },
  {
    question: "Which landform is formed from cooled lava flow?",
    options: ["Lava plateau", "Fold mountain", "Canyon", "Rift valley"],
    answer: "Lava plateau"
  },
  {
    question: "Which of the following is NOT formed by water?",
    options: ["Canyon", "Delta", "Crater", "Valley"],
    answer: "Crater"
  },
  {
    question: "Which landform is most commonly found at river mouths?",
    options: ["Delta", "Canyon", "Crater", "Fault scarp"],
    answer: "Delta"
  },
  {
    question: "What is the term for land worn away by natural forces?",
    options: ["Weathering", "Erosion", "Sedimentation", "Crusting"],
    answer: "Erosion"
  },
  {
    question: "Which of the following is a result of volcanic eruption?",
    options: ["Glacier", "Lagoon", "Lava cone", "Delta"],
    answer: "Lava cone"
  },
  {
    question: "What kind of rock is formed from hardened lava?",
    options: ["Sandstone", "Limestone", "Basalt", "Marble"],
    answer: "Basalt"
  },
  {
    question: "What process causes folding of the Earth's crust?",
    options: ["Erosion", "Pressure and compression", "Evaporation", "Volcanic activity"],
    answer: "Pressure and compression"
  },
  {
    question: "What is formed when two blocks of Earth's crust move apart?",
    options: ["Fold mountain", "Rift valley", "Crater", "Lava plateau"],
    answer: "Rift valley"
  },
  {
    question: "What agent of erosion is responsible for sand dunes?",
    options: ["Water", "Ice", "Wind", "Gravity"],
    answer: "Wind"
  },
  {
    question: "Which feature is typically created by wind erosion?",
    options: ["Delta", "Mushroom rock", "Crater lake", "Fold mountain"],
    answer: "Mushroom rock"
  },
  {
    question: "Which landform results from subsiding blocks between faults?",
    options: ["Block mountain", "Rift valley", "Volcanic cone", "Shield volcano"],
    answer: "Rift valley"
  },
  {
    question: "What is the result of magma erupting from Earth's crust?",
    options: ["Landslide", "Volcano", "Tsunami", "Lagoon"],
    answer: "Volcano"
  },
  {
    question: "Which of these is a volcanic landform?",
    options: ["Crater", "Delta", "Canyon", "Sand dune"],
    answer: "Crater"
  },
  {
    question: "What causes a landslide?",
    options: ["Wind erosion", "Gravity and loose soil", "Crust movement", "Flooding"],
    answer: "Gravity and loose soil"
  },
  {
    question: "Which feature forms when a river cuts through soft rock?",
    options: ["Canyon", "Delta", "Crater", "Lava dome"],
    answer: "Canyon"
  },
  {
    question: "Which landform results from glacial movement?",
    options: ["Crater lake", "Moraine", "Delta", "Volcanic cone"],
    answer: "Moraine"
  },
  {
    question: "What is the flat top volcanic landform called?",
    options: ["Lava plateau", "Shield volcano", "Crater lake", "Canyon"],
    answer: "Lava plateau"
  },
  {
    question: "Which landform is associated with river erosion?",
    options: ["Fold mountain", "Crater", "Meander", "Glacier"],
    answer: "Meander"
  },
  {
    question: "A valley with steep sides formed by rivers is called a:",
    options: ["Delta", "Canyon", "Cliff", "Fold valley"],
    answer: "Canyon"
  },
  {
    question: "Which landform is typical of folding?",
    options: ["Fault scarp", "Crater lake", "Anticline", "Lagoon"],
    answer: "Anticline"
  },
  {
    question: "Which of these is a depositional feature of rivers?",
    options: ["Delta", "Crater", "Rift valley", "Fault line"],
    answer: "Delta"
  },
  {
    question: "What creates oxbow lakes?",
    options: ["River erosion and deposition", "Glacial melting", "Faulting", "Volcanic eruptions"],
    answer: "River erosion and deposition"
  },
  {
    question: "The uplift of land due to faulting forms:",
    options: ["Rift valley", "Block mountain", "Delta", "Lava cone"],
    answer: "Block mountain"
  },
  {
    question: "Which agent is mainly responsible for coastal cliffs?",
    options: ["Glaciers", "Waves", "Wind", "Earthquakes"],
    answer: "Waves"
  },
  {
    question: "What landform is created by river erosion in hilly areas?",
    options: ["Crater", "V-shaped valley", "Lava dome", "Fold mountain"],
    answer: "V-shaped valley"
  },
  {
    question: "What landform forms at the mouth of a river when sediment is deposited?",
    options: ["Cliff", "Delta", "Gorge", "Crater"],
    answer: "Delta"
  },
  {
    question: "Which of these is an example of a volcanic mountain?",
    options: ["Mount Kilimanjaro", "Mount Elgon", "Mount Kenya", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "The process of rock fragments moving downhill under gravity is:",
    options: ["Mass wasting", "Folding", "Vulcanicity", "Condensation"],
    answer: "Mass wasting"
  },
  {
    question: "What is a geyser?",
    options: ["A crater lake", "A hot spring that erupts", "A glacier", "A volcanic cone"],
    answer: "A hot spring that erupts"
  },
  {
    question: "Which of the following is an erosional landform created by wind?",
    options: ["Oasis", "Mushroom rock", "Lagoon", "Fold mountain"],
    answer: "Mushroom rock"
  },
  {
    question: "The flat area on either side of a river prone to flooding is called a:",
    options: ["Delta", "Floodplain", "Crater", "Gorge"],
    answer: "Floodplain"
  },
  {
    question: "Which vegetation zone is common in northern Ghana?",
    options: ["Rainforest", "Mangrove", "Savanna", "Deciduous forest"],
    answer: "Savanna"
  },
  {
    question: "Which type of vegetation is found along coastal areas?",
    options: ["Savanna", "Mangrove forest", "Rainforest", "Coniferous forest"],
    answer: "Mangrove forest"
  },
  {
    question: "Which vegetation type is dominated by grass and few trees?",
    options: ["Rainforest", "Coniferous", "Savanna", "Mangrove"],
    answer: "Savanna"
  },
  {
    question: "What type of soil is best for farming?",
    options: ["Clay soil", "Sandy soil", "Loamy soil", "Gravelly soil"],
    answer: "Loamy soil"
  },
  {
    question: "Which of the following causes soil erosion?",
    options: ["Afforestation", "Mulching", "Overgrazing", "Terracing"],
    answer: "Overgrazing"
  },
  {
    question: "What is deforestation?",
    options: ["Planting of trees", "Natural forest growth", "Clearing of forests", "Forest burning for farming"],
    answer: "Clearing of forests"
  },
  {
    question: "Which of the following helps prevent erosion?",
    options: ["Deforestation", "Overgrazing", "Terracing", "Bush burning"],
    answer: "Terracing"
  },
  {
    question: "Which is an environmental concern caused by mining?",
    options: ["Soil enrichment", "Deforestation", "River formation", "Mountain building"],
    answer: "Deforestation"
  },
  {
    question: "Which layer of soil contains the most organic material?",
    options: ["Topsoil", "Subsoil", "Bedrock", "Hardpan"],
    answer: "Topsoil"
  },
  {
    question: "What is soil erosion?",
    options: ["Breaking of rocks", "Washing away of topsoil", "Shifting cultivation", "Weathering"],
    answer: "Washing away of topsoil"
  },
  {
    question: "Which method helps conserve soil?",
    options: ["Monocropping", "Contour ploughing", "Bush burning", "Deforestation"],
    answer: "Contour ploughing"
  },
  {
    question: "The main cause of desertification is:",
    options: ["Irrigation", "Overgrazing", "Composting", "Soil rotation"],
    answer: "Overgrazing"
  },
  {
    question: "An effect of deforestation is:",
    options: ["More rainfall", "Climate change", "Soil fertility increase", "River expansion"],
    answer: "Climate change"
  },
  {
    question: "Which type of forest is found in areas with heavy rainfall?",
    options: ["Savanna", "Deciduous", "Rainforest", "Mangrove"],
    answer: "Rainforest"
  },
  {
    question: "Which of the following is not a soil conservation method?",
    options: ["Mulching", "Terracing", "Afforestation", "Overgrazing"],
    answer: "Overgrazing"
  },
  {
    question: "Which human activity leads to air pollution?",
    options: ["Crop rotation", "Factory emissions", "Composting", "Afforestation"],
    answer: "Factory emissions"
  },
  {
    question: "The cutting down of trees without replacement is called:",
    options: ["Afforestation", "Bush fallowing", "Deforestation", "Reforestation"],
    answer: "Deforestation"
  },
  {
    question: "Which of these is a biodegradable waste?",
    options: ["Plastic bottle", "Banana peel", "Metal can", "Glass jar"],
    answer: "Banana peel"
  },
  {
    question: "Which vegetation zone has tall trees and dense undergrowth?",
    options: ["Coniferous forest", "Rainforest", "Savanna", "Desert"],
    answer: "Rainforest"
  },
  {
    question: "Which factor influences soil formation the most?",
    options: ["Rainfall", "Wind", "Parent rock", "Moonlight"],
    answer: "Parent rock"
  },
  {
    question: "Which process improves soil fertility naturally?",
    options: ["Burning", "Fertilizing", "Composting", "Grazing"],
    answer: "Composting"
  },
  {
    question: "Which of the following contributes to climate change?",
    options: ["Tree planting", "Solar panels", "Greenhouse gases", "Wind energy"],
    answer: "Greenhouse gases"
  },
  {
    question: "What is the term for planting trees to restore a forest?",
    options: ["Deforestation", "Afforestation", "Desertification", "Soil erosion"],
    answer: "Afforestation"
  },
  {
    question: "What does soil texture refer to?",
    options: ["Color of soil", "Size of particles", "Soil nutrients", "Age of soil"],
    answer: "Size of particles"
  },
  {
    question: "Which of the following causes water pollution?",
    options: ["Terracing", "Irrigation", "Oil spillage", "Reforestation"],
    answer: "Oil spillage"
  },
  {
    question: "Which gas contributes most to the greenhouse effect?",
    options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"],
    answer: "Carbon dioxide"
  },
  {
    question: "A natural cause of forest loss is:",
    options: ["Logging", "Bush fires", "Urbanization", "Mining"],
    answer: "Bush fires"
  },
  {
    question: "Which farming method helps prevent soil erosion?",
    options: ["Contour farming", "Slash-and-burn", "Mono-cropping", "Bush fallowing"],
    answer: "Contour farming"
  },
  {
    question: "The gradual wearing away of Earth's surface by natural forces is called:",
    options: ["Soil building", "Erosion", "Deforestation", "Irrigation"],
    answer: "Erosion"
  },
  {
    question: "Which vegetation is most common in dry areas?",
    options: ["Savanna", "Rainforest", "Mangrove", "Desert scrub"],
    answer: "Desert scrub"
  },
  {
    question: "The main reason for bush burning is:",
    options: ["Wildlife attraction", "Land clearing", "Firewood production", "Fertilizer application"],
    answer: "Land clearing"
  },
  {
    question: "A major result of soil erosion is:",
    options: ["Increased fertility", "Loss of topsoil", "Plant growth", "New forest"],
    answer: "Loss of topsoil"
  },
  {
    question: "Which type of vegetation survives in salty water?",
    options: ["Desert scrub", "Mangrove", "Savanna", "Rainforest"],
    answer: "Mangrove"
  },
  {
    question: "The main cause of land degradation is:",
    options: ["Wind erosion", "Good farming", "Soil mulching", "Sustainable logging"],
    answer: "Wind erosion"
  },
  {
    question: "Which method best controls desertification?",
    options: ["Bush burning", "Afforestation", "Urbanization", "Overgrazing"],
    answer: "Afforestation"
  },
  {
    question: "Which soil type holds the most water?",
    options: ["Sandy", "Clay", "Loamy", "Gravel"],
    answer: "Clay"
  },
  {
    question: "Which human activity leads to loss of biodiversity?",
    options: ["Forest conservation", "Farming", "Hunting and deforestation", "Afforestation"],
    answer: "Hunting and deforestation"
  },
  {
    question: "Which zone has trees with needle-shaped leaves?",
    options: ["Rainforest", "Savanna", "Mangrove", "Coniferous forest"],
    answer: "Coniferous forest"
  },
  {
    question: "Soil is formed from:",
    options: ["Wind", "Parent rock and organic matter", "Water", "Plants"],
    answer: "Parent rock and organic matter"
  },
  {
    question: "Which farming practice enriches soil naturally?",
    options: ["Bush burning", "Chemical fertilizer use", "Crop rotation", "Overgrazing"],
    answer: "Crop rotation"
  },
  {
    question: "Which soil type is best for drainage?",
    options: ["Clay", "Silt", "Sandy", "Loamy"],
    answer: "Sandy"
  },
  {
    question: "An environmental concern caused by industrial waste is:",
    options: ["Composting", "Soil fertility", "Pollution", "Conservation"],
    answer: "Pollution"
  },
  {
    question: "Which human activity increases the risk of flooding?",
    options: ["Tree planting", "Deforestation", "Composting", "Mulching"],
    answer: "Deforestation"
  },
  {
    question: "Which of the following is a sign of poor land management?",
    options: ["Dense vegetation", "Erosion", "Green cover", "Crop yield"],
    answer: "Erosion"
  },
  {
    question: "Which is a non-renewable resource?",
    options: ["Sunlight", "Coal", "Wind", "Biogas"],
    answer: "Coal"
  },
  {
    question: "Which of these best describes afforestation?",
    options: ["Cutting trees", "Burning land", "Planting trees", "Soil ploughing"],
    answer: "Planting trees"
  },
  {
    question: "What is a consequence of poor waste disposal?",
    options: ["Clean environment", "Air pollution", "Rainfall increase", "Soil fertility"],
    answer: "Air pollution"
  },
  {
    question: "Which method reduces greenhouse gases?",
    options: ["Overgrazing", "Afforestation", "Burning fossil fuels", "Plastic dumping"],
    answer: "Afforestation"
  },
  {
    question: "What is population density?",
    options: ["Total number of people", "People per square kilometer", "Urban growth", "Migration rate"],
    answer: "People per square kilometer"
  },
  {
    question: "Which of these causes population increase?",
    options: ["Death rate", "Migration", "Birth rate", "Famine"],
    answer: "Birth rate"
  },
  {
    question: "Which factor affects population distribution?",
    options: ["Soil fertility", "Television", "Music", "National anthem"],
    answer: "Soil fertility"
  },
  {
    question: "What is the movement of people from one area to another called?",
    options: ["Density", "Population growth", "Migration", "Urbanization"],
    answer: "Migration"
  },
  {
    question: "What do we call people who move from rural to urban areas?",
    options: ["Refugees", "Nomads", "Urban migrants", "Rural-urban migrants"],
    answer: "Rural-urban migrants"
  },
  {
    question: "What is urbanization?",
    options: ["Moving to villages", "Increase in city population", "Birth of a child", "Climate change"],
    answer: "Increase in city population"
  },
  {
    question: "What is the purpose of a census?",
    options: ["To count livestock", "To plan TV shows", "To count population", "To record songs"],
    answer: "To count population"
  },
  {
    question: "Which type of settlement has very few people and houses?",
    options: ["City", "Town", "Village", "Hamlet"],
    answer: "Hamlet"
  },
  {
    question: "A city with over 10 million people is known as a:",
    options: ["Village", "Capital", "Megacity", "Suburb"],
    answer: "Megacity"
  },
  {
    question: "A push factor for rural-urban migration is:",
    options: ["Job opportunity", "Flooding", "Better schools", "Good roads"],
    answer: "Flooding"
  },
  {
    question: "What is the main feature of a linear settlement?",
    options: ["Clustered shape", "Scattered layout", "Arranged in a line", "Underground homes"],
    answer: "Arranged in a line"
  },
  {
    question: "Which of these is a pull factor?",
    options: ["Unemployment", "Poor health care", "Education", "Famine"],
    answer: "Education"
  },
  {
    question: "Which tool helps gather population data?",
    options: ["Clock", "Barometer", "Census", "Microscope"],
    answer: "Census"
  },
  {
    question: "What does high birth rate lead to?",
    options: ["Population decline", "Emigration", "Population growth", "Migration"],
    answer: "Population growth"
  },
  {
    question: "Which of these is a sparsely populated area?",
    options: ["City center", "Forest", "Village", "Urban slum"],
    answer: "Forest"
  },
  {
    question: "The total number of people in an area is its:",
    options: ["Population", "Settlement", "Density", "Resource"],
    answer: "Population"
  },
  {
    question: "What is a characteristic of urban settlement?",
    options: ["Farming", "Skyscrapers", "Scattered houses", "Forest cover"],
    answer: "Skyscrapers"
  },
  {
    question: "Which is NOT a type of settlement pattern?",
    options: ["Linear", "Nucleated", "Dispersed", "Circular orbit"],
    answer: "Circular orbit"
  },
  {
    question: "What causes population decline?",
    options: ["Birth", "Immigration", "Emigration", "Fertility"],
    answer: "Emigration"
  },
  {
    question: "What is a common feature of rural settlements?",
    options: ["Skyscrapers", "Farm lands", "Highways", "Factories"],
    answer: "Farm lands"
  },
  {
    question: "What is a nucleated settlement?",
    options: ["Scattered pattern", "Clustered houses", "Riverbank settlement", "Mobile homes"],
    answer: "Clustered houses"
  },
  {
    question: "The elderly population affects:",
    options: ["Weather", "Farming", "Dependency ratio", "Climate"],
    answer: "Dependency ratio"
  },
  {
    question: "Which age group is considered economically active?",
    options: ["0–14", "15–64", "65+", "Under 5"],
    answer: "15–64"
  },
  {
    question: "Which term describes people leaving a country to settle elsewhere?",
    options: ["Immigration", "Urbanization", "Emigration", "Deportation"],
    answer: "Emigration"
  },
  {
    question: "Which activity is common in rural settlements?",
    options: ["Manufacturing", "Fishing", "Trading", "Skyscraper construction"],
    answer: "Fishing"
  },
  {
    question: "What is a census used for?",
    options: ["Farming decisions", "Population planning", "TV programming", "Music festivals"],
    answer: "Population planning"
  },
  {
    question: "Which is NOT a function of a city?",
    options: ["Commerce", "Mining", "Agriculture", "Administration"],
    answer: "Agriculture"
  },
  {
    question: "Which settlement type grows without planning?",
    options: ["Urban", "Slum", "Village", "Planned estate"],
    answer: "Slum"
  },
  {
    question: "A population pyramid shows:",
    options: ["Rainfall", "Soil quality", "Age and gender", "Vegetation"],
    answer: "Age and gender"
  },
  {
    question: "Which country has one of the largest populations in Africa?",
    options: ["Ghana", "Senegal", "Nigeria", "Mali"],
    answer: "Nigeria"
  },
  {
    question: "One reason for urban growth is:",
    options: ["Better rural roads", "Job opportunities", "High rainfall", "Soil fertility"],
    answer: "Job opportunities"
  },
  {
    question: "Which feature is most common in a rural area?",
    options: ["Shopping malls", "Farms", "Flyovers", "Traffic lights"],
    answer: "Farms"
  },
  {
    question: "When more people enter a country than leave, it is called:",
    options: ["Net migration", "Overcrowding", "Out-migration", "Internal growth"],
    answer: "Net migration"
  },
  {
    question: "Which of these is a planned settlement?",
    options: ["Hamlet", "Village", "Estate", "Forest home"],
    answer: "Estate"
  },
  {
    question: "One main cause of rural-urban migration is:",
    options: ["Drought", "Climate", "TV access", "Food shortage"],
    answer: "Drought"
  },
  {
    question: "A person who leaves their country due to conflict is called:",
    options: ["Immigrant", "Tourist", "Refugee", "Student"],
    answer: "Refugee"
  },
  {
    question: "High population density leads to:",
    options: ["Plenty of land", "Low competition", "Overcrowding", "Low birth rate"],
    answer: "Overcrowding"
  },
  {
    question: "What is the most important factor in urban settlement growth?",
    options: ["Fertile land", "Good health care", "Employment", "Forests"],
    answer: "Employment"
  },
  {
    question: "The number of births per 1,000 people per year is called:",
    options: ["Birth rate", "Fertility level", "Population index", "Infant count"],
    answer: "Birth rate"
  },
  {
    question: "Which of the following is a problem of urbanization?",
    options: ["More rainfall", "Job creation", "Slums", "Farm expansion"],
    answer: "Slums"
  },
  {
    question: "Which of these is a characteristic of dispersed settlement?",
    options: ["Houses are far apart", "Tall buildings", "Clustered homes", "Water transport"],
    answer: "Houses are far apart"
  },
  {
    question: "Which settlement pattern is found along rivers or roads?",
    options: ["Dispersed", "Radial", "Linear", "Clustered"],
    answer: "Linear"
  },
  {
    question: "A town is generally larger than a:",
    options: ["City", "Village", "Metropolis", "Capital"],
    answer: "Village"
  },
  {
    question: "Migration caused by war is called:",
    options: ["Voluntary migration", "Refugee migration", "Planned migration", "Seasonal migration"],
    answer: "Refugee migration"
  },
  {
    question: "Which age group is considered dependent?",
    options: ["15–64", "65 and above", "25–45", "Under 18 only"],
    answer: "65 and above"
  },
  {
    question: "An effect of overpopulation is:",
    options: ["Balanced economy", "Improved housing", "Unemployment", "More space"],
    answer: "Unemployment"
  },
  {
    question: "Seasonal migration is common among:",
    options: ["Urban workers", "Pastoral farmers", "Miners", "Teachers"],
    answer: "Pastoral farmers"
  },
  {
    question: "A disadvantage of migration to cities is:",
    options: ["More labor", "Slum development", "Wider roads", "New schools"],
    answer: "Slum development"
  },
  {
    question: "Which of the following is a primary economic activity?",
    options: ["Fishing", "Teaching", "Banking", "Retailing"],
    answer: "Fishing"
  },
  {
    question: "Which of these is a secondary activity?",
    options: ["Mining", "Farming", "Manufacturing", "Fishing"],
    answer: "Manufacturing"
  },
  {
    question: "Which is an example of a tertiary economic activity?",
    options: ["Weaving", "Banking", "Logging", "Mining"],
    answer: "Banking"
  },
  {
    question: "What is the main occupation in rural Ghana?",
    options: ["Mining", "Farming", "Teaching", "Trading"],
    answer: "Farming"
  },
  {
    question: "Which of these is a renewable resource?",
    options: ["Coal", "Petroleum", "Sunlight", "Natural gas"],
    answer: "Sunlight"
  },
  {
    question: "Which activity involves extracting raw materials?",
    options: ["Banking", "Retailing", "Mining", "Teaching"],
    answer: "Mining"
  },
  {
    question: "The transformation of raw materials into finished goods is called:",
    options: ["Transportation", "Processing", "Retailing", "Consumption"],
    answer: "Processing"
  },
  {
    question: "Which of these is NOT a primary activity?",
    options: ["Farming", "Mining", "Fishing", "Marketing"],
    answer: "Marketing"
  },
  {
    question: "Which of the following uses machines to produce goods?",
    options: ["Commerce", "Agriculture", "Manufacturing", "Tourism"],
    answer: "Manufacturing"
  },
  {
    question: "Which economic sector includes services?",
    options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
    answer: "Tertiary"
  },
  {
    question: "Which activity is common in mining towns?",
    options: ["Fishing", "Textile weaving", "Gold extraction", "Farming"],
    answer: "Gold extraction"
  },
  {
    question: "Which is a major export crop of Ghana?",
    options: ["Cotton", "Rice", "Cocoa", "Coffee"],
    answer: "Cocoa"
  },
  {
    question: "Timber production is an example of which activity?",
    options: ["Tertiary", "Secondary", "Primary", "None of the above"],
    answer: "Primary"
  },
  {
    question: "Which industry processes iron ore?",
    options: ["Textile", "Cement", "Steel", "Fishing"],
    answer: "Steel"
  },
  {
    question: "Which of these is a non-renewable resource?",
    options: ["Sunlight", "Wind", "Coal", "Water"],
    answer: "Coal"
  },
  {
    question: "Which of the following is a major industrial area in Ghana?",
    options: ["Kumasi", "Tema", "Tamale", "Cape Coast"],
    answer: "Tema"
  },
  {
    question: "Which sector includes banking and insurance?",
    options: ["Primary", "Secondary", "Tertiary", "Informal"],
    answer: "Tertiary"
  },
  {
    question: "Which energy source is widely used in rural areas?",
    options: ["Electricity", "Solar power", "Kerosene", "Firewood"],
    answer: "Firewood"
  },
  {
    question: "Which of the following is NOT a manufacturing activity?",
    options: ["Bread baking", "Vehicle assembly", "Fishing", "Textile weaving"],
    answer: "Fishing"
  },
  {
    question: "Which is a benefit of renewable energy?",
    options: ["Expensive", "Pollution", "Non-reusable", "Environmentally friendly"],
    answer: "Environmentally friendly"
  },
  {
    question: "What type of energy is generated from moving water?",
    options: ["Solar", "Thermal", "Hydropower", "Wind"],
    answer: "Hydropower"
  },
  {
    question: "Which of these is NOT part of the tertiary sector?",
    options: ["Transport", "Teaching", "Retail", "Mining"],
    answer: "Mining"
  },
  {
    question: "What do we call the gathering of forest products?",
    options: ["Manufacturing", "Extraction", "Processing", "Retailing"],
    answer: "Extraction"
  },
  {
    question: "Which is Ghana’s largest industrial port city?",
    options: ["Takoradi", "Accra", "Tema", "Sunyani"],
    answer: "Tema"
  },
  {
    question: "The Akosombo Dam is used to produce:",
    options: ["Oil", "Gas", "Electricity", "Wind power"],
    answer: "Electricity"
  },
  {
    question: "Which sector does construction belong to?",
    options: ["Primary", "Secondary", "Tertiary", "Informal"],
    answer: "Secondary"
  },
  {
    question: "Which of these sectors is most linked to farming?",
    options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
    answer: "Primary"
  },
  {
    question: "Which resource is renewable?",
    options: ["Natural gas", "Petroleum", "Wind", "Coal"],
    answer: "Wind"
  },
  {
    question: "An oil refinery is an example of:",
    options: ["Primary industry", "Secondary industry", "Tertiary industry", "Transport service"],
    answer: "Secondary industry"
  },
  {
    question: "Which is a disadvantage of using fossil fuels?",
    options: ["Cheap", "Abundant", "Pollution", "Renewable"],
    answer: "Pollution"
  },
  {
    question: "Which country in West Africa exports large amounts of oil?",
    options: ["Ghana", "Senegal", "Nigeria", "Togo"],
    answer: "Nigeria"
  },
  {
    question: "Which energy source is least harmful to the environment?",
    options: ["Coal", "Oil", "Solar", "Petroleum"],
    answer: "Solar"
  },
  {
    question: "Which is a common economic activity in coastal Ghana?",
    options: ["Mining", "Fishing", "Weaving", "Hunting"],
    answer: "Fishing"
  },
  {
    question: "Which energy source is most used in rural Ghana?",
    options: ["Gas", "Electricity", "Firewood", "Petrol"],
    answer: "Firewood"
  },
  {
    question: "Which sector employs the most people in Ghana?",
    options: ["Secondary", "Tertiary", "Primary", "Quaternary"],
    answer: "Primary"
  },
  {
    question: "Which mineral is mined at Obuasi?",
    options: ["Bauxite", "Diamond", "Gold", "Salt"],
    answer: "Gold"
  },
  {
    question: "Which of the following is a processed agricultural product?",
    options: ["Yam", "Raw cocoa", "Cocoa powder", "Plantain"],
    answer: "Cocoa powder"
  },
  {
    question: "The main use of bauxite is in:",
    options: ["Iron", "Cement", "Aluminum", "Steel"],
    answer: "Aluminum"
  },
  {
    question: "Which of these contributes to Ghana's GDP?",
    options: ["Farming", "Illegal mining", "Deforestation", "Desertification"],
    answer: "Farming"
  },
  {
    question: "Which is a challenge to fishing in Ghana?",
    options: ["Plenty of fish", "Illegal fishing", "Modern equipment", "Rainfall"],
    answer: "Illegal fishing"
  },
  {
    question: "Which natural resource is used for fuel?",
    options: ["Salt", "Sand", "Crude oil", "Limestone"],
    answer: "Crude oil"
  },
  {
    question: "Which of the following is a use of limestone?",
    options: ["Jewelry", "Fuel", "Cement production", "Food"],
    answer: "Cement production"
  },
  {
    question: "Which product is derived from timber?",
    options: ["Steel", "Paper", "Aluminum", "Plastic"],
    answer: "Paper"
  },
  {
    question: "Which town is known for bauxite mining in Ghana?",
    options: ["Awaso", "Obuasi", "Prestea", "Tarkwa"],
    answer: "Awaso"
  },
  {
    question: "Which of these is a non-agricultural activity?",
    options: ["Mining", "Farming", "Fishing", "Weeding"],
    answer: "Mining"
  },
  {
    question: "The Volta Lake supports which activity?",
    options: ["Mining", "Fishing", "Farming", "Transport"],
    answer: "Fishing"
  },
  {
    question: "Which of these is a service industry?",
    options: ["Timber cutting", "Nursing", "Logging", "Farming"],
    answer: "Nursing"
  },
  {
    question: "Which is NOT a source of renewable energy?",
    options: ["Solar", "Coal", "Wind", "Hydro"],
    answer: "Coal"
  },
  {
    question: "What makes electricity from sun rays?",
    options: ["Hydro dam", "Solar panel", "Windmill", "Generator"],
    answer: "Solar panel"
  },
  {
    question: "Which ocean is to the south of Ghana?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Mediterranean Sea"],
    answer: "Atlantic Ocean"
  },
  {
    question: "Ghana is located on which continent?",
    options: ["Europe", "South America", "Africa", "Asia"],
    answer: "Africa"
  },
  {
    question: "Which country lies to the east of Ghana?",
    options: ["Burkina Faso", "Nigeria", "Togo", "Ivory Coast"],
    answer: "Togo"
  },
  {
    question: "Which of these is a physical feature of Ghana?",
    options: ["The Sahara", "Lake Volta", "River Nile", "Table Mountain"],
    answer: "Lake Volta"
  },
  {
    question: "Which river is the longest in Ghana?",
    options: ["River Pra", "River Ankobra", "River Tano", "River Volta"],
    answer: "River Volta"
  },
  {
    question: "Ghana is a member of which regional group?",
    options: ["SADC", "AU", "ECOWAS", "EAC"],
    answer: "ECOWAS"
  },
  {
    question: "What is the capital city of Ghana?",
    options: ["Kumasi", "Tamale", "Accra", "Cape Coast"],
    answer: "Accra"
  },
  {
    question: "The Ashanti Region is known for mining which mineral?",
    options: ["Bauxite", "Diamond", "Gold", "Salt"],
    answer: "Gold"
  },
  {
    question: "Which part of Ghana is mainly covered by savanna vegetation?",
    options: ["Western Region", "Eastern Region", "Northern Region", "Central Region"],
    answer: "Northern Region"
  },
  {
    question: "Which lake is the largest man-made lake in Ghana?",
    options: ["Lake Volta", "Lake Bosomtwe", "Lake Tano", "Lake Chad"],
    answer: "Lake Volta"
  },
  {
    question: "The climate of Ghana is mainly:",
    options: ["Desert", "Tropical", "Temperate", "Mediterranean"],
    answer: "Tropical"
  },
  {
    question: "Which region in Ghana is famous for cocoa farming?",
    options: ["Upper West", "Western North", "Ashanti", "Greater Accra"],
    answer: "Ashanti"
  },
  {
    question: "Which mineral is mined at Awaso?",
    options: ["Diamond", "Salt", "Bauxite", "Oil"],
    answer: "Bauxite"
  },
  {
    question: "Ghana shares borders with all EXCEPT:",
    options: ["Togo", "Burkina Faso", "Nigeria", "Ivory Coast"],
    answer: "Nigeria"
  },
  {
    question: "Which region is known for fishing in Ghana?",
    options: ["Volta", "Eastern", "Central", "Brong Ahafo"],
    answer: "Central"
  },
  {
    question: "Which Ghanaian region has the highest population density?",
    options: ["Upper East", "Greater Accra", "Ashanti", "Bono East"],
    answer: "Greater Accra"
  },
  {
    question: "The Volta Region is located in which part of Ghana?",
    options: ["North", "Southwest", "East", "West"],
    answer: "East"
  },
  {
    question: "Lake Bosomtwe is found in which region?",
    options: ["Central", "Ashanti", "Volta", "Northern"],
    answer: "Ashanti"
  },
  {
    question: "Which country borders Ghana to the west?",
    options: ["Togo", "Nigeria", "Ivory Coast", "Cameroon"],
    answer: "Ivory Coast"
  },
  {
    question: "Which of these cities is a major industrial center in Ghana?",
    options: ["Bolgatanga", "Wa", "Tema", "Sunyani"],
    answer: "Tema"
  },
  {
    question: "Which of the following is a landlocked country?",
    options: ["Togo", "Ivory Coast", "Burkina Faso", "Gambia"],
    answer: "Burkina Faso"
  },
  {
    question: "The Sahara Desert is located in which part of Africa?",
    options: ["East", "West", "North", "South"],
    answer: "North"
  },
  {
    question: "The longest river in Africa is:",
    options: ["Congo", "Zambezi", "Niger", "Nile"],
    answer: "Nile"
  },
  {
    question: "Which African country is an island?",
    options: ["Ghana", "Ethiopia", "Madagascar", "Libya"],
    answer: "Madagascar"
  },
  {
    question: "Which mountain is the highest in Africa?",
    options: ["Mount Elgon", "Mount Kenya", "Mount Kilimanjaro", "Drakensberg"],
    answer: "Mount Kilimanjaro"
  },
  {
    question: "Which economic activity is common in West Africa?",
    options: ["Ice fishing", "Cocoa farming", "Oil palm weaving", "Snowboarding"],
    answer: "Cocoa farming"
  },
  {
    question: "Which of these rivers flows into the Atlantic Ocean?",
    options: ["Nile", "Zambezi", "Niger", "Limpopo"],
    answer: "Niger"
  },
  {
    question: "Which country is Ghana’s eastern neighbor?",
    options: ["Ivory Coast", "Togo", "Nigeria", "Burkina Faso"],
    answer: "Togo"
  },
  {
    question: "Which organization promotes unity in Africa?",
    options: ["EU", "UN", "AU", "NATO"],
    answer: "AU"
  },
  {
    question: "What is Ghana’s main port city?",
    options: ["Takoradi", "Tema", "Accra", "Keta"],
    answer: "Tema"
  },
  {
    question: "Which West African country is landlocked?",
    options: ["Ghana", "Niger", "Togo", "Benin"],
    answer: "Niger"
  },
  {
    question: "Which country in Africa is known for gold mining?",
    options: ["Ethiopia", "Ghana", "Libya", "Kenya"],
    answer: "Ghana"
  },
  {
    question: "Where is the Congo River mainly located?",
    options: ["West Africa", "North Africa", "Central Africa", "Southern Africa"],
    answer: "Central Africa"
  },
  {
    question: "Which physical feature is located in East Africa?",
    options: ["Atlas Mountains", "Sahara Desert", "Great Rift Valley", "Kalahari Desert"],
    answer: "Great Rift Valley"
  },
  {
    question: "The ECOWAS headquarters is in:",
    options: ["Accra", "Abuja", "Dakar", "Ouagadougou"],
    answer: "Abuja"
  },
  {
    question: "Which country is famous for cocoa besides Ghana?",
    options: ["Senegal", "Ivory Coast", "Egypt", "Tanzania"],
    answer: "Ivory Coast"
  },
  {
    question: "Which natural region covers most of North Africa?",
    options: ["Rainforest", "Savanna", "Desert", "Mountain"],
    answer: "Desert"
  },
  {
    question: "Which African river is used for hydroelectric power in Ghana?",
    options: ["Zambezi", "Niger", "Volta", "Limpopo"],
    answer: "Volta"
  },
  {
    question: "Which desert is in southern Africa?",
    options: ["Sahara", "Kalahari", "Gobi", "Namib"],
    answer: "Kalahari"
  },
  {
    question: "Which African region is known for oil production?",
    options: ["North", "East", "West", "South"],
    answer: "West"
  },
  {
    question: "The capital city of Nigeria is:",
    options: ["Lagos", "Abuja", "Kano", "Port Harcourt"],
    answer: "Abuja"
  },
  {
    question: "The longest river in West Africa is:",
    options: ["Niger", "Volta", "Gambia", "Senegal"],
    answer: "Niger"
  },
  {
    question: "Which country in Africa has the largest population?",
    options: ["South Africa", "Egypt", "Nigeria", "Ethiopia"],
    answer: "Nigeria"
  },
  {
    question: "Which town in Ghana is known for salt production?",
    options: ["Ada", "Obuasi", "Bawku", "Tamale"],
    answer: "Ada"
  },
  {
    question: "The Kwame Nkrumah Mausoleum is located in:",
    options: ["Cape Coast", "Accra", "Kumasi", "Tamale"],
    answer: "Accra"
  },
  {
    question: "What is the name of Ghana’s national airline?",
    options: ["Ghana Jet", "FlyAfrica", "Ghana Airways", "Accra Air"],
    answer: "Ghana Airways"
  },
  {
    question: "What is the role of ECOWAS?",
    options: ["Trade and unity", "Education only", "Sports", "Tourism"],
    answer: "Trade and unity"
  },
  {
    question: "Which of these is a traditional Ghanaian industry?",
    options: ["Oil refinery", "Textile weaving", "Ship building", "Glass blowing"],
    answer: "Textile weaving"
  },
  {
    question: "Which element on a map shows direction?",
    options: ["Legend", "Compass", "Scale", "Grid"],
    answer: "Compass"
  },
  {
    question: "The scale of a map shows the:",
    options: ["Type of land", "Map title", "Distance ratio", "Direction"],
    answer: "Distance ratio"
  },
  {
    question: "What does the legend of a map explain?",
    options: ["Symbols", "Distance", "North direction", "Population"],
    answer: "Symbols"
  },
  {
    question: "Which type of graph shows changes over time?",
    options: ["Pie chart", "Bar chart", "Line graph", "Dot map"],
    answer: "Line graph"
  },
  {
    question: "Which map type shows population using dots?",
    options: ["Isoline", "Choropleth", "Dot map", "Topographic"],
    answer: "Dot map"
  },
  {
    question: "What is the function of a contour line?",
    options: ["Show roads", "Show rainfall", "Show elevation", "Show vegetation"],
    answer: "Show elevation"
  },
  {
    question: "Which tool is used for measuring angles on a map?",
    options: ["Ruler", "Compass", "Protractor", "GPS"],
    answer: "Protractor"
  },
  {
    question: "The title of a map shows:",
    options: ["Distance", "Name of area", "Color", "Scale"],
    answer: "Name of area"
  },
  {
    question: "Which map shows temperature distribution?",
    options: ["Choropleth", "Isothermal", "Isobar", "Dot map"],
    answer: "Isothermal"
  },
  {
    question: "What does a barometer measure?",
    options: ["Rainfall", "Wind", "Pressure", "Temperature"],
    answer: "Pressure"
  },
  {
    question: "Which of the following is used to measure rainfall?",
    options: ["Hygrometer", "Anemometer", "Rain gauge", "Barometer"],
    answer: "Rain gauge"
  },
  {
    question: "What kind of graph is best for showing parts of a whole?",
    options: ["Line graph", "Pie chart", "Histogram", "Dot map"],
    answer: "Pie chart"
  },
  {
    question: "What is the north direction on a map usually called?",
    options: ["True North", "Grid North", "Magnetic North", "False North"],
    answer: "True North"
  },
  {
    question: "Which type of scale is shown as a line?",
    options: ["Numerical", "Linear", "Ratio", "Verbal"],
    answer: "Linear"
  },
  {
    question: "Which instrument is used to measure humidity?",
    options: ["Thermometer", "Rain gauge", "Hygrometer", "Anemometer"],
    answer: "Hygrometer"
  },
  {
    question: "Which map type shows elevation with color shading?",
    options: ["Relief map", "Political map", "Choropleth map", "Dot map"],
    answer: "Relief map"
  },
  {
    question: "A line joining places with equal pressure is called:",
    options: ["Isobar", "Isotherm", "Contour", "Latitude"],
    answer: "Isobar"
  },
  {
    question: "A line joining places of equal temperature is called:",
    options: ["Isobar", "Isotherm", "Contour", "Longitude"],
    answer: "Isotherm"
  },
  {
    question: "A line joining places of equal height is called:",
    options: ["Isotherm", "Isobar", "Contour", "Latitude"],
    answer: "Contour"
  },
  {
    question: "Which graph shows daily temperature range?",
    options: ["Bar graph", "Pie chart", "Climograph", "Line graph"],
    answer: "Climograph"
  },
  {
    question: "Which map element shows scale as a fraction?",
    options: ["Linear", "Ratio", "Word", "Graphical"],
    answer: "Ratio"
  },
  {
    question: "What is a topographic map used for?",
    options: ["Population", "Weather", "Elevation", "Climate"],
    answer: "Elevation"
  },
  {
    question: "Which map shows countries and boundaries?",
    options: ["Relief map", "Political map", "Weather map", "Resource map"],
    answer: "Political map"
  },
  {
    question: "Which map type uses colors to show rainfall levels?",
    options: ["Dot map", "Choropleth map", "Topographic map", "Sketch map"],
    answer: "Choropleth map"
  },
  {
    question: "Which map feature shows how much area a map covers?",
    options: ["Legend", "Title", "Scale", "Border"],
    answer: "Scale"
  },
  {
    question: "Which tool shows direction on a map?",
    options: ["Protractor", "Legend", "Compass rose", "Grid"],
    answer: "Compass rose"
  },
  {
    question: "A map with grid lines helps to:",
    options: ["Show rivers", "Measure time", "Locate places", "Record temperature"],
    answer: "Locate places"
  },
  {
    question: "In map reading, what does 'NE' stand for?",
    options: ["Next East", "North East", "No Elevation", "Near Equator"],
    answer: "North East"
  },
  {
    question: "What is the purpose of an inset map?",
    options: ["To show a different country", "To provide decoration", "To highlight a small area", "To show climate"],
    answer: "To highlight a small area"
  },
  {
    question: "Which of these is a common feature on physical maps?",
    options: ["Countries", "Elevation", "Population", "Language"],
    answer: "Elevation"
  },
  {
    question: "Which of the following would appear on a weather map?",
    options: ["Pressure systems", "Population", "Language", "Elevation"],
    answer: "Pressure systems"
  },
  {
    question: "Which instrument is used to measure wind speed?",
    options: ["Barometer", "Rain gauge", "Anemometer", "Thermometer"],
    answer: "Anemometer"
  },
  {
    question: "Which weather instrument measures temperature?",
    options: ["Thermometer", "Hygrometer", "Wind vane", "Barometer"],
    answer: "Thermometer"
  },
  {
    question: "A thematic map shows:",
    options: ["Only rivers", "Many themes", "One specific topic", "Elevation only"],
    answer: "One specific topic"
  },
  {
    question: "What does a green color usually represent on a map?",
    options: ["Mountains", "Forests", "Water", "Deserts"],
    answer: "Forests"
  },
  {
    question: "Which color often shows highlands on a map?",
    options: ["Green", "Brown", "Blue", "Red"],
    answer: "Brown"
  },
  {
    question: "Which map shows road networks?",
    options: ["Political", "Relief", "Topographic", "Road map"],
    answer: "Road map"
  },
  {
    question: "Which map is best for navigation?",
    options: ["Sketch", "Topographic", "Road", "Globe"],
    answer: "Road"
  },
  {
    question: "Which is a disadvantage of a small-scale map?",
    options: ["Shows large area", "Shows little detail", "Hard to carry", "Too colorful"],
    answer: "Shows little detail"
  },
  {
    question: "Which map type would show rivers and mountains?",
    options: ["Political", "Relief", "Choropleth", "Economic"],
    answer: "Relief"
  },
  {
    question: "Which line on a map divides the Earth into north and south?",
    options: ["Equator", "Prime Meridian", "Latitude", "Tropic of Cancer"],
    answer: "Equator"
  },
  {
    question: "Which of the following is NOT a component of a map?",
    options: ["Title", "Legend", "Equation", "Scale"],
    answer: "Equation"
  },
  {
    question: "A sketch map is usually:",
    options: ["Detailed", "Simple and freehand", "Drawn to scale", "Topographic"],
    answer: "Simple and freehand"
  },
  {
    question: "Which graph best shows percentages?",
    options: ["Line graph", "Pie chart", "Bar chart", "Dot map"],
    answer: "Pie chart"
  },
  {
    question: "What is used to show temperature and rainfall together?",
    options: ["Bar chart", "Climograph", "Histogram", "Isoline"],
    answer: "Climograph"
  },
  {
    question: "Which graph is best for showing comparisons?",
    options: ["Pie chart", "Bar chart", "Line graph", "Climograph"],
    answer: "Bar chart"
  },
  {
    question: "The function of a grid on a map is to:",
    options: ["Show height", "Help location", "Indicate rainfall", "Decorate the map"],
    answer: "Help location"
  },
  {
    question: "Which of the following shows population distribution?",
    options: ["Contour map", "Political map", "Dot map", "Road map"],
    answer: "Dot map"
  },
  {
    question: "If the scale of a map is 1:50,000, what distance on the ground does 2 cm on the map represent?",
    options: ["1 km", "2.5 km", "5 km", "10 km"],
    answer: "1 km"
  },
  {
    question: "On a 1:100,000 scale map, 4 cm represents how many kilometers?",
    options: ["2 km", "4 km", "5 km", "8 km"],
    answer: "4 km"
  },
  {
    question: "If a town has 10,000 people living in 2 km², what is the population density?",
    options: ["2,000 people/km²", "5,000 people/km²", "10,000 people/km²", "20,000 people/km²"],
    answer: "5,000 people/km²"
  },
  {
    question: "Convert 1:25,000 to a statement scale.",
    options: ["1 cm to 2.5 km", "1 cm to 250 m", "1 cm to 25 km", "1 cm to 500 m"],
    answer: "1 cm to 250 m"
  },
  {
    question: "Which of the following represents the steepest slope?",
    options: ["1:20", "1:10", "1:5", "1:50"],
    answer: "1:5"
  },
  {
    question: "If two points are 5 cm apart on a 1:50,000 map, what is the real-world distance?",
    options: ["1 km", "2.5 km", "3 km", "5 km"],
    answer: "2.5 km"
  },
  {
    question: "A settlement has 600 people living in 3 km². What is its population density?",
    options: ["150", "200", "300", "400"],
    answer: "200"
  },
  {
    question: "The distance between two towns is 3 cm on a map with scale 1:100,000. What is the real distance?",
    options: ["3 km", "2.5 km", "4 km", "1.5 km"],
    answer: "3 km"
  },
  {
    question: "Convert a linear scale of 1 cm to 5 km into a representative fraction (RF).",
    options: ["1:5", "1:5,000", "1:500,000", "1:50,000"],
    answer: "1:500,000"
  },
  {
    question: "A slope rises 50 meters over a horizontal distance of 200 meters. What is the gradient?",
    options: ["1:4", "1:2", "1:6", "1:5"],
    answer: "1:4"
  },
  {
    question: "The bearing of point B from point A is 090°. This means B is located:",
    options: ["North", "South", "East", "West"],
    answer: "East"
  },
  {
    question: "Which of these bearings represents North-East?",
    options: ["045°", "090°", "135°", "315°"],
    answer: "045°"
  },
  {
    question: "A distance of 6 cm on a 1:50,000 map equals how many kilometers on the ground?",
    options: ["1.5 km", "3 km", "6 km", "4.5 km"],
    answer: "3 km"
  },
  {
    question: "If a map has a scale of 1:25,000, what is the ground distance for 10 cm on the map?",
    options: ["2.5 km", "1 km", "5 km", "4 km"],
    answer: "2.5 km"
  },
  {
    question: "A rainfall chart shows values of 100 mm in January and 200 mm in February. What is the percentage increase?",
    options: ["50%", "100%", "75%", "25%"],
    answer: "100%"
  },
  {
    question: "A temperature graph shows 20°C in March and 25°C in April. What is the temperature difference?",
    options: ["3°C", "4°C", "5°C", "6°C"],
    answer: "5°C"
  },
  {
    question: "If a town grows from 20,000 to 25,000 people in 10 years, what is the average annual growth?",
    options: ["500", "400", "1000", "2000"],
    answer: "500"
  },
  {
    question: "A scale of 1:250,000 means 1 cm represents:",
    options: ["250 m", "2.5 km", "25 km", "0.25 km"],
    answer: "2.5 km"
  },
  {
    question: "The RF scale 1:100,000 is equal to how many cm on ground for 1 cm on map?",
    options: ["1 km", "100 m", "10 km", "5 km"],
    answer: "1 km"
  },
  {
    question: "The gradient between two points 200 m apart with 10 m height difference is:",
    options: ["1:20", "1:10", "1:25", "1:30"],
    answer: "1:20"
  },
  {
    question: "If a population grows from 1,000 to 1,500 in 5 years, the growth rate is:",
    options: ["100", "10%", "500", "50%"],
    answer: "50%"
  },
  {
    question: "A river is 12 cm long on a 1:100,000 map. What is the actual length?",
    options: ["12 km", "6 km", "1.2 km", "120 km"],
    answer: "12 km"
  },
  {
    question: "A region receives 600 mm of rainfall and 400 mm of evaporation. What is the water surplus?",
    options: ["200 mm", "400 mm", "100 mm", "300 mm"],
    answer: "200 mm"
  },
  {
    question: "If a bar graph shows monthly rainfall of 100 mm for 6 months, total rainfall is:",
    options: ["600 mm", "500 mm", "700 mm", "800 mm"],
    answer: "600 mm"
  },
  {
    question: "Which bearing represents due South?",
    options: ["000°", "090°", "180°", "270°"],
    answer: "180°"
  },
  {
    question: "Which bearing shows North-West?",
    options: ["135°", "225°", "315°", "045°"],
    answer: "315°"
  },
  {
    question: "A slope falls 20 m over 100 m. What is the gradient?",
    options: ["1:5", "1:2", "1:10", "1:20"],
    answer: "1:5"
  },
  {
    question: "If 3 cm = 6 km on a map, the scale is:",
    options: ["1:20,000", "1:50,000", "1:200,000", "1:100,000"],
    answer: "1:200,000"
  },
  {
    question: "Which unit is used for population density?",
    options: ["km²", "people/km", "people/km²", "km"],
    answer: "people/km²"
  },
  {
    question: "A 1:500,000 scale is best described as:",
    options: ["Large scale", "Medium scale", "Small scale", "City scale"],
    answer: "Small scale"
  },
  {
    question: "Which of the following is the correct order of compass directions clockwise?",
    options: ["N, E, S, W", "E, N, S, W", "N, S, E, W", "W, N, E, S"],
    answer: "N, E, S, W"
  },
  {
    question: "If a population decreases from 1,200 to 1,000, what is the percentage decrease?",
    options: ["20%", "10%", "15%", "5%"],
    answer: "16.67%" // Not listed, you may simplify or round
  },
  {
    question: "If a city of 3 million people occupies 1,500 km², what is its population density?",
    options: ["2,000", "3,000", "1,500", "1,000"],
    answer: "2,000"
  },
  {
    question: "A contour interval of 20 m with 5 contours means elevation change of:",
    options: ["60 m", "100 m", "20 m", "40 m"],
    answer: "100 m"
  },
  {
    question: "If 1 cm = 2 km, what is the scale as a representative fraction?",
    options: ["1:200", "1:20,000", "1:200,000", "1:2,000"],
    answer: "1:200,000"
  },
  {
    question: "Convert 1 cm = 0.5 km into RF.",
    options: ["1:5,000", "1:50,000", "1:500,000", "1:5,000,000"],
    answer: "1:50,000"
  },
  {
    question: "A graph showing population over decades is a:",
    options: ["Pie chart", "Line graph", "Dot map", "Contour map"],
    answer: "Line graph"
  },
  {
    question: "An increase from 40 mm to 80 mm rainfall is what percent increase?",
    options: ["50%", "100%", "25%", "75%"],
    answer: "100%"
  },
  {
    question: "If a river drops 100 m in 5 km, what is the gradient?",
    options: ["1:5", "1:10", "1:20", "1:50"],
    answer: "1:50"
  },
  {
    question: "Convert 5 cm on a 1:100,000 map to ground distance.",
    options: ["1 km", "5 km", "2.5 km", "10 km"],
    answer: "5 km"
  },
  {
    question: "If a village has 500 people and 2 km² area, what is density?",
    options: ["250", "100", "200", "500"],
    answer: "250"
  },
  {
    question: "Which bearing shows South-West?",
    options: ["225°", "270°", "135°", "315°"],
    answer: "225°"
  },
  {
    question: "If rainfall is 700 mm and evaporation is 500 mm, surplus is:",
    options: ["200 mm", "300 mm", "100 mm", "500 mm"],
    answer: "200 mm"
  },
  {
    question: "How many cm on a 1:100,000 map represent 7.5 km?",
    options: ["7.5 cm", "6 cm", "10 cm", "15 cm"],
    answer: "7.5 cm"
  },
  {
    question: "The RF 1:50,000 means 1 cm =",
    options: ["500 m", "50 km", "5 km", "0.5 km"],
    answer: "0.5 km"
  },
  {
    question: "Which slope is gentler?",
    options: ["1:2", "1:10", "1:5", "1:4"],
    answer: "1:10"
  },
  {
    question: "If a map scale is 1:100,000, 2 cm represents 2 km on the ground.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "A population of 10,000 in a 5 km² area gives a density of 1,000 people/km².",
    options: ["True", "False"],
    answer: "False" // It's 2,000
  },
  {
    question: "The gradient of a slope rising 25 m over 250 m is 1:10.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "1 cm on a 1:50,000 map is equal to 500 meters.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "If 3 cm represents 6 km, the map scale is 1:200,000.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "10 mm of rainfall equals 1 cm on a bar graph.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "A scale of 1:250,000 is smaller than 1:50,000.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "A contour interval of 20 m with 5 lines gives 100 m elevation.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "A bar graph can be used to represent population growth.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "If a town has 2,000 people in 1 km², its density is 1,000.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Bearings are measured from East in a clockwise direction.",
    options: ["True", "False"],
    answer: "False" // From North clockwise
  },
  {
    question: "A slope with gradient 1:2 is steeper than 1:10.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "1:100,000 is a larger scale than 1:25,000.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "A climograph combines rainfall and temperature.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "If 1 cm = 4 km, then 5 cm = 25 km.",
    options: ["True", "False"],
    answer: "False" // 20 km
  },
  {
    question: "A barometer is used to measure air pressure.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "The RF scale 1:1,000,000 is equivalent to 1 cm = 10 km.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "An RF of 1:5000 is considered small scale.",
    options: ["True", "False"],
    answer: "False" // It’s large scale
  },
  {
    question: "A slope with 40 m rise over 800 m run has a gradient of 1:20.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "The RF 1:100,000 means 1 cm = 1 km.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "10 cm on a 1:25,000 map represents 2.5 km.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "If 6 cm = 3 km, then scale = 1:50,000.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Contour lines spaced far apart indicate steep slopes.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Population density is measured in meters per person.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "The gradient of 1:50 is gentler than 1:5.",
    options: ["True", "False"],
    answer: "True"
  },

  // ? TRUE/FALSE GENERAL (25)
  {
    question: "The equator is a line of latitude.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Rocks are classified into igneous, sedimentary, and metamorphic.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Wind is not an agent of denudation.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "All rivers flow from south to north.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Delta is formed at the source of a river.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "An earthquake is caused by sudden movements in the Earth’s crust.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "The Pacific Ring of Fire is known for high volcanic activity.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "A pie chart is suitable for showing percentages.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Bar charts can be used to represent rainfall patterns.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Tropical rainforests are found in dry regions.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Isobars connect places of equal height.",
    options: ["True", "False"],
    answer: "False" // Equal pressure
  },
  {
    question: "The savanna vegetation is dominated by grasses.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Ghana shares a border with Mali.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "The Earth rotates on its axis once every 24 hours.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "The Sahara Desert is the largest desert in Africa.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Faulting occurs when rocks bend.",
    options: ["True", "False"],
    answer: "False" // That’s folding
  },
  {
    question: "Renewable resources can be exhausted.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Population census is taken every year in most countries.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "ECOWAS is a regional group in Africa.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Deforestation can lead to soil erosion.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Urban settlements are usually smaller than villages.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Contour lines form V-shapes when crossing rivers.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "The Prime Meridian passes through Ghana.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Vegetation has no influence on climate.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Sedimentary rocks often contain fossils.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "A region experiences high temperatures and rainfall throughout the year. What type of vegetation is most likely to be found?",
    options: ["Desert vegetation", "Tundra", "Tropical rainforest", "Savanna"],
    answer: "Tropical rainforest"
  },
  {
    question: "If deforestation continues in the Amazon Basin, which of the following is a likely consequence?",
    options: ["Increased biodiversity", "Reduced erosion", "Climate change acceleration", "More rainfall"],
    answer: "Climate change acceleration"
  },
  {
    question: "A coastal town is experiencing regular flooding due to sea-level rise. What is the most appropriate adaptation strategy?",
    options: ["Building sea walls", "Increasing fishing", "Cutting down mangroves", "Drilling boreholes"],
    answer: "Building sea walls"
  },
  {
    question: "During a field trip, students observe sediment layers along a cliff. What kind of rock formation are they likely studying?",
    options: ["Igneous rock", "Metamorphic rock", "Sedimentary rock", "Volcanic rock"],
    answer: "Sedimentary rock"
  },
  {
    question: "A farmer in Northern Ghana wants to prevent soil erosion. Which practice should they adopt?",
    options: ["Deforestation", "Bush burning", "Contour ploughing", "Overgrazing"],
    answer: "Contour ploughing"
  },
  {
    question: "If a country depends heavily on one mineral resource, what economic problem might it face?",
    options: ["Diversification", "Overpopulation", "Resource curse", "Sustainable development"],
    answer: "Resource curse"
  },
  {
    question: "A population pyramid with a wide base and narrow top suggests:",
    options: ["An aging population", "Low birth rate", "High birth rate", "Emigration"],
    answer: "High birth rate"
  },
  {
    question: "A satellite image shows circular farming patterns. What type of irrigation is likely used?",
    options: ["Drip irrigation", "Flood irrigation", "Sprinkler irrigation", "Manual watering"],
    answer: "Sprinkler irrigation"
  },
  {
    question: "A river with many meanders is most likely in its:",
    options: ["Youth stage", "Mature stage", "Old stage", "Underground course"],
    answer: "Old stage"
  },
  {
    question: "If isobars are closely packed on a weather map, it indicates:",
    options: ["High rainfall", "Low humidity", "Strong winds", "Clear skies"],
    answer: "Strong winds"
  },
  {
    question: "A volcanic eruption is most likely along:",
    options: ["Transform boundaries", "Divergent boundaries", "Convergent boundaries", "Fault lines only"],
    answer: "Convergent boundaries"
  },
  {
    question: "During an investigation, students observe a cliff retreating inland. Which process is responsible?",
    options: ["Deposition", "Corrosion", "Erosion", "Compaction"],
    answer: "Erosion"
  },
  {
    question: "An area with gently sloping land and fertile soil is ideal for:",
    options: ["Mining", "Agriculture", "Fishing", "Urban sprawl"],
    answer: "Agriculture"
  },
  {
    question: "A major consequence of urban sprawl is:",
    options: ["Desertification", "Increased green cover", "Loss of agricultural land", "Glacier retreat"],
    answer: "Loss of agricultural land"
  },
  {
    question: "Which tool is most appropriate for recording wind direction during fieldwork?",
    options: ["Anemometer", "Wind vane", "Barometer", "Hygrometer"],
    answer: "Wind vane"
  },
  {
    question: "If a map shows a settlement pattern following a river, it is likely a:",
    options: ["Dispersed settlement", "Linear settlement", "Nucleated settlement", "Radial settlement"],
    answer: "Linear settlement"
  },
  {
    question: "An increase in greenhouse gases will MOST LIKELY lead to:",
    options: ["Ozone recovery", "Global cooling", "Sea level rise", "More snowfall"],
    answer: "Sea level rise"
  },
  {
    question: "If a region's population exceeds its carrying capacity, it may face:",
    options: ["Population explosion", "Overpopulation", "Undernourishment", "Migration"],
    answer: "Overpopulation"
  },
  {
    question: "Students collected rainfall data for one year. Which type of graph best shows trends over time?",
    options: ["Pie chart", "Line graph", "Dot map", "Histogram"],
    answer: "Line graph"
  },
  {
    question: "An earthquake struck an area near a fault line. What plate movement likely occurred?",
    options: ["Subduction", "Lateral sliding", "Divergence", "Folding"],
    answer: "Lateral sliding"
  },
  {
    question: "During fieldwork, you observe trees leaning downhill. Which geomorphic process is likely?",
    options: ["Mass wasting", "Erosion", "Folding", "Weathering"],
    answer: "Mass wasting"
  },
  {
    question: "A city built near a confluence of two rivers enjoys which advantage?",
    options: ["Tsunami protection", "Limited trade", "Better transportation", "Low fertility"],
    answer: "Better transportation"
  },
  {
    question: "A country with many active volcanoes is most likely located:",
    options: ["On a shield", "In a continental interior", "Near plate boundaries", "At a fault-free zone"],
    answer: "Near plate boundaries"
  },
  {
    question: "Which of the following is a social consequence of rapid urbanization?",
    options: ["Volcanic eruption", "Unemployment", "Rainfall variation", "Earthquake occurrence"],
    answer: "Unemployment"
  },
  {
    question: "What is the main advantage of using topographic maps in planning?",
    options: ["They show only roads", "They are 3D", "They represent relief and human features", "They have no scale"],
    answer: "They represent relief and human features"
  },
  {
    question: "In a humid tropical climate, which weather element varies least during the year?",
    options: ["Rainfall", "Temperature", "Humidity", "Cloud cover"],
    answer: "Temperature"
  },
  {
    question: "A settlement located at a nodal point is most likely to develop due to:",
    options: ["Flat land", "Fertile soil", "Intersection of transport routes", "Forest cover"],
    answer: "Intersection of transport routes"
  },
  {
    question: "If a desert experiences occasional heavy rains, the landform likely formed is:",
    options: ["Mushroom rock", "Oasis", "Wadi", "Yardang"],
    answer: "Wadi"
  },
  {
    question: "A cross-section between two contour points helps determine:",
    options: ["Vegetation type", "Soil type", "Relief", "Climate"],
    answer: "Relief"
  },
  {
    question: "Which method is best for comparing the population of multiple regions?",
    options: ["Pie chart", "Line graph", "Bar graph", "Isopleth map"],
    answer: "Bar graph"
  },
  {
    question: "In developing countries, high birth rates are due to:",
    options: ["High literacy", "Good healthcare", "Cultural beliefs", "Urbanization"],
    answer: "Cultural beliefs"
  },
  {
    question: "If a river forms levees, it has likely:",
    options: ["Eroded a cliff", "Deposited sediments", "Created a delta", "Formed a gorge"],
    answer: "Deposited sediments"
  },
  {
    question: "Satellite imagery is most useful for:",
    options: ["Calculating wind speed", "Field sketching", "Identifying land use", "Drawing climate graphs"],
    answer: "Identifying land use"
  },
  {
    question: "When water freezes in rock cracks, it causes:",
    options: ["Biological weathering", "Chemical weathering", "Mass wasting", "Mechanical weathering"],
    answer: "Mechanical weathering"
  },
  {
    question: "Which natural hazard is most common along subduction zones?",
    options: ["Hurricanes", "Tornadoes", "Volcanoes", "Landslides"],
    answer: "Volcanoes"
  },
  {
    question: "Which feature best indicates volcanic activity on a topographic map?",
    options: ["Contour lines close together", "Conical shape with crater", "Linear ridge", "U-shaped valley"],
    answer: "Conical shape with crater"
  },
  {
    question: "A major drawback of pie charts is:",
    options: ["Too colorful", "Difficult to draw", "Not good for small values", "Requires map scale"],
    answer: "Not good for small values"
  },
  {
    question: "A country with high dependency ratio will struggle with:",
    options: ["Water supply", "Food production", "Economic growth", "Environmental change"],
    answer: "Economic growth"
  },
  {
    question: "During erosion, load carried by the river that bounces is called:",
    options: ["Saltation", "Suspension", "Traction", "Solution"],
    answer: "Saltation"
  },
  {
    question: "A natural resource that cannot be replaced quickly is:",
    options: ["Wind", "Solar", "Coal", "Hydropower"],
    answer: "Coal"
  },
  {
    question: "Field sketches should be drawn:",
    options: ["At home", "From photographs", "From direct observation", "Without a key"],
    answer: "From direct observation"
  },
  {
    question: "Which resource is used to generate geothermal power?",
    options: ["Sun", "Wind", "Underground heat", "Ocean currents"],
    answer: "Underground heat"
  },
  {
    question: "A rain gauge is used to measure:",
    options: ["Humidity", "Rainfall", "Wind", "Sunlight"],
    answer: "Rainfall"
  },
  {
    question: "When rivers cut V-shaped valleys, they are in their:",
    options: ["Old stage", "Mature stage", "Youth stage", "Middle course"],
    answer: "Youth stage"
  },
  {
    question: "An archipelago is a:",
    options: ["Group of lakes", "Chain of islands", "Line of volcanoes", "Row of mountains"],
    answer: "Chain of islands"
  },
  {
    question: "A rift valley is usually formed due to:",
    options: ["Folding", "Earthquakes", "Faulting", "Landslides"],
    answer: "Faulting"
  },
  {
    question: "Which soil type retains the most water?",
    options: ["Sandy", "Loamy", "Clay", "Gravel"],
    answer: "Clay"
  },
  {
    question: "A village relocates due to flooding. This is an example of:",
    options: ["Voluntary migration", "Seasonal migration", "Forced migration", "International migration"],
    answer: "Forced migration"
  },
  {
    question: "A wind vane records wind speed.",
    options: ["True", "False"],
    answer: "False" // It records direction
  }
];
export default geographyQuestions;