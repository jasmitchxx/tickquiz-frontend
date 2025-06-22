const businessManagementQuestions = [
  {
    question: "Which of the following best describes management?",
    options: [
      "The art of selling goods",
      "The ability to own a business",
      "The process of planning, organizing, leading, and controlling",
      "The knowledge of legal systems"
    ],
    answer: "The process of planning, organizing, leading, and controlling"
  },
  {
    question: "Which form of business is owned and managed by one person?",
    options: ["Corporation", "Partnership", "Sole proprietorship", "Cooperative"],
    answer: "Sole proprietorship"
  },
  {
    question: "What is the main goal of a business organization?",
    options: ["To follow laws", "To satisfy government", "To make profit", "To employ people"],
    answer: "To make profit"
  },
  {
    question: "Which of the following is NOT a characteristic of a partnership?",
    options: [
      "Owned by two or more people",
      "Unlimited liability",
      "Easy to transfer ownership",
      "Shared decision-making"
    ],
    answer: "Easy to transfer ownership"
  },
  {
    question: "In the management process, which function involves setting goals and determining how to achieve them?",
    options: ["Organizing", "Controlling", "Planning", "Delegating"],
    answer: "Planning"
  },
  {
    question: "Which function of management is responsible for assigning tasks and grouping activities?",
    options: ["Delegation", "Organizing", "Planning", "Directing"],
    answer: "Organizing"
  },
  {
    question: "Directing as a function of management involves:",
    options: [
      "Hiring more workers",
      "Motivating and leading employees",
      "Buying office furniture",
      "Building relationships with clients"
    ],
    answer: "Motivating and leading employees"
  },
  {
    question: "Which of the following is an internal stakeholder of a business?",
    options: ["Customers", "Government", "Employees", "Suppliers"],
    answer: "Employees"
  },
  {
    question: "The relationship between a business and society can be described as:",
    options: [
      "Independent",
      "Unrelated",
      "Interdependent",
      "Competitive"
    ],
    answer: "Interdependent"
  },
  {
    question: "Decision-making in management refers to:",
    options: [
      "Developing a marketing plan",
      "Assigning tasks to workers",
      "Choosing among alternatives",
      "Organizing office furniture"
    ],
    answer: "Choosing among alternatives"
  },
  {
    question: "Which legal document governs business operations in most countries?",
    options: ["Memorandum of Understanding", "Constitution", "Business Act", "Company Law"],
    answer: "Company Law"
  },
  {
    question: "A legally binding agreement between two or more parties is called:",
    options: ["Contract", "Proposal", "Business plan", "Agenda"],
    answer: "Contract"
  },
  {
    question: "In a contract, the person who authorizes someone to act on their behalf is the:",
    options: ["Agent", "Principal", "Supplier", "Contractor"],
    answer: "Principal"
  },
  {
    question: "Which of the following is a negotiable instrument?",
    options: ["A lease agreement", "A cheque", "A contract form", "A verbal agreement"],
    answer: "A cheque"
  },
  {
    question: "The main purpose of financial institutions is to:",
    options: ["Control inflation", "Promote government agenda", "Facilitate savings and loans", "Create jobs"],
    answer: "Facilitate savings and loans"
  },
  {
    question: "Which financial market deals with buying and selling of company shares?",
    options: ["Money market", "Forex market", "Insurance market", "Stock exchange"],
    answer: "Stock exchange"
  },
  {
    question: "Insurance is primarily used for:",
    options: ["Earning interest", "Raising capital", "Risk transfer", "Profit maximization"],
    answer: "Risk transfer"
  },
  {
    question: "Which of the following is NOT a function of money?",
    options: ["Medium of exchange", "Store of value", "Unit of account", "Legal tender only in banks"],
    answer: "Legal tender only in banks"
  },
  {
    question: "Globalization primarily results in:",
    options: ["National restrictions", "Trade barriers", "Increased global interaction", "Currency devaluation"],
    answer: "Increased global interaction"
  },
  {
    question: "Economic integration refers to:",
    options: [
      "A business strategy",
      "The formation of large monopolies",
      "Unification of economic policies and markets between countries",
      "Taxation reforms"
    ],
    answer: "Unification of economic policies and markets between countries"
  },
  {
    question: "Which of the following is a function of Human Resource Management?",
    options: ["Product packaging", "Employee recruitment", "Stock analysis", "Price setting"],
    answer: "Employee recruitment"
  },
  {
    question: "Industrial relations deals mainly with:",
    options: ["Customer loyalty", "Employee motivation", "Employer-employee relations", "Stock control"],
    answer: "Employer-employee relations"
  },
  {
    question: "Which of the following is a key activity in production management?",
    options: ["Employee training", "Distribution", "Scheduling production", "Market research"],
    answer: "Scheduling production"
  },
  {
    question: "Marketing involves:",
    options: ["Only advertising", "Only selling", "Creating and delivering value to customers", "Transporting goods only"],
    answer: "Creating and delivering value to customers"
  },
  {
    question: "Which of the following is an advantage of e-commerce?",
    options: ["Limited reach", "Physical store required", "24/7 availability", "Cash-only payment"],
    answer: "24/7 availability"
  },
  {
    question: "Entrepreneurship can best be described as:",
    options: [
      "Being employed",
      "Managing a company",
      "Starting and running a business while taking risks",
      "Working in finance"
    ],
    answer: "Starting and running a business while taking risks"
  },
  {
    question: "One of the main roles of an entrepreneur is to:",
    options: ["Work under a boss", "Avoid risk", "Organize and coordinate resources", "Follow only orders"],
    answer: "Organize and coordinate resources"
  },
  {
    question: "A business plan includes all EXCEPT:",
    options: ["Marketing strategy", "Operations plan", "Loan payment agreement", "Executive summary"],
    answer: "Loan payment agreement"
  },
  {
    question: "What is a major challenge faced by small businesses?",
    options: ["Too many staff", "Access to capital", "Excessive advertising", "Global expansion"],
    answer: "Access to capital"
  },
  {
    question: "Delegation in management means:",
    options: [
      "Giving employees full ownership",
      "Transferring authority to subordinates",
      "Hiring external contractors",
      "Reducing company goals"
    ],
    answer: "Transferring authority to subordinates"
  },
  {
    question: "An important quality of a good leader is:",
    options: ["Aggressiveness", "Inflexibility", "Communication", "Favoritism"],
    answer: "Communication"
  },
  {
    question: "Which of the following is true about limited liability companies?",
    options: ["Owned by government", "Shares are not transferable", "Owners' personal assets are protected", "One-man ownership"],
    answer: "Owners' personal assets are protected"
  },
  {
    question: "A key responsibility of the operations department is:",
    options: ["Recruitment", "Product distribution", "Production process control", "Employee welfare"],
    answer: "Production process control"
  },
  {
    question: "Which of the following is NOT an objective of business?",
    options: ["Profit", "Expansion", "Loss-making", "Customer satisfaction"],
    answer: "Loss-making"
  },
  {
    question: "The law of contract includes all EXCEPT:",
    options: ["Offer", "Acceptance", "Marriage", "Consideration"],
    answer: "Marriage"
  },
  {
    question: "Which organization type has its shares traded on the stock exchange?",
    options: ["Sole proprietorship", "Partnership", "Public limited company", "Cooperative"],
    answer: "Public limited company"
  },
  {
    question: "An agent who sells goods on behalf of a principal and earns commission is known as:",
    options: ["Broker", "Retailer", "Wholesaler", "Commission agent"],
    answer: "Commission agent"
  },
  {
    question: "A person who buys goods not for resale but for personal use is a:",
    options: ["Retailer", "Consumer", "Agent", "Supplier"],
    answer: "Consumer"
  },
  {
    question: "The tool used to manage unexpected future events in business is:",
    options: ["Audit", "Budget", "Insurance", "Invoice"],
    answer: "Insurance"
  },
  {
    question: "Which of the following is NOT a function of a central bank?",
    options: ["Issuing currency", "Controlling inflation", "Lending to the public", "Managing foreign reserves"],
    answer: "Lending to the public"
  },
  {
    question: "An agreement to buy goods to be delivered in future at a specified price is:",
    options: ["Installment plan", "Hire purchase", "Forward contract", "Invoice"],
    answer: "Forward contract"
  },
  {
    question: "Planning is important in management because it:",
    options: ["Focuses only on present", "Avoids changes", "Provides direction", "Eliminates mistakes"],
    answer: "Provides direction"
  },
  {
    question: "A cheque becomes stale when it is older than:",
    options: ["1 week", "1 month", "3 months", "6 months"],
    answer: "6 months"
  },
  {
    question: "Labour unions are mainly formed to:",
    options: ["Support government policies", "Replace managers", "Protect workers’ interests", "Buy shares"],
    answer: "Protect workers’ interests"
  },
  {
    question: "Which function of management follows organizing?",
    options: ["Delegation", "Controlling", "Directing", "Planning"],
    answer: "Directing"
  },
  {
    question: "Globalization has made businesses more:",
    options: ["Local", "Traditional", "Competitive", "Self-reliant"],
    answer: "Competitive"
  },
  {
    question: "The function of the stock exchange is to:",
    options: ["Sell goods to customers", "Train entrepreneurs", "Facilitate buying and selling of shares", "Provide office space"],
    answer: "Facilitate buying and selling of shares"
  },
  {
    question: "What is the purpose of business ethics?",
    options: [
      "To increase profits only",
      "To avoid paying taxes",
      "To ensure fair and moral business practices",
      "To delay production"
    ],
    answer: "To ensure fair and moral business practices"
  },
  {
    question: "Which of the following is an advantage of partnership over sole proprietorship?",
    options: [
      "Unlimited liability",
      "Greater capital pool",
      "Easier decision-making",
      "No need for registration"
    ],
    answer: "Greater capital pool"
  },
  {
    question: "A legal entity that is separate from its owners is known as a:",
    options: [
      "Sole trader",
      "Partnership",
      "Limited liability company",
      "Franchise"
    ],
    answer: "Limited liability company"
  },
  {
    question: "What does delegation promote in an organization?",
    options: [
      "Reduced communication",
      "Micromanagement",
      "Employee empowerment",
      "Bureaucracy"
    ],
    answer: "Employee empowerment"
  },
  {
    question: "A contract is valid only when there is:",
    options: [
      "Written document only",
      "Government approval",
      "Free consent and lawful object",
      "Stamp duty"
    ],
    answer: "Free consent and lawful object"
  },
  {
    question: "Which of the following is NOT a feature of money?",
    options: [
      "Durability",
      "Portability",
      "Unlimited supply",
      "Divisibility"
    ],
    answer: "Unlimited supply"
  },
  {
    question: "An electronic method of buying and selling goods is called:",
    options: [
      "Mobile banking",
      "E-commerce",
      "Internet surfing",
      "Inventory tracking"
    ],
    answer: "E-commerce"
  },
  {
    question: "Risk management in business involves:",
    options: [
      "Avoiding all risks",
      "Ignoring minor issues",
      "Identifying, assessing, and controlling risks",
      "Firing workers"
    ],
    answer: "Identifying, assessing, and controlling risks"
  },
  {
    question: "Which of the following types of insurance is compulsory in most countries?",
    options: [
      "Marine insurance",
      "Life assurance",
      "Motor vehicle insurance",
      "Fire insurance"
    ],
    answer: "Motor vehicle insurance"
  },
  {
    question: "The head of the production department is primarily responsible for:",
    options: [
      "Hiring workers",
      "Raising capital",
      "Ensuring quality output",
      "Advertising products"
    ],
    answer: "Ensuring quality output"
  },
  {
    question: "The division of labor in management promotes:",
    options: [
      "Confusion",
      "Efficiency",
      "Unemployment",
      "Overlapping duties"
    ],
    answer: "Efficiency"
  },
  {
    question: "Which of the following is NOT an entrepreneur’s role?",
    options: [
      "Risk bearer",
      "Innovator",
      "Resource organizer",
      "Wage earner"
    ],
    answer: "Wage earner"
  },
  {
    question: "A person who carries out business activities on behalf of another person is a:",
    options: [
      "Contractor",
      "Principal",
      "Agent",
      "Manager"
    ],
    answer: "Agent"
  },
  {
    question: "The term ‘capital market’ refers to:",
    options: [
      "Short-term loan market",
      "Long-term financial market",
      "Foreign currency market",
      "Daily savings group"
    ],
    answer: "Long-term financial market"
  },
  {
    question: "Which of the following is a principle of marketing?",
    options: [
      "Product orientation",
      "Consumer orientation",
      "Warehouse management",
      "Staff development"
    ],
    answer: "Consumer orientation"
  },
  {
    question: "The main goal of marketing is to:",
    options: [
      "Promote staff welfare",
      "Satisfy customer needs",
      "Increase staff salaries",
      "Buy more raw materials"
    ],
    answer: "Satisfy customer needs"
  },
  {
    question: "Which element of the marketing mix deals with distribution?",
    options: [
      "Product",
      "Price",
      "Place",
      "Promotion"
    ],
    answer: "Place"
  },
  {
    question: "An agreement between businesses in different countries is likely a result of:",
    options: [
      "Localization",
      "Centralization",
      "Globalization",
      "Urbanization"
    ],
    answer: "Globalization"
  },
  {
    question: "A stockbroker primarily deals in:",
    options: [
      "Buying insurance",
      "Selling products",
      "Buying and selling shares",
      "Auditing accounts"
    ],
    answer: "Buying and selling shares"
  },
  {
    question: "Which of the following is a characteristic of a good manager?",
    options: [
      "Selfishness",
      "Indecisiveness",
      "Integrity",
      "Fearfulness"
    ],
    answer: "Integrity"
  },
  {
    question: "Business integration among countries is known as:",
    options: [
      "Nationalization",
      "Privatization",
      "Economic integration",
      "Budgeting"
    ],
    answer: "Economic integration"
  },
  {
    question: "The law of agency involves relationships between:",
    options: [
      "Employee and employer",
      "Principal and agent",
      "Buyer and seller",
      "Manager and supervisor"
    ],
    answer: "Principal and agent"
  },
  {
    question: "In which situation does e-commerce offer the greatest benefit?",
    options: [
      "Remote locations",
      "Busy highways",
      "Traditional markets",
      "Manual offices"
    ],
    answer: "Remote locations"
  },
  {
    question: "The directing function of management includes:",
    options: [
      "Coordinating tasks",
      "Monitoring performance",
      "Inspiring employees",
      "Hiring managers"
    ],
    answer: "Inspiring employees"
  },
  {
    question: "One advantage of globalization is:",
    options: [
      "Increased protectionism",
      "Restricted trade",
      "Increased market access",
      "Higher tariffs"
    ],
    answer: "Increased market access"
  },
  {
    question: "Which one is NOT a function of management?",
    options: [
      "Planning",
      "Controlling",
      "Motivating",
      "Manufacturing"
    ],
    answer: "Manufacturing"
  },
  {
    question: "A written promise to pay a certain amount at a specific time is a:",
    options: [
      "Cheque",
      "Invoice",
      "Promissory note",
      "Receipt"
    ],
    answer: "Promissory note"
  },
  {
    question: "A key activity of small business management is:",
    options: [
      "International expansion",
      "Cost control",
      "Mergers and acquisitions",
      "Import licensing"
    ],
    answer: "Cost control"
  },
  {
    question: "Entrepreneurial development aims to:",
    options: [
      "Make laws",
      "Enforce rules",
      "Train business-minded individuals",
      "Create taxes"
    ],
    answer: "Train business-minded individuals"
  },
  {
    question: "Which of the following is a source of business finance?",
    options: [
      "Training",
      "Advertisement",
      "Bank loan",
      "Delegation"
    ],
    answer: "Bank loan"
  },
  {
    question: "Which of these is used in risk management?",
    options: [
      "Insurance",
      "Marketing",
      "Auditing",
      "Inspection"
    ],
    answer: "Insurance"
  },
  {
    question: "What is the aim of planning in management?",
    options: [
      "Increase confusion",
      "Improve profits and achieve goals",
      "Delay decisions",
      "Avoid change"
    ],
    answer: "Improve profits and achieve goals"
  },
  {
    question: "Business finance deals mainly with:",
    options: [
      "Managing materials",
      "Raising and using funds",
      "Advertising products",
      "Keeping employee records"
    ],
    answer: "Raising and using funds"
  },
  {
    question: "A small business is generally characterized by:",
    options: [
      "Large market share",
      "Many employees",
      "Personal management",
      "Global reach"
    ],
    answer: "Personal management"
  },
  {
    question: "Which of the following is an example of a negotiable instrument?",
    options: [
      "Letter of complaint",
      "Cheque",
      "Service agreement",
      "Memorandum of association"
    ],
    answer: "Cheque"
  },
  {
    question: "A key disadvantage of sole proprietorship is:",
    options: [
      "Difficult to manage",
      "Unlimited liability",
      "No decision-making power",
      "Slow growth"
    ],
    answer: "Unlimited liability"
  },
  {
    question: "Who takes the greatest financial risk in a business?",
    options: [
      "Employees",
      "Investors",
      "Customers",
      "Entrepreneurs"
    ],
    answer: "Entrepreneurs"
  },
  {
    question: "Which of the following is not part of the marketing mix?",
    options: [
      "Product",
      "Promotion",
      "Place",
      "Procurement"
    ],
    answer: "Procurement"
  },
  {
    question: "Which type of insurance covers damage to business property?",
    options: [
      "Fire insurance",
      "Life assurance",
      "Health insurance",
      "Marine insurance"
    ],
    answer: "Fire insurance"
  },
  {
    question: "A small-scale business can best survive through:",
    options: [
      "Innovative ideas",
      "Borrowing heavily",
      "Ignoring feedback",
      "Avoiding competition"
    ],
    answer: "Innovative ideas"
  },
  {
    question: "Directing in management helps to:",
    options: [
      "Confuse workers",
      "Set long-term goals",
      "Guide and influence subordinates",
      "Reduce authority"
    ],
    answer: "Guide and influence subordinates"
  },
  {
    question: "What does 'human resource management' primarily deal with?",
    options: [
      "Product development",
      "Customer service",
      "Staffing and employee relations",
      "Sales forecasting"
    ],
    answer: "Staffing and employee relations"
  },
  {
    question: "A negotiable instrument must be:",
    options: [
      "Oral",
      "Transferable by endorsement or delivery",
      "Written in secret",
      "Used only in banks"
    ],
    answer: "Transferable by endorsement or delivery"
  },
  {
    question: "The ability of a business to meet its short-term obligations is called:",
    options: [
      "Liquidity",
      "Profitability",
      "Solvency",
      "Efficiency"
    ],
    answer: "Liquidity"
  },
  {
    question: "An entrepreneur who opens a business in an entirely new industry is considered:",
    options: [
      "Imitator",
      "Traditionalist",
      "Innovator",
      "Manager"
    ],
    answer: "Innovator"
  },
  {
    question: "The element of production that includes tools and equipment is:",
    options: [
      "Labor",
      "Land",
      "Capital",
      "Entrepreneurship"
    ],
    answer: "Capital"
  },
  {
    question: "Which of the following best describes organizing in management?",
    options: [
      "Assigning tasks and allocating resources",
      "Hiring staff only",
      "Supervising subordinates",
      "Writing company policies"
    ],
    answer: "Assigning tasks and allocating resources"
  },
  {
    question: "A company that sells products online without a physical store is engaged in:",
    options: [
      "Direct marketing",
      "E-commerce",
      "Retailing",
      "Franchising"
    ],
    answer: "E-commerce"
  },
  {
    question: "Which function of management ensures that tasks are carried out properly?",
    options: [
      "Planning",
      "Directing",
      "Controlling",
      "Organizing"
    ],
    answer: "Controlling"
  },
  {
    question: "Which of these financial institutions primarily grants long-term loans for investment?",
    options: [
      "Commercial bank",
      "Development bank",
      "Microfinance institution",
      "Savings and loans company"
    ],
    answer: "Development bank"
  },
  {
    question: "In business law, a contract must have all the following EXCEPT:",
    options: [
      "Lawful object",
      "Consideration",
      "Mutual agreement",
      "Profit"
    ],
    answer: "Profit"
  },
  {
    question: "Labour relations in business involve:",
    options: [
      "Customers and workers",
      "Employers and employees",
      "Government and businesses",
      "Traders and banks"
    ],
    answer: "Employers and employees"
  },
  {
    question: "The process of setting short- and long-term goals is called:",
    options: [
      "Controlling",
      "Forecasting",
      "Directing",
      "Planning"
    ],
    answer: "Planning"
  },
  {
    question: "Which of the following is the first step in decision-making?",
    options: [
      "Implementing the plan",
      "Identifying the problem",
      "Evaluating alternatives",
      "Choosing a solution"
    ],
    answer: "Identifying the problem"
  },
  {
    question: "Which of the following is a characteristic of small businesses?",
    options: [
      "Many departments",
      "High capital requirement",
      "Personal supervision",
      "National coverage"
    ],
    answer: "Personal supervision"
  },
  {
    question: "Which type of risk can be insured?",
    options: [
      "Speculative risk",
      "Pure risk",
      "Market risk",
      "Political risk"
    ],
    answer: "Pure risk"
  },
  {
    question: "Which term refers to the promotion and selling of goods and services?",
    options: [
      "Management",
      "Marketing",
      "Auditing",
      "Merchandising"
    ],
    answer: "Marketing"
  },
  {
    question: "An entrepreneur’s reward for taking business risks is:",
    options: [
      "Profit",
      "Salary",
      "Bonus",
      "Commission"
    ],
    answer: "Profit"
  },
  {
    question: "Which of these is NOT an element of the communication process?",
    options: [
      "Sender",
      "Receiver",
      "Listener",
      "Feedback"
    ],
    answer: "Listener"
  },
  {
    question: "A share certificate represents:",
    options: [
      "Loan from the bank",
      "Proof of ownership in a company",
      "Company policy",
      "Business registration"
    ],
    answer: "Proof of ownership in a company"
  },
  {
    question: "The process of grouping activities to achieve goals is called:",
    options: [
      "Directing",
      "Planning",
      "Organizing",
      "Delegating"
    ],
    answer: "Organizing"
  },
  {
    question: "What is the primary objective of financial management?",
    options: [
      "To keep all cash in hand",
      "To maximize shareholder wealth",
      "To control employees",
      "To make production faster"
    ],
    answer: "To maximize shareholder wealth"
  },
  {
    question: "One function of a stock exchange is to:",
    options: [
      "Print money",
      "Supervise taxes",
      "Provide a market for securities",
      "Grant personal loans"
    ],
    answer: "Provide a market for securities"
  },
  {
    question: "The principle of span of control refers to:",
    options: [
      "How many products a company sells",
      "The number of subordinates a manager can effectively control",
      "The speed of production",
      "The strength of an organization"
    ],
    answer: "The number of subordinates a manager can effectively control"
  },
  {
    question: "An agreement with all legal elements present is:",
    options: [
      "Void contract",
      "Illegal agreement",
      "Valid contract",
      "Unilateral agreement"
    ],
    answer: "Valid contract"
  },
  {
    question: "Which of the following is a marketing strategy?",
    options: [
      "Salary increment",
      "Product pricing",
      "Raw material selection",
      "Staff training"
    ],
    answer: "Product pricing"
  },
  {
    question: "Which of these is NOT a financial institution?",
    options: [
      "Central bank",
      "Commercial bank",
      "Insurance company",
      "Retail store"
    ],
    answer: "Retail store"
  },
  {
    question: "Which of the following helps businesses protect against financial loss?",
    options: [
      "Discounting",
      "Insurance",
      "Inventory",
      "Auditing"
    ],
    answer: "Insurance"
  },
  {
    question: "Globalization leads to:",
    options: [
      "Restricted trade",
      "Lower access to information",
      "Increased interconnectedness",
      "Reduced innovation"
    ],
    answer: "Increased interconnectedness"
  },
  {
    question: "Entrepreneurs help national economies by:",
    options: [
      "Laying off workers",
      "Importing goods",
      "Creating employment",
      "Holding funds abroad"
    ],
    answer: "Creating employment"
  },
  {
    question: "A small business is likely to have:",
    options: [
      "Complex organizational structure",
      "High bureaucracy",
      "Few employees",
      "Multiple branches"
    ],
    answer: "Few employees"
  },
  {
    question: "The act of assigning authority to another person is known as:",
    options: [
      "Planning",
      "Controlling",
      "Delegation",
      "Motivation"
    ],
    answer: "Delegation"
  },
  {
    question: "Which of the following is true of e-commerce?",
    options: [
      "It reduces market size",
      "It limits customer choice",
      "It uses electronic platforms",
      "It requires physical presence"
    ],
    answer: "It uses electronic platforms"
  },
  {
    question: "A promissory note is a type of:",
    options: [
      "Marketing strategy",
      "Negotiable instrument",
      "Organizational chart",
      "Expense account"
    ],
    answer: "Negotiable instrument"
  },
  {
    question: "The best approach to solving employee disputes is:",
    options: [
      "Strikes",
      "Negotiation and dialogue",
      "Avoidance",
      "Management threats"
    ],
    answer: "Negotiation and dialogue"
  },
  {
    question: "The term 'risk' in business refers to:",
    options: [
      "Profit only",
      "Uncertain events",
      "Fixed returns",
      "Customer complaints"
    ],
    answer: "Uncertain events"
  },
  {
    question: "An agent acts on behalf of:",
    options: [
      "Shareholder",
      "Principal",
      "Manager",
      "Customer"
    ],
    answer: "Principal"
  },
  {
    question: "The relationship between business and society is based on:",
    options: [
      "Exploitation",
      "Mutual dependence",
      "Competition",
      "Avoidance"
    ],
    answer: "Mutual dependence"
  },
  {
    question: "Which one is NOT a source of business finance?",
    options: [
      "Bank loan",
      "Trade credit",
      "Personal savings",
      "Competition"
    ],
    answer: "Competition"
  },
  {
    question: "A franchise is a business arrangement where:",
    options: [
      "The government owns shares",
      "An individual uses a brand under agreement",
      "Two companies merge",
      "A manager is promoted"
    ],
    answer: "An individual uses a brand under agreement"
  },
  {
    question: "Which of the following is part of the internal environment of business?",
    options: [
      "Customers",
      "Suppliers",
      "Organizational culture",
      "Government regulations"
    ],
    answer: "Organizational culture"
  },
  {
    question: "A functional area that deals with employee welfare is:",
    options: [
      "Finance",
      "Human resources",
      "Marketing",
      "Operations"
    ],
    answer: "Human resources"
  },
  {
    question: "The stock exchange is important because it:",
    options: [
      "Creates company logos",
      "Regulates product prices",
      "Provides a platform for securities trading",
      "Hires managers"
    ],
    answer: "Provides a platform for securities trading"
  },
  {
    question: "A key reason for starting a small business is to:",
    options: [
      "Import more goods",
      "Avoid taxes",
      "Earn profits and be independent",
      "Limit innovation"
    ],
    answer: "Earn profits and be independent"
  },
  {
    question: "E-commerce enables businesses to:",
    options: [
      "Avoid planning",
      "Reduce sales",
      "Reach global markets easily",
      "Eliminate staff"
    ],
    answer: "Reach global markets easily"
  },
  {
    question: "Entrepreneurs differ from managers because they:",
    options: [
      "Are hired by firms",
      "Own and run businesses",
      "Do not take risks",
      "Work only in banks"
    ],
    answer: "Own and run businesses"
  },
  {
    question: "Business functions can be grouped into:",
    options: [
      "Four core areas",
      "Only sales",
      "Marketing only",
      "Production only"
    ],
    answer: "Four core areas"
  },
  {
    question: "A marketing principle based on customer satisfaction is called:",
    options: [
      "Consumer orientation",
      "Production focus",
      "Product pushing",
      "Profit maximization"
    ],
    answer: "Consumer orientation"
  },
  {
    question: "Delegation helps to develop:",
    options: [
      "Fear in subordinates",
      "Skills and leadership",
      "Workplace conflict",
      "Central control"
    ],
    answer: "Skills and leadership"
  },
  {
    question: "A well-planned business has a better chance of:",
    options: [
      "Being taxed more",
      "Avoiding innovation",
      "Surviving and growing",
      "Relying on luck"
    ],
    answer: "Surviving and growing"
  },
  {
    question: "Which of the following is the primary role of marketing?",
    options: [
      "To monitor workers",
      "To store raw materials",
      "To satisfy customer needs",
      "To increase taxes"
    ],
    answer: "To satisfy customer needs"
  },
  {
    question: "Which management function involves guiding employees to achieve goals?",
    options: [
      "Planning",
      "Delegating",
      "Directing",
      "Controlling"
    ],
    answer: "Directing"
  },
  {
    question: "Which of these is not a form of business organization?",
    options: [
      "Sole proprietorship",
      "Partnership",
      "Ministry",
      "Limited liability company"
    ],
    answer: "Ministry"
  },
  {
    question: "The act of influencing others to achieve goals is known as:",
    options: [
      "Motivation",
      "Planning",
      "Staffing",
      "Leadership"
    ],
    answer: "Leadership"
  },
  {
    question: "Business and society are linked because:",
    options: [
      "Society is the only consumer",
      "Business owns society",
      "They depend on each other",
      "They compete always"
    ],
    answer: "They depend on each other"
  },
  {
    question: "In management, setting standards and evaluating performance relates to:",
    options: [
      "Planning",
      "Controlling",
      "Directing",
      "Delegating"
    ],
    answer: "Controlling"
  },
  {
    question: "One major benefit of globalization is:",
    options: [
      "Restricted trade",
      "Limited knowledge",
      "Access to global markets",
      "Increased tariffs"
    ],
    answer: "Access to global markets"
  },
  {
    question: "Insurance companies help businesses to:",
    options: [
      "Avoid expenses",
      "Minimize taxes",
      "Manage risks",
      "Hire more staff"
    ],
    answer: "Manage risks"
  },
  {
    question: "Which of the following is NOT a principle of insurance?",
    options: [
      "Indemnity",
      "Contribution",
      "Guarantee",
      "Proximate cause"
    ],
    answer: "Guarantee"
  },
  {
    question: "A valid contract must contain:",
    options: [
      "Illiteracy",
      "Conflict of interest",
      "Agreement and consideration",
      "Shareholding"
    ],
    answer: "Agreement and consideration"
  },
  {
    question: "Stock exchange helps companies to:",
    options: [
      "Hide financials",
      "Borrow from suppliers",
      "Raise capital",
      "Avoid taxes"
    ],
    answer: "Raise capital"
  },
  {
    question: "Entrepreneurship is best defined as:",
    options: [
      "Working for others",
      "Running government departments",
      "Starting and managing businesses",
      "Avoiding business risks"
    ],
    answer: "Starting and managing businesses"
  },
  {
    question: "The business function responsible for production efficiency is:",
    options: [
      "Marketing",
      "Human resources",
      "Operations/Production management",
      "Finance"
    ],
    answer: "Operations/Production management"
  },
  {
    question: "A negotiable instrument that orders payment to a named person is called:",
    options: [
      "Invoice",
      "Cheque",
      "Receipt",
      "Debit note"
    ],
    answer: "Cheque"
  },
  {
    question: "The process of moving goods from producer to consumer is:",
    options: [
      "Advertising",
      "Promotion",
      "Distribution",
      "Accounting"
    ],
    answer: "Distribution"
  },
  {
    question: "Delegation of authority means:",
    options: [
      "Transferring responsibilities forever",
      "Sharing tasks with peers",
      "Assigning duties while retaining accountability",
      "Giving promotions"
    ],
    answer: "Assigning duties while retaining accountability"
  },
  {
    question: "Which is NOT a reason businesses fail?",
    options: [
      "Good planning",
      "Poor financial control",
      "Lack of experience",
      "Poor customer service"
    ],
    answer: "Good planning"
  },
  {
    question: "What is a key purpose of E-commerce?",
    options: [
      "Reduce production",
      "Limit communication",
      "Enable online buying and selling",
      "Create physical markets"
    ],
    answer: "Enable online buying and selling"
  },
  {
    question: "Entrepreneurs contribute to society by:",
    options: [
      "Causing unemployment",
      "Reducing innovation",
      "Creating jobs",
      "Discouraging saving"
    ],
    answer: "Creating jobs"
  },
  {
    question: "Money is best defined as:",
    options: [
      "A store of value only",
      "A factor of production",
      "A medium of exchange",
      "A business expense"
    ],
    answer: "A medium of exchange"
  },
  {
    question: "Which of these is a characteristic of a good business decision?",
    options: [
      "Emotion-based",
      "Random",
      "Well-informed and rational",
      "Delayed indefinitely"
    ],
    answer: "Well-informed and rational"
  },
  {
    question: "Industrial relations deal mainly with:",
    options: [
      "Farmers and consumers",
      "Banks and customers",
      "Employers and workers",
      "Sellers and buyers"
    ],
    answer: "Employers and workers"
  },
  {
    question: "Which of the following is NOT a benefit of planning?",
    options: [
      "It reduces uncertainty",
      "It promotes goal setting",
      "It eliminates all risk",
      "It aids decision making"
    ],
    answer: "It eliminates all risk"
  },
  {
    question: "E-commerce has led to:",
    options: [
      "Decline in global reach",
      "Increased online fraud only",
      "Expansion of digital markets",
      "Reduced use of ICT"
    ],
    answer: "Expansion of digital markets"
  },
  {
    question: "Which of the following is used to transfer money electronically?",
    options: [
      "Cheque book",
      "Point of Sale (POS)",
      "Postage stamp",
      "Ledger"
    ],
    answer: "Point of Sale (POS)"
  },
  {
    question: "The function of organizing in management involves:",
    options: [
      "Recruiting only",
      "Creating a working structure",
      "Issuing orders",
      "Evaluating sales"
    ],
    answer: "Creating a working structure"
  },
  {
    question: "Which of these best defines a manager?",
    options: [
      "Owner of the business",
      "Someone who directs and controls resources",
      "Random employee",
      "Salesperson"
    ],
    answer: "Someone who directs and controls resources"
  },
  {
    question: "A small business is usually characterized by:",
    options: [
      "Large capital base",
      "National reach",
      "Limited workforce",
      "Complex structure"
    ],
    answer: "Limited workforce"
  },
  {
    question: "The law that governs agreements between parties is:",
    options: [
      "Tort law",
      "Criminal law",
      "Contract law",
      "Company law"
    ],
    answer: "Contract law"
  },
  {
    question: "Risk management includes all EXCEPT:",
    options: [
      "Identifying potential threats",
      "Measuring performance",
      "Reducing or transferring risks",
      "Insuring assets"
    ],
    answer: "Measuring performance"
  },
  {
    question: "Entrepreneurial skills include:",
    options: [
      "Complacency",
      "Laziness",
      "Innovation and risk-taking",
      "Rigidity"
    ],
    answer: "Innovation and risk-taking"
  },
  {
    question: "Which one is NOT a type of insurance?",
    options: [
      "Fire insurance",
      "Life insurance",
      "Unemployment insurance",
      "Welfare insurance"
    ],
    answer: "Welfare insurance"
  },
  {
    question: "Globalization encourages businesses to:",
    options: [
      "Remain local",
      "Avoid partnerships",
      "Explore international markets",
      "Ignore competition"
    ],
    answer: "Explore international markets"
  },
  {
    question: "What type of environment includes laws and regulations?",
    options: [
      "Natural environment",
      "Internal environment",
      "Legal environment",
      "Technological environment"
    ],
    answer: "Legal environment"
  },
  {
    question: "A small business may face challenges like:",
    options: [
      "Abundant finance",
      "Limited market access",
      "Global coverage",
      "Excess labor"
    ],
    answer: "Limited market access"
  },
  {
    question: "An entrepreneur must be willing to:",
    options: [
      "Avoid decision-making",
      "Take calculated risks",
      "Delay innovation",
      "Ignore opportunities"
    ],
    answer: "Take calculated risks"
  },
  {
    question: "The business document used to promise payment at a future date is:",
    options: [
      "Invoice",
      "Promissory note",
      "Receipt",
      "Memo"
    ],
    answer: "Promissory note"
  },
  {
    question: "An example of a financial institution is:",
    options: [
      "Supermarket",
      "Travel agency",
      "Insurance company",
      "Cement factory"
    ],
    answer: "Insurance company"
  },
  {
    question: "The process of launching a business idea into reality is called:",
    options: [
      "Investment",
      "Entrepreneurship",
      "Franchising",
      "Marketing"
    ],
    answer: "Entrepreneurship"
  },
  {
    question: "Business ethics focuses on:",
    options: [
      "Profit maximization only",
      "Legal policies only",
      "Right and wrong in business conduct",
      "Stock exchange rules"
    ],
    answer: "Right and wrong in business conduct"
  },
  {
    question: "Which of the following is NOT a type of business risk?",
    options: [
      "Financial risk",
      "Operational risk",
      "Educational risk",
      "Strategic risk"
    ],
    answer: "Educational risk"
  },
  {
    question: "Delegation improves efficiency by:",
    options: [
      "Creating confusion",
      "Overburdening subordinates",
      "Enabling workload sharing",
      "Avoiding responsibility"
    ],
    answer: "Enabling workload sharing"
  },
  {
    question: "Entrepreneurial innovation results in:",
    options: [
      "Reduced product quality",
      "Stagnant business operations",
      "New and improved products/services",
      "Legal penalties"
    ],
    answer: "New and improved products/services"
  },
  {
    question: "Which of these financial tools help businesses assess performance?",
    options: [
      "Survey forms",
      "Balance sheets and income statements",
      "Cheques",
      "Receipts"
    ],
    answer: "Balance sheets and income statements"
  },
  {
    question: "In business, the primary goal of decision-making is to:",
    options: [
      "Avoid growth",
      "Ensure effective solutions",
      "Increase delay",
      "Hire external help"
    ],
    answer: "Ensure effective solutions"
  },
  {
    question: "The primary purpose of the stock exchange is to:",
    options: [
      "Pay workers",
      "Trade goods and services",
      "Provide loans to students",
      "Facilitate buying and selling of shares"
    ],
    answer: "Facilitate buying and selling of shares"
  },
  {
    question: "A key element of human resource management is:",
    options: [
      "Stock valuation",
      "Recruitment and selection",
      "Advertising",
      "Product distribution"
    ],
    answer: "Recruitment and selection"
  },
  {
    question: "Which of the following is a characteristic of a good entrepreneur?",
    options: [
      "Fear of risk",
      "Avoidance of planning",
      "Proactivity",
      "Resistance to change"
    ],
    answer: "Proactivity"
  },
  {
    question: "An agent is best described as someone who:",
    options: [
      "Owns the business",
      "Buys goods for personal use",
      "Acts on behalf of another party",
      "Competes with the business"
    ],
    answer: "Acts on behalf of another party"
  },
  {
    question: "A promissory note is used for:",
    options: [
      "Demanding salaries",
      "Advertising new products",
      "Promising to pay money in the future",
      "Rejecting goods"
    ],
    answer: "Promising to pay money in the future"
  },
  {
    question: "One benefit of small businesses to the economy is:",
    options: [
      "They do not pay tax",
      "They create employment",
      "They avoid innovation",
      "They reduce exports"
    ],
    answer: "They create employment"
  },
  {
    question: "Which financial institution is responsible for controlling money supply?",
    options: [
      "Commercial bank",
      "Development bank",
      "Rural bank",
      "Central bank"
    ],
    answer: "Central bank"
  },
  {
    question: "E-commerce includes all the following EXCEPT:",
    options: [
      "Online banking",
      "Retail stores",
      "Mobile payments",
      "Digital marketplaces"
    ],
    answer: "Retail stores"
  },
  {
    question: "Delegation allows a manager to:",
    options: [
      "Avoid responsibility",
      "Increase workload",
      "Assign tasks while retaining accountability",
      "Replace employees"
    ],
    answer: "Assign tasks while retaining accountability"
  },
  {
    question: "Planning helps management to:",
    options: [
      "React randomly",
      "Operate without goals",
      "Set and achieve objectives",
      "Avoid decisions"
    ],
    answer: "Set and achieve objectives"
  },
  {
    question: "Which type of insurance covers loss from theft?",
    options: [
      "Life insurance",
      "Marine insurance",
      "Burglary insurance",
      "Fire insurance"
    ],
    answer: "Burglary insurance"
  },
  {
    question: "An economic integration where countries adopt a single currency is called:",
    options: [
      "Customs union",
      "Monetary union",
      "Trade agreement",
      "Global partnership"
    ],
    answer: "Monetary union"
  },
  {
    question: "A contract is enforceable when it:",
    options: [
      "Is based on emotion",
      "Has legal backing",
      "Is unwritten",
      "Lacks consent"
    ],
    answer: "Has legal backing"
  },
  {
    question: "The human resource department handles:",
    options: [
      "Machinery repair",
      "Recruitment and training",
      "Sales monitoring",
      "Financial auditing"
    ],
    answer: "Recruitment and training"
  },
  {
    question: "The process of setting goals and developing plans is known as:",
    options: [
      "Supervision",
      "Organizing",
      "Planning",
      "Directing"
    ],
    answer: "Planning"
  },
  {
    question: "An entrepreneur typically:",
    options: [
      "Avoids risk",
      "Follows trends blindly",
      "Takes initiative and risks",
      "Depends entirely on others"
    ],
    answer: "Takes initiative and risks"
  },
  {
    question: "Which of the following is a negotiable instrument?",
    options: [
      "Cheque",
      "Invoice",
      "Memo",
      "Job description"
    ],
    answer: "Cheque"
  },
  {
    question: "Globalization affects businesses by:",
    options: [
      "Isolating markets",
      "Eliminating competition",
      "Expanding opportunities and challenges",
      "Decreasing product quality"
    ],
    answer: "Expanding opportunities and challenges"
  },
  {
    question: "Which of these is a core principle in marketing?",
    options: [
      "Customer satisfaction",
      "Product hoarding",
      "Service monopoly",
      "Production halts"
    ],
    answer: "Customer satisfaction"
  },
  {
    question: "The main goal of production management is to:",
    options: [
      "Reduce employment",
      "Increase costs",
      "Ensure efficient production",
      "Delay delivery"
    ],
    answer: "Ensure efficient production"
  },
  {
    question: "Which is NOT an element of the legal environment of business?",
    options: [
      "Law of contract",
      "Agency principles",
      "Product design",
      "Negotiable instruments"
    ],
    answer: "Product design"
  },
  {
    question: "Which of the following is a source of business finance?",
    options: [
      "Manager’s office",
      "Loan from a bank",
      "Daily reports",
      "Job application"
    ],
    answer: "Loan from a bank"
  },
  {
    question: "Stock exchange encourages investment by:",
    options: [
      "Limiting business growth",
      "Providing a platform to buy/sell shares",
      "Increasing inflation",
      "Reducing product quality"
    ],
    answer: "Providing a platform to buy/sell shares"
  },
  {
    question: "E-commerce provides the benefit of:",
    options: [
      "Face-to-face transactions",
      "Limited shopping hours",
      "Convenient shopping from anywhere",
      "Manual bookkeeping"
    ],
    answer: "Convenient shopping from anywhere"
  },
  {
    question: "Which of the following is NOT a function of money?",
    options: [
      "Medium of exchange",
      "Store of value",
      "Unit of account",
      "Source of production"
    ],
    answer: "Source of production"
  },
  {
    question: "Which of these is an external factor affecting business operations?",
    options: [
      "Company policy",
      "Employee skill",
      "Government regulation",
      "Organizational culture"
    ],
    answer: "Government regulation"
  },
  {
    question: "Decision-making in management involves:",
    options: [
      "Guessing",
      "Choosing among alternatives",
      "Delegating authority",
      "Attending meetings only"
    ],
    answer: "Choosing among alternatives"
  },
  {
    question: "Which one is a key function of the marketing department?",
    options: [
      "Training staff",
      "Controlling production",
      "Promoting products and services",
      "Auditing accounts"
    ],
    answer: "Promoting products and services"
  },
  {
    question: "Which of the following is NOT a benefit of entrepreneurship?",
    options: [
      "Job creation",
      "Innovation",
      "Increased unemployment",
      "Economic development"
    ],
    answer: "Increased unemployment"
  },
  {
    question: "The function of organizing includes:",
    options: [
      "Setting vague objectives",
      "Structuring resources to achieve goals",
      "Avoiding planning",
      "Reducing staff morale"
    ],
    answer: "Structuring resources to achieve goals"
  },
  {
    question: "A business that operates mainly online is engaging in:",
    options: [
      "Direct marketing",
      "E-commerce",
      "Wholesale trade",
      "Traditional retail"
    ],
    answer: "E-commerce"
  },
  {
    question: "Labour relations focus on:",
    options: [
      "Employer-customer issues",
      "Employee performance appraisal",
      "Relationship between workers and management",
      "Job rotation"
    ],
    answer: "Relationship between workers and management"
  },
  {
    question: "A key advantage of small businesses is their:",
    options: [
      "Complex structure",
      "Slow decision-making",
      "Flexibility and innovation",
      "Lack of risk"
    ],
    answer: "Flexibility and innovation"
  },
  {
    question: "The purpose of the law of contract is to:",
    options: [
      "Create criminal cases",
      "Regulate marriage",
      "Ensure agreement between parties is legally binding",
      "Enforce tax rules"
    ],
    answer: "Ensure agreement between parties is legally binding"
  },
  {
    question: "One key disadvantage of e-commerce is:",
    options: [
      "Global access",
      "Delivery delays",
      "Low internet usage",
      "24/7 operation"
    ],
    answer: "Delivery delays"
  },
  {
    question: "Money serves as a:",
    options: [
      "Production tool",
      "Medium of communication",
      "Medium of exchange",
      "Human resource"
    ],
    answer: "Medium of exchange"
  },
  {
    question: "The act of giving authority to subordinates is called:",
    options: [
      "Planning",
      "Directing",
      "Delegation",
      "Supervision"
    ],
    answer: "Delegation"
  },
  {
    question: "A contract signed under pressure is considered:",
    options: [
      "Valid",
      "Void",
      "Voidable",
      "Enforceable"
    ],
    answer: "Voidable"
  },
  {
    question: "Entrepreneurs are important because they:",
    options: [
      "Rely on government support only",
      "Ignore innovation",
      "Create goods, services, and jobs",
      "Discourage investment"
    ],
    answer: "Create goods, services, and jobs"
  },
  {
    question: "Marketing focuses on:",
    options: [
      "Human resource training",
      "Meeting customer needs profitably",
      "Production line efficiency",
      "Recruitment processes"
    ],
    answer: "Meeting customer needs profitably"
  },
  {
    question: "Which of these is NOT a responsibility of human resource management?",
    options: [
      "Staff recruitment",
      "Training and development",
      "Advertising products",
      "Conflict resolution"
    ],
    answer: "Advertising products"
  },
  {
    question: "One role of financial institutions is to:",
    options: [
      "Manufacture goods",
      "Organize meetings",
      "Provide financial services",
      "Set tax rates"
    ],
    answer: "Provide financial services"
  },
  {
    question: "The principle of indemnity in insurance ensures:",
    options: [
      "The insured gains profit",
      "Double payment is made",
      "The insured is restored to original financial position",
      "Premiums are refunded"
    ],
    answer: "The insured is restored to original financial position"
  },
  {
    question: "Entrepreneurial development is promoted through:",
    options: [
      "Limited access to loans",
      "Business education and training",
      "Rising inflation",
      "High taxes"
    ],
    answer: "Business education and training"
  },
  {
    question: "An economic union allows members to:",
    options: [
      "Use different currencies",
      "Impose trade barriers",
      "Trade freely and adopt common policies",
      "Ban imports"
    ],
    answer: "Trade freely and adopt common policies"
  },
  {
    question: "Negotiable instruments must be:",
    options: [
      "Delivered verbally",
      "Written and signed",
      "Unclear and anonymous",
      "Oral agreements"
    ],
    answer: "Written and signed"
  },
  {
    question: "Which one of the following is NOT a function of management?",
    options: [
      "Directing",
      "Planning",
      "Gambling",
      "Organizing"
    ],
    answer: "Gambling"
  },
  {
    question: "A key feature of economic integration is:",
    options: [
      "National isolation",
      "Increased trade barriers",
      "Promotion of free trade among member countries",
      "Reduction of internal investment"
    ],
    answer: "Promotion of free trade among member countries"
  },
  {
    question: "Which of the following defines globalization?",
    options: [
      "Limiting internet access",
      "Integration of world economies and markets",
      "Decentralizing internal processes",
      "Restricting import of foreign goods"
    ],
    answer: "Integration of world economies and markets"
  },
  {
    question: "The role of insurance in business is to:",
    options: [
      "Create liabilities",
      "Eliminate taxes",
      "Manage and mitigate risk",
      "Avoid employee recruitment"
    ],
    answer: "Manage and mitigate risk"
  },
  {
    question: "E-commerce has grown due to:",
    options: [
      "Decline in mobile phones",
      "Increase in paper use",
      "Advancement in digital technology",
      "Rise in face-to-face transactions"
    ],
    answer: "Advancement in digital technology"
  },
  {
    question: "A person who undertakes risks in starting a new business is called a:",
    options: [
      "Technician",
      "Banker",
      "Manager",
      "Entrepreneur"
    ],
    answer: "Entrepreneur"
  },
  {
    question: "Planning in management involves:",
    options: [
      "Avoiding decisions",
      "Setting objectives and outlining actions",
      "Hiring workers only",
      "Watching competitors"
    ],
    answer: "Setting objectives and outlining actions"
  },
  {
    question: "Delegation improves organizational efficiency by:",
    options: [
      "Overworking staff",
      "Avoiding task distribution",
      "Assigning tasks and responsibilities appropriately",
      "Increasing confusion"
    ],
    answer: "Assigning tasks and responsibilities appropriately"
  },
  {
    question: "Which of these is a form of negotiable instrument?",
    options: [
      "Receipt",
      "Cheque",
      "Report",
      "Invoice"
    ],
    answer: "Cheque"
  },
  {
    question: "In business, the law of agency covers:",
    options: [
      "Ownership of businesses",
      "Relationships between employer and employee",
      "Authority granted by a principal to an agent",
      "Stock exchange regulations"
    ],
    answer: "Authority granted by a principal to an agent"
  },
  {
    question: "A small business is likely to succeed if it:",
    options: [
      "Ignores customer needs",
      "Adopts flexible strategies",
      "Has no business plan",
      "Avoids market research"
    ],
    answer: "Adopts flexible strategies"
  },
  {
    question: "Which of the following is a financial institution?",
    options: [
      "Retail store",
      "Commercial bank",
      "NGO",
      "Post office"
    ],
    answer: "Commercial bank"
  },
  {
    question: "Which function of management involves influencing staff to work towards goals?",
    options: [
      "Directing",
      "Planning",
      "Organizing",
      "Budgeting"
    ],
    answer: "Directing"
  },
  {
    question: "Entrepreneurship contributes to national development through:",
    options: [
      "Lower productivity",
      "Export reduction",
      "Innovation and job creation",
      "Limiting markets"
    ],
    answer: "Innovation and job creation"
  },
  {
    question: "Which of the following is essential in human resource management?",
    options: [
      "Power production",
      "Employee training",
      "Goods packaging",
      "Machinery control"
    ],
    answer: "Employee training"
  },
  {
    question: "The marketing concept focuses on:",
    options: [
      "Satisfying customer needs",
      "Reducing sales",
      "Firing unproductive staff",
      "Avoiding advertisement"
    ],
    answer: "Satisfying customer needs"
  },
  {
    question: "The stock exchange enables investors to:",
    options: [
      "Borrow capital",
      "Purchase raw materials",
      "Buy and sell securities",
      "Secure jobs"
    ],
    answer: "Buy and sell securities"
  },
  {
    question: "A contract without mutual agreement is considered:",
    options: [
      "Void",
      "Valid",
      "Profitable",
      "Enforceable"
    ],
    answer: "Void"
  },
  {
    question: "Which of the following is NOT a responsibility of production management?",
    options: [
      "Quality control",
      "Resource planning",
      "Recruitment interviews",
      "Inventory management"
    ],
    answer: "Recruitment interviews"
  },
  {
    question: "A central element of globalization is:",
    options: [
      "Internet censorship",
      "Business isolation",
      "Increased connectivity",
      "Discouraging foreign trade"
    ],
    answer: "Increased connectivity"
  },
  {
    question: "Risk management in business aims to:",
    options: [
      "Increase uncertainty",
      "Reduce losses and maximize opportunities",
      "Avoid customer service",
      "Ignore potential threats"
    ],
    answer: "Reduce losses and maximize opportunities"
  },
  {
    question: "Labour relations involve:",
    options: [
      "Monetary policy",
      "Legal documents",
      "Employer-employee relations",
      "Product design"
    ],
    answer: "Employer-employee relations"
  },
  {
    question: "Which of the following is NOT a form of economic integration?",
    options: [
      "Customs union",
      "Free trade area",
      "Tariff wall",
      "Common market"
    ],
    answer: "Tariff wall"
  },
  {
    question: "A key characteristic of a successful entrepreneur is:",
    options: [
      "Passivity",
      "Creativity",
      "Dependency",
      "Procrastination"
    ],
    answer: "Creativity"
  },
  {
    question: "Organizing in management ensures:",
    options: [
      "Chaos in the workplace",
      "Resources are not aligned",
      "Orderly arrangement of activities",
      "No plan execution"
    ],
    answer: "Orderly arrangement of activities"
  },
  {
    question: "One major benefit of globalization to businesses is:",
    options: [
      "Smaller markets",
      "Isolation from innovation",
      "Access to international markets",
      "Increasing tariffs"
    ],
    answer: "Access to international markets"
  },
  {
    question: "A business plan is important to entrepreneurs because it:",
    options: [
      "Limits growth",
      "Confuses managers",
      "Provides a roadmap",
      "Eliminates the need for marketing"
    ],
    answer: "Provides a roadmap"
  },
  {
    question: "Which of the following is used for risk coverage?",
    options: [
      "Market research",
      "Insurance",
      "Sales promotion",
      "Recruitment"
    ],
    answer: "Insurance"
  },
  {
    question: "Which of these is a function of financial institutions?",
    options: [
      "Legal drafting",
      "Providing loans and savings services",
      "Regulating laws",
      "Creating insurance policies"
    ],
    answer: "Providing loans and savings services"
  },
  {
    question: "The term ‘entrepreneur’ is most associated with:",
    options: [
      "Risk-taking and innovation",
      "Wage employment",
      "Lawsuits",
      "Government employment"
    ],
    answer: "Risk-taking and innovation"
  },
  {
    question: "Which is NOT an advantage of small-scale businesses?",
    options: [
      "Closer customer relationships",
      "Flexibility",
      "Large-scale economies",
      "Quick decision-making"
    ],
    answer: "Large-scale economies"
  },
  {
    question: "One function of the central bank is to:",
    options: [
      "Fix market prices",
      "Act as a lender of last resort",
      "Advertise businesses",
      "Set up retail outlets"
    ],
    answer: "Act as a lender of last resort"
  },
  {
    question: "Delegation helps improve:",
    options: [
      "Workload imbalance",
      "Efficiency and team performance",
      "Micromanagement",
      "Manager stress"
    ],
    answer: "Efficiency and team performance"
  },
  {
    question: "Negotiable instruments must be:",
    options: [
      "Illegal",
      "Written and signed",
      "Verbal promises",
      "Electronic voice messages"
    ],
    answer: "Written and signed"
  },
  {
    question: "A stock exchange is important because it:",
    options: [
      "Employs only farmers",
      "Determines political leadership",
      "Facilitates capital formation",
      "Avoids risk-sharing"
    ],
    answer: "Facilitates capital formation"
  },
  {
    question: "Marketing involves all EXCEPT:",
    options: [
      "Product development",
      "Customer research",
      "Production planning",
      "Promotion"
    ],
    answer: "Production planning"
  },
  {
    question: "E-commerce can improve sales by:",
    options: [
      "Reducing product visibility",
      "Limiting customer feedback",
      "Reaching global audiences",
      "Restricting payment options"
    ],
    answer: "Reaching global audiences"
  },
  {
    question: "An effective decision-making process includes:",
    options: [
      "Avoiding choices",
      "Random actions",
      "Evaluating alternatives",
      "Ignoring data"
    ],
    answer: "Evaluating alternatives"
  },
  {
    question: "Which function of management is concerned with goal-setting?",
    options: [
      "Organizing",
      "Planning",
      "Controlling",
      "Supervising"
    ],
    answer: "Planning"
  },
  {
    question: "Which of these would most likely be insured under fire insurance?",
    options: [
      "Company vehicle",
      "Office building",
      "Employee’s life",
      "Loan repayment"
    ],
    answer: "Office building"
  },
  {
    question: "In business, a contract is binding when:",
    options: [
      "One party disagrees",
      "It lacks consideration",
      "It is signed voluntarily and legally",
      "It is oral only"
    ],
    answer: "It is signed voluntarily and legally"
  },
  {
    question: "A key task in small business management is:",
    options: [
      "Writing laws",
      "Market analysis",
      "Judicial review",
      "Publishing textbooks"
    ],
    answer: "Market analysis"
  },
  {
    question: "Which of the following is NOT a source of business finance?",
    options: [
      "Personal savings",
      "Bank loan",
      "Credit sales",
      "Phone call"
    ],
    answer: "Phone call"
  },
  {
    question: "Labour and industrial relations primarily deal with:",
    options: [
      "Legal cases",
      "Business growth plans",
      "Employer-employee negotiations",
      "Product warranties"
    ],
    answer: "Employer-employee negotiations"
  },
  {
    question: "Which type of economic integration involves total harmonization of policies?",
    options: [
      "Preferential trade area",
      "Free trade area",
      "Common market",
      "Economic union"
    ],
    answer: "Economic union"
  },
  {
    question: "Production management focuses on:",
    options: [
      "Recruitment",
      "Process efficiency and output",
      "Market regulation",
      "Law enforcement"
    ],
    answer: "Process efficiency and output"
  },
  {
    question: "Which of the following best defines ‘management’?",
    options: [
      "Leading a group to meet goals",
      "Ignoring staff needs",
      "Only making decisions",
      "Avoiding responsibility"
    ],
    answer: "Leading a group to meet goals"
  },
  {
    question: "The primary aim of business organizations is to:",
    options: [
      "Make profits",
      "Lose money",
      "Distribute free goods",
      "Avoid customers"
    ],
    answer: "Make profits"
  },
  {
    question: "What is the first step in the management process?",
    options: [
      "Organizing",
      "Planning",
      "Delegating",
      "Controlling"
    ],
    answer: "Planning"
  },
  {
    question: "In business, the term ‘society’ refers to:",
    options: [
      "Only shareholders",
      "All stakeholders and community",
      "Competitors only",
      "Suppliers only"
    ],
    answer: "All stakeholders and community"
  },
  {
    question: "Which of the following is NOT a type of business organization?",
    options: [
      "Sole proprietorship",
      "Partnership",
      "Corporation",
      "Municipality"
    ],
    answer: "Municipality"
  },
  {
    question: "Decision-making in management involves:",
    options: [
      "Choosing the best alternative",
      "Avoiding choices",
      "Random guessing",
      "Ignoring facts"
    ],
    answer: "Choosing the best alternative"
  },
  {
    question: "Which management function includes assigning duties to others?",
    options: [
      "Directing",
      "Planning",
      "Delegating",
      "Controlling"
    ],
    answer: "Delegating"
  },
  {
    question: "The legal framework of business ensures:",
    options: [
      "Unregulated trade",
      "Fairness and protection for all parties",
      "Complete freedom without rules",
      "Ignoring contracts"
    ],
    answer: "Fairness and protection for all parties"
  },
  {
    question: "Money serves as a medium of exchange, unit of account, and:",
    options: [
      "Source of risk",
      "Store of value",
      "Type of labor",
      "Legal document"
    ],
    answer: "Store of value"
  },
  {
    question: "Which of the following is a financial risk in business?",
    options: [
      "Inflation",
      "Employee motivation",
      "Customer feedback",
      "Sales promotion"
    ],
    answer: "Inflation"
  },
  {
    question: "Globalization has led to increased:",
    options: [
      "Cultural exchange and trade",
      "Isolationism",
      "Barriers to trade",
      "Government restrictions"
    ],
    answer: "Cultural exchange and trade"
  },
  {
    question: "Elements of human resource management include:",
    options: [
      "Recruitment and training",
      "Advertising",
      "Transport logistics",
      "Product packaging"
    ],
    answer: "Recruitment and training"
  },
  {
    question: "Which of the following is NOT an aspect of industrial relations?",
    options: [
      "Conflict resolution",
      "Wage negotiation",
      "Customer service",
      "Collective bargaining"
    ],
    answer: "Customer service"
  },
  {
    question: "Entrepreneurship mainly involves:",
    options: [
      "Risk-taking and innovation",
      "Following orders",
      "Avoiding investments",
      "Ignoring customers"
    ],
    answer: "Risk-taking and innovation"
  },
  {
    question: "Which of these is a principle of marketing management?",
    options: [
      "Ignoring customer needs",
      "Product focus",
      "Customer orientation",
      "Random pricing"
    ],
    answer: "Customer orientation"
  },
  {
    question: "E-commerce enables businesses to:",
    options: [
      "Reach wider markets",
      "Avoid advertising",
      "Reduce product quality",
      "Ignore customer feedback"
    ],
    answer: "Reach wider markets"
  },
  {
    question: "Small business development requires:",
    options: [
      "Adequate planning",
      "Ignoring competition",
      "No finances",
      "Avoiding customer needs"
    ],
    answer: "Adequate planning"
  },
  {
    question: "Which is NOT a financial institution?",
    options: [
      "Microfinance bank",
      "Commercial bank",
      "Savings and loans",
      "Retail store"
    ],
    answer: "Retail store"
  },
  {
    question: "Which of these is NOT a function of management?",
    options: [
      "Planning",
      "Directing",
      "Producing",
      "Controlling"
    ],
    answer: "Producing"
  },
  {
    question: "A contract requires which of the following to be valid?",
    options: [
      "Offer and acceptance",
      "Only an offer",
      "Only acceptance",
      "No consideration"
    ],
    answer: "Offer and acceptance"
  },
  {
    question: "Which is an example of a negotiable instrument?",
    options: [
      "Promissory note",
      "Invoice",
      "Billboard",
      "Receipt"
    ],
    answer: "Promissory note"
  },
  {
    question: "The stock exchange mainly deals with:",
    options: [
      "Buying and selling of shares",
      "Real estate sales",
      "Labor contracts",
      "Government legislation"
    ],
    answer: "Buying and selling of shares"
  },
  {
    question: "Which of these is a characteristic of small businesses?",
    options: [
      "Limited capital",
      "Large workforce",
      "Global presence",
      "Extensive bureaucracy"
    ],
    answer: "Limited capital"
  },
  {
    question: "Which of the following is a principle of delegation?",
    options: [
      "Clarity of authority",
      "Avoiding responsibility",
      "Ignoring communication",
      "Overloading employees"
    ],
    answer: "Clarity of authority"
  },
  {
    question: "Which of the following is NOT part of the management process?",
    options: [
      "Planning",
      "Judging",
      "Organizing",
      "Controlling"
    ],
    answer: "Judging"
  },
  {
    question: "The global market is:",
    options: [
      "A single worldwide market",
      "A local market only",
      "A government market",
      "A restricted market"
    ],
    answer: "A single worldwide market"
  },
  {
    question: "Risk management in business aims to:",
    options: [
      "Minimize potential losses",
      "Maximize losses",
      "Ignore threats",
      "Avoid planning"
    ],
    answer: "Minimize potential losses"
  },
  {
    question: "Labour relations cover:",
    options: [
      "Employee-employer interactions",
      "Marketing strategies",
      "Financial audits",
      "Product design"
    ],
    answer: "Employee-employer interactions"
  },
  {
    question: "Which of the following is NOT a form of economic integration?",
    options: [
      "Common market",
      "Free trade area",
      "Tariff barrier",
      "Economic union"
    ],
    answer: "Tariff barrier"
  },
  {
    question: "Which of these is NOT a principle of marketing?",
    options: [
      "Customer focus",
      "Product quality",
      "Ignoring customer feedback",
      "Effective promotion"
    ],
    answer: "Ignoring customer feedback"
  },
  {
    question: "Which of these business activities involves buying and selling goods?",
    options: [
      "Marketing",
      "Manufacturing",
      "Accounting",
      "Staff training"
    ],
    answer: "Marketing"
  },
  {
    question: "Which function of management controls activities to ensure goals are met?",
    options: [
      "Controlling",
      "Planning",
      "Organizing",
      "Leading"
    ],
    answer: "Controlling"
  },
  {
    question: "Which of these best describes a sole proprietorship?",
    options: [
      "Business owned by one person",
      "Business owned by many people",
      "Government business",
      "Non-profit organization"
    ],
    answer: "Business owned by one person"
  },
  {
    question: "Which of the following is NOT a method of payment in e-commerce?",
    options: [
      "Credit card",
      "Mobile money",
      "Cash on delivery",
      "Barter trade"
    ],
    answer: "Barter trade"
  },
  {
    question: "Which of the following is NOT a source of business finance?",
    options: [
      "Bank loan",
      "Personal savings",
      "Friends and family",
      "Illegal activities"
    ],
    answer: "Illegal activities"
  },
  {
    question: "Which of these is NOT a type of business risk?",
    options: [
      "Financial risk",
      "Operational risk",
      "Market risk",
      "Permanent success"
    ],
    answer: "Permanent success"
  },
  {
    question: "Which of these is a benefit of business planning?",
    options: [
      "Clarifies objectives",
      "Confuses staff",
      "Reduces profits",
      "Increases risks"
    ],
    answer: "Clarifies objectives"
  },
  {
    question: "Which of the following is NOT a financial institution?",
    options: [
      "Insurance company",
      "Microfinance bank",
      "Supermarket",
      "Commercial bank"
    ],
    answer: "Supermarket"
  },
  {
    question: "Which of the following is NOT a feature of effective leadership?",
    options: [
      "Good communication",
      "Vision",
      "Indecisiveness",
      "Integrity"
    ],
    answer: "Indecisiveness"
  },
  {
    question: "Which of these is NOT a form of business ownership?",
    options: [
      "Partnership",
      "Corporation",
      "Employee union",
      "Sole proprietorship"
    ],
    answer: "Employee union"
  },
  {
    question: "Which of the following best describes the ‘organizing’ function in management?",
    options: [
      "Arranging resources to achieve goals",
      "Making decisions only",
      "Ignoring staff input",
      "Setting prices"
    ],
    answer: "Arranging resources to achieve goals"
  },
  {
    question: "Which form of business organization involves shareholders?",
    options: [
      "Corporation",
      "Sole proprietorship",
      "Partnership",
      "Cooperative"
    ],
    answer: "Corporation"
  },
  {
    question: "Which of these is NOT a stage in the decision-making process?",
    options: [
      "Identifying the problem",
      "Evaluating alternatives",
      "Ignoring consequences",
      "Implementing the decision"
    ],
    answer: "Ignoring consequences"
  },
  {
    question: "The main role of ‘directing’ in management is to:",
    options: [
      "Guide and motivate employees",
      "Prepare financial reports",
      "Hire new staff",
      "Develop products"
    ],
    answer: "Guide and motivate employees"
  },
  {
    question: "Which law governs the formation and enforcement of contracts?",
    options: [
      "Law of Contract",
      "Law of Agency",
      "Criminal Law",
      "Property Law"
    ],
    answer: "Law of Contract"
  },
  {
    question: "Which of the following is NOT a principle of agency?",
    options: [
      "Authority",
      "Consent",
      "Fraud",
      "Accountability"
    ],
    answer: "Fraud"
  },
  {
    question: "Risk management in business involves:",
    options: [
      "Identifying and mitigating potential risks",
      "Ignoring threats",
      "Maximizing risks",
      "Avoiding insurance"
    ],
    answer: "Identifying and mitigating potential risks"
  },
  {
    question: "Which of the following is a type of economic integration?",
    options: [
      "Free trade area",
      "Trade embargo",
      "Tariff barrier",
      "Quotas"
    ],
    answer: "Free trade area"
  },
  {
    question: "Which of the following best describes ‘small business development’?",
    options: [
      "Supporting and growing small enterprises",
      "Closing small businesses",
      "Ignoring small firms",
      "Only large businesses matter"
    ],
    answer: "Supporting and growing small enterprises"
  },
  {
    question: "Which of the following best describes ‘market segmentation’?",
    options: [
      "Dividing a market into groups with similar needs",
      "Ignoring customer groups",
      "Selling only one product",
      "Reducing product quality"
    ],
    answer: "Dividing a market into groups with similar needs"
  },
  {
    question: "Which of these is NOT a key element of human resource management?",
    options: [
      "Recruitment",
      "Training",
      "Product packaging",
      "Performance appraisal"
    ],
    answer: "Product packaging"
  },
  {
    question: "Which of the following is NOT a form of business finance?",
    options: [
      "Equity financing",
      "Debt financing",
      "Trade credit",
      "Bartering"
    ],
    answer: "Bartering"
  },
  {
    question: "Which of these is NOT a type of business risk?",
    options: [
      "Credit risk",
      "Market risk",
      "Environmental risk",
      "Guaranteed profit"
    ],
    answer: "Guaranteed profit"
  },
  {
    question: "What does the term ‘e-commerce’ mean?",
    options: [
      "Buying and selling goods electronically",
      "Selling only in local markets",
      "Avoiding internet use",
      "Using only cash payments"
    ],
    answer: "Buying and selling goods electronically"
  },
  {
    question: "Which of the following is a major advantage of e-commerce?",
    options: [
      "Access to global markets",
      "Limited customer base",
      "High operating costs",
      "No need for advertising"
    ],
    answer: "Access to global markets"
  },
  {
    question: "Which of these is NOT a negotiable instrument?",
    options: [
      "Cheque",
      "Promissory note",
      "Invoice",
      "Bill of exchange"
    ],
    answer: "Invoice"
  },
  {
    question: "The term ‘business environment’ refers to:",
    options: [
      "All external and internal factors affecting a business",
      "Only the location of the business",
      "The company’s products",
      "The legal documents"
    ],
    answer: "All external and internal factors affecting a business"
  },
  {
    question: "Which of the following best describes ‘business ethics’?",
    options: [
      "Moral principles guiding business conduct",
      "Illegal business activities",
      "Profit maximization at all costs",
      "Ignoring customer needs"
    ],
    answer: "Moral principles guiding business conduct"
  },
  {
    question: "Which financial institution primarily deals with long-term capital for businesses?",
    options: [
      "Development bank",
      "Commercial bank",
      "Microfinance bank",
      "Insurance company"
    ],
    answer: "Development bank"
  },
  {
    question: "The ‘stock exchange’ facilitates:",
    options: [
      "Trading of shares and securities",
      "Sales of goods",
      "Issuing business licenses",
      "Tax collection"
    ],
    answer: "Trading of shares and securities"
  },
  {
    question: "Which of these is NOT a function of management?",
    options: [
      "Planning",
      "Motivating",
      "Manufacturing",
      "Controlling"
    ],
    answer: "Manufacturing"
  },
  {
    question: "Which of the following is a form of business ownership?",
    options: [
      "Cooperative",
      "Union",
      "Government department",
      "NGO"
    ],
    answer: "Cooperative"
  },
  {
    question: "Which of these is NOT part of the management process?",
    options: [
      "Planning",
      "Organizing",
      "Producing",
      "Leading"
    ],
    answer: "Producing"
  },
  {
    question: "Which of the following is NOT an objective of marketing?",
    options: [
      "Increase sales",
      "Create customer satisfaction",
      "Ignore competition",
      "Build brand loyalty"
    ],
    answer: "Ignore competition"
  },
  {
    question: "Which of these is a characteristic of a ‘partnership’?",
    options: [
      "Owned by two or more persons",
      "Owned by a single person",
      "Owned by government",
      "Owned by shareholders"
    ],
    answer: "Owned by two or more persons"
  },
  {
    question: "Which of the following best describes ‘business plan’?",
    options: [
      "A document detailing business goals and strategies",
      "An employee handbook",
      "A financial report",
      "A marketing flyer"
    ],
    answer: "A document detailing business goals and strategies"
  },
  {
    question: "Which of the following is NOT a function of money?",
    options: [
      "Medium of exchange",
      "Unit of account",
      "Store of value",
      "Source of conflict"
    ],
    answer: "Source of conflict"
  },
  {
    question: "Which of these best describes ‘market research’?",
    options: [
      "Collecting and analyzing information about customers",
      "Ignoring customer opinions",
      "Advertising products",
      "Selling goods"
    ],
    answer: "Collecting and analyzing information about customers"
  },
  {
    question: "Which of the following is NOT a component of the marketing mix?",
    options: [
      "Price",
      "Product",
      "Place",
      "Personnel"
    ],
    answer: "Personnel"
  },
  {
    question: "Which of these is NOT a type of insurance?",
    options: [
      "Life insurance",
      "Health insurance",
      "Fire insurance",
      "Employment insurance"
    ],
    answer: "Employment insurance"
  },
  {
    question: "Which of these is a type of production management?",
    options: [
      "Operations management",
      "Marketing management",
      "Financial management",
      "Human resource management"
    ],
    answer: "Operations management"
  },
  {
    question: "Which is NOT a characteristic of effective communication in business?",
    options: [
      "Clarity",
      "Timeliness",
      "Ambiguity",
      "Feedback"
    ],
    answer: "Ambiguity"
  },
  {
    question: "Which of the following is NOT a responsibility of management?",
    options: [
      "Setting objectives",
      "Motivating employees",
      "Ignoring market trends",
      "Allocating resources"
    ],
    answer: "Ignoring market trends"
  },
  {
    question: "Which of these best describes ‘business competition’?",
    options: [
      "Rivalry among firms to attract customers",
      "Cooperation among all businesses",
      "Government control of prices",
      "No effort to improve products"
    ],
    answer: "Rivalry among firms to attract customers"
  },
  {
    question: "Which of these is a key feature of entrepreneurship?",
    options: [
      "Innovation",
      "Avoiding risks",
      "Following orders",
      "Ignoring market needs"
    ],
    answer: "Innovation"
  },
  {
    question: "Which of the following is NOT part of the legal environment of business?",
    options: [
      "Environmental laws",
      "Contract laws",
      "Taxation laws",
      "Fashion laws"
    ],
    answer: "Fashion laws"
  },
  {
    question: "Which of the following is NOT a type of financial institution?",
    options: [
      "Commercial bank",
      "Microfinance bank",
      "Insurance company",
      "Manufacturing firm"
    ],
    answer: "Manufacturing firm"
  },
  {
    question: "Which of the following is NOT a feature of a sole proprietorship?",
    options: [
      "Single owner",
      "Limited liability",
      "Easy to set up",
      "Owner controls profits"
    ],
    answer: "Limited liability"
  },
  {
    question: "What is the primary goal of production management?",
    options: [
      "Efficiently produce goods and services",
      "Increase sales volume",
      "Hire employees",
      "Advertise products"
    ],
    answer: "Efficiently produce goods and services"
  },
  {
    question: "Which principle of management stresses the importance of unity of command?",
    options: [
      "Fayol’s Principles",
      "Taylor’s Scientific Management",
      "Maslow’s Hierarchy of Needs",
      "Herzberg’s Two-Factor Theory"
    ],
    answer: "Fayol’s Principles"
  },
  {
    question: "What does ‘delegation’ involve in management?",
    options: [
      "Assigning authority to others",
      "Doing all work yourself",
      "Ignoring employee input",
      "Setting goals alone"
    ],
    answer: "Assigning authority to others"
  },
  {
    question: "Which of the following is NOT a common barrier to effective communication?",
    options: [
      "Language differences",
      "Noise",
      "Clear message",
      "Cultural differences"
    ],
    answer: "Clear message"
  },
  {
    question: "Which of the following best describes ‘market economy’?",
    options: [
      "Resources are allocated by market forces",
      "Government controls all resources",
      "No private businesses exist",
      "Only barter trade happens"
    ],
    answer: "Resources are allocated by market forces"
  },
  {
    question: "Which financial statement shows a company’s assets, liabilities, and equity?",
    options: [
      "Balance Sheet",
      "Income Statement",
      "Cash Flow Statement",
      "Statement of Changes in Equity"
    ],
    answer: "Balance Sheet"
  },
  {
    question: "Which of the following is NOT a type of production layout?",
    options: [
      "Process layout",
      "Product layout",
      "Fixed-position layout",
      "Marketing layout"
    ],
    answer: "Marketing layout"
  },
  {
    question: "Which of these is NOT a type of business risk?",
    options: [
      "Strategic risk",
      "Financial risk",
      "Legal risk",
      "Guaranteed risk"
    ],
    answer: "Guaranteed risk"
  },
  {
    question: "Which of these is NOT a form of business communication?",
    options: [
      "Verbal communication",
      "Non-verbal communication",
      "Written communication",
      "Telepathy"
    ],
    answer: "Telepathy"
  },
  {
    question: "Which of these best describes ‘business plan’?",
    options: [
      "A document outlining business goals and strategies",
      "An employee manual",
      "A financial report",
      "A marketing flyer"
    ],
    answer: "A document outlining business goals and strategies"
  },
  {
    question: "Which of the following is NOT a type of marketing strategy?",
    options: [
      "Price skimming",
      "Market penetration",
      "Product diversification",
      "Tax evasion"
    ],
    answer: "Tax evasion"
  },
  {
    question: "Which of the following is NOT a feature of globalization?",
    options: [
      "Increased trade and investment",
      "Cross-border flow of information",
      "Isolated national economies",
      "International cooperation"
    ],
    answer: "Isolated national economies"
  },
  {
    question: "Which of these is NOT a key element of human resource management?",
    options: [
      "Recruitment",
      "Training and development",
      "Performance appraisal",
      "Product packaging"
    ],
    answer: "Product packaging"
  },
  {
    question: "Which is the primary purpose of a contract?",
    options: [
      "To create legally binding obligations",
      "To entertain parties",
      "To confuse the customer",
      "To increase prices"
    ],
    answer: "To create legally binding obligations"
  },
  {
    question: "Which of the following is NOT a financial institution?",
    options: [
      "Commercial bank",
      "Insurance company",
      "Stock exchange",
      "Retail store"
    ],
    answer: "Retail store"
  },
  {
    question: "Which of the following is NOT part of the management process?",
    options: [
      "Planning",
      "Organizing",
      "Producing",
      "Controlling"
    ],
    answer: "Producing"
  },
  {
    question: "Which of these is NOT a principle of good marketing?",
    options: [
      "Customer focus",
      "Continuous improvement",
      "Ignoring competition",
      "Value creation"
    ],
    answer: "Ignoring competition"
  },
  {
    question: "Which of the following is NOT a characteristic of an entrepreneur?",
    options: [
      "Risk-taking",
      "Innovation",
      "Complacency",
      "Leadership"
    ],
    answer: "Complacency"
  },
  {
    question: "Which of these is NOT a type of business ownership?",
    options: [
      "Sole proprietorship",
      "Partnership",
      "Corporation",
      "Government regulation"
    ],
    answer: "Government regulation"
  },
  {
    question: "Which of these is NOT a role of management?",
    options: [
      "Planning",
      "Motivating employees",
      "Setting goals",
      "Ignoring employee welfare"
    ],
    answer: "Ignoring employee welfare"
  },
  {
    question: "Which financial institution facilitates the trading of shares?",
    options: [
      "Stock exchange",
      "Commercial bank",
      "Insurance company",
      "Microfinance bank"
    ],
    answer: "Stock exchange"
  },
  {
    question: "Which of the following is NOT a form of business finance?",
    options: [
      "Equity financing",
      "Debt financing",
      "Trade credit",
      "Personal savings"
    ],
    answer: "Trade credit"
  },
  {
    question: "Which of these is NOT a basic function of management?",
    options: [
      "Planning",
      "Organizing",
      "Controlling",
      "Marketing"
    ],
    answer: "Marketing"
  },
  {
    question: "Which of the following best describes ‘e-commerce’?",
    options: [
      "Buying and selling goods online",
      "Selling only in physical stores",
      "Avoiding digital platforms",
      "Using cash payments only"
    ],
    answer: "Buying and selling goods online"
  },
  {
    question: "Which of these is NOT a component of the marketing mix?",
    options: [
      "Product",
      "Price",
      "Place",
      "Profit"
    ],
    answer: "Profit"
  },
  {
    question: "Which of these best describes ‘market segmentation’?",
    options: [
      "Dividing a market into groups with similar needs",
      "Selling the same product to everyone",
      "Ignoring customer preferences",
      "Raising prices arbitrarily"
    ],
    answer: "Dividing a market into groups with similar needs"
  },
  {
    question: "Which of the following is NOT a legal form of business organization?",
    options: [
      "Sole proprietorship",
      "Partnership",
      "Cooperative",
      "Illegal cartel"
    ],
    answer: "Illegal cartel"
  },
  {
    question: "Which is NOT a feature of a corporation?",
    options: [
      "Limited liability",
      "Separate legal entity",
      "Unlimited liability",
      "Ability to raise capital by issuing shares"
    ],
    answer: "Unlimited liability"
  },
  {
    question: "Which of the following is NOT a function of money?",
    options: [
      "Medium of exchange",
      "Unit of account",
      "Store of value",
      "Medium of production"
    ],
    answer: "Medium of production"
  },
  {
    question: "Which of these is NOT an objective of management?",
    options: [
      "Achieving organizational goals",
      "Motivating employees",
      "Ignoring competition",
      "Efficient use of resources"
    ],
    answer: "Ignoring competition"
  },
  {
    question: "Which of the following best describes ‘risk management’?",
    options: [
      "Identifying and reducing business risks",
      "Ignoring potential risks",
      "Taking unnecessary risks",
      "Avoiding insurance"
    ],
    answer: "Identifying and reducing business risks"
  },
  {
    question: "Which of these is NOT a principle of contract law?",
    options: [
      "Offer and acceptance",
      "Consideration",
      "Illegal purpose",
      "Capacity to contract"
    ],
    answer: "Illegal purpose"
  },
  {
    question: "Which of the following best describes ‘business ethics’?",
    options: [
      "Moral principles guiding business behavior",
      "Dishonest business practices",
      "Ignoring customer rights",
      "Maximizing profits at any cost"
    ],
    answer: "Moral principles guiding business behavior"
  },
  {
    question: "Which of the following is NOT an example of a negotiable instrument?",
    options: [
      "Cheque",
      "Promissory note",
      "Bill of exchange",
      "Invoice"
    ],
    answer: "Invoice"
  },
  {
    question: "Which of these best describes ‘globalization’?",
    options: [
      "Increasing worldwide interconnectedness",
      "Isolated local economies",
      "Restricting trade",
      "Closing borders"
    ],
    answer: "Increasing worldwide interconnectedness"
  },
  {
    question: "Which of the following is NOT a type of business organization?",
    options: [
      "Sole proprietorship",
      "Partnership",
      "Corporation",
      "Labor union"
    ],
    answer: "Labor union"
  },
  {
    question: "Which of the following is NOT a function of human resource management?",
    options: [
      "Recruitment and selection",
      "Training and development",
      "Production scheduling",
      "Performance appraisal"
    ],
    answer: "Production scheduling"
  },
  {
    question: "Which is the first step in the decision-making process?",
    options: [
      "Identifying the problem",
      "Evaluating alternatives",
      "Implementing the decision",
      "Reviewing the decision"
    ],
    answer: "Identifying the problem"
  },
  {
    question: "Which of these is NOT a characteristic of a good business plan?",
    options: [
      "Clear objectives",
      "Detailed financial projections",
      "Unrealistic goals",
      "Market analysis"
    ],
    answer: "Unrealistic goals"
  },
  {
    question: "Which financial institution provides loans to individuals and small businesses?",
    options: [
      "Microfinance bank",
      "Central bank",
      "Stock exchange",
      "Insurance company"
    ],
    answer: "Microfinance bank"
  },
  {
    question: "Which of the following best describes ‘business environment’?",
    options: [
      "All external and internal factors affecting business operations",
      "Only internal company policies",
      "Only government regulations",
      "Only customers’ preferences"
    ],
    answer: "All external and internal factors affecting business operations"
  },
  {
    question: "Which of these is NOT a key principle of effective planning?",
    options: [
      "Setting clear objectives",
      "Flexibility",
      "Ignoring risks",
      "Timeliness"
    ],
    answer: "Ignoring risks"
  },
  {
    question: "Which term describes the process of dividing work into smaller tasks?",
    options: [
      "Division of labor",
      "Delegation",
      "Coordination",
      "Supervision"
    ],
    answer: "Division of labor"
  },
  {
    question: "Which of the following is NOT a benefit of e-commerce?",
    options: [
      "Global reach",
      "Reduced costs",
      "Immediate product delivery",
      "Limited customer access"
    ],
    answer: "Limited customer access"
  },
  {
    question: "Which of the following is NOT a common source of business finance?",
    options: [
      "Personal savings",
      "Bank loans",
      "Government grants",
      "Illegal funding"
    ],
    answer: "Illegal funding"
  },
  {
    question: "Which marketing strategy involves setting prices low to enter a new market?",
    options: [
      "Market penetration",
      "Price skimming",
      "Product differentiation",
      "Direct marketing"
    ],
    answer: "Market penetration"
  },
  {
    question: "Which of these is NOT a factor of production?",
    options: [
      "Land",
      "Labor",
      "Capital",
      "Money laundering"
    ],
    answer: "Money laundering"
  },
  {
    question: "Which of the following is NOT an element of the promotional mix?",
    options: [
      "Advertising",
      "Sales promotion",
      "Public relations",
      "Product pricing"
    ],
    answer: "Product pricing"
  },
  {
    question: "Which of the following best defines ‘entrepreneurship’?",
    options: [
      "The process of starting and managing a business",
      "Being an employee",
      "Avoiding risks",
      "Following instructions"
    ],
    answer: "The process of starting and managing a business"
  },
  {
    question: "Which of these is NOT an example of a negotiable instrument?",
    options: [
      "Cheque",
      "Bill of exchange",
      "Promissory note",
      "Business card"
    ],
    answer: "Business card"
  },
  {
    question: "Which of the following is NOT a responsibility of management?",
    options: [
      "Planning",
      "Leading",
      "Cooking",
      "Controlling"
    ],
    answer: "Cooking"
  },
  {
    question: "Which term describes the process of determining what tasks need to be done?",
    options: [
      "Planning",
      "Organizing",
      "Staffing",
      "Directing"
    ],
    answer: "Planning"
  },
  {
    question: "Which of these is NOT a characteristic of an effective leader?",
    options: [
      "Communication skills",
      "Indecisiveness",
      "Integrity",
      "Vision"
    ],
    answer: "Indecisiveness"
  },
  {
    question: "Which is NOT a form of business ownership?",
    options: [
      "Cooperative",
      "Partnership",
      "Corporation",
      "Employment agency"
    ],
    answer: "Employment agency"
  },
  {
    question: "Which of these is NOT a reason for business failure?",
    options: [
      "Poor management",
      "Lack of capital",
      "Effective marketing",
      "Inadequate planning"
    ],
    answer: "Effective marketing"
  },
  {
    question: "Which of the following is NOT a feature of a partnership?",
    options: [
      "Shared ownership",
      "Unlimited liability for partners",
      "Separate legal entity",
      "Joint decision making"
    ],
    answer: "Separate legal entity"
  },
  {
    question: "Which of these is NOT a component of the external business environment?",
    options: [
      "Political factors",
      "Economic factors",
      "Technological factors",
      "Company’s internal policies"
    ],
    answer: "Company’s internal policies"
  },
  {
    question: "Which of the following is NOT part of risk management?",
    options: [
      "Risk identification",
      "Risk assessment",
      "Risk ignoring",
      "Risk control"
    ],
    answer: "Risk ignoring"
  },
  {
    question: "Which of these best defines ‘stock exchange’?",
    options: [
      "A marketplace for buying and selling shares",
      "A bank that gives loans",
      "An insurance company",
      "A government agency"
    ],
    answer: "A marketplace for buying and selling shares"
  },
  {
    question: "Which of the following is NOT a type of contract?",
    options: [
      "Express contract",
      "Implied contract",
      "Forced contract",
      "Bilateral contract"
    ],
    answer: "Forced contract"
  },
  {
    question: "Which term describes a situation where one person acts on behalf of another?",
    options: [
      "Agency",
      "Partnership",
      "Franchise",
      "Merger"
    ],
    answer: "Agency"
  },
  {
    question: "Which of the following is NOT a key function of marketing?",
    options: [
      "Product development",
      "Pricing",
      "Manufacturing",
      "Promotion"
    ],
    answer: "Manufacturing"
  },
  {
    question: "Which of these best describes ‘economic integration’?",
    options: [
      "Cooperation among countries to reduce trade barriers",
      "Increasing tariffs",
      "Isolating economies",
      "Restricting trade"
    ],
    answer: "Cooperation among countries to reduce trade barriers"
  },
  {
    question: "Which of these is NOT a type of business organization?",
    options: [
      "Sole proprietorship",
      "Partnership",
      "Corporation",
      "Trade union"
    ],
    answer: "Trade union"
  },
  {
    question: "Which of the following is NOT a characteristic of an effective organization?",
    options: [
      "Clear objectives",
      "Poor communication",
      "Good coordination",
      "Efficient use of resources"
    ],
    answer: "Poor communication"
  },
  {
    question: "Which of these best describes ‘business ethics’?",
    options: [
      "Standards of right and wrong in business",
      "Dishonest practices",
      "Ignoring customers",
      "Maximizing profits by any means"
    ],
    answer: "Standards of right and wrong in business"
  },
  {
    question: "Which of the following best describes ‘production’?",
    options: [
      "Process of creating goods and services",
      "Selling goods",
      "Advertising products",
      "Hiring employees"
    ],
    answer: "Process of creating goods and services"
  },
  {
    question: "Which of the following is NOT a method of market research?",
    options: [
      "Surveys",
      "Interviews",
      "Guesswork",
      "Focus groups"
    ],
    answer: "Guesswork"
  },
  {
    question: "Which of these is NOT a function of money?",
    options: [
      "Medium of exchange",
      "Store of value",
      "Unit of account",
      "Means of production"
    ],
    answer: "Means of production"
  },
  {
    question: "Which term best describes a legal business entity owned by shareholders?",
    options: [
      "Corporation",
      "Sole proprietorship",
      "Partnership",
      "Cooperative"
    ],
    answer: "Corporation"
  },
  {
    question: "Which of the following is NOT an element of the business environment?",
    options: [
      "Social factors",
      "Technological factors",
      "Psychological factors",
      "Legal factors"
    ],
    answer: "Psychological factors"
  },
  {
    question: "Which of the following is NOT a leadership style?",
    options: [
      "Autocratic",
      "Democratic",
      "Laissez-faire",
      "Passive-aggressive"
    ],
    answer: "Passive-aggressive"
  },
  {
    question: "Which of these best defines ‘small business management’?",
    options: [
      "Managing and developing small enterprises",
      "Running large corporations",
      "Ignoring business risks",
      "Focusing on non-profit organizations"
    ],
    answer: "Managing and developing small enterprises"
  },
  {
    question: "Which of the following is NOT a marketing tool?",
    options: [
      "Advertising",
      "Sales promotion",
      "Price discrimination",
      "Customer service"
    ],
    answer: "Price discrimination"
  },
  {
    question: "Which of these is NOT a step in the planning process?",
    options: [
      "Setting objectives",
      "Developing strategies",
      "Ignoring constraints",
      "Evaluating results"
    ],
    answer: "Ignoring constraints"
  },
  {
    question: "Which of the following is NOT a type of production system?",
    options: [
      "Job production",
      "Batch production",
      "Mass production",
      "Corporate production"
    ],
    answer: "Corporate production"
  },
  {
    question: "Which term describes the cost of using capital in a business?",
    options: [
      "Interest",
      "Profit",
      "Revenue",
      "Depreciation"
    ],
    answer: "Interest"
  },
  {
    question: "Which of the following is NOT a type of business risk?",
    options: [
      "Operational risk",
      "Financial risk",
      "Speculative risk",
      "Guaranteed risk"
    ],
    answer: "Guaranteed risk"
  },
  {
    question: "Which of these is NOT an example of a financial institution?",
    options: [
      "Commercial bank",
      "Insurance company",
      "Stock exchange",
      "Manufacturing firm"
    ],
    answer: "Manufacturing firm"
  }
  // Add more questions here
];

export default businessManagementQuestions;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	