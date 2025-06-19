// src/data/geography.js

const geographyQuestions = [
  // A. PHYSICAL GEOGRAPHY
  {
    question: "Which planet is third from the sun in the solar system?",
    options: ["Mars", "Earth", "Venus", "Jupiter"],
    answer: "Earth"
  },
  {
    question: "Which type of rock is formed by cooling and solidification of magma?",
    options: ["Sedimentary", "Igneous", "Metamorphic", "Organic"],
    answer: "Igneous"
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    answer: "Nitrogen"
  },
  {
    question: "Which of the following is a component of weather?",
    options: ["Soil type", "Cloud cover", "Population", "Land use"],
    answer: "Cloud cover"
  },
  {
    question: "What is the name of the process that breaks down rocks into smaller pieces by natural means?",
    options: ["Erosion", "Deposition", "Weathering", "Compaction"],
    answer: "Weathering"
  },
  {
    question: "Which landform is typically created by folding?",
    options: ["Lava plateau", "Block mountain", "Fold mountain", "Crater lake"],
    answer: "Fold mountain"
  },

  // B. HUMAN AND REGIONAL GEOGRAPHY
  {
    question: "What is the term for the number of people living in a given area?",
    options: ["Urbanization", "Population density", "Migration", "Census"],
    answer: "Population density"
  },
  {
    question: "Which type of settlement is typically larger and more developed?",
    options: ["Hamlet", "Village", "Town", "City"],
    answer: "City"
  },
  {
    question: "Which of the following is a primary economic activity?",
    options: ["Fishing", "Retailing", "Manufacturing", "Banking"],
    answer: "Fishing"
  },
  {
    question: "Which of the following is a renewable energy resource?",
    options: ["Coal", "Natural gas", "Petroleum", "Solar energy"],
    answer: "Solar energy"
  },
  {
    question: "Ghana shares a border with which of the following countries?",
    options: ["Mali", "Burkina Faso", "Senegal", "Ethiopia"],
    answer: "Burkina Faso"
  },
  {
    question: "What regional group is Ghana a member of?",
    options: ["SADC", "ECOWAS", "AUSTRAL", "NAFTA"],
    answer: "ECOWAS"
  },

  // C. PRACTICAL GEOGRAPHY
  {
    question: "Which element of a map shows the relationship between distance on a map and actual distance?",
    options: ["Legend", "Scale", "Compass", "Title"],
    answer: "Scale"
  },
  {
    question: "Which statistical tool would best show population growth over time?",
    options: ["Bar chart", "Pie chart", "Line graph", "Dot map"],
    answer: "Line graph"
  },
  {
    question: "What is the name of the north-south line used in map reading?",
    options: ["Equator", "Meridian", "Contour", "Latitude"],
    answer: "Meridian"
  },
  {
    question: "Which of the following is the third planet from the sun?",
    options: {
      A: "Mars",
      B: "Venus",
      C: "Earth",
      D: "Jupiter"
    },
    correctAnswer: "C"
  },
  {
    question: "Which type of rock is formed from cooled molten magma?",
    options: {
      A: "Sedimentary",
      B: "Metamorphic",
      C: "Igneous",
      D: "Limestone"
    },
    correctAnswer: "C"
  },
  {
    question: "The atmosphere is primarily composed of which gas?",
    options: {
      A: "Oxygen",
      B: "Carbon dioxide",
      C: "Nitrogen",
      D: "Hydrogen"
    },
    correctAnswer: "C"
  },
  {
    question: "The instrument used to measure atmospheric pressure is called:",
    options: {
      A: "Barometer",
      B: "Anemometer",
      C: "Thermometer",
      D: "Hygrometer"
    },
    correctAnswer: "A"
  },
  {
    question: "Which of the following landforms is caused by folding?",
    options: {
      A: "Rift Valley",
      B: "Fold Mountains",
      C: "Volcanic Cone",
      D: "Fault Scarp"
    },
    correctAnswer: "B"
  },
  {
    question: "The Pacific Ring of Fire is associated with:",
    options: {
      A: "Tornadoes",
      B: "Earthquakes and volcanoes",
      C: "Droughts",
      D: "Tsunamis only"
    },
    correctAnswer: "B"
  },
  {
    question: "Lava solidifies to form which type of rock?",
    options: {
      A: "Marble",
      B: "Basalt",
      C: "Limestone",
      D: "Slate"
    },
    correctAnswer: "B"
  },
  {
    question: "Weathering is best described as:",
    options: {
      A: "Breaking down of rocks in situ",
      B: "Movement of rocks",
      C: "Melting of ice",
      D: "Creation of earthquakes"
    },
    correctAnswer: "A"
  },
  {
    question: "Which of these is an agent of denudation?",
    options: {
      A: "Volcano",
      B: "Wind",
      C: "Lava",
      D: "Fault"
    },
    correctAnswer: "B"
  },
  {
    question: "Which of the following results from faulting?",
    options: {
      A: "Fold Mountains",
      B: "Volcanic Cones",
      C: "Rift Valleys",
      D: "Basins"
    },
    correctAnswer: "C"
  },
  {
    question: "A delta is formed at the:",
    options: {
      A: "Source of a river",
      B: "Mouth of a river",
      C: "Middle course of a river",
      D: "Underground water zone"
    },
    correctAnswer: "B"
  },
  {
    question: "Which of the following is a feature of coastal erosion?",
    options: {
      A: "Beach",
      B: "Spit",
      C: "Cliff",
      D: "Delta"
    },
    correctAnswer: "C"
  },
  {
    question: "Deforestation mainly leads to:",
    options: {
      A: "Increased rainfall",
      B: "Soil erosion",
      C: "Higher productivity",
      D: "Earthquakes"
    },
    correctAnswer: "B"
  },
  {
    question: "Which vegetation zone is most common in Northern Ghana?",
    options: {
      A: "Mangrove forest",
      B: "Deciduous forest",
      C: "Savanna",
      D: "Coniferous forest"
    },
    correctAnswer: "C"
  },
  {
    question: "Which of these is not a source of soil erosion?",
    options: {
      A: "Overgrazing",
      B: "Afforestation",
      C: "Bush burning",
      D: "Excessive farming"
    },
    correctAnswer: "B"
  },
  {
    question: "Which type of volcano has gentle slopes?",
    options: {
      A: "Cinder cone",
      B: "Composite cone",
      C: "Shield volcano",
      D: "Plug dome"
    },
    correctAnswer: "C"
  },
  {
    question: "The hydrosphere refers to:",
    options: {
      A: "The landmass of the Earth",
      B: "The gaseous envelope around the Earth",
      C: "All the water bodies on Earth",
      D: "Earth’s core"
    },
    correctAnswer: "C"
  },
  {
    question: "Rocks formed from sediments under pressure are called:",
    options: {
      A: "Igneous rocks",
      B: "Metamorphic rocks",
      C: "Sedimentary rocks",
      D: "Lava rocks"
    },
    correctAnswer: "C"
  },
  {
    question: "One main cause of mass wasting is:",
    options: {
      A: "Sunlight",
      B: "Gravity",
      C: "Winds",
      D: "Human activities"
    },
    correctAnswer: "B"
  },
  {
    question: "Which type of rock can change into another type due to heat and pressure?",
    options: {
      A: "Igneous",
      B: "Metamorphic",
      C: "Sedimentary",
      D: "Minerals"
    },
    correctAnswer: "C"
  },
  {
    question: "Which of the following is the third planet from the sun?",
    options: {
      A: "Mars",
      B: "Venus",
      C: "Earth",
      D: "Jupiter"
    },
    correctAnswer: "C"
  },
  {
    question: "Which type of rock is formed from cooled molten magma?",
    options: {
      A: "Sedimentary",
      B: "Metamorphic",
      C: "Igneous",
      D: "Limestone"
    },
    correctAnswer: "C"
  },
  {
    question: "The atmosphere is primarily composed of which gas?",
    options: {
      A: "Oxygen",
      B: "Carbon dioxide",
      C: "Nitrogen",
      D: "Hydrogen"
    },
    correctAnswer: "C"
  },
  {
    question: "The instrument used to measure atmospheric pressure is called:",
    options: {
      A: "Barometer",
      B: "Anemometer",
      C: "Thermometer",
      D: "Hygrometer"
    },
    correctAnswer: "A"
  },
  {
    question: "Which of the following landforms is caused by folding?",
    options: {
      A: "Rift Valley",
      B: "Fold Mountains",
      C: "Volcanic Cone",
      D: "Fault Scarp"
    },
    correctAnswer: "B"
  },
  {
    question: "The Pacific Ring of Fire is associated with:",
    options: {
      A: "Tornadoes",
      B: "Earthquakes and volcanoes",
      C: "Droughts",
      D: "Tsunamis only"
    },
    correctAnswer: "B"
  },
  {
    question: "Lava solidifies to form which type of rock?",
    options: {
      A: "Marble",
      B: "Basalt",
      C: "Limestone",
      D: "Slate"
    },
    correctAnswer: "B"
  },
  {
    question: "Weathering is best described as:",
    options: {
      A: "Breaking down of rocks in situ",
      B: "Movement of rocks",
      C: "Melting of ice",
      D: "Creation of earthquakes"
    },
    correctAnswer: "A"
  },
  {
    question: "Which of these is an agent of denudation?",
    options: {
      A: "Volcano",
      B: "Wind",
      C: "Lava",
      D: "Fault"
    },
    correctAnswer: "B"
  },
  {
    question: "Which of the following results from faulting?",
    options: {
      A: "Fold Mountains",
      B: "Volcanic Cones",
      C: "Rift Valleys",
      D: "Basins"
    },
    correctAnswer: "C"
  },
  {
    question: "A delta is formed at the:",
    options: {
      A: "Source of a river",
      B: "Mouth of a river",
      C: "Middle course of a river",
      D: "Underground water zone"
    },
    correctAnswer: "B"
  },
  {
    question: "Which of the following is a feature of coastal erosion?",
    options: {
      A: "Beach",
      B: "Spit",
      C: "Cliff",
      D: "Delta"
    },
    correctAnswer: "C"
  },
  {
    question: "Deforestation mainly leads to:",
    options: {
      A: "Increased rainfall",
      B: "Soil erosion",
      C: "Higher productivity",
      D: "Earthquakes"
    },
    correctAnswer: "B"
  },
  {
    question: "Which vegetation zone is most common in Northern Ghana?",
    options: {
      A: "Mangrove forest",
      B: "Deciduous forest",
      C: "Savanna",
      D: "Coniferous forest"
    },
    correctAnswer: "C"
  },
  {
    question: "Which of these is not a source of soil erosion?",
    options: {
      A: "Overgrazing",
      B: "Afforestation",
      C: "Bush burning",
      D: "Excessive farming"
    },
    correctAnswer: "B"
  },
  {
    question: "Which type of volcano has gentle slopes?",
    options: {
      A: "Cinder cone",
      B: "Composite cone",
      C: "Shield volcano",
      D: "Plug dome"
    },
    correctAnswer: "C"
  },
  {
    question: "The hydrosphere refers to:",
    options: {
      A: "The landmass of the Earth",
      B: "The gaseous envelope around the Earth",
      C: "All the water bodies on Earth",
      D: "Earth’s core"
    },
    correctAnswer: "C"
  },
  {
    question: "Rocks formed from sediments under pressure are called:",
    options: {
      A: "Igneous rocks",
      B: "Metamorphic rocks",
      C: "Sedimentary rocks",
      D: "Lava rocks"
    },
    correctAnswer: "C"
  },
  {
    question: "One main cause of mass wasting is:",
    options: {
      A: "Sunlight",
      B: "Gravity",
      C: "Winds",
      D: "Human activities"
    },
    correctAnswer: "B"
  },
  {
    question: "Which type of rock can change into another type due to heat and pressure?",
    options: {
      A: "Igneous",
      B: "Metamorphic",
      C: "Sedimentary",
      D: "Minerals"
    },
    correctAnswer: "C"
  },
  {
    question: "Which gas in the atmosphere is most important for weather formation?",
    options: {
      A: "Oxygen",
      B: "Nitrogen",
      C: "Carbon dioxide",
      D: "Water vapour"
    },
    correctAnswer: "D"
  },
  {
    question: "The weather element measured with a thermometer is:",
    options: {
      A: "Humidity",
      B: "Pressure",
      C: "Temperature",
      D: "Wind speed"
    },
    correctAnswer: "C"
  },
  {
    question: "Oxbow lakes are formed by the action of:",
    options: {
      A: "Glaciers",
      B: "Winds",
      C: "Rivers",
      D: "Ocean waves"
    },
    correctAnswer: "C"
  },
  {
    question: "Which process leads to the formation of fold mountains?",
    options: {
      A: "Compression",
      B: "Tension",
      C: "Erosion",
      D: "Volcanic eruption"
    },
    correctAnswer: "A"
  },
  {
    question: "Which of the following is a feature of glacial erosion?",
    options: {
      A: "Cirque",
      B: "Delta",
      C: "Spit",
      D: "Loess"
    },
    correctAnswer: "A"
  },
  {
    question: "Which of these activities can lead to desertification?",
    options: {
      A: "Afforestation",
      B: "Overgrazing",
      C: "Composting",
      D: "Crop rotation"
    },
    correctAnswer: "B"
  },
  {
    question: "The soil type best for farming is:",
    options: {
      A: "Clay",
      B: "Sandy",
      C: "Loamy",
      D: "Gravel"
    },
    correctAnswer: "C"
  },
  {
    question: "Which of the following is a renewable energy source?",
    options: {
      A: "Petroleum",
      B: "Coal",
      C: "Natural gas",
      D: "Solar"
    },
    correctAnswer: "D"
  },
  {
    question: "The term 'population density' refers to:",
    options: {
      A: "Birth rate per year",
      B: "Number of people per square km",
      C: "Migration rate",
      D: "Unemployment rate"
    },
    correctAnswer: "B"
  },
  {
    question: "Urban settlements are mainly characterized by:",
    options: {
      A: "Farming activities",
      B: "Low population density",
      C: "Social amenities",
      D: "Traditional leadership"
    },
    correctAnswer: "C"
  },
  {
    question: "Which economic activity involves the extraction of natural resources?",
    options: {
      A: "Primary",
      B: "Secondary",
      C: "Tertiary",
      D: "Quaternary"
    },
    correctAnswer: "A"
  },
  {
    question: "Which of these is a secondary economic activity?",
    options: {
      A: "Fishing",
      B: "Teaching",
      C: "Farming",
      D: "Manufacturing"
    },
    correctAnswer: "D"
  },
  {
    question: "The capital city of Ghana is located in the:",
    options: {
      A: "Western Region",
      B: "Greater Accra Region",
      C: "Eastern Region",
      D: "Central Region"
    },
    correctAnswer: "B"
  },
  {
    question: "Lake Volta is one of the largest artificial lakes in the world. It was created by:",
    options: {
      A: "Bui Dam",
      B: "Akosombo Dam",
      C: "Kpong Dam",
      D: "Weija Dam"
    },
    correctAnswer: "B"
  },
  {
    question: "Which river flows through both Ghana and Burkina Faso?",
    options: {
      A: "Pra",
      B: "Tano",
      C: "Volta",
      D: "Densu"
    },
    correctAnswer: "C"
  },
  {
    question: "Which African river is the longest?",
    options: {
      A: "Zambezi",
      B: "Niger",
      C: "Nile",
      D: "Congo"
    },
    correctAnswer: "C"
  },
  {
    question: "Which African country is landlocked?",
    options: {
      A: "Ghana",
      B: "Nigeria",
      C: "Chad",
      D: "Senegal"
    },
    correctAnswer: "C"
  },
  {
    question: "The headquarters of ECOWAS is located in:",
    options: {
      A: "Accra",
      B: "Abuja",
      C: "Lagos",
      D: "Dakar"
    },
    correctAnswer: "B"
  },
  {
    question: "One major aim of regional groupings in Africa is to:",
    options: {
      A: "Increase colonial influence",
      B: "Promote trade and unity",
      C: "Discourage education",
      D: "Close national borders"
    },
    correctAnswer: "B"
  },
  {
    question: "The primary goal of the African Union (AU) is:",
    options: {
      A: "Divide the continent",
      B: "Fight global warming",
      C: "Achieve continental unity and development",
      D: "Assist Europe"
    },
    correctAnswer: "C"
  },
  {
    question: "What is the term for a river that overflows its banks and spreads sediment across a wide area?",
    options: ["Delta", "Floodplain", "Estuary", "Oxbow lake"],
    answer: "Floodplain",
  },
  {
    question: "Which process involves the breakdown of rocks without changing their chemical composition?",
    options: ["Chemical weathering", "Biological weathering", "Physical weathering", "Erosion"],
    answer: "Physical weathering",
  },
  {
    question: "Which gas makes up the largest percentage of the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    answer: "Nitrogen",
  },
  {
    question: "Which type of soil is best for agriculture due to its good drainage and nutrient content?",
    options: ["Clay", "Silt", "Sandy", "Loamy"],
    answer: "Loamy",
  },
  {
    question: "Which ocean current is responsible for the dry conditions in the Namib Desert?",
    options: ["Gulf Stream", "Canary Current", "Benguela Current", "Agulhas Current"],
    answer: "Benguela Current",
  },
  {
    question: "What is the name given to the point on the Earth's surface directly above the earthquake's origin?",
    options: ["Epicenter", "Focus", "Fault line", "Ridge"],
    answer: "Epicenter",
  },
  {
    question: "Which instrument is used to measure atmospheric pressure?",
    options: ["Anemometer", "Barometer", "Hygrometer", "Thermometer"],
    answer: "Barometer",
  },
  {
    question: "Deforestation is a major threat to which natural resource?",
    options: ["Mountains", "Rivers", "Forests", "Valleys"],
    answer: "Forests",
  },
  {
    question: "Which of the following best describes a fold mountain?",
    options: ["Formed by lava", "Created by glacial movement", "Result of tectonic plates compressing", "Formed by erosion"],
    answer: "Result of tectonic plates compressing",
  },
  {
    question: "Which type of settlement is typically linear in shape?",
    options: ["Nucleated", "Dispersed", "Linear", "Isolated"],
    answer: "Linear",
  },
  {
    question: "What is the major economic activity in the savanna vegetation zone of Ghana?",
    options: ["Fishing", "Cocoa farming", "Cattle rearing", "Mining"],
    answer: "Cattle rearing",
  },
  {
    question: "A contour line on a map connects points of equal what?",
    options: ["Temperature", "Rainfall", "Altitude", "Population"],
    answer: "Altitude",
  },
  {
    question: "Which region in Ghana is best known for gold mining?",
    options: ["Volta Region", "Ashanti Region", "Upper West Region", "Eastern Region"],
    answer: "Ashanti Region",
  },
  {
    question: "The Volta Lake was created by the construction of which dam?",
    options: ["Tano Dam", "Kpong Dam", "Bui Dam", "Akosombo Dam"],
    answer: "Akosombo Dam",
  },
  {
    question: "The Sahara Desert is located in which part of Africa?",
    options: ["North", "South", "East", "Central"],
    answer: "North",
  },
  {
    question: "Which of the following is a tertiary economic activity?",
    options: ["Farming", "Fishing", "Transportation", "Mining"],
    answer: "Transportation",
  },
  {
    question: "The shape of the Earth is best described as a:",
    options: ["Perfect sphere", "Oblate spheroid", "Flat disk", "Cube"],
    answer: "Oblate spheroid",
  },
  {
    question: "In which layer of the atmosphere does weather occur?",
    options: ["Stratosphere", "Thermosphere", "Troposphere", "Mesosphere"],
    answer: "Troposphere",
  },
  {
    question: "Which survey tool is used to measure horizontal and vertical angles?",
    options: ["Measuring tape", "Compass", "Theodolite", "Clinometer"],
    answer: "Theodolite",
  },
  {
    question: "Which of these rivers flows through multiple West African countries before reaching the Atlantic Ocean?",
    options: ["Nile", "Zambezi", "Volta", "Niger"],
    answer: "Niger",
  },
  {
    question: "What is the primary cause of ocean currents?",
    options: ["Wind patterns", "Volcanic activity", "River discharge", "Earthquakes"],
    answer: "Wind patterns"
  },
  {
    question: "Which type of rock is formed from the cooling of molten magma?",
    options: ["Sedimentary", "Igneous", "Metamorphic", "Alluvial"],
    answer: "Igneous"
  },
  {
    question: "Which layer of the Earth's atmosphere contains the ozone layer?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    answer: "Stratosphere"
  },
  {
    question: "What is the process called when rocks are broken down without changing their chemical composition?",
    options: ["Chemical weathering", "Mass wasting", "Physical weathering", "Erosion"],
    answer: "Physical weathering"
  },
  {
    question: "Which of the following is a feature formed by folding?",
    options: ["Block mountain", "Rift valley", "Anticline", "Lava plateau"],
    answer: "Anticline"
  },
  {
    question: "Which type of vegetation is common in the savannah region of Ghana?",
    options: ["Mangrove", "Rainforest", "Grassland with scattered trees", "Coniferous forest"],
    answer: "Grassland with scattered trees"
  },
  {
    question: "What is the term for the downslope movement of soil and rock due to gravity?",
    options: ["Deposition", "Erosion", "Mass wasting", "Sedimentation"],
    answer: "Mass wasting"
  },
  {
    question: "Which river is the longest in Ghana?",
    options: ["Pra", "Volta", "Ankobra", "Densu"],
    answer: "Volta"
  },
  {
    question: "Which of the following best describes a lagoon?",
    options: ["A freshwater lake", "A river bend", "A shallow body of saltwater separated from the sea", "A crater lake"],
    answer: "A shallow body of saltwater separated from the sea"
  },
  {
    question: "What is deforestation?",
    options: ["Planting of trees", "Cutting down of trees", "Soil erosion", "Burning of vegetation"],
    answer: "Cutting down of trees"
  },
  {
    question: "Which agent of denudation forms U-shaped valleys?",
    options: ["Wind", "Glaciers", "Rivers", "Waves"],
    answer: "Glaciers"
  },
  {
    question: "What is the name given to the uppermost layer of soil?",
    options: ["Bedrock", "Topsoil", "Subsoil", "Humus"],
    answer: "Topsoil"
  },
  {
    question: "Which of the following is a cause of soil erosion?",
    options: ["Afforestation", "Mulching", "Overgrazing", "Contour ploughing"],
    answer: "Overgrazing"
  },
  {
    question: "What does the term 'population density' refer to?",
    options: ["The number of animals in a region", "The number of people per unit area", "The birth rate", "The number of settlements"],
    answer: "The number of people per unit area"
  },
  {
    question: "Which of these is a primary economic activity?",
    options: ["Fishing", "Banking", "Teaching", "Manufacturing"],
    answer: "Fishing"
  },
  {
    question: "Which of the following is a renewable energy source?",
    options: ["Coal", "Petroleum", "Natural gas", "Solar energy"],
    answer: "Solar energy"
  },
  {
    question: "What is the main occupation of people in rural settlements in Ghana?",
    options: ["Mining", "Farming", "Trading", "Teaching"],
    answer: "Farming"
  },
  {
    question: "Which region in Ghana is noted for cocoa farming?",
    options: ["Northern Region", "Volta Region", "Ashanti Region", "Upper West Region"],
    answer: "Ashanti Region"
  },
  {
    question: "Which of the following countries is not part of ECOWAS?",
    options: ["Nigeria", "Ghana", "Kenya", "Togo"],
    answer: "Kenya"
  },
  {
    question: "What is the capital city of Ghana?",
    options: ["Tamale", "Accra", "Kumasi", "Takoradi"],
    answer: "Accra"
  },
  {
    question: "Which African river is the longest?",
    options: ["Zambezi", "Niger", "Congo", "Nile"],
    answer: "Nile"
  },
  {
    question: "Which of the following energy sources is non-renewable?",
    options: ["Wind", "Solar", "Coal", "Biomass"],
    answer: "Coal"
  },
  {
    question: "A feature created by river erosion is a:",
    options: ["Spit", "Delta", "Waterfall", "Cave"],
    answer: "Waterfall"
  },
  {
    question: "The Volta River flows into which ocean?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Atlantic Ocean"
  },
  {
    question: "An urban settlement is characterized by:",
    options: ["Farming and low population", "Small houses and low density", "High population and infrastructure", "Nomadic activities"],
    answer: "High population and infrastructure"
  },
  {
    question: "The Earth rotates on its axis once every:",
    options: ["12 hours", "24 hours", "30 days", "365 days"],
    answer: "24 hours"
  },
  {
    question: "An earthquake is caused by sudden movements in the:",
    options: ["Atmosphere", "Mantle", "Crust", "Core"],
    answer: "Crust"
  },
  {
    question: "Which part of Ghana is the driest?",
    options: ["Volta Region", "Western Region", "Upper East Region", "Eastern Region"],
    answer: "Upper East Region"
  },
  {
    question: "What type of rock is marble?",
    options: ["Igneous", "Metamorphic", "Sedimentary", "Organic"],
    answer: "Metamorphic"
  },
  {
    question: "Which of the following is a fold mountain?",
    options: ["Andes", "Kilimanjaro", "Ayers Rock", "Mount Fuji"],
    answer: "Andes"
  },
  {
    question: "The component of the atmosphere most essential to life is:",
    options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"],
    answer: "Oxygen"
  },
  {
    question: "A compass is used to find:",
    options: ["Altitude", "Temperature", "Direction", "Rainfall"],
    answer: "Direction"
  },
  {
    question: "Which of the following is a tertiary economic activity?",
    options: ["Farming", "Fishing", "Banking", "Mining"],
    answer: "Banking"
  },
  {
    question: "Which type of settlement is usually linear?",
    options: ["Along rivers", "Around mountains", "Near markets", "On plateaus"],
    answer: "Along rivers"
  },
  {
    question: "Which method is used to represent population data on a map?",
    options: ["Dot maps", "Contour lines", "Isotherms", "Relief shading"],
    answer: "Dot maps"
  },
  {
    question: "What is the meaning of 'relief' in geography?",
    options: ["Weather", "Vegetation", "Height and shape of the land", "Climate"],
    answer: "Height and shape of the land"
  },
  {
    question: "The part of a map that explains symbols is called the:",
    options: ["Scale", "Compass", "Legend", "Title"],
    answer: "Legend"
  },
  {
    question: "A delta is formed at the:",
    options: ["Mouth of a river", "Source of a river", "Middle course", "Tributary"],
    answer: "Mouth of a river"
  },
  {
    question: "Which gas is responsible for the greenhouse effect?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon dioxide"
  },
  {
    question: "Which of these is a function of a topographic map?",
    options: ["Shows time zones", "Shows landforms", "Shows population", "Shows rainfall"],
    answer: "Shows landforms"
  },
  {
    question: "Sedimentary rocks are mostly formed by:",
    options: ["Cooling", "Heat and pressure", "Deposition", "Melting"],
    answer: "Deposition"
  },
  {
    question: "Which zone of the atmosphere contains most weather activities?",
    options: ["Stratosphere", "Thermosphere", "Mesosphere", "Troposphere"],
    answer: "Troposphere"
  },
  {
    question: "The distance on a map compared to real-world distance is shown using a:",
    options: ["Legend", "Key", "Scale", "Grid"],
    answer: "Scale"
  },
  {
    question: "The Sahara Desert is located in:",
    options: ["East Africa", "Southern Africa", "North Africa", "West Africa"],
    answer: "North Africa"
  },
  {
    question: "Which of the following is caused by water action?",
    options: ["Sand dunes", "Caves", "Waterfalls", "Rift valleys"],
    answer: "Waterfalls"
  },
  {
    question: "Which African lake is the largest by area?",
    options: ["Lake Tanganyika", "Lake Volta", "Lake Chad", "Lake Victoria"],
    answer: "Lake Victoria"
  },
  {
    question: "Which type of survey method uses simple tools like chains and compasses?",
    options: ["Theodolite surveying", "Plane table surveying", "Chain survey", "Digital surveying"],
    answer: "Chain survey"
  },
  {
    question: "Which of these is an environmental concern in Ghana?",
    options: ["Hurricanes", "Deforestation", "Volcanoes", "Tsunamis"],
    answer: "Deforestation"
  },
  {
    question: "Which body is responsible for managing Ghana’s forest resources?",
    options: ["Ghana Water Company", "Forestry Commission", "VRA", "Ghana Tourism Authority"],
    answer: "Forestry Commission"
  },
  {
    question: "Which of the following is not a component of the environment?",
    options: ["Atmosphere", "Hydrosphere", "Geosphere", "Technosphere"],
    answer: "Technosphere"
  },
  {
    question: "What is the general direction of trade winds in the tropics?",
    options: ["From northeast and southeast toward the equator", "From poles to equator", "From west to east", "From east to west"],
    answer: "From northeast and southeast toward the equator"
  },
  {
    question: "What is the best way to prevent soil erosion?",
    options: ["Overgrazing", "Bush burning", "Crop rotation", "Deforestation"],
    answer: "Crop rotation"
  },
  {
    question: "Which natural feature is formed by faulting?",
    options: ["Fold mountain", "Rift valley", "Delta", "Beach"],
    answer: "Rift valley"
  },
  {
    question: "Which instrument is used to measure humidity?",
    options: ["Anemometer", "Thermometer", "Barometer", "Hygrometer"],
    answer: "Hygrometer"
  },
  {
    question: "A V-shaped valley is typically formed by:",
    options: ["Glaciers", "Wind", "Rivers", "Waves"],
    answer: "Rivers"
  },
  {
    question: "Which energy source is most environmentally friendly?",
    options: ["Coal", "Solar", "Petrol", "Natural gas"],
    answer: "Solar"
  },
  {
    question: "Which of these is a volcanic mountain in Africa?",
    options: ["Mount Elgon", "Mount Drakensberg", "Mount Atlas", "Mount Ruwenzori"],
    answer: "Mount Elgon"
  },
  {
    question: "An ox-bow lake is formed by:",
    options: ["River erosion and deposition", "Glacier movement", "Wind action", "Tectonic uplift"],
    answer: "River erosion and deposition"
  },
  {
    question: "Which of these settlements is most likely to develop along transport routes?",
    options: ["Linear settlement", "Nucleated settlement", "Isolated settlement", "Scattered settlement"],
    answer: "Linear settlement"
  },
  {
    question: "What is the scale of a map?",
    options: ["The direction indicator", "The key to the map", "Ratio of map distance to ground distance", "A contour line"],
    answer: "Ratio of map distance to ground distance"
  },
  {
    question: "The Sahara Desert stretches across how many African countries approximately?",
    options: ["5", "7", "11", "Over 10"],
    answer: "Over 10"
  },
  {
    question: "What is the most dominant type of soil in northern Ghana?",
    options: ["Sandy loam", "Laterite", "Clay", "Alluvial"],
    answer: "Laterite"
  },
  {
    question: "Which of the following is not a method of representing relief on a map?",
    options: ["Contour lines", "Layer shading", "Spot heights", "Bar graphs"],
    answer: "Bar graphs"
  },
  {
    question: "The Earth’s shape is best described as a:",
    options: ["Flat disk", "Perfect sphere", "Ellipsoid", "Cuboid"],
    answer: "Ellipsoid"
  },
  {
    question: "A tributary is:",
    options: ["A small lake", "A small stream that joins a main river", "A delta", "A waterfall"],
    answer: "A small stream that joins a main river"
  },
  {
    question: "The function of a weather station is to:",
    options: ["Forecast earthquakes", "Study volcanoes", "Observe weather conditions", "Detect soil types"],
    answer: "Observe weather conditions"
  },
  {
    question: "Which ocean borders Ghana?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    answer: "Atlantic"
  },
  {
    question: "The movement of people from rural to urban areas is called:",
    options: ["Emigration", "Migration", "Urbanization", "Rural depopulation"],
    answer: "Urbanization"
  },
  {
    question: "Which of these is a characteristic of metamorphic rocks?",
    options: ["Formed from sediments", "Have layered structure", "Formed by heat and pressure", "Contain fossils"],
    answer: "Formed by heat and pressure"
  },
  {
    question: "Which city is known as the center of commerce in Ghana?",
    options: ["Kumasi", "Takoradi", "Accra", "Tamale"],
    answer: "Accra"
  },
  {
    question: "In which direction does the sun rise?",
    options: ["North", "South", "East", "West"],
    answer: "East"
  },
  {
    question: "Which of the following is used to determine wind direction?",
    options: ["Thermometer", "Wind vane", "Rain gauge", "Hygrometer"],
    answer: "Wind vane"
  },
  {
    question: "The removal of the top layer of soil by rainwater is called:",
    options: ["Siltation", "Deforestation", "Soil leaching", "Soil erosion"],
    answer: "Soil erosion"
  },
  {
    question: "Which landform results from wave deposition?",
    options: ["Cliff", "Bay", "Spit", "Headland"],
    answer: "Spit"
  },
  {
    question: "What causes the day and night cycle?",
    options: ["Earth's revolution", "Moon phases", "Earth's rotation", "Solar eclipse"],
    answer: "Earth's rotation"
  },
  {
    question: "Which river is dammed at Akosombo in Ghana?",
    options: ["Tano", "Ankobra", "Volta", "Pra"],
    answer: "Volta"
  },
  {
    question: "Which of these is the smallest unit of settlement?",
    options: ["Village", "Hamlet", "Town", "City"],
    answer: "Hamlet"
  },
  {
    question: "What is the main reason for rural-urban migration in Ghana?",
    options: ["Availability of farmland", "Lack of water", "Search for better jobs", "Tribal conflicts"],
    answer: "Search for better jobs"
  },
  {
    question: "Which mountain is the highest in Africa?",
    options: ["Kilimanjaro", "Elgon", "Ruwenzori", "Drakensberg"],
    answer: "Kilimanjaro"
  },
  {
    question: "What type of vegetation is found in coastal areas of Ghana?",
    options: ["Coniferous forest", "Savannah", "Mangrove", "Desert"],
    answer: "Mangrove"
  },
  {
    question: "Which instrument is used to measure rainfall?",
    options: ["Barometer", "Rain gauge", "Anemometer", "Thermometer"],
    answer: "Rain gauge"
  },
  {
    question: "What is the name for rocks changed by heat and pressure?",
    options: ["Igneous", "Sedimentary", "Metamorphic", "Molten"],
    answer: "Metamorphic"
  },
  {
    question: "Which of these countries shares a border with Ghana to the east?",
    options: ["Ivory Coast", "Togo", "Burkina Faso", "Nigeria"],
    answer: "Togo"
  },
  {
    question: "Which feature is formed by glacial erosion?",
    options: ["V-shaped valley", "U-shaped valley", "Oxbow lake", "Spit"],
    answer: "U-shaped valley"
  },
  {
    question: "The part of the Earth where life exists is called:",
    options: ["Atmosphere", "Lithosphere", "Hydrosphere", "Biosphere"],
    answer: "Biosphere"
  },
  {
    question: "What is the main cause of tides?",
    options: ["Earthquake", "Volcanoes", "Gravitational pull of the moon", "Wind action"],
    answer: "Gravitational pull of the moon"
  },
  {
    question: "Which mineral is commonly mined in Tarkwa?",
    options: ["Bauxite", "Diamond", "Manganese", "Gold"],
    answer: "Gold"
  },
  {
    question: "Which of the following is an agent of erosion?",
    options: ["Vegetation", "Sunlight", "Wind", "Ozone"],
    answer: "Wind"
  },
  {
    question: "Which term describes farming for family use only?",
    options: ["Commercial farming", "Mixed farming", "Subsistence farming", "Pastoralism"],
    answer: "Subsistence farming"
  },
  {
    question: "What is the international date line located at?",
    options: ["0° Longitude", "180° Longitude", "90° Latitude", "23.5° Latitude"],
    answer: "180° Longitude"
  },
  {
    question: "What is the capital of the Volta Region?",
    options: ["Koforidua", "Ho", "Tamale", "Wa"],
    answer: "Ho"
  },
  {
    question: "Which continent has the highest number of countries?",
    options: ["Europe", "Asia", "Africa", "South America"],
    answer: "Africa"
  },
  {
    question: "The Amazon River is found in which continent?",
    options: ["Africa", "South America", "North America", "Asia"],
    answer: "South America"
  },
  {
    question: "Which of these best describes a desert?",
    options: ["A place with many trees", "A place with low rainfall", "A cold place", "A highland area"],
    answer: "A place with low rainfall"
  },
  {
    question: "Which of the following is a natural disaster?",
    options: ["Mining", "Flood", "Road construction", "Irrigation"],
    answer: "Flood"
  },
  {
    question: "Which factor affects the temperature of a place?",
    options: ["Soil type", "Cloud cover", "Population", "Economic activity"],
    answer: "Cloud cover"
  },
  {
    question: "Contour lines on a map show:",
    options: ["Wind speed", "Vegetation types", "Elevation and relief", "Rainfall"],
    answer: "Elevation and relief"
  },
  {
    question: "The Equator is an example of a:",
    options: ["Longitude", "Latitude", "Contour", "Meridian"],
    answer: "Latitude"
  },
  {
    question: "Which town in Ghana is famous for diamond mining?",
    options: ["Obuasi", "Akwatia", "Prestea", "Tarkwa"],
    answer: "Akwatia"
  },
  {
    question: "The study of weather is called:",
    options: ["Cartography", "Seismology", "Meteorology", "Climatology"],
    answer: "Meteorology"
  },
  {
    question: "Which feature is formed by deposition in a river?",
    options: ["Canyon", "Meander", "Delta", "Gorge"],
    answer: "Delta"
  },
  {
    question: "Which country lies directly to the north of Ghana?",
    options: ["Togo", "Burkina Faso", "Ivory Coast", "Benin"],
    answer: "Burkina Faso"
  },
  {
    question: "Which instrument is used to measure wind speed?",
    options: ["Wind vane", "Rain gauge", "Anemometer", "Barometer"],
    answer: "Anemometer"
  },
  {
    question: "The upper layer of the atmosphere is known as:",
    options: ["Stratosphere", "Troposphere", "Mesosphere", "Exosphere"],
    answer: "Exosphere"
  },
  {
    question: "What is the term for farming and raising animals together?",
    options: ["Mixed farming", "Intensive farming", "Pastoral farming", "Subsistence farming"],
    answer: "Mixed farming"
  },
  {
    question: "Which type of rock is formed from lava?",
    options: ["Sedimentary", "Igneous", "Metamorphic", "Fossil"],
    answer: "Igneous"
  },
  {
    question: "The Volta Lake was created by damming which river?",
    options: ["Pra", "Tano", "Ankobra", "Volta"],
    answer: "Volta"
  },
  {
    question: "What does a barometer measure?",
    options: ["Rainfall", "Wind speed", "Temperature", "Air pressure"],
    answer: "Air pressure"
  },
  {
    question: "Which African river has the largest volume of water?",
    options: ["Niger", "Zambezi", "Congo", "Nile"],
    answer: "Congo"
  },
  {
    question: "The imaginary line dividing the earth into northern and southern hemispheres is called the:",
    options: ["Prime Meridian", "Tropic of Cancer", "Equator", "Greenwich line"],
    answer: "Equator"
  },
  {
    question: "Which settlement pattern is most likely found in mountainous areas?",
    options: ["Linear", "Dispersed", "Nucleated", "Radial"],
    answer: "Dispersed"
  },
  {
    question: "Deforestation is a major cause of:",
    options: ["Soil formation", "Biodiversity increase", "Soil erosion", "Rainfall"],
    answer: "Soil erosion"
  },
  {
    question: "Which of these countries is a landlocked country in West Africa?",
    options: ["Gambia", "Liberia", "Mali", "Ghana"],
    answer: "Mali"
  },
  {
    question: "The line joining places of equal temperature is called:",
    options: ["Isobar", "Isotherm", "Isohyet", "Isoline"],
    answer: "Isotherm"
  },
  {
    question: "Which of these is an external force shaping landforms?",
    options: ["Earthquake", "Vulcanicity", "Erosion", "Folding"],
    answer: "Erosion"
  },
  {
    question: "Which of these is a renewable energy source?",
    options: ["Coal", "Petroleum", "Solar", "Natural gas"],
    answer: "Solar"
  },
  {
    question: "Ghana is located in which part of Africa?",
    options: ["North Africa", "Central Africa", "East Africa", "West Africa"],
    answer: "West Africa"
  },
  {
    question: "Which vegetation zone is mostly found in northern Ghana?",
    options: ["Rainforest", "Coastal scrub", "Savannah", "Mangrove"],
    answer: "Savannah"
  },
  {
    question: "Which of the following is a tertiary economic activity?",
    options: ["Fishing", "Farming", "Mining", "Banking"],
    answer: "Banking"
  },
  {
    question: "Which town is the administrative capital of the Northern Region of Ghana?",
    options: ["Wa", "Tamale", "Bolgatanga", "Sunyani"],
    answer: "Tamale"
  },
  {
    question: "What is the largest type of settlement?",
    options: ["Town", "Village", "Hamlet", "City"],
    answer: "City"
  },
  {
    question: "Which of the following is caused by tension in the Earth’s crust?",
    options: ["Faulting", "Folding", "Vulcanicity", "Erosion"],
    answer: "Faulting"
  },
  {
    question: "The zone of rapid population growth in Ghana is the:",
    options: ["Forest zone", "Coastal zone", "Savannah zone", "Urban centers"],
    answer: "Urban centers"
  },
  {
    question: "Which of the following is a sedimentary rock?",
    options: ["Basalt", "Granite", "Limestone", "Marble"],
    answer: "Limestone"
  },
  {
    question: "Mass wasting is caused primarily by:",
    options: ["River flow", "Rainfall", "Gravity", "Wind"],
    answer: "Gravity"
  },
  {
    question: "Which river in Africa flows into the Mediterranean Sea?",
    options: ["Congo", "Nile", "Zambezi", "Niger"],
    answer: "Nile"
  },
  {
    question: "A political map shows:",
    options: ["Mountains", "Rivers", "Countries and borders", "Rainfall"],
    answer: "Countries and borders"
  },
  {
    question: "What kind of rock is marble?",
    options: ["Sedimentary", "Igneous", "Metamorphic", "Volcanic"],
    answer: "Metamorphic"
  },
  {
    question: "Which of the following is a major cause of desertification?",
    options: ["Irrigation", "Overgrazing", "Afforestation", "Crop rotation"],
    answer: "Overgrazing"
  },
  {
    question: "Which economic activity involves changing raw materials into finished goods?",
    options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
    answer: "Secondary"
  },
  {
    question: "The process of wearing down rocks by natural agents is called:",
    options: ["Condensation", "Deposition", "Weathering", "Evaporation"],
    answer: "Weathering"
  },
  {
    question: "Which type of rainfall occurs due to mountains forcing air to rise?",
    options: ["Convectional", "Relief", "Cyclonic", "Tropical"],
    answer: "Relief"
  },
  {
    question: "Which of the following is a characteristic of rural settlements?",
    options: ["Skyscrapers", "Low population density", "Traffic congestion", "High-tech industries"],
    answer: "Low population density"
  },
  {
    question: "Which of the following is not an agent of denudation?",
    options: ["Wind", "Water", "Earthquake", "Ice"],
    answer: "Earthquake"
  },
  {
    question: "Which region in Ghana is known for its cocoa production?",
    options: ["Upper East", "Ashanti", "Northern", "Greater Accra"],
    answer: "Ashanti"
  },
  {
    question: "Which method is used to preserve vegetation?",
    options: ["Deforestation", "Bush burning", "Afforestation", "Mining"],
    answer: "Afforestation"
  },
  {
    question: "The shortest day and longest night occur during:",
    options: ["Equinox", "Summer solstice", "Winter solstice", "Spring"],
    answer: "Winter solstice"
  },
  {
    question: "An example of a volcanic mountain in Ghana is:",
    options: ["Mount Afadjato", "Mount Kilimanjaro", "Mount Kenya", "Mount Elgon"],
    answer: "Mount Afadjato"
  },
  {
    question: "Which of these diagrams best shows population structure?",
    options: ["Pie chart", "Bar graph", "Population pyramid", "Flowchart"],
    answer: "Population pyramid"
  },
  {
    question: "Which of the following is a major fishing area in Ghana?",
    options: ["Lake Bosomtwe", "Lake Volta", "River Pra", "Black Volta"],
    answer: "Lake Volta"
  },
  {
    question: "Soil conservation involves:",
    options: ["Burning grass", "Excessive irrigation", "Planting cover crops", "Deforestation"],
    answer: "Planting cover crops"
  },
  {
    question: "Which of the following countries is not part of ECOWAS?",
    options: ["Ghana", "Senegal", "Cameroon", "Nigeria"],
    answer: "Cameroon"
  },
  {
    question: "What is the main cause of sea level rise?",
    options: ["Erosion", "Glacial melting", "Tectonic uplift", "Volcanic eruption"],
    answer: "Glacial melting"
  },
  {
    question: "A river mouth with many branches is known as a:",
    options: ["Delta", "Estuary", "Lagoon", "Gorge"],
    answer: "Delta"
  },
  {
    question: "Which of the following is an impact of mining on the environment?",
    options: ["Improved soil fertility", "Water pollution", "Afforestation", "Desertification"],
    answer: "Water pollution"
  },
  {
    question: "Which country in Africa has the highest population?",
    options: ["Ethiopia", "Egypt", "Nigeria", "South Africa"],
    answer: "Nigeria"
  },
  {
    question: "What is the capital city of Burkina Faso?",
    options: ["Niamey", "Ouagadougou", "Lomé", "Bamako"],
    answer: "Ouagadougou"
  },
  {
    question: "Which of the following is a coniferous forest found in cold regions?",
    options: ["Savannah", "Tundra", "Taiga", "Rainforest"],
    answer: "Taiga"
  },
  {
    question: "The Greenwich Meridian is also known as the:",
    options: ["Equator", "Latitude", "Prime Meridian", "Tropic of Capricorn"],
    answer: "Prime Meridian"
  },
  {
    question: "Which of the following is the most important agent of erosion in desert areas?",
    options: ["Water", "Wind", "Ice", "Gravity"],
    answer: "Wind"
  },
  {
    question: "Which layer of the earth lies just below the crust?",
    options: ["Core", "Outer core", "Mantle", "Lithosphere"],
    answer: "Mantle"
  },
  {
    question: "The Tropic of Cancer passes through which part of Africa?",
    options: ["North Africa", "West Africa", "East Africa", "Central Africa"],
    answer: "North Africa"
  },
  {
    question: "Which town in Ghana is famous for its gold mining activities?",
    options: ["Sunyani", "Obuasi", "Tamale", "Cape Coast"],
    answer: "Obuasi"
  },
  {
    question: "A population pyramid shows:",
    options: ["Rainfall levels", "Age and sex distribution", "Temperature range", "Land use"],
    answer: "Age and sex distribution"
  },
  {
    question: "The removal of vegetation cover can lead to:",
    options: ["Improved rainfall", "Soil erosion", "Soil fertility", "Population growth"],
    answer: "Soil erosion"
  },
  {
    question: "Which of the following is not a sedimentary rock?",
    options: ["Limestone", "Sandstone", "Marble", "Shale"],
    answer: "Marble"
  },
  {
    question: "Which Ghanaian river flows into the Gulf of Guinea?",
    options: ["White Volta", "Black Volta", "Densu", "Oti"],
    answer: "Densu"
  },
  {
    question: "Which of the following is a method of conserving water in agriculture?",
    options: ["Flood irrigation", "Drip irrigation", "Over-irrigation", "Bush burning"],
    answer: "Drip irrigation"
  },
  {
    question: "What is the main cause of sea breeze?",
    options: ["Rotation of the earth", "Difference in air pressure", "Ocean currents", "Solar flares"],
    answer: "Difference in air pressure"
  },
  {
    question: "The settlement pattern found along roads or rivers is called:",
    options: ["Dispersed", "Nucleated", "Linear", "Radial"],
    answer: "Linear"
  },
  {
    question: "Which of these energy sources is non-renewable?",
    options: ["Solar", "Wind", "Coal", "Hydro"],
    answer: "Coal"
  },
  {
    question: "Which of the following instruments is used to measure humidity?",
    options: ["Barometer", "Thermometer", "Hygrometer", "Rain gauge"],
    answer: "Hygrometer"
  },
  {
    question: "What is the direction of the earth’s rotation?",
    options: ["East to West", "West to East", "North to South", "South to North"],
    answer: "West to East"
  },
  {
    question: "Which river is shared by the most countries in West Africa?",
    options: ["Volta", "Niger", "Senegal", "Benue"],
    answer: "Niger"
  },
  {
    question: "Which feature is formed due to folding?",
    options: ["Valley", "Mountain", "Delta", "Canyon"],
    answer: "Mountain"
  },
  {
    question: "In which part of Ghana is Lake Bosomtwe located?",
    options: ["Central", "Eastern", "Ashanti", "Northern"],
    answer: "Ashanti"
  },
  {
    question: "Which of these factors affects the climate of a region the most?",
    options: ["Human activity", "Latitude", "Vegetation", "Soil type"],
    answer: "Latitude"
  },
  {
    question: "Which of these is a characteristic of a tropical rainforest?",
    options: ["Dry seasons", "Low rainfall", "Deciduous trees", "Evergreen trees"],
    answer: "Evergreen trees"
  },
  {
    question: "What is the primary cause of earthquakes?",
    options: ["Tectonic movements", "Rainfall", "Deforestation", "Wind"],
    answer: "Tectonic movements"
  },
  {
    question: "Which of these countries does not share a border with Ghana?",
    options: ["Ivory Coast", "Togo", "Burkina Faso", "Benin"],
    answer: "Benin"
  },
  {
    question: "The horizontal lines on a map indicating distance north or south are called:",
    options: ["Longitude", "Altitude", "Latitude", "Contours"],
    answer: "Latitude"
  },
  {
    question: "Which of these settlements is usually found in mining areas?",
    options: ["Planned towns", "Linear villages", "Temporary camps", "Coastal cities"],
    answer: "Temporary camps"
  },
  {
    question: "Which element of weather is measured using a thermometer?",
    options: ["Humidity", "Pressure", "Rainfall", "Temperature"],
    answer: "Temperature"
  },
  {
    question: "The capital city of Mali is:",
    options: ["Niamey", "Bamako", "Ouagadougou", "Lomé"],
    answer: "Bamako"
  },
  {
    question: "Which economic activity is common in the coastal areas of Ghana?",
    options: ["Logging", "Fishing", "Mining", "Farming"],
    answer: "Fishing"
  },
  {
    question: "Which natural hazard is common in the East African Rift Valley?",
    options: ["Hurricanes", "Volcanic eruptions", "Tsunamis", "Blizzards"],
    answer: "Volcanic eruptions"
  },
  {
    question: "A type of farming where only family members work on the farm is called:",
    options: ["Commercial farming", "Mixed farming", "Subsistence farming", "Mechanized farming"],
    answer: "Subsistence farming"
  },
  {
    question: "What is the meaning of ECOWAS?",
    options: ["Economic Commission of West African States", "Economic Community of West African States", "Economic Council for Western Africa States", "Ecology and Commerce of West African States"],
    answer: "Economic Community of West African States"
  },
  {
    question: "Which vegetation zone is most suited for cocoa farming?",
    options: ["Savannah", "Mangrove", "Forest", "Tundra"],
    answer: "Forest"
  },
  {
    question: "Which of the following is a factor that affects population distribution?",
    options: ["Cloud cover", "Soil color", "Relief", "Moon phases"],
    answer: "Relief"
  },
  {
    question: "Which African lake is the deepest?",
    options: ["Lake Chad", "Lake Tanganyika", "Lake Victoria", "Lake Volta"],
    answer: "Lake Tanganyika"
  },
  {
    question: "The study of the Earth’s physical and human features is called:",
    options: ["Geology", "Geography", "Meteorology", "Cartography"],
    answer: "Geography"
  },
  {
    question: "Which of these types of rainfall is most common in the tropics?",
    options: ["Relief", "Cyclonic", "Convectional", "Frontal"],
    answer: "Convectional"
  },
  {
    question: "Which of these is an example of a primary economic activity?",
    options: ["Banking", "Teaching", "Fishing", "Manufacturing"],
    answer: "Fishing"
  },
  {
    question: "Which of these types of maps shows land use and economic activities?",
    options: ["Topographic map", "Political map", "Economic map", "Climatic map"],
    answer: "Economic map"
  },
  {
    question: "Which line of latitude runs at 23.5° North?",
    options: ["Tropic of Capricorn", "Equator", "Tropic of Cancer", "Prime Meridian"],
    answer: "Tropic of Cancer"
  },
  {
    question: "Which of these is a man-made cause of climate change?",
    options: ["Solar radiation", "Volcanic eruptions", "Greenhouse gas emissions", "Tidal waves"],
    answer: "Greenhouse gas emissions"
  },
  {
    question: "The term 'weathering' refers to:",
    options: ["Movement of soil", "Breaking down of rocks", "Soil formation", "Rainfall measurement"],
    answer: "Breaking down of rocks"
  },
  {
    question: "Which type of soil is best for agriculture?",
    options: ["Clay", "Sandy", "Loamy", "Rocky"],
    answer: "Loamy"
  },
  {
    question: "Which of the following rivers is not in Ghana?",
    options: ["Tano", "Volta", "Pra", "Limpopo"],
    answer: "Limpopo"
  },
  {
    question: "Which process leads to the formation of metamorphic rocks?",
    options: ["Melting", "Cooling", "Pressure and heat", "Sedimentation"],
    answer: "Pressure and heat"
  },
  {
    question: "Which part of Africa has the most deserts?",
    options: ["East Africa", "West Africa", "North Africa", "Central Africa"],
    answer: "North Africa"
  },
  {
    question: "The temperature at which air becomes saturated and condensation begins is called:",
    options: ["Freezing point", "Dew point", "Condensation point", "Boiling point"],
    answer: "Dew point"
  },
  {
    question: "Which factor is most responsible for rainfall in equatorial regions?",
    options: ["Sea breeze", "Convectional currents", "Mountains", "Forests"],
    answer: "Convectional currents"
  },
  {
    question: "Which of these countries is located in the Sahel region?",
    options: ["Gabon", "Mali", "Rwanda", "Angola"],
    answer: "Mali"
  },
  {
    question: "The movement of people from rural to urban areas is known as:",
    options: ["Urbanization", "Migration", "Emigration", "Rural drift"],
    answer: "Urbanization"
  },
  {
    question: "Which tool is used to measure rainfall?",
    options: ["Barometer", "Rain gauge", "Hygrometer", "Wind vane"],
    answer: "Rain gauge"
  },
  {
    question: "Which human activity is most responsible for ozone layer depletion?",
    options: ["Deforestation", "CFC emissions", "Mining", "Fishing"],
    answer: "CFC emissions"
  },
  {
    question: "Which part of Ghana is best known for cattle rearing?",
    options: ["Ashanti Region", "Northern Region", "Central Region", "Volta Region"],
    answer: "Northern Region"
  },
  {
    question: "What is the main factor that influences temperature variation with altitude?",
    options: ["Pressure", "Humidity", "Distance from the sea", "Elevation"],
    answer: "Elevation"
  },
  {
    question: "Which of the following is a major volcanic mountain in Africa?",
    options: ["Mount Cameroon", "Mount Elgon", "Drakensberg", "Atlas Mountains"],
    answer: "Mount Cameroon"
  },
  {
    question: "A confluence is the point where:",
    options: ["A river ends", "Two rivers meet", "A river begins", "A river flows into a lake"],
    answer: "Two rivers meet"
  },
  {
    question: "Which vegetation type dominates the northern part of Ghana?",
    options: ["Tropical rainforest", "Mangrove", "Guinea savanna", "Desert vegetation"],
    answer: "Guinea savanna"
  },
  {
    question: "Which map element helps you determine directions?",
    options: ["Legend", "Scale", "Compass rose", "Contour lines"],
    answer: "Compass rose"
  },
  {
    question: "Which of these is not a renewable energy resource?",
    options: ["Wind", "Solar", "Coal", "Hydropower"],
    answer: "Coal"
  },
  {
    question: "In what type of rock are fossils most likely to be found?",
    options: ["Igneous", "Sedimentary", "Metamorphic", "Volcanic"],
    answer: "Sedimentary"
  },
  {
    question: "Which of the following causes sea waves?",
    options: ["Rain", "Wind", "Clouds", "Sunlight"],
    answer: "Wind"
  },
  {
    question: "What is the function of contour lines on a topographic map?",
    options: ["Show temperature", "Show population", "Indicate elevation", "Mark boundaries"],
    answer: "Indicate elevation"
  },
  {
    question: "Which is the largest man-made lake in Ghana?",
    options: ["Lake Volta", "Lake Bosomtwe", "Lake Chad", "Lake Tano"],
    answer: "Lake Volta"
  },
  {
    question: "Which type of rainfall results from air being forced to rise over mountains?",
    options: ["Convectional", "Frontal", "Relief", "Cyclonic"],
    answer: "Relief"
  },
  {
    question: "The mouth of a river is where it:",
    options: ["Begins", "Meanders", "Flows into another body of water", "Forms a delta"],
    answer: "Flows into another body of water"
  },
  {
    question: "Which of the following rocks is igneous?",
    options: ["Basalt", "Limestone", "Shale", "Marble"],
    answer: "Basalt"
  },
  {
    question: "The force responsible for mass wasting is:",
    options: ["Wind", "Gravity", "Rainfall", "Frost"],
    answer: "Gravity"
  },
  {
    question: "Which Ghanaian city is closest to the Prime Meridian?",
    options: ["Takoradi", "Accra", "Tema", "Ho"],
    answer: "Tema"
  },
  {
    question: "Which of these is an environmental concern caused by mining?",
    options: ["Fertilization", "Desertification", "Land degradation", "Afforestation"],
    answer: "Land degradation"
  },
  {
    question: "In which African country is the Sahara Desert mostly located?",
    options: ["Egypt", "Nigeria", "South Africa", "Gabon"],
    answer: "Egypt"
  },
  {
    question: "Which of the following is an example of a tertiary economic activity?",
    options: ["Fishing", "Teaching", "Farming", "Mining"],
    answer: "Teaching"
  },
  {
    question: "What is the main reason for rural-urban migration in Ghana?",
    options: ["Good roads", "Better jobs", "Tourism", "More rainfall"],
    answer: "Better jobs"
  },
  {
    question: "Which landform is formed by glacial action?",
    options: ["Delta", "Moraine", "Mesa", "Valley"],
    answer: "Moraine"
  },
  {
    question: "The distance between contour lines indicates:",
    options: ["Temperature", "Rainfall", "Gradient", "Soil type"],
    answer: "Gradient"
  },
  {
    question: "What does the term 'weather' describe?",
    options: ["Long-term conditions", "Short-term atmospheric conditions", "Soil types", "Vegetation"],
    answer: "Short-term atmospheric conditions"
  },
  {
    question: "Which of the following is not a component of the environment?",
    options: ["Atmosphere", "Hydrosphere", "Stratosphere", "Lithosphere"],
    answer: "Stratosphere"
  },
  {
    question: "Which of the following is an element of climate?",
    options: ["Tides", "Temperature", "Magnetism", "Soil color"],
    answer: "Temperature"
  },
  {
    question: "Which of these countries is not in West Africa?",
    options: ["Benin", "Gambia", "Chad", "Liberia"],
    answer: "Chad"
  },
  {
    question: "What is the primary source of soil nutrients?",
    options: ["Water", "Sunlight", "Parent rock", "Air"],
    answer: "Parent rock"
  },
  {
    question: "What is the main cause of deforestation in Ghana?",
    options: ["Fishing", "Urbanization", "Logging", "Hunting"],
    answer: "Logging"
  },
  {
    question: "Which human activity contributes most to global warming?",
    options: ["Fishing", "Burning fossil fuels", "Mining", "Irrigation"],
    answer: "Burning fossil fuels"
  },
  {
    question: "Which feature is formed by wind deposition in deserts?",
    options: ["U-shaped valley", "Sand dune", "Delta", "Gorge"],
    answer: "Sand dune"
  },
  {
    question: "Which African country is landlocked?",
    options: ["Senegal", "Ethiopia", "Ghana", "Cameroon"],
    answer: "Ethiopia"
  },
  {
    question: "Which line divides the Earth into Northern and Southern Hemispheres?",
    options: ["Greenwich Meridian", "Tropic of Cancer", "Equator", "International Date Line"],
    answer: "Equator"
  },
  {
    question: "Which natural feature affects rainfall patterns the most?",
    options: ["Mountains", "Rivers", "Soils", "Vegetation"],
    answer: "Mountains"
  },
  {
    question: "What is the instrument used for measuring wind speed?",
    options: ["Anemometer", "Barometer", "Wind vane", "Hygrometer"],
    answer: "Anemometer"
  },
  {
    question: "Which country in Africa is known for diamond mining?",
    options: ["Ghana", "Botswana", "Uganda", "Senegal"],
    answer: "Botswana"
  },
  {
    question: "Which of the following cities is located in the forest zone of Ghana?",
    options: ["Wa", "Tamale", "Kumasi", "Bolgatanga"],
    answer: "Kumasi"
  },
  {
    question: "What type of farming uses simple tools and is aimed at feeding the farmer’s family?",
    options: ["Mechanized farming", "Commercial farming", "Subsistence farming", "Monoculture"],
    answer: "Subsistence farming"
  },
  {
    question: "Which season is associated with heavy rainfall in Ghana?",
    options: ["Dry season", "Winter", "Rainy season", "Harmattan"],
    answer: "Rainy season"
  },
  {
    question: "Which continent lies entirely in the Southern Hemisphere?",
    options: ["Africa", "Europe", "Antarctica", "Asia"],
    answer: "Antarctica"
  },
  {
    question: "Which region of Ghana is known for bauxite mining?",
    options: ["Eastern", "Volta", "Northern", "Western"],
    answer: "Eastern"
  },
  {
    question: "Which landform is formed by river deposition?",
    options: ["Delta", "Rift valley", "Canyon", "Fault block"],
    answer: "Delta"
  },
  {
    question: "Which of these is an effect of rapid population growth?",
    options: ["Low demand for housing", "Unemployment", "Higher forest cover", "Longer rivers"],
    answer: "Unemployment"
  },
  {
    question: "The conversion of waste into reusable material is called:",
    options: ["Recycling", "Deforestation", "Littering", "Erosion"],
    answer: "Recycling"
  },
  {
    question: "Which of these settlements is often unplanned and lacks basic amenities?",
    options: ["Urban", "Nucleated", "Dispersed", "Slum"],
    answer: "Slum"
  },
  {
    question: "What is the term for farming that is done on a large scale for profit?",
    options: ["Subsistence farming", "Commercial farming", "Shifting cultivation", "Mixed farming"],
    answer: "Commercial farming"
  },
  {
    question: "Which of the following is the smallest continent?",
    options: ["Europe", "Australia", "South America", "Antarctica"],
    answer: "Australia"
  },
  {
    question: "The sun appears to rise in the East due to:",
    options: ["Earth’s orbit", "Sun’s motion", "Earth’s rotation", "Lunar phases"],
    answer: "Earth’s rotation"
  },
  {
    question: "Which element of weather is measured in millimeters?",
    options: ["Humidity", "Temperature", "Rainfall", "Pressure"],
    answer: "Rainfall"
  },
  {
    question: "Which country is the largest in Africa by land area?",
    options: ["Nigeria", "South Africa", "Algeria", "Sudan"],
    answer: "Algeria"
  },
  {
    question: "What is the major cause of ocean tides?",
    options: ["Earth’s rotation", "Wind", "Gravitational pull of the moon", "Volcanic activity"],
    answer: "Gravitational pull of the moon"
  },
  {
    question: "Which instrument is used to measure atmospheric pressure?",
    options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
    answer: "Barometer"
  },
  {
    question: "Which country is located at the southernmost point of Africa?",
    options: ["Namibia", "South Africa", "Lesotho", "Botswana"],
    answer: "South Africa"
  },
  {
    question: "What term describes the gradual wearing away of the Earth’s surface by natural agents?",
    options: ["Evaporation", "Deposition", "Erosion", "Condensation"],
    answer: "Erosion"
  },
  {
    question: "The line that marks 0° longitude is known as:",
    options: ["Equator", "Tropic of Capricorn", "Prime Meridian", "Green Line"],
    answer: "Prime Meridian"
  },
  {
    question: "Which of these is not a source of renewable energy?",
    options: ["Solar", "Wind", "Natural gas", "Hydro"],
    answer: "Natural gas"
  },
  {
    question: "Which African lake is the world’s second largest freshwater lake by area?",
    options: ["Lake Chad", "Lake Victoria", "Lake Tanganyika", "Lake Malawi"],
    answer: "Lake Victoria"
  },
  {
    question: "Which region in Ghana experiences the most rainfall?",
    options: ["Northern Region", "Western Region", "Eastern Region", "Upper West Region"],
    answer: "Western Region"
  },
  {
    question: "What is the effect of deforestation on the environment?",
    options: ["Increased rainfall", "Loss of biodiversity", "Soil enrichment", "Cooler temperatures"],
    answer: "Loss of biodiversity"
  },
  {
    question: "Which term refers to the study of the Earth’s physical features and human activities?",
    options: ["Cartography", "Astronomy", "Geography", "Biology"],
    answer: "Geography"
  },
  {
    question: "A narrow strip of land connecting two larger land areas is called a:",
    options: ["Delta", "Isthmus", "Peninsula", "Strait"],
    answer: "Isthmus"
  },
  {
    question: "Which of the following countries is located in the Horn of Africa?",
    options: ["Ghana", "Somalia", "Mali", "Ivory Coast"],
    answer: "Somalia"
  },
  {
    question: "Which of the following is an effect of soil erosion?",
    options: ["Formation of valleys", "Soil fertility increase", "Improved farming", "Loss of topsoil"],
    answer: "Loss of topsoil"
  },
  {
    question: "Which element of weather affects the drying of clothes?",
    options: ["Wind", "Temperature", "Humidity", "Rainfall"],
    answer: "Humidity"
  },
  {
    question: "Which of the following regions in Africa is rich in oil deposits?",
    options: ["Sahel", "Niger Delta", "Kalahari", "Zambezi Valley"],
    answer: "Niger Delta"
  },
  {
    question: "Which instrument measures humidity in the atmosphere?",
    options: ["Barometer", "Hygrometer", "Thermometer", "Rain gauge"],
    answer: "Hygrometer"
  },
  {
    question: "The process of turning waste materials into new products is called:",
    options: ["Recycling", "Littering", "Dumping", "Burning"],
    answer: "Recycling"
  },
  {
    question: "The map scale 1:50,000 means that:",
    options: ["1cm equals 50,000cm on ground", "50,000km per cm", "1m equals 50km", "1km equals 50m"],
    answer: "1cm equals 50,000cm on ground"
  },
  {
    question: "Which of the following countries borders Ghana to the east?",
    options: ["Ivory Coast", "Mali", "Togo", "Burkina Faso"],
    answer: "Togo"
  },
  {
    question: "Which type of rock is formed from molten magma?",
    options: ["Sedimentary", "Metamorphic", "Igneous", "Clastic"],
    answer: "Igneous"
  },
  {
    question: "Which process involves the breaking down of rocks in situ?",
    options: ["Erosion", "Weathering", "Transportation", "Deposition"],
    answer: "Weathering"
  },
  {
    question: "Which layer of the atmosphere contains the ozone layer?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    answer: "Stratosphere"
  },
  {
    question: "Which of the following is an artificial lake in Ghana?",
    options: ["Lake Bosomtwe", "Lake Volta", "Lake Malawi", "Lake Chad"],
    answer: "Lake Volta"
  },
  {
    question: "What is the main source of rainfall?",
    options: ["Mountains", "Evaporation", "Deforestation", "Winds"],
    answer: "Evaporation"
  },
  {
    question: "Which part of the Earth is composed mainly of iron and nickel?",
    options: ["Mantle", "Crust", "Core", "Lithosphere"],
    answer: "Core"
  },
  {
    question: "Which of these causes folding of rocks?",
    options: ["Earthquakes", "Glaciers", "Compressional forces", "Weathering"],
    answer: "Compressional forces"
  },
  {
    question: "Which of the following regions in Ghana is most prone to desertification?",
    options: ["Central", "Western", "Upper East", "Volta"],
    answer: "Upper East"
  },
  {
    question: "What is the result of excessive irrigation in dry regions?",
    options: ["Increased rainfall", "Waterlogging", "Deforestation", "Volcanism"],
    answer: "Waterlogging"
  },
  {
    question: "Which method is most effective in controlling soil erosion?",
    options: ["Bush burning", "Contour ploughing", "Grazing", "Logging"],
    answer: "Contour ploughing"
  },
  {
    question: "The transformation of a liquid into vapor is known as:",
    options: ["Condensation", "Evaporation", "Sublimation", "Precipitation"],
    answer: "Evaporation"
  },
  {
    question: "Which of the following is a secondary economic activity?",
    options: ["Teaching", "Mining", "Manufacturing", "Fishing"],
    answer: "Manufacturing"
  },
  {
    question: "Which resource is classified as non-renewable?",
    options: ["Solar energy", "Petroleum", "Wind energy", "Hydropower"],
    answer: "Petroleum"
  },
  {
    question: "Which region of Ghana is rich in gold resources?",
    options: ["Upper West", "Western", "Greater Accra", "Northern"],
    answer: "Western"
  },
  {
    question: "Which of these is a greenhouse gas?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    answer: "Carbon dioxide"
  },
  {
    question: "What is the function of a rain gauge?",
    options: ["Measure temperature", "Measure rainfall", "Measure humidity", "Measure wind direction"],
    answer: "Measure rainfall"
  },
  {
    question: "Which West African country is landlocked?",
    options: ["Ghana", "Niger", "Benin", "Liberia"],
    answer: "Niger"
  },
  {
    question: "Which layer of the Earth lies directly below the crust?",
    options: ["Outer core", "Inner core", "Mantle", "Lithosphere"],
    answer: "Mantle"
  },
  {
    question: "The process of people moving from rural areas to cities is known as:",
    options: ["Urban renewal", "Urban sprawl", "Rural-urban migration", "Emigration"],
    answer: "Rural-urban migration"
  },
  {
    question: "Which of these features is formed by river erosion?",
    options: ["Delta", "V-shaped valley", "Lagoon", "Lake"],
    answer: "V-shaped valley"
  },
  {
    question: "Which of these contributes to the destruction of the ozone layer?",
    options: ["CO?", "Oxygen", "Chlorofluorocarbons", "Nitrogen"],
    answer: "Chlorofluorocarbons"
  },
  {
    question: "The change in population over a specific period is called:",
    options: ["Migration", "Population growth", "Urbanization", "Demography"],
    answer: "Population growth"
  },
  {
    question: "Which African river flows through the largest number of countries?",
    options: ["Zambezi", "Niger", "Nile", "Congo"],
    answer: "Nile"
  },
  {
    question: "The dryness experienced during harmattan is due to:",
    options: ["Sea breeze", "Moist winds", "Dry continental winds", "Ocean currents"],
    answer: "Dry continental winds"
  },
  {
    question: "The narrow steep-sided valley formed by a river in its upper course is called:",
    options: ["Delta", "V-shaped valley", "Floodplain", "Oxbow lake"],
    answer: "V-shaped valley"
  },
  {
    question: "Which of these is an example of a linear settlement?",
    options: ["Village around a lake", "Houses along a road", "Scattered huts", "Circular town"],
    answer: "Houses along a road"
  },
  {
    question: "Which continent has the largest number of countries?",
    options: ["Africa", "Asia", "Europe", "South America"],
    answer: "Africa"
  },
  {
    question: "The condition of the atmosphere at a particular time is called:",
    options: ["Climate", "Humidity", "Weather", "Precipitation"],
    answer: "Weather"
  },
  {
    question: "Which of these best describes a savanna?",
    options: ["Dense forest", "Cold desert", "Grassland with scattered trees", "Bare rock"],
    answer: "Grassland with scattered trees"
  },
  {
    question: "The technique of using symbols to represent data on maps is called:",
    options: ["Isoline", "Choropleth", "Dot map", "Pictogram"],
    answer: "Pictogram"
  },
  {
    question: "Which of the following is a characteristic of volcanic mountains?",
    options: ["Folded rocks", "Flat tops", "Crater at the summit", "Sedimentary layers"],
    answer: "Crater at the summit"
  },
  {
    question: "The difference in elevation between two contour lines is called:",
    options: ["Contour spacing", "Gradient", "Contour interval", "Relief"],
    answer: "Contour interval"
  },
  {
    question: "What is the term for the uppermost layer of the Earth?",
    options: ["Mantle", "Core", "Crust", "Lithosphere"],
    answer: "Crust"
  },
  {
    question: "Which African river has the largest volume of water?",
    options: ["Niger", "Zambezi", "Nile", "Congo"],
    answer: "Congo"
  },
  {
    question: "Which factor contributes most to desertification in Ghana?",
    options: ["Mining", "Overgrazing", "Urbanization", "Tourism"],
    answer: "Overgrazing"
  },
  {
    question: "Which of these is a metamorphic rock?",
    options: ["Basalt", "Limestone", "Marble", "Sandstone"],
    answer: "Marble"
  },
  {
    question: "Which type of rainfall occurs when warm moist air rises over mountains?",
    options: ["Convectional", "Relief", "Cyclonic", "Frontal"],
    answer: "Relief"
  },
  {
    question: "Which ocean current affects the climate of West Africa?",
    options: ["Kuroshio", "Gulf Stream", "Canary", "Oyashio"],
    answer: "Canary"
  },
  {
    question: "The point inside the Earth where an earthquake originates is the:",
    options: ["Focus", "Epicenter", "Crater", "Tremor"],
    answer: "Focus"
  },
  {
    question: "Which of the following best defines 'population density'?",
    options: ["Total population of a country", "People per unit area", "Growth rate of a population", "Urban population"],
    answer: "People per unit area"
  },
  {
    question: "What is the main source of energy in most rural Ghanaian communities?",
    options: ["Electricity", "Solar", "Firewood", "Gas"],
    answer: "Firewood"
  },
  {
    question: "Which type of soil is best for agriculture?",
    options: ["Clay", "Sandy", "Loamy", "Gravel"],
    answer: "Loamy"
  },
  {
    question: "Which process is involved in the formation of sedimentary rocks?",
    options: ["Cooling", "Folding", "Compression and cementation", "Melting"],
    answer: "Compression and cementation"
  },
  {
    question: "Which of the following is a tertiary activity?",
    options: ["Fishing", "Banking", "Mining", "Farming"],
    answer: "Banking"
  },
  {
    question: "The equator divides the Earth into:",
    options: ["Northern and Southern Hemispheres", "Eastern and Western Hemispheres", "Land and water", "Climate zones"],
    answer: "Northern and Southern Hemispheres"
  },
  {
    question: "What is the importance of contour lines on a map?",
    options: ["Show vegetation", "Indicate temperature", "Show elevation", "Show population"],
    answer: "Show elevation"
  },
  {
    question: "Which map element shows directions?",
    options: ["Legend", "Scale", "Compass rose", "Key"],
    answer: "Compass rose"
  },
  {
    question: "Which of these is a method of conserving forests?",
    options: ["Bush burning", "Selective logging", "Overgrazing", "Poaching"],
    answer: "Selective logging"
  },
  {
    question: "Which of the following African countries is NOT landlocked?",
    options: ["Mali", "Chad", "Ethiopia", "Senegal"],
    answer: "Senegal"
  },
  {
    question: "Which of these is a natural cause of climate change?",
    options: ["Industrial pollution", "Burning fossil fuels", "Volcanic eruptions", "Deforestation"],
    answer: "Volcanic eruptions"
  },
  {
    question: "Which river is associated with the Aswan Dam?",
    options: ["Zambezi", "Niger", "Nile", "Congo"],
    answer: "Nile"
  },
  {
    question: "A place where two rivers meet is called a:",
    options: ["Confluence", "Source", "Mouth", "Meander"],
    answer: "Confluence"
  },
  {
    question: "Which of the following is NOT a feature of a youth stage river?",
    options: ["Waterfalls", "Rapids", "Oxbow lakes", "V-shaped valleys"],
    answer: "Oxbow lakes"
  },
  {
    question: "What is the meaning of GDP in economic geography?",
    options: ["Gross Development Program", "Geographical Distribution Plan", "Gross Domestic Product", "Global Development Power"],
    answer: "Gross Domestic Product"
  },
  {
    question: "Which of these is a function of rural settlements?",
    options: ["Banking", "Farming", "Manufacturing", "Trading stocks"],
    answer: "Farming"
  },
  {
    question: "A delta is formed at the:",
    options: ["Source of a river", "Middle course", "River mouth", "Tributary"],
    answer: "River mouth"
  },
  {
    question: "Which of these countries is part of the Economic Community of West African States (ECOWAS)?",
    options: ["Kenya", "Ghana", "Ethiopia", "Egypt"],
    answer: "Ghana"
  },
  {
    question: "Which is the best way to reduce the impact of flooding?",
    options: ["Building houses in floodplains", "Planting trees", "Removing vegetation", "Blocking drains"],
    answer: "Planting trees"
  },
  {
    question: "Which of the following is a disadvantage of mining?",
    options: ["Foreign exchange", "Environmental degradation", "Employment", "Infrastructure development"],
    answer: "Environmental degradation"
  },
  {
    question: "Which scale is used to measure the magnitude of earthquakes?",
    options: ["Barometer", "Richter scale", "Thermometer", "Seismograph"],
    answer: "Richter scale"
  },
  {
    question: "Which region of Ghana is known for cocoa farming?",
    options: ["Upper West", "Ashanti", "Northern", "Greater Accra"],
    answer: "Ashanti"
  },
  {
    question: "Which of the following helps reduce soil erosion?",
    options: ["Bush burning", "Terracing", "Overgrazing", "Logging"],
    answer: "Terracing"
  },
  {
    question: "Which factor influences the temperature of a place?",
    options: ["Longitude", "Altitude", "Latitude", "Both B and C"],
    answer: "Both B and C"
  },
  {
    question: "The physical environment includes all except:",
    options: ["Land", "Air", "Culture", "Water"],
    answer: "Culture"
  },
  {
    question: "A topographic map is useful for showing:",
    options: ["Population", "Political boundaries", "Relief features", "Languages"],
    answer: "Relief features"
  },
  {
    question: "Which of the following countries has no coastline?",
    options: ["Togo", "Burkina Faso", "Ivory Coast", "Nigeria"],
    answer: "Burkina Faso"
  },
  {
    question: "What does the term 'weathering' mean?",
    options: ["Movement of sediments", "Breaking down of rocks", "Formation of clouds", "Flooding"],
    answer: "Breaking down of rocks"
  },
  {
    question: "Which of these is a key characteristic of urban areas?",
    options: ["Low population density", "Large farms", "High population density", "Scattered homes"],
    answer: "High population density"
  },
  {
    question: "What is the term for rain that contains harmful chemicals from pollution?",
    options: ["Heavy rain", "Storm rain", "Acid rain", "Convective rain"],
    answer: "Acid rain"
  },
  {
    question: "What do you call a small, circular coral island?",
    options: ["Delta", "Atoll", "Peninsula", "Lagoon"],
    answer: "Atoll"
  },
  {
    question: "Which part of Africa is mainly covered by the Sahara Desert?",
    options: ["Southern Africa", "Northern Africa", "Eastern Africa", "Central Africa"],
    answer: "Northern Africa"
  },
  {
    question: "The international date line is located at:",
    options: ["0° longitude", "90° latitude", "180° longitude", "45° latitude"],
    answer: "180° longitude"
  },
  {
    question: "Which of these is not a method of collecting population data?",
    options: ["Census", "Sample survey", "Guessing", "Registration"],
    answer: "Guessing"
  },
  {
    question: "What is the main cause of sea level rise?",
    options: ["Glacial melting", "Wind", "Earthquakes", "Rainfall"],
    answer: "Glacial melting"
  },
  {
    question: "Which of the following is a renewable energy source?",
    options: ["Coal", "Natural gas", "Solar", "Crude oil"],
    answer: "Solar"
  },
  {
    question: "Which of the following best describes a lagoon?",
    options: ["Inland lake", "River mouth", "Shallow body of water separated from the sea", "Mountain lake"],
    answer: "Shallow body of water separated from the sea"
  },
  {
    question: "A place where people live permanently is called a:",
    options: ["Market", "Settlement", "Farm", "School"],
    answer: "Settlement"
  },
  {
    question: "Which of these countries is part of the Sahel region?",
    options: ["Gabon", "Niger", "Liberia", "Angola"],
    answer: "Niger"
  },
  {
    question: "What is the name of the longest mountain range in Africa?",
    options: ["Atlas Mountains", "Drakensberg", "Simien Mountains", "Ahaggar Mountains"],
    answer: "Atlas Mountains"
  },
  {
    question: "Which of the following is an example of a block mountain?",
    options: ["Mt. Kilimanjaro", "Mt. Everest", "Vosges", "Atlas Mountains"],
    answer: "Vosges"
  },
  {
    question: "Which of these settlements is most likely to be found in a rural area?",
    options: ["Farming village", "Skyscraper city", "Industrial zone", "Suburban estate"],
    answer: "Farming village"
  },
  {
    question: "The point on the Earth's surface directly above the earthquake focus is the:",
    options: ["Tremor", "Crater", "Epicenter", "Shock point"],
    answer: "Epicenter"
  },
  {
    question: "Deforestation mainly leads to:",
    options: ["Flood control", "Soil fertility", "Loss of biodiversity", "Improved rainfall"],
    answer: "Loss of biodiversity"
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen"
  },
  {
    question: "Which of these processes is responsible for the formation of ox-bow lakes?",
    options: ["Erosion", "Deposition", "Volcanism", "Folding"],
    answer: "Erosion"
  },
  {
    question: "Which energy source is most widely used in developed countries?",
    options: ["Wood", "Charcoal", "Fossil fuels", "Solar"],
    answer: "Fossil fuels"
  },
  {
    question: "Which of these is a cause of coastal erosion?",
    options: ["Condensation", "Longshore drift", "Evaporation", "Earthquakes"],
    answer: "Longshore drift"
  },
  {
    question: "Which of the following instruments measures wind speed?",
    options: ["Thermometer", "Hygrometer", "Anemometer", "Barometer"],
    answer: "Anemometer"
  },
  {
    question: "The capital of Ghana is located in which type of settlement?",
    options: ["Rural", "Suburban", "Urban", "Village"],
    answer: "Urban"
  },
  {
    question: "The vegetation found in areas with high rainfall and high temperatures is:",
    options: ["Savannah", "Desert", "Tundra", "Rainforest"],
    answer: "Rainforest"
  },
  {
    question: "Which river forms part of the border between Ghana and Côte d'Ivoire?",
    options: ["Volta", "Tano", "Pra", "Ankobra"],
    answer: "Tano"
  },
  {
    question: "Which of the following is used to determine population structure?",
    options: ["Pie chart", "Bar graph", "Population pyramid", "Dot map"],
    answer: "Population pyramid"
  },
  {
    question: "Which of these is a major source of renewable energy in Africa?",
    options: ["Nuclear", "Natural gas", "Hydropower", "Petroleum"],
    answer: "Hydropower"
  },
  {
    question: "What does a topographic map show?",
    options: ["Cultural landmarks", "Relief of land", "Climate zones", "Mineral deposits"],
    answer: "Relief of land"
  },
  {
    question: "Which is a key human activity contributing to climate change?",
    options: ["Irrigation", "Fishing", "Burning fossil fuels", "Afforestation"],
    answer: "Burning fossil fuels"
  },
  {
    question: "An area of high pressure usually brings:",
    options: ["Rainfall", "Strong winds", "Storms", "Clear skies"],
    answer: "Clear skies"
  },
  {
    question: "Which of these is a process of internal landform formation?",
    options: ["Deposition", "Weathering", "Folding", "Erosion"],
    answer: "Folding"
  },
  {
    question: "Which type of rock is formed from magma?",
    options: ["Sedimentary", "Igneous", "Metamorphic", "Alluvial"],
    answer: "Igneous"
  },
  {
    question: "Which part of Ghana experiences the highest annual rainfall?",
    options: ["Northern", "Volta", "Western", "Upper West"],
    answer: "Western"
  },
  {
    question: "Which method is most appropriate for collecting weather data?",
    options: ["Observation", "Counting", "Digging", "Tasting"],
    answer: "Observation"
  },
  {
    question: "Which of these is a secondary economic activity?",
    options: ["Mining", "Teaching", "Manufacturing", "Fishing"],
    answer: "Manufacturing"
  },
  {
    question: "What does a climate graph combine?",
    options: ["Temperature and humidity", "Wind and sunshine", "Rainfall and temperature", "Cloud cover and pressure"],
    answer: "Rainfall and temperature"
  },
  {
    question: "Which Ghanaian lake is man-made?",
    options: ["Lake Volta", "Lake Bosomtwe", "Weija Lake", "Bui Lake"],
    answer: "Lake Volta"
  },
  {
    question: "What term describes rainfall caused by surface heating?",
    options: ["Frontal", "Relief", "Cyclonic", "Convectional"],
    answer: "Convectional"
  },
  {
    question: "A group of islands is called a(n):",
    options: ["Delta", "Archipelago", "Lagoon", "Atoll"],
    answer: "Archipelago"
  },
  {
    question: "Which part of a river is most likely to form deltas?",
    options: ["Upper course", "Middle course", "Lower course", "Source"],
    answer: "Lower course"
  },
  {
    question: "What is the main cause of earthquakes?",
    options: ["Flooding", "Tectonic movements", "Hurricanes", "Erosion"],
    answer: "Tectonic movements"
  },
  {
    question: "What is the main occupation of people in rural Ghana?",
    options: ["Mining", "Farming", "Banking", "Trading"],
    answer: "Farming"
  },
  {
    question: "Which feature is commonly associated with glaciated valleys?",
    options: ["V-shaped valleys", "U-shaped valleys", "Gorges", "Waterfalls"],
    answer: "U-shaped valleys"
  },
  {
    question: "The term 'inland drainage' refers to rivers that:",
    options: ["Flow into lakes", "Flow into seas", "Flow under ground", "Have no outlet to sea"],
    answer: "Have no outlet to sea"
  },
  {
    question: "What is the purpose of reforestation?",
    options: ["Expand cities", "Control flooding", "Restore forests", "Clear land for mining"],
    answer: "Restore forests"
  },
  {
    question: "Which of the following is a source of air pollution?",
    options: ["Afforestation", "Solar panels", "Vehicle emissions", "Hydropower"],
    answer: "Vehicle emissions"
  },
  {
    question: "Which region of Ghana is known for gold mining?",
    options: ["Northern", "Ashanti", "Volta", "Eastern"],
    answer: "Ashanti"
  },
  {
    question: "Which landform is formed by wind deposition?",
    options: ["Mesa", "Sand dune", "Delta", "Valley"],
    answer: "Sand dune"
  },
  {
    question: "What is meant by 'sustainable development'?",
    options: ["Development that uses up all resources", "Development only for the rich", "Development meeting present and future needs", "Development that avoids using natural resources"],
    answer: "Development meeting present and future needs"
  },
  {
    question: "Which of the following contributes to urbanization?",
    options: ["Deforestation", "Migration to towns", "Farming", "Soil erosion"],
    answer: "Migration to towns"
  },
  {
    question: "A map scale of 1:50,000 means:",
    options: ["1cm on map = 5km", "1cm on map = 500m", "1cm on map = 50,000cm on ground", "1m on map = 50m on ground"],
    answer: "1cm on map = 50,000cm on ground"
  },
  {
    question: "What is the main function of a weather station?",
    options: ["Map drawing", "Vegetation control", "Collect weather data", "Soil testing"],
    answer: "Collect weather data"
  },
  {
    question: "Which of the following is a disadvantage of deforestation?",
    options: ["Increase in rainfall", "Soil erosion", "Improved farming", "Population growth"],
    answer: "Soil erosion"
  },
  {
    question: "What is the importance of rivers in Ghana?",
    options: ["Noise", "Irrigation", "Volcanoes", "Deforestation"],
    answer: "Irrigation"
  },
  {
    question: "Which of the following is a function of ECOWAS?",
    options: ["Colonization", "Trade promotion", "Rainfall distribution", "River control"],
    answer: "Trade promotion"
  },
  {
    question: "Which type of vegetation covers most of northern Ghana?",
    options: ["Tropical rainforest", "Mangrove", "Savannah", "Coniferous"],
    answer: "Savannah"
  },
  {
    question: "Which of the following is a form of physical weathering?",
    options: ["Oxidation", "Carbonation", "Frost action", "Hydrolysis"],
    answer: "Frost action"
  },
  {
    question: "Which of the following best explains population migration?",
    options: ["Movement within cities", "Change in climate", "People moving from one place to another", "Natural disasters"],
    answer: "People moving from one place to another"
  },
  {
    question: "What instrument is used to measure atmospheric pressure?",
    options: ["Hygrometer", "Barometer", "Anemometer", "Thermometer"],
    answer: "Barometer"
  },
  {
    question: "The movement of soil from one place to another is called:",
    options: ["Deposition", "Erosion", "Weathering", "Compaction"],
    answer: "Erosion"
  },
  {
    question: "Which of these countries is a member of the African Union?",
    options: ["Brazil", "India", "Nigeria", "France"],
    answer: "Nigeria"
  },
  {
    question: "What is the significance of latitude?",
    options: ["Helps measure population", "Determines temperature zones", "Affects pressure", "Indicates language regions"],
    answer: "Determines temperature zones"
  },
  {
    question: "Which layer of the Earth is the hottest?",
    options: ["Crust", "Mantle", "Outer core", "Inner core"],
    answer: "Inner core"
  },
  {
    question: "Which of these is a function of contour lines on a map?",
    options: ["Show temperature", "Show population", "Show relief", "Show vegetation"],
    answer: "Show relief"
  },
  {
    question: "What causes tides in the ocean?",
    options: ["Wind", "Rainfall", "Moon's gravity", "Volcanic activity"],
    answer: "Moon's gravity"
  },
  {
    question: "A natural resource that cannot be replaced after use is:",
    options: ["Wind", "Water", "Sunlight", "Crude oil"],
    answer: "Crude oil"
  },
  {
    question: "What is the term for land used for farming?",
    options: ["Residential land", "Pasture", "Agricultural land", "Commercial land"],
    answer: "Agricultural land"
  },
  {
    question: "What is the major occupation in the Volta Basin?",
    options: ["Mining", "Fishing", "Farming", "Trading"],
    answer: "Fishing"
  },
  {
    question: "Which of these shows population distribution on a map?",
    options: ["Topographic map", "Dot map", "Climate map", "Contour map"],
    answer: "Dot map"
  },
  {
    question: "Which country borders Ghana to the north?",
    options: ["Côte d'Ivoire", "Togo", "Burkina Faso", "Nigeria"],
    answer: "Burkina Faso"
  },
  {
    question: "What instrument is used to measure rainfall?",
    options: ["Rain gauge", "Barometer", "Thermometer", "Hygrometer"],
    answer: "Rain gauge"
  },
  {
    question: "Which of the following helps to reduce soil erosion?",
    options: ["Bush burning", "Overgrazing", "Mulching", "Deforestation"],
    answer: "Mulching"
  },
  {
    question: "The type of vegetation common in deserts is:",
    options: ["Coniferous", "Savannah", "Mangrove", "Sparse shrubs"],
    answer: "Sparse shrubs"
  },
  {
    question: "Which landform is caused by folding?",
    options: ["Block mountains", "Fold mountains", "Plateaus", "Valleys"],
    answer: "Fold mountains"
  },
  {
    question: "The Sun appears to rise in the:",
    options: ["North", "South", "West", "East"],
    answer: "East"
  },
  {
    question: "What is a lagoon?",
    options: ["A deep river", "A small island", "A shallow coastal lake", "A desert"],
    answer: "A shallow coastal lake"
  },
  {
    question: "Which zone in Ghana is ideal for cocoa cultivation?",
    options: ["Savannah", "Rainforest", "Desert", "Mangrove"],
    answer: "Rainforest"
  },
  {
    question: "Which of the following is a tertiary activity?",
    options: ["Fishing", "Teaching", "Farming", "Mining"],
    answer: "Teaching"
  },
  {
    question: "Which of these causes water pollution?",
    options: ["Irrigation", "Mining", "Fishing", "Rainfall"],
    answer: "Mining"
  },
  {
    question: "Which map feature shows direction?",
    options: ["Scale", "Legend", "Compass rose", "Title"],
    answer: "Compass rose"
  },
  {
    question: "The Earth's rotation causes:",
    options: ["Day and night", "Seasons", "Winds", "Tides"],
    answer: "Day and night"
  },
  {
    question: "Which of these is an effect of overpopulation?",
    options: ["More forests", "Better roads", "Unemployment", "Increased rainfall"],
    answer: "Unemployment"
  },
  {
    question: "A V-shaped valley is formed mainly by:",
    options: ["Wind", "Glaciers", "Rivers", "Waves"],
    answer: "Rivers"
  },
  {
    question: "Which is a characteristic of a good topographic map?",
    options: ["Shows only political boundaries", "Has no legend", "Shows elevation and relief", "Is drawn without a scale"],
    answer: "Shows elevation and relief"
  },
  {
    question: "What is the capital city of Ghana?",
    options: ["Kumasi", "Tamale", "Cape Coast", "Accra"],
    answer: "Accra"
  },
  {
    question: "The Equator divides the Earth into:",
    options: ["Eastern and Western Hemispheres", "Northern and Southern Hemispheres", "Cold and hot regions", "Land and sea"],
    answer: "Northern and Southern Hemispheres"
  },
  {
    question: "What is the main cause of sea-level rise?",
    options: ["Deforestation", "Melting glaciers", "Wind erosion", "Volcanoes"],
    answer: "Melting glaciers"
  },
  {
    question: "Which ocean borders West Africa to the south?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
    answer: "Atlantic Ocean"
  },
  {
    question: "Which of the following shows temperature on a climate graph?",
    options: ["Bars", "Lines", "Dots", "Colors"],
    answer: "Lines"
  },
  {
    question: "What term describes the breakdown of rocks by natural forces?",
    options: ["Folding", "Weathering", "Erosion", "Deposition"],
    answer: "Weathering"
  },
  {
    question: "Which factor mostly influences climate?",
    options: ["Color of soil", "Latitude", "Language", "Roads"],
    answer: "Latitude"
  },
  {
    question: "The Volta River drains into the:",
    options: ["Lake Bosomtwe", "Atlantic Ocean", "Tano River", "Bui Lake"],
    answer: "Atlantic Ocean"
  },
  {
    question: "Which of the following is a characteristic of rural settlements?",
    options: ["Skyscrapers", "Low population", "Many industries", "Busy airports"],
    answer: "Low population"
  },
  {
    question: "Which of these is a product of vulcanicity?",
    options: ["Waterfall", "Fold mountain", "Volcano", "Canyon"],
    answer: "Volcano"
  },
  {
    question: "A place with little rainfall and high evaporation is likely to be:",
    options: ["Rainforest", "Savannah", "Tundra", "Desert"],
    answer: "Desert"
  },
  {
    question: "The boundary between the crust and the mantle is called the:",
    options: ["Equator", "Focus", "Moho", "Tropopause"],
    answer: "Moho"
  },
  {
    question: "Which of the following is a climatic region in Ghana?",
    options: ["Equatorial", "Savannah", "Tundra", "Temperate"],
    answer: "Savannah"
  },
  {
    question: "Mass wasting is mainly influenced by:",
    options: ["Wind speed", "Slope gradient", "Humidity", "Temperature"],
    answer: "Slope gradient"
  },
  {
    question: "Which organization promotes trade in West Africa?",
    options: ["UN", "ECOWAS", "AU", "WHO"],
    answer: "ECOWAS"
  },
  {
    question: "Which zone is most prone to bushfires in Ghana?",
    options: ["Rainforest", "Savannah", "Coastal", "Swamp"],
    answer: "Savannah"
  },
  {
    question: "Which country lies to the east of Ghana?",
    options: ["Nigeria", "Côte d'Ivoire", "Togo", "Mali"],
    answer: "Togo"
  },
  {
    question: "Which is the most populated city in Ghana?",
    options: ["Accra", "Tamale", "Takoradi", "Ho"],
    answer: "Accra"
  },
  {
    question: "The practice of growing crops and rearing animals is called:",
    options: ["Mining", "Industry", "Agriculture", "Trade"],
    answer: "Agriculture"
  },
  {
    question: "Which gas is responsible for the greenhouse effect?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon dioxide"
  },
  {
    question: "The line of longitude at 0° is called the:",
    options: ["Equator", "Tropic of Cancer", "Prime Meridian", "International Date Line"],
    answer: "Prime Meridian"
  },
  {
    question: "A tropical rainforest is most likely found in:",
    options: ["Northern Ghana", "Middle Belt", "Western Region", "Eastern Region"],
    answer: "Western Region"
  },
  {
    question: "Which landform results from river deposition?",
    options: ["Canyon", "Delta", "Valley", "Hill"],
    answer: "Delta"
  },
  {
    question: "Which of these is a direct result of overgrazing?",
    options: ["Improved pasture", "Soil erosion", "Soil fertility", "Forest growth"],
    answer: "Soil erosion"
  },
  {
    question: "Which sector of the economy includes teachers and doctors?",
    options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
    answer: "Tertiary"
  },
  {
    question: "Which natural feature marks the boundary between Ghana and Togo?",
    options: ["Lake Volta", "River Tano", "White Volta", "River Todzie"],
    answer: "River Todzie"
  },
  {
    question: "The scale 1:100,000 means 1 cm on the map equals:",
    options: ["1 km", "10 km", "100 km", "1,000 km"],
    answer: "1 km"
  },
  {
    question: "Which of the following causes folding of the Earth's crust?",
    options: ["Wind", "Tectonic forces", "Glaciers", "Rain"],
    answer: "Tectonic forces"
  },
  {
    question: "If a region receives 1200 mm of rainfall annually and has 12 rainy months, what is the average monthly rainfall?",
    options: ["100 mm", "120 mm", "130 mm", "110 mm"],
    answer: "100 mm"
  },
  {
    question: "A slope rises 400 meters over a distance of 2 km. What is the gradient?",
    options: ["1:5", "1:10", "1:20", "1:50"],
    answer: "1:5"
  },
  {
    question: "A survey line measures 500 m in real life. If the scale is 1:10,000, how long will it be on the map?",
    options: ["5 cm", "10 cm", "50 cm", "100 cm"],
    answer: "5 cm"
  },
  {
    question: "If the population density of a city is 300 people/km² and the city is 50 km², what is the total population?",
    options: ["15,000", "30,000", "50,000", "25,000"],
    answer: "15,000"
  },
  {
    question: "A rectangular field is 1000 meters long and 500 meters wide. What is the area in hectares?",
    options: ["50 ha", "100 ha", "150 ha", "500 ha"],
    answer: "50 ha"
  },
  {
    question: "If temperature readings are: Morning = 22°C, Afternoon = 30°C, Evening = 26°C, what is the daily mean temperature?",
    options: ["24°C", "25°C", "26°C", "27°C"],
    answer: "26°C"
  },
  {
    question: "On a map with scale 1:100,000, what distance on the ground does 7 cm on the map represent?",
    options: ["5 km", "7 km", "10 km", "14 km"],
    answer: "7 km"
  },
  {
    question: "What is the circumference of the Earth approximately in kilometers?",
    options: ["40,000 km", "42,000 km", "38,000 km", "45,000 km"],
    answer: "40,000 km"
  },
  {
    question: "The rainfall totals for four months are 100 mm, 150 mm, 200 mm, and 250 mm. What is the average?",
    options: ["175 mm", "200 mm", "225 mm", "150 mm"],
    answer: "175 mm"
  },
  {
    question: "If a contour map shows a rise from 300 m to 900 m in 3 km, what is the average gradient?",
    options: ["1:5", "1:4", "1:3", "1:2"],
    answer: "1:5"
  },
  {
    question: "A population of 40,000 grows by 2.5% annually. What will be the population after one year?",
    options: ["41,000", "41,200", "42,000", "40,250"],
    answer: "41,000"
  },
  {
    question: "A farm measures 3 km by 4 km. What is its total area in hectares?",
    options: ["120 ha", "1,200 ha", "300 ha", "400 ha"],
    answer: "1,200 ha"
  },
  {
    question: "If a lake contains 2,000,000 cubic meters of water and its surface area is 500,000 m², what is the average depth?",
    options: ["2 m", "3 m", "4 m", "5 m"],
    answer: "4 m"
  },
  {
    question: "A population pyramid shows a wide base. What does it indicate?",
    options: ["High birth rate", "Low birth rate", "Aging population", "Balanced population"],
    answer: "High birth rate"
  },
  {
    question: "If the temperature drops by 0.6°C every 100 m of elevation, what is the temperature at 1000 m if sea level temp is 30°C?",
    options: ["24°C", "25°C", "26°C", "27°C"],
    answer: "24°C"
  },
  {
    question: "The scale of a map is 1:250,000. How many centimeters on the map represent 50 km on the ground?",
    options: ["10 cm", "20 cm", "25 cm", "30 cm"],
    answer: "20 cm"
  },
  {
    question: "On a climate graph, the highest temperature is 34°C and the lowest is 20°C. What is the temperature range?",
    options: ["12°C", "13°C", "14°C", "15°C"],
    answer: "14°C"
  },
  {
    question: "If a river discharges 500 cubic meters of water per second, how much does it discharge in one minute?",
    options: ["30,000 m³", "60,000 m³", "25,000 m³", "50,000 m³"],
    answer: "30,000 m³"
  },
  {
    question: "If a contour interval is 20 m and 5 contours are crossed from low to high, what is the elevation gain?",
    options: ["80 m", "100 m", "120 m", "60 m"],
    answer: "100 m"
  },
  {
    question: "You travel 120 km in 3 hours. What is your average speed?",
    options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
    answer: "40 km/h"
  },
  {
    question: "If 2.5 cm on a map equals 2 km on the ground, what is the scale?",
    options: ["1:80,000", "1:50,000", "1:100,000", "1:25,000"],
    answer: "1:80,000"
  },
  {
    question: "The angle of dip at the equator is?",
    options: ["0°", "45°", "60°", "90°"],
    answer: "0°"
  },
  {
    question: "If a lake evaporates 10 mm of water daily, how much evaporates in a month (30 days)?",
    options: ["200 mm", "250 mm", "300 mm", "350 mm"],
    answer: "300 mm"
  },
  {
    question: "The mean monthly temperature is calculated as?",
    options: ["Sum of temps ÷ no. of days", "Sum of temps ÷ 2", "Sum of temps ÷ no. of months", "None"],
    answer: "Sum of temps ÷ no. of months"
  },
  {
    question: "If a river has a velocity of 2 m/s and a width of 20 m and depth of 5 m, what is the discharge?",
    options: ["100 m³/s", "150 m³/s", "200 m³/s", "250 m³/s"],
    answer: "200 m³/s"
  },
  {
    question: "If a map scale is 1:50,000 and the distance between two towns on the map is 4cm, what is the actual ground distance in kilometers?",
    options: ["1 km", "2 km", "3 km", "4 km"],
    answer: "2 km"
  },
  {
    question: "Given the following monthly temperatures (°C): Jan: 24, Feb: 26, Mar: 28, Apr: 27. What is the mean temperature?",
    options: ["25°C", "26.25°C", "27.25°C", "28°C"],
    answer: "26.25°C"
  },
  {
    question: "What is the range of monthly rainfall (in mm) for the following data: Jan: 45, Feb: 60, Mar: 110, Apr: 80?",
    options: ["65 mm", "55 mm", "70 mm", "75 mm"],
    answer: "65 mm"
  },
  {
    question: "A village of 500 people lives in an area of 2 square kilometers. What is the population density?",
    options: ["250 people/km²", "100 people/km²", "500 people/km²", "200 people/km²"],
    answer: "250 people/km²"
  },
  {
    question: "A student walks 3 km north and then 4 km east. What is the straight-line distance between starting and ending points?",
    options: ["5 km", "6 km", "7 km", "4.5 km"],
    answer: "5 km"
  },
  {
    question: "If a map has a scale of 1:25,000, what is the ground distance represented by 6 cm on the map?",
    options: ["1.5 km", "2 km", "3 km", "4 km"],
    answer: "1.5 km"
  },
  {
    question: "Calculate the gradient between two points if the rise is 100 meters and the run is 500 meters.",
    options: ["1:5", "1:50", "1:10", "1:20"],
    answer: "1:5"
  },
  {
    question: "What is the magnetic bearing of a direction due east?",
    options: ["90°", "180°", "0°", "270°"],
    answer: "90°"
  },
  {
    question: "The population of a town increased from 10,000 to 12,000 in 2 years. What is the average annual growth rate?",
    options: ["5%", "10%", "15%", "20%"],
    answer: "10%"
  },
  {
    question: "Given the following rainfall data (mm): Jan: 50, Feb: 70, Mar: 100, what is the total rainfall for the first quarter?",
    options: ["200 mm", "220 mm", "250 mm", "300 mm"],
    answer: "220 mm"
  },
  {
    question: "A map scale of 1:100,000 means 1 cm on the map equals how many km on the ground?",
    options: ["0.5 km", "1 km", "2 km", "10 km"],
    answer: "1 km"
  },
  {
    question: "If 10 cm on a 1:25,000 map equals how many kilometers?",
    options: ["1.5 km", "2.5 km", "3 km", "4 km"],
    answer: "2.5 km"
  },
  {
    question: "A contour line increases from 100 m to 200 m over a distance of 1 km. What is the gradient?",
    options: ["1:5", "1:10", "1:20", "1:50"],
    answer: "1:10"
  },
  {
    question: "Convert 5 km on the ground to map distance using a scale of 1:50,000.",
    options: ["5 cm", "10 cm", "20 cm", "100 cm"],
    answer: "10 cm"
  },
  {
    question: "The mean annual temperature of a city is calculated using 12 monthly temperatures. If the total is 288°C, what is the mean?",
    options: ["24°C", "25°C", "26°C", "28°C"],
    answer: "24°C"
  },
  {
    question: "On a climate graph, if rainfall in Jan is 40 mm, Feb is 60 mm, and March is 100 mm, what is the average monthly rainfall?",
    options: ["60 mm", "66.7 mm", "70 mm", "75 mm"],
    answer: "66.7 mm"
  },
  {
    question: "A population of 9000 increases by 3% per year. What is the population after one year?",
    options: ["9270", "9003", "9100", "9450"],
    answer: "9270"
  },
  {
    question: "What is the angular bearing between North and South-East?",
    options: ["135°", "120°", "150°", "90°"],
    answer: "135°"
  },
  {
    question: "You walk 6 km west, then 8 km south. What is your straight-line distance from the starting point?",
    options: ["10 km", "12 km", "8 km", "6 km"],
    answer: "10 km"
  },
  {
    question: "What is the direction of the sun at 12 noon in Ghana?",
    options: ["Overhead", "East", "West", "North"],
    answer: "Overhead"
  },
  {
    question: "Which instrument measures air pressure?",
    options: ["Barometer", "Hygrometer", "Thermometer", "Anemometer"],
    answer: "Barometer"
  }
];

export default geographyQuestions;