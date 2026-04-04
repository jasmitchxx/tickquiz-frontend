const coreMathsQuestions = [
  {
    question: "Which of the following represents the union of sets A = {1, 2, 3} and B = {3, 4, 5}?", image: null,
    options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2, 3}", "{4, 5}"],
    answer: "{1, 2, 3, 4, 5}"
  },
  {
    question: "Simplify: ?50 + ?18", image: null,
    options: ["?68", "8?2", "?25 + ?9", "5?5 + 3?2"],
    answer: "8?2"
  },
  {
    question: "Solve for x: 2^x = 32", image: null,
    options: ["4", "5", "6", "2"],
    answer: "5"
  },
  {
    question: "Which of the following is the correct factorization of x² - 5x + 6?", image: null,
    options: ["(x + 2)(x + 3)", "(x - 2)(x - 3)", "(x + 1)(x - 6)", "(x - 1)(x - 6)"],
    answer: "(x - 2)(x - 3)"
  },
  {
    question: "If vector a = 2i + 3j and vector b = -i + 4j, find a + b.", image: null,
    options: ["i + 7j", "i + j", "3i + 7j", "i - j"],
    answer: "i + 7j"
  },
  {
    question: "Which of the following represents the union of sets A = {1, 2, 3} and B = {3, 4, 5}?", image: null,
    options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2, 3}", "{4, 5}"],
    answer: "{1, 2, 3, 4, 5}"
  },
  {
    question: "Simplify: ?50 + ?18", image: null,
    options: ["?68", "8?2", "?25 + ?9", "5?5 + 3?2"],
    answer: "8?2"
  },
  {
    question: "Convert the binary number 1011? to base 10.", image: null,
    options: ["13", "11", "9", "7"],
    answer: "11"
  },
  {
    question: "Solve the inequality: 2x - 5 > 3.", image: null,
    options: ["x > 4", "x < 4", "x > -1", "x < -1"],
    answer: "x > 4"
  },
  {
    question: "If a vector \u03B1 = 3i + 2j and \u03B2 = -i + 4j, find \u03B1 + \u03B2.", image: null,
    options: ["2i + 6j", "4i + 6j", "2i + 2j", "3i + 2j"],
    answer: "2i + 6j"
  },
  {
    question: "Find the mean of the numbers: 5, 10, 15, 20.", image: null,
    options: ["10", "12.5", "15", "20"],
    answer: "12.5"
  },

  // YEAR 2
  {
    question: "Solve for x: 3^x = 81.", image: null,
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    question: "Factorize the quadratic expression: x² - 7x + 10.", image: null,
    options: ["(x - 5)(x - 2)", "(x + 5)(x + 2)", "(x - 10)(x + 1)", "(x + 10)(x - 1)"],
    answer: "(x - 5)(x - 2)"
  },
  {
    question: "Find the volume of a cylinder with radius 4 cm and height 10 cm (Use \u03C0 = 3.14).", image: null,
    options: ["502.4 cm³", "125.6 cm³", "251.2 cm³", "400 cm³"],
    answer: "502.4 cm³"
  },
  {
    question: "If sin \u03B8 = 0.6, what is \u03B8 (in degrees)?", image: null,
    options: ["30°", "36.9°", "45°", "53.1°"],
    answer: "36.9°"
  },
  {
    question: "What is the next term in the arithmetic sequence: 3, 7, 11, 15, ...?", image: null,
    options: ["18", "19", "20", "21"],
    answer: "19"
  },

  {
    question: "What is the contrapositive of the statement: 'If it rains, then the ground is wet'?", image: null,
    options: [
      "If the ground is not wet, then it did not rain",
      "If it does not rain, the ground is not wet",
      "If the ground is wet, then it rains",
      "If it rains, then the ground is not wet"
    ],
    answer: "If the ground is not wet, then it did not rain"
  },
  {
    question: "Which instrument is primarily used for geometric constructions?", image: null,
    options: ["Protractor", "Ruler", "Compass", "Set square"],
    answer: "Compass"
  },
  {
    question: "Find tan 45°.", image: null,
    options: ["0", "1", "\u221E (infinity)", "\u221A3/3"],
    answer: "1"
  },
  // YEAR 1
  {
    question: "What is the union of sets A = {2, 4, 6} and B = {4, 5, 6}?", image: null,
    options: ["{2, 4, 5, 6}", "{4, 6}", "{2, 4, 6}", "{5}"],
    answer: "{2, 4, 5, 6}"
  },
  {
    question: "Which number is irrational?", image: null,
    options: ["3/4", "?2", "5", "0.5"],
    answer: "?2"
  },
  {
    question: "Simplify: (3x²)(2x³)", image: null,
    options: ["6x?", "5x?", "6x?", "5x?"],
    answer: "6x?"
  },
  {
    question: "Simplify ?72", image: null,
    options: ["6?2", "8?3", "9?2", "4?3"],
    answer: "6?2"
  },
  {
    question: "Convert 1101? to decimal (base 10).", image: null,
    options: ["11", "13", "14", "15"],
    answer: "13"
  },
  {
    question: "If f(x) = 2x + 3, what is f(4)?", image: null,
    options: ["7", "8", "11", "10"],
    answer: "11"
  },
  {
    question: "What is the sum of interior angles of a triangle?", image: null,
    options: ["180°", "360°", "90°", "270°"],
    answer: "180°"
  },
  {
    question: "Solve for x: 3x + 5 = 20", image: null,
    options: ["5", "6", "15", "25"],
    answer: "5"
  },
  {
    question: "A ship sails 45° NE from a point. What is the bearing?", image: null,
    options: ["045°", "135°", "225°", "315°"],
    answer: "045°"
  },
  {
    question: "Vector A = 4i + 3j. What is the magnitude of A?", image: null,
    options: ["5", "7", "1", "12"],
    answer: "5"
  },
  {
    question: "Find the median of the data set: 2, 7, 9, 12, 14.", image: null,
    options: ["7", "9", "10", "12"],
    answer: "9"
  },
  {
    question: "Which transformation is a rigid motion?", image: null,
    options: ["Dilation", "Rotation", "Enlargement", "Stretch"],
    answer: "Rotation"
  },
  {
    question: "If 3 kg of apples cost $12, what is the unit price per kg?", image: null,
    options: ["$3", "$4", "$6", "$9"],
    answer: "$4"
  },
  {
    question: "Calculate 15% of 200.", image: null,
    options: ["20", "25", "30", "35"],
    answer: "30"
  },

  // YEAR 2
  {
    question: "Find 7 mod 3.", image: null,
    options: ["1", "2", "0", "3"],
    answer: "1"
  },
  {
    question: "Solve for x: 5^x = 125.", image: null,
    options: ["2", "3", "4", "5"],
    answer: "3"
  },
  {
    question: "Solve the simultaneous equations: 2x + y = 8 and x - y = 1.", image: null,
    options: ["x=3, y=2", "x=2, y=4", "x=4, y=0", "x=1, y=6"],
    answer: "x=3, y=2"
  },
  {
    question: "If y varies directly as x and y=10 when x=2, find y when x=5.", image: null,
    options: ["25", "20", "30", "15"],
    answer: "25"
  },
  {
    question: "Find the mean of the data: 4, 8, 12, 16.", image: null,
    options: ["8", "10", "12", "14"],
    answer: "10"
  },
  {
    question: "Factorize x² - 9x + 18.", image: null,
    options: ["(x - 6)(x - 3)", "(x + 6)(x + 3)", "(x - 9)(x + 2)", "(x + 9)(x - 2)"],
    answer: "(x - 6)(x - 3)"
  },
  {
    question: "Find the area of a circle with radius 7 cm (\u03C0 = 3.14).", image: null,
    options: ["153.86 cm²", "49 cm²", "43.96 cm²", "100 cm²"],
    answer: "153.86 cm²"
  },
  {
    question: "Calculate cos 60°.", image: null,
    options: ["1", "0", "0.5", "0.866"],
    answer: "0.5"
  },
  {
    question: "Find the 6th term of the sequence: 2, 5, 8, 11, ...", image: null,
    options: ["15", "16", "17", "18"],
    answer: "17"
  },
  {
    question: "What is the scale factor of an enlargement that maps a shape of length 4 cm to 10 cm?", image: null,
    options: ["2.5", "6", "4", "10"],
    answer: "2.5"
  },

  {
    question: "Which tool is used for accurate geometric constructions?", image: null,
    options: ["Compass", "Protractor", "Ruler", "Set square"],
    answer: "Compass"
  },
  {
    question: "What is the contrapositive of: 'If it rains, the ground is wet'?", image: null,
    options: [
      "If the ground is not wet, then it did not rain",
      "If it does not rain, the ground is not wet",
      "If the ground is wet, then it rains",
      "If it rains, then the ground is not wet"
    ],
    answer: "If the ground is not wet, then it did not rain"
  },
  {
    question: "Calculate tan 45°.", image: null,
    options: ["0", "1", "\u221E (infinity)", "\u221A3/3"],
    answer: "1"
  },
  {
    question: "What is the sum of the interior angles of a pentagon?", image: null,
    options: ["540°", "360°", "720°", "180°"],
    answer: "540°"
  },
  {
    question: "Solve for x: 2x + 3 = 11", image: null,
    options: ["4", "5", "6", "7"],
    answer: "4"
  },
  // YEAR 1
  {
    question: "If A = {1, 3, 5} and B = {2, 3, 4}, what is A ? B?", image: null,
    options: ["{3}", "{1, 2, 3, 4, 5}", "{}","{2, 4}"],
    answer: "{3}"
  },
  {
    question: "Is the number 0.333... rational or irrational?", image: null,
    options: ["Rational", "Irrational"],
    answer: "Rational"
  },
  {
    question: "Simplify: (x^3)(x^4).", image: null,
    options: ["x^7", "x^12", "x^1", "x^0"],
    answer: "x^7"
  },
  {
    question: "Simplify ?98", image: null,
    options: ["7?2", "14?7", "49?2", "7?7"],
    answer: "7?2"
  },
  {
    question: "Convert 1001? to decimal.", image: null,
    options: ["9", "11", "7", "13"],
    answer: "9"
  },
  {
    question: "If f(x) = x² - 2, find f(3).", image: null,
    options: ["7", "9", "5", "3"],
    answer: "7"
  },
  {
    question: "What is the measure of each angle in an equilateral triangle?", image: null,
    options: ["60°", "90°", "45°", "30°"],
    answer: "60°"
  },
  {
    question: "Solve for x: 5x - 10 = 0", image: null,
    options: ["2", "0", "10", "-2"],
    answer: "2"
  },
  {
    question: "A plane flies 120° from north. What is the bearing?", image: null,
    options: ["120°", "240°", "60°", "300°"],
    answer: "120°"
  },
  {
    question: "Vector A = 5i - 2j. Find the magnitude of A.", image: null,
    options: ["?29", "7", "3", "6"],
    answer: "?29"
  },
  {
    question: "Find the mode of the data set: 3, 7, 7, 8, 9.", image: null,
    options: ["7", "8", "3", "9"],
    answer: "7"
  },
  {
    question: "Which is NOT a rigid motion?", image: null,
    options: ["Reflection", "Translation", "Enlargement", "Rotation"],
    answer: "Enlargement"
  },
  {
    question: "If 5 kg costs $30, what is the cost per kg?", image: null,
    options: ["$5", "$6", "$4", "$3"],
    answer: "$6"
  },
  {
    question: "Calculate 25% of 160.", image: null,
    options: ["40", "35", "50", "45"],
    answer: "40"
  },

  // YEAR 2
  {
    question: "Find 10 mod 4.", image: null,
    options: ["2", "3", "4", "1"],
    answer: "2"
  },
  {
    question: "Solve for x: 4^x = 64.", image: null,
    options: ["3", "4", "5", "6"],
    answer: "3"
  },
  {
    question: "Solve simultaneous equations: x + y = 5 and x - y = 1.", image: null,
    options: ["x=3, y=2", "x=2, y=3", "x=1, y=4", "x=4, y=1"],
    answer: "x=3, y=2"
  },
  {
    question: "If y varies inversely as x and y=6 when x=2, find y when x=3.", image: null,
    options: ["4", "3", "2", "1"],
    answer: "4"
  },
  {
    question: "Calculate the median of: 12, 15, 14, 16, 20.", image: null,
    options: ["15", "14", "16", "20"],
    answer: "15"
  },
  {
    question: "Factorize: x^2 + 7x + 12.", image: null,
    options: ["(x + 3)(x + 4)", "(x - 3)(x - 4)", "(x + 4)(x - 3)", "(x + 6)(x + 2)"],
    answer: "(x + 3)(x + 4)"
  },
  {
    question: "Find the surface area of a sphere with radius 3 cm (\u03C0 = 3.14).", image: null,
    options: ["113.04 cm²", "28.26 cm²", "56.52 cm²", "36 cm²"],
    answer: "113.04 cm²"
  },
  {
    question: "Calculate sin 45°.", image: null,
    options: ["0.707", "0.5", "1", "0"],
    answer: "0.707"
  },
  {
    question: "Find the 5th term of the sequence 4, 8, 12, 16,...", image: null,
    options: ["20", "24", "16", "18"],
    answer: "20"
  },
  {
    question: "What is the scale factor of enlargement if a length changes from 6 cm to 18 cm?", image: null,
    options: ["2", "3", "6", "12"],
    answer: "3"
  },

  // YEAR 3
  {
    question: "Which instrument is used to measure angles accurately?", image: null,
    options: ["Ruler", "Set square", "Compass", "Protractor"],
    answer: "Protractor"
  },
  {
    question: "What is the negation of 'If it rains, then the ground is wet'?", image: null,
    options: [
      "It rains and the ground is not wet",
      "If it does not rain, then the ground is wet",
      "If the ground is wet, then it rains",
      "It does not rain or the ground is wet"
    ],
    answer: "It rains and the ground is not wet"
  },
  {
    question: "Calculate cos 90°.", image: null,
    options: ["0", "1", "-1", "0.5"],
    answer: "0"
  },
  {
    question: "Sum of interior angles of a hexagon?", image: null,
    options: ["720°", "540°", "600°", "360°"],
    answer: "720°"
  },
  {
    question: "Solve for x: 3x - 7 = 11.", image: null,
    options: ["6", "4", "5", "3"],
    answer: "6"
  },
  {
    question: "Calculate tan 30°.", image: null,
    options: ["0.577", "1", "0", "?3"],
    answer: "0.577"
  },
  {
    question: "Which construction tool is used to draw perpendicular bisectors?", image: null,
    options: ["Ruler", "Compass", "Protractor", "Set square"],
    answer: "Compass"
  },
  {
    question: "Find the 7th term of the arithmetic sequence 3, 6, 9, 12,...", image: null,
    options: ["21", "18", "20", "23"],
    answer: "21"
  },
  {
    question: "What is the complement of angle 40°?", image: null,
    options: ["50°", "130°", "140°", "90°"],
    answer: "50°"
  },
  {
    question: "Which logical statement is equivalent to 'If p then q'?", image: null,
    options: [
      "If not q then not p",
      "If p then not q",
      "If q then p",
      "If not p then not q"
    ],
    answer: "If not q then not p"
  },
  // YEAR 1
  {
    question: "If A = {x | x is an even number less than 10}, what is A?", image: null,
    options: ["{2, 4, 6, 8}", "{1, 3, 5, 7, 9}", "{2, 3, 4, 5}", "{}"],
    answer: "{2, 4, 6, 8}"
  },
  {
    question: "Is the number -7 a real number?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Expand: (x + 3)(x - 2).", image: null,
    options: ["x² + x - 6", "x² - 5", "x² + 5x - 6", "x² - x + 6"],
    answer: "x² + x - 6"
  },
  {
    question: "Simplify: ?50", image: null,
    options: ["5?2", "7?2", "10?5", "25?2"],
    answer: "5?2"
  },
  {
    question: "Convert 255 in decimal to binary.", image: null,
    options: ["11111111", "10101010", "11110000", "10000000"],
    answer: "11111111"
  },
  {
    question: "If f(x) = 3x - 1, find f(2).", image: null,
    options: ["5", "6", "4", "7"],
    answer: "5"
  },
  {
    question: "How many sides does a regular hexagon have?", image: null,
    options: ["6", "5", "8", "4"],
    answer: "6"
  },
  {
    question: "Solve for x: 7x + 2 = 23", image: null,
    options: ["3", "5", "4", "2"],
    answer: "3"
  },
  {
    question: "Find the bearing of a plane flying directly south.", image: null,
    options: ["180°", "0°", "90°", "270°"],
    answer: "180°"
  },
  {
    question: "Vector B = -3i + 4j. Find the magnitude of B.", image: null,
    options: ["5", "7", "1", "3"],
    answer: "5"
  },
  {
    question: "Calculate the mean of: 10, 15, 20, 25.", image: null,
    options: ["17.5", "20", "15", "25"],
    answer: "17.5"
  },
  {
    question: "Which is a rotation of 90° a rigid motion?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "If 8 liters cost $24, what is the cost per liter?", image: null,
    options: ["$3", "$4", "$2", "$6"],
    answer: "$3"
  },
  {
    question: "Calculate 5% of 300.", image: null,
    options: ["15", "10", "20", "25"],
    answer: "15"
  },

  // YEAR 2
  {
    question: "Calculate 15 mod 6.", image: null,
    options: ["3", "4", "5", "6"],
    answer: "3"
  },
  {
    question: "Solve for x: 3^x = 81.", image: null,
    options: ["3", "4", "2", "5"],
    answer: "4"
  },
  {
    question: "Solve simultaneous: 3x + 2y = 12, x - y = 1.", image: null,
    options: ["x=2, y=3", "x=3, y=2", "x=1, y=4", "x=4, y=1"],
    answer: "x=2, y=3"
  },
  {
    question: "If y varies directly as x^2 and y=18 when x=3, find y when x=4.", image: null,
    options: ["32", "48", "24", "36"],
    answer: "32"
  },
  {
    question: "Find the mode of the set: 2, 4, 4, 6, 8.", image: null,
    options: ["4", "2", "6", "8"],
    answer: "4"
  },
  {
    question: "Factorize: x^2 - 16.", image: null,
    options: ["(x - 4)(x + 4)", "(x - 8)(x + 2)", "(x + 4)(x + 4)", "(x - 2)(x - 8)"],
    answer: "(x - 4)(x + 4)"
  },
  {
    question: "Calculate the volume of a cylinder with radius 3 cm and height 7 cm (?=3.14).", image: null,
    options: ["197.82 cm³", "65.94 cm³", "131.88 cm³", "99 cm³"],
    answer: "197.82 cm³"
  },
  {
    question: "Calculate sin 30°.", image: null,
    options: ["0.5", "0.707", "1", "0"],
    answer: "0.5"
  },
  {
    question: "Find the 10th term of the arithmetic sequence 1, 4, 7, 10,...", image: null,
    options: ["28", "31", "30", "34"],
    answer: "28"
  },
  {
    question: "What is the scale factor if a length grows from 5 cm to 20 cm?", image: null,
    options: ["4", "5", "3", "2"],
    answer: "4"
  },

  // YEAR 3
  {
    question: "What instrument is used to construct an angle bisector?", image: null,
    options: ["Compass", "Protractor", "Ruler", "Set square"],
    answer: "Compass"
  },
  {
    question: "What is the converse of 'If it rains, then the grass is wet'?", image: null,
    options: [
      "If the grass is wet, then it rains",
      "If it does not rain, the grass is not wet",
      "If the grass is not wet, then it does not rain",
      "If it rains, then the grass is not wet"
    ],
    answer: "If the grass is wet, then it rains"
  },
  {
    question: "Calculate tan 60°.", image: null,
    options: ["?3", "1", "0", "0.5"],
    answer: "?3"
  },
  {
    question: "Sum of interior angles of an octagon?", image: null,
    options: ["1080°", "900°", "720°", "1260°"],
    answer: "1080°"
  },
  {
    question: "Solve for x: 4x + 5 = 21.", image: null,
    options: ["4", "5", "6", "3"],
    answer: "4"
  },
  {
    question: "Which tool helps construct parallel lines?", image: null,
    options: ["Ruler", "Set square", "Protractor", "Compass"],
    answer: "Set square"
  },
  {
    question: "Find the 8th term of the sequence: 5, 10, 15, 20,...", image: null,
    options: ["40", "35", "45", "50"],
    answer: "40"
  },
  {
    question: "What is the supplement of 110°?", image: null,
    options: ["70°", "60°", "80°", "100°"],
    answer: "70°"
  },
  {
    question: "Which is the contrapositive of 'If p then q'?", image: null,
    options: [
      "If not q then not p",
      "If not p then not q",
      "If q then p",
      "If p then not q"
    ],
    answer: "If not q then not p"
  },
  {
    question: "If a triangle has sides 3 cm, 4 cm, and 5 cm, what type of triangle is it?", image: null,
    options: ["Right-angled", "Equilateral", "Isosceles", "Scalene"],
    answer: "Right-angled"
  },
  // YEAR 1
  {
    question: "If U = {1, 2, 3, 4, 5} and A = {2, 4}, what is A'", image: null,
    options: ["{1, 3, 5}", "{2, 4}", "{1, 2, 3, 4, 5}", "{}"],
    answer: "{1, 3, 5}"
  },
  {
    question: "Is ?2 rational or irrational?", image: null,
    options: ["Rational", "Irrational"],
    answer: "Irrational"
  },
  {
    question: "Simplify: (2x^3)(3x^2).", image: null,
    options: ["6x^5", "5x^6", "6x^1", "5x^5"],
    answer: "6x^5"
  },
  {
    question: "Simplify ?72.", image: null,
    options: ["6?2", "8?3", "9?2", "12?3"],
    answer: "6?2"
  },
  {
    question: "Convert decimal 45 to binary.", image: null,
    options: ["101101", "111001", "110111", "101011"],
    answer: "101101"
  },
  {
    question: "If f(x) = 2x + 5, find f(4).", image: null,
    options: ["13", "9", "8", "11"],
    answer: "13"
  },
  {
    question: "How many lines of symmetry does a square have?", image: null,
    options: ["4", "2", "1", "3"],
    answer: "4"
  },
  {
    question: "Solve for x: 2x - 7 = 1", image: null,
    options: ["4", "2", "3", "5"],
    answer: "4"
  },
  {
    question: "What is the bearing of a plane flying due east?", image: null,
    options: ["90°", "0°", "180°", "270°"],
    answer: "90°"
  },
  {
    question: "Vector C = 6i + 8j. Find magnitude of C.", image: null,
    options: ["10", "14", "8", "6"],
    answer: "10"
  },
  {
    question: "Find the median of: 5, 10, 15, 20, 25.", image: null,
    options: ["15", "20", "10", "25"],
    answer: "15"
  },
  {
    question: "Which of these is a translation?", image: null,
    options: ["Sliding a shape", "Rotating a shape", "Flipping a shape", "Scaling a shape"],
    answer: "Sliding a shape"
  },
  {
    question: "If 9 kg costs $45, what is the cost per kg?", image: null,
    options: ["$5", "$6", "$4", "$3"],
    answer: "$5"
  },
  {
    question: "Calculate 15% of 200.", image: null,
    options: ["30", "25", "35", "40"],
    answer: "30"
  },

  // YEAR 2
  {
    question: "Find 23 mod 7.", image: null,
    options: ["2", "3", "1", "0"],
    answer: "2"
  },
  {
    question: "Solve for x: 5^x = 125.", image: null,
    options: ["3", "2", "4", "1"],
    answer: "3"
  },
  {
    question: "Solve simultaneous: 2x + 3y = 7, x - y = 1.", image: null,
    options: ["x=2, y=1", "x=1, y=2", "x=3, y=1", "x=0, y=1"],
    answer: "x=2, y=1"
  },
  {
    question: "If y varies directly as x and y=10 when x=5, find y when x=8.", image: null,
    options: ["16", "12", "10", "8"],
    answer: "16"
  },
  {
    question: "Calculate the mean of: 2, 6, 8, 10, 14.", image: null,
    options: ["8", "7", "9", "10"],
    answer: "8"
  },
  {
    question: "Factorize: x^2 + 5x + 6.", image: null,
    options: ["(x + 3)(x + 2)", "(x + 6)(x + 1)", "(x + 2)(x + 4)", "(x + 5)(x + 6)"],
    answer: "(x + 3)(x + 2)"
  },
  {
    question: "Calculate the volume of a cone with radius 3 cm and height 9 cm (?=3.14).", image: null,
    options: ["84.78 cm³", "56.52 cm³", "28.26 cm³", "113.04 cm³"],
    answer: "84.78 cm³"
  },
  {
    question: "Calculate cos 60°.", image: null,
    options: ["0.5", "0.707", "1", "0"],
    answer: "0.5"
  },
  {
    question: "Find the 6th term of the geometric sequence 2, 4, 8, 16,...", image: null,
    options: ["32", "64", "128", "16"],
    answer: "64"
  },
  {
    question: "What is the scale factor if a length decreases from 15 cm to 5 cm?", image: null,
    options: ["1/3", "3", "1/2", "2"],
    answer: "1/3"
  },

  // YEAR 3
  {
    question: "Which instrument is used to draw arcs in constructions?", image: null,
    options: ["Compass", "Ruler", "Protractor", "Set square"],
    answer: "Compass"
  },
  {
    question: "What is the inverse of 'If p then q'?", image: null,
    options: [
      "If not p then not q",
      "If q then p",
      "If not q then not p",
      "If p then not q"
    ],
    answer: "If not p then not q"
  },
  {
    question: "Calculate sin 60°.", image: null,
    options: ["0.866", "0.5", "1", "0"],
    answer: "0.866"
  },
  {
    question: "Sum of interior angles of a pentagon?", image: null,
    options: ["540°", "360°", "720°", "900°"],
    answer: "540°"
  },
  {
    question: "Solve for x: 6x - 9 = 15.", image: null,
    options: ["4", "3", "5", "6"],
    answer: "4"
  },
  {
    question: "Which tool is best for drawing perpendicular lines?", image: null,
    options: ["Set square", "Protractor", "Compass", "Ruler"],
    answer: "Set square"
  },
  {
    question: "Find the 9th term of the arithmetic sequence 7, 14, 21, 28,...", image: null,
    options: ["63", "70", "56", "49"],
    answer: "63"
  },
  {
    question: "What is the complement of 35°?", image: null,
    options: ["55°", "45°", "65°", "75°"],
    answer: "55°"
  },
  {
    question: "Which is the inverse of 'If p then q'?", image: null,
    options: [
      "If not p then not q",
      "If not q then not p",
      "If q then p",
      "If p then not q"
    ],
    answer: "If not p then not q"
  },
  {
    question: "A triangle has sides 5 cm, 5 cm, and 8 cm. What type is it?", image: null,
    options: ["Isosceles", "Equilateral", "Scalene", "Right-angled"],
    answer: "Isosceles"
  },
  // YEAR 1
  {
    question: "What is the union of sets A = {1, 2, 3} and B = {3, 4, 5}?", image: null,
    options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2, 4, 5}", "{}"],
    answer: "{1, 2, 3, 4, 5}"
  },
  {
    question: "Is 0 a rational number?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Simplify: (3x - 2) + (2x + 5).", image: null,
    options: ["5x + 3", "6x + 3", "x + 3", "5x - 7"],
    answer: "5x + 3"
  },
  {
    question: "Simplify ?18.", image: null,
    options: ["3?2", "9?2", "6?3", "2?9"],
    answer: "3?2"
  },
  {
    question: "Convert binary 1101 to decimal.", image: null,
    options: ["13", "11", "14", "15"],
    answer: "13"
  },
  {
    question: "If f(x) = x^2 - 1, find f(3).", image: null,
    options: ["8", "9", "10", "7"],
    answer: "8"
  },
  {
    question: "How many diagonals does a hexagon have?", image: null,
    options: ["9", "6", "12", "8"],
    answer: "9"
  },
  {
    question: "Solve for x: 5x + 3 = 18.", image: null,
    options: ["3", "4", "5", "6"],
    answer: "3"
  },
  {
    question: "What is the bearing for northeast?", image: null,
    options: ["45°", "90°", "135°", "60°"],
    answer: "45°"
  },
  {
    question: "Vector D = 2i - 5j. Find magnitude of D.", image: null,
    options: ["?29", "7", "3", "?27"],
    answer: "?29"
  },
  {
    question: "Find the range of the data: 3, 7, 7, 9, 15.", image: null,
    options: ["12", "9", "15", "7"],
    answer: "12"
  },
  {
    question: "Is reflection a rigid motion?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "If 15 liters cost $60, what is the cost per liter?", image: null,
    options: ["$4", "$5", "$3", "$6"],
    answer: "$4"
  },
  {
    question: "Calculate 12% of 250.", image: null,
    options: ["30", "20", "25", "28"],
    answer: "30"
  },

  // YEAR 2
  {
    question: "Calculate 19 mod 5.", image: null,
    options: ["4", "3", "2", "1"],
    answer: "4"
  },
  {
    question: "Solve for x: 2^x = 32.", image: null,
    options: ["5", "4", "6", "3"],
    answer: "5"
  },
  {
    question: "Solve simultaneous: x + y = 6, 2x - y = 3.", image: null,
    options: ["x=3, y=3", "x=2, y=4", "x=1, y=5", "x=4, y=2"],
    answer: "x=3, y=3"
  },
  {
    question: "If y varies inversely as x and y=6 when x=4, find y when x=3.", image: null,
    options: ["8", "9", "7", "6"],
    answer: "8"
  },
  {
    question: "Find the median of: 1, 4, 7, 10, 13.", image: null,
    options: ["7", "8", "10", "4"],
    answer: "7"
  },
  {
    question: "Factorize: x^2 - 9x + 20.", image: null,
    options: ["(x - 5)(x - 4)", "(x - 10)(x + 2)", "(x - 1)(x - 20)", "(x - 8)(x - 3)"],
    answer: "(x - 5)(x - 4)"
  },
  {
    question: "Calculate the surface area of a sphere with radius 3 cm (?=3.14).", image: null,
    options: ["113.04 cm²", "56.52 cm²", "75.36 cm²", "28.26 cm²"],
    answer: "113.04 cm²"
  },
  {
    question: "Calculate tan 45°.", image: null,
    options: ["1", "0", "?2", "0.5"],
    answer: "1"
  },
  {
    question: "Find the sum of the first 5 terms of the arithmetic sequence 2, 5, 8, 11,...", image: null,
    options: ["40", "35", "30", "25"],
    answer: "40"
  },
  {
    question: "If the side of a square is multiplied by 3, what is the scale factor of the area?", image: null,
    options: ["9", "3", "6", "12"],
    answer: "9"
  },

  // YEAR 3
  {
    question: "What is the purpose of a protractor in constructions?", image: null,
    options: ["Measure angles", "Draw arcs", "Draw lines", "Measure lengths"],
    answer: "Measure angles"
  },
  {
    question: "What is the contrapositive of 'If it rains, then the ground is wet'?", image: null,
    options: [
      "If the ground is not wet, then it does not rain",
      "If it does not rain, then the ground is not wet",
      "If the ground is wet, then it rains",
      "If it rains, then the ground is not wet"
    ],
    answer: "If the ground is not wet, then it does not rain"
  },
  {
    question: "Calculate cos 45°.", image: null,
    options: ["0.707", "0.5", "1", "0"],
    answer: "0.707"
  },
  {
    question: "Sum of interior angles of a triangle?", image: null,
    options: ["180°", "360°", "90°", "270°"],
    answer: "180°"
  },
  {
    question: "Solve for x: 5x + 7 = 27.", image: null,
    options: ["4", "5", "3", "6"],
    answer: "4"
  },
  {
    question: "Which tool is used to measure an angle accurately?", image: null,
    options: ["Protractor", "Set square", "Ruler", "Compass"],
    answer: "Protractor"
  },
  {
    question: "Find the 7th term of the arithmetic sequence 3, 7, 11, 15,...", image: null,
    options: ["27", "31", "35", "23"],
    answer: "31"
  },
  {
    question: "What is the supplement of 65°?", image: null,
    options: ["115°", "125°", "95°", "105°"],
    answer: "115°"
  },
  {
    question: "Which is the converse of 'If p then q'?", image: null,
    options: [
      "If q then p",
      "If not p then not q",
      "If not q then not p",
      "If p then not q"
    ],
    answer: "If q then p"
  },
  {
    question: "A triangle with sides 6 cm, 6 cm, and 6 cm is:", image: null,
    options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
    answer: "Equilateral"
  },
  // YEAR 1
  {
    question: "What is the intersection of sets A = {1, 2, 3} and B = {3, 4, 5}?", image: null,
    options: ["{3}", "{1, 2, 4, 5}", "{1, 2, 3, 4, 5}", "{}"],
    answer: "{3}"
  },
  {
    question: "Is -7 a real number?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Simplify: 4a + 3a - 2a.", image: null,
    options: ["5a", "7a", "2a", "a"],
    answer: "5a"
  },
  {
    question: "Simplify ?50.", image: null,
    options: ["5?2", "10?5", "7?2", "25?2"],
    answer: "5?2"
  },
  {
    question: "Convert decimal 19 to binary.", image: null,
    options: ["10011", "10101", "11001", "10010"],
    answer: "10011"
  },
  {
    question: "If f(x) = 3x - 2, find f(5).", image: null,
    options: ["13", "15", "10", "17"],
    answer: "13"
  },
  {
    question: "How many sides does a pentagon have?", image: null,
    options: ["5", "6", "4", "8"],
    answer: "5"
  },
  {
    question: "Solve for x: 3x + 4 = 19.", image: null,
    options: ["5", "6", "7", "4"],
    answer: "5"
  },
  {
    question: "What is the bearing of a plane flying due south?", image: null,
    options: ["180°", "90°", "270°", "0°"],
    answer: "180°"
  },
  {
    question: "Vector E = -3i + 4j. Find magnitude of E.", image: null,
    options: ["5", "7", "1", "6"],
    answer: "5"
  },
  {
    question: "Find the mode of the data: 2, 3, 3, 5, 7.", image: null,
    options: ["3", "2", "5", "7"],
    answer: "3"
  },
  {
    question: "Is rotation a rigid motion?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "If 8 kg of sugar costs $24, find cost per kg.", image: null,
    options: ["$3", "$4", "$5", "$6"],
    answer: "$3"
  },
  {
    question: "Calculate 25% of 120.", image: null,
    options: ["30", "40", "25", "35"],
    answer: "30"
  },

  // YEAR 2
  {
    question: "Find 15 mod 4.", image: null,
    options: ["3", "4", "2", "1"],
    answer: "3"
  },
  {
    question: "Solve for x: 10^x = 1000.", image: null,
    options: ["3", "2", "4", "1"],
    answer: "3"
  },
  {
    question: "Solve simultaneous: 3x - y = 5, x + y = 7.", image: null,
    options: ["x=3, y=4", "x=4, y=3", "x=5, y=2", "x=2, y=5"],
    answer: "x=3, y=4"
  },
  {
    question: "If y varies directly as x and y=15 when x=3, find y when x=6.", image: null,
    options: ["30", "20", "25", "18"],
    answer: "30"
  },
  {
    question: "Calculate the mode of: 4, 7, 7, 9, 10.", image: null,
    options: ["7", "9", "10", "4"],
    answer: "7"
  },
  {
    question: "Factorize: x^2 - 4x - 12.", image: null,
    options: ["(x - 6)(x + 2)", "(x + 6)(x - 2)", "(x - 4)(x + 3)", "(x - 3)(x + 4)"],
    answer: "(x - 6)(x + 2)"
  },
  {
    question: "Calculate the volume of a cylinder with radius 4 cm and height 7 cm (?=3.14).", image: null,
    options: ["351.68 cm³", "175.84 cm³", "87.96 cm³", "439.82 cm³"],
    answer: "351.68 cm³"
  },
  {
    question: "Calculate sin 30°.", image: null,
    options: ["0.5", "0.866", "1", "0"],
    answer: "0.5"
  },
  {
    question: "Find the sum of the first 6 terms of arithmetic sequence 3, 6, 9, 12,...", image: null,
    options: ["63", "54", "45", "36"],
    answer: "63"
  },
  {
    question: "If the length of a rectangle is doubled, what happens to the area?", image: null,
    options: ["It doubles", "It quadruples", "It stays the same", "It triples"],
    answer: "It doubles"
  },

  // YEAR 3
  {
    question: "Which tool is used to draw parallel lines?", image: null,
    options: ["Set square", "Compass", "Protractor", "Ruler"],
    answer: "Set square"
  },
  {
    question: "What is the converse of 'If it rains, then the ground is wet'?", image: null,
    options: [
      "If the ground is wet, then it rains",
      "If it does not rain, then the ground is not wet",
      "If the ground is not wet, then it does not rain",
      "If it rains, then the ground is not wet"
    ],
    answer: "If the ground is wet, then it rains"
  },
  {
    question: "Calculate tan 30°.", image: null,
    options: ["0.577", "1", "0.5", "0"],
    answer: "0.577"
  },
  {
    question: "Sum of exterior angles of any polygon?", image: null,
    options: ["360°", "180°", "90°", "540°"],
    answer: "360°"
  },
  {
    question: "Solve for x: 7x - 8 = 20.", image: null,
    options: ["4", "3", "5", "6"],
    answer: "4"
  },
  {
    question: "Which tool is used to draw perpendicular bisectors?", image: null,
    options: ["Compass", "Set square", "Protractor", "Ruler"],
    answer: "Compass"
  },
  {
    question: "Find the 10th term of arithmetic sequence 5, 9, 13, 17,...", image: null,
    options: ["41", "45", "49", "37"],
    answer: "41"
  },
  {
    question: "What is the complement of 50°?", image: null,
    options: ["40°", "30°", "60°", "50°"],
    answer: "40°"
  },
  {
    question: "Which is the negation of 'If p then q'?", image: null,
    options: [
      "p and not q",
      "If not p then not q",
      "If q then p",
      "If not q then not p"
    ],
    answer: "p and not q"
  },
  {
    question: "A triangle with sides 7 cm, 9 cm, and 12 cm is:", image: null,
    options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
    answer: "Scalene"
  },
  // YEAR 1
  {
    question: "If A = {2, 4, 6} and B = {4, 6, 8}, what is A \\ B (A minus B)?", image: null,
    options: ["{2}", "{4, 6}", "{8}", "{}"],
    answer: "{2}"
  },
  {
    question: "Is ?16 a rational number?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Simplify: 7x - 3x + 2x.", image: null,
    options: ["6x", "8x", "4x", "5x"],
    answer: "6x"
  },
  {
    question: "Simplify ?72.", image: null,
    options: ["6?2", "8?2", "3?6", "9?8"],
    answer: "6?2"
  },
  {
    question: "Convert decimal 25 to binary.", image: null,
    options: ["11001", "11011", "10101", "11101"],
    answer: "11001"
  },
  {
    question: "If f(x) = 2x + 1, find f(4).", image: null,
    options: ["9", "8", "7", "6"],
    answer: "9"
  },
  {
    question: "How many sides does an octagon have?", image: null,
    options: ["8", "6", "5", "10"],
    answer: "8"
  },
  {
    question: "Solve for x: 4x - 5 = 11.", image: null,
    options: ["4", "3", "5", "6"],
    answer: "4"
  },
  {
    question: "What is the bearing of east?", image: null,
    options: ["90°", "0°", "180°", "270°"],
    answer: "90°"
  },
  {
    question: "Vector F = 6i + 8j. Find magnitude of F.", image: null,
    options: ["10", "12", "8", "14"],
    answer: "10"
  },
  {
    question: "Find the median of: 5, 8, 12, 15, 18.", image: null,
    options: ["12", "13", "15", "8"],
    answer: "12"
  },
  {
    question: "Is translation a rigid motion?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "If 5 liters of paint cover 30 m², how many liters are needed for 90 m²?", image: null,
    options: ["15", "20", "10", "12"],
    answer: "15"
  },
  {
    question: "Calculate 18% of 200.", image: null,
    options: ["36", "32", "40", "30"],
    answer: "36"
  },

  // YEAR 2
  {
    question: "Calculate 23 mod 6.", image: null,
    options: ["5", "3", "4", "2"],
    answer: "5"
  },
  {
    question: "Solve for x: 3^x = 81.", image: null,
    options: ["4", "3", "2", "5"],
    answer: "4"
  },
  {
    question: "Solve simultaneous: 4x + y = 9, x - y = 1.", image: null,
    options: ["x=2, y=1", "x=1, y=3", "x=3, y=2", "x=0, y=4"],
    answer: "x=2, y=1"
  },
  {
    question: "If y varies inversely as x and y=10 when x=2, find y when x=5.", image: null,
    options: ["4", "5", "6", "8"],
    answer: "4"
  },
  {
    question: "Find the mean of: 3, 6, 9, 12, 15.", image: null,
    options: ["9", "10", "12", "8"],
    answer: "9"
  },
  {
    question: "Factorize: x^2 + 7x + 12.", image: null,
    options: ["(x + 3)(x + 4)", "(x + 6)(x + 2)", "(x + 1)(x + 12)", "(x + 5)(x + 7)"],
    answer: "(x + 3)(x + 4)"
  },
  {
    question: "Calculate the volume of a cube with side 5 cm.", image: null,
    options: ["125 cm³", "100 cm³", "150 cm³", "115 cm³"],
    answer: "125 cm³"
  },
  {
    question: "Calculate cos 60°.", image: null,
    options: ["0.5", "0.866", "1", "0"],
    answer: "0.5"
  },
  {
    question: "Find the sum of first 4 terms of geometric series 2, 6, 18, 54,...", image: null,
    options: ["80", "70", "90", "100"],
    answer: "80"
  },
  {
    question: "If the scale factor of enlargement is 4, what happens to the area?", image: null,
    options: ["Area multiplies by 16", "Area doubles", "Area quadruples", "Area halves"],
    answer: "Area multiplies by 16"
  },

  // YEAR 3
  {
    question: "Which tool is used to draw arcs?", image: null,
    options: ["Compass", "Ruler", "Set square", "Protractor"],
    answer: "Compass"
  },
  {
    question: "What is the inverse of 'If p then q'?", image: null,
    options: [
      "If not p then not q",
      "If q then p",
      "If p then not q",
      "If not q then not p"
    ],
    answer: "If not p then not q"
  },
  {
    question: "Calculate sin 45°.", image: null,
    options: ["0.707", "0.5", "1", "0"],
    answer: "0.707"
  },
  {
    question: "Sum of interior angles of a pentagon?", image: null,
    options: ["540°", "360°", "720°", "180°"],
    answer: "540°"
  },
  {
    question: "Solve for x: 6x + 4 = 22.", image: null,
    options: ["3", "2", "4", "5"],
    answer: "3"
  },
  {
    question: "Which tool is used to measure length?", image: null,
    options: ["Ruler", "Compass", "Protractor", "Set square"],
    answer: "Ruler"
  },
  {
    question: "Find the 5th term of arithmetic sequence 7, 11, 15, 19,...", image: null,
    options: ["23", "27", "31", "35"],
    answer: "27"
  },
  {
    question: "What is the complement of 70°?", image: null,
    options: ["20°", "30°", "40°", "50°"],
    answer: "20°"
  },
  {
    question: "Which is the contrapositive of 'If p then q'?", image: null,
    options: [
      "If not q then not p",
      "If q then p",
      "If not p then not q",
      "If p then not q"
    ],
    answer: "If not q then not p"
  },
  {
    question: "A triangle with sides 5 cm, 5 cm, and 8 cm is:", image: null,
    options: ["Isosceles", "Equilateral", "Scalene", "Right-angled"],
    answer: "Isosceles"
  },
  // YEAR 1
  {
    question: "Find the union of sets A = {1, 3, 5} and B = {2, 3, 4}.", image: null,
    options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 5}", "{2, 4}"],
    answer: "{1, 2, 3, 4, 5}"
  },
  {
    question: "Is 0 a real number?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Simplify: 5x - 2x + 7x.", image: null,
    options: ["10x", "12x", "8x", "9x"],
    answer: "10x"
  },
  {
    question: "Simplify ?32.", image: null,
    options: ["4?2", "5?2", "6?2", "3?2"],
    answer: "4?2"
  },
  {
    question: "Convert decimal 13 to binary.", image: null,
    options: ["1101", "1011", "1110", "1001"],
    answer: "1101"
  },
  {
    question: "If f(x) = x^2 - 1, find f(3).", image: null,
    options: ["8", "9", "7", "6"],
    answer: "8"
  },
  {
    question: "How many sides does a hexagon have?", image: null,
    options: ["6", "7", "5", "8"],
    answer: "6"
  },
  {
    question: "Solve for x: 5x + 7 = 27.", image: null,
    options: ["4", "5", "3", "6"],
    answer: "4"
  },
  {
    question: "What is the bearing of north-west?", image: null,
    options: ["315°", "45°", "135°", "225°"],
    answer: "315°"
  },
  {
    question: "Vector G = 9i + 12j. Find magnitude of G.", image: null,
    options: ["15", "21", "13", "18"],
    answer: "15"
  },
  {
    question: "Find the range of the data: 3, 7, 7, 8, 10.", image: null,
    options: ["7", "8", "10", "3"],
    answer: "7"
  },
  {
    question: "Is reflection a rigid motion?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "If 3 kg of apples cost $9, find cost per kg.", image: null,
    options: ["$3", "$4", "$2", "$5"],
    answer: "$3"
  },
  {
    question: "Calculate 40% of 150.", image: null,
    options: ["60", "50", "55", "65"],
    answer: "60"
  },

  // YEAR 2
  {
    question: "Find 18 mod 5.", image: null,
    options: ["3", "4", "2", "1"],
    answer: "3"
  },
  {
    question: "Solve for x: log??(x) = 2.", image: null,
    options: ["100", "10", "1000", "1"],
    answer: "100"
  },
  {
    question: "Solve simultaneous: 2x + 3y = 12, x - y = 3.", image: null,
    options: ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"],
    answer: "x=3, y=2"
  },
  {
    question: "If y varies directly as x^2 and y=18 when x=3, find y when x=5.", image: null,
    options: ["50", "75", "30", "25"],
    answer: "50"
  },
  {
    question: "Find the median of: 1, 4, 7, 9, 11.", image: null,
    options: ["7", "6", "8", "9"],
    answer: "7"
  },
  {
    question: "Factorize: x^2 - 5x + 6.", image: null,
    options: ["(x - 2)(x - 3)", "(x + 2)(x + 3)", "(x - 1)(x - 6)", "(x + 1)(x - 6)"],
    answer: "(x - 2)(x - 3)"
  },
  {
    question: "Calculate the surface area of a cube with side 3 cm.", image: null,
    options: ["54 cm²", "27 cm²", "36 cm²", "18 cm²"],
    answer: "54 cm²"
  },
  {
    question: "Calculate tan 45°.", image: null,
    options: ["1", "0.5", "0", "0.707"],
    answer: "1"
  },
  {
    question: "Find the 6th term of the arithmetic sequence 4, 9, 14, 19,...", image: null,
    options: ["29", "34", "39", "24"],
    answer: "29"
  },
  {
    question: "If a triangle is enlarged by scale factor 3, what is the ratio of areas?", image: null,
    options: ["9:1", "3:1", "6:1", "27:1"],
    answer: "9:1"
  },

  // YEAR 3
  {
    question: "Which tool is used to measure angles?", image: null,
    options: ["Protractor", "Ruler", "Compass", "Set square"],
    answer: "Protractor"
  },
  {
    question: "What is the contrapositive of 'If p then q'?", image: null,
    options: [
      "If not q then not p",
      "If q then p",
      "If not p then not q",
      "If p then not q"
    ],
    answer: "If not q then not p"
  },
  {
    question: "Calculate cos 0°.", image: null,
    options: ["1", "0", "0.5", "-1"],
    answer: "1"
  },
  {
    question: "Sum of interior angles of a triangle?", image: null,
    options: ["180°", "90°", "360°", "270°"],
    answer: "180°"
  },
  {
    question: "Solve for x: 8x - 12 = 28.", image: null,
    options: ["5", "4", "6", "3"],
    answer: "5"
  },
  {
    question: "Which tool is used to draw a straight line?", image: null,
    options: ["Ruler", "Compass", "Protractor", "Set square"],
    answer: "Ruler"
  },
  {
    question: "Find the 8th term of arithmetic sequence 3, 7, 11, 15,...", image: null,
    options: ["31", "35", "27", "39"],
    answer: "31"
  },
  {
    question: "What is the supplement of 120°?", image: null,
    options: ["60°", "70°", "50°", "45°"],
    answer: "60°"
  },
  {
    question: "Which is the inverse of 'If p then q'?", image: null,
    options: [
      "If not p then not q",
      "If q then p",
      "If not q then not p",
      "If p then not q"
    ],
    answer: "If not p then not q"
  },
  {
    question: "A triangle with sides 6 cm, 6 cm, and 6 cm is:", image: null,
    options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
    answer: "Equilateral"
  },
  // YEAR 1
  {
    question: "Find the intersection of sets A = {1, 2, 3} and B = {2, 3, 4}.", image: null,
    options: ["{2, 3}", "{1}", "{4}", "{}"],
    answer: "{2, 3}"
  },
  {
    question: "Is -7 a real number?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Simplify: 9a - 4a + 2a.", image: null,
    options: ["7a", "5a", "6a", "3a"],
    answer: "7a"
  },
  {
    question: "Simplify ?50.", image: null,
    options: ["5?2", "6?2", "4?2", "7?2"],
    answer: "5?2"
  },
  {
    question: "Convert binary 1010 to decimal.", image: null,
    options: ["10", "11", "9", "8"],
    answer: "10"
  },
  {
    question: "If f(x) = 3x - 4, find f(5).", image: null,
    options: ["11", "15", "10", "9"],
    answer: "11"
  },
  {
    question: "How many sides does a decagon have?", image: null,
    options: ["10", "8", "12", "9"],
    answer: "10"
  },
  {
    question: "Solve for x: 7x + 2 = 16.", image: null,
    options: ["2", "3", "4", "5"],
    answer: "2"
  },
  {
    question: "What is the bearing of south-east?", image: null,
    options: ["135°", "45°", "225°", "315°"],
    answer: "135°"
  },
  {
    question: "Vector H = 8i - 6j. Find magnitude of H.", image: null,
    options: ["10", "12", "14", "9"],
    answer: "10"
  },
  {
    question: "Find the mode of: 2, 5, 7, 5, 8.", image: null,
    options: ["5", "7", "8", "2"],
    answer: "5"
  },
  {
    question: "Is rotation a rigid motion?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "If 7 liters of juice cost $21, what is the cost per liter?", image: null,
    options: ["$3", "$4", "$2", "$5"],
    answer: "$3"
  },
  {
    question: "Calculate 25% of 360.", image: null,
    options: ["90", "80", "85", "75"],
    answer: "90"
  },

  // YEAR 2
  {
    question: "Calculate 27 mod 8.", image: null,
    options: ["3", "4", "2", "1"],
    answer: "3"
  },
  {
    question: "Solve for x: 2^x = 16.", image: null,
    options: ["4", "3", "5", "6"],
    answer: "4"
  },
  {
    question: "Solve simultaneous: x + y = 10, x - y = 4.", image: null,
    options: ["x=7, y=3", "x=6, y=4", "x=8, y=2", "x=5, y=5"],
    answer: "x=7, y=3"
  },
  {
    question: "If y varies inversely as x and y=12 when x=4, find y when x=6.", image: null,
    options: ["8", "10", "7", "6"],
    answer: "8"
  },
  {
    question: "Find the range of: 10, 15, 20, 25, 30.", image: null,
    options: ["20", "15", "25", "30"],
    answer: "20"
  },
  {
    question: "Factorize: x^2 + 9x + 20.", image: null,
    options: ["(x + 4)(x + 5)", "(x + 2)(x + 10)", "(x + 1)(x + 20)", "(x + 3)(x + 7)"],
    answer: "(x + 4)(x + 5)"
  },
  {
    question: "Calculate the volume of a cylinder with radius 3 cm and height 7 cm (use ?=3.14).", image: null,
    options: ["197.82 cm³", "200 cm³", "180 cm³", "210 cm³"],
    answer: "197.82 cm³"
  },
  {
    question: "Calculate sin 30°.", image: null,
    options: ["0.5", "0.866", "1", "0"],
    answer: "0.5"
  },
  {
    question: "Find the sum of the first 5 terms of arithmetic series 3, 7, 11, 15,...", image: null,
    options: ["65", "60", "70", "55"],
    answer: "65"
  },
  {
    question: "If a figure is enlarged by scale factor 2, what happens to its area?", image: null,
    options: ["Area is multiplied by 4", "Area doubles", "Area triples", "Area halves"],
    answer: "Area is multiplied by 4"
  },

  // YEAR 3
  {
    question: "Which tool is used to draw perpendicular lines?", image: null,
    options: ["Set square", "Compass", "Ruler", "Protractor"],
    answer: "Set square"
  },
  {
    question: "What is the converse of 'If p then q'?", image: null,
    options: [
      "If q then p",
      "If not p then not q",
      "If not q then not p",
      "If p then not q"
    ],
    answer: "If q then p"
  },
  {
    question: "Calculate tan 60°.", image: null,
    options: ["1.732", "1", "0.577", "0"],
    answer: "1.732"
  },
  {
    question: "Sum of interior angles of a hexagon?", image: null,
    options: ["720°", "540°", "600°", "480°"],
    answer: "720°"
  },
  {
    question: "Solve for x: 5x - 3 = 17.", image: null,
    options: ["4", "5", "6", "3"],
    answer: "4"
  },
  {
    question: "Which tool is used to measure the length of a line segment?", image: null,
    options: ["Ruler", "Compass", "Protractor", "Set square"],
    answer: "Ruler"
  },
  {
    question: "Find the 10th term of the sequence: 2, 5, 8, 11,...", image: null,
    options: ["29", "30", "32", "31"],
    answer: "29"
  },
  {
    question: "What is the supplement of 150°?", image: null,
    options: ["30°", "40°", "20°", "45°"],
    answer: "30°"
  },
  {
    question: "Which is the inverse of 'If p then q'?", image: null,
    options: [
      "If not p then not q",
      "If q then p",
      "If not q then not p",
      "If p then not q"
    ],
    answer: "If not p then not q"
  },
  {
    question: "A triangle with sides 7 cm, 7 cm, and 10 cm is:", image: null,
    options: ["Isosceles", "Equilateral", "Scalene", "Right-angled"],
    answer: "Isosceles"
  },
  // YEAR 1
  {
    question: "Find the complement of set A = {1, 2, 3} in universal set U = {1, 2, 3, 4, 5}.", image: null,
    options: ["{4, 5}", "{1, 2}", "{3, 4}", "{5}"],
    answer: "{4, 5}"
  },
  {
    question: "Is ?16 a rational number?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Simplify: 7y - 3y + 6y.", image: null,
    options: ["10y", "12y", "9y", "8y"],
    answer: "10y"
  },
  {
    question: "Simplify ?18.", image: null,
    options: ["3?2", "4?2", "2?2", "5?2"],
    answer: "3?2"
  },
  {
    question: "Convert decimal 25 to binary.", image: null,
    options: ["11001", "10101", "11100", "10011"],
    answer: "11001"
  },
  {
    question: "If f(x) = 2x + 5, find f(4).", image: null,
    options: ["13", "9", "11", "10"],
    answer: "13"
  },
  {
    question: "How many sides does an octagon have?", image: null,
    options: ["8", "7", "9", "6"],
    answer: "8"
  },
  {
    question: "Solve for x: 3x + 5 = 20.", image: null,
    options: ["5", "4", "6", "7"],
    answer: "5"
  },
  {
    question: "What is the bearing of east?", image: null,
    options: ["90°", "0°", "180°", "270°"],
    answer: "90°"
  },
  {
    question: "Vector J = -7i + 24j. Find magnitude of J.", image: null,
    options: ["25", "26", "24", "23"],
    answer: "25"
  },
  {
    question: "Find the mean of: 4, 6, 8, 10, 12.", image: null,
    options: ["8", "9", "7", "6"],
    answer: "8"
  },
  {
    question: "Is translation a rigid motion?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "If 5 liters of paint cost $45, what is cost per liter?", image: null,
    options: ["$9", "$8", "$7", "$6"],
    answer: "$9"
  },
  {
    question: "Calculate 15% of 200.", image: null,
    options: ["30", "25", "35", "40"],
    answer: "30"
  },

  // YEAR 2
  {
    question: "Calculate 34 mod 6.", image: null,
    options: ["4", "5", "3", "2"],
    answer: "4"
  },
  {
    question: "Solve for x: log?(x) = 3.", image: null,
    options: ["8", "6", "9", "7"],
    answer: "8"
  },
  {
    question: "Solve simultaneous: 3x + 2y = 16, x - y = 1.", image: null,
    options: ["x=3, y=2", "x=4, y=3", "x=2, y=3", "x=5, y=1"],
    answer: "x=3, y=2"
  },
  {
    question: "If y varies directly as x and y=10 when x=2, find y when x=5.", image: null,
    options: ["25", "20", "15", "30"],
    answer: "25"
  },
  {
    question: "Find the median of: 3, 7, 9, 12, 15.", image: null,
    options: ["9", "10", "7", "12"],
    answer: "9"
  },
  {
    question: "Factorize: x^2 - 4x - 5.", image: null,
    options: ["(x - 5)(x + 1)", "(x + 5)(x - 1)", "(x - 4)(x - 5)", "(x + 4)(x + 5)"],
    answer: "(x - 5)(x + 1)"
  },
  {
    question: "Calculate the volume of a cube with side 5 cm.", image: null,
    options: ["125 cm³", "150 cm³", "100 cm³", "120 cm³"],
    answer: "125 cm³"
  },
  {
    question: "Calculate cos 60°.", image: null,
    options: ["0.5", "0.866", "1", "0"],
    answer: "0.5"
  },
  {
    question: "Find the sum of the first 6 terms of the sequence 2, 5, 8, 11,...", image: null,
    options: ["51", "54", "48", "45"],
    answer: "51"
  },
  {
    question: "If a figure is enlarged by scale factor 4, what happens to its area?", image: null,
    options: ["Area is multiplied by 16", "Area quadruples", "Area doubles", "Area halves"],
    answer: "Area is multiplied by 16"
  },

  // YEAR 3
  {
    question: "Which tool is used to draw arcs?", image: null,
    options: ["Compass", "Ruler", "Set square", "Protractor"],
    answer: "Compass"
  },
  {
    question: "What is the negation of 'If p then q'?", image: null,
    options: [
      "p and not q",
      "If q then p",
      "If not q then not p",
      "If p then not q"
    ],
    answer: "p and not q"
  },
  {
    question: "Calculate sin 90°.", image: null,
    options: ["1", "0", "0.5", "-1"],
    answer: "1"
  },
  {
    question: "Sum of exterior angles of any polygon?", image: null,
    options: ["360°", "180°", "540°", "720°"],
    answer: "360°"
  },
  {
    question: "Solve for x: 4x + 7 = 23.", image: null,
    options: ["4", "5", "6", "3"],
    answer: "4"
  },
  {
    question: "Which tool is used to draw parallel lines?", image: null,
    options: ["Set square", "Compass", "Ruler", "Protractor"],
    answer: "Set square"
  },
  {
    question: "Find the 5th term of the arithmetic sequence: 7, 11, 15, 19,...", image: null,
    options: ["23", "25", "27", "29"],
    answer: "23"
  },
  {
    question: "What is the complement of 70°?", image: null,
    options: ["20°", "30°", "40°", "50°"],
    answer: "20°"
  },
  {
    question: "Which is the contrapositive of 'If p then q'?", image: null,
    options: [
      "If not q then not p",
      "If q then p",
      "If not p then not q",
      "If p then not q"
    ],
    answer: "If not q then not p"
  },
  {
    question: "A triangle with sides 5 cm, 5 cm, and 5 cm is:", image: null,
    options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
    answer: "Equilateral"
  },
  // YEAR 1
  {
    question: "What is the union of sets A = {2, 4, 6} and B = {1, 4, 5}?", image: null,
    options: ["{1, 2, 4, 5, 6}", "{2, 4}", "{1, 5}", "{4}"],
    answer: "{1, 2, 4, 5, 6}"
  },
  {
    question: "Is 0 a rational number?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Simplify: 5m + 3m - 2m.", image: null,
    options: ["6m", "4m", "5m", "3m"],
    answer: "6m"
  },
  {
    question: "Simplify ?72.", image: null,
    options: ["6?2", "5?2", "4?2", "3?2"],
    answer: "6?2"
  },
  {
    question: "Convert binary 1111 to decimal.", image: null,
    options: ["15", "14", "16", "13"],
    answer: "15"
  },
  {
    question: "If f(x) = x² - 2x + 1, find f(3).", image: null,
    options: ["4", "2", "6", "8"],
    answer: "4"
  },
  {
    question: "How many sides does a pentagon have?", image: null,
    options: ["5", "6", "7", "8"],
    answer: "5"
  },
  {
    question: "Solve for x: 4x - 3 = 13.", image: null,
    options: ["4", "5", "6", "3"],
    answer: "4"
  },
  {
    question: "What is the bearing of north-west?", image: null,
    options: ["315°", "45°", "135°", "225°"],
    answer: "315°"
  },
  {
    question: "Vector K = 3i + 4j. Find magnitude of K.", image: null,
    options: ["5", "6", "7", "8"],
    answer: "5"
  },
  {
    question: "Find the median of: 1, 3, 3, 6, 7, 8, 9.", image: null,
    options: ["6", "5", "7", "3"],
    answer: "6"
  },
  {
    question: "Is reflection a rigid motion?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "If 12 liters of juice cost $36, what is the cost per liter?", image: null,
    options: ["$3", "$2", "$4", "$5"],
    answer: "$3"
  },
  {
    question: "Calculate 40% of 150.", image: null,
    options: ["60", "50", "70", "80"],
    answer: "60"
  },

  // YEAR 2
  {
    question: "Calculate 55 mod 7.", image: null,
    options: ["6", "5", "4", "3"],
    answer: "6"
  },
  {
    question: "Solve for x: log?(x) = 4.", image: null,
    options: ["81", "64", "27", "16"],
    answer: "81"
  },
  {
    question: "Solve simultaneous: 2x + 3y = 13, x - y = 1.", image: null,
    options: ["x=4, y=3", "x=3, y=2", "x=5, y=4", "x=2, y=1"],
    answer: "x=4, y=3"
  },
  {
    question: "If y varies directly as x² and y=18 when x=3, find y when x=6.", image: null,
    options: ["72", "54", "36", "108"],
    answer: "72"
  },
  {
    question: "Find the mode of: 2, 3, 5, 3, 7, 3, 4.", image: null,
    options: ["3", "2", "5", "7"],
    answer: "3"
  },
  {
    question: "Factorize: x² + 5x + 6.", image: null,
    options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x + 3)(x + 5)", "(x + 4)(x + 2)"],
    answer: "(x + 2)(x + 3)"
  },
  {
    question: "Calculate the surface area of a cube with side 4 cm.", image: null,
    options: ["96 cm²", "64 cm²", "48 cm²", "80 cm²"],
    answer: "96 cm²"
  },
  {
    question: "Calculate tan 45°.", image: null,
    options: ["1", "0", "?3", "0.5"],
    answer: "1"
  },
  {
    question: "Find the 7th term of the arithmetic sequence 5, 8, 11, 14,...", image: null,
    options: ["23", "24", "26", "25"],
    answer: "23"
  },
  {
    question: "If a figure is reduced by scale factor 1/3, what happens to its area?", image: null,
    options: ["Area is multiplied by 1/9", "Area triples", "Area halves", "Area doubles"],
    answer: "Area is multiplied by 1/9"
  },

  // YEAR 3
  {
    question: "Which tool is used to draw an angle of 60°?", image: null,
    options: ["Compass", "Protractor", "Ruler", "Set square"],
    answer: "Protractor"
  },
  {
    question: "What is the contrapositive of 'If p then q'?", image: null,
    options: [
      "If not q then not p",
      "If q then p",
      "If not p then not q",
      "If p then not q"
    ],
    answer: "If not q then not p"
  },
  {
    question: "Calculate cos 0°.", image: null,
    options: ["1", "0", "0.5", "-1"],
    answer: "1"
  },
  {
    question: "Sum of interior angles of a triangle?", image: null,
    options: ["180°", "360°", "90°", "270°"],
    answer: "180°"
  },
  {
    question: "Solve for x: 6x + 2 = 20.", image: null,
    options: ["3", "4", "2", "5"],
    answer: "3"
  },
  {
    question: "Which tool is used to measure angles?", image: null,
    options: ["Protractor", "Compass", "Ruler", "Set square"],
    answer: "Protractor"
  },
  {
    question: "Find the 8th term of the sequence 1, 4, 7, 10,...", image: null,
    options: ["22", "24", "23", "25"],
    answer: "22"
  },
  {
    question: "What is the supplement of 110°?", image: null,
    options: ["70°", "80°", "60°", "90°"],
    answer: "70°"
  },
  {
    question: "Which is the inverse of 'If p then q'?", image: null,
    options: [
      "If not p then not q",
      "If q then p",
      "If not q then not p",
      "If p then not q"
    ],
    answer: "If not p then not q"
  },
  {
    question: "A triangle with sides 3 cm, 4 cm, and 5 cm is:", image: null,
    options: ["Right-angled", "Equilateral", "Isosceles", "Scalene"],
    answer: "Right-angled"
  },
  // YEAR 1
  {
    question: "What is the union of sets A = {2, 4, 6} and B = {1, 4, 5}?", image: null,
    options: ["{1, 2, 4, 5, 6}", "{2, 4}", "{1, 5}", "{4}"],
    answer: "{1, 2, 4, 5, 6}"
  },
  {
    question: "Is 0 a rational number?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Simplify: 5m + 3m - 2m.", image: null,
    options: ["6m", "4m", "5m", "3m"],
    answer: "6m"
  },
  {
    question: "Simplify ?72.", image: null,
    options: ["6?2", "5?2", "4?2", "3?2"],
    answer: "6?2"
  },
  {
    question: "Convert binary 1111 to decimal.", image: null,
    options: ["15", "14", "16", "13"],
    answer: "15"
  },
  {
    question: "If f(x) = x² - 2x + 1, find f(3).", image: null,
    options: ["4", "2", "6", "8"],
    answer: "4"
  },
  {
    question: "How many sides does a pentagon have?", image: null,
    options: ["5", "6", "7", "8"],
    answer: "5"
  },
  {
    question: "Solve for x: 4x - 3 = 13.", image: null,
    options: ["4", "5", "6", "3"],
    answer: "4"
  },
  {
    question: "What is the bearing of north-west?", image: null,
    options: ["315°", "45°", "135°", "225°"],
    answer: "315°"
  },
  {
    question: "Vector K = 3i + 4j. Find magnitude of K.", image: null,
    options: ["5", "6", "7", "8"],
    answer: "5"
  },
  {
    question: "Find the median of: 1, 3, 3, 6, 7, 8, 9.", image: null,
    options: ["6", "5", "7", "3"],
    answer: "6"
  },
  {
    question: "Is reflection a rigid motion?", image: null,
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "If 12 liters of juice cost $36, what is the cost per liter?", image: null,
    options: ["$3", "$2", "$4", "$5"],
    answer: "$3"
  },
  {
    question: "Calculate 40% of 150.", image: null,
    options: ["60", "50", "70", "80"],
    answer: "60"
  },

  // YEAR 2
  {
    question: "Calculate 55 mod 7.", image: null,
    options: ["6", "5", "4", "3"],
    answer: "6"
  },
  {
    question: "Solve for x: log?(x) = 4.", image: null,
    options: ["81", "64", "27", "16"],
    answer: "81"
  },
  {
    question: "Solve simultaneous: 2x + 3y = 13, x - y = 1.", image: null,
    options: ["x=4, y=3", "x=3, y=2", "x=5, y=4", "x=2, y=1"],
    answer: "x=4, y=3"
  },
  {
    question: "If y varies directly as x² and y=18 when x=3, find y when x=6.", image: null,
    options: ["72", "54", "36", "108"],
    answer: "72"
  },
  {
    question: "Find the mode of: 2, 3, 5, 3, 7, 3, 4.", image: null,
    options: ["3", "2", "5", "7"],
    answer: "3"
  },
  {
    question: "Factorize: x² + 5x + 6.", image: null,
    options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x + 3)(x + 5)", "(x + 4)(x + 2)"],
    answer: "(x + 2)(x + 3)"
  },
  {
    question: "Calculate the surface area of a cube with side 4 cm.", image: null,
    options: ["96 cm²", "64 cm²", "48 cm²", "80 cm²"],
    answer: "96 cm²"
  },
  {
    question: "Calculate tan 45°.", image: null,
    options: ["1", "0", "?3", "0.5"],
    answer: "1"
  },
  {
    question: "Find the 7th term of the arithmetic sequence 5, 8, 11, 14,...", image: null,
    options: ["23", "24", "26", "25"],
    answer: "23"
  },
  {
    question: "If a figure is reduced by scale factor 1/3, what happens to its area?", image: null,
    options: ["Area is multiplied by 1/9", "Area triples", "Area halves", "Area doubles"],
    answer: "Area is multiplied by 1/9"
  },

  // YEAR 3
  {
    question: "Which tool is used to draw an angle of 60°?", image: null,
    options: ["Compass", "Protractor", "Ruler", "Set square"],
    answer: "Protractor"
  },
  {
    question: "What is the contrapositive of 'If p then q'?", image: null,
    options: [
      "If not q then not p",
      "If q then p",
      "If not p then not q",
      "If p then not q"
    ],
    answer: "If not q then not p"
  },
  {
    question: "Calculate cos 0°.", image: null,
    options: ["1", "0", "0.5", "-1"],
    answer: "1"
  },
  

{
  question: "In the diagram, a triangle has base 10 cm and height 6 cm. Find its area.",
  image: "/images/triangle1.png",
  options: ["30 cm²", "60 cm²", "16 cm²", "20 cm²"],
  answer: "30 cm²"
},

{
  question: "A circle has radius 7 cm as shown. Find its circumference. (Take ? = 22/7)",
  image: "/images/circle1.png",
  options: ["44 cm", "22 cm", "154 cm", "49 cm"],
  answer: "44 cm"
},

{
  question: "Find angle x in the straight line diagram.",
  image: "/images/angle1.png",
  options: ["30°", "60°", "120°", "150°"],
  answer: "120°"
},

{
  question: "Calculate the area of the rectangle shown (length = 8 cm, width = 5 cm).",
  image: "/images/rectangle1.png",
  options: ["13 cm²", "40 cm²", "26 cm²", "80 cm²"],
  answer: "40 cm²"
},

{
  question: "Find the perimeter of the square with side 6 cm.",
  image: "/images/square1.png",
  options: ["12 cm", "24 cm", "36 cm", "18 cm"],
  answer: "24 cm"
},

{
  question: "In the diagram, two angles are 50° and 60°. Find the third angle.",
  image: "/images/triangle2.png",
  options: ["70°", "60°", "80°", "90°"],
  answer: "70°"
},

{
  question: "Find the volume of the cube with side 4 cm.",
  image: "/images/cube1.png",
  options: ["16 cm³", "64 cm³", "32 cm³", "48 cm³"],
  answer: "64 cm³"
},

{
  question: "Calculate the area of a circle with diameter 14 cm.",
  image: "/images/circle2.png",
  options: ["154 cm²", "44 cm²", "77 cm²", "28 cm²"],
  answer: "154 cm²"
},

{
  question: "Find the missing angle x in the triangle.",
  image: "/images/triangle3.png",
  options: ["45°", "60°", "75°", "90°"],
  answer: "75°"
},

{
  question: "Find the gradient of the line shown in the graph.",
  image: "/images/graph1.png",
  options: ["1", "2", "3", "4"],
  answer: "2"
},

// Continue same pattern…

{
  question: "A parallelogram has base 12 cm and height 5 cm. Find its area.",
  image: "/images/parallelogram1.png",
  options: ["60 cm²", "24 cm²", "17 cm²", "30 cm²"],
  answer: "60 cm²"
},

{
  question: "Find the value of x in the intersecting lines diagram.",
  image: "/images/angle2.png",
  options: ["40°", "60°", "80°", "100°"],
  answer: "80°"
},

{
  question: "Find the length of the hypotenuse in the right-angled triangle.",
  image: "/images/triangle4.png",
  options: ["5 cm", "10 cm", "13 cm", "15 cm"],
  answer: "13 cm"
},

{
  question: "Find the area of the trapezium shown.",
  image: "/images/trapezium1.png",
  options: ["40 cm²", "60 cm²", "80 cm²", "100 cm²"],
  answer: "60 cm²"
},

{
  question: "Find the sum of interior angles of the pentagon.",
  image: "/images/pentagon1.png",
  options: ["360°", "540°", "720°", "180°"],
  answer: "540°"
},

{
  question: "Find the circumference of the semicircle.",
  image: "/images/semicircle1.png",
  options: ["22 cm", "44 cm", "66 cm", "88 cm"],
  answer: "44 cm"
},

{
  question: "Find the area of the sector shown.",
  image: "/images/sector1.png",
  options: ["22 cm²", "44 cm²", "77 cm²", "154 cm²"],
  answer: "77 cm²"
},

{
  question: "Find the value of angle x in the parallel lines diagram.",
  image: "/images/parallel1.png",
  options: ["50°", "60°", "70°", "80°"],
  answer: "60°"
},

{
  question: "Find the area of the shaded region.",
  image: "/images/shaded1.png",
  options: ["20 cm²", "30 cm²", "40 cm²", "50 cm²"],
  answer: "30 cm²"
},

{
  question: "Find the mean of the data from the bar chart.",
  image: "/images/chart1.png",
  options: ["4", "5", "6", "7"],
  answer: "5"
},
  {
    question: "Sum of interior angles of a triangle?", image: null,
    options: ["180°", "360°", "90°", "270°"],
    answer: "180°"
  },
  {
    question: "Solve for x: 6x + 2 = 20.", image: null,
    options: ["3", "4", "2", "5"],
    answer: "3"
  },
  {
    question: "Which tool is used to measure angles?", image: null,
    options: ["Protractor", "Compass", "Ruler", "Set square"],
    answer: "Protractor"
  },
  {
    question: "Find the 8th term of the sequence 1, 4, 7, 10,...", image: null,
    options: ["22", "24", "23", "25"],
    answer: "22"
  },
  {
    question: "What is the supplement of 110°?", image: null,
    options: ["70°", "80°", "60°", "90°"],
    answer: "70°"
  },
  {
    question: "Which is the inverse of 'If p then q'?", image: null,
    options: [
      "If not p then not q",
      "If q then p",
      "If not q then not p",
      "If p then not q"
    ],
    answer: "If not p then not q"
  },
  {
    question: "A triangle with sides 3 cm, 4 cm, and 5 cm is:", image: null,
    options: ["Right-angled", "Equilateral", "Isosceles", "Scalene"],
    answer: "Right-angled"
  }

];

export default coreMathsQuestions;









