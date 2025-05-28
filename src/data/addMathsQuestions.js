const addMathsQuestions = [
  {
    question: "The universal set U = {1,2,3,4,5,6,7,8,9}, A = {2,4,6}, B = {3,4,5,6}. Find A ∪ B.",
    options: ["{2,3,4,5,6}", "{2,4,6,3,5}", "{2,3,4,5,6}", "{1,2,3,4,5,6,7,8,9}"],
    answer: "{2,3,4,5,6}"
  },
  {
    question: "Simplify √12 + √27 - √3.",
    options: ["4√3", "5√3", "6√3", "2√3"],
    answer: "4√3"
  },
  {
    question: "If * is defined on real numbers by a * b = ab + a, find 2 * 3.",
    options: ["6", "8", "9", "7"],
    answer: "8"
  },
  {
    question: "Let f(x) = 3x + 2. What is f(4)?",
    options: ["10", "14", "12", "8"],
    answer: "14"
  },
  {
    question: "The function f(x) = x² + 3x – 4 is a:",
    options: ["Polynomial of degree 1", "Polynomial of degree 2", "Rational function", "Binomial"],
    answer: "Polynomial of degree 2"
  },
  {
    question: "What is the remainder when x³ + 2x² - 3x + 4 is divided by x - 2?",
    options: ["0", "4", "10", "6"],
    answer: "10"
  },
  {
    question: "If f(x) = 1/(x - 2), what is the domain of f(x)?",
    options: ["x ≠ 0", "x ≠ -2", "x ≠ 2", "x ≠ 1"],
    answer: "x ≠ 2"
  },
  {
    question: "Find the constant term in the expansion of (2x - 3)³.",
    options: ["-27", "-54", "-36", "-81"],
    answer: "-27"
  },
  {
    question: "Simplify (2√3)².",
    options: ["6", "12", "4", "3"],
    answer: "12"
  },
  {
    question: "If A = {1,2,3,4}, B = {3,4,5,6}, find A ∩ B.",
    options: ["{3,4}", "{1,2}", "{5,6}", "{1,2,3,4}"],
    answer: "{3,4}"
  },
  {
    question: "What is the coefficient of x² in the expansion of (x + 2)³?",
    options: ["6", "4", "12", "3"],
    answer: "12"
  },
  {
    question: "Simplify: (x² - 1)/(x + 1).",
    options: ["x - 1", "x + 1", "x² - 1", "x - 2"],
    answer: "x - 1"
  },
  {
    question: "If g(x) = x² and h(x) = x + 1, find g(h(x)).",
    options: ["x² + 1", "(x + 1)²", "x² + 2x + 1", "x + 2"],
    answer: "x² + 2x + 1"
  },
  {
    question: "Simplify: √(50) + √(8).",
    options: ["√58", "7√2", "5√2 + 2√2", "6√2"],
    answer: "7√2"
  },
  {
    question: "In binary operation, if a ⊗ b = a + 2b, what is 2 ⊗ 3?",
    options: ["6", "8", "10", "12"],
    answer: "8"
  },
  {
    question: "Which of the following is a rational function?",
    options: ["x² + 1", "1/(x - 1)", "√x", "x³ - 2x"],
    answer: "1/(x - 1)"
  },
  {
    question: "Evaluate (3 - √2)(3 + √2).",
    options: ["7", "9", "11", "5"],
    answer: "7"
  },
  {
    question: "The inverse of the function f(x) = 2x + 1 is:",
    options: ["(x - 1)/2", "2x - 1", "1/(2x)", "x/2 + 1"],
    answer: "(x - 1)/2"
  },
  {
    question: "Simplify: (x + 1)(x² - x + 1).",
    options: ["x³ + 1", "x³ - 1", "x² + 1", "x³ - x² + x + 1"],
    answer: "x³ + 1"
  },
  {
    question: "The nth term of a polynomial is 2n² - 3n + 1. Find the third term.",
    options: ["4", "7", "10", "1"],
    answer: "4"
  },

  // (30 more questions below follow similar format)

  {
    question: "What is the coefficient of x⁴ in the expansion of (1 + x)⁵?",
    options: ["5", "10", "1", "15"],
    answer: "5"
  },
  {
    question: "Which of the following is NOT a function?",
    options: ["f(x) = x²", "f(x) = √x", "f(x) = 1/x", "f(x) = ±√x"],
    answer: "f(x) = ±√x"
  },
  {
    question: "Solve: (x - 1)/(x + 2) = 2.",
    options: ["x = -4", "x = 4", "x = 2", "x = 1"],
    answer: "x = 4"
  },
  {
    question: "If f(x) = x² - 2x and g(x) = x + 1, find f(g(x)).",
    options: ["x² + 2x + 1", "x² + 1", "x²", "x² + 4x + 1"],
    answer: "x² + 2x + 1"
  },
  {
    question: "Find the value of x in the inequality: 2x - 3 < 7.",
    options: ["x < 5", "x < 2", "x > 5", "x > 2"],
    answer: "x < 5"
  },
  {
    question: "Which of the following is a binomial expression?",
    options: ["x² + x", "x + 1", "x", "x² + 2x + 1"],
    answer: "x + 1"
  },
  {
    question: "What is the inverse of the function f(x) = (x - 2)/3?",
    options: ["3x + 2", "3x - 2", "3x + 6", "3x + 1"],
    answer: "3x + 2"
  },
  {
    question: "If x + 1 is a factor of f(x) = x³ + 2x² - 5x - 6, find the remainder when f(x) is divided by x + 1.",
    options: ["0", "-2", "1", "-1"],
    answer: "0"
  },
  {
    question: "Find the middle term in the expansion of (x + 2)⁴.",
    options: ["12x²", "6x²", "4x²", "8x²"],
    answer: "6x²"
  },
  {
    question: "What is the least common multiple of √18 and √8?",
    options: ["2√2", "6√2", "12", "12√2"],
    answer: "12"
  },
  {
    question: "The domain of f(x) = √(x - 3) is:",
    options: ["x ≥ 3", "x > 3", "x ≠ 3", "x ≤ 3"],
    answer: "x ≥ 3"
  },
  {
    question: "Find the constant term in (x - 1)⁴.",
    options: ["-1", "4", "1", "0"],
    answer: "1"
  },
  {
    question: "Solve: 5x² + 6x + 1 = 0.",
    options: ["x = -1, -1/5", "x = -1/5, -1", "x = 1/5, 1", "x = 1, 1/5"],
    answer: "x = -1, -1/5"
  },
  {
    question: "What is the simplified form of (x + 1)(x - 1)?",
    options: ["x² + 1", "x² - 1", "x²", "x² - 2"],
    answer: "x² - 1"
  },
  {
    question: "If a binary operation ⊕ is defined by a ⊕ b = ab - b, find 3 ⊕ 4.",
    options: ["8", "12", "9", "10"],
    answer: "8"
  },
  {
    question: "What is the domain of the rational function f(x) = (x + 2)/(x - 3)?",
    options: ["x ≠ 2", "x ≠ 3", "x ≠ -2", "x ∈ ℝ"],
    answer: "x ≠ 3"
  },
  {
    question: "Which of the following expressions is a surd?",
    options: ["√7", "7", "√9", "3"],
    answer: "√7"
  },
  {
    question: "Evaluate (3√2)².",
    options: ["6", "12", "9", "18"],
    answer: "18"
  },
  {
    question: "What is the value of n in the binomial expansion (1 + x)^n if the 4th term is 120x³?",
    options: ["6", "7", "8", "5"],
    answer: "5"
  },
  {
    question: "Simplify (x² - 9)/(x + 3).",
    options: ["x - 3", "x + 3", "x² - 3", "x - 9"],
    answer: "x - 3"
  },
  {
    question: "101. The value of (3 + √2)(3 - √2) is:",
    options: ["7", "9", "11", "13"],
    answer: "7"
  },
  {
    question: "102. If x ∈ A = {2, 4, 6} and x ∈ B = {4, 6, 8}, find A ∩ B.",
    options: ["{2, 4, 6, 8}", "{4, 6}", "{2, 8}", "{2, 4}"],
    answer: "{4, 6}"
  },
  {
    question: "103. Simplify: (√50 + √8)",
    options: ["3√2", "4√2", "5√2 + 2√2", "5√2 + √8"],
    answer: "5√2 + 2√2"
  },
  {
    question: "104. What is the inverse of the function f(x) = 2x - 5?",
    options: ["f⁻¹(x) = (x + 5)/2", "f⁻¹(x) = 2x + 5", "f⁻¹(x) = (x - 5)/2", "f⁻¹(x) = (x + 5)*2"],
    answer: "f⁻¹(x) = (x + 5)/2"
  },
  {
    question: "105. Expand and simplify: (x + 2)^3",
    options: ["x^3 + 6x^2 + 12x + 8", "x^3 + 3x^2 + 6x + 8", "x^3 + 3x^2 + 6x + 6", "x^3 + 4x^2 + 4x + 8"],
    answer: "x^3 + 6x^2 + 12x + 8"
  },
  {
    question: "106. Which of the following represents a binary operation?",
    options: ["Addition", "Subtraction", "Multiplication", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "107. Solve the inequality: 3x - 7 < 8",
    options: ["x < 5", "x > 5", "x < 3", "x > 3"],
    answer: "x < 5"
  },
  {
    question: "108. The gradient of the line 2x + 3y = 6 is:",
    options: ["-2/3", "-3/2", "2/3", "3/2"],
    answer: "-2/3"
  },
  {
    question: "109. A vector of magnitude 5 units pointing due East is represented as:",
    options: ["5i", "5j", "-5i", "-5j"],
    answer: "5i"
  },
  {
    question: "110. The nth term of a sequence is given by Tn = 2n + 3. What is T4?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "111. Rationalize the denominator: 5 / √3",
    options: ["5√3 / 3", "√3 / 5", "5 / 3√3", "5√3 / √3"],
    answer: "5√3 / 3"
  },
  {
    question: "112. Evaluate: log₂(32)",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    question: "113. If A = {1, 2, 3}, then the power set P(A) has how many elements?",
    options: ["3", "6", "8", "9"],
    answer: "8"
  },
  {
    question: "114. Find the coefficient of x^2 in the expansion of (x + 3)^4.",
    options: ["27", "36", "54", "108"],
    answer: "54"
  },
  {
    question: "115. The sum of the first 10 terms of the arithmetic sequence 2, 5, 8, ... is:",
    options: ["145", "150", "155", "160"],
    answer: "155"
  },
  {
    question: "116. Solve: 3^x = 81",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    question: "117. Find the equation of the line passing through (0, 2) with gradient 3.",
    options: ["y = 3x + 2", "y = 2x + 3", "y = 3x - 2", "y = x + 2"],
    answer: "y = 3x + 2"
  },
  {
    question: "118. Which is a one-to-one function?",
    options: ["f(x) = x^2", "f(x) = x^3", "f(x) = sin x", "f(x) = |x|"],
    answer: "f(x) = x^3"
  },
  {
    question: "119. The domain of f(x) = 1/(x - 3) is:",
    options: ["x ≠ 3", "x ≥ 3", "x > 0", "x ≠ 0"],
    answer: "x ≠ 3"
  },
  {
    question: "120. What is the value of n in 2ⁿ = 128?",
    options: ["6", "7", "8", "9"],
    answer: "7"
  },
  {
    question: "121. What is the determinant of the matrix [[1, 2], [3, 4]]?",
    options: ["-2", "-1", "2", "1"],
    answer: "-2"
  },
  {
    question: "122. Evaluate: ∫3x² dx",
    options: ["x^3 + C", "x^3", "3x + C", "x² + C"],
    answer: "x^3 + C"
  },
  {
    question: "123. If a vector has components (4, 3), its magnitude is:",
    options: ["5", "6", "7", "25"],
    answer: "5"
  },
  {
    question: "124. If f(x) = x² + 2x + 1, find f(-1).",
    options: ["0", "1", "-1", "2"],
    answer: "0"
  },
  {
    question: "125. The solution to log₅(x) = 3 is:",
    options: ["x = 15", "x = 125", "x = 25", "x = 5"],
    answer: "x = 125"
  },
  {
    question: "126. Convert 64 to base 2.",
    options: ["1000000", "111111", "100000", "1100000"],
    answer: "1000000"
  },
  {
    question: "127. Which of these is a surd?",
    options: ["√5", "3", "1/2", "4"],
    answer: "√5"
  },
  {
    question: "128. Find the midpoint between (1, 4) and (5, 10).",
    options: ["(3, 6)", "(2, 7)", "(4, 8)", "(5, 7)"],
    answer: "(3, 7)"
  },
  {
    question: "129. The quadratic expression x² - 5x + 6 factors into:",
    options: ["(x - 2)(x - 3)", "(x + 2)(x + 3)", "(x - 1)(x - 6)", "(x + 1)(x - 6)"],
    answer: "(x - 2)(x - 3)"
  },
  {
    question: "130. How many terms are in the expansion of (x + y)^5?",
    options: ["5", "6", "7", "10"],
    answer: "6"
  },
  // 20 more to complete the part
  // Questions 131–150 (you can ask to continue anytime)
  {
    question: "The value of (3 + √2)(3 - √2) is:",
    options: ["7", "9", "11", "13"],
    answer: "7"
  },
  {
    question: "If x ∈ A = {2, 4, 6} and x ∈ B = {4, 6, 8}, find A ∩ B.",
    options: ["{2, 4, 6, 8}", "{4, 6}", "{2, 8}", "{2, 4}"],
    answer: "{4, 6}"
  },
  {
    question: "Simplify: (√50 + √8)",
    options: ["3√2", "4√2", "5√2 + 2√2", "5√2 + √8"],
    answer: "5√2 + 2√2"
  },
  {
    question: "What is the inverse of the function f(x) = 2x - 5?",
    options: ["f⁻¹(x) = (x + 5)/2", "f⁻¹(x) = 2x + 5", "f⁻¹(x) = (x - 5)/2", "f⁻¹(x) = (x + 5)*2"],
    answer: "f⁻¹(x) = (x + 5)/2"
  },
  {
    question: "Expand and simplify: (x + 2)^3",
    options: ["x^3 + 6x^2 + 12x + 8", "x^3 + 3x^2 + 6x + 8", "x^3 + 3x^2 + 6x + 6", "x^3 + 4x^2 + 4x + 8"],
    answer: "x^3 + 6x^2 + 12x + 8"
  },
  {
    question: "Which of the following represents a binary operation?",
    options: ["Addition", "Subtraction", "Multiplication", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Solve the inequality: 3x - 7 < 8",
    options: ["x < 5", "x > 5", "x < 3", "x > 3"],
    answer: "x < 5"
  },
  {
    question: "The gradient of the line 2x + 3y = 6 is:",
    options: ["-2/3", "-3/2", "2/3", "3/2"],
    answer: "-2/3"
  },
  {
    question: "A vector of magnitude 5 units pointing due East is represented as:",
    options: ["5i", "5j", "-5i", "-5j"],
    answer: "5i"
  },
  {
    question: "The nth term of a sequence is given by Tn = 2n + 3. What is T4?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "Rationalize the denominator: 5 / √3",
    options: ["5√3 / 3", "√3 / 5", "5 / 3√3", "5√3 / √3"],
    answer: "5√3 / 3"
  },
  {
    question: "Evaluate: log₂(32)",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    question: "If A = {1, 2, 3}, then the power set P(A) has how many elements?",
    options: ["3", "6", "8", "9"],
    answer: "8"
  },
  {
    question: "Find the coefficient of x^2 in the expansion of (x + 3)^4.",
    options: ["27", "36", "54", "108"],
    answer: "54"
  },
  {
    question: "The sum of the first 10 terms of the arithmetic sequence 2, 5, 8, ... is:",
    options: ["145", "150", "155", "160"],
    answer: "155"
  },
  {
    question: "Solve: 3^x = 81",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    question: "Find the equation of the line passing through (0, 2) with gradient 3.",
    options: ["y = 3x + 2", "y = 2x + 3", "y = 3x - 2", "y = x + 2"],
    answer: "y = 3x + 2"
  },
  {
    question: "Which is a one-to-one function?",
    options: ["f(x) = x^2", "f(x) = x^3", "f(x) = sin x", "f(x) = |x|"],
    answer: "f(x) = x^3"
  },
  {
    question: "The domain of f(x) = 1/(x - 3) is:",
    options: ["x ≠ 3", "x ≥ 3", "x > 0", "x ≠ 0"],
    answer: "x ≠ 3"
  },
  {
    question: "What is the value of n in 2ⁿ = 128?",
    options: ["6", "7", "8", "9"],
    answer: "7"
  },
  {
    question: "What is the determinant of the matrix [[1, 2], [3, 4]]?",
    options: ["-2", "-1", "2", "1"],
    answer: "-2"
  },
  {
    question: "Evaluate: ∫3x² dx",
    options: ["x^3 + C", "x^3", "3x + C", "x² + C"],
    answer: "x^3 + C"
  },
  {
    question: "If a vector has components (4, 3), its magnitude is:",
    options: ["5", "6", "7", "25"],
    answer: "5"
  },
  {
    question: "If f(x) = x² + 2x + 1, find f(-1).",
    options: ["0", "1", "-1", "2"],
    answer: "0"
  },
  {
    question: "The solution to log₅(x) = 3 is:",
    options: ["x = 15", "x = 125", "x = 25", "x = 5"],
    answer: "x = 125"
  },
  {
    question: "Convert 64 to base 2.",
    options: ["1000000", "111111", "100000", "1100000"],
    answer: "1000000"
  },
  {
    question: "Which of these is a surd?",
    options: ["√5", "3", "1/2", "4"],
    answer: "√5"
  },
  {
    question: "Find the midpoint between (1, 4) and (5, 10).",
    options: ["(3, 6)", "(2, 7)", "(4, 8)", "(5, 7)"],
    answer: "(3, 7)"
  },
  {
    question: "The quadratic expression x² - 5x + 6 factors into:",
    options: ["(x - 2)(x - 3)", "(x + 2)(x + 3)", "(x - 1)(x - 6)", "(x + 1)(x - 6)"],
    answer: "(x - 2)(x - 3)"
  },
  {
    question: "How many terms are in the expansion of (x + y)^5?",
    options: ["5", "6", "7", "10"],
    answer: "6"
  },
  {
    question: "Evaluate: log₁₀(1000)",
    options: ["1", "2", "3", "4"],
    answer: "3"
  },
  {
    question: "Simplify: (2 + √3)(2 - √3)",
    options: ["1", "4", "3", "√3"],
    answer: "1"
  },
  {
    question: "If f(x) = x² + 4 and g(x) = x - 1, find f(g(x))",
    options: ["x² - 2x + 5", "x² - 1", "(x - 1)² + 4", "x² + x - 5"],
    answer: "(x - 1)² + 4"
  },
  {
    question: "What is the 5th term of the geometric sequence 2, 4, 8, ...?",
    options: ["16", "32", "64", "128"],
    answer: "32"
  },
  {
    question: "Solve the inequality: 2x + 5 > 1",
    options: ["x > -2", "x > -1", "x < 2", "x > 3"],
    answer: "x > -2"
  },
  {
    question: "Which of these functions is not one-to-one?",
    options: ["f(x) = x³", "f(x) = 2x + 1", "f(x) = |x|", "f(x) = x - 7"],
    answer: "f(x) = |x|"
  },
  {
    question: "Find the slope of the line passing through (1, 2) and (3, 6).",
    options: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    question: "Differentiate y = 3x² + 2x - 1",
    options: ["6x + 2", "6x - 2", "3x + 2", "2x + 3"],
    answer: "6x + 2"
  },
  {
    question: "Integrate: ∫x dx",
    options: ["x", "x²", "x² / 2", "x / 2"],
    answer: "x² / 2"
  },
  {
    question: "Which of the following is not a surd?",
    options: ["√2", "√3", "√4", "√5"],
    answer: "√4"
  },
  {
    question: "What is the inverse of f(x) = 1/x?",
    options: ["f⁻¹(x) = x", "f⁻¹(x) = 1/x", "f⁻¹(x) = x²", "f⁻¹(x) = √x"],
    answer: "f⁻¹(x) = 1/x"
  },
  {
    question: "Find the sum of the first 6 terms of the geometric series: 2, 4, 8, ...",
    options: ["62", "63", "64", "66"],
    answer: "126"
  },
  {
    question: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∪ B?",
    options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2}", "{4, 5}"],
    answer: "{1, 2, 3, 4, 5}"
  },
  {
    question: "Simplify: (x² - 9)/(x - 3)",
    options: ["x + 3", "x - 3", "x² - 3", "x² + 3"],
    answer: "x + 3"
  },
  {
    question: "Evaluate the determinant of [[3, 2], [1, 4]]",
    options: ["10", "14", "12", "8"],
    answer: "10"
  },
  {
    question: "What is the binomial coefficient of x²y² in (x + y)^4?",
    options: ["6", "4", "12", "24"],
    answer: "6"
  },
  {
    question: "If sin x = 1/2 and x is acute, find x.",
    options: ["30°", "45°", "60°", "90°"],
    answer: "30°"
  },
  {
    question: "The midpoint of points A(2, 3) and B(6, 7) is:",
    options: ["(4, 5)", "(3, 5)", "(5, 6)", "(6, 7)"],
    answer: "(4, 5)"
  },
  {
    question: "Which of these is a function?",
    options: ["A = {(1,2), (2,3), (1,3)}", "B = {(1,2), (2,4)}", "C = {(1,2), (1,2)}", "D = {(2,3), (2,3)}"],
    answer: "B = {(1,2), (2,4)}"
  },
  {
    question: "Solve: x² - 16 = 0",
    options: ["x = ±4", "x = ±8", "x = 4", "x = -4"],
    answer: "x = ±4"
  },
  {
    question: "Which of the following is not a binary operation on real numbers?",
    options: ["Addition", "Multiplication", "Subtraction", "Square Root"],
    answer: "Square Root"
  },
  {
    question: "What is the range of f(x) = x²?",
    options: ["All real numbers", "x > 0", "x ≥ 0", "x < 0"],
    answer: "x ≥ 0"
  },
  {
    question: "If a sequence is defined as Tn = n², what is the 6th term?",
    options: ["36", "30", "25", "49"],
    answer: "36"
  },
  {
    question: "Convert 45 to base 2.",
    options: ["101101", "110101", "100101", "111001"],
    answer: "101101"
  },
  {
    question: "Simplify: (3x²y)(2xy²)",
    options: ["6x³y³", "6x²y³", "5x²y³", "5x³y²"],
    answer: "6x³y³"
  },
  {
    question: "Factor completely: x² - 25",
    options: ["(x - 5)(x + 5)", "(x - 25)(x + 25)", "x(x - 25)", "(x + 5)²"],
    answer: "(x - 5)(x + 5)"
  },
  {
    question: "If A = [[1, 0], [0, 1]], what type of matrix is A?",
    options: ["Identity matrix", "Zero matrix", "Diagonal matrix", "Singular matrix"],
    answer: "Identity matrix"
  },
  {
    question: "Find the gradient of the line y = -3x + 7",
    options: ["-3", "3", "7", "-7"],
    answer: "-3"
  },
  {
    question: "What is the solution to 2^x = 16?",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    question: "Solve: x/3 = 5",
    options: ["x = 15", "x = 10", "x = 8", "x = 5"],
    answer: "x = 15"
  },
  {
    question: "Find the value of x if 3x + 2 = 11.",
    options: ["2", "3", "4", "5"],
    answer: "3"
  },
  {
    question: "What is the sum of the interior angles of a pentagon?",
    options: ["540°", "360°", "180°", "720°"],
    answer: "540°"
  },
  {
    question: "If f(x) = 2x + 1, find f⁻¹(x).",
    options: ["(x - 1)/2", "2x - 1", "(x + 1)/2", "1 - 2x"],
    answer: "(x - 1)/2"
  },
  {
    question: "Solve the quadratic equation x² - 5x + 6 = 0.",
    options: ["x = 2 or 3", "x = -2 or -3", "x = 1 or 6", "x = -1 or -6"],
    answer: "x = 2 or 3"
  },
  {
    question: "Which of the following is a rational function?",
    options: ["f(x) = (x + 1)/(x - 2)", "f(x) = x² + 1", "f(x) = √x", "f(x) = sin x"],
    answer: "f(x) = (x + 1)/(x - 2)"
  },
  {
    question: "Find the vector sum of u = 3i + 2j and v = -i + 4j.",
    options: ["2i + 6j", "4i + 6j", "2i - 2j", "4i - 2j"],
    answer: "2i + 6j"
  },
  {
    question: "What is the binomial expansion of (1 + x)³?",
    options: [
      "1 + 3x + 3x² + x³",
      "1 + x + x² + x³",
      "1 + 2x + 3x² + 4x³",
      "1 + 3x + x² + x³"
    ],
    answer: "1 + 3x + 3x² + x³"
  },
  {
    question: "If log₂ 8 = x, find the value of x.",
    options: ["1", "2", "3", "4"],
    answer: "3"
  },
  {
    question: "Simplify: (x³y²)²",
    options: ["x⁶y⁴", "x⁵y⁴", "x⁶y²", "x³y²"],
    answer: "x⁶y⁴"
  },
  {
    question: "If two events are independent, what is P(A ∩ B)?",
    options: [
      "P(A) × P(B)",
      "P(A) + P(B)",
      "P(A) - P(B)",
      "P(A) / P(B)"
    ],
    answer: "P(A) × P(B)"
  },
  {
    question: "Find the derivative of y = sin x.",
    options: ["cos x", "-cos x", "sin x", "-sin x"],
    answer: "cos x"
  },
  {
    question: "What is the integral of 1/x dx?",
    options: ["ln|x| + C", "x + C", "1/x + C", "e^x + C"],
    answer: "ln|x| + C"
  },
  {
    question: "If A = [[1, 2], [3, 4]] and B = [[2, 0], [1, 2]], find A + B.",
    options: [
      "[[3, 2], [4, 6]]",
      "[[2, 2], [3, 2]]",
      "[[3, 0], [4, 6]]",
      "[[1, 2], [3, 4]]"
    ],
    answer: "[[3, 2], [4, 6]]"
  },
  {
    question: "What is the probability of getting a head in a single toss of a fair coin?",
    options: ["1/2", "1/4", "1/3", "1"],
    answer: "1/2"
  },
  {
    question: "Find the equation of the line with slope 2 passing through (1, 3).",
    options: [
      "y = 2x + 1",
      "y = 2x + 3",
      "y = 2x + 2",
      "y = 3x + 2"
    ],
    answer: "y = 2x + 1"
  },
  {
    question: "Expand (2x - 3)².",
    options: [
      "4x² - 12x + 9",
      "4x² + 12x + 9",
      "2x² - 9",
      "4x² - 6x + 9"
    ],
    answer: "4x² - 12x + 9"
  },
  {
    question: "What is the solution set of |x - 3| < 5?",
    options: [
      "-2 < x < 8",
      "x > 8",
      "x < -2",
      "-8 < x < 2"
    ],
    answer: "-2 < x < 8"
  },
  {
    question: "If the sum of an arithmetic series is 50 and the number of terms is 5, what is the average term?",
    options: ["10", "5", "15", "50"],
    answer: "10"
  },
  {
    question: "Find the determinant of the matrix [[2, 3], [4, 5]].",
    options: ["-2", "10", "-7", "23"],
    answer: "-2"
  },
  {
    question: "Find the third term in the arithmetic progression 4, 7, 10, ...",
    options: ["7", "10", "13", "16"],
    answer: "10"
  },
  {
    question: "Simplify (x + 2)(x - 3).",
    options: ["x² - x - 6", "x² + x - 6", "x² - 5x + 6", "x² + 5x + 6"],
    answer: "x² - x - 6"
  },
  {
    question: "If sin A = 3/5 and A is acute, find cos A.",
    options: ["4/5", "3/4", "5/3", "1/5"],
    answer: "4/5"
  },
  {
    question: "Find the sum of the first 20 natural numbers.",
    options: ["210", "200", "190", "180"],
    answer: "210"
  },
  {
    question: "Evaluate log₅ 25.",
    options: ["2", "5", "10", "1"],
    answer: "2"
  },
  {
    question: "If the vector u = 2i - 3j, find its magnitude.",
    options: ["√13", "5", "1", "6"],
    answer: "√13"
  },
  {
    question: "Find the binomial coefficient for the term containing x² in the expansion of (1 + x)⁴.",
    options: ["6", "4", "3", "1"],
    answer: "6"
  },
  {
    question: "Solve for x: 2^x = 16.",
    options: ["4", "8", "2", "16"],
    answer: "4"
  },
  {
    question: "Differentiate y = x³ + 2x.",
    options: ["3x² + 2", "x² + 2", "3x + 2", "3x²"],
    answer: "3x² + 2"
  },
  {
    question: "Find the integral of 3x² dx.",
    options: ["x³ + C", "x² + C", "3x + C", "x³"],
    answer: "x³ + C"
  },
  {
    question: "Find the solution to the inequality 3x - 5 > 1.",
    options: ["x > 2", "x < 2", "x > -2", "x < -2"],
    answer: "x > 2"
  },
  {
    question: "Find the length of the vector 5i + 12j.",
    options: ["13", "17", "12", "10"],
    answer: "13"
  },
  {
    question: "If P(A) = 0.6 and P(B) = 0.5, find P(A ∪ B) if A and B are mutually exclusive.",
    options: ["1.1", "0.3", "0.6", "0.5"],
    answer: "1.1"
  },
  {
    question: "Expand and simplify (x - 2)(x + 5).",
    options: ["x² + 3x - 10", "x² - 3x + 10", "x² + 7x - 10", "x² - 7x + 10"],
    answer: "x² + 3x - 10"
  },
  {
    question: "What is the sum of the interior angles of a hexagon?",
    options: ["720°", "540°", "360°", "900°"],
    answer: "720°"
  },
  {
    question: "Find the next term in the sequence: 2, 6, 12, 20, ...",
    options: ["30", "32", "40", "36"],
    answer: "30"
  },
  {
    question: "If cos θ = 0.6 and θ is acute, find sin θ.",
    options: ["0.8", "0.6", "0.4", "0.5"],
    answer: "0.8"
  },
  {
    question: "Find the value of k if the vectors 3i + kj and 6i + 4j are perpendicular.",
    options: ["-2", "2", "3", "-3"],
    answer: "-2"
  },
  {
    question: "What is the solution to the equation 4x² - 9 = 0?",
    options: ["x = ±3/2", "x = ±2/3", "x = 3", "x = -3"],
    answer: "x = ±3/2"
  },
  {
    question: "Find the value of the binomial coefficient C(5,3).",
    options: ["10", "5", "15", "20"],
    answer: "10"
  },
  {
    question: "Find the sum of the geometric series 3 + 6 + 12 + ... + 96.",
    options: ["189", "192", "195", "198"],
    answer: "189"
  },
  {
    question: "Find the remainder when x³ + 2x² - 5x + 6 is divided by x - 1.",
    options: ["4", "2", "0", "3"],
    answer: "6"
  },
  {
    question: "Solve for x: log₃(x) + log₃(x - 2) = 1.",
    options: ["3", "2", "1", "4"],
    answer: "3"
  },
  {
    question: "If vectors a = 2i + 3j and b = i - 4j, find a · b.",
    options: ["-10", "14", "0", "12"],
    answer: "-10"
  },
  {
    question: "Find the maximum value of the quadratic function f(x) = -2x² + 4x + 1.",
    options: ["3", "5", "4", "6"],
    answer: "3"
  },
  {
    question: "If sin A = 1/2 and A is in the first quadrant, find A in degrees.",
    options: ["30°", "60°", "45°", "90°"],
    answer: "30°"
  },
  {
    question: "Differentiate y = 5x⁴ - 3x² + 2.",
    options: ["20x³ - 6x", "20x⁴ - 6x", "5x³ - 3x", "20x³ + 6x"],
    answer: "20x³ - 6x"
  },
  {
    question: "Integrate ∫(4x³ - 2x) dx.",
    options: ["x⁴ - x² + C", "x⁴ - 2x + C", "x⁴ + x² + C", "x³ - x + C"],
    answer: "x⁴ - x² + C"
  },
  {
    question: "Find the next term in the arithmetic sequence 7, 13, 19, 25, ...",
    options: ["31", "32", "33", "30"],
    answer: "31"
  },
  {
    question: "What is the probability of getting exactly 2 heads in 3 tosses of a fair coin?",
    options: ["3/8", "1/8", "1/2", "1/4"],
    answer: "3/8"
  },
  {
    question: "Find the sum of the first 10 terms of the arithmetic sequence 2, 5, 8, 11, ...",
    options: ["155", "140", "130", "120"],
    answer: "155"
  },
  {
    question: "If cos 2θ = 1/2, find θ in degrees where 0° ≤ θ ≤ 90°.",
    options: ["30°", "45°", "60°", "15°"],
    answer: "30°"
  },
  {
    question: "Find the equation of the line passing through (2,3) with gradient 4.",
    options: ["y = 4x - 5", "y = 4x + 5", "y = -4x + 3", "y = x + 3"],
    answer: "y = 4x - 5"
  },
  {
    question: "Calculate the determinant of the matrix [[3, 4], [2, 5]].",
    options: ["7", "23", "2", "11"],
    answer: "7"
  },
  {
    question: "Find the expansion of (1 - x)³.",
    options: ["1 - 3x + 3x² - x³", "1 + 3x + 3x² + x³", "1 - x³", "1 - 3x³"],
    answer: "1 - 3x + 3x² - x³"
  },
  {
    question: "If logₐ 2 = 0.3010 and logₐ 3 = 0.4771, find logₐ 6.",
    options: ["0.7781", "0.1761", "0.9542", "0.5230"],
    answer: "0.7781"
  },
  {
    question: "Solve the inequality |2x - 5| < 3.",
    options: ["1 < x < 4", "x < 1 or x > 4", "2 < x < 3", "x > 1 and x < 4"],
    answer: "1 < x < 4"
  },
  {
    question: "Find the coordinates of the midpoint of the line segment joining points A(2,5) and B(6,9).",
    options: ["(4,7)", "(8,14)", "(3,4)", "(2,9)"],
    answer: "(4,7)"
  },
  {
    question: "What is the scalar product of vectors 3i + 2j and 4i - j?",
    options: ["10", "14", "12", "8"],
    answer: "10"
  },
  {
    question: "Find the sum of the infinite geometric series 5 + 3 + 1.8 + ...",
    options: ["12.5", "10", "8", "15"],
    answer: "12.5"
  },
  {
    question: "If tan θ = 1, find θ in degrees (0° < θ < 90°).",
    options: ["45°", "30°", "60°", "90°"],
    answer: "45°"
  },
  {
    question: "Calculate the length of the vector 7i - 24j.",
    options: ["25", "31", "24", "7"],
    answer: "25"
  },
  {
    question: "Expand (2x - 3)².",
    options: ["4x² - 12x + 9", "4x² + 12x + 9", "2x² - 3x + 9", "4x² - 9"],
    answer: "4x² - 12x + 9"
  },
  {
    question: "Differentiate y = sin x.",
    options: ["cos x", "-cos x", "-sin x", "tan x"],
    answer: "cos x"
  },
  {
    question: "Integrate ∫cos x dx.",
    options: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
    answer: "sin x + C"
  },
  {
    question: "If f(x) = 2x + 1 and g(x) = x², find (f ∘ g)(x).",
    options: ["2x² + 1", "x² + 2x + 1", "2x + x²", "2x + 1"],
    answer: "2x² + 1"
  },
  {
    question: "Find the sum to n terms of the arithmetic series where first term a = 3 and common difference d = 5.",
    options: ["n/2 (6 + 5(n-1))", "n/2 (3 + 5(n-1))", "n(3 + 5n)", "n(3 + 5)"],
    answer: "n/2 (6 + 5(n-1))"
  },
  {
    question: "If a matrix A = [[2, 3], [1, 4]], find A².",
    options: [
      "[[7, 18], [6, 19]]",
      "[[5, 7], [5, 7]]",
      "[[4, 6], [2, 8]]",
      "[[8, 15], [7, 16]]"
    ],
    answer: "[[7, 18], [6, 19]]"
  },
  {
    question: "Solve the equation x² - 5x + 6 = 0.",
    options: ["x = 2 or 3", "x = 1 or 6", "x = -2 or -3", "x = -1 or -6"],
    answer: "x = 2 or 3"
  },
  {
    question: "Find the next term in the geometric sequence 3, 6, 12, 24, ...",
    options: ["48", "36", "30", "60"],
    answer: "48"
  },
  {
    question: "If logₐ x = 2, find x in terms of a.",
    options: ["a²", "2a", "a", "2"],
    answer: "a²"
  },
  {
    question: "What is the probability of drawing a red card from a standard deck of 52 cards?",
    options: ["1/2", "1/4", "1/3", "1/13"],
    answer: "1/2"
  },
  {
    question: "Find the remainder when x³ + 4x² - x + 7 is divided by x + 2.",
    options: ["3", "5", "7", "9"],
    answer: "3"
  },
  {
    question: "Solve for x: log₂(x) + log₂(x - 3) = 3.",
    options: ["4", "5", "6", "7"],
    answer: "5"
  },
  {
    question: "If vectors a = 4i - j and b = 2i + 3j, find a · b.",
    options: ["5", "11", "1", "10"],
    answer: "5"
  },
  {
    question: "Find the minimum value of the quadratic function f(x) = 3x² - 12x + 7.",
    options: ["-11", "-5", "7", "1"],
    answer: "-11"
  },
  {
    question: "If sin A = √3/2 and A is in the first quadrant, find A in degrees.",
    options: ["30°", "45°", "60°", "90°"],
    answer: "60°"
  },
  {
    question: "Differentiate y = 7x³ - 2x + 5.",
    options: ["21x² - 2", "21x³ - 2", "7x² - 2", "21x² + 2"],
    answer: "21x² - 2"
  },
  {
    question: "Integrate ∫(6x² - 4x + 1) dx.",
    options: ["2x³ - 2x² + x + C", "2x³ - 4x + C", "6x³ - 2x² + x + C", "2x³ + 2x² + x + C"],
    answer: "2x³ - 2x² + x + C"
  },
  {
    question: "Find the 8th term of the arithmetic sequence 5, 8, 11, 14, ...",
    options: ["26", "29", "30", "31"],
    answer: "26"
  },
  {
    question: "What is the probability of getting at least one head in two tosses of a fair coin?",
    options: ["3/4", "1/4", "1/2", "1"],
    answer: "3/4"
  },
  {
    question: "Find the sum of the first 15 terms of the arithmetic sequence 4, 7, 10, 13, ...",
    options: ["345", "300", "325", "360"],
    answer: "345"
  },
  {
    question: "If cos 3θ = 1/2, find θ in degrees where 0° ≤ θ ≤ 90°.",
    options: ["20°", "30°", "45°", "60°"],
    answer: "20°"
  },
  {
    question: "Find the equation of the line passing through (3, -1) with gradient -2.",
    options: ["y = -2x + 5", "y = 2x - 7", "y = -2x - 5", "y = 2x + 1"],
    answer: "y = -2x + 5"
  },
  {
    question: "Calculate the determinant of the matrix [[1, 2], [3, 4]].",
    options: ["-2", "10", "7", "5"],
    answer: "-2"
  },
  {
    question: "Find the expansion of (2 + x)³.",
    options: ["8 + 12x + 6x² + x³", "8 + 6x + 3x² + x³", "2 + 3x + 3x² + x³", "8 + 9x + 3x² + x³"],
    answer: "8 + 12x + 6x² + x³"
  },
  {
    question: "If logₐ 4 = 0.6021 and logₐ 5 = 0.6990, find logₐ 20.",
    options: ["1.3011", "1.3010", "1.3012", "1.3009"],
    answer: "1.3011"
  },
  {
    question: "Solve the inequality |3x + 1| ≥ 4.",
    options: ["x ≤ -5/3 or x ≥ 1", "-5/3 ≤ x ≤ 1", "x > -5/3 and x < 1", "x ≤ 5/3 or x ≥ -1"],
    answer: "x ≤ -5/3 or x ≥ 1"
  },
  {
    question: "Find the coordinates of the midpoint of the line segment joining points A(-1,4) and B(7,-2).",
    options: ["(3, 1)", "(4, 2)", "(2, 1)", "(3, -1)"],
    answer: "(3, 1)"
  },
  {
    question: "What is the scalar product of vectors 5i - 3j and 2i + j?",
    options: ["7", "10", "4", "13"],
    answer: "7"
  },
  {
    question: "Find the sum of the infinite geometric series 8 + 4 + 2 + ...",
    options: ["16", "14", "18", "20"],
    answer: "16"
  },
  {
    question: "If tan θ = √3, find θ in degrees (0° < θ < 90°).",
    options: ["30°", "45°", "60°", "90°"],
    answer: "60°"
  },
  {
    question: "Calculate the length of the vector 9i - 12j.",
    options: ["15", "21", "12", "9"],
    answer: "15"
  },
  {
    question: "Expand (x - 4)².",
    options: ["x² - 8x + 16", "x² + 8x + 16", "x² - 4x + 16", "x² - 16"],
    answer: "x² - 8x + 16"
  },
  {
    question: "Differentiate y = cos x.",
    options: ["-sin x", "cos x", "-cos x", "sin x"],
    answer: "-sin x"
  },
  {
    question: "Integrate ∫sec² x dx.",
    options: ["tan x + C", "-tan x + C", "sec x + C", "-sec x + C"],
    answer: "tan x + C"
  },
  {
    question: "If f(x) = 3x - 2 and g(x) = x² + 1, find (g ∘ f)(x).",
    options: ["(3x - 2)² + 1", "3x² - 2x + 1", "3x² - 2 + 1", "3x - 2 + 1"],
    answer: "(3x - 2)² + 1"
  },
  {
    question: "Find the sum to n terms of the geometric series with first term 5 and common ratio 2.",
    options: ["5(2ⁿ - 1)", "5(2ⁿ + 1)", "5(2ⁿ - 2)", "5(2ⁿ)"],
    answer: "5(2ⁿ - 1)"
  },
  {
    question: "If A = [[1, 2], [3, 4]], find the inverse of A.",
    options: [
      "[[-2, 1], [1.5, -0.5]]",
      "[[4, -2], [-3, 1]]",
      "[[2, -1], [-1.5, 0.5]]",
      "[[-1, 2], [3, -4]]"
    ],
    answer: "[[-2, 1], [1.5, -0.5]]"
  },
  {
    question: "Solve the quadratic equation x² - 4x - 5 = 0.",
    options: ["x = 5 or -1", "x = -5 or 1", "x = 4 or -5", "x = -4 or 5"],
    answer: "x = 5 or -1"
  },
  {
    question: "Find the next term in the geometric sequence 5, 10, 20, 40, ...",
    options: ["80", "100", "90", "70"],
    answer: "80"
  },
  {
    question: "If logₐ x = 3, find x in terms of a.",
    options: ["a³", "3a", "a", "3"],
    answer: "a³"
  },
  {
    question: "What is the probability of drawing an ace from a standard deck of 52 cards?",
    options: ["1/13", "1/52", "1/4", "1/26"],
    answer: "1/13"
  },
  {
    question: "Find the remainder when x³ + 4x² - x + 7 is divided by x + 2.",
    options: ["3", "5", "7", "9"],
    answer: "3"
  },
  {
    question: "Solve for x: log₂(x) + log₂(x - 3) = 3.",
    options: ["4", "5", "6", "7"],
    answer: "5"
  },
  {
    question: "If vectors a = 4i - j and b = 2i + 3j, find a · b.",
    options: ["5", "11", "1", "10"],
    answer: "5"
  },
  {
    question: "Find the minimum value of the quadratic function f(x) = 3x² - 12x + 7.",
    options: ["-11", "-5", "7", "1"],
    answer: "-11"
  },
  {
    question: "If sin A = √3/2 and A is in the first quadrant, find A in degrees.",
    options: ["30°", "45°", "60°", "90°"],
    answer: "60°"
  },
  {
    question: "Differentiate y = 7x³ - 2x + 5.",
    options: ["21x² - 2", "21x³ - 2", "7x² - 2", "21x² + 2"],
    answer: "21x² - 2"
  },
  {
    question: "Integrate ∫(6x² - 4x + 1) dx.",
    options: ["2x³ - 2x² + x + C", "2x³ - 4x + C", "6x³ - 2x² + x + C", "2x³ + 2x² + x + C"],
    answer: "2x³ - 2x² + x + C"
  },
  {
    question: "Find the 8th term of the arithmetic sequence 5, 8, 11, 14, ...",
    options: ["26", "29", "30", "31"],
    answer: "26"
  },
  {
    question: "What is the probability of getting at least one head in two tosses of a fair coin?",
    options: ["3/4", "1/4", "1/2", "1"],
    answer: "3/4"
  },
  {
    question: "Find the sum of the first 15 terms of the arithmetic sequence 4, 7, 10, 13, ...",
    options: ["345", "300", "325", "360"],
    answer: "345"
  },
  {
    question: "If cos 3θ = 1/2, find θ in degrees where 0° ≤ θ ≤ 90°.",
    options: ["20°", "30°", "45°", "60°"],
    answer: "20°"
  },
  {
    question: "Find the equation of the line passing through (3, -1) with gradient -2.",
    options: ["y = -2x + 5", "y = 2x - 7", "y = -2x - 5", "y = 2x + 1"],
    answer: "y = -2x + 5"
  },
  {
    question: "Calculate the determinant of the matrix [[1, 2], [3, 4]].",
    options: ["-2", "10", "7", "5"],
    answer: "-2"
  },
  {
    question: "Find the expansion of (2 + x)³.",
    options: ["8 + 12x + 6x² + x³", "8 + 6x + 3x² + x³", "2 + 3x + 3x² + x³", "8 + 9x + 3x² + x³"],
    answer: "8 + 12x + 6x² + x³"
  },
  {
    question: "If logₐ 4 = 0.6021 and logₐ 5 = 0.6990, find logₐ 20.",
    options: ["1.3011", "1.3010", "1.3012", "1.3009"],
    answer: "1.3011"
  },
  {
    question: "Solve the inequality |3x + 1| ≥ 4.",
    options: ["x ≤ -5/3 or x ≥ 1", "-5/3 ≤ x ≤ 1", "x > -5/3 and x < 1", "x ≤ 5/3 or x ≥ -1"],
    answer: "x ≤ -5/3 or x ≥ 1"
  },
  {
    question: "Find the coordinates of the midpoint of the line segment joining points A(-1,4) and B(7,-2).",
    options: ["(3, 1)", "(4, 2)", "(2, 1)", "(3, -1)"],
    answer: "(3, 1)"
  },
  {
    question: "What is the scalar product of vectors 5i - 3j and 2i + j?",
    options: ["7", "10", "4", "13"],
    answer: "7"
  },
  {
    question: "Find the sum of the infinite geometric series 8 + 4 + 2 + ...",
    options: ["16", "14", "18", "20"],
    answer: "16"
  },
  {
    question: "If tan θ = √3, find θ in degrees (0° < θ < 90°).",
    options: ["30°", "45°", "60°", "90°"],
    answer: "60°"
  },
  {
    question: "Calculate the length of the vector 9i - 12j.",
    options: ["15", "21", "12", "9"],
    answer: "15"
  },
  {
    question: "Expand (x - 4)².",
    options: ["x² - 8x + 16", "x² + 8x + 16", "x² - 4x + 16", "x² - 16"],
    answer: "x² - 8x + 16"
  },
  {
    question: "Differentiate y = cos x.",
    options: ["-sin x", "cos x", "-cos x", "sin x"],
    answer: "-sin x"
  },
  {
    question: "Integrate ∫sec² x dx.",
    options: ["tan x + C", "-tan x + C", "sec x + C", "-sec x + C"],
    answer: "tan x + C"
  },
  {
    question: "If f(x) = 3x - 2 and g(x) = x² + 1, find (g ∘ f)(x).",
    options: ["(3x - 2)² + 1", "3x² - 2x + 1", "3x² - 2 + 1", "3x - 2 + 1"],
    answer: "(3x - 2)² + 1"
  },
  {
    question: "Find the sum to n terms of the geometric series with first term 5 and common ratio 2.",
    options: ["5(2ⁿ - 1)", "5(2ⁿ + 1)", "5(2ⁿ - 2)", "5(2ⁿ)"],
    answer: "5(2ⁿ - 1)"
  },
  {
    question: "If A = [[1, 2], [3, 4]], find the inverse of A.",
    options: [
      "[[-2, 1], [1.5, -0.5]]",
      "[[4, -2], [-3, 1]]",
      "[[2, -1], [-1.5, 0.5]]",
      "[[-1, 2], [3, -4]]"
    ],
    answer: "[[-2, 1], [1.5, -0.5]]"
  },
  {
    question: "Solve the quadratic equation x² - 4x - 5 = 0.",
    options: ["x = 5 or -1", "x = -5 or 1", "x = 4 or -5", "x = -4 or 5"],
    answer: "x = 5 or -1"
  },
  {
    question: "Find the next term in the geometric sequence 5, 10, 20, 40, ...",
    options: ["80", "100", "90", "70"],
    answer: "80"
  },
  {
    question: "If logₐ x = 3, find x in terms of a.",
    options: ["a³", "3a", "a", "3"],
    answer: "a³"
  },
  {
    question: "What is the probability of drawing an ace from a standard deck of 52 cards?",
    options: ["1/13", "1/52", "1/4", "1/26"],
    answer: "1/13"
  },
  {
    question: "Find the angle between the vectors 2i + 5j and 3i - j.",
    options: ["60°", "45°", "90°", "30°"],
    answer: "60°"
  },
  {
    question: "Find the coordinates of the focus of the parabola y² = 8x.",
    options: ["(2, 0)", "(4, 0)", "(0, 2)", "(0, 4)"],
    answer: "(2, 0)"
  },
  {
    question: "Solve the system of equations: 2x + 3y = 7 and 4x - y = 5.",
    options: [
      "x = 2, y = 1",
      "x = 1, y = 2",
      "x = 3, y = -1",
      "x = 0, y = 7"
    ],
    answer: "x = 2, y = 1"
  },
  {
    question: "Express sin 2θ in terms of sin θ and cos θ.",
    options: [
      "2 sin θ cos θ",
      "sin² θ - cos² θ",
      "2 cos² θ - 1",
      "1 - 2 sin² θ"
    ],
    answer: "2 sin θ cos θ"
  },
  {
    question: "Find the inverse of the function f(x) = (2x - 3)/5.",
    options: [
      "f⁻¹(x) = (5x + 3)/2",
      "f⁻¹(x) = (2x + 3)/5",
      "f⁻¹(x) = (5x - 3)/2",
      "f⁻¹(x) = (3x + 2)/5"
    ],
    answer: "f⁻¹(x) = (5x + 3)/2"
  },
  {
    question: "Differentiate y = ln(x² + 1).",
    options: [
      "2x / (x² + 1)",
      "1 / (x² + 1)",
      "2 / (x + 1)",
      "x / (x² + 1)"
    ],
    answer: "2x / (x² + 1)"
  },
  {
    question: "Find the limit: limₓ→2 (x² - 4)/(x - 2).",
    options: ["4", "2", "0", "Undefined"],
    answer: "4"
  },
  {
    question: "Find the next term in the sequence defined by aₙ = 3n + 2.",
    options: ["20", "21", "22", "23"],
    answer: "20"
  },
  {
    question: "Calculate the angle between two vectors a = 3i + 4j and b = 4i + 3j.",
    options: ["30°", "45°", "60°", "90°"],
    answer: "30°"
  },
  {
    question: "If cos A = 3/5 and A is in the first quadrant, find sin A.",
    options: ["4/5", "3/5", "5/3", "1/5"],
    answer: "4/5"
  },
  {
    question: "Find the area of a triangle with vertices at (0,0), (4,0) and (4,3).",
    options: ["6", "12", "7", "5"],
    answer: "6"
  },
  {
    question: "Find the derivative of y = e^(3x).",
    options: ["3e^(3x)", "e^(3x)", "3xe^(3x)", "e^(x)"],
    answer: "3e^(3x)"
  },
  {
    question: "Evaluate ∫₀¹ (3x²) dx.",
    options: ["1", "3", "0", "1/3"],
    answer: "1"
  },
  {
    question: "Find the sum of the first 10 terms of the geometric series 2, 6, 18, ...",
    options: ["59,048", "59,047", "59,049", "59,050"],
    answer: "59,048"
  },
  {
    question: "Solve for x: 2^x = 16.",
    options: ["4", "2", "8", "16"],
    answer: "4"
  },
  {
    question: "Find the determinant of the matrix [[3, 2], [1, 4]].",
    options: ["10", "14", "6", "12"],
    answer: "10"
  },
  {
    question: "Find the projection of vector a = 3i + 4j onto vector b = i.",
    options: ["3", "4", "5", "1"],
    answer: "3"
  },
  {
    question: "If the sum to infinity of a geometric series is 12 and the first term is 8, find the common ratio.",
    options: ["2/3", "3/2", "1/3", "1/2"],
    answer: "1/3"
  },
  {
    question: "Find the general solution of sin x = 1/2.",
    options: [
      "x = 30° + 360°n or 150° + 360°n",
      "x = 45° + 360°n or 135° + 360°n",
      "x = 60° + 360°n or 120° + 360°n",
      "x = 0° + 360°n or 180° + 360°n"
    ],
    answer: "x = 30° + 360°n or 150° + 360°n"
  },
  {
    question: "Find the inverse matrix of [[2, 0], [0, 3]].",
    options: [
      "[[1/2, 0], [0, 1/3]]",
      "[[2, 0], [0, 3]]",
      "[[0, 2], [3, 0]]",
      "[[3, 0], [0, 2]]"
    ],
    answer: "[[1/2, 0], [0, 1/3]]"
  },
  {
    question: "If logₐ 9 = 2, find a.",
    options: ["3", "9", "81", "2"],
    answer: "3"
  },
  {
    question: "Find the solution set for the inequality 3x - 7 < 2.",
    options: [
      "x < 3",
      "x > 3",
      "x < 5",
      "x > 5"
    ],
    answer: "x < 3"
  },
  {
    question: "Find the angle between the line y = 3x + 2 and the x-axis.",
    options: ["71.57°", "45°", "30°", "60°"],
    answer: "71.57°"
  },
  {
    question: "If A = [[1, 2], [3, 4]] and B = [[2, 0], [1, 2]], find AB.",
    options: [
      "[[4, 4], [10, 8]]",
      "[[3, 4], [5, 8]]",
      "[[2, 4], [3, 6]]",
      "[[1, 2], [3, 4]]"
    ],
    answer: "[[4, 4], [10, 8]]"
  },
  {
    question: "Find the sum of the arithmetic series 5 + 8 + 11 + ... + 32.",
    options: ["165", "175", "180", "185"],
    answer: "165"
  },
  {
    question: "Solve the inequality |2x - 3| < 7.",
    options: [
      "-2 < x < 5",
      "x < -2 or x > 5",
      "x > -2 and x < 5",
      "x < 2 or x > 3"
    ],
    answer: "-2 < x < 5"
  },
  {
    question: "If f(x) = 2x² - 3x + 1, find f'(x).",
    options: ["4x - 3", "2x - 3", "2x² - 3", "4x + 3"],
    answer: "4x - 3"
  },
  {
    question: "Evaluate ∫ (2x + 1) dx.",
    options: ["x² + x + C", "x² + C", "2x² + x + C", "x + C"],
    answer: "x² + x + C"
  },
  {
    question: "Find the coefficient of x³ in the expansion of (2x - 3)⁴.",
    options: ["-432", "432", "-108", "108"],
    answer: "-432"
  },
  {
    question: "Calculate the distance between points A(3, 4) and B(7, 1).",
    options: ["5", "6", "7", "8"],
    answer: "5"
  },
  {
    question: "If the vectors a = i + 2j and b = 3i - j, find a · b.",
    options: ["1", "3", "1", "5"],
    answer: "1"
  },
  {
    question: "Find the general solution of cos x = 1/2.",
    options: [
      "x = 60° + 360°n or 300° + 360°n",
      "x = 45° + 360°n or 315° + 360°n",
      "x = 30° + 360°n or 150° + 360°n",
      "x = 0° + 360°n or 180° + 360°n"
    ],
    answer: "x = 60° + 360°n or 300° + 360°n"
  },
  {
    question: "Find the determinant of the matrix [[4, 5], [2, 3]].",
    options: ["2", "7", "2", "17"],
    answer: "2"
  },
  {
    question: "Simplify: logₐ (x²) + logₐ (x³).",
    options: [
      "5 logₐ x",
      "6 logₐ x",
      "2 logₐ x + 3 logₐ x",
      "logₐ (x⁵)"
    ],
    answer: "5 logₐ x"
  },
  {
    question: "If the sum to infinity of a geometric series is 20 and the first term is 16, find the common ratio.",
    options: ["1/4", "4/5", "1/5", "3/4"],
    answer: "1/5"
  },
  {
    question: "Find the projection of vector a = 4i + 3j onto vector b = i + j.",
    options: ["3.5", "3", "4", "2.5"],
    answer: "3.5"
  },
  {
    question: "Find the inverse of the function f(x) = (3x + 2)/5.",
    options: [
      "f⁻¹(x) = (5x - 2)/3",
      "f⁻¹(x) = (5x + 2)/3",
      "f⁻¹(x) = (3x - 2)/5",
      "f⁻¹(x) = (2x + 3)/5"
    ],
    answer: "f⁻¹(x) = (5x - 2)/3"
  },
  {
    question: "Solve for x: logₓ 16 = 2.",
    options: ["4", "2", "16", "8"],
    answer: "4"
  },
  {
    question: "Find the solution set for 2x² - 5x + 3 = 0.",
    options: [
      "x = 1 or x = 1.5",
      "x = -1 or x = 1.5",
      "x = 3 or x = 2",
      "x = -3 or x = 2"
    ],
    answer: "x = 1 or x = 1.5"
  },
  {
    question: "Calculate the angle between the vectors a = 2i + 3j and b = i + j.",
    options: ["16.26°", "30°", "45°", "60°"],
    answer: "16.26°"
  },
  {
    question: "Differentiate y = sin(3x).",
    options: ["3 cos(3x)", "cos(3x)", "3 sin(3x)", "-3 cos(3x)"],
    answer: "3 cos(3x)"
  },
  {
    question: "Evaluate ∫₁² (x³) dx.",
    options: ["15/4", "7.5", "5", "16"],
    answer: "15/4"
  },
  {
    question: "Find the sum of the first 8 terms of the series 1, 3, 5, 7, ...",
    options: ["64", "36", "48", "40"],
    answer: "64"
  },
  {
    question: "Solve the system: x + y = 4, 2x - y = 1.",
    options: [
      "x = 1, y = 3",
      "x = 3, y = 1",
      "x = 2, y = 2",
      "x = 4, y = 0"
    ],
    answer: "x = 1, y = 3"
  },
  {
    question: "Find the vertex of the parabola y = x² - 4x + 3.",
    options: [
      "(2, -1)",
      "(1, 0)",
      "(3, 0)",
      "(2, 1)"
    ],
    answer: "(2, -1)"
  },
  {
    question: "If A = [[2, 3], [1, 4]] and B = [[1, 0], [0, 1]], find A + B.",
    options: [
      "[[3, 3], [1, 5]]",
      "[[2, 3], [1, 4]]",
      "[[1, 3], [1, 5]]",
      "[[3, 0], [1, 5]]"
    ],
    answer: "[[3, 3], [1, 5]]"
  },
  {
    question: "Find the binomial expansion of (1 + 2x)³.",
    options: [
      "1 + 6x + 12x² + 8x³",
      "1 + 3x + 6x² + 8x³",
      "1 + 6x + 8x² + 12x³",
      "1 + 3x + 12x² + 8x³"
    ],
    answer: "1 + 6x + 12x² + 8x³"
  },
  {
    question: "Find the domain of the function f(x) = 1/(x - 2).",
    options: [
      "x ≠ 2",
      "x ≠ -2",
      "x > 2",
      "x < 2"
    ],
    answer: "x ≠ 2"
  },
  {
    question: "Calculate the gradient of the line passing through points (1, 2) and (3, 8).",
    options: ["3", "2", "4", "6"],
    answer: "3"
  },
  {
    question: "If log₃ x = 4, find x.",
    options: ["81", "64", "27", "12"],
    answer: "81"
  },
  {
    question: "Find the sum of the geometric series: 2 + 6 + 18 + ... + 486.",
    options: ["728", "728", "1458", "1094"],
    answer: "728"
  },
  {
    question: "Solve for x: 3^x = 81.",
    options: ["4", "3", "5", "2"],
    answer: "4"
  },
  {
    question: "Evaluate the limit: lim (x → 2) (x² - 4)/(x - 2).",
    options: ["4", "2", "0", "Undefined"],
    answer: "4"
  },
  {
    question: "Find the area of a triangle with vertices at (0,0), (4,0), and (4,3).",
    options: ["6", "12", "7", "8"],
    answer: "6"
  },
  {
    question: "Calculate the determinant of matrix [[1, 2], [3, 4]].",
    options: ["-2", "2", "10", "-10"],
    answer: "-2"
  },
  {
    question: "Simplify: sin²θ + cos²θ.",
    options: ["1", "0", "sin θ", "cos θ"],
    answer: "1"
  },
  {
    question: "Find the derivative of y = e^(3x).",
    options: ["3e^(3x)", "e^(3x)", "3xe^(3x)", "e^(x)"],
    answer: "3e^(3x)"
  },
  {
    question: "If A = 5 and B = 12, find the length of the hypotenuse in a right triangle.",
    options: ["13", "14", "17", "12"],
    answer: "13"
  },
  {
    question: "Evaluate the integral ∫ 3x² dx.",
    options: ["x³ + C", "x³", "3x³ + C", "x² + C"],
    answer: "x³ + C"
  },
  {
    question: "Find the sum of the infinite geometric series 8 + 4 + 2 + ...",
    options: ["16", "14", "12", "18"],
    answer: "16"
  },
  {
    question: "If vectors a = 3i + 4j and b = 6i + 8j, find the scalar multiple k such that b = ka.",
    options: ["2", "3", "4", "5"],
    answer: "2"
  },
  {
    question: "Calculate the cosine of the angle between vectors a = i + 2j and b = 3i + 6j.",
    options: ["1", "0.5", "0.67", "0.33"],
    answer: "1"
  },
  {
    question: "Solve for x: 2 sin x = 1 for 0° ≤ x ≤ 360°.",
    options: ["30°, 150°", "45°, 135°", "60°, 120°", "90°, 180°"],
    answer: "30°, 150°"
  },
  {
    question: "Find the inverse of the function f(x) = (x - 3)/2.",
    options: [
      "f⁻¹(x) = 2x + 3",
      "f⁻¹(x) = (x + 3)/2",
      "f⁻¹(x) = (2x - 3)",
      "f⁻¹(x) = (x - 3)/2"
    ],
    answer: "f⁻¹(x) = 2x + 3"
  },
  {
    question: "Determine the middle term in the expansion of (2x + 3)^6.",
    options: [
      "540x³",
      "720x³",
      "360x³",
      "480x³"
    ],
    answer: "540x³"
  },
  {
    question: "Find the inverse of matrix [[2, 3], [1, 4]].",
    options: [
      "[[4/5, -3/5], [-1/5, 2/5]]",
      "[[2, 3], [1, 4]]",
      "[[3/5, 4/5], [1/5, 2/5]]",
      "[[-4/5, 3/5], [1/5, -2/5]]"
    ],
    answer: "[[4/5, -3/5], [-1/5, 2/5]]"
  },
  {
    question: "Solve the inequality: 3x - 5 > 7.",
    options: [
      "x > 4",
      "x < 4",
      "x > -4",
      "x < -4"
    ],
    answer: "x > 4"
  },
  {
    question: "Find the sum of the first 10 terms of the arithmetic progression: 2, 5, 8, ...",
    options: ["140", "130", "115", "110"],
    answer: "140"
  },
  {
    question: "Find the value of k for which the system of equations has infinitely many solutions: 2x + ky = 4 and 4x + 6y = 8.",
    options: ["3", "2", "1", "4"],
    answer: "3"
  },
  {
    question: "Evaluate the determinant of matrix [[1, 2, 3], [0, 4, 5], [1, 0, 6]].",
    options: ["22", "24", "18", "20"],
    answer: "22"
  },
  {
    question: "Find the derivative of y = ln(3x + 1).",
    options: [
      "3/(3x + 1)",
      "1/(3x + 1)",
      "ln(3)",
      "3x + 1"
    ],
    answer: "3/(3x + 1)"
  },
  {
    question: "Find the next term in the sequence: 2, 6, 12, 20, ...",
    options: ["30", "28", "26", "32"],
    answer: "30"
  },
  {
    question: "Simplify: (sin θ)/(1 - cos θ) + (sin θ)/(1 + cos θ).",
    options: [
      "2 csc θ",
      "2 sec θ",
      "tan θ",
      "cot θ"
    ],
    answer: "2 csc θ"
  },
  {
    question: "Find the solution set of the equation: |x - 3| < 5.",
    options: [
      "-2 < x < 8",
      "x > 8",
      "x < -2",
      "x > 3"
    ],
    answer: "-2 < x < 8"
  },
  {
    question: "Evaluate the integral ∫ (2x + 3) dx.",
    options: [
      "x² + 3x + C",
      "x² + 6x + C",
      "x³ + 3x + C",
      "2x + 3 + C"
    ],
    answer: "x² + 3x + C"
  },
  {
    question: "Find the equation of the line perpendicular to y = 2x + 3 and passing through (1, 4).",
    options: [
      "y = -1/2 x + 9/2",
      "y = 1/2 x + 9/2",
      "y = -2x + 6",
      "y = 2x + 1"
    ],
    answer: "y = -1/2 x + 9/2"
  },
  {
    question: "Find the probability of getting exactly 3 heads in 5 tosses of a fair coin.",
    options: [
      "10/32",
      "5/32",
      "15/32",
      "20/32"
    ],
    answer: "10/32"
  },
  {
    question: "Calculate the angle between two vectors a = 3i - 2j and b = i + 4j.",
    options: [
      "45°",
      "60°",
      "90°",
      "30°"
    ],
    answer: "60°"
  },
  {
    question: "Determine the rank of the matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]].",
    options: [
      "2",
      "3",
      "1",
      "0"
    ],
    answer: "2"
  },
  {
    question: "If the correlation coefficient between variables X and Y is 0.8, interpret the relationship.",
    options: [
      "Strong positive correlation",
      "Weak positive correlation",
      "Strong negative correlation",
      "No correlation"
    ],
    answer: "Strong positive correlation"
  },
  {
    question: "Find the log base 2 of 32.",
    options: ["5", "4", "6", "7"],
    answer: "5"
  },
  {
    question: "Find the equation of the circle with center (3, -4) and radius 5.",
    options: [
      "(x - 3)² + (y + 4)² = 25",
      "(x + 3)² + (y - 4)² = 25",
      "(x - 3)² + (y - 4)² = 25",
      "(x + 3)² + (y + 4)² = 25"
    ],
    answer: "(x - 3)² + (y + 4)² = 25"
  },
  {
    question: "Calculate the work done when a force of 10N moves an object 5m in the direction of the force.",
    options: [
      "50 J",
      "15 J",
      "5 J",
      "10 J"
    ],
    answer: "50 J"
  },
  {
    question: "Find the sum of the series: 1 + 3 + 5 + ... + 19.",
    options: [
      "100",
      "90",
      "95",
      "105"
    ],
    answer: "100"
  },
{
    question: "10. Find the value of x: 3x + 2 = 17",
    options: ["5", "6", "7", "8"],
    answer: "5"
  }
  // Add more questions here
];

export default addMathsQuestions;









