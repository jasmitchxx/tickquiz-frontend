const governmentQuestions = [
  {
    question: "Government can best be defined as:",
    options: ["A group of traders in a country", "The machinery through which a state is ruled", "An organization for religious activities", "A collection of private businesses"],
    answer: "The machinery through which a state is ruled"
  },
  {
    question: "Government as an academic field refers to:",
    options: ["The study of political systems and governance", "The practice of law enforcement", "The study of business management", "The organization of trade unions"],
    answer: "The study of political systems and governance"
  },
  {
    question: "Which of the following is NOT a function of government?",
    options: ["Provision of security", "Maintenance of law and order", "Production of private goods for profit", "Provision of social services"],
    answer: "Production of private goods for profit"
  },
  {
    question: "One reason for studying government is to:",
    options: ["Promote dictatorship", "Understand how laws are made", "Encourage illiteracy", "Avoid political participation"],
    answer: "Understand how laws are made"
  },
  {
    question: "Which of the following is a political function of government?",
    options: ["Building markets", "Conducting elections", "Providing hospitals", "Producing goods"],
    answer: "Conducting elections"
  },
  {
    question: "A state is defined as:",
    options: ["A group of people without territory", "An organized political community with sovereignty", "A collection of businesses", "A religious organization"],
    answer: "An organized political community with sovereignty"
  },
  {
    question: "Sovereignty refers to:",
    options: ["The power of citizens", "Supreme authority within a state", "The power of judges", "The authority of political parties"],
    answer: "Supreme authority within a state"
  },
  {
    question: "Which concept refers to a group of people with shared culture and history?",
    options: ["State", "Nation", "Government", "Society"],
    answer: "Nation"
  },
  {
    question: "Democracy is best described as:",
    options: ["Rule by one person", "Rule by the military", "Government by the people", "Rule by judges"],
    answer: "Government by the people"
  },
  {
    question: "The principle of rule of law implies:",
    options: ["Leaders are above the law", "Law applies equally to all", "Only the rich obey laws", "Judges make laws"],
    answer: "Law applies equally to all"
  },
  {
    question: "Separation of powers means:",
    options: ["All powers are held by one organ", "Power is divided among organs of government", "Only the president has power", "Judiciary controls all organs"],
    answer: "Power is divided among organs of government"
  },
  {
    question: "Which organ of government makes laws?",
    options: ["Executive", "Judiciary", "Legislature", "Police"],
    answer: "Legislature"
  },
  {
    question: "The executive is responsible for:",
    options: ["Interpreting laws", "Making laws", "Implementing laws", "Amending constitution"],
    answer: "Implementing laws"
  },
  {
    question: "The judiciary mainly performs the function of:",
    options: ["Making policies", "Executing laws", "Interpreting laws", "Collecting taxes"],
    answer: "Interpreting laws"
  },
  {
    question: "Citizenship by birth means:",
    options: ["Acquiring citizenship through marriage", "Being born in a country", "Applying for citizenship", "Working in a country"],
    answer: "Being born in a country"
  },
  {
    question: "Naturalization is:",
    options: ["Citizenship by birth", "Citizenship through application", "Citizenship by descent", "Citizenship by force"],
    answer: "Citizenship through application"
  },
  {
    question: "Which of the following is a responsibility of a citizen?",
    options: ["Voting in elections", "Avoiding laws", "Refusing taxes", "Ignoring government"],
    answer: "Voting in elections"
  },
  {
    question: "Which institution protects human rights in Ghana?",
    options: ["CHRAJ", "Police Academy", "Ministry of Trade", "ECOWAS"],
    answer: "CHRAJ"
  },
  {
    question: "DOVVSU deals mainly with:",
    options: ["Trade disputes", "Domestic violence cases", "Foreign policy", "Election issues"],
    answer: "Domestic violence cases"
  },
  {
    question: "Legal rights are:",
    options: ["Given by customs", "Recognized by law", "Only moral obligations", "Optional privileges"],
    answer: "Recognized by law"
  },
  {
    question: "A bicameral legislature has:",
    options: ["One chamber", "Two chambers", "Three chambers", "No chamber"],
    answer: "Two chambers"
  },
  {
    question: "Delegated legislation is:",
    options: ["Law made by judiciary", "Law made by individuals without authority", "Law made by bodies authorized by parliament", "Law made by citizens"],
    answer: "Law made by bodies authorized by parliament"
  },
  {
    question: "One advantage of delegated legislation is:",
    options: ["It wastes time", "It allows flexibility", "It causes confusion", "It removes authority"],
    answer: "It allows flexibility"
  },
  {
    question: "One disadvantage of delegated legislation is:",
    options: ["Saves time", "Encourages democracy", "May abuse power", "Promotes flexibility"],
    answer: "May abuse power"
  },
  {
    question: "Checks and balances ensure:",
    options: ["Power concentration", "Abuse of power", "Control among branches", "Weak government"],
    answer: "Control among branches"
  },
  {
    question: "Which of the following best describes a citizen?",
    options: ["A visitor in a country", "A person with full rights in a state", "A foreign investor", "A refugee"],
    answer: "A person with full rights in a state"
  },
  {
    question: "Equality before the law means:",
    options: ["Only leaders obey laws", "All citizens are equal under the law", "Judges are superior", "Rich people are above law"],
    answer: "All citizens are equal under the law"
  },
  {
    question: "The main aim of government is to:",
    options: ["Promote conflict", "Ensure order and development", "Encourage corruption", "Prevent education"],
    answer: "Ensure order and development"
  },
  {
    question: "A unitary system of government is one in which:",
    options: ["Power is shared between central and regional governments", "Power is concentrated at the centre", "There are many independent states", "Local governments are fully autonomous"],
    answer: "Power is concentrated at the centre"
  },
  {
    question: "Which of the following is a feature of a federal system?",
    options: ["Single central authority", "Division of powers between levels of government", "Absence of constitution", "Weak judiciary"],
    answer: "Division of powers between levels of government"
  },
  {
    question: "A confederation is best described as:",
    options: ["A loose union of independent states", "A strong central government", "A military alliance only", "A monarchy system"],
    answer: "A loose union of independent states"
  },
  {
    question: "Centralisation refers to:",
    options: ["Distribution of power to local levels", "Concentration of authority at one point", "Sharing power among citizens", "Separation of powers"],
    answer: "Concentration of authority at one point"
  },
  {
    question: "Decentralisation involves:",
    options: ["Taking power from the people", "Concentration of power at the top", "Transfer of authority to local units", "Removal of government authority"],
    answer: "Transfer of authority to local units"
  },
  {
    question: "Which of the following is a merit of decentralisation?",
    options: ["Encourages dictatorship", "Promotes local participation", "Reduces accountability", "Increases central control"],
    answer: "Promotes local participation"
  },
  {
    question: "A major demerit of centralisation is:",
    options: ["Encourages participation", "Reduces workload", "Overburdens the central authority", "Improves efficiency"],
    answer: "Overburdens the central authority"
  },
  {
    question: "Devolution is a type of decentralisation where:",
    options: ["Power is fully transferred to local authorities", "Power remains at the centre", "Power is given temporarily", "Power is removed completely"],
    answer: "Power is fully transferred to local authorities"
  },
  {
    question: "A constitution can best be defined as:",
    options: ["A set of religious beliefs", "The supreme law guiding a state", "A political party manifesto", "A court judgment"],
    answer: "The supreme law guiding a state"
  },
  {
    question: "Which of the following is a source of constitution?",
    options: ["Customs and conventions", "Private businesses", "Trade unions", "Military decrees only"],
    answer: "Customs and conventions"
  },
  {
    question: "A written constitution is:",
    options: ["Based on traditions only", "Contained in a single document", "Uncodified laws", "Flexible at all times"],
    answer: "Contained in a single document"
  },
  {
    question: "A rigid constitution is one that:",
    options: ["Cannot be amended", "Is easy to amend", "Requires special procedure to amend", "Has no legal backing"],
    answer: "Requires special procedure to amend"
  },
  {
    question: "One function of a constitution is to:",
    options: ["Encourage corruption", "Define powers of government organs", "Promote dictatorship", "Limit citizen participation"],
    answer: "Define powers of government organs"
  },
  {
    question: "Which stage is part of constitution-making?",
    options: ["Military takeover", "Referendum", "Election boycott", "Court injunction"],
    answer: "Referendum"
  },
  {
    question: "An unwritten constitution is based on:",
    options: ["Single document", "Judicial rulings only", "Customs and conventions", "Political speeches"],
    answer: "Customs and conventions"
  },
  {
    question: "A political party is an organization that:",
    options: ["Promotes religious beliefs", "Seeks to capture political power", "Controls businesses", "Runs schools"],
    answer: "Seeks to capture political power"
  },
  {
    question: "One function of political parties is to:",
    options: ["Control judiciary", "Educate the public politically", "Promote dictatorship", "Stop elections"],
    answer: "Educate the public politically"
  },
  {
    question: "Which party system allows only one political party?",
    options: ["Multi-party system", "Two-party system", "One-party system", "Federal system"],
    answer: "One-party system"
  },
  {
    question: "A disadvantage of political parties is:",
    options: ["Promotes unity always", "Encourages division", "Eliminates corruption", "Ensures fairness"],
    answer: "Encourages division"
  },
  {
    question: "Pressure groups aim to:",
    options: ["Capture political power", "Influence government policies", "Overthrow government", "Run elections"],
    answer: "Influence government policies"
  },
  {
    question: "Lobbying is a method used by:",
    options: ["Judges", "Pressure groups", "Police", "Teachers"],
    answer: "Pressure groups"
  },
  {
    question: "One criticism of pressure groups is that they:",
    options: ["Promote democracy", "May distort public opinion", "Support development", "Educate citizens"],
    answer: "May distort public opinion"
  },
  {
    question: "Public opinion refers to:",
    options: ["Views of government officials", "Views of citizens on issues", "Opinions of judges", "Views of political parties only"],
    answer: "Views of citizens on issues"
  },
  {
    question: "Which of the following forms public opinion?",
    options: ["Courts", "Media", "Police", "Army"],
    answer: "Media"
  },
  {
    question: "Public opinion can be measured through:",
    options: ["Arrests", "Opinion polls", "Court cases", "Military action"],
    answer: "Opinion polls"
  },
  {
    question: "Media refers to:",
    options: ["Government officials", "Means of communication", "Court systems", "Political parties"],
    answer: "Means of communication"
  },
  {
    question: "One role of the media is to:",
    options: ["Suppress information", "Disseminate information", "Promote violence", "Control judiciary"],
    answer: "Disseminate information"
  },
  {
    question: "Which principle guides the media?",
    options: ["Bias", "Accuracy", "Corruption", "Secrecy"],
    answer: "Accuracy"
  },
  {
    question: "An electoral system refers to:",
    options: ["Judicial procedures", "Methods of conducting elections", "Police operations", "Military governance"],
    answer: "Methods of conducting elections"
  },
  {
    question: "Which is a type of election?",
    options: ["Judicial election", "General election", "Police election", "Military election"],
    answer: "General election"
  },
  {
    question: "A referendum is used to:",
    options: ["Elect leaders", "Decide important issues by voting", "Appoint judges", "Remove ministers"],
    answer: "Decide important issues by voting"
  },
  {
    question: "Which electoral system gives victory to the candidate with most votes?",
    options: ["Proportional representation", "Absolute majority", "Simple majority", "Referendum"],
    answer: "Simple majority"
  },
  {
    question: "One importance of elections is:",
    options: ["Encouraging dictatorship", "Legitimizing government", "Preventing participation", "Reducing accountability"],
    answer: "Legitimizing government"
  },
  {
    question: "A limitation of elections is:",
    options: ["Promotes democracy", "Voters may lack information", "Encourages participation", "Ensures fairness"],
    answer: "Voters may lack information"
  },
  {
    question: "A constitution derived from customs and conventions is known as:",
    options: ["Written constitution", "Rigid constitution", "Unwritten constitution", "Federal constitution"],
    answer: "Unwritten constitution"
  },
  {
    question: "A constitution that is difficult to amend is described as:",
    options: ["Flexible", "Rigid", "Unwritten", "Unitary"],
    answer: "Rigid"
  },
  {
    question: "Which body is usually responsible for drafting a constitution?",
    options: ["Electoral Commission", "Committee of Experts", "Cabinet", "Judiciary"],
    answer: "Committee of Experts"
  },
  {
    question: "One importance of a constitution is that it:",
    options: ["Promotes dictatorship", "Defines powers of government", "Encourages corruption", "Removes rights"],
    answer: "Defines powers of government"
  },
  {
    question: "Which system divides powers between central and regional governments?",
    options: ["Unitary", "Federal", "Confederal", "Monarchical"],
    answer: "Federal"
  },
  {
    question: "A system where power is concentrated at the center is called:",
    options: ["Federalism", "Confederation", "Unitary system", "Republic"],
    answer: "Unitary system"
  },
  {
    question: "One merit of decentralisation is:",
    options: ["Encourages dictatorship", "Promotes local participation", "Reduces development", "Weakens governance"],
    answer: "Promotes local participation"
  },
  {
    question: "One demerit of centralisation is:",
    options: ["Promotes unity", "Encourages participation", "Government far from people", "Quick decisions"],
    answer: "Government far from people"
  },
  {
    question: "A political party is primarily formed to:",
    options: ["Teach religion", "Win political power", "Promote sports", "Provide loans"],
    answer: "Win political power"
  },
  {
    question: "Which of the following is a function of political parties?",
    options: ["Judicial review", "Recruitment of leaders", "Law enforcement", "Tax collection"],
    answer: "Recruitment of leaders"
  },
  {
    question: "A system with many political parties is called:",
    options: ["One-party system", "Two-party system", "Multi-party system", "Military system"],
    answer: "Multi-party system"
  },
  {
    question: "One importance of public opinion is that it:",
    options: ["Destroys democracy", "Guides government decisions", "Promotes dictatorship", "Stops elections"],
    answer: "Guides government decisions"
  },
  {
    question: "Which is a principle of media?",
    options: ["Bias", "Accuracy", "Corruption", "Secrecy"],
    answer: "Accuracy"
  },
  {
    question: "One role of the media is:",
    options: ["Judging cases", "Creating awareness", "Making laws", "Conducting elections"],
    answer: "Creating awareness"
  },
  {
    question: "Electoral systems refer to:",
    options: ["Judicial processes", "Election procedures", "Tax systems", "Court systems"],
    answer: "Election procedures"
  },
  {
    question: "Which election is conducted to fill a vacant seat?",
    options: ["General election", "Bye-election", "Referendum", "Run-off"],
    answer: "Bye-election"
  },
  {
    question: "Proportional representation ensures:",
    options: ["Winner takes all", "Fair representation", "Military control", "Single party rule"],
    answer: "Fair representation"
  },
  {
    question: "The electoral management body is responsible for:",
    options: ["Judging cases", "Conducting elections", "Making laws", "Collecting taxes"],
    answer: "Conducting elections"
  },
  {
    question: "One feature of EMB is:",
    options: ["Bias", "Neutrality", "Corruption", "Political influence"],
    answer: "Neutrality"
  },
  {
    question: "A major constraint of EMB is:",
    options: ["Excess funds", "Inadequate logistics", "Too much staff", "Too many voters"],
    answer: "Inadequate logistics"
  },
  {
    question: "Traditional governance in Ghana includes:",
    options: ["Military rule", "Chieftaincy system", "Colonial rule", "Party system"],
    answer: "Chieftaincy system"
  },
  {
    question: "A centralized traditional system has:",
    options: ["No leaders", "Paramount chiefs", "Military rulers", "Judges"],
    answer: "Paramount chiefs"
  },
  {
    question: "A non-centralized system is found among:",
    options: ["Akans", "Tallensi", "Ewes", "Ga"],
    answer: "Tallensi"
  },
  {
    question: "One role of chiefs is:",
    options: ["Conduct elections", "Settle disputes", "Write laws", "Collect taxes"],
    answer: "Settle disputes"
  },
  {
    question: "Colonialism in Africa was driven by:",
    options: ["Religion only", "Search for raw materials", "Education", "Peace"],
    answer: "Search for raw materials"
  },
  {
    question: "Indirect rule was used by:",
    options: ["French", "British", "Portuguese", "Spanish"],
    answer: "British"
  },
  {
    question: "French colonial policy included:",
    options: ["Indirect rule", "Assimilation", "Democracy", "Federalism"],
    answer: "Assimilation"
  },
  {
    question: "Nationalism refers to:",
    options: ["Colonial rule", "Struggle for independence", "Military government", "Dictatorship"],
    answer: "Struggle for independence"
  },
  {
    question: "The UGCC was formed to:",
    options: ["Promote colonialism", "Fight for independence", "Support Britain", "Train soldiers"],
    answer: "Fight for independence"
  },
  {
    question: "The 1948 riots contributed to:",
    options: ["Colonial rule", "Independence struggle", "Military rule", "Federalism"],
    answer: "Independence struggle"
  },
  {
    question: "The Burns Constitution was introduced in:",
    options: ["1916", "1925", "1946", "1957"],
    answer: "1946"
  },
  {
    question: "The 1957 Constitution marked:",
    options: ["Colonial rule", "Independence", "Military rule", "Republic"],
    answer: "Independence"
  },
  {
    question: "Military intervention means:",
    options: ["Election", "Seizure of power by force", "Referendum", "Debate"],
    answer: "Seizure of power by force"
  },
  {
    question: "One cause of military rule is:",
    options: ["Economic mismanagement", "Good governance", "Peace", "Stability"],
    answer: "Economic mismanagement"
  },
  {
    question: "One effect of military rule is:",
    options: ["Democracy", "Human rights abuse", "Stability", "Freedom"],
    answer: "Human rights abuse"
  },
  {
    question: "The 1992 Constitution established:",
    options: ["Military rule", "Fourth Republic", "Colonial rule", "Monarchy"],
    answer: "Fourth Republic"
  },
  {
    question: "Local government operates at:",
    options: ["National level", "Grassroots level", "International level", "Regional level"],
    answer: "Grassroots level"
  },
  {
    question: "District Assemblies are part of:",
    options: ["Judiciary", "Local government", "Military", "Executive"],
    answer: "Local government"
  },
  {
    question: "One function of District Assemblies is:",
    options: ["Judging cases", "Implement policies", "Conduct elections", "Make laws"],
    answer: "Implement policies"
  },
  {
    question: "Public service refers to:",
    options: ["Private companies", "Government services", "NGOs", "Schools"],
    answer: "Government services"
  },
  {
    question: "Civil service is responsible for:",
    options: ["Policy implementation", "Judging cases", "Conducting elections", "Making laws"],
    answer: "Policy implementation"
  },
  {
    question: "One feature of civil service is:",
    options: ["Bias", "Neutrality", "Corruption", "Instability"],
    answer: "Neutrality"
  },
  {
    question: "Public corporations are established by:",
    options: ["Courts", "Act of Parliament", "Police", "Media"],
    answer: "Act of Parliament"
  },
  {
    question: "Privatisation means:",
    options: ["Government ownership", "Transfer to private sector", "Military takeover", "Public control"],
    answer: "Transfer to private sector"
  },
  {
    question: "Diplomacy involves:",
    options: ["War", "Negotiation", "Voting", "Judging"],
    answer: "Negotiation"
  },
  {
    question: "Embassies serve to:",
    options: ["Conduct elections", "Promote relations", "Make laws", "Judge cases"],
    answer: "Promote relations"
  },
  {
    question: "ECOWAS is a:",
    options: ["Political party", "Regional organisation", "Court", "School"],
    answer: "Regional organisation"
  },
  {
    question: "Foreign policy is concerned with:",
    options: ["Internal affairs", "Relations with other countries", "Judiciary", "Media"],
    answer: "Relations with other countries"
  },
  {
    question: "One determinant of foreign policy is:",
    options: ["Religion only", "National interest", "Education", "Weather"],
    answer: "National interest"
  },
  {
    question: "Which traditional political system has a well-defined hierarchy of chiefs?",
    options: ["Segmentary system", "Centralised system", "Acephalous system", "Republican system"],
    answer: "Centralised system"
  },
  {
    question: "In a non-centralised system, authority is:",
    options: ["Highly structured", "Based on lineage and elders", "Held by kings", "Controlled by military"],
    answer: "Based on lineage and elders"
  },
  {
    question: "Queen mothers in traditional systems are responsible for:",
    options: ["Judging cases", "Selecting chiefs", "Collecting taxes", "Leading the army"],
    answer: "Selecting chiefs"
  },
  {
    question: "One criticism of chieftaincy institution is:",
    options: ["Promotion of peace", "Perennial disputes", "Unity", "Development"],
    answer: "Perennial disputes"
  },
  {
    question: "A major source of chieftaincy disputes is:",
    options: ["Clear succession lines", "Poor record keeping", "Strong leadership", "Unity"],
    answer: "Poor record keeping"
  },
  {
    question: "Indirect rule involved:",
    options: ["Direct governance by Britain", "Use of local chiefs", "Military control", "No administration"],
    answer: "Use of local chiefs"
  },
  {
    question: "Assimilation aimed at:",
    options: ["Preserving African culture", "Making Africans French citizens", "Encouraging independence", "Promoting local rule"],
    answer: "Making Africans French citizens"
  },
  {
    question: "Association policy replaced assimilation because:",
    options: ["Assimilation failed", "Africans rejected it", "France changed policy", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which group protected land rights in the Gold Coast?",
    options: ["CPP", "UGCC", "ARPS", "WASU"],
    answer: "ARPS"
  },
  {
    question: "Pan-Africanism promoted:",
    options: ["Colonialism", "African unity", "Military rule", "Segregation"],
    answer: "African unity"
  },
  {
    question: "The Watson Commission investigated:",
    options: ["Elections", "1948 riots", "Military coups", "Constitutions"],
    answer: "1948 riots"
  },
  {
    question: "Positive Action involved:",
    options: ["Peaceful protest", "Violence", "Military rule", "Colonial support"],
    answer: "Peaceful protest"
  },
  {
    question: "The 1960 Constitution made Ghana a:",
    options: ["Colony", "Republic", "Monarchy", "Military state"],
    answer: "Republic"
  },
  {
    question: "The NLC came to power in:",
    options: ["1957", "1966", "1979", "1992"],
    answer: "1966"
  },
  {
    question: "Political instability leads to:",
    options: ["Economic growth", "Frequent change of government", "Peace", "Unity"],
    answer: "Frequent change of government"
  },
  {
    question: "The Committee of Experts in 1992 was headed by:",
    options: ["Dr. Kwame Nkrumah", "Dr. S.K.B Asante", "Justice Annan", "Busia"],
    answer: "Dr. S.K.B Asante"
  },
  {
    question: "The 1992 Constitution was promulgated in:",
    options: ["1990", "1991", "1992", "1993"],
    answer: "1993"
  },
  {
    question: "A monocephalous executive means:",
    options: ["Two heads", "One head", "Military head", "No head"],
    answer: "One head"
  },
  {
    question: "Local government enhances:",
    options: ["Centralisation", "Grassroots participation", "Military rule", "Dictatorship"],
    answer: "Grassroots participation"
  },
  {
    question: "Which body coordinates regions?",
    options: ["District Assembly", "RCC", "Cabinet", "Parliament"],
    answer: "RCC"
  },
  {
    question: "One source of revenue for assemblies is:",
    options: ["Loans", "Military funds", "Foreign aid only", "Private companies"],
    answer: "Loans"
  },
  {
    question: "Executive control of local government involves:",
    options: ["Courts", "President", "Media", "Citizens"],
    answer: "President"
  },
  {
    question: "Public service employees are paid from:",
    options: ["Private funds", "Consolidated fund", "Taxes only", "Loans"],
    answer: "Consolidated fund"
  },
  {
    question: "Civil servants are expected to be:",
    options: ["Partisan", "Neutral", "Corrupt", "Political"],
    answer: "Neutral"
  },
  {
    question: "Regulatory agencies ensure:",
    options: ["Profit", "Quality and safety", "Politics", "Military rule"],
    answer: "Quality and safety"
  },
  {
    question: "Public corporations are meant to:",
    options: ["Make profit only", "Provide essential services", "Run elections", "Judge cases"],
    answer: "Provide essential services"
  },
  {
    question: "One challenge of public corporations is:",
    options: ["Efficiency", "Inadequate funds", "Accountability", "Profit"],
    answer: "Inadequate funds"
  },
  {
    question: "Privatisation improves:",
    options: ["Efficiency", "Corruption", "Loss", "Government control"],
    answer: "Efficiency"
  },
  {
    question: "Diplomacy is conducted by:",
    options: ["Teachers", "Diplomats", "Judges", "Police"],
    answer: "Diplomats"
  },
  {
    question: "High Commissioners represent countries in:",
    options: ["UN", "Commonwealth", "AU", "ECOWAS"],
    answer: "Commonwealth"
  },
  {
    question: "Non-Aligned Movement means:",
    options: ["Joining blocs", "Neutrality", "War", "Colonialism"],
    answer: "Neutrality"
  },
  {
    question: "AU stands for:",
    options: ["African Unity", "African Union", "All Union", "African Unit"],
    answer: "African Union"
  },
  {
    question: "ECOWAS promotes:",
    options: ["War", "Economic cooperation", "Colonialism", "Isolation"],
    answer: "Economic cooperation"
  },
  {
    question: "NEPAD focuses on:",
    options: ["War", "Development", "Colonialism", "Military"],
    answer: "Development"
  },
  {
    question: "Foreign policy is influenced by:",
    options: ["Weather", "National interest", "Culture only", "Media"],
    answer: "National interest"
  },
  {
    question: "Geography affects foreign policy because:",
    options: ["Location matters", "Population matters", "Religion matters", "Culture matters"],
    answer: "Location matters"
  },
  {
    question: "International law guides:",
    options: ["Local courts", "Relations between states", "Elections", "Media"],
    answer: "Relations between states"
  },
  {
    question: "Embassies protect:",
    options: ["Government only", "Citizens abroad", "Media", "Courts"],
    answer: "Citizens abroad"
  },
  {
    question: "An ambassador represents:",
    options: ["Media", "Country abroad", "Court", "Army"],
    answer: "Country abroad"
  },
  {
    question: "Diplomatic immunity means:",
    options: ["No punishment", "Protection from laws of host country", "Military protection", "Voting rights"],
    answer: "Protection from laws of host country"
  },
  {
    question: "A key aim of diplomacy is:",
    options: ["War", "Peaceful relations", "Conflict", "Colonisation"],
    answer: "Peaceful relations"
  },
  {
    question: "International organisations help to:",
    options: ["Promote war", "Enhance cooperation", "Colonise nations", "Control media"],
    answer: "Enhance cooperation"
  },
  {
    question: "UNO stands for:",
    options: ["United Nations Organisation", "Union of Nations", "Universal Nations", "United National Office"],
    answer: "United Nations Organisation"
  },
  {
    question: "The UN promotes:",
    options: ["War", "Peace and security", "Colonialism", "Military rule"],
    answer: "Peace and security"
  },
  {
    question: "The Commonwealth is made up of:",
    options: ["French colonies", "British former colonies", "African states only", "Military states"],
    answer: "British former colonies"
  },
  {
    question: "Foreign policy challenges include:",
    options: ["Stability", "Poverty", "Unity", "Peace"],
    answer: "Poverty"
  },
  {
    question: "One aim of Ghanaâ€™s foreign policy is:",
    options: ["Isolation", "Peaceful coexistence", "War", "Colonialism"],
    answer: "Peaceful coexistence"
  },
  {
    question: "A confederation is:",
    options: ["Strong central system", "Loose union of states", "Unitary state", "Military system"],
    answer: "Loose union of states"
  },
  {
    question: "A monarchy is a system ruled by:",
    options: ["President", "King or Queen", "Military", "Judges"],
    answer: "King or Queen"
  },
  {
    question: "Republican system involves:",
    options: ["Hereditary rule", "Elected leaders", "Military", "Colonial rule"],
    answer: "Elected leaders"
  },
  {
    question: "Checks and balances prevent:",
    options: ["Cooperation", "Abuse of power", "Participation", "Development"],
    answer: "Abuse of power"
  },
  {
    question: "Separation of powers ensures:",
    options: ["Unity of power", "Independence of arms", "Military rule", "Dictatorship"],
    answer: "Independence of arms"
  },
  {
    question: "Judicial review allows courts to:",
    options: ["Make laws", "Interpret laws", "Conduct elections", "Tax citizens"],
    answer: "Interpret laws"
  },
  {
    question: "Legislature is responsible for:",
    options: ["Executing laws", "Making laws", "Judging cases", "Conducting elections"],
    answer: "Making laws"
  },
  {
    question: "Executive implements:",
    options: ["Laws", "Judgments", "Elections", "Taxes"],
    answer: "Laws"
  },
  {
    question: "Judiciary handles:",
    options: ["Policy", "Disputes", "Elections", "Media"],
    answer: "Disputes"
  },
  {
    question: "Which of the following best describes sovereignty?",
    options: ["Power shared with others", "Supreme authority of the state", "Power of citizens", "Power of media"],
    answer: "Supreme authority of the state"
  },
  {
    question: "Internal sovereignty refers to:",
    options: ["Power over other states", "Authority within a state", "Military power", "Economic power"],
    answer: "Authority within a state"
  },
  {
    question: "External sovereignty means:",
    options: ["Independence from external control", "Control of citizens", "Military strength", "Economic growth"],
    answer: "Independence from external control"
  },
  {
    question: "Which concept relates to government by the few?",
    options: ["Democracy", "Oligarchy", "Monarchy", "Socialism"],
    answer: "Oligarchy"
  },
  {
    question: "Aristocracy is rule by:",
    options: ["Common people", "Nobles", "Military", "Judges"],
    answer: "Nobles"
  },
  {
    question: "Capitalism encourages:",
    options: ["State ownership", "Private ownership", "Military rule", "Collective farming"],
    answer: "Private ownership"
  },
  {
    question: "Socialism promotes:",
    options: ["Private ownership", "State ownership", "Military control", "Colonial rule"],
    answer: "State ownership"
  },
  {
    question: "Communism advocates:",
    options: ["Class system", "Classless society", "Private profit", "Democracy"],
    answer: "Classless society"
  },
  {
    question: "Rule of law ensures:",
    options: ["Leaders above law", "Equality before the law", "Military dominance", "Dictatorship"],
    answer: "Equality before the law"
  },
  {
    question: "Supremacy of the law means:",
    options: ["Law above all persons", "Leaders above law", "Military rule", "Party control"],
    answer: "Law above all persons"
  },
  {
    question: "Political participation includes:",
    options: ["Voting", "Sleeping", "Farming", "Trading"],
    answer: "Voting"
  },
  {
    question: "A unicameral legislature has:",
    options: ["One chamber", "Two chambers", "Multiple chambers", "None"],
    answer: "One chamber"
  },
  {
    question: "The Speaker of Parliament presides over:",
    options: ["Executive", "Legislature", "Judiciary", "Military"],
    answer: "Legislature"
  },
  {
    question: "One constraint of legislature is:",
    options: ["Expert knowledge", "Lack of expertise", "Strong funding", "Independence"],
    answer: "Lack of expertise"
  },
  {
    question: "Delegated legislation is made by:",
    options: ["Judges", "Bodies other than parliament", "Citizens", "Media"],
    answer: "Bodies other than parliament"
  },
  {
    question: "Bye-laws are made by:",
    options: ["Local authorities", "Judges", "Military", "Media"],
    answer: "Local authorities"
  },
  {
    question: "Executive instruments are:",
    options: ["Judicial laws", "Rules made by executive", "Media laws", "Custom laws"],
    answer: "Rules made by executive"
  },
  {
    question: "Cabinet is part of:",
    options: ["Judiciary", "Executive", "Legislature", "Media"],
    answer: "Executive"
  },
  {
    question: "The President is the head of:",
    options: ["Judiciary", "Executive", "Legislature", "Media"],
    answer: "Executive"
  },
  {
    question: "The judiciary interprets:",
    options: ["Policies", "Constitution", "Elections", "Taxes"],
    answer: "Constitution"
  },
  {
    question: "The Supreme Court is the:",
    options: ["Lowest court", "Highest court", "Military court", "Local court"],
    answer: "Highest court"
  },
  {
    question: "Judicial independence ensures:",
    options: ["Political control", "Freedom of judges", "Military rule", "Bias"],
    answer: "Freedom of judges"
  },
  {
    question: "Mode of recruitment helps ensure:",
    options: ["Corruption", "Judicial independence", "Bias", "Delay"],
    answer: "Judicial independence"
  },
  {
    question: "Checks and balances involve:",
    options: ["Control of one arm", "Mutual control among arms", "Military rule", "Dictatorship"],
    answer: "Mutual control among arms"
  },
  {
    question: "A presidential system features:",
    options: ["Fusion of powers", "Separation of powers", "Military rule", "Monarchy"],
    answer: "Separation of powers"
  },
  {
    question: "A parliamentary system features:",
    options: ["Strict separation", "Fusion of executive and legislature", "Military rule", "Dictatorship"],
    answer: "Fusion of executive and legislature"
  },
  {
    question: "One advantage of separation of powers is:",
    options: ["Tyranny", "Protection of liberty", "Delay", "Corruption"],
    answer: "Protection of liberty"
  },
  {
    question: "One disadvantage of separation of powers is:",
    options: ["Efficiency", "Delay in decision making", "Unity", "Participation"],
    answer: "Delay in decision making"
  },
  {
    question: "Centralisation leads to:",
    options: ["Local participation", "Quick decision making", "Weak authority", "Confusion"],
    answer: "Quick decision making"
  },
  {
    question: "Decentralisation reduces:",
    options: ["Participation", "Workload of central government", "Development", "Unity"],
    answer: "Workload of central government"
  },
  {
    question: "Political socialization is done by:",
    options: ["Courts", "Political parties", "Army", "Police"],
    answer: "Political parties"
  },
  {
    question: "Pressure groups differ from parties because they:",
    options: ["Seek power", "Do not seek power", "Contest elections", "Form government"],
    answer: "Do not seek power"
  },
  {
    question: "One criticism of pressure groups is:",
    options: ["Promote democracy", "Distort public opinion", "Encourage peace", "Support government"],
    answer: "Distort public opinion"
  },
  {
    question: "Public opinion may be influenced by:",
    options: ["Media", "Courts", "Army", "Police"],
    answer: "Media"
  },
  {
    question: "Media fairness requires:",
    options: ["Bias", "Balance", "Corruption", "Secrecy"],
    answer: "Balance"
  },
  {
    question: "Plurality system is also called:",
    options: ["Absolute majority", "Simple majority", "Proportional", "Run-off"],
    answer: "Simple majority"
  },
  {
    question: "Run-off election occurs when:",
    options: ["Winner is clear", "No candidate wins majority", "Election canceled", "Only one candidate"],
    answer: "No candidate wins majority"
  },
  {
    question: "Electoral register contains:",
    options: ["Judges", "Voters", "Soldiers", "Ministers"],
    answer: "Voters"
  },
  {
    question: "EMB demarcates:",
    options: ["Policies", "Constituencies", "Courts", "Cabinet"],
    answer: "Constituencies"
  },
  {
    question: "Centralised traditional systems are common among:",
    options: ["Tallensi", "Akans", "Nomads", "Farmers"],
    answer: "Akans"
  },
  {
    question: "Non-centralised systems lack:",
    options: ["Leaders", "Central authority", "People", "Culture"],
    answer: "Central authority"
  },
  {
    question: "Indirect rule succeeded because it:",
    options: ["Ignored chiefs", "Used existing structures", "Promoted war", "Removed leaders"],
    answer: "Used existing structures"
  },
  {
    question: "French policy of assimilation failed because:",
    options: ["Africans rejected culture", "It was unrealistic", "Too easy", "Too short"],
    answer: "It was unrealistic"
  },
  {
    question: "Nationalism was boosted by:",
    options: ["Peace", "World War II", "Colonial rule", "Media"],
    answer: "World War II"
  },
  {
    question: "The Coussey Committee led to:",
    options: ["Military rule", "Constitutional reforms", "War", "Colonialism"],
    answer: "Constitutional reforms"
  },
  {
    question: "Military regimes suspend:",
    options: ["Economy", "Constitution", "Culture", "Media"],
    answer: "Constitution"
  },
  {
    question: "Political instability affects:",
    options: ["Peace", "Governance", "Development", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "District Assemblies enact:",
    options: ["Acts", "Bye-laws", "Constitutions", "Policies"],
    answer: "Bye-laws"
  },
  {
    question: "Revenue for assemblies includes:",
    options: ["Taxes", "Rates", "Grants", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Civil service anonymity means:",
    options: ["Known publicly", "Not publicly identified", "Political", "Military"],
    answer: "Not publicly identified"
  },
  {
    question: "Public corporations operate under:",
    options: ["Private law", "Public law", "Military law", "Custom law"],
    answer: "Public law"
  },
  {
    question: "Privatisation reduces:",
    options: ["Efficiency", "Government burden", "Competition", "Profit"],
    answer: "Government burden"
  },
  {
    question: "Diplomacy avoids:",
    options: ["Peace", "War", "Cooperation", "Dialogue"],
    answer: "War"
  },
  {
    question: "Embassies issue:",
    options: ["Policies", "Visas", "Judgments", "Taxes"],
    answer: "Visas"
  },
  {
    question: "AU replaced:",
    options: ["ECOWAS", "OAU", "UN", "NAM"],
    answer: "OAU"
  },
  {
    question: "ECOWAS headquarters is in:",
    options: ["Ghana", "Nigeria", "France", "USA"],
    answer: "Nigeria"
  },
  {
    question: "Foreign policy promotes:",
    options: ["Isolation", "National interest", "War", "Colonialism"],
    answer: "National interest"
  },
  {
    question: "Which of the following best describes a constitution?",
    options: ["A set of religious laws", "Rules guiding the operation of a state", "Military decrees only", "Policies of political parties"],
    answer: "Rules guiding the operation of a state"
  },
  {
    question: "One major source of a constitution is:",
    options: ["Customs and conventions", "Markets", "Schools", "Churches"],
    answer: "Customs and conventions"
  },
  {
    question: "Which of the following is NOT a function of a constitution?",
    options: ["Establishing organs of government", "Defining powers of institutions", "Promoting dictatorship", "Ensuring order in governance"],
    answer: "Promoting dictatorship"
  },
  {
    question: "A flexible constitution is one that:",
    options: ["Cannot be changed", "Is easy to amend", "Is written only", "Is controlled by the military"],
    answer: "Is easy to amend"
  },
  {
    question: "Which of the following is a type of constitution?",
    options: ["Rigid", "Circular", "Economic", "Traditional"],
    answer: "Rigid"
  },
  {
    question: "A referendum is used in constitution-making to:",
    options: ["Elect leaders", "Approve the constitution", "Remove judges", "Create laws"],
    answer: "Approve the constitution"
  },
  {
    question: "The Consultative Assembly is involved in:",
    options: ["Military training", "Drafting the constitution", "Tax collection", "Judicial review"],
    answer: "Drafting the constitution"
  },
  {
    question: "Which stage comes first in constitution-making?",
    options: ["Referendum", "Committee of experts", "Assent", "Election"],
    answer: "Committee of experts"
  },
  {
    question: "A written constitution is one that:",
    options: ["Is documented in a single text", "Is based only on tradition", "Cannot be changed", "Is controlled by parliament"],
    answer: "Is documented in a single text"
  },
  {
    question: "A political party is best defined as:",
    options: ["A group seeking political power", "A religious organization", "A military group", "A trade union"],
    answer: "A group seeking political power"
  },
  {
    question: "One major aim of political parties is to:",
    options: ["Control the judiciary", "Win elections", "Control the army", "Manage schools"],
    answer: "Win elections"
  },
  {
    question: "Political socialization is a function of:",
    options: ["Political parties", "Courts", "Police", "Army"],
    answer: "Political parties"
  },
  {
    question: "Which party system allows only one party?",
    options: ["Multi-party", "Two-party", "One-party", "Federal"],
    answer: "One-party"
  },
  {
    question: "A major criticism of political parties is:",
    options: ["They promote unity always", "They cause division", "They reduce corruption", "They prevent elections"],
    answer: "They cause division"
  },
  {
    question: "Lobbying is a technique used by:",
    options: ["Judges", "Pressure groups", "Police", "Military"],
    answer: "Pressure groups"
  },
  {
    question: "One function of pressure groups is to:",
    options: ["Educate government", "Suspend constitution", "Conduct elections", "Control judiciary"],
    answer: "Educate government"
  },
  {
    question: "The media refers to:",
    options: ["Means of communication", "Political parties", "Military forces", "Courts"],
    answer: "Means of communication"
  },
  {
    question: "Which is a principle of the media?",
    options: ["Accuracy", "Bias", "Secrecy", "Corruption"],
    answer: "Accuracy"
  },
  {
    question: "A by-election occurs when:",
    options: ["A seat becomes vacant", "A constitution is changed", "A president is elected", "A law is passed"],
    answer: "A seat becomes vacant"
  },
  {
    question: "Which is a limitation of elections?",
    options: ["Voters lack full information", "They promote democracy", "They ensure accountability", "They give legitimacy"],
    answer: "Voters lack full information"
  },
  {
    question: "The Electoral Commission is responsible for:",
    options: ["Conducting elections", "Making laws", "Judging cases", "Running schools"],
    answer: "Conducting elections"
  },
  {
    question: "One feature of an Electoral Management Body is:",
    options: ["Neutrality", "Bias", "Corruption", "Control"],
    answer: "Neutrality"
  },
  {
    question: "One function of EMB is:",
    options: ["Register voters", "Make laws", "Control courts", "Command army"],
    answer: "Register voters"
  },
  {
    question: "The Akan political system is:",
    options: ["Centralized", "Non-centralized", "Military", "Democratic"],
    answer: "Centralized"
  },
  {
    question: "Tallensi political system is:",
    options: ["Non-centralized", "Centralized", "Federal", "Unitary"],
    answer: "Non-centralized"
  },
  {
    question: "A criticism of chiefs is:",
    options: ["Corruption", "Neutrality", "Impartiality", "Honesty"],
    answer: "Corruption"
  },
  {
    question: "Assimilation policy was used by:",
    options: ["French", "British", "Dutch", "German"],
    answer: "French"
  },
  {
    question: "One cause of nationalism was:",
    options: ["Racial discrimination", "Economic growth", "Peace", "Unity"],
    answer: "Racial discrimination"
  },
  {
    question: "UGCC was a:",
    options: ["Political movement", "Military group", "Religious group", "Trade union"],
    answer: "Political movement"
  },
  {
    question: "The Watson Commission was set up after:",
    options: ["1948 riots", "Independence", "Military coup", "Election"],
    answer: "1948 riots"
  },
  {
    question: "Positive Action was led by:",
    options: ["Kwame Nkrumah", "Busia", "Rawlings", "Danquah"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The Clifford Constitution was introduced in:",
    options: ["1916", "1925", "1946", "1951"],
    answer: "1916"
  },
  {
    question: "One feature of the Clifford Constitution was:",
    options: ["Introduction of elective principle", "Universal adult suffrage", "Republican system", "Federal system"],
    answer: "Introduction of elective principle"
  },
  {
    question: "The Guggisberg Constitution was introduced in:",
    options: ["1925", "1946", "1951", "1954"],
    answer: "1925"
  },
  {
    question: "A major feature of the Burns Constitution was:",
    options: ["African majority in legislature", "Military rule", "Federal system", "Presidential system"],
    answer: "African majority in legislature"
  },
  {
    question: "The 1951 Constitution is also known as:",
    options: ["Arden-Clarke Constitution", "Burns Constitution", "Clifford Constitution", "Republican Constitution"],
    answer: "Arden-Clarke Constitution"
  },
  {
    question: "The 1954 Constitution introduced:",
    options: ["Full internal self-government", "Military rule", "One-party system", "Colonial rule"],
    answer: "Full internal self-government"
  },
  {
    question: "One achievement of pre-independence constitutions was:",
    options: ["Introduction of representation", "Military takeover", "End of elections", "Abolition of laws"],
    answer: "Introduction of representation"
  },
  {
    question: "One failure of pre-independence constitutions was:",
    options: ["Limited African participation", "Too much democracy", "Strong judiciary", "Full independence"],
    answer: "Limited African participation"
  },
  {
    question: "Ghana gained independence in:",
    options: ["1957", "1960", "1969", "1979"],
    answer: "1957"
  },
  {
    question: "The 1960 Constitution established Ghana as a:",
    options: ["Republic", "Colony", "Protectorate", "Military state"],
    answer: "Republic"
  },
  {
    question: "The 1969 Constitution marked the beginning of:",
    options: ["Second Republic", "First Republic", "Third Republic", "Fourth Republic"],
    answer: "Second Republic"
  },
  {
    question: "The 1979 Constitution led to the:",
    options: ["Third Republic", "Second Republic", "Fourth Republic", "Military regime"],
    answer: "Third Republic"
  },
  {
    question: "Military intervention refers to:",
    options: ["Seizure of power by force", "Election of leaders", "Passing of laws", "Judicial review"],
    answer: "Seizure of power by force"
  },
  {
    question: "Political instability is caused by:",
    options: ["Frequent changes in government", "Peaceful elections", "Strong judiciary", "Stable economy"],
    answer: "Frequent changes in government"
  },
  {
    question: "One cause of military intervention is:",
    options: ["Economic mismanagement", "Free elections", "Strong institutions", "Judicial independence"],
    answer: "Economic mismanagement"
  },
  {
    question: "The NLC ruled Ghana after:",
    options: ["1966 coup", "1957 independence", "1979 election", "1992 constitution"],
    answer: "1966 coup"
  },
  {
    question: "PNDC was a:",
    options: ["Military government", "Political party", "Judicial body", "Pressure group"],
    answer: "Military government"
  },
  {
    question: "One disadvantage of military rule is:",
    options: ["Suppression of freedoms", "Promotion of democracy", "Free elections", "Judicial independence"],
    answer: "Suppression of freedoms"
  },
  {
    question: "The 1992 Constitution came into force in:",
    options: ["1993", "1992", "1990", "1995"],
    answer: "1993"
  },
  {
    question: "The 1992 Constitution established Ghana as a:",
    options: ["Fourth Republic", "Third Republic", "Military state", "Colony"],
    answer: "Fourth Republic"
  },
  {
    question: "One feature of the 1992 Constitution is:",
    options: ["Unicameral legislature", "Bicameral legislature", "Military rule", "Monarchy"],
    answer: "Unicameral legislature"
  },
  {
    question: "The executive under the 1992 Constitution is:",
    options: ["Monocephalous", "Dual", "Military", "Ceremonial"],
    answer: "Monocephalous"
  },
  {
    question: "The judiciary under the 1992 Constitution is:",
    options: ["Independent", "Controlled by executive", "Controlled by legislature", "Weak"],
    answer: "Independent"
  },
  {
    question: "Local government refers to:",
    options: ["Administration at the local level", "National government", "International organization", "Military rule"],
    answer: "Administration at the local level"
  },
  {
    question: "A major source of revenue for District Assemblies is:",
    options: ["Common Fund", "Military budget", "Foreign aid only", "Loans only"],
    answer: "Common Fund"
  },
  {
    question: "One problem of local government is:",
    options: ["Inadequate funds", "Too much autonomy", "Too many laws", "Strong institutions"],
    answer: "Inadequate funds"
  },
  {
    question: "Local governments are controlled by:",
    options: ["Executive", "legislature and judiciary", "Military only", "Police only", "Citizens only"],
    answer: "Executive, legislature and judiciary"
  },
  {
    question: "The Public Services Commission is responsible for:",
    options: ["Appointments and promotions", "Making laws", "Conducting elections", "Judging cases"],
    answer: "Appointments and promotions"
  },
  {
    question: "One function of civil service is:",
    options: ["Policy formulation", "Election supervision", "Military control", "Judicial review"],
    answer: "Policy formulation"
  },
  {
    question: "Regulatory agencies are responsible for:",
    options: ["Monitoring services", "Making laws", "Conducting elections", "Judging cases"],
    answer: "Monitoring services"
  },
  {
    question: "An example of regulatory agency in Ghana is:",
    options: ["Public Utilities Regulatory Commission", "Parliament", "Cabinet", "Police"],
    answer: "Public Utilities Regulatory Commission"
  },
  {
    question: "One feature of public corporations is:",
    options: ["State ownership", "Private ownership only", "Religious control", "Military control"],
    answer: "State ownership"
  },
  {
    question: "Public corporations provide:",
    options: ["Essential services", "Military services", "Religious services", "Political campaigns"],
    answer: "Essential services"
  },
  {
    question: "Privatisation refers to:",
    options: ["Transfer to private ownership", "Government ownership", "Military takeover", "Judicial control"],
    answer: "Transfer to private ownership"
  },
  {
    question: "One advantage of privatisation is:",
    options: ["Efficiency", "Corruption", "Inefficiency", "Loss of jobs"],
    answer: "Efficiency"
  },
  {
    question: "One disadvantage of privatisation is:",
    options: ["Loss of jobs", "Efficiency", "Profit increase", "Better management"],
    answer: "Loss of jobs"
  },
  {
    question: "Public corporations are controlled by:",
    options: ["Executive", "legislature", "judiciary", "Military only", "Police only", "Citizens only"],
    answer: "Executive, legislature, judiciary"
  },
  {
    question: "One function of public corporations is:",
    options: ["Provide employment", "Conduct elections", "Make laws", "Judge cases"],
    answer: "Provide employment"
  },
  {
    question: "The civil service is part of the:",
    options: ["Executive", "Legislature", "Judiciary", "Military"],
    answer: "Executive"
  },
  {
    question: "The main aim of the United Nations is to:",
    options: ["Maintain world peace", "Promote military rule", "Control trade unions", "Colonize nations"],
    answer: "Maintain world peace"
  },
  {
    question: "The headquarters of the United Nations is in:",
    options: ["New York", "Geneva", "London", "Paris"],
    answer: "New York"
  },
  {
    question: "Which of the following is a principal organ of the UN?",
    options: ["Security Council", "IMF", "World Bank", "NATO"],
    answer: "Security Council"
  },
  {
    question: "The main role of the UN Security Council is:",
    options: ["Maintain international peace and security", "Provide education", "Manage public corporations", "Control elections"],
    answer: "Maintain international peace and security"
  },
  {
    question: "The African Union replaced:",
    options: ["OAU", "ECOWAS", "AU", "UNESCO"],
    answer: "OAU"
  },
  {
    question: "One objective of the African Union is to:",
    options: ["Promote unity and solidarity", "Promote military coups", "Control colonies", "Limit democracy"],
    answer: "Promote unity and solidarity"
  },
  {
    question: "ECOWAS stands for:",
    options: ["Economic Community of West African States", "Economic Council of West African States", "European Community of West African States", "Educational Council of West African States"],
    answer: "Economic Community of West African States"
  },
  {
    question: "One function of ECOWAS is to:",
    options: ["Promote economic integration", "Control military coups", "Establish colonies", "Monitor elections only"],
    answer: "Promote economic integration"
  },
  {
    question: "Ghana was a founding member of:",
    options: ["ECOWAS", "EU", "NATO", "ASEAN"],
    answer: "ECOWAS"
  },
  {
    question: "One principle of diplomacy is:",
    options: ["Peaceful negotiation", "Military intervention", "Judicial enforcement", "Political propaganda"],
    answer: "Peaceful negotiation"
  },
  {
    question: "The Vienna Convention is related to:",
    options: ["Diplomatic relations", "Civil service", "Public corporations", "Local government"],
    answer: "Diplomatic relations"
  },
  {
    question: "Ghanaâ€™s foreign policy emphasizes:",
    options: ["Non-alignment", "Colonialism", "Military expansion", "Isolationism"],
    answer: "Non-alignment"
  },
  {
    question: "One aim of Ghanaâ€™s foreign policy is to:",
    options: ["Promote peace and development", "Interfere in other countries", "Establish colonies", "Control UN"],
    answer: "Promote peace and development"
  },
  {
    question: "Ghanaâ€™s first President, Kwame Nkrumah, advocated:",
    options: ["Pan-Africanism", "Colonialism", "Isolationism", "Military rule"],
    answer: "Pan-Africanism"
  },
  {
    question: "Peacekeeping missions are organized by:",
    options: ["United Nations", "ECOWAS only", "AU only", "Individual countries"],
    answer: "United Nations"
  },
  {
    question: "The main aim of ECOWAS intervention in conflicts is to:",
    options: ["Restore peace", "Take over government", "Colonize countries", "Exploit resources"],
    answer: "Restore peace"
  },
  {
    question: "Ghana has contributed troops to:",
    options: ["UN peacekeeping missions", "AU military only", "Local elections", "Public corporations"],
    answer: "UN peacekeeping missions"
  },
  {
    question: "The AU was established to replace:",
    options: ["OAU", "UN", "ECOWAS", "IMF"],
    answer: "OAU"
  },
  {
    question: "One principle of international law is:",
    options: ["Sovereign equality of states", "Military dominance", "Colonial expansion", "Isolationism"],
    answer: "Sovereign equality of states"
  },
  {
    question: "Diplomats represent their countries in:",
    options: ["Foreign countries", "Local governments", "Military camps", "Schools"],
    answer: "Foreign countries"
  },
  {
    question: "Ghanaâ€™s embassies abroad are part of:",
    options: ["Diplomatic missions", "Local government", "Public corporations", "Civil service"],
    answer: "Diplomatic missions"
  },
  {
    question: "One responsibility of diplomats is to:",
    options: ["Promote their countryâ€™s interests", "Control military coups", "Judge disputes", "Collect taxes"],
    answer: "Promote their countryâ€™s interests"
  },
  {
    question: "Ghana is a member of which UN specialized agency?",
    options: ["UNESCO", "OPEC", "NATO", "ASEAN"],
    answer: "UNESCO"
  },
  {
    question: "One achievement of Ghanaâ€™s foreign policy is:",
    options: ["Maintaining friendly relations", "Colonial expansion", "Military occupation", "Economic isolation"],
    answer: "Maintaining friendly relations"
  },
  {
    question: "Ghanaâ€™s non-alignment policy means:",
    options: ["Not siding with superpowers", "Joining military alliances", "Colonizing other nations", "Controlling UN"],
    answer: "Not siding with superpowers"
  },
  {
    question: "One challenge of Ghanaâ€™s foreign policy is:",
    options: ["Limited resources", "Too much peace", "Overpopulation", "Military dominance"],
    answer: "Limited resources"
  },
  {
    question: "The UN General Assembly consists of:",
    options: ["All member states", "Security Council only", "IMF members only", "EU members only"],
    answer: "All member states"
  },
  {
    question: "The ECOWAS flag symbolizes:",
    options: ["Unity of West Africa", "Military rule", "Colonialism", "Isolationism"],
    answer: "Unity of West Africa"
  },
  {
    question: "The AU headquarters is in:",
    options: ["Addis Ababa", "Accra", "Abuja", "Nairobi"],
    answer: "Addis Ababa"
  },
  {
    question: "The main aim of UN peacekeeping is to:",
    options: ["Prevent conflict escalation", "Exploit resources", "Establish colonies", "Conduct elections"],
    answer: "Prevent conflict escalation"
  },
  {
    question: "International organizations are established to:",
    options: ["Promote cooperation among states", "Control colonies", "Impose military rule", "Judge internal disputes only"],
    answer: "Promote cooperation among states"
  },
  {
    question: "Diplomacy ensures:",
    options: ["Peaceful resolution of disputes", "Military coups", "Colonial expansion", "Economic isolation"],
    answer: "Peaceful resolution of disputes"
  },
  {
    question: "The main objective of Ghanaâ€™s foreign policy is to:",
    options: ["Protect national interests", "Colonize other countries", "Join military alliances", "Control UN"],
    answer: "Protect national interests"
  },
  {
    question: "Ghana contributes to international conferences to:",
    options: ["Exchange ideas and promote cooperation", "Overthrow governments", "Control resources", "Expand militarily"],
    answer: "Exchange ideas and promote cooperation"
  },
  {
    question: "Ghanaâ€™s foreign policy encourages:",
    options: ["Peaceful coexistence", "Military intervention", "Colonialism", "Isolation"],
    answer: "Peaceful coexistence"
  },
  {
    question: "International law is made to:",
    options: ["Regulate relations among nations", "Control domestic policies", "Run public corporations", "Control elections"],
    answer: "Regulate relations among nations"
  },
  {
    question: "Ghana participates in AU programs to:",
    options: ["Promote development and security", "Colonize other countries", "Overthrow governments", "Control UN"],
    answer: "Promote development and security"
  },
  {
    question: "The UN Charter was signed in:",
    options: ["1945", "1950", "1960", "1975"],
    answer: "1945"
  },
  {
    question: "Ghanaâ€™s diplomacy is mainly guided by:",
    options: ["National interest and international cooperation", "Military conquest", "Colonial expansion", "Isolationism"],
    answer: "National interest and international cooperation"
  },
  {
    question: "Ghanaâ€™s representation in international organizations ensures:",
    options: ["Participation in global decisions", "Military control", "Colonial expansion", "Isolation"],
    answer: "Participation in global decisions"
  },
  {
    question: "One function of ECOWAS Court of Justice is to:",
    options: ["Ensure compliance with human rights", "Conduct elections only", "Control military", "Manage public corporations"],
    answer: "Ensure compliance with human rights"
  },
  {
    question: "Ghanaâ€™s foreign policy is consistent with:",
    options: ["United Nations principles", "Colonial expansion", "Military coups", "Isolationism"],
    answer: "United Nations principles"
  },
  {
    question: "Human rights are best described as:",
    options: ["Basic freedoms entitled to every person", "Privileges given by government", "Only rights for citizens", "Rights for military personnel only"],
    answer: "Basic freedoms entitled to every person"
  },
  {
    question: "The Universal Declaration of Human Rights was adopted in:",
    options: ["1948", "1960", "1975", "1980"],
    answer: "1948"
  },
  {
    question: "Which of the following is a civil right?",
    options: ["Freedom of speech", "Voting in elections", "Paying taxes", "Serving in the army"],
    answer: "Freedom of speech"
  },
  {
    question: "A person who enjoys rights must also accept:",
    options: ["Responsibilities", "Wealth", "Immunity", "Privileges"],
    answer: "Responsibilities"
  },
  {
    question: "Which of these is a political right?",
    options: ["Voting in elections", "Access to education", "Healthcare", "Freedom of movement"],
    answer: "Voting in elections"
  },
  {
    question: "The Ghana Human Rights Commission protects:",
    options: ["Human rights of all people in Ghana", "Only government officials", "Foreign investors", "Military personnel only"],
    answer: "Human rights of all people in Ghana"
  },
  {
    question: "Which right allows citizens to join political parties?",
    options: ["Freedom of association", "Right to education", "Right to healthcare", "Freedom of religion"],
    answer: "Freedom of association"
  },
  {
    question: "Obeying traffic rules is an example of a:",
    options: ["Civic responsibility", "Human right", "Political right", "Economic right"],
    answer: "Civic responsibility"
  },
  {
    question: "One way citizens can promote national unity is by:",
    options: ["Respecting diversity", "Ignoring laws", "Avoiding elections", "Favoring only one group"],
    answer: "Respecting diversity"
  },
  {
    question: "Childrenâ€™s rights are protected under:",
    options: ["Convention on the Rights of the Child", "ICJ", "ECOWAS treaties", "UNESCO rules"],
    answer: "Convention on the Rights of the Child"
  },
  {
    question: "The right to freedom of religion means:",
    options: ["Choosing and practicing any religion", "Being forced to follow a religion", "Prohibiting othersâ€™ religion", "Ignoring all religions"],
    answer: "Choosing and practicing any religion"
  },
  {
    question: "A responsible citizen contributes to:",
    options: ["Development of society", "Military coups", "Colonial expansion", "Political instability"],
    answer: "Development of society"
  },
  {
    question: "Which of these is a fundamental human right?",
    options: ["Right to life", "Right to drive a car", "Right to free meals", "Right to luxury goods"],
    answer: "Right to life"
  },
  {
    question: "The Ghanaian Constitution guarantees:",
    options: ["Human rights and freedoms", "Only economic privileges", "Military dominance", "Colonial powers"],
    answer: "Human rights and freedoms"
  },
  {
    question: "One responsibility of citizens is to:",
    options: ["Obey laws of the land", "Overthrow government", "Ignore traffic rules", "Engage in corruption"],
    answer: "Obey laws of the land"
  },
  {
    question: "Which right protects individuals from torture?",
    options: ["Right to human dignity", "Right to vote", "Right to education", "Right to healthcare"],
    answer: "Right to human dignity"
  },
  {
    question: "Freedom of expression allows citizens to:",
    options: ["Express opinions without fear", "Attack others physically", "Ignore public safety", "Take property unlawfully"],
    answer: "Express opinions without fear"
  },
  {
    question: "Participation in elections is a:",
    options: ["Civic responsibility", "Human right only", "Political party duty", "Government duty"],
    answer: "Civic responsibility"
  },
  {
    question: "Respecting other peopleâ€™s property is a sign of:",
    options: ["Responsible citizenship", "Economic right", "Political dominance", "Colonial mindset"],
    answer: "Responsible citizenship"
  },
  {
    question: "The National Commission for Civic Education (NCCE) educates citizens on:",
    options: ["Rights and responsibilities", "Military strategies", "Colonial history only", "Election fraud"],
    answer: "Rights and responsibilities"
  },
  {
    question: "The right to equality means:",
    options: ["All persons are treated fairly under the law", "Only citizens are protected", "Some groups are superior", "Freedom to break laws"],
    answer: "All persons are treated fairly under the law"
  },
  {
    question: "Voting in a democratic election is:",
    options: ["A citizenâ€™s duty", "Illegal in Ghana", "Optional human right", "Only for military personnel"],
    answer: "A citizenâ€™s duty"
  },
  {
    question: "Civic responsibilities help to:",
    options: ["Maintain law and order", "Encourage corruption", "Promote conflict", "Limit education"],
    answer: "Maintain law and order"
  },
  {
    question: "Freedom of assembly allows citizens to:",
    options: ["Gather peacefully", "Attack government officials", "Take over property", "Disrupt public services"],
    answer: "Gather peacefully"
  },
  {
    question: "A responsible citizen pays:",
    options: ["Taxes", "Bribes", "Illegal fees", "None of the above"],
    answer: "Taxes"
  },
  {
    question: "The right to personal liberty protects against:",
    options: ["Unlawful detention", "Legal imprisonment", "Voluntary arrest", "Judicial proceedings"],
    answer: "Unlawful detention"
  },
  {
    question: "Participation in community service is:",
    options: ["Civic responsibility", "Military duty", "Political right", "Economic right"],
    answer: "Civic responsibility"
  },
  {
    question: "Education on civic duties is provided to promote:",
    options: ["Responsible citizenship", "Colonial mindset", "Military obedience", "Isolationism"],
    answer: "Responsible citizenship"
  },
  {
    question: "One example of a human right violation is:",
    options: ["Torture and unlawful detention", "Voting in elections", "Community service", "Paying taxes"],
    answer: "Torture and unlawful detention"
  },
  {
    question: "Freedom of movement allows citizens to:",
    options: ["Travel within the country freely", "Attack other communities", "Ignore laws", "Colonize territories"],
    answer: "Travel within the country freely"
  },
  {
    question: "Respecting cultural diversity ensures:",
    options: ["Peaceful coexistence", "Conflict and discrimination", "Colonial control", "Political instability"],
    answer: "Peaceful coexistence"
  },
  {
    question: "A good citizen contributes to:",
    options: ["National development", "Political chaos", "Military coups", "Colonial expansion"],
    answer: "National development"
  },
  {
    question: "Reporting crimes to authorities is an example of:",
    options: ["Civic duty", "Human right only", "Political right only", "Military duty"],
    answer: "Civic duty"
  },
  {
    question: "The right to privacy protects against:",
    options: ["Unlawful intrusion into personal life", "Voting in elections", "Community service", "Paying taxes"],
    answer: "Unlawful intrusion into personal life"
  },
  {
    question: "Freedom of press is important for:",
    options: ["Informing citizens and holding leaders accountable", "Encouraging corruption", "Military control", "Colonial influence"],
    answer: "Informing citizens and holding leaders accountable"
  },
  {
    question: "The NCCE is under the supervision of:",
    options: ["Government of Ghana", "UNESCO", "ECOWAS", "AU"],
    answer: "Government of Ghana"
  },
  {
    question: "Respect for human rights prevents:",
    options: ["Abuse and discrimination", "Development", "Community service", "Elections"],
    answer: "Abuse and discrimination"
  },
  {
    question: "Civic education teaches citizens to:",
    options: ["Participate responsibly in society", "Overthrow governments", "Ignore laws", "Avoid paying taxes"],
    answer: "Participate responsibly in society"
  },
  {
    question: "Freedom from slavery is a:",
    options: ["Human right", "Civic duty", "Political responsibility", "Military rule"],
    answer: "Human right"
  },
  {
    question: "A citizenâ€™s responsibility during elections is to:",
    options: ["Vote responsibly", "Intimidate voters", "Avoid registration", "Ignore candidates"],
    answer: "Vote responsibly"
  },
  {
    question: "Civic responsibilities ensure:",
    options: ["Social harmony", "Conflict and disorder", "Colonial control", "Military dominance"],
    answer: "Social harmony"
  },
  {
    question: "Freedom from discrimination ensures:",
    options: ["Equal treatment under the law", "Privilege to few groups", "Colonial power", "Military dominance"],
    answer: "Equal treatment under the law"
  },
  {
    question: "Responsible citizenship encourages:",
    options: ["Peace", "development", "and cooperation", "Corruption and chaos", "Colonialism", "Isolationism"],
    answer: "Peace, development, and cooperation"
  },
  {
    question: "Reporting corruption is an example of:",
    options: ["Civic responsibility", "Political right only", "Military duty", "Economic privilege"],
    answer: "Civic responsibility"
  },
  {
    question: "Ghana practices which type of political system?",
    options: ["Democracy", "Monarchy", "Dictatorship", "Communism"],
    answer: "Democracy"
  },
  {
    question: "The highest law of Ghana is:",
    options: ["The Constitution", "Acts of Parliament", "Traditional laws", "Executive orders"],
    answer: "The Constitution"
  },
  {
    question: "The body responsible for organizing elections in Ghana is:",
    options: ["Electoral Commission", "Parliament", "NCCE", "Supreme Court"],
    answer: "Electoral Commission"
  },
  {
    question: "Universal adult suffrage means:",
    options: ["All adult citizens can vote", "Only males can vote", "Only property owners can vote", "Only government officials can vote"],
    answer: "All adult citizens can vote"
  },
  {
    question: "The term of office for the President of Ghana is:",
    options: ["4 years", "5 years", "6 years", "3 years"],
    answer: "4 years"
  },
  {
    question: "Ghanaâ€™s political parties must:",
    options: ["Be registered with the Electoral Commission", "Be approved by the President", "Be led by traditional leaders", "Be funded only by foreigners"],
    answer: "Be registered with the Electoral Commission"
  },
  {
    question: "First past the post system means:",
    options: ["Candidate with most votes wins", "Majority needs over 50%", "Votes are proportional", "Elected by Electoral College"],
    answer: "Candidate with most votes wins"
  },
  {
    question: "The main opposition party in Ghana is:",
    options: ["NDC", "NPP", "CPP", "PNC"],
    answer: "NDC"
  },
  {
    question: "Voting in Ghana is:",
    options: ["Secret", "Open", "Compulsory for all", "Only for chiefs"],
    answer: "Secret"
  },
  {
    question: "A political party is:",
    options: ["An organized group seeking to win elections", "A social club", "A religious organization", "A military unit"],
    answer: "An organized group seeking to win elections"
  },
  {
    question: "Democracy allows citizens to:",
    options: ["Participate in governance", "Overthrow governments", "Ignore laws", "Rule by force"],
    answer: "Participate in governance"
  },
  {
    question: "A two-party system in Ghana involves:",
    options: ["NPP and NDC", "NPP and CPP", "NDC and PNC", "All parties equally"],
    answer: "NPP and NDC"
  },
  {
    question: "The minimum voting age in Ghana is:",
    options: ["18 years", "16 years", "21 years", "20 years"],
    answer: "18 years"
  },
  {
    question: "Political campaigns aim to:",
    options: ["Educate and persuade voters", "Force people to vote", "Cancel elections", "Promote violence"],
    answer: "Educate and persuade voters"
  },
  {
    question: "The National Democratic Congress (NDC) was founded in:",
    options: ["1992", "2000", "1981", "1960"],
    answer: "1992"
  },
  {
    question: "The New Patriotic Party (NPP) is considered:",
    options: ["Center-right", "Left-wing", "Communist", "Dictatorial"],
    answer: "Center-right"
  },
  {
    question: "Elections in Ghana are held every:",
    options: ["4 years", "3 years", "5 years", "6 years"],
    answer: "4 years"
  },
  {
    question: "Voting is an example of:",
    options: ["Political right", "Human right only", "Civic duty", "Military duty"],
    answer: "Political right"
  },
  {
    question: "A representative democracy means:",
    options: ["People elect representatives to make decisions", "People make all laws directly", "Government rules by force", "Only chiefs govern"],
    answer: "People elect representatives to make decisions"
  },
  {
    question: "Political parties in Ghana help to:",
    options: ["Mobilize voters and contest elections", "Control traditional councils", "Run religious institutions", "Manage schools"],
    answer: "Mobilize voters and contest elections"
  },
  {
    question: "The Electoral Commission is independent to ensure:",
    options: ["Free and fair elections", "Military dominance", "Government control", "Traditional rule"],
    answer: "Free and fair elections"
  },
  {
    question: "A coalition government is formed when:",
    options: ["No party has a majority", "President dissolves Parliament", "Opposition is banned", "Military intervenes"],
    answer: "No party has a majority"
  },
  {
    question: "Spoilt votes are:",
    options: ["Invalid ballots", "Winning votes", "Votes for president only", "Votes counted twice"],
    answer: "Invalid ballots"
  },
  {
    question: "Referendum is used to:",
    options: ["Seek public approval on an issue", "Elect the President", "Appoint judges", "Form political parties"],
    answer: "Seek public approval on an issue"
  },
  {
    question: "The first President of the Fourth Republic of Ghana was:",
    options: ["Jerry John Rawlings", "Kwame Nkrumah", "John Mahama", "John Atta Mills"],
    answer: "Jerry John Rawlings"
  },
  {
    question: "Political tolerance means:",
    options: ["Respecting differing opinions", "Forcing others to accept your views", "Ignoring elections", "Overthrowing opposition"],
    answer: "Respecting differing opinions"
  },
  {
    question: "An independent candidate is:",
    options: ["Not affiliated with any political party", "Leader of a party", "Government official", "Chief of a town"],
    answer: "Not affiliated with any political party"
  },
  {
    question: "Manifestos are:",
    options: ["Party promises and policies", "Election ballots", "Government laws", "Supreme Court rulings"],
    answer: "Party promises and policies"
  },
  {
    question: "Elections in Ghana are monitored to:",
    options: ["Ensure transparency and fairness", "Disqualify citizens", "Promote military rule", "Control chiefs"],
    answer: "Ensure transparency and fairness"
  },
  {
    question: "Voter registration ensures:",
    options: ["Eligible citizens can vote", "Only politicians vote", "Election results are cancelled", "Military dominance"],
    answer: "Eligible citizens can vote"
  },
  {
    question: "Campaign finance laws are meant to:",
    options: ["Regulate funding of elections", "Ban all political parties", "Allow unlimited spending", "Control traditional rulers"],
    answer: "Regulate funding of elections"
  },
  {
    question: "Political education helps citizens to:",
    options: ["Make informed choices", "Ignore democracy", "Follow chiefs blindly", "Accept dictatorship"],
    answer: "Make informed choices"
  },
  {
    question: "A hung parliament occurs when:",
    options: ["No party has a clear majority", "All MPs agree", "President controls Parliament", "Opposition is banned"],
    answer: "No party has a clear majority"
  },
  {
    question: "The main goal of political parties is to:",
    options: ["Win elections and govern", "Control traditional lands", "Promote religion", "Manage schools"],
    answer: "Win elections and govern"
  },
  {
    question: "Democracy in Ghana is strengthened by:",
    options: ["Respect for law and active participation", "Military coups", "Ignoring elections", "Colonial practices"],
    answer: "Respect for law and active participation"
  },
  {
    question: "Term limits for President prevent:",
    options: ["Unlimited stay in office", "Voting rights", "Formation of parties", "Civic education"],
    answer: "Unlimited stay in office"
  },
  {
    question: "A multiparty system allows:",
    options: ["Diverse political choices", "Single-party dominance", "Military control", "Colonial administration"],
    answer: "Diverse political choices"
  },
  {
    question: "Political apathy means:",
    options: ["Lack of interest in politics", "Active participation in elections", "Joining a party", "Running for office"],
    answer: "Lack of interest in politics"
  },
  {
    question: "The role of opposition parties is to:",
    options: ["Provide alternative policies and check government", "Control traditional councils", "Manage schools", "Suppress citizens"],
    answer: "Provide alternative policies and check government"
  },
  {
    question: "Ghanaâ€™s democracy is characterized by:",
    options: ["Regular elections and rule of law", "Military rule", "Colonial administration", "One-party system"],
    answer: "Regular elections and rule of law"
  },
  {
    question: "Political debates help voters to:",
    options: ["Compare candidates and policies", "Ignore elections", "Support coups", "Avoid voting"],
    answer: "Compare candidates and policies"
  },
  {
    question: "A fair election requires:",
    options: ["Transparency", "impartiality", "and accountability", "Military oversight", "Party dominance", "Suppression of votes"],
    answer: "Transparency, impartiality, and accountability"
  },
  {
    question: "Election petitions are handled by:",
    options: ["Supreme Court of Ghana", "Electoral Commission", "NCCE", "Local chiefs"],
    answer: "Supreme Court of Ghana"
  },
  {
    question: "Voter education ensures:",
    options: ["Informed decision-making by citizens", "Military dominance", "Election manipulation", "Party-only knowledge"],
    answer: "Informed decision-making by citizens"
  },
  {
    question: "Campaign rallies aim to:",
    options: ["Mobilize supporters and present policies", "Force people to vote", "Ban opposition", "Cancel elections"],
    answer: "Mobilize supporters and present policies"
  },
  {
    question: "Which of the following is a key function of local government in Ghana?",
    options: ["Conducting national elections", "Making international treaties", "Implementation of government policies", "Printing currency"],
    answer: "Implementation of government policies"
  },
  {
    question: "The District Assemblies Common Fund is primarily a source of revenue for:",
    options: ["Central Government", "Local Governments", "Political Parties", "Public Corporations"],
    answer: "Local Governments"
  },
  {
    question: "Decentralization in governance aims to:",
    options: ["Concentrate power at the national level", "Promote local participation in governance", "Eliminate regional administrations", "Centralize decision making"],
    answer: "Promote local participation in governance"
  },
  {
    question: "Which of the following is a feature of the Ghanaian Civil Service?",
    options: ["Partisan appointments", "Permanence and neutrality", "Direct control by political parties", "Short-term tenure"],
    answer: "Permanence and neutrality"
  },
  {
    question: "Public corporations in Ghana are usually established by:",
    options: ["Private investors", "Act of Parliament", "Traditional authorities", "NGOs"],
    answer: "Act of Parliament"
  },
  {
    question: "Privatization of state-owned enterprises in Ghana is intended to:",
    options: ["Increase government control", "Generate competition and efficiency", "Reduce employment opportunities", "Eliminate taxation"],
    answer: "Generate competition and efficiency"
  },
  {
    question: "The 1992 Constitution of Ghana ensures the independence of:",
    options: ["Political parties", "The media only", "The Judiciary", "District Assemblies only"],
    answer: "The Judiciary"
  },
  {
    question: "Which of the following is NOT a source of revenue for local governments?",
    options: ["Rates and taxes", "Grants and loans", "Printing of money", "District Assemblies Common Fund"],
    answer: "Printing of money"
  },
  {
    question: "Checks and balances in Ghana are designed to:",
    options: ["Allow unlimited power for the executive", "Ensure the three arms of government oversee each other", "Eliminate the legislature", "Centralize authority in the presidency"],
    answer: "Ensure the three arms of government oversee each other"
  },
  {
    question: "Which body supervises the conduct of free and fair elections in Ghana?",
    options: ["Civil Service Commission", "Electoral Commission", "Judicial Service", "Public Corporations Board"],
    answer: "Electoral Commission"
  },
  {
    question: "Fundamental human rights in Ghana include all EXCEPT:",
    options: ["Right to vote", "Freedom of speech", "Right to unlimited wealth", "Right to education"],
    answer: "Right to unlimited wealth"
  },
  {
    question: "The role of NGOs in governance includes:",
    options: ["Enforcing laws", "Providing checks on government policies", "Amending the Constitution", "Running political parties"],
    answer: "Providing checks on government policies"
  },
  {
    question: "Transparency in governance is important because it:",
    options: ["Prevents corruption and promotes accountability", "Eliminates elections", "Reduces citizen participation", "Concentrates power in the executive"],
    answer: "Prevents corruption and promotes accountability"
  },
  {
    question: "Voter education primarily helps to:",
    options: ["Increase literacy rates", "Enable citizens to make informed electoral choices", "Reduce participation in elections", "Centralize decision-making"],
    answer: "Enable citizens to make informed electoral choices"
  },
  {
    question: "Which of the following is a challenge facing local governments in Ghana?",
    options: ["Overabundance of qualified personnel", "Excessive funding", "Political interference", "Complete autonomy from central government"],
    answer: "Political interference"
  },
  {
    question: "The principle of separation of powers ensures that:",
    options: ["Legislature controls the judiciary", "Each arm of government operates independently", "The executive dominates all decisions", "Judiciary writes laws"],
    answer: "Each arm of government operates independently"
  },
  {
    question: "Civil society organizations contribute to governance by:",
    options: ["Suppressing elections", "Educating citizens and influencing policy", "Controlling military operations", "Running the economy"],
    answer: "Educating citizens and influencing policy"
  },
  {
    question: "The Ghana Civil Service is under the control of:",
    options: ["Traditional authorities", "Executive arm of government", "NGOs", "Political parties only"],
    answer: "Executive arm of government"
  },
  {
    question: "Which of the following is a function of the Public Services Commission?",
    options: ["Appointing judges", "Overseeing public officer appointments and promotions", "Making laws", "Controlling media content"],
    answer: "Overseeing public officer appointments and promotions"
  },
  {
    question: "One of the constraints of the Electoral Commission is:",
    options: ["Unlimited funding", "Political interference", "No need for voter registration", "Controlling all local governments"],
    answer: "Political interference"
  },
  {
    question: "A key disadvantage of extreme decentralization is:",
    options: ["Improved local participation", "Breeding corruption and uneven development", "Better supervision", "Efficient policy implementation"],
    answer: "Breeding corruption and uneven development"
  },
  {
    question: "Media in governance plays a role in:",
    options: ["Suppressing freedom of speech", "Educating and informing the public", "Centralizing power", "Eliminating political parties"],
    answer: "Educating and informing the public"
  },
  {
    question: "Which of the following describes a commercial public corporation?",
    options: ["Operates for profit and provides essential services", "Operates only for social welfare", "Managed by NGOs", "Owned entirely by private individuals"],
    answer: "Operates for profit and provides essential services"
  },
  {
    question: "Directive Principles of State Policy in Ghana are intended to:",
    options: ["Guide government policy and governance", "Control the judiciary", "Eliminate local governments", "Direct elections"],
    answer: "Guide government policy and governance"
  },
  {
    question: "One of the roles of the District Assembly is to:",
    options: ["Monitor military operations", "Provide opportunities for grassroots political participation", "Appoint the President", "Write national laws"],
    answer: "Provide opportunities for grassroots political participation"
  },
  {
    question: "The term 'regulatory agencies' refers to institutions that:",
    options: ["Enforce standards", "monitor quality", "and ensure efficiency", "Run elections only", "Control traditional authorities", "Supervise political parties"],
    answer: "Enforce standards, monitor quality, and ensure efficiency"
  },
  {
    question: "Which of the following is a limitation of elections in Ghana?",
    options: ["Empowers citizens", "Electorates may lack detailed knowledge of candidates", "Provides legitimacy to government", "Encourages accountability"],
    answer: "Electorates may lack detailed knowledge of candidates"
  },
  {
    question: "Decentralized state structure means:",
    options: ["Decision-making authority is located in the central government", "Power is devolved to local government agencies", "All policies are dictated by the executive", "There is no local participation"],
    answer: "Power is devolved to local government agencies"
  },
  {
    question: "The Ghana Public Corporations are controlled through all EXCEPT:",
    options: ["Legislative oversight", "Judicial control", "Executive management", "Traditional authorities"],
    answer: "Traditional authorities"
  },
  {
    question: "Civic responsibility of citizens includes:",
    options: ["Paying taxes and obeying laws", "Ignoring government policies", "Interfering with elections", "Avoiding participation in public affairs"],
    answer: "Paying taxes and obeying laws"
  },
  {
    question: "One function of the media in democratic governance is to:",
    options: ["Educate citizens on political issues", "Suppress voter education", "Control the judiciary", "Privatize public corporations"],
    answer: "Educate citizens on political issues"
  },
  {
    question: "One of the challenges facing public corporations is:",
    options: ["Overfunding", "Political interference and inadequate personnel", "Unlimited autonomy", "Control by NGOs only"],
    answer: "Political interference and inadequate personnel"
  },
  {
    question: "Fundamental rights in Ghana include:",
    options: ["Freedom of speech", "religion", "and assembly", "Unlimited wealth and property", "Control of government funds", "Power over judiciary"],
    answer: "Freedom of speech, religion, and assembly"
  },
  {
    question: "The main purpose of decentralization is to:",
    options: ["Bring government closer to the people", "Concentrate decision-making power", "Eliminate District Assemblies", "Control local resources centrally"],
    answer: "Bring government closer to the people"
  },
  {
    question: "The Electoral Management Body ensures:",
    options: ["Free and fair elections", "Appointing judges", "Monitoring public corporations", "Managing civil service promotions"],
    answer: "Free and fair elections"
  },
  {
    question: "The Ghana Civil Service is characterized by:",
    options: ["Neutrality", "permanence", "and anonymity", "Partisan leadership", "Short-term appointments", "Control by NGOs"],
    answer: "Neutrality, permanence, and anonymity"
  },
  {
    question: "Local Government revenue sources include all EXCEPT:",
    options: ["District Assemblies Common Fund", "Rates and grants", "Loans from central government", "Printing of currency"],
    answer: "Printing of currency"
  },
  {
    question: "One of the roles of NGOs in governance is to:",
    options: ["Influence government policy and educate citizens", "Run political parties", "Print currency", "Oversee elections"],
    answer: "Influence government policy and educate citizens"
  },
  {
    question: "One function of the judiciary is to:",
    options: ["Adjudicate disputes and interpret laws", "Pass laws", "Manage local assemblies", "Run public corporations"],
    answer: "Adjudicate disputes and interpret laws"
  },
  {
    question: "The principle of separation of powers in Ghana ensures:",
    options: ["No organ dominates the others", "Executive controls judiciary", "Legislature controls local governments", "Military controls elections"],
    answer: "No organ dominates the others"
  },
  {
    question: "A key problem of local governments in Ghana is:",
    options: ["Political interference and inadequate funding", "Too much autonomy", "Unlimited revenue", "Excessive local participation"],
    answer: "Political interference and inadequate funding"
  },
  {
    question: "Public opinion in governance helps to:",
    options: ["Guide government actions and policy decisions", "Suppress citizen involvement", "Control elections", "Privatize corporations"],
    answer: "Guide government actions and policy decisions"
  },
  {
    question: "The advantage of decentralization is:",
    options: ["Promotes local participation and reduces central workload", "Eliminates local government", "Centralizes power", "Reduces citizen participation"],
    answer: "Promotes local participation and reduces central workload"
  },
  {
    question: "The Ghanaian Electoral Commission is:",
    options: ["An independent body that manages elections", "Part of the executive", "Controlled by political parties", "Managed by NGOs"],
    answer: "An independent body that manages elections"
  },
  {
    question: "Directive principles in governance are meant to:",
    options: ["Guide policy formulation and implementation", "Control courts", "Privatize local governments", "Regulate political parties"],
    answer: "Guide policy formulation and implementation"
  },
];

export default governmentQuestions;