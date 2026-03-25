const physicsQuestions = [
  {
    question: "Which of the following is not a fundamental physical quantity?",
    options: ["Length", "Mass", "Time", "Speed"],
    answer: "Speed"
  },
  {
    question: "The SI unit of length is?",
    options: ["Meter", "Kilometer", "Inch", "Mile"],
    answer: "Meter"
  },
  {
    question: "Physical quantities are classified into?",
    options: ["Basic and derived", "Mass and weight", "Length and time", "Large and small"],
    answer: "Basic and derived"
  },
  {
    question: "Which instrument is used to measure small diameters?",
    options: ["Micrometer screw gauge", "Ruler", "Stopwatch", "Thermometer"],
    answer: "Micrometer screw gauge"
  },
  {
    question: "The SI unit of time is?",
    options: ["Second", "Minute", "Hour", "Day"],
    answer: "Second"
  },
  {
    question: "Which quantity is derived from length and time?",
    options: ["Speed", "Mass", "Force", "Temperature"],
    answer: "Speed"
  },
  {
    question: "What instrument is used to measure time accurately in the laboratory?",
    options: ["Stopwatch", "Micrometer", "Thermometer", "Barometer"],
    answer: "Stopwatch"
  },
  {
    question: "Mass is the measure of?",
    options: ["Quantity of matter", "Weight", "Density", "Volume"],
    answer: "Quantity of matter"
  },
  {
    question: "Which of the following is not a vector quantity?",
    options: ["Velocity", "Acceleration", "Speed", "Force"],
    answer: "Speed"
  },
  {
    question: "Which of the following pairs are both scalar quantities?",
    options: ["Speed and distance", "Displacement and force", "Velocity and acceleration", "Force and momentum"],
    answer: "Speed and distance"
  },
  {
    question: "What is the correct SI unit of mass?",
    options: ["Kilogram", "Gram", "Tonne", "Pound"],
    answer: "Kilogram"
  },
  {
    question: "Which quantity has both magnitude and direction?",
    options: ["Vector", "Scalar", "Constant", "Derived"],
    answer: "Vector"
  },
  {
    question: "The instrument used to measure temperature is?",
    options: ["Thermometer", "Hygrometer", "Barometer", "Manometer"],
    answer: "Thermometer"
  },
  {
    question: "Which of these instruments is best for measuring the diameter of a thin wire?",
    options: ["Vernier calipers", "Micrometer screw gauge", "Meter rule", "Tape measure"],
    answer: "Micrometer screw gauge"
  },
  {
    question: "1 Newton is the force that gives a mass of 1 kg an acceleration of?",
    options: ["1 m/s²", "10 m/s²", "9.8 m/s²", "5 m/s²"],
    answer: "1 m/s²"
  },
  {
    question: "Which of the following is used to measure the volume of irregular solids?",
    options: ["Eureka can", "Measuring tape", "Vernier caliper", "Thermometer"],
    answer: "Eureka can"
  },
  {
    question: "The density of a substance is defined as its mass per unit?",
    options: ["Volume", "Area", "Length", "Time"],
    answer: "Volume"
  },
  {
    question: "A physical quantity that can be described by magnitude only is called?",
    options: ["Scalar", "Vector", "Force", "Displacement"],
    answer: "Scalar"
  },
  {
    question: "Which one of these is not a derived quantity?",
    options: ["Speed", "Acceleration", "Volume", "Mass"],
    answer: "Mass"
  },
  {
    question: "Which of the following is used to measure force?",
    options: ["Spring balance", "Stopwatch", "Thermometer", "Voltmeter"],
    answer: "Spring balance"
  },
  {
    question: "Which property of matter makes it occupy space?",
    options: ["Volume", "Weight", "Mass", "Density"],
    answer: "Volume"
  },
  {
    question: "Which of these is not a characteristic of matter?",
    options: ["It has no weight", "It occupies space", "It has mass", "It can exist in states"],
    answer: "It has no weight"
  },
  {
    question: "Matter exists in how many states?",
    options: ["Three", "Four", "Two", "Five"],
    answer: "Three"
  },
  {
    question: "Which state of matter has no definite shape but definite volume?",
    options: ["Liquid", "Gas", "Solid", "Plasma"],
    answer: "Liquid"
  },
  {
    question: "Which state of matter can be compressed easily?",
    options: ["Gas", "Solid", "Liquid", "Plasma"],
    answer: "Gas"
  },
  {
    question: "What is the SI unit of density?",
    options: ["kg/m³", "g/cm³", "kg/cm³", "g/m³"],
    answer: "kg/m³"
  },
  {
    question: "Which one of the following is an extensive property?",
    options: ["Mass", "Density", "Temperature", "Pressure"],
    answer: "Mass"
  },
  {
    question: "Which of these is an intensive property of matter?",
    options: ["Density", "Volume", "Mass", "Weight"],
    answer: "Density"
  },
  {
    question: "A material that can be hammered into shape is said to be?",
    options: ["Malleable", "Ductile", "Elastic", "Brittle"],
    answer: "Malleable"
  },
  {
    question: "Which of the following describes ductility?",
    options: ["Can be drawn into wire", "Can be stretched", "Can be compressed", "Can resist bending"],
    answer: "Can be drawn into wire"
  },
  {
    question: "The force of attraction between molecules of different substances is?",
    options: ["Adhesion", "Cohesion", "Compression", "Tension"],
    answer: "Adhesion"
  },
  {
    question: "Which of the following is a property of solids?",
    options: ["Fixed volume and shape", "No fixed shape", "No fixed volume", "Compressibility"],
    answer: "Fixed volume and shape"
  },
  {
    question: "The upward force exerted by a fluid on an object placed in it is called?",
    options: ["Upthrust", "Gravity", "Centripetal", "Friction"],
    answer: "Upthrust"
  },
  {
    question: "Which physical quantity is measured using a balance?",
    options: ["Mass", "Volume", "Length", "Force"],
    answer: "Mass"
  },
  {
    question: "Pressure in solids is defined as force per unit?",
    options: ["Area", "Mass", "Length", "Volume"],
    answer: "Area"
  },
  {
    question: "Which of these materials has the highest density?",
    options: ["Lead", "Iron", "Wood", "Aluminium"],
    answer: "Lead"
  },
  {
    question: "A liquid with higher density will exert?",
    options: ["More pressure", "Less pressure", "Equal pressure", "No pressure"],
    answer: "More pressure"
  },
  {
    question: "Which unit is used for measuring pressure?",
    options: ["Pascal", "Joule", "Watt", "Newton"],
    answer: "Pascal"
  },
  {
    question: "What is the term for the resistance of a fluid to flow?",
    options: ["Viscosity", "Turbulence", "Elasticity", "Buoyancy"],
    answer: "Viscosity"
  },
  {
    question: "Which of these physical quantities is measured using a barometer?",
    options: ["Atmospheric pressure", "Humidity", "Temperature", "Density"],
    answer: "Atmospheric pressure"
  },
  {
    question: "Which state of matter expands to fill any container?",
    options: ["Gas", "Liquid", "Solid", "Plasma"],
    answer: "Gas"
  },
  {
    question: "What property of matter describes its resistance to change in motion?",
    options: ["Inertia", "Mass", "Weight", "Density"],
    answer: "Inertia"
  },
  {
    question: "The ability of a substance to return to its original shape is called?",
    options: ["Elasticity", "Plasticity", "Malleability", "Tensile strength"],
    answer: "Elasticity"
  },
  {
    question: "Which property determines whether an object sinks or floats?",
    options: ["Density", "Mass", "Weight", "Pressure"],
    answer: "Density"
  },
  {
    question: "Which physical property of liquids explains capillary action?",
    options: ["Adhesion", "Viscosity", "Cohesion", "Elasticity"],
    answer: "Adhesion"
  },
  {
    question: "Which one of these is NOT a standard measuring instrument?",
    options: ["Screw gauge", "Odometer", "Thermometer", "Vernier caliper"],
    answer: "Odometer"
  },
  {
    question: "What is the instrument used to measure atmospheric pressure?",
    options: ["Barometer", "Thermometer", "Anemometer", "Manometer"],
    answer: "Barometer"
  },
  {
    question: "The instrument used for measuring humidity is?",
    options: ["Hygrometer", "Barometer", "Thermometer", "Voltmeter"],
    answer: "Hygrometer"
  },
  {
    question: "Which of the following is used to measure the force of gravity?",
    options: ["Spring balance", "Thermometer", "Barometer", "Stopwatch"],
    answer: "Spring balance"
  },
  {
    question: "Which of the following is a scalar quantity?",
    options: ["Speed", "Velocity", "Displacement", "Force"],
    answer: "Speed"
  },
  {
    question: "Acceleration is defined as the rate of change of?",
    options: ["Velocity", "Speed", "Displacement", "Distance"],
    answer: "Velocity"
  },
  {
    question: "Which of the following represents uniform motion?",
    options: ["Constant velocity", "Constant acceleration", "Increasing speed", "Decreasing speed"],
    answer: "Constant velocity"
  },
  {
    question: "A body is said to be in motion when it changes its?",
    options: ["Position", "Shape", "Mass", "Volume"],
    answer: "Position"
  },
  {
    question: "What is the SI unit of acceleration?",
    options: ["m/s²", "m/s", "m²/s", "s/m²"],
    answer: "m/s²"
  },
  {
    question: "The area under a velocity-time graph gives?",
    options: ["Displacement", "Acceleration", "Speed", "Force"],
    answer: "Displacement"
  },
  {
    question: "Which of the following quantities is a vector?",
    options: ["Displacement", "Distance", "Speed", "Work"],
    answer: "Displacement"
  },
  {
    question: "The slope of a distance-time graph gives?",
    options: ["Speed", "Acceleration", "Force", "Displacement"],
    answer: "Speed"
  },
  {
    question: "What is the acceleration due to gravity on earth?",
    options: ["9.8 m/s²", "10 m/s", "9.8 m/s", "10 m/s²"],
    answer: "9.8 m/s²"
  },
  {
    question: "Which of the following equations represents Newtonâ's Second Law?",
    options: ["F = ma", "F = mv", "F = mg", "F = m/a"],
    answer: "F = ma"
  },
  {
    question: "A resultant force causes a body to?",
    options: ["Accelerate", "Stay at rest", "Decrease in mass", "Change color"],
    answer: "Accelerate"
  },
  {
    question: "The inertia of a body is determined by its?",
    options: ["Mass", "Velocity", "Volume", "Shape"],
    answer: "Mass"
  },
  {
    question: "Which law states that every action has an equal and opposite reaction?",
    options: ["Newtonâ's third law", "Newtonâ's first law", "Newtonâ's second law", "Hookeâ's law"],
    answer: "Newtonâ's third law"
  },
  {
    question: "Friction is a force that?",
    options: ["Opposes motion", "Promotes motion", "Increases speed", "Reduces weight"],
    answer: "Opposes motion"
  },
  {
    question: "What is the unit of force?",
    options: ["Newton", "Watt", "Joule", "Pascal"],
    answer: "Newton"
  },
  {
    question: "Gravitational force is an example of a?",
    options: ["Field force", "Contact force", "Frictional force", "Electromagnetic force"],
    answer: "Field force"
  },
  {
    question: "Work is said to be done when?",
    options: ["A force moves an object", "An object is at rest", "No motion occurs", "Friction opposes force"],
    answer: "A force moves an object"
  },
  {
    question: "What is the unit of work?",
    options: ["Joule", "Watt", "Newton", "Meter"],
    answer: "Joule"
  },
  {
    question: "Power is defined as?",
    options: ["Work done per time", "Force per area", "Energy per force", "Displacement per time"],
    answer: "Work done per time"
  },
  {
    question: "The unit of power is?",
    options: ["Watt", "Joule", "Newton", "Pascal"],
    answer: "Watt"
  },
  {
    question: "What type of energy does a moving object possess?",
    options: ["Kinetic energy", "Potential energy", "Heat energy", "Chemical energy"],
    answer: "Kinetic energy"
  },
  {
    question: "Which energy is stored in a stretched spring?",
    options: ["Potential energy", "Kinetic energy", "Chemical energy", "Solar energy"],
    answer: "Potential energy"
  },
  {
    question: "Mechanical energy is the sum of?",
    options: ["Kinetic and potential energy", "Heat and sound energy", "Light and chemical energy", "Solar and nuclear energy"],
    answer: "Kinetic and potential energy"
  },
  {
    question: "Which machine consists of a wheel and a rope?",
    options: ["Pulley", "Lever", "Inclined plane", "Wedge"],
    answer: "Pulley"
  },
  {
    question: "The efficiency of a machine is always less than 100% due to?",
    options: ["Friction", "Weight", "Velocity", "Distance"],
    answer: "Friction"
  },
  {
    question: "The pivot point of a lever is called the?",
    options: ["Fulcrum", "Load", "Effort", "Center"],
    answer: "Fulcrum"
  },
  {
    question: "Which of the following is a second class lever?",
    options: ["Wheelbarrow", "Scissors", "Hammer", "Tongs"],
    answer: "Wheelbarrow"
  },
  {
    question: "What is the mechanical advantage of a machine?",
    options: ["Load/Effort", "Effort/Load", "Velocity x Time", "Force x Distance"],
    answer: "Load/Effort"
  },
  {
    question: "Frictional force always acts?",
    options: ["Opposite to motion", "In direction of motion", "Upwards", "Downwards"],
    answer: "Opposite to motion"
  },
  {
    question: "A machine with high efficiency has?",
    options: ["Low energy loss", "More size", "More speed", "Less mass"],
    answer: "Low energy loss"
  },
  {
    question: "Which type of friction occurs when two surfaces slide over each other?",
    options: ["Sliding friction", "Static friction", "Rolling friction", "Viscous friction"],
    answer: "Sliding friction"
  },
  {
    question: "Which simple machine is used in an axe?",
    options: ["Wedge", "Lever", "Pulley", "Screw"],
    answer: "Wedge"
  },
  {
    question: "One horsepower is equivalent to?",
    options: ["746 watts", "1000 watts", "500 watts", "250 watts"],
    answer: "746 watts"
  },
  {
    question: "When no net force acts on a body, it remains?",
    options: ["At rest or in uniform motion", "Accelerated", "Vibrating", "Changing shape"],
    answer: "At rest or in uniform motion"
  },
  {
    question: "The force of gravity acting on an object is its?",
    options: ["Weight", "Mass", "Inertia", "Friction"],
    answer: "Weight"
  },
  {
    question: "If a car moves at constant speed, what is its acceleration?",
    options: ["Zero", "Increasing", "Negative", "Constant"],
    answer: "Zero"
  },
  {
    question: "Which machine uses two inclined planes joined together?",
    options: ["Wedge", "Pulley", "Lever", "Screw"],
    answer: "Wedge"
  },
  {
    question: "The slope of a velocity-time graph represents?",
    options: ["Acceleration", "Speed", "Displacement", "Work"],
    answer: "Acceleration"
  },
  {
    question: "Which of the following affects friction between surfaces?",
    options: ["Roughness", "Temperature", "Color", "Shape"],
    answer: "Roughness"
  },
  {
    question: "Energy can neither be created nor destroyed. This is the law of?",
    options: ["Conservation of energy", "Motion", "Friction", "Gravity"],
    answer: "Conservation of energy"
  },
  {
    question: "Which type of motion does a ceiling fan perform?",
    options: ["Rotational", "Linear", "Vibrational", "Oscillatory"],
    answer: "Rotational"
  },
  {
    question: "In a first-class lever, the fulcrum is located?",
    options: ["Between effort and load", "At one end", "Below the load", "On the effort side"],
    answer: "Between effort and load"
  },
  {
    question: "Which machine is used to raise a flag?",
    options: ["Pulley", "Lever", "Wedge", "Screw"],
    answer: "Pulley"
  },
  {
    question: "When an object falls freely, its acceleration is due to?",
    options: ["Gravity", "Friction", "Velocity", "Inertia"],
    answer: "Gravity"
  },
  {
    question: "A ball thrown vertically upwards will have zero velocity at?",
    options: ["Maximum height", "Start point", "Ground level", "Halfway point"],
    answer: "Maximum height"
  },
  {
    question: "The energy possessed by a body due to its position is?",
    options: ["Potential energy", "Kinetic energy", "Solar energy", "Chemical energy"],
    answer: "Potential energy"
  },
  {
    question: "What type of motion does a pendulum exhibit?",
    options: ["Oscillatory motion", "Linear motion", "Rotational motion", "Vibratory motion"],
    answer: "Oscillatory motion"
  },
  {
    question: "Which instrument is used to measure temperature?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Manometer"],
    answer: "Thermometer"
  },
  {
    question: "The SI unit of temperature is?",
    options: ["Kelvin", "Celsius", "Fahrenheit", "Degree"],
    answer: "Kelvin"
  },
  {
    question: "Which of the following is not a method of heat transfer?",
    options: ["Reflection", "Conduction", "Convection", "Radiation"],
    answer: "Reflection"
  },
  {
    question: "Heat travels through solids mainly by?",
    options: ["Conduction", "Convection", "Radiation", "Evaporation"],
    answer: "Conduction"
  },
  {
    question: "Liquids mainly transfer heat by?",
    options: ["Convection", "Conduction", "Radiation", "Absorption"],
    answer: "Convection"
  },
  {
    question: "Radiation can take place in?",
    options: ["Vacuum", "Solids", "Liquids", "Gases"],
    answer: "Vacuum"
  },
  {
    question: "Which of the following surfaces is the best emitter of radiation?",
    options: ["Black and rough", "White and smooth", "Silver and shiny", "Transparent"],
    answer: "Black and rough"
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["100°C", "0°C", "212°C", "273°C"],
    answer: "100°C"
  },
  {
    question: "The melting point of ice in Kelvin is?",
    options: ["273 K", "0 K", "100 K", "373 K"],
    answer: "273 K"
  },
  {
    question: "Which thermometer is used in laboratories?",
    options: ["Mercury-in-glass", "Alcohol", "Maximum-minimum", "Infrared"],
    answer: "Mercury-in-glass"
  },
  {
    question: "Which of the following expands least on heating?",
    options: ["Solids", "Liquids", "Gases", "All expand equally"],
    answer: "Solids"
  },
  {
    question: "The increase in size of a substance due to heat is called?",
    options: ["Expansion", "Compression", "Evaporation", "Fusion"],
    answer: "Expansion"
  },
  {
    question: "Which of the following does not require a medium for heat transfer?",
    options: ["Radiation", "Conduction", "Convection", "Evaporation"],
    answer: "Radiation"
  },
  {
    question: "When a solid is heated, it first?",
    options: ["Expands", "Contracts", "Boils", "Condenses"],
    answer: "Expands"
  },
  {
    question: "The process of a liquid changing into a gas is called?",
    options: ["Evaporation", "Condensation", "Sublimation", "Melting"],
    answer: "Evaporation"
  },
  {
    question: "Which state of matter has the highest energy?",
    options: ["Gas", "Liquid", "Solid", "Plasma"],
    answer: "Gas"
  },
  {
    question: "Which of these best describes conduction?",
    options: ["Transfer of heat through solids", "Transfer of heat by movement of fluid", "Transfer through radiation", "Loss of heat by evaporation"],
    answer: "Transfer of heat through solids"
  },
  {
    question: "A black surface is a good absorber of?",
    options: ["Heat", "Light", "Cold", "Air"],
    answer: "Heat"
  },
  {
    question: "What happens to the density of air when heated?",
    options: ["Decreases", "Increases", "Remains constant", "Becomes zero"],
    answer: "Decreases"
  },
  {
    question: "Thermal equilibrium occurs when two objects?",
    options: ["Are at same temperature", "Are touching", "Are radiating", "Have same mass"],
    answer: "Are at same temperature"
  },
  {
    question: "What is the freezing point of water in Fahrenheit?",
    options: ["32°F", "0°F", "100°F", "212°F"],
    answer: "32°F"
  },
  {
    question: "The amount of heat required to raise the temperature of 1 kg of a substance by 1°C is called?",
    options: ["Specific heat capacity", "Latent heat", "Heat energy", "Thermal capacity"],
    answer: "Specific heat capacity"
  },
  {
    question: "What is the unit of specific heat capacity?",
    options: ["J/kg°C", "J/kg", "W/kg", "C/kg"],
    answer: "J/kg°C"
  },
  {
    question: "During boiling, the temperature of a substance?",
    options: ["Remains constant", "Increases", "Decreases", "Fluctuates"],
    answer: "Remains constant"
  },
  {
    question: "When a substance changes from gas to liquid, it is called?",
    options: ["Condensation", "Evaporation", "Melting", "Sublimation"],
    answer: "Condensation"
  },
  {
    question: "The latent heat of fusion is the heat required to?",
    options: ["Change solid to liquid", "Change liquid to gas", "Change gas to solid", "Heat without changing state"],
    answer: "Change solid to liquid"
  },
  {
    question: "Which of the following is not affected by heat?",
    options: ["Mass", "Volume", "Temperature", "Density"],
    answer: "Mass"
  },
  {
    question: "Which thermometer contains mercury?",
    options: ["Clinical thermometer", "Digital thermometer", "Alcohol thermometer", "Infrared thermometer"],
    answer: "Clinical thermometer"
  },
  {
    question: "Why is mercury used in thermometers?",
    options: ["It expands uniformly", "It sticks to glass", "It evaporates easily", "It is colored"],
    answer: "It expands uniformly"
  },
  {
    question: "Why is alcohol used in cold regions?",
    options: ["It has low freezing point", "It has color", "It is cheap", "It is poisonous"],
    answer: "It has low freezing point"
  },
  {
    question: "Which part of a thermometer prevents mercury from flowing back?",
    options: ["Constriction", "Capillary tube", "Bulb", "Stem"],
    answer: "Constriction"
  },
  {
    question: "Which of the following expands most on heating?",
    options: ["Gases", "Liquids", "Solids", "Metals"],
    answer: "Gases"
  },
  {
    question: "A bimetallic strip is used in?",
    options: ["Thermostats", "Thermometers", "Engines", "Geysers"],
    answer: "Thermostats"
  },
  {
    question: "The thermometer used in weather stations is?",
    options: ["Maximum-minimum thermometer", "Mercury thermometer", "Clinical thermometer", "Alcohol thermometer"],
    answer: "Maximum-minimum thermometer"
  },
  {
    question: "When temperature increases, the density of most substances?",
    options: ["Decreases", "Increases", "Remains same", "Becomes zero"],
    answer: "Decreases"
  },
  {
    question: "Which method of heat transfer is responsible for the heating of the sun?",
    options: ["Radiation", "Conduction", "Convection", "Absorption"],
    answer: "Radiation"
  },
  {
    question: "What happens to particles when heat is applied?",
    options: ["They move faster", "They stop moving", "They shrink", "They disappear"],
    answer: "They move faster"
  },
  {
    question: "Which type of heat transfer does not need particles?",
    options: ["Radiation", "Conduction", "Convection", "Insulation"],
    answer: "Radiation"
  },
  {
    question: "Which one is used to measure high temperature in furnaces?",
    options: ["Thermocouple", "Clinical thermometer", "Alcohol thermometer", "Digital thermometer"],
    answer: "Thermocouple"
  },
  {
    question: "When solids are heated, particles vibrate more. This causes?",
    options: ["Expansion", "Conduction", "Radiation", "Convection"],
    answer: "Expansion"
  },
  {
    question: "Which part of a thermometer contains mercury or alcohol?",
    options: ["Bulb", "Stem", "Scale", "Glass tube"],
    answer: "Bulb"
  },
  {
    question: "Which of the following materials is a poor conductor of heat?",
    options: ["Wood", "Copper", "Aluminium", "Iron"],
    answer: "Wood"
  },
  {
    question: "What happens to the molecules of a gas when cooled?",
    options: ["Move slower", "Move faster", "Expand", "Vibrate"],
    answer: "Move slower"
  },
  {
    question: "What is the boiling point of water in Kelvin?",
    options: ["373 K", "273 K", "100 K", "273°C"],
    answer: "373 K"
  },
  {
    question: "Which thermometer measures the temperature of the human body?",
    options: ["Clinical thermometer", "Laboratory thermometer", "Maximum-minimum", "Digital thermometer"],
    answer: "Clinical thermometer"
  },
  {
    question: "When a gas is compressed, its temperature?",
    options: ["Increases", "Decreases", "Remains the same", "Becomes zero"],
    answer: "Increases"
  },
  {
    question: "What is the freezing point of water in Celsius?",
    options: ["0°C", "32°C", "100°C", "273°C"],
    answer: "0°C"
  },
  {
    question: "The change of state from solid to gas without becoming liquid is called?",
    options: ["Sublimation", "Condensation", "Melting", "Boiling"],
    answer: "Sublimation"
  },
  {
    question: "During evaporation, the most energetic molecules?",
    options: ["Escape first", "Stay behind", "Vibrate", "Freeze"],
    answer: "Escape first"
  },
  {
    question: "A wave is a disturbance that transfers?",
    options: ["Energy", "Matter", "Particles", "Mass"],
    answer: "Energy"
  },
  {
    question: "Which of the following is a mechanical wave?",
    options: ["Sound", "Light", "Radio wave", "X-ray"],
    answer: "Sound"
  },
  {
    question: "Which wave does not require a medium to travel?",
    options: ["Light", "Sound", "Water wave", "Seismic wave"],
    answer: "Light"
  },
  {
    question: "The number of waves passing a point per second is called?",
    options: ["Frequency", "Amplitude", "Wavelength", "Period"],
    answer: "Frequency"
  },
  {
    question: "The unit of frequency is?",
    options: ["Hertz", "Meter", "Second", "Newton"],
    answer: "Hertz"
  },
  {
    question: "The maximum displacement from the rest position is the?",
    options: ["Amplitude", "Frequency", "Wavelength", "Speed"],
    answer: "Amplitude"
  },
  {
    question: "The time for one complete wave is called?",
    options: ["Period", "Frequency", "Cycle", "Amplitude"],
    answer: "Period"
  },
  {
    question: "What type of wave is sound?",
    options: ["Longitudinal", "Transverse", "Electromagnetic", "Polarized"],
    answer: "Longitudinal"
  },
  {
    question: "In a transverse wave, particles vibrate?",
    options: ["Perpendicular to wave direction", "Parallel to wave direction", "In circles", "At random"],
    answer: "Perpendicular to wave direction"
  },
  {
    question: "The distance between two crests is the?",
    options: ["Wavelength", "Amplitude", "Frequency", "Speed"],
    answer: "Wavelength"
  },
  {
    question: "What is the speed of light in air?",
    options: ["3.0 x 10^8 m/s", "340 m/s", "1500 m/s", "1.0 x 10^6 m/s"],
    answer: "3.0 x 10^8 m/s"
  },
  {
    question: "Which wave travels fastest in solids?",
    options: ["Sound", "Light", "Radio", "Microwave"],
    answer: "Sound"
  },
  {
    question: "Which of these travels in vacuum?",
    options: ["Light", "Sound", "Seismic", "Water"],
    answer: "Light"
  },
  {
    question: "The bending of light when it passes from one medium to another is?",
    options: ["Refraction", "Reflection", "Diffraction", "Interference"],
    answer: "Refraction"
  },
  {
    question: "The bouncing back of light from a surface is called?",
    options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
    answer: "Reflection"
  },
  {
    question: "A plane mirror forms an image that is?",
    options: ["Virtual and upright", "Real and inverted", "Diminished", "Enlarged"],
    answer: "Virtual and upright"
  },
  {
    question: "The angle of incidence equals?",
    options: ["Angle of reflection", "Angle of refraction", "Critical angle", "Zero"],
    answer: "Angle of reflection"
  },
  {
    question: "Which lens converges light rays?",
    options: ["Convex", "Concave", "Plane", "Cylindrical"],
    answer: "Convex"
  },
  {
    question: "Which lens diverges light rays?",
    options: ["Concave", "Convex", "Cylindrical", "Plano"],
    answer: "Concave"
  },
  {
    question: "Sound is produced by?",
    options: ["Vibrations", "Radiation", "Refraction", "Reflection"],
    answer: "Vibrations"
  },
  {
    question: "The pitch of a sound depends on?",
    options: ["Frequency", "Amplitude", "Wavelength", "Speed"],
    answer: "Frequency"
  },
  {
    question: "The loudness of sound depends on?",
    options: ["Amplitude", "Frequency", "Speed", "Pitch"],
    answer: "Amplitude"
  },
  {
    question: "Echo is produced due to?",
    options: ["Reflection of sound", "Refraction", "Diffraction", "Resonance"],
    answer: "Reflection of sound"
  },
  {
    question: "Which device converts sound to electrical signals?",
    options: ["Microphone", "Speaker", "Amplifier", "Transistor"],
    answer: "Microphone"
  },
  {
    question: "Which device converts electrical signals to sound?",
    options: ["Speaker", "Microphone", "Oscillator", "Tuner"],
    answer: "Speaker"
  },
  {
    question: "In which medium does sound travel fastest?",
    options: ["Solids", "Liquids", "Gases", "Vacuum"],
    answer: "Solids"
  },
  {
    question: "What is the unit of wavelength?",
    options: ["Metre", "Hertz", "Second", "Pascal"],
    answer: "Metre"
  },
  {
    question: "White light is made up of?",
    options: ["7 colours", "3 colours", "2 colours", "5 colours"],
    answer: "7 colours"
  },
  {
    question: "The splitting of white light into its components is?",
    options: ["Dispersion", "Diffraction", "Reflection", "Refraction"],
    answer: "Dispersion"
  },
  {
    question: "Which colour of light is refracted the most?",
    options: ["Violet", "Red", "Green", "Blue"],
    answer: "Violet"
  },
  {
    question: "Which electromagnetic wave has the longest wavelength?",
    options: ["Radio waves", "Gamma rays", "X-rays", "UV rays"],
    answer: "Radio waves"
  },
  {
    question: "Which electromagnetic wave has the highest frequency?",
    options: ["Gamma rays", "Microwaves", "Infrared", "Radio"],
    answer: "Gamma rays"
  },
  {
    question: "Which device is used to see distant objects?",
    options: ["Telescope", "Microscope", "Periscope", "Spectrometer"],
    answer: "Telescope"
  },
  {
    question: "The image formed by a convex lens is real and inverted when the object is?",
    options: ["Beyond the principal focus", "At the focus", "Between lens and focus", "At optical center"],
    answer: "Beyond the principal focus"
  },
  {
    question: "Which mirror is used in car rear-view mirrors?",
    options: ["Convex mirror", "Concave mirror", "Plane mirror", "None"],
    answer: "Convex mirror"
  },
  {
    question: "A concave mirror can form a real image only when object is?",
    options: ["Beyond the focus", "At focus", "Inside focus", "At pole"],
    answer: "Beyond the focus"
  },
  {
    question: "Refraction occurs because light?",
    options: ["Changes speed", "Changes direction", "Is absorbed", "Bounces back"],
    answer: "Changes speed"
  },
  {
    question: "The part of the eye that focuses light is the?",
    options: ["Lens", "Cornea", "Retina", "Iris"],
    answer: "Lens"
  },
  {
    question: "Which lens corrects long-sightedness?",
    options: ["Convex lens", "Concave lens", "Plane lens", "Cylindrical lens"],
    answer: "Convex lens"
  },
  {
    question: "Which lens corrects short-sightedness?",
    options: ["Concave lens", "Convex lens", "Spherical lens", "Plane lens"],
    answer: "Concave lens"
  },
  {
    question: "Sound cannot travel through?",
    options: ["Vacuum", "Water", "Metal", "Air"],
    answer: "Vacuum"
  },
  {
    question: "Which wave property causes echoes?",
    options: ["Reflection", "Refraction", "Interference", "Polarisation"],
    answer: "Reflection"
  },
  {
    question: "An image formed by a pinhole camera is?",
    options: ["Real and inverted", "Virtual and upright", "Diminished and upright", "Magnified and upright"],
    answer: "Real and inverted"
  },
  {
    question: "What type of wave is light?",
    options: ["Transverse", "Longitudinal", "Mechanical", "Compression"],
    answer: "Transverse"
  },
  {
    question: "The electromagnetic waves with the shortest wavelength are?",
    options: ["Gamma rays", "Radio waves", "X-rays", "Microwaves"],
    answer: "Gamma rays"
  },
  {
    question: "Which colour of light has the shortest wavelength?",
    options: ["Violet", "Red", "Green", "Yellow"],
    answer: "Violet"
  },
  {
    question: "Which part of the electromagnetic spectrum is used in TV remote controls?",
    options: ["Infrared", "X-rays", "Microwaves", "Gamma rays"],
    answer: "Infrared"
  },
  {
    question: "Which wave is used in mobile phones?",
    options: ["Microwaves", "X-rays", "Gamma rays", "Ultrasound"],
    answer: "Microwaves"
  },
  {
    question: "The number of complete waves per second is?",
    options: ["Frequency", "Period", "Speed", "Wavelength"],
    answer: "Frequency"
  },
  {
    question: "Electric current is the flow of?",
    options: ["Electrons", "Protons", "Neutrons", "Atoms"],
    answer: "Electrons"
  },
  {
    question: "The unit of electric current is?",
    options: ["Ampere", "Volt", "Ohm", "Coulomb"],
    answer: "Ampere"
  },
  {
    question: "The unit of resistance is?",
    options: ["Ohm", "Volt", "Ampere", "Watt"],
    answer: "Ohm"
  },
  {
    question: "The instrument used to measure current is?",
    options: ["Ammeter", "Voltmeter", "Ohmmeter", "Galvanometer"],
    answer: "Ammeter"
  },
  {
    question: "The instrument used to measure potential difference is?",
    options: ["Voltmeter", "Ammeter", "Galvanometer", "Meter rule"],
    answer: "Voltmeter"
  },
  {
    question: "The device that stores electric charge is?",
    options: ["Capacitor", "Battery", "Resistor", "Switch"],
    answer: "Capacitor"
  },
  {
    question: "Ohm's Law relates current, voltage, and?",
    options: ["Resistance", "Power", "Capacitance", "Charge"],
    answer: "Resistance"
  },
  {
    question: "Which of the following is a good conductor of electricity?",
    options: ["Copper", "Plastic", "Glass", "Wood"],
    answer: "Copper"
  },
  {
    question: "Which of the following is an insulator?",
    options: ["Rubber", "Silver", "Aluminium", "Iron"],
    answer: "Rubber"
  },
  {
    question: "A material that allows some current to pass through is called?",
    options: ["Semiconductor", "Conductor", "Insulator", "Resistor"],
    answer: "Semiconductor"
  },
  {
    question: "The rate of doing electrical work is?",
    options: ["Power", "Energy", "Current", "Resistance"],
    answer: "Power"
  },
  {
    question: "The unit of electrical energy is?",
    options: ["Joule", "Ampere", "Volt", "Ohm"],
    answer: "Joule"
  },
  {
    question: "The commercial unit of energy is?",
    options: ["Kilowatt-hour", "Joule", "Coulomb", "Watt"],
    answer: "Kilowatt-hour"
  },
  {
    question: "The unit of power is?",
    options: ["Watt", "Joule", "Ampere", "Volt"],
    answer: "Watt"
  },
  {
    question: "What is the function of a fuse in a circuit?",
    options: ["To protect appliances", "To increase voltage", "To convert energy", "To generate current"],
    answer: "To protect appliances"
  },
  {
    question: "Which of the following is a source of direct current?",
    options: ["Battery", "Transformer", "Generator", "Inductor"],
    answer: "Battery"
  },
  {
    question: "Which of the following is a source of alternating current?",
    options: ["Generator", "Battery", "Cell", "Solar panel"],
    answer: "Generator"
  },
  {
    question: "What is the function of a resistor?",
    options: ["To reduce current", "To store energy", "To convert voltage", "To amplify signals"],
    answer: "To reduce current"
  },
  {
    question: "The flow of electric charges is known as?",
    options: ["Current", "Voltage", "Resistance", "Power"],
    answer: "Current"
  },
  {
    question: "Two like charges will?",
    options: ["Repel each other", "Attract each other", "Neutralize", "Merge"],
    answer: "Repel each other"
  },
  {
    question: "Two unlike charges will?",
    options: ["Attract each other", "Repel each other", "Merge", "Vibrate"],
    answer: "Attract each other"
  },
  {
    question: "The region around a magnet where magnetic force acts is the?",
    options: ["Magnetic field", "Electric field", "Neutral zone", "Conduction path"],
    answer: "Magnetic field"
  },
  {
    question: "The poles of a magnet are located at?",
    options: ["The ends", "The center", "One side", "All over"],
    answer: "The ends"
  },
  {
    question: "Like magnetic poles?",
    options: ["Repel each other", "Attract each other", "Cancel out", "Do not interact"],
    answer: "Repel each other"
  },
  {
    question: "Unlike magnetic poles?",
    options: ["Attract each other", "Repel each other", "Merge", "Vibrate"],
    answer: "Attract each other"
  },
  {
    question: "What is used to detect the presence of a magnetic field?",
    options: ["Compass", "Ammeter", "Voltmeter", "Galvanometer"],
    answer: "Compass"
  },
  {
    question: "Magnetic materials include?",
    options: ["Iron", "Wood", "Plastic", "Rubber"],
    answer: "Iron"
  },
  {
    question: "Which of the following is not a magnetic material?",
    options: ["Copper", "Iron", "Nickel", "Cobalt"],
    answer: "Copper"
  },
  {
    question: "Electromagnetism is the relationship between?",
    options: ["Electricity and magnetism", "Heat and light", "Sound and waves", "Atoms and molecules"],
    answer: "Electricity and magnetism"
  },
  {
    question: "A magnetic field can be produced by?",
    options: ["Electric current", "Light", "Sound", "Pressure"],
    answer: "Electric current"
  },
  {
    question: "A device that uses electromagnetism is?",
    options: ["Electric bell", "Mirror", "Thermometer", "Bulb"],
    answer: "Electric bell"
  },
  {
    question: "An electric motor converts?",
    options: ["Electrical energy to mechanical", "Mechanical to electrical", "Heat to light", "Sound to electricity"],
    answer: "Electrical energy to mechanical"
  },
  {
    question: "A generator converts?",
    options: ["Mechanical energy to electrical", "Electrical to mechanical", "Light to heat", "Sound to electricity"],
    answer: "Mechanical energy to electrical"
  },
  {
    question: "Electromagnetic induction is the production of current by?",
    options: ["Moving a magnet in a coil", "Heating a wire", "Lighting a bulb", "Rotating a fan"],
    answer: "Moving a magnet in a coil"
  },
  {
    question: "The unit of electric charge is?",
    options: ["Coulomb", "Ohm", "Joule", "Watt"],
    answer: "Coulomb"
  },
  {
    question: "A circuit that allows current to flow is?",
    options: ["Closed", "Open", "Broken", "Short"],
    answer: "Closed"
  },
  {
    question: "A switch is used to?",
    options: ["Open and close a circuit", "Store energy", "Measure voltage", "Reduce resistance"],
    answer: "Open and close a circuit"
  },
  {
    question: "A device that increases or decreases voltage is a?",
    options: ["Transformer", "Capacitor", "Resistor", "Battery"],
    answer: "Transformer"
  },
  {
    question: "The national grid is used for?",
    options: ["Electricity distribution", "Water supply", "Internet connection", "Heat regulation"],
    answer: "Electricity distribution"
  },
  {
    question: "A circuit with only one path for current is?",
    options: ["Series circuit", "Parallel circuit", "Short circuit", "Open circuit"],
    answer: "Series circuit"
  },
  {
    question: "A circuit with multiple paths for current is?",
    options: ["Parallel circuit", "Series circuit", "Closed circuit", "Electric field"],
    answer: "Parallel circuit"
  },
  {
    question: "Which quantity is measured in volts?",
    options: ["Potential difference", "Current", "Resistance", "Power"],
    answer: "Potential difference"
  },
  {
    question: "Electricity from the mains is?",
    options: ["Alternating current", "Direct current", "Pulsed current", "Static electricity"],
    answer: "Alternating current"
  },
  {
    question: "When current flows through a wire, a ______ is produced.",
    options: ["Magnetic field", "Light", "Sound", "Heat only"],
    answer: "Magnetic field"
  },
  {
    question: "The Earth wire in a 3-pin plug is for?",
    options: ["Safety", "Heating", "Carrying current", "Connecting load"],
    answer: "Safety"
  },
  {
    question: "Which wire is brown in a 3-pin plug?",
    options: ["Live wire", "Neutral wire", "Earth wire", "None"],
    answer: "Live wire"
  },
  {
    question: "Which wire is blue in a 3-pin plug?",
    options: ["Neutral wire", "Live wire", "Earth wire", "Hot wire"],
    answer: "Neutral wire"
  },
  {
    question: "Which wire is green and yellow in a 3-pin plug?",
    options: ["Earth wire", "Live wire", "Neutral wire", "Positive wire"],
    answer: "Earth wire"
  },
  {
    question: "The electricity supply voltage in Ghana is?",
    options: ["230V", "110V", "12V", "400V"],
    answer: "230V"
  },
  {
    question: "Heat energy is transferred from one body to another due to a difference in?",
    options: ["Temperature", "Pressure", "Mass", "Volume"],
    answer: "Temperature"
  },
  {
    question: "The SI unit of heat is?",
    options: ["Joule", "Calorie", "Kelvin", "Watt"],
    answer: "Joule"
  },
  {
    question: "The SI unit of temperature is?",
    options: ["Kelvin", "Celsius", "Fahrenheit", "Degree"],
    answer: "Kelvin"
  },
  {
    question: "Heat transfer through solids is called?",
    options: ["Conduction", "Convection", "Radiation", "Fusion"],
    answer: "Conduction"
  },
  {
    question: "Heat transfer through fluids is called?",
    options: ["Convection", "Conduction", "Radiation", "Evaporation"],
    answer: "Convection"
  },
  {
    question: "Heat transfer without a medium is called?",
    options: ["Radiation", "Conduction", "Convection", "Evaporation"],
    answer: "Radiation"
  },
  {
    question: "The instrument used to measure temperature is?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Manometer"],
    answer: "Thermometer"
  },
  {
    question: "Which thermometer is used in laboratories?",
    options: ["Mercury thermometer", "Clinical thermometer", "Alcohol thermometer", "Digital thermometer"],
    answer: "Mercury thermometer"
  },
  {
    question: "Which thermometer is used to measure body temperature?",
    options: ["Clinical thermometer", "Laboratory thermometer", "Alcohol thermometer", "Thermocouple"],
    answer: "Clinical thermometer"
  },
  {
    question: "The normal body temperature in Celsius is?",
    options: ["37°C", "100°C", "0°C", "25°C"],
    answer: "37°C"
  },
  {
    question: "The boiling point of water in Celsius is?",
    options: ["100°C", "0°C", "50°C", "25°C"],
    answer: "100°C"
  },
  {
    question: "The freezing point of water in Celsius is?",
    options: ["0°C", "100°C", "25°C", "50°C"],
    answer: "0°C"
  },
  {
    question: "The boiling point of water in Kelvin is?",
    options: ["373 K", "273 K", "300 K", "273.15 K"],
    answer: "373 K"
  },
  {
    question: "Expansion occurs when a substance is?",
    options: ["Heated", "Cooled", "Broken", "Frozen"],
    answer: "Heated"
  },
  {
    question: "Which state of matter expands the most?",
    options: ["Gas", "Liquid", "Solid", "Plasma"],
    answer: "Gas"
  },
  {
    question: "Which state of matter expands the least?",
    options: ["Solid", "Gas", "Liquid", "Plasma"],
    answer: "Solid"
  },
  {
    question: "What happens to most materials when cooled?",
    options: ["They contract", "They expand", "They evaporate", "They condense"],
    answer: "They contract"
  },
  {
    question: "The change from solid to liquid is called?",
    options: ["Melting", "Condensation", "Evaporation", "Freezing"],
    answer: "Melting"
  },
  {
    question: "The change from liquid to gas is called?",
    options: ["Evaporation", "Freezing", "Melting", "Condensation"],
    answer: "Evaporation"
  },
  {
    question: "The change from gas to liquid is called?",
    options: ["Condensation", "Sublimation", "Evaporation", "Melting"],
    answer: "Condensation"
  },
  {
    question: "The change from liquid to solid is called?",
    options: ["Freezing", "Melting", "Boiling", "Condensation"],
    answer: "Freezing"
  },
  {
    question: "The change from solid directly to gas is?",
    options: ["Sublimation", "Melting", "Condensation", "Boiling"],
    answer: "Sublimation"
  },
  {
    question: "The heat required to change the state of a substance without temperature change is?",
    options: ["Latent heat", "Sensible heat", "Specific heat", "Thermal heat"],
    answer: "Latent heat"
  },
  {
    question: "The heat required to raise the temperature of a unit mass by 1°C is?",
    options: ["Specific heat capacity", "Latent heat", "Thermal energy", "Heat flux"],
    answer: "Specific heat capacity"
  },
  {
    question: "Metals are good conductors of heat because they contain?",
    options: ["Free electrons", "Tightly bound electrons", "Atoms", "Ions"],
    answer: "Free electrons"
  },
  {
    question: "The sun's heat reaches Earth by?",
    options: ["Radiation", "Conduction", "Convection", "Fusion"],
    answer: "Radiation"
  },
  {
    question: "A black surface is a good?",
    options: ["Absorber and emitter of heat", "Reflector of heat", "Insulator", "Conductor"],
    answer: "Absorber and emitter of heat"
  },
  {
    question: "A shiny white surface is a good?",
    options: ["Reflector of heat", "Emitter of heat", "Absorber of heat", "Insulator"],
    answer: "Reflector of heat"
  },
  {
    question: "In a liquid thermometer, what expands with heat?",
    options: ["Liquid column", "Glass tube", "Mercury vapor", "Metal spring"],
    answer: "Liquid column"
  },
  {
    question: "Which of the following expands uniformly?",
    options: ["Mercury", "Air", "Water", "Glass"],
    answer: "Mercury"
  },
  {
    question: "In a bimetallic strip, the two metals expand at?",
    options: ["Different rates", "Same rate", "Random rates", "No rate"],
    answer: "Different rates"
  },
  {
    question: "The bimetallic strip bends when heated because?",
    options: ["Different expansion of metals", "One melts", "They repel", "They fuse"],
    answer: "Different expansion of metals"
  },
  {
    question: "Which of the following liquids is used in very cold thermometers?",
    options: ["Alcohol", "Mercury", "Water", "Oil"],
    answer: "Alcohol"
  },
  {
    question: "Alcohol is used in thermometers because it?",
    options: ["Expands more than mercury", "Is denser", "Freezes easily", "Is a conductor"],
    answer: "Expands more than mercury"
  },
  {
    question: "The most accurate thermometer is the?",
    options: ["Thermocouple", "Clinical", "Mercury", "Alcohol"],
    answer: "Thermocouple"
  },
  {
    question: "Which thermometer responds quickly to temperature changes?",
    options: ["Alcohol thermometer", "Mercury thermometer", "Thermocouple", "Gas thermometer"],
    answer: "Alcohol thermometer"
  },
  {
    question: "Which part of a thermometer prevents mercury from going back after use?",
    options: ["Constriction", "Bulb", "Scale", "Tube"],
    answer: "Constriction"
  },
  {
    question: "Which part of a liquid-in-glass thermometer holds the liquid?",
    options: ["Bulb", "Tube", "Scale", "Stem"],
    answer: "Bulb"
  },
  {
    question: "What is the freezing point of mercury?",
    options: ["-39°C", "0°C", "-273°C", "-10°C"],
    answer: "-39°C"
  },
  {
    question: "What is the boiling point of mercury?",
    options: ["357°C", "100°C", "212°C", "500°C"],
    answer: "357°C"
  },
  {
    question: "Which of the following materials is best for cooking pots?",
    options: ["Aluminium", "Plastic", "Glass", "Wood"],
    answer: "Aluminium"
  },
  {
    question: "Good conductors of heat are used in?",
    options: ["Cooking utensils", "Blankets", "Curtains", "Hats"],
    answer: "Cooking utensils"
  },
  {
    question: "Poor conductors of heat are used in?",
    options: ["Handles of cooking utensils", "Electric wires", "Kettles", "Radiators"],
    answer: "Handles of cooking utensils"
  },
  {
    question: "Convection occurs due to?",
    options: ["Density differences", "Weight", "Shape", "Friction"],
    answer: "Density differences"
  },
  {
    question: "Which method of heat transfer is responsible for sea breeze?",
    options: ["Convection", "Conduction", "Radiation", "Reflection"],
    answer: "Convection"
  },
  {
    question: "Which part of the flame is the hottest?",
    options: ["Blue zone", "Yellow zone", "Dark zone", "Luminous zone"],
    answer: "Blue zone"
  },
  {
    question: "What type of heat transfer takes place in a vacuum flask?",
    options: ["Conduction, convection, radiation prevented", "Radiation only", "Conduction only", "Convection only"],
    answer: "Conduction, convection, radiation prevented"
  },
  {
    question: "What is the purpose of the vacuum in a vacuum flask?",
    options: ["To prevent heat loss", "To store air", "To make it light", "To increase pressure"],
    answer: "To prevent heat loss"
  },
  {
    question: "Waves transfer?",
    options: ["Energy", "Mass", "Particles", "Weight"],
    answer: "Energy"
  },
  {
    question: "A wave in which particles vibrate perpendicular to direction of propagation is?",
    options: ["Transverse wave", "Longitudinal wave", "Sound wave", "Radio wave"],
    answer: "Transverse wave"
  },
  {
    question: "A wave in which particles vibrate parallel to direction of propagation is?",
    options: ["Longitudinal wave", "Transverse wave", "Light wave", "Electromagnetic wave"],
    answer: "Longitudinal wave"
  },
  {
    question: "Which of the following is a transverse wave?",
    options: ["Light", "Sound", "Ultrasound", "Seismic P-wave"],
    answer: "Light"
  },
  {
    question: "Which of the following is a longitudinal wave?",
    options: ["Sound", "Light", "Water wave", "Radio wave"],
    answer: "Sound"
  },
  {
    question: "The highest point of a transverse wave is called?",
    options: ["Crest", "Trough", "Amplitude", "Wavelength"],
    answer: "Crest"
  },
  {
    question: "The lowest point of a transverse wave is called?",
    options: ["Trough", "Crest", "Node", "Peak"],
    answer: "Trough"
  },
  {
    question: "The distance between two crests is called?",
    options: ["Wavelength", "Amplitude", "Frequency", "Wave speed"],
    answer: "Wavelength"
  },
  {
    question: "The number of waves produced per second is called?",
    options: ["Frequency", "Wavelength", "Period", "Amplitude"],
    answer: "Frequency"
  },
  {
    question: "The unit of frequency is?",
    options: ["Hertz", "Second", "Watt", "Newton"],
    answer: "Hertz"
  },
  {
    question: "The time taken to complete one wave is called?",
    options: ["Period", "Frequency", "Amplitude", "Cycle"],
    answer: "Period"
  },
  {
    question: "The unit of period is?",
    options: ["Second", "Hertz", "Meter", "Watt"],
    answer: "Second"
  },
  {
    question: "The maximum displacement of particles in a wave is?",
    options: ["Amplitude", "Wavelength", "Frequency", "Phase"],
    answer: "Amplitude"
  },
  {
    question: "The speed of a wave is the product of?",
    options: ["Frequency and wavelength", "Amplitude and period", "Wavelength and period", "Frequency and amplitude"],
    answer: "Frequency and wavelength"
  },
  {
    question: "Which of these waves can travel through a vacuum?",
    options: ["Light", "Sound", "Water waves", "Mechanical waves"],
    answer: "Light"
  },
  {
    question: "Sound cannot travel through?",
    options: ["Vacuum", "Air", "Water", "Steel"],
    answer: "Vacuum"
  },
  {
    question: "Which of the following is not a property of sound?",
    options: ["Transparency", "Pitch", "Loudness", "Quality"],
    answer: "Transparency"
  },
  {
    question: "The pitch of a sound depends on its?",
    options: ["Frequency", "Amplitude", "Wavelength", "Velocity"],
    answer: "Frequency"
  },
  {
    question: "The loudness of a sound depends on its?",
    options: ["Amplitude", "Frequency", "Pitch", "Wavelength"],
    answer: "Amplitude"
  },
  {
    question: "The persistence of sound after the source has stopped is called?",
    options: ["Echo", "Noise", "Vibration", "Frequency"],
    answer: "Echo"
  },
  {
    question: "An echo is best heard when the reflecting surface is at least?",
    options: ["17 meters", "10 meters", "5 meters", "50 meters"],
    answer: "17 meters"
  },
  {
    question: "The reflection of sound is called?",
    options: ["Echo", "Rebound", "Bounce", "Deflection"],
    answer: "Echo"
  },
  {
    question: "The bouncing back of a wave at a boundary is called?",
    options: ["Reflection", "Refraction", "Diffraction", "Absorption"],
    answer: "Reflection"
  },
  {
    question: "The bending of a wave as it passes from one medium to another is?",
    options: ["Refraction", "Reflection", "Diffraction", "Interference"],
    answer: "Refraction"
  },
  {
    question: "Which of the following is used to measure the speed of sound?",
    options: ["Echo method", "Thermometer", "Barometer", "Hydrometer"],
    answer: "Echo method"
  },
  {
    question: "A mirror that curves inward is called?",
    options: ["Concave mirror", "Convex mirror", "Plane mirror", "Spherical mirror"],
    answer: "Concave mirror"
  },
  {
    question: "A mirror that curves outward is called?",
    options: ["Convex mirror", "Concave mirror", "Plane mirror", "Spherical mirror"],
    answer: "Convex mirror"
  },
  {
    question: "The image formed by a plane mirror is?",
    options: ["Virtual and upright", "Real and inverted", "Magnified", "Diminished"],
    answer: "Virtual and upright"
  },
  {
    question: "The line perpendicular to a mirror surface is called?",
    options: ["Normal", "Tangent", "Radius", "Focus"],
    answer: "Normal"
  },
  {
    question: "The angle between the incident ray and the mirror is called?",
    options: ["Angle of incidence", "Angle of reflection", "Refraction angle", "Critical angle"],
    answer: "Angle of incidence"
  },
  {
    question: "The angle of incidence is equal to?",
    options: ["Angle of reflection", "Refractive index", "Critical angle", "Deviation"],
    answer: "Angle of reflection"
  },
  {
    question: "The mirror used by dentists is a?",
    options: ["Concave mirror", "Plane mirror", "Convex mirror", "Flat mirror"],
    answer: "Concave mirror"
  },
  {
    question: "A magnifying glass uses which lens?",
    options: ["Convex lens", "Concave lens", "Flat lens", "Cylindrical lens"],
    answer: "Convex lens"
  },
  {
    question: "Which lens is used to correct short sight?",
    options: ["Concave lens", "Convex lens", "Biconvex lens", "Plano-concave lens"],
    answer: "Concave lens"
  },
  {
    question: "Which lens is used to correct long sight?",
    options: ["Convex lens", "Concave lens", "Cylindrical lens", "Plano-concave lens"],
    answer: "Convex lens"
  },
  {
    question: "The splitting of white light into colors is called?",
    options: ["Dispersion", "Diffraction", "Reflection", "Refraction"],
    answer: "Dispersion"
  },
  {
    question: "Which color is refracted the most in dispersion?",
    options: ["Violet", "Red", "Green", "Blue"],
    answer: "Violet"
  },
  {
    question: "Which color is refracted the least in dispersion?",
    options: ["Red", "Violet", "Blue", "Indigo"],
    answer: "Red"
  },
  {
    question: "The speed of light in vacuum is?",
    options: ["3 x 10? m/s", "3 x 10? m/s", "3 x 10? m/s", "3 x 10? m/s"],
    answer: "3 x 10? m/s"
  },
  {
    question: "The type of lens that converges light rays is?",
    options: ["Convex lens", "Concave lens", "Cylindrical lens", "Flat lens"],
    answer: "Convex lens"
  },
  {
    question: "The type of lens that diverges light rays is?",
    options: ["Concave lens", "Convex lens", "Biconvex lens", "Cylindrical lens"],
    answer: "Concave lens"
  },
  {
    question: "Which of these materials disperses light?",
    options: ["Prism", "Mirror", "Glass slab", "Lens"],
    answer: "Prism"
  },
  {
    question: "The center of a lens is called the?",
    options: ["Optical center", "Focal point", "Principal axis", "Vertex"],
    answer: "Optical center"
  },
  {
    question: "The principal focus of a convex lens is the point where?",
    options: ["Rays converge", "Rays diverge", "Rays reflect", "Rays split"],
    answer: "Rays converge"
  },
  {
    question: "The unit of focal length is?",
    options: ["Meter", "Diopter", "Hertz", "Candela"],
    answer: "Meter"
  },
  {
    question: "Which lens is thinner at the center than at the edges?",
    options: ["Concave lens", "Convex lens", "Prism", "Cylindrical lens"],
    answer: "Concave lens"
  },
  {
    question: "Which lens is thicker at the center than at the edges?",
    options: ["Convex lens", "Concave lens", "Prism", "Cylindrical lens"],
    answer: "Convex lens"
  },
  {
    question: "Electric current is the flow of?",
    options: ["Electrons", "Protons", "Neutrons", "Atoms"],
    answer: "Electrons"
  },
  {
    question: "The unit of electric current is?",
    options: ["Ampere", "Volt", "Ohm", "Coulomb"],
    answer: "Ampere"
  },
  {
    question: "The device used to measure current is?",
    options: ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
    answer: "Ammeter"
  },
  {
    question: "The unit of voltage is?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answer: "Volt"
  },
  {
    question: "The device used to measure voltage is?",
    options: ["Voltmeter", "Ammeter", "Thermometer", "Galvanometer"],
    answer: "Voltmeter"
  },
  {
    question: "The unit of resistance is?",
    options: ["Ohm", "Volt", "Ampere", "Watt"],
    answer: "Ohm"
  },
  {
    question: "The device used to measure resistance is?",
    options: ["Ohmmeter", "Voltmeter", "Ammeter", "Thermometer"],
    answer: "Ohmmeter"
  },
  {
    question: "Ohmâ's law states that voltage is directly proportional to?",
    options: ["Current", "Resistance", "Power", "Charge"],
    answer: "Current"
  },
  {
    question: "The formula for Ohmâ's law is?",
    options: ["V = IR", "V = I/R", "V = R/I", "V = IR²"],
    answer: "V = IR"
  },
  {
    question: "In a series circuit, the current is?",
    options: ["Same throughout", "Different at each point", "Zero", "Maximum at the start"],
    answer: "Same throughout"
  },
  {
    question: "In a parallel circuit, the voltage across each branch is?",
    options: ["Same", "Different", "Half", "Zero"],
    answer: "Same"
  },
  {
    question: "In a series circuit, total resistance is?",
    options: ["Sum of all resistors", "Product of resistors", "Lowest resistor", "Highest resistor"],
    answer: "Sum of all resistors"
  },
  {
    question: "In a parallel circuit, total resistance is?",
    options: ["Less than the least resistor", "Sum of all resistors", "Product of resistors", "Greater than largest resistor"],
    answer: "Less than the least resistor"
  },
  {
    question: "Electrical power is calculated as?",
    options: ["P = IV", "P = I/V", "P = V/R", "P = I²R"],
    answer: "P = IV"
  },
  {
    question: "The unit of power is?",
    options: ["Watt", "Joule", "Volt", "Ohm"],
    answer: "Watt"
  },
  {
    question: "The energy consumed in 1 hour by a 1000W appliance is?",
    options: ["1 kWh", "1000 J", "100 J", "10 kWh"],
    answer: "1 kWh"
  },
  {
    question: "The main source of electricity in homes is?",
    options: ["Alternating current", "Direct current", "Solar cell", "Battery"],
    answer: "Alternating current"
  },
  {
    question: "A fuse is used to?",
    options: ["Protect appliances from excess current", "Supply electricity", "Store charge", "Generate power"],
    answer: "Protect appliances from excess current"
  },
  {
    question: "A short circuit occurs when?",
    options: ["Current flows through a low resistance path", "There is no power", "The fuse is broken", "Battery is dead"],
    answer: "Current flows through a low resistance path"
  },
  {
    question: "The earth wire is used to?",
    options: ["Prevent electric shocks", "Generate power", "Increase current", "Measure voltage"],
    answer: "Prevent electric shocks"
  },
  {
    question: "The live wire in a three-pin plug is usually colored?",
    options: ["Brown", "Blue", "Green", "Yellow"],
    answer: "Brown"
  },
  {
    question: "The neutral wire in a three-pin plug is usually colored?",
    options: ["Blue", "Brown", "Green", "Red"],
    answer: "Blue"
  },
  {
    question: "The earth wire in a three-pin plug is usually colored?",
    options: ["Green/yellow", "Red", "Blue", "Black"],
    answer: "Green/yellow"
  },
  {
    question: "A device that converts chemical energy to electrical energy is a?",
    options: ["Battery", "Resistor", "Capacitor", "Transformer"],
    answer: "Battery"
  },
  {
    question: "Which of these stores electric charge?",
    options: ["Capacitor", "Resistor", "Battery", "Conductor"],
    answer: "Capacitor"
  },
  {
    question: "Which material is a good conductor of electricity?",
    options: ["Copper", "Wood", "Plastic", "Rubber"],
    answer: "Copper"
  },
  {
    question: "Which material is an insulator?",
    options: ["Rubber", "Aluminum", "Silver", "Iron"],
    answer: "Rubber"
  },
  {
    question: "A magnet has two poles:?",
    options: ["North and South", "East and West", "Positive and Negative", "Up and Down"],
    answer: "North and South"
  },
  {
    question: "Like poles of a magnet?",
    options: ["Repel", "Attract", "Stick together", "Become neutral"],
    answer: "Repel"
  },
  {
    question: "Unlike poles of a magnet?",
    options: ["Attract", "Repel", "Have no effect", "Bounce"],
    answer: "Attract"
  },
  {
    question: "Magnetic field lines move from?",
    options: ["North to South", "South to North", "East to West", "Negative to Positive"],
    answer: "North to South"
  },
  {
    question: "Magnetic materials include?",
    options: ["Iron", "Plastic", "Wood", "Rubber"],
    answer: "Iron"
  },
  {
    question: "The region around a magnet where force is felt is the?",
    options: ["Magnetic field", "Electric field", "Force field", "Current area"],
    answer: "Magnetic field"
  },
  {
    question: "Electromagnetism is the interaction between?",
    options: ["Electricity and magnetism", "Heat and magnetism", "Light and sound", "Gravity and electricity"],
    answer: "Electricity and magnetism"
  },
  {
    question: "An electromagnet can be made using?",
    options: ["Coil of wire and iron core", "Battery and bulb", "Magnet and compass", "Plastic and rubber"],
    answer: "Coil of wire and iron core"
  },
  {
    question: "Increasing current in a coil increases?",
    options: ["Magnetic strength", "Voltage", "Resistance", "Temperature"],
    answer: "Magnetic strength"
  },
  {
    question: "A device that converts electrical energy to mechanical energy is?",
    options: ["Electric motor", "Generator", "Transformer", "Battery"],
    answer: "Electric motor"
  },
  {
    question: "A device that converts mechanical energy to electrical energy is?",
    options: ["Generator", "Motor", "Transformer", "Capacitor"],
    answer: "Generator"
  },
  {
    question: "Electric motors work on the principle of?",
    options: ["Electromagnetism", "Thermodynamics", "Optics", "Nuclear fusion"],
    answer: "Electromagnetism"
  },
  {
    question: "Generators work on the principle of?",
    options: ["Electromagnetic induction", "Reflection", "Heat conduction", "Refraction"],
    answer: "Electromagnetic induction"
  },
  {
    question: "Transformer is used to?",
    options: ["Change voltage", "Change current to AC", "Measure current", "Store electricity"],
    answer: "Change voltage"
  },
  {
    question: "A step-up transformer increases?",
    options: ["Voltage", "Current", "Resistance", "Power loss"],
    answer: "Voltage"
  },
  {
    question: "A step-down transformer decreases?",
    options: ["Voltage", "Current", "Resistance", "Power"],
    answer: "Voltage"
  },
  {
    question: "The transformer works only with?",
    options: ["Alternating current", "Direct current", "Solar energy", "Magnetic field"],
    answer: "Alternating current"
  },
  {
    question: "Which of these is not a component of a simple electric circuit?",
    options: ["Motor", "Bulb", "Battery", "Magnet"],
    answer: "Magnet"
  },
  {
    question: "A galvanometer is used to?",
    options: ["Detect small currents", "Measure voltage", "Store charge", "Resist flow"],
    answer: "Detect small currents"
  },
  {
    question: "A device that opens a circuit automatically when current is too high is a?",
    options: ["Circuit breaker", "Transformer", "Battery", "Capacitor"],
    answer: "Circuit breaker"
  },
  {
    question: "Which particle has a negative charge?",
    options: ["Electron", "Proton", "Neutron", "Nucleus"],
    answer: "Electron"
  },
  {
    question: "The central part of an atom is the?",
    options: ["Nucleus", "Electron", "Shell", "Proton"],
    answer: "Nucleus"
  },
  {
    question: "Which particle is found in the nucleus of an atom?",
    options: ["Proton", "Electron", "Photon", "Quark"],
    answer: "Proton"
  },
  {
    question: "Neutrons are particles with?",
    options: ["No charge", "Positive charge", "Negative charge", "Double charge"],
    answer: "No charge"
  },
  {
    question: "Isotopes are atoms with the same atomic number but different?",
    options: ["Mass number", "Charge", "Shells", "Size"],
    answer: "Mass number"
  },
  {
    question: "Radioactivity is the spontaneous emission of?",
    options: ["Radiation from unstable nuclei", "Light from sun", "Heat from reaction", "Sound from atom"],
    answer: "Radiation from unstable nuclei"
  },
  {
    question: "Alpha particles have a charge of?",
    options: ["+2", "+1", "-1", "0"],
    answer: "+2"
  },
  {
    question: "Beta particles are similar to?",
    options: ["Electrons", "Protons", "Neutrons", "Photons"],
    answer: "Electrons"
  },
  {
    question: "Gamma rays are?",
    options: ["Electromagnetic waves", "Charged particles", "Light particles", "Atoms"],
    answer: "Electromagnetic waves"
  },
  {
    question: "Which radiation has the highest penetrating power?",
    options: ["Gamma", "Alpha", "Beta", "Infrared"],
    answer: "Gamma"
  },
  {
    question: "Which radiation is stopped by paper?",
    options: ["Alpha", "Beta", "Gamma", "X-ray"],
    answer: "Alpha"
  },
  {
    question: "Which radiation is stopped by aluminum?",
    options: ["Beta", "Alpha", "Gamma", "Neutron"],
    answer: "Beta"
  },
  {
    question: "Which radiation is only reduced by thick lead?",
    options: ["Gamma", "Alpha", "Beta", "Ultraviolet"],
    answer: "Gamma"
  },
  {
    question: "Nuclear fission is the?",
    options: ["Splitting of nucleus", "Joining of atoms", "Decay of atoms", "Production of light"],
    answer: "Splitting of nucleus"
  },
  {
    question: "Nuclear fusion occurs when?",
    options: ["Nuclei join", "Electrons jump", "Atoms decay", "Protons split"],
    answer: "Nuclei join"
  },
  {
    question: "Semiconductors include?",
    options: ["Silicon", "Iron", "Copper", "Plastic"],
    answer: "Silicon"
  },
  {
    question: "A diode allows current to flow in?",
    options: ["One direction", "Both directions", "No direction", "All directions"],
    answer: "One direction"
  },
  {
    question: "An LED is a diode that emits?",
    options: ["Light", "Sound", "Heat", "Electricity"],
    answer: "Light"
  },
  {
    question: "The device that stores electric charge temporarily is?",
    options: ["Capacitor", "Battery", "Diode", "Resistor"],
    answer: "Capacitor"
  },
  {
    question: "A transistor is used to?",
    options: ["Amplify signals", "Store data", "Convert energy", "Generate heat"],
    answer: "Amplify signals"
  },
  {
    question: "Logic gates are used in?",
    options: ["Computers", "Fans", "Motors", "Generators"],
    answer: "Computers"
  },
  {
    question: "The basic logic gates are?",
    options: ["AND, OR, NOT", "Add, Subtract, Multiply", "High, Low, Medium", "XOR, NAND, NOR"],
    answer: "AND, OR, NOT"
  },
  {
    question: "Which gate gives output only if both inputs are 1?",
    options: ["AND", "OR", "NOT", "XOR"],
    answer: "AND"
  },
  {
    question: "Which gate gives output if at least one input is 1?",
    options: ["OR", "AND", "NOT", "NAND"],
    answer: "OR"
  },
  {
    question: "Which gate inverts the input?",
    options: ["NOT", "AND", "OR", "XOR"],
    answer: "NOT"
  },
  {
    question: "Which energy source is renewable?",
    options: ["Solar", "Coal", "Petrol", "Diesel"],
    answer: "Solar"
  },
  {
    question: "Which energy source is non-renewable?",
    options: ["Petroleum", "Wind", "Hydro", "Solar"],
    answer: "Petroleum"
  },
  {
    question: "A Geiger-MÃ¼ller tube is used to?",
    options: ["Detect radiation", "Produce energy", "Store charge", "Measure voltage"],
    answer: "Detect radiation"
  },
  {
    question: "Which of the following is a hazard of radiation?",
    options: ["Cancer", "Fever", "Cold", "Fatigue"],
    answer: "Cancer"
  },
  {
    question: "X-rays are used in?",
    options: ["Medical diagnosis", "Cooking", "Farming", "Banking"],
    answer: "Medical diagnosis"
  },
  {
    question: "Radioactive tracers are used in?",
    options: ["Medicine", "Banking", "Farming", "Construction"],
    answer: "Medicine"
  },
  {
    question: "The speed of light in vacuum is?",
    options: ["3 x 10^8 m/s", "3 x 10^6 m/s", "3 x 10^4 m/s", "3 x 10^2 m/s"],
    answer: "3 x 10^8 m/s"
  },
  {
    question: "Electrons revolve around the nucleus in?",
    options: ["Shells", "Nucleus", "Protons", "Neutrons"],
    answer: "Shells"
  },
  {
    question: "The nucleus contains?",
    options: ["Protons and neutrons", "Electrons only", "Neutrons only", "Shells only"],
    answer: "Protons and neutrons"
  },
  {
    question: "Atomic number is the number of?",
    options: ["Protons", "Neutrons", "Electrons", "Nuclei"],
    answer: "Protons"
  },
  {
    question: "Mass number is the sum of?",
    options: ["Protons and neutrons", "Electrons and protons", "Neutrons and electrons", "Atoms and ions"],
    answer: "Protons and neutrons"
  },
  {
    question: "Which of these is a nuclear reaction?",
    options: ["Fission", "Combustion", "Melting", "Boiling"],
    answer: "Fission"
  },
  {
    question: "A device that produces electricity from sunlight is a?",
    options: ["Solar cell", "Battery", "Capacitor", "Dynamo"],
    answer: "Solar cell"
  },
  {
    question: "The charge on a proton is?",
    options: ["+1", "-1", "0", "+2"],
    answer: "+1"
  },
  {
    question: "The charge on an electron is?",
    options: ["-1", "+1", "0", "-2"],
    answer: "-1"
  },
  {
    question: "The charge on a neutron is?",
    options: ["0", "+1", "-1", "-2"],
    answer: "0"
  },
  {
    question: "Which subatomic particle is responsible for chemical bonding?",
    options: ["Electron", "Proton", "Neutron", "Nucleus"],
    answer: "Electron"
  },
  {
    question: "Which type of radiation causes the most ionization?",
    options: ["Alpha", "Beta", "Gamma", "X-ray"],
    answer: "Alpha"
  },
  {
    question: "Which logic gate is the opposite of AND?",
    options: ["NAND", "OR", "NOT", "XOR"],
    answer: "NAND"
  },
  {
    question: "Which logic gate is the opposite of OR?",
    options: ["NOR", "AND", "NOT", "XOR"],
    answer: "NOR"
  },
  {
    question: "Which logic gate gives output when inputs are different?",
    options: ["XOR", "AND", "OR", "NOT"],
    answer: "XOR"
  },
  {
    question: "Radioactivity was discovered by?",
    options: ["Henri Becquerel", "Newton", "Einstein", "Rutherford"],
    answer: "Henri Becquerel"
  },
  {
    question: "The half-life of a radioactive substance is the time for?",
    options: ["Half atoms to decay", "All atoms to decay", "Atoms to stop moving", "Radiation to stop"],
    answer: "Half atoms to decay"
  },
  {
    question: "Which of the following is a vector quantity?",
    options: ["Velocity", "Speed", "Distance", "Mass"],
    answer: "Velocity"
  },
  {
    question: "Which physical quantity is measured in joules?",
    options: ["Work", "Force", "Power", "Mass"],
    answer: "Work"
  },
  {
    question: "A machine that makes work easier is called a?",
    options: ["Simple machine", "Motor", "Engine", "Pulley"],
    answer: "Simple machine"
  },
  {
    question: "Work done is zero when?",
    options: ["Displacement is zero", "Force is large", "Object moves", "Force is applied"],
    answer: "Displacement is zero"
  },
  {
    question: "The slope of a velocity-time graph gives?",
    options: ["Acceleration", "Distance", "Speed", "Work"],
    answer: "Acceleration"
  },
  {
    question: "The area under a velocity-time graph represents?",
    options: ["Displacement", "Acceleration", "Speed", "Work"],
    answer: "Displacement"
  },
  {
    question: "Which of the following is NOT a renewable energy source?",
    options: ["Natural gas", "Solar", "Wind", "Hydro"],
    answer: "Natural gas"
  },
  {
    question: "Which device converts electrical energy to mechanical energy?",
    options: ["Motor", "Generator", "Battery", "Switch"],
    answer: "Motor"
  },
  {
    question: "Which device converts mechanical energy to electrical energy?",
    options: ["Generator", "Motor", "Battery", "Resistor"],
    answer: "Generator"
  },
  {
    question: "The center of gravity of a regular object lies at its?",
    options: ["Geometric center", "Base", "Top", "Corner"],
    answer: "Geometric center"
  },
  {
    question: "The most stable shape is?",
    options: ["Wide base and low center of gravity", "Narrow base and high center of gravity", "Tall and narrow", "Round and small"],
    answer: "Wide base and low center of gravity"
  },
  {
    question: "What instrument is used to measure pressure?",
    options: ["Manometer", "Thermometer", "Voltmeter", "Ammeter"],
    answer: "Manometer"
  },
  {
    question: "The SI unit of pressure is?",
    options: ["Pascal", "Newton", "Joule", "Watt"],
    answer: "Pascal"
  },
  {
    question: "In which medium does sound travel fastest?",
    options: ["Solid", "Liquid", "Gas", "Vacuum"],
    answer: "Solid"
  },
  {
    question: "Sound cannot travel through?",
    options: ["Vacuum", "Air", "Water", "Iron"],
    answer: "Vacuum"
  },
  {
    question: "The persistence of sound after the source stops is called?",
    options: ["Echo", "Resonance", "Refraction", "Diffraction"],
    answer: "Echo"
  },
  {
    question: "Which electromagnetic wave has the shortest wavelength?",
    options: ["Gamma rays", "Radio waves", "Microwaves", "Infrared"],
    answer: "Gamma rays"
  },
  {
    question: "Which of these is NOT an electromagnetic wave?",
    options: ["Sound wave", "X-ray", "Infrared", "Microwave"],
    answer: "Sound wave"
  },
  {
    question: "Which type of mirror is used in car side mirrors?",
    options: ["Convex", "Concave", "Plane", "Parabolic"],
    answer: "Convex"
  },
  {
    question: "What is used to store electric charge?",
    options: ["Capacitor", "Resistor", "Transistor", "Conductor"],
    answer: "Capacitor"
  },
  {
    question: "Which device reduces voltage in a circuit?",
    options: ["Resistor", "Transformer", "Diode", "Inductor"],
    answer: "Transformer"
  },
  {
    question: "Which law explains the floating of ships?",
    options: ["Archimedesâ' Principle", "Hookeâ's Law", "Newtonâ's 3rd Law", "Ohmâ's Law"],
    answer: "Archimedesâ' Principle"
  },
  {
    question: "What determines the pitch of a sound?",
    options: ["Frequency", "Amplitude", "Wavelength", "Speed"],
    answer: "Frequency"
  },
  {
    question: "Which color of light is bent the most in a prism?",
    options: ["Violet", "Red", "Green", "Yellow"],
    answer: "Violet"
  },
  {
    question: "Why does a coin in water appear closer?",
    options: ["Refraction", "Reflection", "Diffraction", "Absorption"],
    answer: "Refraction"
  },
  {
    question: "Which gas is most used in electric bulbs?",
    options: ["Argon", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Argon"
  },
  {
    question: "Which particle is responsible for current in metals?",
    options: ["Electrons", "Protons", "Neutrons", "Photons"],
    answer: "Electrons"
  },
  {
    question: "Which planet has the strongest gravity?",
    options: ["Jupiter", "Earth", "Mars", "Venus"],
    answer: "Jupiter"
  },
  {
    question: "What causes tides on Earth?",
    options: ["Moonâ's gravity", "Sunlight", "Wind", "Clouds"],
    answer: "Moonâ's gravity"
  },
  {
    question: "The unit of electric current is?",
    options: ["Ampere", "Volt", "Ohm", "Watt"],
    answer: "Ampere"
  },
  {
    question: "The unit of resistance is?",
    options: ["Ohm", "Ampere", "Volt", "Watt"],
    answer: "Ohm"
  },
  {
    question: "The unit of power is?",
    options: ["Watt", "Volt", "Ampere", "Ohm"],
    answer: "Watt"
  },
  {
    question: "What is the function of a fuse?",
    options: ["Protects circuit from excess current", "Stores energy", "Amplifies current", "Lowers voltage"],
    answer: "Protects circuit from excess current"
  },
  {
    question: "What type of motion does a pendulum perform?",
    options: ["Oscillatory", "Rotational", "Linear", "Curvilinear"],
    answer: "Oscillatory"
  },
  {
    question: "Heat transfer through a fluid is called?",
    options: ["Convection", "Conduction", "Radiation", "Diffusion"],
    answer: "Convection"
  },
  {
    question: "Heat transfer through solids is called?",
    options: ["Conduction", "Convection", "Radiation", "Evaporation"],
    answer: "Conduction"
  },
  {
    question: "Which wave requires a medium?",
    options: ["Sound wave", "Light wave", "Radio wave", "Gamma ray"],
    answer: "Sound wave"
  },
  {
    question: "Which wave doesnâ't need a medium?",
    options: ["Light", "Sound", "Water", "Seismic"],
    answer: "Light"
  },
  {
    question: "Which law explains how rockets move?",
    options: ["Newtonâ's 3rd Law", "Newtonâ's 1st Law", "Hookeâ's Law", "Ohmâ's Law"],
    answer: "Newtonâ's 3rd Law"
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo", "Faraday"],
    answer: "Albert Einstein"
  },
  {
    question: "The formula E = mc² relates energy and?",
    options: ["Mass", "Velocity", "Distance", "Time"],
    answer: "Mass"
  },
  {
    question: "Which scientist discovered radioactivity?",
    options: ["Henri Becquerel", "Einstein", "Newton", "Galileo"],
    answer: "Henri Becquerel"
  },
  {
    question: "Which instrument measures electric current?",
    options: ["Ammeter", "Voltmeter", "Ohmmeter", "Barometer"],
    answer: "Ammeter"
  },
  {
    question: "An object will float in a fluid if its density is?",
    options: ["Less than the fluid", "Greater than the fluid", "Equal to the fluid", "Zero"],
    answer: "Less than the fluid"
  },
  {
    question: "A 100 W bulb uses how much energy in 1 hour?",
    options: ["100 Wh", "1 kWh", "10 Wh", "0.1 Wh"],
    answer: "100 Wh"
  },
  {
    question: "An object moving at constant velocity has?",
    options: ["Zero acceleration", "Increasing speed", "Negative acceleration", "Constant force"],
    answer: "Zero acceleration"
  },
  {
    question: "What type of lens is used to correct short-sightedness?",
    options: ["Concave", "Convex", "Plano", "Cylindrical"],
    answer: "Concave"
  },
  {
    question: "Which mirror converges light rays?",
    options: ["Concave", "Convex", "Plane", "Parabolic"],
    answer: "Concave"
  },
  {
    question: "Which mirror diverges light rays?",
    options: ["Convex", "Concave", "Plane", "Cylindrical"],
    answer: "Convex"
  },
  {
    question: "What is the source of the sun's energy?",
    options: ["Nuclear fusion", "Combustion", "Radiation", "Gravity"],
    answer: "Nuclear fusion"
  }
];

export default physicsQuestions;









