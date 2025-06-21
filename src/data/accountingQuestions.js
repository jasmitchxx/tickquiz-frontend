const accountingQuestions = [
  {
    question: "A business bought goods worth GHS2,000 and recorded it in the Purchases Day Book. What is the correct double entry?",
    options: ["", "Debit Purchases, Credit Cash",
      "Debit Sales, Credit Purchases",
      "Debit Purchases, Credit Creditors",
      "Debit Purchases, Credit Capital"],
answer: "Debit Purchases, Credit Creditors"
  },
  {
    question: "Calculate the VAT payable: Sales = GHS12,000, VAT rate = 15%",
    options: ["", "GHS1,200", "GHS1,800", "GHS1,500", "GHS2,100"],
answer: "GHS1,800"
  },
  {
    question: "In which book of original entry is the return of goods by a customer recorded?",
    options: ["", "Sales Day Book", "Purchases Return Book", "Sales Return Book", "Journal"],
answer: "Sales Return Book"
  },
  {
    question: "The total column in the Petty Cash Book is GHS500. Postage GHS150, Stationery GHS200, Transport GHS150. What is the imprest?",
    options: ["", "GHS500", "GHS200", "GHS150", "GHS300"],
answer: "GHS500"
  },
  {
    question: "If VAT on purchases is GHS600 and VAT on sales is GHS900, what is the VAT payable?",
    options: ["", "GHS1,500", "GHS300", "GHS600", "GHS900"],
answer: "GHS300"
  },
  {
    question: "What is the double entry for VAT charged on sales of GHS5,000 at 15%?",
    options: ["", "Debit VAT Control GHS750, Credit Sales GHS5,750",
      "Debit Debtors GHS5,750; Credit Sales GHS5,000; Credit VAT Control GHS750",
      "Debit Sales GHS5,000, Credit VAT Control GHS750",
      "Credit VAT GHS5,000; Debit Sales GHS750"],
answer: "Debit Debtors GHS5,750; Credit Sales GHS5,000; Credit VAT Control GHS750"
  },
  {
    question: "Which of the following is not a Book of Original Entry?",
    options: ["", "Journal", "Ledger", "Sales Day Book", "Cash Book"],
answer: "Ledger"
  },
  {
    question: "If a Petty Cashier is given an imprest of GHS300 and spends GHS280 during the month, how much is reimbursed?",
    options: ["", "GHS20", "GHS280", "GHS300", "GHS0"],
answer: "GHS280"
  },
  {
    question: "Which of the following is a function of the Cash Book?",
    options: ["", "To record depreciation", "To show outstanding expenses", "To record all cash and bank transactions", "To record credit sales"],
answer: "To record all cash and bank transactions"
  },
  {
    question: "Prepare VAT control account from the following:\nVAT on Purchases = GHS1,200, VAT on Sales = GHS1,700",
    options: ["", "Balance c/d GHS500 (credit)", "Balance b/d GHS500 (debit)", "Balance c/d GHS1,700 (debit)", "No balance"],
answer: "Balance c/d GHS500 (credit)"
  },
  {
    question: "What is the VAT amount on a purchase of GHS2,500 if the VAT rate is 12.5%?",
    options: ["", "GHS325", "GHS300", "GHS250", "GHS312.50"],
answer: "GHS312.50"
  },
  {
    question: "A Petty Cashier recorded: Transport GHS100, Postage GHS80, and Refreshments GHS60. Total expenditure is:",
    options: ["", "GHS180", "GHS200", "GHS240", "GHS150"],
answer: "GHS240"
  },
  {
    question: "Which of the following will be recorded in the Purchases Day Book?",
    options: ["", "Goods bought on credit", "Cash sales", "Asset purchase", "Returns to suppliers"],
answer: "Goods bought on credit"
  },
  {
    question: "Which of the following accounts is credited when VAT is charged on sales?",
    options: ["", "Cash", "Sales", "VAT Control", "Debtors"],
answer: "VAT Control"
  },
  {
    question: "The Sales Day Book is used to record:",
    options: ["", "All cash sales", "Credit purchases", "Credit sales", "Returns inwards"],
answer: "Credit sales"
  },
  {
    question: "A business sells goods at GHS4,600 including VAT at 15%. What is the net sales value?",
    options: ["", "GHS4,000", "GHS4,300", "GHS4,600", "GHS3,800"],
answer: "GHS4,000"
  },
  {
    question: "From the following determine the closing petty cash balance:\nOpening balance: GHS400, Total expenses: GHS360",
    options: ["", "GHS40", "GHS360", "GHS400", "GHS760"],
answer: "GHS40"
  },
  {
    question: "A cash sale of GHS2,000 including VAT at 20% is made. What amount is recorded as VAT?",
    options: ["", "GHS333.33", "GHS400", "GHS250", "GHS166.67"],
answer: "GHS333.33"
  },
  {
    question: "What is the function of the Journal in bookkeeping?",
    options: ["", "To record credit purchases only",
      "To record regular cash transactions",
      "To record transactions not captured in other books",
      "To reconcile the bank statement"],
answer: "To record transactions not captured in other books"
  },
  {
    question: "A business purchased inventory worth GHS3,000 on credit. What is the entry in the Purchases Day Book?",
    options: ["", "GHS3,000 in debit column", "GHS3,000 in credit column", "No entry", "GHS3,000 in VAT column"],
answer: "GHS3,000 in debit column"
  },
  {
    question: "Which of the following best defines accounting?",
    options: ["", "The science of recording historical events",
      "A process of preparing employee salaries",
      "The systematic process of identifying, measuring, recording, and communicating financial information",
      "The study of consumer behavior"],
answer: "The systematic process of identifying, measuring, recording, and communicating financial information"
  },
  {
    question: "Who among the following is considered an internal user of accounting information?",
    options: ["", "Bank", "Supplier", "Manager", "Customer"],
answer: "Manager"
  },
  {
    question: "Which of the following is NOT a qualitative characteristic of accounting information?",
    options: ["", "Relevance", "Comparability", "Delay", "Understandability"],
answer: "Delay"
  },
  {
    question: "Which career path involves checking financial records for accuracy and compliance?",
    options: ["", "Auditor", "Cashier", "Receptionist", "Marketer"],
answer: "Auditor"
  },
  {
    question: "Which of the following is NOT a step in the accounting process?",
    options: ["", "Identifying transactions", "Summarizing data", "Cooking the books", "Communicating results"],
answer: "Cooking the books"
  },
  // --- Calculations start here (70% of the batch) ---
  {
    question: "Given: Assets = GHS25,000, Liabilities = GHS8,000. Calculate the Owner's Equity.",
    options: ["", "GHS17,000", "GHS33,000", "GHS8,000", "GHS25,000"],
answer: "GHS17,000"
  },
  {
    question: "If Capital = GHS40,000 and Liabilities = GHS10,000, what is the total Assets?",
    options: ["", "GHS30,000", "GHS50,000", "GHS60,000", "GHS40,000"],
answer: "GHS50,000"
  },
  {
    question: "A business started with GHS60,000 capital. It bought goods for GHS20,000 on credit and paid GHS5,000 cash for expenses. What is the closing capital?",
    options: ["", "GHS60,000", "GHS35,000", "GHS55,000", "GHS60,000"],
answer: "GHS55,000"
  },
  {
    question: "A transaction increases assets by GHS10,000 and also increases liabilities. What is the impact on equity?",
    options: ["", "Increase by GHS10,000", "Decrease by GHS10,000", "No change", "Cannot be determined"],
answer: "No change"
  },
  {
    question: "Given the following transactions, calculate the balance of the cash account:\n\nOpening Cash: GHS5,000\nReceived from customers: GHS12,000\nPaid rent: GHS3,000\nBought equipment: GHS4,000",
    options: ["", "GHS10,000", "GHS11,000", "GHS9,000", "GHS8,000"],
answer: "GHS10,000"
  },
  {
    question: "A business had the following:\nCapital: GHS15,000\nBank Loan: GHS5,000\nAssets: ?\nFind the missing asset value.",
    options: ["", "GHS10,000", "GHS20,000", "GHS15,000", "GHS25,000"],
answer: "GHS20,000"
  },
  {
    question: "If revenue = GHS22,000 and expenses = GHS14,000, what is the profit?",
    options: ["", "GHS36,000", "GHS8,000", "GHS14,000", "GHS22,000"],
answer: "GHS8,000"
  },
  {
    question: "Which of these affects both sides of the balance sheet equally?",
    options: ["", "Cash payment to creditor", "Cash purchase of equipment", "Depreciation", "Owner withdraws cash"],
answer: "Cash purchase of equipment"
  },
  {
    question: "A business bought goods worth GHS9,000 and paid half by cash and the rest on credit. How does it affect the accounting equation?",
    options: ["", "Assets increase by 9,000; Cash decreases  by 4,500; Creditors increase by 4,500",
      "Assets decreases  by 4,500; Liabilities increase by 4,500",
      "Assets increase by 9,000; Capital increase by 4,500",
      "No effect"],
answer: "Assets increase by 9,000; Cash decreases  by 4,500; Creditors increase by 4,500"
  },
  {
    question: "Which of the following is NOT a book of original entry?",
    options: ["", "Sales Journal", "Purchase Day Book", "Ledger", "Returns Inward Journal"],
answer: "Ledger"
  },
  {
    question: "Which book is used to record cash and bank transactions?",
    options: ["", "Sales Day Book", "Petty Cash Book", "Journal Proper", "Cash Book"],
answer: "Cash Book"
  },
  {
    question: "The petty cash book is used for recording:",
    options: ["", "Credit purchases", "All sales", "Minor payments", "Capital income"],
answer: "Minor payments"
  },
  {
    question: "Which division of the ledger is used for recording transactions with creditors?",
    options: ["", "Sales Ledger", "Purchases Ledger", "Nominal Ledger", "General Ledger"],
answer: "Purchases Ledger"
  },
  // --- Calculation & Working-Based Questions ---
  {
    question: "Given: Sales on credit GHS12,000, Cash sales GHS3,000, Sales returns GHS1,500. What amount should be posted to the Sales Ledger?",
    options: ["", "GHS13,500", "GHS12,000", "GHS10,500", "GHS14,000"],
answer: "GHS10,500"
  },
  {
    question: "Opening petty cash float is GHS200. During the week, the following were spent: Postage GHS25, Stationery GHS30, Transport GHS20. What is the balance at the end of the week?",
    options: ["", "GHS125", "GHS150", "GHS100", "GHS200"],
answer: "GHS125"
  },
  {
    question: "A business purchased goods worth GHS2,000 on credit. Where would this transaction be recorded first?",
    options: ["", "Purchase Journal", "Cash Book", "Sales Ledger", "General Ledger"],
answer: "Purchase Journal"
  },
  {
    question: "A cash discount of GHS300 was allowed on payment of GHS7,200. What was the original amount due?",
    options: ["", "GHS7,500", "GHS7,200", "GHS6,900", "GHS7,300"],
answer: "GHS7,500"
  },
  {
    question: "Total cash payments from the cash book amounted to GHS15,000. Cash payments include: Salaries GHS8,000, Rent GHS3,000, Electricity GHS2,000, Sundry GHS2,000. What is the amount spent on overheads?",
    options: ["", "GHS5,000", "GHS7,000", "GHS10,000", "GHS15,000"],
answer: "GHS7,000"
  },
  {
    question: "If purchases = GHS25,000 and purchase returns = GHS2,000, what is the net purchases?",
    options: ["", "GHS27,000", "GHS25,000", "GHS23,000", "GHS2,000"],
answer: "GHS23,000"
  },
  {
    question: "VAT rate is 15%. If the selling price including VAT is GHS4,600, calculate the VAT amount.",
    options: ["", "GHS600", "GHS690", "GHS400", "GHS575"],
answer: "GHS600"
  },
  {
    question: "A trader sold goods at GHS2,300 excluding VAT. Calculate the VAT payable at 15%.",
    options: ["", "GHS345", "GHS300", "GHS230", "GHS345.50"],
answer: "GHS345"
  },
  {
    question: "If VAT collected = GHS1,200 and input VAT paid = GHS950, what is the VAT payable to the tax authority?",
    options: ["", "GHS1,200", "GHS250", "GHS950", "GHS2,150"],
answer: "GHS250"
  },
  {
    question: "Calculate the selling price including 15% VAT on goods worth GHS3,000.",
    options: ["", "GHS3,450", "GHS3,000", "GHS3,300", "GHS4,000"],
answer: "GHS3,450"
  },
  {
    question: "Which of the following is NOT a characteristic of VAT?",
    options: ["", "Regressive", "Multi-stage", "Consumption-based", "Indirect"],
answer: "Regressive"
  },
  {
    question: "Which accounting concept requires that expenses are matched with the revenue they help to generate?",
    options: ["", "Going Concern", "Accrual", "Consistency", "Prudence"],
answer: "Accrual"
  },
  {
    question: "The concept that assumes a business will continue to operate into the foreseeable future is called:",
    options: ["", "Materiality", "Going Concern", "Consistency", "Entity"],
answer: "Going Concern"
  },
  {
    question: "Which accounting principle ensures that financial statements are prepared in a similar manner every year?",
    options: ["", "Consistency", "Entity", "Duality", "Money Measurement"],
answer: "Consistency"
  },
  {
    question: "A transaction is recorded only if it can be measured in monetary terms. This is based on which concept?",
    options: ["", "Accrual", "Entity", "Money Measurement", "Realisation"],
answer: "Money Measurement"
  },
  {
    question: "A business has the following balances: Capital GHS20,000, Drawings GHS2,000, Net profit GHS5,000. What is the closing capital?",
    options: ["", "GHS23,000", "GHS25,000", "GHS27,000", "GHS30,000"],
answer: "GHS23,000"
  },
  {
    question: "From the Trial Balance: Sales GHS60,000, Purchases GHS35,000, Closing Stock GHS10,000. Calculate Gross Profit.",
    options: ["", "GHS25,000", "GHS35,000", "GHS15,000", "GHS40,000"],
answer: "GHS35,000"
  },
  {
    question: "A business has Rent expense GHS1,200 prepaid. How should this be treated in the Final Accounts?",
    options: ["", "Deduct from Rent Expense in P&L, add to Current Assets", "Add to Rent in P&L", "Ignore it", "Show as liability"],
answer: "Deduct from Rent Expense in P&L, add to Current Assets"
  },
  {
    question: "Calculate Net Profit if Gross Profit is GHS45,000 and Operating Expenses are GHS20,000.",
    options: ["", "GHS25,000", "GHS65,000", "GHS45,000", "GHS15,000"],
answer: "GHS25,000"
  },
  {
    question: "A Trial Balance shows: Debtors GHS10,000, Creditors GHS6,000, Sales GHS50,000, Purchases GHS30,000, Expenses GHS8,000, Closing Stock GHS12,000. What is the Net Profit?",
    options: ["", "GHS14,000", "GHS20,000", "GHS18,000", "GHS24,000"],
answer: "GHS24,000"
  },
  {
    question: "Opening capital = GHS10,000, Additional capital = GHS5,000, Net loss = GHS2,000, Drawings = GHS3,000. Compute the closing capital.",
    options: ["", "GHS10,000", "GHS12,000", "GHS13,000", "GHS14,000"],
answer: "GHS10,000"
  },
  {
    question: "If Closing Stock is GHS8,500 and is not included in the Trial Balance, how is it treated in Final Accounts?",
    options: ["", "P&L: Credit, Balance Sheet: Current Asset", "P&L: Debit, Balance Sheet: Current Asset", "Only Balance Sheet", "Only P&L"],
answer: "P&L: Credit, Balance Sheet: Current Asset"
  },
  {
    question: "From the Trial Balance: Rent income GHS4,000, Accrued income GHS500. What is the total Rent Income in the P&L?",
    options: ["", "GHS4,500", "GHS3,500", "GHS4,000", "GHS500"],
answer: "GHS4,500"
  },
  {
    question: "Which one of these is an example of a revenue expense?",
    options: ["", "Office Rent", "Building Purchase", "Equipment Purchase", "Vehicle Purchase"],
answer: "Office Rent"
  },
  {
    question: "What is the purpose of preparing Final Accounts?",
    options: ["", "To determine tax rates", "To assess customer satisfaction", "To ascertain profit/loss and financial position", "To calculate capital gains"],
answer: "To ascertain profit/loss and financial position"
  },
  {
    question: "Trial Balance: Sales GHS80,000, Opening Stock GHS10,000, Purchases GHS50,000, Closing Stock GHS15,000. What is Gross Profit?",
    options: ["", "GHS35,000", "GHS25,000", "GHS40,000", "GHS45,000"],
answer: "GHS35,000"
  },
  {
    question: "A firm purchased equipment for GHS12,000. It depreciates at 10% per annum using the straight-line method. What is the annual depreciation charge?",
    options: ["", "GHS1,200", "GHS1,000", "GHS2,000", "GHS1,500"],
answer: "GHS1,200"
  },
  {
    question: "What is the book value of an asset purchased at GHS10,000 after 3 years of 20% straight-line depreciation?",
    options: ["", "GHS4,000", "GHS6,000", "GHS8,000", "GHS2,000"],
answer: "GHS4,000"
  },
  {
    question: "A machine costing GHS15,000 is depreciated at 25% per annum on reducing balance. What is the depreciation for year 1?",
    options: ["", "GHS3,750", "GHS3,000", "GHS2,500", "GHS5,000"],
answer: "GHS3,750"
  },
  {
    question: "Provision for doubtful debts is GHS500. Debtors amount to GHS10,000. What is the Net Realisable Value of Debtors?",
    options: ["", "GHS9,500", "GHS10,500", "GHS10,000", "GHS500"],
answer: "GHS9,500"
  },
  {
    question: "What is the journal entry to create a provision for doubtful debts of GHS300?",
    options: ["", "Debit Bad Debts, Credit Provision for Doubtful Debts",
      "Debit Provision for Doubtful Debts, Credit Debtors",
      "Debit P&L, Credit Provision for Doubtful Debts",
      "Debit Debtors, Credit P&L"],
answer: "Debit P&L, Credit Provision for Doubtful Debts"
  },
  {
    question: "An old debt of GHS700 was written off. What is the correct journal entry?",
    options: ["", "Debit Bad Debts, Credit Debtors",
      "Debit Debtors, Credit Bad Debts",
      "Debit Provision for Bad Debts, Credit Debtors",
      "Debit P&L, Credit Debtors"],
answer: "Debit Bad Debts, Credit Debtors"
  },
  {
    question: "A provision for bad debts is to be increased from GHS400 to GHS600. What amount is charged to Profit and Loss?",
    options: ["", "GHS200", "GHS400", "GHS600", "GHS1,000"],
answer: "GHS200"
  },
  {
    question: "Depreciation is provided to account for:",
    options: ["", "Market value changes", "Inflation", "Wear and tear and obsolescence", "Increase in asset value"],
answer: "Wear and tear and obsolescence"
  },
  {
    question: "Which of the following is **not** a cause of depreciation?",
    options: ["", "Obsolescence", "Usage", "Maintenance", "Passage of time"],
answer: "Maintenance"
  },
  {
    question: "Provision for depreciation is shown on the balance sheet as:",
    options: ["", "Current liability",
      "Current asset",
      "Deduction from asset",
      "Addition to liabilities"],
answer: "Deduction from asset"
  },
  {
    question: "If Provision for Doubtful Debts is overestimated in previous year, it should be:",
    options: ["", "Credited to P&L", "Debited to P&L", "Added to Expenses", "Written off completely"],
answer: "Credited to P&L"
  },
  {
    question: "If Provision for Depreciation is GHS6,000 and the asset cost is GHS20,000, what is the book value?",
    options: ["", "GHS14,000", "GHS16,000", "GHS26,000", "GHS6,000"],
answer: "GHS14,000"
  },
  {
    question: "What type of account is Provision for Bad Debts?",
    options: ["", "Asset", "Liability", "Expense", "Contra asset"],
answer: "Contra asset"
  },
  {
    question: "Depreciation charged to profit and loss is:",
    options: ["", "Non-cash expense", "Capital expense", "Operating income", "Liability"],
answer: "Non-cash expense"
  },
  {
    question: "If depreciation is undercharged in previous years, the correction involves:",
    options: ["", "Adjusting retained earnings", "Increasing net assets", "Reversing it", "Charging extra in current year"],
answer: "Charging extra in current year"
  },
  {
    question: "An error was discovered: Rent of GHS300 was debited to Equipment. What type of error is this?",
    options: ["", "Error of Omission", "Error of Commission", "Error of Principle", "Compensating Error"],
answer: "Error of Principle"
  },
  {
    question: "A credit sale of GHS500 was entered in the books as GHS50. What is the correction entry?",
    options: ["", "Dr Sales GHS450, Cr Debtors GHS450",
      "Dr Debtors GHS450, Cr Sales GHS450",
      "Dr Sales GHS50, Cr Debtors GHS500",
      "Dr Cash GHS500, Cr Sales GHS450"],
answer: "Dr Debtors GHS450, Cr Sales GHS450"
  },
  {
    question: "Trial Balance failed to agree by GHS320, which was posted to a Suspense Account. Later, a discount received of GHS320 was omitted. What is the correcting entry?",
    options: ["", "Dr Suspense GHS320, Cr Discount Received GHS320",
      "Dr Discount Received GHS320, Cr Suspense GHS320",
      "Dr Suspense GHS160, Cr Discount Allowed GHS160",
      "Dr P&L GHS320, Cr Suspense GHS320"],
answer: "Dr Suspense GHS320, Cr Discount Received GHS320"
  },
  {
    question: "A GHS400 cash sale was recorded in the Purchases Day Book. Which account is wrongly debited?",
    options: ["", "Sales Account", "Purchases Account", "Cash Account", "Capital Account"],
answer: "Purchases Account"
  },
  {
    question: "What kind of error will cause the Trial Balance not to agree?",
    options: ["", "Error of Principle",
      "Error of Omission",
      "Error of Commission",
      "Single-sided error"],
answer: "Single-sided error"
  },
  {
    question: "Correct the following: Wages of GHS250 were debited to Salaries.",
    options: ["", "Dr Wages GHS250, Cr Salaries GHS250",
      "Dr Salaries GHS250, Cr Wages GHS250",
      "Dr P&L GHS250, Cr Wages GHS250",                                                     
      "Dr Salaries GHS125, Cr Wages GHS125"],  
answer: "Dr Wages GHS250, Cr Salaries GHS250"
  },
  {
    question: "Error: Furniture purchased for GHS2,000 was posted to Purchases. What is the correcting entry?",
    options: ["", "Dr Furniture GHS2,000, Cr Purchases GHS2,000",
      "Dr Purchases GHS2,000, Cr Furniture GHS2,000",
      "Dr Sales GHS2,000, Cr Furniture GHS2,000",
      "Dr Furniture GHS1,000, Cr Purchases GHS1,000"],
answer: "Dr Furniture GHS2,000, Cr Purchases GHS2,000"
  },
  {
    question: "The Suspense Account had a debit balance of GHS500. An entry to correct undercast rent expense of GHS500 is:",
    options: ["", "Dr Rent GHS500, Cr Suspense GHS500",
      "Dr Suspense GHS500, Cr Rent GHS500",
      "Dr P&L GHS500, Cr Suspense GHS500",
      "Dr Suspense GHS250, Cr Rent GHS250"],
answer: "Dr Rent GHS500, Cr Suspense GHS500"
  },
  {
    question: "Correcting entry for cash received from Kofi GHS600 entered in Kwame's account:",
    options: ["", "Dr Kwame GHS600, Cr Kofi GHS600",
      "Dr Suspense GHS600, Cr Cash GHS600",
      "Dr Cash GHS600, Cr Kwame GHS600",
      "Dr Kofi GHS600, Cr Kwame GHS600"],
answer: "Dr Kofi GHS600, Cr Kwame GHS600"
  },
  {
    question: "If the corrected profit is GHS12,000 and errors totaling GHS2,000 overstatement were identified, what was the original reported profit?",
    options: ["", "GHS14,000", "GHS10,000", "GHS12,000", "GHS8,000"],
answer: "GHS10,000"
  },
  {
    question: "Which of the following errors does **not** affect the Trial Balance?",
    options: ["", "Error of Commission", "Single entry error", "Reversal of entries", "Compensating Error"],
answer: "Compensating Error"
  },
  {
    question: "A suspense account is opened when:",
    options: ["", "Errors are not discovered",
      "Trial Balance agrees",
      "Accounts are balanced",
      "Financial year ends"],
answer: "Errors are not discovered"
  },
  {
    question: "An expense of GHS1,200 was recorded twice. What is the correction entry?",
    options: ["", "Dr Suspense GHS1,200, Cr Expense GHS1,200",
      "Dr Expense GHS1,200, Cr Suspense GHS1,200",
      "Dr P&L GHS1,200, Cr Expense GHS1,200",
      "Dr Expense GHS600, Cr Suspense GHS600"],
answer: "Dr Suspense GHS1,200, Cr Expense GHS1,200"
  },
  {
    question: "Sales of GHS900 were recorded as GHS990. What is the correcting journal?",
    options: ["", "Dr Sales GHS90, Cr Suspense GHS90",
      "Dr Suspense GHS90, Cr Sales GHS90",
      "Dr Sales GHS990, Cr Suspense GHS990",
      "Dr Debtors GHS90, Cr Sales GHS90"],
answer: "Dr Suspense GHS90, Cr Sales GHS90"
  },
  {
    question: "What is the effect of an error that increases both assets and liabilities equally?",
    options: ["", "Trial Balance will disagree",
      "Profit is overstated",
      "Balance sheet remains balanced",
      "Capital reduces"],
answer: "Balance sheet remains balanced"
  },
  {
    question: "What is the main purpose of preparing a Bank Reconciliation Statement (BRS)?",
    options: ["", "To check the accuracy of the cash book balance",
      "To reconcile the cash book balance with the bank statement balance",
      "To verify bank charges",
      "To detect fraud"],
answer: "To reconcile the cash book balance with the bank statement balance"
  },
  {
    question: "If the bank statement shows a balance of GHS10,000 and unpresented cheques total GHS1,500, what is the adjusted bank balance?",
    options: ["", "GHS8,500", "GHS11,500", "GHS10,000", "GHS1,500"],
answer: "GHS8,500"
  },
  {
    question: "The cash book shows a balance of GHS5,200. Cheques totaling GHS800 issued have not yet been presented. The bank statement balance is:",
    options: ["", "GHS4,400", "GHS6,000", "GHS5,200", "GHS6,000"],
answer: "GHS4,400"
  },
  {
    question: "Bank charges of GHS50 appear on the bank statement but have not been recorded in the cash book. How should this be adjusted in the cash book?",
    options: ["", "Dr Bank charges GHS50, Cr Cash book GHS50",
      "Dr Cash book GHS50, Cr Bank charges GHS50",
      "Dr Suspense account GHS50, Cr Cash book GHS50",
      "No entry is required"],
answer: "Dr Bank charges GHS50, Cr Cash book GHS50"
  },
  {
    question: "A cheque for GHS1,200 was entered in the cash book but was recorded in the bank statement as GHS1,020. What is the error?",
    options: ["", "Bank error", "Cash book error", "Suspense error", "No error"],
answer: "Cash book error"
  },
  {
    question: "The bank statement shows a deposit of GHS2,000 not recorded in the cash book. What is the correct journal entry to update the cash book?",
    options: ["", "Dr Bank GHS2,000, Cr Suspense GHS2,000",
      "Dr Cash book GHS2,000, Cr Bank GHS2,000",
      "Dr Cash book GHS2,000, Cr Suspense GHS2,000",
      "Dr Suspense GHS2,000, Cr Cash book GHS2,000"],
answer: "Dr Cash book GHS2,000, Cr Suspense GHS2,000"
  },
  {
    question: "What is a self-balancing ledger?",
    options: ["", "A ledger with control accounts that balance independently",
      "A ledger without any control accounts",
      "A ledger that contains only sales transactions",
      "A ledger that contains only purchase transactions"],
answer: "A ledger with control accounts that balance independently"
  },
  {
    question: "The purpose of Control Accounts is to:",
    options: ["", "Detect errors in the ledger",
      "Replace the ledger",
      "Record all transactions",
      "Prepare final accounts"],
answer: "Detect errors in the ledger"
  },
  {
    question: "The balance on the sales ledger control account represents:",
    options: ["", "Total credit sales for the period",
      "Total amount owed by customers (debtors)",
      "Total cash sales"],
answer: "Total amount owed by customers (debtors)"
  },
  {
    question: "How would you prepare a Purchases Ledger Control Account?",
    options: ["", "By summarizing all creditor transactions",
      "By listing all debtors' balances",
      "By preparing the trial balance"], 
answer: "By summarizing all creditor transactions"
  },
  {
    question: "The Purchases Ledger Control Account shows a balance of GHS4,000. Individual creditors total GHS3,800. What might this indicate?",
    options: ["", "", "", "Error in control account", "Outstanding cheques", "Bank error"],
answer: "Error in individual accounts"
  },
  {
    question: "If the Sales Ledger Control Account does not agree with the total of individual debtor accounts, what is the next step?",
    options: ["", "", "", "Investigate and reconcile differences", "Prepare financial statements", "Ignore the difference"],
answer: "Investigate and reconcile differences"
  },
  {
    question: "Calculate the closing balance of the Sales Ledger Control Account if the opening balance is GHS10,000, credit sales GHS6,000, cash received from debtors GHS7,000, and returns from debtors GHS500.",
    options: ["", "", "", "GHS8,000", "GHS9,500", "GHS10,500"],
answer: "GHS8,500"
  },
  {
    question: "Calculate the closing balance of the Purchases Ledger Control Account if the opening balance is GHS5,000, credit purchases are GHS3,000, payments to creditors are GHS4,000, and returns to suppliers are GHS1,000.",
    options: ["", "", "", "GHS2,000", "GHS4,000", "GHS5,000"],
answer: "GHS3,000"
  },
  {
    question: "What are the advantages of control accounts?",
    options: ["", "Detect errors, simplify ledger reconciliation, save time",
      "Increase errors, complicate accounting, reduce accuracy",
      "Replace financial statements, increase costs, require more staff"],
answer: "Detect errors, simplify ledger reconciliation, save time"
  },
  {
    question: "A total of GHS12,000 was posted to the wrong ledger account. How would this affect the control account?",
    options: ["", "", "", "Control account balance is correct", "Trial balance will not agree", "No effect"],
answer: "Control account balance is incorrect"
  },
  {
    question: "Bank statement shows a direct debit of GHS250 for insurance premium not recorded in cash book. What entry is needed?",
    options: ["", "Dr Insurance Expense GHS250, Cr Bank GHS250",
      "Dr Bank GHS250, Cr Insurance Expense GHS250", "Dr Suspense GHS250, Cr Bank GHS250"],
answer: "Dr Insurance Expense GHS250, Cr Bank GHS250"
  },
  {
    question: "What is an unpresented cheque?",
    options: ["", "A cheque issued by the business but not yet cleared by the bank",
      "A cheque received but not yet recorded", "A cheque dishonored"],
answer: "A cheque issued by the business but not yet cleared by the bank"
  },
  {
    question: "The cash book shows GHS7,500, the bank statement shows GHS8,200, and uncredited deposits total GHS1,000. What is the adjusted cash book balance?",
    options: ["", "", "", "GHS8,500", "GHS6,500", "GHS7,200"],
answer: "GHS8,500"
  },
  {
    question: "If the bank statement shows GHS200 direct deposits not recorded in the cash book, what is the correct adjustment?",
    options: ["", "Dr Cash book GHS200, Cr Bank GHS200",
      "Dr Bank GHS200, Cr Cash book GHS200",
      "Dr Cash book GHS200, Cr Suspense GHS200"],
answer: "Dr Cash book GHS200, Cr Suspense GHS200"
  },
  {
    question: "Calculate the amount of outstanding lodgments if the cash book shows GHS5,000 and the bank statement shows GHS4,300 with unpresented cheques GHS600.",
    options: ["", "", "", "GHS700", "GHS1,200", "GHS500"],
answer: "GHS700"
  },
  {
    question: "Which of the following is NOT a reason for differences between the bank statement and the cash book?",
    options: ["", "", "", "Outstanding lodgments", "Bank charges", "Depreciation"],
answer: "Depreciation"
  },
  {
    question: "The Suspense Account was cleared with a debit of GHS1,000 and a credit of GHS1,000. What does this indicate?",
    options: ["", "", "", "Error still exists", "Trial balance is wrong", "No effect"],
answer: "Errors were corrected"
  },
  {
    question: "A cheque for GHS750 was entered twice in the cash book. What is the correcting entry?",
    options: ["", "Dr Suspense GHS750, Cr Cash book GHS750",
      "Dr Cash book GHS750, Cr Suspense GHS750",
      "Dr Suspense GHS1,500, Cr Cash book GHS1,500"],
answer: "Dr Suspense GHS750, Cr Cash book GHS750"
  },
  {
    question: "What is the main purpose of preparing a Bank Reconciliation Statement (BRS)?",
    options: ["", "To check the accuracy of the cash book balance",
      "To reconcile the cash book balance with the bank statement balance",
      "To verify bank charges"],
answer: "To reconcile the cash book balance with the bank statement balance"
  },
  {
    question: "If the bank statement shows a balance of GHS10,000 and unpresented cheques total GHS1,500, what is the adjusted bank balance?",
    options: ["", "", "", "GHS11,500", "GHS10,000", "GHS1,500"],
answer: "GHS8,500"
  },
  {
    question: "The cash book shows a balance of GHS5,200. Cheques totaling GHS800 issued have not yet been presented. The bank statement balance is:",
    options: ["", "", "", "GHS6,000", "GHS5,200", "GHS6,000"],
answer: "GHS4,400"
  },
  {
    question: "Bank charges of GHS50 appear on the bank statement but have not been recorded in the cash book. How should this be adjusted in the cash book?",
    options: ["", "Dr Bank charges GHS50, Cr Cash book GHS50",
      "Dr Cash book GHS50, Cr Bank charges GHS50",
      "Dr Suspense account GHS50, Cr Cash book GHS50"],
answer: "Dr Bank charges GHS50, Cr Cash book GHS50"
  },
  {
    question: "A cheque for GHS1,200 was entered in the cash book but was recorded in the bank statement as GHS1,020. What is the error?",
    options: ["", "", "", "Cash book error", "Suspense error", "No error"],
answer: "Cash book error"
  },
  {
    question: "The bank statement shows a deposit of GHS2,000 not recorded in the cash book. What is the correct journal entry to update the cash book?",
    options: ["", "Dr Bank GHS2,000, Cr Suspense GHS2,000",
      "Dr Cash book GHS2,000, Cr Bank GHS2,000",
      "Dr Cash book GHS2,000, Cr Suspense GHS2,000"],
answer: "Dr Cash book GHS2,000, Cr Suspense GHS2,000"
  },
  {
    question: "What is a self-balancing ledger?",
    options: ["", "A ledger with control accounts that balance independently",
      "A ledger without any control accounts",
      "A ledger that contains only sales transactions"],
answer: "A ledger with control accounts that balance independently"
  },
  {
    question: "The purpose of Control Accounts is to:",
    options: ["", "Detect errors in the ledger",
      "Replace the ledger",
      "Record all transactions"],
answer: "Detect errors in the ledger"
  },
  {
    question: "The balance on the sales ledger control account represents:",
    options: ["", "Total credit sales for the period",
      "Total amount owed by customers (debtors)",
      "Total cash sales"],
answer: "Total amount owed by customers (debtors)"
  },
  {
    question: "How would you prepare a Purchases Ledger Control Account?",
    options: ["", "By summarizing all creditor transactions",
      "By listing all debtors' balances",
      "By preparing the trial balance"],
answer: "By summarizing all creditor transactions"
  },
  {
    question: "The Purchases Ledger Control Account shows a balance of GHS4,000. Individual creditors total GHS3,800. What might this indicate?",
    options: ["", "", "", "Error in control account", "Outstanding cheques", "Bank error"],
answer: "Error in individual accounts"
  },
  {
    question: "If the Sales Ledger Control Account does not agree with the total of individual debtor accounts, what is the next step?",
    options: ["", "", "", "Investigate and reconcile differences", "Prepare financial statements", "Ignore the difference"],
answer: "Investigate and reconcile differences"
  },
  {
    question: "Calculate the closing balance of the Sales Ledger Control Account if the opening balance is GHS10,000, credit sales GHS6,000, cash received from debtors GHS7,000, and returns from debtors GHS500.",
    options: ["", "", "", "GHS8,000", "GHS9,500", "GHS10,500"],
answer: "GHS8,500"
  },
  {
    question: "Calculate the closing balance of the Purchases Ledger Control Account if the opening balance is GHS5,000, credit purchases are GHS3,000, payments to creditors are GHS4,000, and returns to suppliers are GHS1,000.",
    options: ["", "", "", "GHS2,000", "GHS4,000", "GHS5,000"],
answer: "GHS3,000"
  },
  {
    question: "What are the advantages of control accounts?",
    options: ["", "Detect errors, simplify ledger reconciliation, save time",
      "Increase errors, complicate accounting, reduce accuracy",
      "Replace financial statements, increase costs, require more staff"],
answer: "Detect errors, simplify ledger reconciliation, save time"
  },
  {
    question: "A total of GHS12,000 was posted to the wrong ledger account. How would this affect the control account?",
    options: ["", "", "", "Control account balance is correct", "Trial balance will not agree", "No effect"],
answer: "Control account balance is incorrect"
  },
  {
    question: "Bank statement shows a direct debit of GHS250 for insurance premium not recorded in cash book. What entry is needed?",
    options: ["", "Dr Insurance Expense GHS250, Cr Bank GHS250",
      "Dr Bank GHS250, Cr Insurance Expense GHS250", "Dr Suspense GHS250, Cr Bank GHS250"],
answer: "Dr Insurance Expense GHS250, Cr Bank GHS250"
  },
  {
    question: "What is an unpresented cheque?",
    options: ["", "A cheque issued by the business but not yet cleared by the bank",
      "A cheque received but not yet recorded", "A cheque dishonored"],
answer: "A cheque issued by the business but not yet cleared by the bank"
  },
  {
    question: "The cash book shows GHS7,500, the bank statement shows GHS8,200, and uncredited deposits total GHS1,000. What is the adjusted cash book balance?",
    options: ["", "", "", "GHS8,500", "GHS6,500", "GHS7,200"],
answer: "GHS8,500"
  },
  {
    question: "If the bank statement shows GHS200 direct deposits not recorded in the cash book, what is the correct adjustment?",
    options: ["", "Dr Cash book GHS200, Cr Bank GHS200",
      "Dr Bank GHS200, Cr Cash book GHS200",
      "Dr Cash book GHS200, Cr Suspense GHS200"],
answer: "Dr Cash book GHS200, Cr Suspense GHS200"
  },
  {
    question: "Calculate the amount of outstanding lodgments if the cash book shows GHS5,000 and the bank statement shows GHS4,300 with unpresented cheques GHS600.",
    options: ["", "", "", "GHS700", "GHS1,200", "GHS500"],
answer: "GHS700"
  },
  {
    question: "Which of the following is NOT a reason for differences between the bank statement and the cash book?",
    options: ["", "", "", "Outstanding lodgments", "Bank charges", "Depreciation"],
answer: "Depreciation"
  },
  {
    question: "The Suspense Account was cleared with a debit of GHS1,000 and a credit of GHS1,000. What does this indicate?",
    options: ["", "", "", "Error still exists", "Trial balance is wrong", "No effect"],
answer: "Errors were corrected"
  },
  {
    question: "A cheque for GHS750 was entered twice in the cash book. What is the correcting entry?",
    options: ["", "Dr Suspense GHS750, Cr Cash book GHS750",
      "Dr Cash book GHS750, Cr Suspense GHS750",
      "Dr Suspense GHS1,500, Cr Cash book GHS1,500"],
answer: "Dr Suspense GHS750, Cr Cash book GHS750"
  },
  {
    question: "What is a contra entry?",
    options: ["", "An entry affecting both cash and bank accounts",
      "An entry to record depreciation",
      "An entry for sales returns"],
answer: "An entry affecting both cash and bank accounts"
  },
  {
    question: "How is a dishonoured cheque treated in the cash book?",
    options: ["", "Deducted from cash book",
      "Added to cash book",
      "No effect"],
answer: "Deducted from cash book"
  },
  {
    question: "What does a credit balance in the bank column of the cash book indicate?",
    options: ["", "Bank overdraft",
      "Bank balance",
      "Bank error"],
answer: "Bank overdraft"
  },
  {
    question: "How do you treat a direct deposit by a customer in the bank statement but not recorded in the cash book?",
    options: ["", "Dr Cash book",
      "Cr Cash book",
      "Dr Suspense account"],
answer: "Dr Cash book"
  },
  {
    question: "What is the main purpose of preparing a Bank Reconciliation Statement (BRS)?",
    options: ["", "To check the accuracy of the cash book balance",
      "To reconcile the cash book balance with the bank statement balance",
      "To verify bank charges"],
answer: "To reconcile the cash book balance with the bank statement balance"
  },
  {
    question: "If the bank statement shows a balance of GHS10,000 and unpresented cheques total GHS1,500, what is the adjusted bank balance?",
    options: ["", "", "", "GHS11,500", "GHS10,000", "GHS1,500"],
answer: "GHS8,500"
  },
  {
    question: "The cash book shows a balance of GHS5,200. Cheques totaling GHS800 issued have not yet been presented. The bank statement balance is:",
    options: ["", "", "", "GHS6,000", "GHS5,200", "GHS6,000"],
answer: "GHS4,400"
  },
  {
    question: "Bank charges of GHS50 appear on the bank statement but have not been recorded in the cash book. How should this be adjusted in the cash book?",
    options: ["", "Dr Bank charges GHS50, Cr Cash book GHS50",
      "Dr Cash book GHS50, Cr Bank charges GHS50",
      "Dr Suspense account GHS50, Cr Cash book GHS50"],
answer: "Dr Bank charges GHS50, Cr Cash book GHS50"
  },
  {
    question: "A cheque for GHS1,200 was entered in the cash book but was recorded in the bank statement as GHS1,020. What is the error?",
    options: ["", "", "", "Cash book error", "Suspense error", "No error"],
answer: "Cash book error"
  },
  {
    question: "The bank statement shows a deposit of GHS2,000 not recorded in the cash book. What is the correct journal entry to update the cash book?",
    options: ["", "Dr Bank GHS2,000, Cr Suspense GHS2,000",
      "Dr Cash book GHS2,000, Cr Bank GHS2,000",
      "Dr Cash book GHS2,000, Cr Suspense GHS2,000"],
answer: "Dr Cash book GHS2,000, Cr Suspense GHS2,000"
  },
  {
    question: "What is a self-balancing ledger?",
    options: ["", "A ledger with control accounts that balance independently",
      "A ledger without any control accounts",
      "A ledger that contains only sales transactions"],
answer: "A ledger with control accounts that balance independently"
  },
  {
    question: "The purpose of Control Accounts is to:",
    options: ["", "Detect errors in the ledger",
      "Replace the ledger",
      "Record all transactions"],
answer: "Detect errors in the ledger"
  },
  {
    question: "The balance on the sales ledger control account represents:",
    options: ["", "Total credit sales for the period",
      "Total amount owed by customers (debtors)",
      "Total cash sales"],
answer: "Total amount owed by customers (debtors)"
  },
  {
    question: "How would you prepare a Purchases Ledger Control Account?",
    options: ["", "By summarizing all creditor transactions",
      "By listing all debtors' balances",
      "By preparing the trial balance"],
answer: "By summarizing all creditor transactions"
  },
  {
    question: "The Purchases Ledger Control Account shows a balance of GHS4,000. Individual creditors total GHS3,800. What might this indicate?",
    options: ["", "", "", "Error in control account", "Outstanding cheques", "Bank error"],
answer: "Error in individual accounts"
  },
  {
    question: "If the Sales Ledger Control Account does not agree with the total of individual debtor accounts, what is the next step?",
    options: ["", "", "", "Investigate and reconcile differences", "Prepare financial statements", "Ignore the difference"],
answer: "Investigate and reconcile differences"
  },
  {
    question: "Calculate the closing balance of the Sales Ledger Control Account if the opening balance is GHS10,000, credit sales GHS6,000, cash received from debtors GHS7,000, and returns from debtors GHS500.",
    options: ["", "", "", "GHS8,000", "GHS9,500", "GHS10,500"],
answer: "GHS8,500"
  },
  {
    question: "Calculate the closing balance of the Purchases Ledger Control Account if the opening balance is GHS5,000, credit purchases are GHS3,000, payments to creditors are GHS4,000, and returns to suppliers are GHS1,000.",
    options: ["", "", "", "GHS2,000", "GHS4,000", "GHS5,000"],
answer: "GHS3,000"
  },
  {
    question: "What are the advantages of control accounts?",
    options: ["", "Detect errors, simplify ledger reconciliation, save time",
      "Increase errors, complicate accounting, reduce accuracy",
      "Replace financial statements, increase costs, require more staff"],
answer: "Detect errors, simplify ledger reconciliation, save time"
  },
  {
    question: "A total of GHS12,000 was posted to the wrong ledger account. How would this affect the control account?",
    options: ["", "", "", "Control account balance is correct", "Trial balance will not agree", "No effect"],
answer: "Control account balance is incorrect"
  },
  {
    question: "Bank statement shows a direct debit of GHS250 for insurance premium not recorded in cash book. What entry is needed?",
    options: ["", "Dr Insurance Expense GHS250, Cr Bank GHS250",
      "Dr Bank GHS250, Cr Insurance Expense GHS250", "Dr Suspense GHS250, Cr Bank GHS250"],
answer: "Dr Insurance Expense GHS250, Cr Bank GHS250"
  },
  {
    question: "What is an unpresented cheque?",
    options: ["", "A cheque issued by the business but not yet cleared by the bank",
      "A cheque received but not yet recorded", "A cheque dishonored"],
answer: "A cheque issued by the business but not yet cleared by the bank"
  },
  {
    question: "The cash book shows GHS7,500, the bank statement shows GHS8,200, and uncredited deposits total GHS1,000. What is the adjusted cash book balance?",
    options: ["", "", "", "GHS8,500", "GHS6,500", "GHS7,200"],
answer: "GHS8,500"
  },
  {
    question: "If the bank statement shows GHS200 direct deposits not recorded in the cash book, what is the correct adjustment?",
    options: ["", "Dr Cash book GHS200, Cr Bank GHS200",
      "Dr Bank GHS200, Cr Cash book GHS200",
      "Dr Cash book GHS200, Cr Suspense GHS200"],
answer: "Dr Cash book GHS200, Cr Suspense GHS200"
  },
  {
    question: "Calculate the amount of outstanding lodgments if the cash book shows GHS5,000 and the bank statement shows GHS4,300 with unpresented cheques GHS600.",
    options: ["", "", "", "GHS700", "GHS1,200", "GHS500"],
answer: "GHS700"
  },
  {
    question: "Which of the following is NOT a reason for differences between the bank statement and the cash book?",
    options: ["", "", "", "Outstanding lodgments", "Bank charges", "Depreciation"],
answer: "Depreciation"
  },
  {
    question: "The Suspense Account was cleared with a debit of GHS1,000 and a credit of GHS1,000. What does this indicate?",
    options: ["", "", "", "Error still exists", "Trial balance is wrong", "No effect"],
answer: "Errors were corrected"
  },
  {
    question: "A cheque for GHS750 was entered twice in the cash book. What is the correcting entry?",
    options: ["", "Dr Suspense GHS750, Cr Cash book GHS750",
      "Dr Cash book GHS750, Cr Suspense GHS750",
      "Dr Suspense GHS1,500, Cr Cash book GHS1,500"],
answer: "Dr Suspense GHS750, Cr Cash book GHS750"
  },
  {
    question: "What is a contra entry?",
    options: ["", "An entry affecting both cash and bank accounts",
      "An entry to record depreciation",
      "An entry for sales returns"],
answer: "An entry affecting both cash and bank accounts"
  },
  // ... previous questions from above
  {
    question: "How is a dishonoured cheque treated in the cash book?",
    options: ["", "Deducted from cash book",
      "Added to cash book",
      "No effect"],
answer: "Deducted from cash book"
  },
  {
    question: "What does a credit balance in the bank column of the cash book indicate?",
    options: ["", "Bank overdraft",
      "Bank balance",
      "Bank error"],
answer: "Bank overdraft"
  },
  {
    question: "How do you treat a direct deposit by a customer in the bank statement but not recorded in the cash book?",
    options: ["", "Dr Cash book",
      "Cr Cash book",
      "Dr Suspense account"],
answer: "Dr Cash book"
  },
  {
    question: "What is the purpose of a control account trial balance?",
    options: ["", "To verify that control accounts match individual ledger totals",
      "To check bank charges",
      "To detect fraud in bank statements"],
answer: "To verify that control accounts match individual ledger totals"
  },
  {
    question: "What is the effect of unrecorded bank interest received on the cash book balance?",
    options: ["", "Cash book balance understated",
      "Cash book balance overstated",
      "No effect]"],
answer: "Cash book balance understated"
  },
  {
    question: "Which document is used to update the cash book when a direct debit appears on the bank statement?",
    options: ["", "Bank statement",
      "Cheque counterfoil",
      "Invoice"],
answer: "Bank statement"
  },
  {
    question: "What type of error does a suspense account help to correct?",
    options: ["", "Errors of omission",
      "Errors of commission",
      "Errors where debit and credit do not agree"],
answer: "Errors where debit and credit do not agree"
  },
  {
    question: "How does an outstanding lodgment affect the bank reconciliation statement?",
    options: ["", "It is added to the bank statement balance",
      "It is deducted from the bank statement balance",
      "It is added to the cash book balance"],
answer: "It is added to the bank statement balance"
  },
  {
    question: "Which account is credited when a dishonoured cheque is received from a customer?",
    options: ["", "Bank account",
      "Debtors account",
      "Creditors account"],
answer: "Debtors account"
  },
  {
    question: "What is the term for a cheque received but not yet deposited in the bank?",
    options: ["", "Outstanding cheque",
      "Uncredited lodgment",
      "Unpresented cheque"],
answer: "Uncredited lodgment"
  },
  {
    question: "If a cheque issued by a business is lost and never presented, how is this treated in the bank reconciliation?",
    options: ["", "It remains as an unpresented cheque",
      "It is added back to the bank balance",
      "It is deducted from the cash book balance"],
answer: "It remains as an unpresented cheque"
  },
  {
    question: "What does a debit balance in the purchases ledger control account indicate?",
    options: ["", "A creditor owes money to the business",
      "The business has overpaid a creditor",
      "A debtor owes money to the business"],
answer: "The business has overpaid a creditor"
  },
  {
    question: "How often should bank reconciliation statements be prepared?",
    options: ["", "Monthly",
      "Annually",
      "Weekly"],
answer: "Whenever the bank statement is received"
  },
  {
    question: "What is the usual effect of bank charges on the cash book balance?",
    options: ["", "Decrease the balance",
      "Increase the balance",
      "No effect"],
answer: "Decrease the balance"
  },
  {
    question: "What is the control account called that summarizes all individual debtor accounts?",
    options: ["", "Sales ledger control account",
      "Purchases ledger control account",
      "General ledger control account"],
answer: "Sales ledger control account"
  },
  {
    question: "Which ledger is summarized by the purchases ledger control account?",
    options: ["", "Creditors ledger",
      "Debtors ledger",
      "General ledger"],
answer: "Creditors ledger"
  },
  {
    question: "When a direct debit payment appears in the bank statement but not in the cash book, which account should be debited in the cash book?",
    options: ["", "Expense account",
      "Bank account",
      "Suspense account"],
answer: "Expense account"
  },
  {
    question: "Which entry would correct a bank error in recording a deposit as GHS800 instead of GHS1,000?",
    options: ["", "Add GHS200 to the bank statement balance",
      "Deduct GHS200 from the cash book",
      "Add GHS200 to the cash book"],
answer: "Add GHS200 to the bank statement balance"
  },
  {
    question: "What type of error causes the trial balance to disagree, necessitating a suspense account?",
    options: ["", "Error of principle",
      "Error of omission",
      "Error of casting"],
answer: "Error of unequal debit and credit"
  },
  {
    question: "What does a bank reconciliation statement help to detect?",
    options: ["", "Errors and omissions between cash book and bank statement",
      "Errors in sales invoices",
      "Errors in purchase orders"],
answer: "Errors and omissions between cash book and bank statement"
  },
  {
    question: "What is an advantage of using control accounts in bookkeeping?",
    options: ["", "Simplifies reconciliation of ledger accounts",
      "Eliminates the need for a trial balance",
      "Reduces the number of journal entries"],
answer: "Simplifies reconciliation of ledger accounts"
  },
  {
    question: "What is the main limitation of single entry bookkeeping?",
    options: ["", "Does not show profit or loss clearly",
      "Is too complex for small businesses",
      "Requires extensive ledger accounts"],
answer: "Does not show profit or loss clearly"
  },
  {
    question: "From the following single entry records, calculate the net profit: Opening capital GHS50,000, Closing capital GHS60,000, Additional capital introduced GHS5,000, Drawings GHS3,000.",
    options: ["", "GHS12,000",
      "GHS8,000",
      "GHS10,000"],
answer: "GHS12,000"
  },
  {
    question: "Calculate the credit sales if total sales are GHS150,000 and cash sales are GHS50,000.",
    options: ["", "GHS100,000",
      "GHS200,000",
      "GHS50,000"],
answer: "GHS100,000"
  },
  {
    question: "What is the purpose of receipts and payments account in clubs and societies?",
    options: ["", "To show cash inflows and outflows",
      "To calculate net profit",
      "To prepare balance sheet"],
answer: "To show cash inflows and outflows"
  },
  {
    question: "How is an accumulated fund in a club calculated?",
    options: ["", "Opening fund + Income - Expenditure",
      "Income - Expenditure only",
      "Subscriptions - Donations"],
answer: "Opening fund + Income - Expenditure"
  },
  {
    question: "Compute the prime cost if direct materials cost GHS30,000, direct labour GHS20,000 and direct expenses GHS5,000.",
    options: ["", "GHS55,000",
      "GHS50,000",
      "GHS45,000"],
answer: "GHS55,000"
  },
  {
    question: "What does the manufacturing account show?",
    options: ["", "Cost of goods manufactured",
      "Sales revenue",
      "Operating expenses"],
answer: "Cost of goods manufactured"
  },
  {
    question: "Calculate the production cost if prime cost is GHS55,000, factory overheads GHS15,000.",
    options: ["", "GHS70,000",
      "GHS40,000",
      "GHS85,000"],
answer: "GHS70,000"
  },
  {
    question: "What is meant by unrealized profit in manufacturing accounts?",
    options: ["", "Profit on goods still held in closing stock",
      "Profit from sales",
      "Profit paid to shareholders"],
answer: "Profit on goods still held in closing stock"
  },
  {
    question: "Prepare a simple income and expenditure account given the following: Income GHS100,000, Expenditure GHS70,000.",
    options: ["", "Net surplus GHS30,000",
      "Net deficit GHS30,000",
      "Net surplus GHS70,000"],
answer: "Net surplus GHS30,000"
  },
  {
    question: "How is the subscriptions account credited in clubs and societies?",
    options: ["", "When subscriptions are received",
      "When subscriptions are due",
      "When subscriptions are paid to suppliers"],
answer: "When subscriptions are due"
  },
  {
    question: "What is the main difference between departmental and branch accounts?",
    options: ["", "Departments are parts of a business; branches are separate locations",
      "Departments sell; branches buy",
      "Branches are divisions of a business; departments are separate companies"],
answer: "Departments are parts of a business; branches are separate locations"
  },
  {
    question: "Calculate the value of closing stock given: Opening stock GHS10,000, Purchases GHS40,000, Sales GHS70,000, Cost of goods sold GHS35,000.",
    options: ["", "GHS15,000",
      "GHS20,000",
      "GHS25,000"],
answer: "GHS15,000"
  },
  {
    question: "What distinguishes public sector accounting from private sector accounting?",
    options: ["", "Focus on accountability for public funds",
      "Focus on profit maximization",
      "No difference"],
answer: "Focus on accountability for public funds"
  },
  {
    question: "Identify one source of public revenue.",
    options: ["", "Taxes",
      "Loans",
      "Shares"],
answer: "Taxes"
  },
  {
    question: "Which is an example of capital expenditure in the public sector?",
    options: ["", "Purchase of a building",
      "Payment of salaries",
      "Payment of utilities"],
answer: "Purchase of a building"
  },
  {
    question: "What is the main advantage of computerized accounting systems?",
    options: ["", "Speed and accuracy of data processing",
      "Requires no training",
      "Eliminates all errors"],
answer: "Speed and accuracy of data processing"
  },
  {
    question: "Give one demerit of manual accounting processing systems.",
    options: ["", "Prone to human error",
      "Faster than computerized systems",
      "Requires no expertise"],
answer: "Prone to human error"
  },
  {
    question: "Compute the net worth of a sole proprietor with assets GHS200,000 and liabilities GHS75,000.",
    options: ["", "GHS125,000",
      "GHS275,000",
      "GHS75,000"],
answer: "GHS125,000"
  },
  {
    question: "If sales are GHS100,000, cost of goods sold GHS60,000, and expenses GHS20,000, calculate the net profit.",
    options: ["", "GHS20,000",
      "GHS40,000",
      "GHS80,000"],
answer: "GHS20,000"
  },
  {
    question: "What is the role of an income and expenditure account in clubs?",
    options: ["", "To measure net surplus or deficit",
      "To track cash inflows",
      "To calculate tax payable"],
answer: "To measure net surplus or deficit"
  },
  {
    question: "In incomplete records, how do you compute profit using the statement of affairs method?",
    options: ["", "Closing capital + Drawings - Opening capital",
      "Opening capital + Drawings - Closing capital",
      "Sales - Purchases"],
answer: "Closing capital + Drawings - Opening capital"
  },
  {
    question: "What is the double entry for recording depreciation on fixed assets?",
    options: ["", "Debit Depreciation Expense, Credit Accumulated Depreciation",
      "Debit Asset account, Credit Cash",
      "Debit Accumulated Depreciation, Credit Expense"],
answer: "Debit Depreciation Expense, Credit Accumulated Depreciation"
  },
  {
    question: "Calculate depreciation on machinery costing GHS50,000 at 10% per annum using the straight-line method.",
    options: ["", "GHS5,000",
      "GHS500",
      "GHS10,000"],
answer: "GHS5,000"
  },
  {
    question: "What is a suspense account used for in accounting?",
    options: ["", "To temporarily hold unclassified transactions",
      "To record revenue",
      "To record assets"],
answer: "To temporarily hold unclassified transactions"
  },
  {
    question: "What is the effect of failing to record accrued expenses in final accounts?",
    options: ["", "Overstated profit",
      "Understated profit",
      "No effect"],
answer: "Overstated profit"
  },
  {
    question: "How do you treat bad debts in financial statements?",
    options: ["", "As an expense deducted from revenue",
      "As an asset",
      "As a liability"],
answer: "As an expense deducted from revenue"
  },
  {
    question: "What is the principle of double entry accounting?",
    options: ["", "Every transaction affects at least two accounts, debit equals credit",
      "Every transaction affects one account only",
      "Credits are always more than debits"],
answer: "Every transaction affects at least two accounts, debit equals credit"
  },
  {
    question: "Explain the effect on the accounting equation when a business purchases inventory on credit.",
    options: ["", "Increase assets and increase liabilities",
      "Decrease assets and increase liabilities",
      "Increase assets and decrease liabilities"],
answer: "Increase assets and increase liabilities"
  },
  {
    question: "Calculate the closing capital given: Opening capital GHS80,000, additional capital introduced GHS20,000, net profit GHS15,000, and drawings GHS10,000.",
    options: ["", "GHS105,000",
      "GHS125,000",
      "GHS85,000"],
answer: "GHS105,000"
  },
  {
    question: "How do you classify expenses in the final accounts of a sole proprietorship?",
    options: ["", "By nature or by function",
      "Only by function",
      "Only by nature"],
answer: "By nature or by function"
  },
  {
    question: "Prepare a simple trial balance given: Cash GHS5,000 (debit), Capital GHS20,000 (credit), Equipment GHS7,000 (debit), Accounts Payable GHS4,000 (credit).",
    options: ["", "Trial balance agrees with total debit GHS12,000 and credit GHS24,000",
      "Trial balance agrees with total debit GHS12,000 and credit GHS24,000",
      "Trial balance agrees with total debit GHS12,000 and credit GHS24,000"],
answer: "Trial balance agrees with total debit GHS12,000 and credit GHS24,000"
  },
  {
    question: "What is the key purpose of preparing a bank reconciliation statement?",
    options: ["", "To explain differences between cash book and bank statement balances",
      "To prepare cash budgets",
      "To record petty cash expenses"],
answer: "To explain differences between cash book and bank statement balances"
  },
  {
    question: "How does depreciation affect the profit and loss account?",
    options: ["", "It reduces profit as an expense",
      "It increases profit",
      "No effect on profit"],
answer: "It reduces profit as an expense"
  },
  {
    question: "Calculate the value of closing stock using the cost formula if opening stock is GHS10,000, purchases GHS25,000, sales GHS40,000, and cost of goods sold GHS20,000.",
    options: ["", "GHS15,000",
      "GHS10,000",
      "GHS25,000"],
answer: "GHS15,000"
  },
  {
    question: "In VAT accounting, if a sale of GHS100,000 attracts VAT at 12.5%, calculate the VAT payable.",
    options: ["", "GHS12,500",
      "GHS8,000",
      "GHS11,250"],
answer: "GHS12,500"
  },
  {
    question: "Explain the effect on the balance sheet when depreciation is charged on fixed assets.",
    options: ["", "Reduces asset value and reduces profit",
      "Increases asset value and increases profit",
      "No effect on asset or profit"],
answer: "Reduces asset value and reduces profit"
  },
  {
    question: "Which of the following is NOT a qualitative characteristic of accounting information?",
    options: ["", "Relevance",
      "Reliability",
      "Complexity"],
answer: "Complexity"
  },
  {
    question: "What is the role of the petty cash book in financial accounting?",
    options: ["", "To record small cash payments",
      "To record all cash transactions",
      "To prepare financial statements"],
answer: "To record small cash payments"
  },
  {
    question: "Calculate the payroll for 10 workers each paid GHS500 per week for 4 weeks.",
    options: ["", "GHS20,000",
      "GHS2,000",
      "GHS50,000"],
answer: "GHS20,000"
  },
  {
    question: "Explain the difference between revenue and capital expenditure.",
    options: ["", "Revenue expenditure is for day-to-day operations, capital expenditure is for long-term assets",
      "Capital expenditure is for salaries, revenue expenditure is for equipment",
      "Both are the same"],
answer: "Revenue expenditure is for day-to-day operations, capital expenditure is for long-term assets"
  },
  {
    question: "How do you treat bad debts provision in final accounts?",
    options: ["", "Deduct from debtors and record as an expense",
      "Add to debtors",
      "Record as income"],
answer: "Deduct from debtors and record as an expense"
  },
  {
    question: "What is the effect of recording accrued expenses in the accounts?",
    options: ["", "Increases liabilities and expenses",
      "Decreases assets and liabilities",
      "Increases assets and revenues"],
answer: "Increases liabilities and expenses"
  },
  {
    question: "Prepare a ledger account for 'Rent Expense' given the following transactions: Paid GHS1,000 cash, owing GHS200 at year-end.",
    options: ["", "Debit Rent Expense GHS1,200 and credit Cash GHS1,000 and Accrued Expenses GHS200",
      "Debit Rent Expense GHS1,000 and credit Cash GHS1,000",
      "Credit Rent Expense GHS1,200 and debit Cash GHS1,200"],
answer: "Debit Rent Expense GHS1,200 and credit Cash GHS1,000 and Accrued Expenses GHS200"
  },
  {
    question: "Calculate gross profit if sales are GHS120,000, cost of goods sold is GHS70,000, and expenses are GHS30,000.",
    options: ["", "GHS50,000",
      "GHS20,000",
      "GHS30,000"],
answer: "GHS50,000"
  },
  {
    question: "What are the key users of accounting information?",
    options: ["", "Owners, managers, creditors, investors, government",
      "Only owners",
      "Only managers"],
answer: "Owners, managers, creditors, investors, government"
  },
  {
    question: "Explain the purpose of control accounts in accounting.",
    options: ["", "To summarize ledger balances and detect errors",
      "To record petty cash transactions",
      "To prepare financial statements"],
answer: "To summarize ledger balances and detect errors"
  },
  {
    question: "Calculate VAT payable if total sales including VAT is GHS112,500 and the VAT rate is 12.5%.",
    options: ["", "GHS12,500",
      "GHS10,000",
      "GHS11,250"],
answer: "GHS12,500"
  },
  {
    question: "What is the accounting equation?",
    options: ["", "Assets = Liabilities + Capital",
      "Assets + Liabilities = Capital",
      "Capital = Assets - Liabilities"],
answer: "Assets = Liabilities + Capital"
  },
  {
    question: "A business has assets GHS100,000, liabilities GHS40,000. What is the owner's equity?",
    options: ["", "GHS60,000",
      "GHS140,000",
      "GHS40,000"],
answer: "GHS60,000"
  },
  {
    question: "What is the main difference between financial accounting and cost accounting?",
    options: ["", "Financial accounting focuses on external reporting; cost accounting focuses on internal control and costing",
      "Financial accounting is optional; cost accounting is mandatory",
      "Both are exactly the same"],
answer: "Financial accounting focuses on external reporting; cost accounting focuses on internal control and costing"
  },
  {
    question: "Explain the purpose of a trial balance.",
    options: ["", "To check the equality of debits and credits",
      "To prepare the income statement",
      "To prepare the cash flow statement"],
answer: "To check the equality of debits and credits"
  },
  {
    question: "Calculate net profit if total revenue is GHS150,000 and total expenses are GHS90,000.",
    options: ["", "GHS60,000",
      "GHS240,000",
      "GHS90,000"],
answer: "GHS60,000"
  },
  {
    question: "What type of account is 'Accounts Payable'?",
    options: ["", "Liability account",
      "Asset account",
      "Revenue account"],
answer: "Liability account"
  },
  {
    question: "How would you treat a prepaid expense in the accounts?",
    options: ["", "Record as an asset until used",
      "Record as an expense immediately",
      "Ignore it"],
answer: "Record as an asset until used"
  },
  {
    question: "Define the term 'drawings' in accounting.",
    options: ["", "Owner's withdrawal of business assets for personal use",
      "Payment of salaries",
      "Money borrowed from bank"],
answer: "Owner's withdrawal of business assets for personal use"
  },
  {
    question: "A company has sales of GHS80,000, returns inwards GHS2,000, purchases GHS40,000, and returns outwards GHS1,000. Calculate net sales.",
    options: ["", "GHS78,000",
      "GHS79,000",
      "GHS81,000"],
answer: "GHS78,000"
  },
  {
    question: "What is the function of the petty cash book?",
    options: ["", "To record small cash payments",
      "To record sales",
      "To prepare invoices"],
answer: "To record small cash payments"
  },
  {
    question: "Calculate the accrued interest if a loan of GHS10,000 attracts 6% interest annually for 3 months.",
    options: ["", "GHS150",
      "GHS600",
      "GHS500"],
answer: "GHS150"
  },
  {
    question: "What is the purpose of depreciation accounting?",
    options: ["", "To allocate the cost of an asset over its useful life",
      "To increase asset value",
      "To record income"],
answer: "To allocate the cost of an asset over its useful life"
  },
  {
    question: "Define the term 'provision' in accounting.",
    options: ["", "An estimated liability of uncertain amount",
      "A prepaid expense",
      "A fixed asset"],
answer: "An estimated liability of uncertain amount"
  },
  {
    question: "Explain the effect of bad debts on financial statements.",
    options: ["", "Decrease assets and decrease profit",
      "Increase assets and increase profit",
      "No effect"],
answer: "Decrease assets and decrease profit"
  },
  {
    question: "What is the role of the general journal in accounting?",
    options: ["", "To record transactions not recorded in special journals",
      "To record cash transactions only",
      "To prepare financial statements"],
answer: "To record transactions not recorded in special journals"
  },
  {
    question: "Calculate the book value of an asset bought for GHS20,000 with accumulated depreciation of GHS4,000.",
    options: ["", "GHS16,000",
      "GHS24,000",
      "GHS20,000"],
answer: "GHS16,000"
  },
  {
    question: "What is the difference between current and fixed assets?",
    options: ["", "Current assets are short-term, fixed assets are long-term",
      "Current assets are non-physical, fixed assets are physical",
      "No difference"],
answer: "Current assets are short-term, fixed assets are long-term"
  },
  {
    question: "Calculate net cash flow given cash inflows GHS100,000 and cash outflows GHS70,000.",
    options: ["", "GHS30,000",
      "GHS170,000",
      "GHS70,000"],
answer: "GHS30,000"
  },
  {
    question: "Explain the accounting treatment of capital introduced by the owner.",
    options: ["", "Increase assets and increase capital account",
      "Increase expenses",
      "Decrease assets"],
answer: "Increase assets and increase capital account"
  },
  {
    question: "Which financial statement shows the financial position of a business at a particular point in time?",
    options: ["", "Balance Sheet",
      "Income Statement",
      "Cash Flow Statement"],
answer: "Balance Sheet"
  },
  {
    question: "What is meant by the term 'liquidity' in accounting?",
    options: ["", "Ability to meet short-term obligations",
      "Total assets owned",
      "Long-term solvency"],
answer: "Ability to meet short-term obligations"
  },
  {
    question: "Calculate the straight-line depreciation on an asset costing GHS12,000 with a useful life of 4 years and no residual value.",
    options: ["", "GHS3,000 per year",
      "GHS4,000 per year",
      "GHS2,000 per year"],
answer: "GHS3,000 per year"
  },
  {
    question: "What is a suspense account used for?",
    options: ["", "To temporarily hold unclassified or doubtful transactions",
      "To record depreciation",
      "To summarize sales"],
answer: "To temporarily hold unclassified or doubtful transactions"
  },
  {
    question: "How is an error of omission corrected in accounting records?",
    options: ["", "By making the correct entry in the appropriate ledger",
      "By ignoring it",
      "By increasing assets"],
answer: "By making the correct entry in the appropriate ledger"
  },
  {
    question: "Calculate the adjusted closing balance of the cash book if the unadjusted balance is GHS5,000, bank charges are GHS200, and a direct deposit of GHS300 was not recorded.",
    options: ["", "GHS5,100",
      "GHS5,100",
      "GHS4,500"],
answer: "GHS5,100"
  },
  {
    question: "What is meant by 'deferred income'?",
    options: ["", "Income received in advance and not yet earned",
      "Income earned but not received",
      "Income earned and received"],
answer: "Income received in advance and not yet earned"
  },
  {
    question: "A company has total debtors of GHS15,000 and credit sales of GHS120,000. Calculate the debtor's turnover ratio.",
    options: ["", "8 times",
      "0.125 times",
      "10 times"],
answer: "8 times"
  },
  {
    question: "What is the purpose of the income statement?",
    options: ["", "To show the company's revenues and expenses over a period, resulting in profit or loss",
      "To show financial position at a point in time",
      "To record cash transactions"],
answer: "To show the company's revenues and expenses over a period, resulting in profit or loss"
  },
  {
    question: "Explain the meaning of 'capital expenditure'.",
    options: ["", "Expenditure that improves the value or life of an asset",
      "Expenditure on day-to-day running costs",
      "Expenditure on wages"],
answer: "Expenditure that improves the value or life of an asset"
  },
  {
    question: "Calculate profit if opening capital is GHS20,000, closing capital is GHS30,000, and drawings are GHS5,000.",
    options: ["", "GHS15,000",
      "GHS5,000",
      "GHS10,000"],
answer: "GHS15,000"
  },
  {
    question: "What does a credit balance in the purchases ledger control account indicate?",
    options: ["", "An overpayment or return to suppliers",
      "An amount owed to suppliers",
      "A payment due from customers"],
answer: "An overpayment or return to suppliers"
  },
  {
    question: "Describe the double entry principle.",
    options: ["", "Every transaction affects at least two accounts with equal debit and credit entries",
      "All transactions are recorded once",
      "Only assets are recorded"],
answer: "Every transaction affects at least two accounts with equal debit and credit entries"
  },
  {
    question: "A petty cash book has a balance of GHS200. Expenses of GHS80 and GHS50 were paid from it. What is the new balance?",
    options: ["", "GHS70",
      "GHS130",
      "GHS330"],
answer: "GHS70"
  },
  {
    question: "What is a trial balance?",
    options: ["", "A list of all ledger balances to check debits equal credits",
      "A financial statement",
      "A journal entry"],
answer: "A list of all ledger balances to check debits equal credits"
  },
  {
    question: "Define 'accrual accounting'.",
    options: ["", "Recording revenues and expenses when they are earned or incurred, regardless of cash flow",
      "Recording transactions only when cash changes hands",
      "Recording only assets"],
answer: "Recording revenues and expenses when they are earned or incurred, regardless of cash flow"
  },
  {
    question: "Calculate bad debt expense if total credit sales are GHS100,000 and bad debts are estimated at 3%.",
    options: ["", "GHS3,000",
      "GHS30,000",
      "GHS300"],
answer: "GHS3,000"
  },
  {
    question: "What is the effect of recording depreciation on financial statements?",
    options: ["", "Decrease assets and decrease profit",
      "Increase assets and profit",
      "No effect"],
answer: "Decrease assets and decrease profit"
  },
  {
    question: "Explain the difference between a ledger and a journal.",
    options: ["", "Journal is the original book of entry; ledger summarizes transactions by account",
      "Ledger is the original book of entry; journal summarizes transactions",
      "Both are the same"],
answer: "Journal is the original book of entry; ledger summarizes transactions by account"
  },
  {
    question: "A business made cash sales of GHS40,000 and credit sales of GHS60,000. Calculate total sales.",
    options: ["", "GHS100,000",
      "GHS60,000",
      "GHS40,000"],
answer: "GHS100,000"
  },
  {
    question: "Calculate the closing stock if opening stock was GHS10,000, purchases GHS40,000, and cost of goods sold GHS45,000.",
    options: ["", "GHS5,000",
      "GHS45,000",
      "GHS50,000"],
answer: "GHS5,000"
  },
  {
    question: "What is meant by 'capital' in accounting?",
    options: ["", "The owner's investment in the business",
      "Borrowed funds",
      "Sales revenue"],
answer: "The owner's investment in the business"
  },
  {
    question: "Calculate the depreciation using the reducing balance method at 20% on an asset costing GHS10,000 after 1 year.",
    options: ["", "GHS2,000",
      "GHS1,000",
      "GHS8,000"],
answer: "GHS2,000"
  },
  {
    question: "What is the main purpose of a balance sheet?",
    options: ["", "To show the financial position of a business at a specific date",
      "To show profit or loss over a period",
      "To record daily transactions"],
answer: "To show the financial position of a business at a specific date"
  },
  {
    question: "A company has a trial balance with debits GHS25,000 and credits GHS24,500. What does the difference of GHS500 represent?",
    options: ["", "Suspense account balance",
      "Profit",
      "Loss"],
answer: "Suspense account balance"
  },
  {
    question: "Calculate gross profit if sales are GHS150,000 and cost of goods sold is GHS90,000.",
    options: ["", "GHS60,000",
      "GHS240,000",
      "GHS90,000"],
answer: "GHS60,000"
  },
  {
    question: "What is meant by 'liabilities' in accounting?",
    options: ["", "Amounts owed by the business to others",
      "Resources owned by the business",
      "Owner's investment"],
answer: "Amounts owed by the business to others"
  },
  {
    question: "Calculate net profit if gross profit is GHS40,000 and operating expenses are GHS25,000.",
    options: ["", "GHS15,000",
      "GHS65,000",
      "GHS25,000"],
answer: "GHS15,000"
  },
  {
    question: "Explain the term 'accrued expenses'.",
    options: ["", "Expenses incurred but not yet paid",
      "Expenses paid in advance",
      "Expenses not incurred yet"],
answer: "Expenses incurred but not yet paid"
  },
  {
    question: "A cash book shows a balance of GHS3,200, and the bank statement shows GHS3,000. Bank charges of GHS50 are not recorded in the cash book. What is the adjusted cash book balance?",
    options: ["", "GHS3,150",
      "GHS3,250",
      "GHS3,000"],
answer: "GHS3,150"
  },
  {
    question: "Define 'accounts receivable'.",
    options: ["", "Money owed to the business by customers",
      "Money owed by the business to suppliers",
      "Owner's equity"],
answer: "Money owed to the business by customers"
  },
  {
    question: "Calculate the value of closing inventory if opening inventory is GHS5,000, purchases are GHS30,000, and cost of goods sold is GHS32,000.",
    options: ["", "GHS3,000",
      "GHS7,000",
      "GHS32,000"],
answer: "GHS3,000"
  },
  {
    question: "What is the purpose of a petty cash book?",
    options: ["", "To record small cash payments",
      "To record bank transactions",
      "To record credit sales"],
answer: "To record small cash payments"
  },
  {
    question: "What are intangible assets?",
    options: ["", "Non-physical assets like patents and trademarks",
      "Physical assets like machinery",
      "Cash and bank balances"],
answer: "Non-physical assets like patents and trademarks"
  },
  {
    question: "Explain 'owner's equity' in accounting.",
    options: ["", "Owner's investment plus retained earnings",
      "Loans owed by the business",
      "Cash on hand"],
answer: "Owner's investment plus retained earnings"
  },
  {
    question: "A business has fixed assets costing GHS50,000 and accumulated depreciation of GHS10,000. Calculate the net book value.",
    options: ["", "GHS40,000",
      "GHS60,000",
      "GHS10,000"],
answer: "GHS40,000"
  },
  {
    question: "What is the accounting equation?",
    options: ["", "Assets = Liabilities + Owner's Equity",
      "Assets = Revenue + Expenses",
      "Assets + Liabilities = Equity"],
answer: "Assets = Liabilities + Owner's Equity"
  },
  {
    question: "Calculate the amount of provision for bad debts if trade receivables are GHS20,000 and the provision rate is 5%.",
    options: ["", "GHS1,000",
      "GHS2,000",
      "GHS5,000"],
answer: "GHS1,000"
  },
  {
    question: "What is the difference between capital and revenue expenditure?",
    options: ["", "Capital expenditure improves asset life; revenue expenditure is day-to-day expense",
      "Capital expenditure is small; revenue expenditure is large",
      "Capital expenditure is recurring; revenue expenditure is not"],
answer: "Capital expenditure improves asset life; revenue expenditure is day-to-day expense"
  },
  {
    question: "Define 'double entry bookkeeping'.",
    options: ["", "Every transaction is recorded with equal debit and credit entries",
      "Only credit transactions are recorded",
      "Only debit transactions are recorded"],
answer: "Every transaction is recorded with equal debit and credit entries"
  },
  {
    question: "Explain what a ledger is.",
    options: ["", "A book where similar transactions are grouped and recorded",
      "The original book of entry",
      "A financial statement"],
answer: "A book where similar transactions are grouped and recorded"
  },
  {
    question: "A company purchased machinery for GHS100,000 with an estimated useful life of 10 years and no residual value. Calculate annual straight-line depreciation.",
    options: ["", "GHS10,000",
      "GHS5,000",
      "GHS20,000"],
answer: "GHS10,000"
  },
  {
    question: "What is meant by 'trial balance'?",
    options: ["", "A statement showing the debit and credit balances of ledger accounts to check equality",
      "A list of assets and liabilities",
      "A financial statement"],
answer: "A statement showing the debit and credit balances of ledger accounts to check equality"
  },
  {
    question: "What does a credit balance in the sales ledger control account signify?",
    options: ["", "Customer overpayment or credit note issued",
      "Money owed by customers",
      "Purchase return"],
answer: "Customer overpayment or credit note issued"
  },
  {
    question: "Calculate profit before tax if gross profit is GHS80,000, operating expenses are GHS40,000, and other income is GHS10,000.",
    options: ["", "GHS50,000",
      "GHS30,000",
      "GHS40,000"],
answer: "GHS50,000"
  },
  {
    question: "What is a bank reconciliation statement used for?",
    options: ["", "To reconcile differences between bank statement and cash book balances",
      "To calculate bank charges",
      "To summarize sales"],
answer: "To reconcile differences between bank statement and cash book balances"
  },
  {
    question: "Explain the term 'accruals'.",
    options: ["", "Expenses or revenues recognized before cash is received or paid",
      "Cash payments made in advance",
      "Income not earned"],
answer: "Expenses or revenues recognized before cash is received or paid"
  },
  {
    question: "Calculate net assets if total assets are GHS150,000 and total liabilities are GHS70,000.",
    options: ["", "GHS80,000",
      "GHS220,000",
      "GHS70,000"],
answer: "GHS80,000"
  },
  {
    question: "What are current liabilities?",
    options: ["", "Obligations payable within one year",
      "Long-term debts",
      "Owner's equity"],
answer: "Obligations payable within one year"
  },
  {
    question: "Calculate the gross profit margin if gross profit is GHS45,000 and sales revenue is GHS150,000.",
    options: ["", "30%",
      "25%",
      "35%"],
answer: "30%"
  },
  {
    question: "Explain the term 'capital expenditure'.",
    options: ["", "Spending on acquiring or improving fixed assets",
      "Day-to-day operational expenses",
      "Payments to suppliers"],
answer: "Spending on acquiring or improving fixed assets"
  },
  {
    question: "A business made sales of GHS200,000 with 5% VAT included. Calculate the VAT amount.",
    options: ["", "GHS9,523.81",
      "GHS10,000",
      "GHS5,000"],
answer: "GHS9,523.81"
  },
  {
    question: "What is the journal entry to record payment of salaries GHS5,000?",
    options: ["", "Debit Salaries Expense GHS5,000; Credit Cash GHS5,000",
      "Debit Cash GHS5,000; Credit Salaries Expense GHS5,000",
      "Debit Salaries Expense GHS5,000; Credit Salaries Payable GHS5,000"],
answer: "Debit Salaries Expense GHS5,000; Credit Cash GHS5,000"
  },
  {
    question: "Calculate the debtors turnover ratio if credit sales are GHS120,000 and average trade receivables are GHS30,000.",
    options: ["", "4 times",
      "0.25 times",
      "3 times"],
answer: "4 times"
  },
  {
    question: "Define 'accrued income'.",
    options: ["", "Income earned but not yet received",
      "Income received in advance",
      "Expenses not yet paid"],
answer: "Income earned but not yet received"
  },
  {
    question: "What is the main objective of preparing a trial balance?",
    options: ["", "To ensure total debits equal total credits",
      "To prepare the income statement",
      "To calculate profit"],
answer: "To ensure total debits equal total credits"
  },
  {
    question: "Calculate closing stock if opening stock is GHS10,000, purchases GHS50,000, sales GHS70,000 and gross profit margin is 40%.",
    options: ["", "GHS18,000",
      "GHS20,000",
      "GHS22,000"],
answer: "GHS18,000"
  },
  {
    question: "What is the difference between 'provision' and 'reserve'?",
    options: ["", "Provision is for known liabilities; reserve is for unknown contingencies",
      "Provision is for future profits; reserve is for losses",
      "Provision is a liability; reserve is an asset"],
answer: "Provision is for known liabilities; reserve is for unknown contingencies"
  },
  {
    question: "Calculate the straight-line depreciation for an asset costing GHS60,000 with a residual value of GHS6,000 and useful life of 6 years.",
    options: ["", "GHS9,000",
      "GHS10,000",
      "GHS8,000"],
answer: "GHS9,000"
  },
  {
    question: "What does a debit balance in the purchases ledger control account indicate?",
    options: ["", "Overpayment to suppliers",
      "Amounts owed to suppliers",
      "Income received"],
answer: "Overpayment to suppliers"
  },
  {
    question: "Define 'working capital'.",
    options: ["", "Current assets minus current liabilities",
      "Total assets minus total liabilities",
      "Cash balance only"],
answer: "Current assets minus current liabilities"
  },
  {
    question: "Explain the term 'bad debts'.",
    options: ["", "Debts that are unlikely to be collected",
      "All debts owed to the business",
      "Loans taken by the business"],
answer: "Debts that are unlikely to be collected"
  },
  {
    question: "A company received GHS500 in cash and issued a receipt. What is the double entry?",
    options: ["", "Debit Cash GHS500; Credit Sales GHS500",
      "Debit Sales GHS500; Credit Cash GHS500",
      "Debit Cash GHS500; Credit Debtors GHS500"],
answer: "Debit Cash GHS500; Credit Sales GHS500"
  },
  {
    question: "Calculate the cost of goods sold if opening stock is GHS8,000, purchases GHS42,000, and closing stock GHS12,000.",
    options: ["", "GHS38,000",
      "GHS50,000",
      "GHS32,000"],
answer: "GHS38,000"
  },
  {
    question: "What is the role of the petty cashier?",
    options: ["", "To manage small day-to-day cash expenses",
      "To prepare financial statements",
      "To record credit sales"],
answer: "To manage small day-to-day cash expenses"
  },
  {
    question: "Explain the purpose of the income and expenditure account for clubs.",
    options: ["", "To show surplus or deficit for the period",
      "To record all cash received",
      "To summarize assets"],
answer: "To show surplus or deficit for the period"
  },
  {
    question: "Calculate the net profit if total income is GHS120,000 and total expenses GHS85,000.",
    options: ["", "GHS35,000",
      "GHS205,000",
      "GHS45,000"],
answer: "GHS35,000"
  },
  {
    question: "What is the purpose of the suspense account?",
    options: ["", "To temporarily hold discrepancies in trial balance",
      "To record all expenses",
      "To hold capital investments"],
answer: "To temporarily hold discrepancies in trial balance"
  },
  {
    question: "A bank statement shows GHS2,000, cash book shows GHS1,850, and unpresented cheques amount to GHS100. What is the adjusted cash book balance after bank charges of GHS50?",
    options: ["", "GHS1,800",
      "GHS2,050",
      "GHS1,900"],
answer: "GHS1,800"
  },
  {
    question: "Define 'ledger control account'.",
    options: ["", "A summary account of individual accounts in a ledger",
      "An account recording purchases only",
      "An account used only in bank reconciliation"],
answer: "A summary account of individual accounts in a ledger"
  },
  {
    question: "What are the components of a manufacturing account?",
    options: ["", "Direct materials, direct labor, factory overheads",
      "Sales revenue and expenses",
      "Assets and liabilities"],
answer: "Direct materials, direct labor, factory overheads"
  },
  {
    question: "Explain the term 'unrealized profit'.",
    options: ["", "Profit included in stock not yet sold",
      "Profit realized from sales",
      "Profit on cash sales only"],
answer: "Profit included in stock not yet sold"
  },
  {
    question: "Calculate the inventory turnover ratio if cost of goods sold is GHS120,000 and average inventory is GHS30,000.",
    options: ["", "4 times",
      "0.25 times",
      "3 times"],
answer: "4 times"
  },
  {
    question: "What is the purpose of a bank reconciliation statement?",
    options: ["", "To reconcile the cash book balance with the bank statement balance",
      "To record cash sales",
      "To summarize purchases"],
answer: "To reconcile the cash book balance with the bank statement balance"
  },
  {
    question: "A business issues credit notes worth GHS2,000 to customers. What is the correct journal entry?",
    options: ["", "Debit Sales Returns GHS2,000; Credit Debtors GHS2,000",
      "Debit Debtors GHS2,000; Credit Sales GHS2,000",
      "Debit Cash GHS2,000; Credit Sales GHS2,000"],
answer: "Debit Sales Returns GHS2,000; Credit Debtors GHS2,000"
  },
  {
    question: "Explain the purpose of the suspense account in accounting.",
    options: ["", "To temporarily record discrepancies in the trial balance",
      "To record expenses",
      "To record capital investments"],
answer: "To temporarily record discrepancies in the trial balance"
  },
  {
    question: "Calculate the bank overdraft balance if the cash book shows GHS4,000 and unpresented cheques total GHS6,000.",
    options: ["", "GHS2,000 overdraft",
      "GHS10,000 overdraft",
      "GHS4,000 overdraft"],
answer: "GHS2,000 overdraft"
  },
  {
    question: "What is the effect on the accounting equation when a business takes a loan of GHS10,000 from the bank?",
    options: ["", "Assets and liabilities increase by GHS10,000",
      "Assets decrease and liabilities increase",
      "Owner's equity increases"],
answer: "Assets and liabilities increase by GHS10,000"
  },
  {
    question: "Calculate the net realizable value of inventory if cost is GHS20,000 and estimated selling price is GHS18,000 with disposal costs GHS1,000.",
    options: ["", "GHS17,000",
      "GHS18,000",
      "GHS20,000"],
answer: "GHS17,000"
  },
  {
    question: "What type of account is 'Accumulated Depreciation'?",
    options: ["", "Contra asset account",
      "Liability account",
      "Expense account"],
answer: "Contra asset account"
  },
  {
    question: "Explain the term 'trial balance suspense'.",
    options: ["", "The amount needed to balance an unequal trial balance",
      "Capital invested",
      "Income earned but not received"],
answer: "The amount needed to balance an unequal trial balance"
  },
  {
    question: "Calculate the profit on disposal of an asset sold for GHS12,000, with a cost of GHS15,000 and accumulated depreciation of GHS5,000.",
    options: ["", "Loss of GHS2,000",
      "Profit of GHS2,000",
      "Profit of GHS8,000"],
answer: "Loss of GHS2,000"
  },
  {
    question: "Define 'owner's drawings'.",
    options: ["", "Withdrawals made by the owner from the business for personal use",
      "Capital invested in the business",
      "Business expenses"],
answer: "Withdrawals made by the owner from the business for personal use"
  },
  {
    question: "What is the journal entry to record accrued expenses of GHS1,500?",
    options: ["", "Debit Expense account GHS1,500; Credit Accrued expenses GHS1,500",
      "Debit Cash GHS1,500; Credit Expense account GHS1,500",
      "Debit Accrued expenses GHS1,500; Credit Expense account GHS1,500"],
answer: "Debit Expense account GHS1,500; Credit Accrued expenses GHS1,500"
  },
  {
    question: "Calculate the closing inventory if opening inventory is GHS5,000, purchases are GHS20,000, and cost of goods sold is GHS18,000.",
    options: ["", "GHS7,000", "GHS3,000", "GHS18,000", "GHS25,000"],
answer: "GHS7,000"
  },
  {
    question: "What is the effect on the accounting equation when the business pays off a GHS3,000 creditor?",
    options: ["", "Assets decrease and liabilities decrease",
      "Assets increase and liabilities increase",
      "Assets decrease and equity decreases"],
answer: "Assets decrease and liabilities decrease"
  },
  {
    question: "Prepare the journal entry for depreciation of GHS2,000 on machinery.",
    options: ["", "Debit Depreciation expense GHS2,000; Credit Accumulated depreciation GHS2,000",
      "Debit Machinery account GHS2,000; Credit Accumulated depreciation GHS2,000",
      "Debit Accumulated depreciation GHS2,000; Credit Depreciation expense GHS2,000"],
answer: "Debit Depreciation expense GHS2,000; Credit Accumulated depreciation GHS2,000"
  },
  {
    question: "Calculate the trade receivables turnover ratio given credit sales of GHS120,000 and average receivables of GHS15,000.",
    options: ["", "8 times", "12 times", "10 times", "6 times"],
answer: "8 times"
  },
  {
    question: "What is the journal entry to record payment of salaries GHS5,000?",
    options: ["", "Debit Salaries expense GHS5,000; Credit Cash GHS5,000",
      "Debit Cash GHS5,000; Credit Salaries expense GHS5,000",
      "Debit Salaries payable GHS5,000; Credit Cash GHS5,000"],
answer: "Debit Salaries expense GHS5,000; Credit Cash GHS5,000"
  },
  {
    question: "Calculate net profit if total revenue is GHS150,000, total expenses GHS110,000, and income tax is GHS10,000.",
    options: ["", "GHS30,000", "GHS40,000", "GHS50,000", "GHS60,000"],
answer: "GHS30,000"
  },
  {
    question: "Which book records all cash receipts and payments?",
    options: ["", "Cash book", "Sales journal", "Purchase journal", "General ledger"],
answer: "Cash book"
  },
  {
    question: "Calculate the value of goods sold on credit if total sales are GHS80,000 and cash sales are GHS30,000.",
    options: ["", "GHS50,000", "GHS110,000", "GHS30,000", "GHS80,000"],
answer: "GHS50,000"
  },
  {
    question: "What is the main purpose of the trial balance?",
    options: ["", "To check the equality of debits and credits",
      "To prepare the financial statements",
      "To record transactions"],
answer: "To check the equality of debits and credits"
  },
  {
    question: "Calculate the VAT on a sale of GHS12,000 with VAT rate of 12.5%.",
    options: ["", "GHS1,500", "GHS1,250", "GHS1,200", "GHS1,350"],
answer: "GHS1,500"
  },
  {
    question: "Prepare the journal entry for a credit purchase of inventory worth GHS8,000.",
    options: ["", "Debit Inventory GHS8,000; Credit Accounts Payable GHS8,000",
      "Debit Accounts Payable GHS8,000; Credit Inventory GHS8,000",
      "Debit Inventory GHS8,000; Credit Cash GHS8,000"],
answer: "Debit Inventory GHS8,000; Credit Accounts Payable GHS8,000"
  },
  {
    question: "Calculate gross profit if sales are GHS200,000 and cost of goods sold is GHS140,000.",
    options: ["", "GHS60,000", "GHS340,000", "GHS140,000", "GHS200,000"],
answer: "GHS60,000"
  },
  {
    question: "Define 'accrued income'.",
    options: ["", "Income earned but not yet received",
      "Income received in advance",
      "Income not yet earned"],
answer: "Income earned but not yet received"
  },
  {
    question: "What is the double entry for owner's capital introduction of GHS50,000?",
    options: ["", "Debit Cash GHS50,000; Credit Owner's Capital GHS50,000",
      "Debit Owner's Capital GHS50,000; Credit Cash GHS50,000",
      "Debit Owner's Drawings GHS50,000; Credit Cash GHS50,000"],
answer: "Debit Cash GHS50,000; Credit Owner's Capital GHS50,000"
  },
  {
    question: "Calculate the provision for bad debts if total debtors are GHS15,000 and provision percentage is 5%.",
    options: ["", "GHS750", "GHS300", "GHS1,500", "GHS7500"],
answer: "GHS750"
  },
  {
    question: "What type of account is 'Prepaid expenses'?",
    options: ["", "Asset", "Liability", "Revenue", "Expense"],
answer: "Asset"
  },
  {
    question: "Calculate the closing balance of petty cash if opening balance was GHS500, expenses paid GHS400 and cash received GHS200.",
    options: ["", "GHS300", "GHS100", "GHS200", "GHS700"],
answer: "GHS300"
  },
  {
    question: "Explain the term 'capital expenditure'.",
    options: ["", "Expenditure on acquiring or improving fixed assets",
      "Expenditure on daily running expenses",
      "Expenditure on salaries"],
answer: "Expenditure on acquiring or improving fixed assets"
  },
  {
    question: "Prepare the journal entry for the purchase of a vehicle costing GHS25,000 by cheque.",
    options: ["", "Debit Vehicles GHS25,000; Credit Bank GHS25,000",
      "Debit Vehicles GHS25,000; Credit Cash GHS25,000",
      "Debit Bank GHS25,000; Credit Vehicles GHS25,000"],
answer: "Debit Vehicles GHS25,000; Credit Bank GHS25,000"
  },
  {
    question: "Calculate the cost of goods sold using the formula: Opening Inventory + Purchases - Closing Inventory, if Opening Inventory GHS4,000, Purchases GHS16,000 and Closing Inventory GHS5,000.",
    options: ["", "GHS15,000", "GHS25,000", "GHS20,000", "GHS17,000"],
answer: "GHS15,000"
  },
  {
    question: "What is the meaning of 'liquidity' in financial accounting?",
    options: ["", "Ability to meet short-term obligations",
      "Ability to earn profit",
      "Long-term solvency"],
answer: "Ability to meet short-term obligations"
  },
  {
    question: "Calculate the depreciation expense using straight-line method for an asset costing GHS50,000 with a residual value of GHS5,000 and useful life of 9 years.",
    options: ["", "GHS5,000", "GHS4,500", "GHS6,000", "GHS7,000"],
answer: "GHS5,000"
  },
  {
    question: "Which document records all sales made on credit?",
    options: ["", "Sales journal", "Cash book", "Purchase journal", "General ledger"],
answer: "Sales journal"
  },
  {
    question: "Explain the purpose of a bank reconciliation statement.",
    options: ["", "To reconcile the bank statement balance with the cash book balance",
      "To record bank transactions",
      "To prepare trial balance"],
answer: "To reconcile the bank statement balance with the cash book balance"
  },
  {
    question: "Calculate the net book value of an asset costing GHS30,000 with accumulated depreciation of GHS12,000.",
    options: ["", "GHS18,000", "GHS42,000", "GHS30,000", "GHS12,000"],
answer: "GHS18,000"
  },
  {
    question: "Prepare the journal entry to record a bad debt expense of GHS1,200.",
    options: ["", "Debit Bad debts expense GHS1,200; Credit Accounts receivable GHS1,200",
      "Debit Accounts receivable GHS1,200; Credit Bad debts expense GHS1,200",
      "Debit Bad debts expense GHS1,200; Credit Cash GHS1,200"],
answer: "Debit Bad debts expense GHS1,200; Credit Accounts receivable GHS1,200"
  },
  {
    question: "Calculate the net profit from the following: Sales GHS100,000; Cost of sales GHS60,000; Operating expenses GHS25,000; Interest expense GHS5,000.",
    options: ["", "GHS10,000", "GHS15,000", "GHS20,000", "GHS25,000"],
answer: "GHS10,000"
  },
  {
    question: "What accounting concept requires that revenue be recorded when earned and expenses when incurred?",
    options: ["", "Accrual concept",
      "Going concern concept",
      "Matching concept"],
answer: "Accrual concept"
  },
  {
    question: "Define 'liabilities' in accounting terms.",
    options: ["", "Amounts owed by the business",
      "Assets owned by the business",
      "Owner's equity"],
answer: "Amounts owed by the business"
  },
  {
    question: "Calculate the owner's equity if assets total GHS150,000 and liabilities total GHS90,000.",
    options: ["", "GHS60,000", "GHS240,000", "GHS90,000", "GHS150,000"],
answer: "GHS60,000"
  },
  {
    question: "Prepare the journal entry for the purchase of office supplies on credit for GHS3,000.",
    options: ["", "Debit Office supplies GHS3,000; Credit Accounts payable GHS3,000",
      "Debit Accounts payable GHS3,000; Credit Office supplies GHS3,000",
      "Debit Office supplies GHS3,000; Credit Cash GHS3,000"],
answer: "Debit Office supplies GHS3,000; Credit Accounts payable GHS3,000"
  },
  {
    question: "Calculate the profit margin percentage if net profit is GHS25,000 and sales revenue is GHS100,000.",
    options: ["", "25%", "20%", "30%", "15%"],
answer: "25%"
  },
  {
    question: "What does the term 'capital' refer to in accounting?",
    options: ["", "Owner's investment in the business",
      "Business debts",
      "Business expenses"],
answer: "Owner's investment in the business"
  },
  {
    question: "Calculate the amount of bad debt provision if debtors amount to GHS10,000 and the provision rate is 3%.",
    options: ["", "GHS300", "GHS3,000", "GHS30", "GHS100"],
answer: "GHS300"
  },
  {
    question: "What is the main function of a ledger in accounting?",
    options: ["", "To summarize and classify transactions",
      "To record transactions first",
      "To prepare trial balance"],
answer: "To summarize and classify transactions"
  },
  {
    question: "Calculate the total expenses given: Rent GHS8,000; Salaries GHS15,000; Utilities GHS4,000; Depreciation GHS3,000.",
    options: ["", "GHS30,000", "GHS25,000", "GHS26,000", "GHS29,000"],
answer: "GHS30,000"
  },
  {
    question: "Explain the meaning of 'double entry system' in accounting.",
    options: ["", "Every transaction affects two accounts with equal debit and credit",
      "Each transaction is recorded once",
      "Only cash transactions are recorded"],
answer: "Every transaction affects two accounts with equal debit and credit"
  },
  {
    question: "What type of account is 'accumulated depreciation'?",
    options: ["", "Contra asset account", "Expense account", "Liability account", "Revenue account"],
answer: "Contra asset account"
  },
  {
    question: "Calculate the value of stock at the end of the period using FIFO if the following purchases were made: 100 units at GHS5, 200 units at GHS6, and 150 units sold.",
    options: ["", "GHS800", "GHS750", "GHS900", "GHS850"],
answer: "GHS800"
  },
  {
    question: "Prepare a bank reconciliation statement showing a cash book balance of GHS15,000, outstanding checks of GHS1,200, and deposits in transit of GHS800.",
    options: ["", "Adjusted bank balance is GHS14,600",
      "Adjusted bank balance is GHS16,000",
      "Adjusted bank balance is GHS15,800"],
answer: "Adjusted bank balance is GHS14,600"
  },
  {
    question: "Calculate the return on capital employed (ROCE) if net profit is GHS40,000 and capital employed is GHS200,000.",
    options: ["", "20%", "25%", "15%", "30%"],
answer: "20%"
  },
  {
    question: "What is the purpose of a suspense account?",
    options: ["", "To temporarily hold doubtful or unclear transactions",
      "To record expenses",
      "To record income"],
answer: "To temporarily hold doubtful or unclear transactions"
  },
  {
    question: "Prepare the journal entry to correct an error of GHS500 overstatement of sales revenue.",
    options: ["", "Debit Sales GHS500; Credit Suspense account GHS500",
      "Debit Suspense account GHS500; Credit Sales GHS500",
      "Debit Sales GHS500; Credit Purchases GHS500"],
answer: "Debit Sales GHS500; Credit Suspense account GHS500"
  },
  {
    question: "Calculate the accruals for utilities if the expense incurred during the period is GHS1,500 but only GHS1,200 was paid.",
    options: ["", "GHS300", "GHS1,500", "GHS1,200", "GHS0"],
answer: "GHS300"
  },
  {
    question: "What is the difference between capital and revenue expenditure?",
    options: ["", "Capital expenditure is for assets; revenue expenditure is for running costs",
      "Capital expenditure is small; revenue expenditure is large",
      "Capital expenditure is recurring; revenue expenditure is not"],
answer: "Capital expenditure is for assets; revenue expenditure is for running costs"
  },
  {
    question: "Calculate the capital employed if total assets are GHS500,000 and current liabilities are GHS120,000.",
    options: ["", "GHS380,000", "GHS620,000", "GHS500,000", "GHS120,000"],
answer: "GHS380,000"
  },
  {
    question: "Prepare the journal entry for the payment of a creditor GHS7,000 by cheque.",
    options: ["", "Debit Accounts payable GHS7,000; Credit Bank GHS7,000",
      "Debit Bank GHS7,000; Credit Accounts payable GHS7,000",
      "Debit Cash GHS7,000; Credit Accounts payable GHS7,000"],
answer: "Debit Accounts payable GHS7,000; Credit Bank GHS7,000"
  },
  {
    question: "Calculate the net assets if total assets are GHS350,000 and total liabilities GHS150,000.",
    options: ["", "GHS200,000", "GHS500,000", "GHS350,000", "GHS150,000"],
answer: "GHS200,000"
  },
  {
    question: "What is the normal balance of a liability account?",
    options: ["", "Credit",
      "Debit",
      "Zero"],
answer: "Credit"
  },
  {
    question: "Calculate the cost of goods manufactured if raw materials used are GHS30,000, direct labor GHS20,000, and manufacturing overhead GHS10,000.",
    options: ["", "GHS60,000", "GHS50,000", "GHS40,000", "GHS70,000"],
answer: "GHS60,000"
  },
  {
    question: "Define the term 'fixed assets'.",
    options: ["", "Assets used for long-term business operations",
      "Assets held for resale",
      "Current assets"],
answer: "Assets used for long-term business operations"
  },
  {
    question: "Calculate the working capital if current assets are GHS80,000 and current liabilities are GHS50,000.",
    options: ["", "GHS30,000", "GHS130,000", "GHS50,000", "GHS80,000"],
answer: "GHS30,000"
  },
  {
    question: "What is the effect on the accounting equation when equipment is purchased for cash?",
    options: ["", "Assets increase and decrease by the same amount",
      "Assets increase and equity increases",
      "Liabilities increase and assets decrease"],
answer: "Assets increase and decrease by the same amount"
  },
  {
    question: "Explain the matching concept in accounting.",
    options: ["", "Expenses should be matched with the revenue they helped generate",
      "Assets should be matched with liabilities",
      "Capital should be matched with drawings"],
answer: "Expenses should be matched with the revenue they helped generate"
  },
  {
    question: "Calculate the inventory turnover ratio if cost of goods sold is GHS180,000 and average inventory is GHS30,000.",
    options: ["", "6 times", "5 times", "4 times", "3 times"],
answer: "6 times"
  },
  {
    question: "What is a contra entry in accounting?",
    options: ["", "A transaction involving both debit and credit in cash and bank accounts",
      "An error in recording transactions",
      "A transaction involving only cash account"],
answer: "A transaction involving both debit and credit in cash and bank accounts"
  },
  {
    question: "Calculate the depreciation using reducing balance method if the cost is GHS40,000, rate 10%, and accumulated depreciation is GHS5,000.",
    options: ["", "GHS3,500", "GHS4,000", "GHS3,000", "GHS3,000"],
answer: "GHS3,500"
  },
  {
    question: "Prepare the journal entry to record accrued expenses of GHS2,000.",
    options: ["", "Debit Expense GHS2,000; Credit Accrued expenses GHS2,000",
      "Debit Accrued expenses GHS2,000; Credit Expense GHS2,000",
      "Debit Cash GHS2,000; Credit Expense GHS2,000"],
answer: "Debit Expense GHS2,000; Credit Accrued expenses GHS2,000"
  },
  {
    question: "What is the normal balance side of an expense account?",
    options: ["", "Debit", "Credit", "Zero", "Both"],
answer: "Debit"
  },
  {
    question: "Calculate the net sales if gross sales are GHS120,000 and sales returns are GHS10,000.",
    options: ["", "GHS110,000", "GHS130,000", "GHS120,000", "GHS100,000"],
answer: "GHS110,000"
  },
  {
    question: "What does the accounting equation represent?",
    options: ["", "Assets = Liabilities + Capital",
      "Assets = Revenue - Expenses",
      "Assets = Liabilities - Capital"],
answer: "Assets = Liabilities + Capital"
  },
  {
    question: "Calculate the capital employed if total assets are GHS250,000 and total liabilities are GHS100,000.",
    options: ["", "GHS150,000", "GHS350,000", "GHS100,000", "GHS250,000"],
answer: "GHS150,000"
  },
  {
    question: "Which book is used to record all cash receipts and payments?",
    options: ["", "Cash Book", "Journal", "Ledger", "Petty Cash Book"],
answer: "Cash Book"
  },
  {
    question: "If purchases amount to GHS50,000, sales GHS80,000, and closing stock GHS10,000, calculate cost of goods sold.",
    options: ["", "GHS40,000",
      "GHS70,000",
      "GHS90,000"],
answer: "GHS40,000"
  },
  {
    question: "What is the effect on the accounting equation when the owner withdraws cash for personal use?",
    options: ["", "Assets and Capital decrease",
      "Assets and Liabilities increase",
      "Assets increase and Capital decreases"],
answer: "Assets and Capital decrease"
  },
  {
    question: "Define depreciation.",
    options: ["", "Allocation of cost of a fixed asset over its useful life",
      "Increase in asset value",
      "Loss due to theft"],
answer: "Allocation of cost of a fixed asset over its useful life"
  },
  {
    question: "Calculate net profit if total revenue is GHS100,000 and total expenses are GHS60,000.",
    options: ["", "GHS40,000",
      "GHS160,000",
      "GHS60,000"],
answer: "GHS40,000"
  },
  {
    question: "What is the purpose of a trial balance?",
    options: ["", "To check the equality of debit and credit balances",
      "To prepare the income statement",
      "To record transactions"],
answer: "To check the equality of debit and credit balances"
  },
  {
    question: "Prepare the journal entry for the purchase of inventory on credit for GHS5,000.",
    options: ["", "Debit Inventory GHS5,000; Credit Accounts Payable GHS5,000",
      "Debit Accounts Payable GHS5,000; Credit Inventory GHS5,000",
      "Debit Cash GHS5,000; Credit Inventory GHS5,000"],
answer: "Debit Inventory GHS5,000; Credit Accounts Payable GHS5,000"
  },
  {
    question: "Calculate closing capital if opening capital is GHS60,000, net profit GHS15,000, and drawings GHS5,000.",
    options: ["", "GHS70,000",
      "GHS80,000",
      "GHS65,000"],
answer: "GHS70,000"
  },
  {
    question: "Which financial statement shows the financial position of a business at a given date?",
    options: ["", "Balance Sheet",
      "Income Statement",
      "Cash Flow Statement"],
answer: "Balance Sheet"
  },
  {
    question: "What is goodwill in accounting?",
    options: ["", "Intangible asset representing business reputation",
      "Physical asset",
      "Liability"],
answer: "Intangible asset representing business reputation"
  },
  {
    question: "Define accrual basis of accounting.",
    options: ["", "Transactions are recorded when they occur, not when cash is received or paid",
      "Transactions are recorded only when cash is received or paid",
      "Only revenues are recorded"],
answer: "Transactions are recorded when they occur, not when cash is received or paid"
  },
  {
    question: "Calculate gross profit if sales are GHS200,000 and cost of goods sold is GHS120,000.",
    options: ["", "GHS80,000",
      "GHS320,000",
      "GHS120,000"],
answer: "GHS80,000"
  },
  {
    question: "Which of the following is NOT a current asset?",
    options: ["", "Machinery",
      "Cash",
      "Inventory"],
answer: "Machinery"
  },
  {
    question: "Prepare the journal entry to record depreciation of GHS3,000 on equipment.",
    options: ["", "Debit Depreciation Expense GHS3,000; Credit Accumulated Depreciation GHS3,000",
      "Debit Equipment GHS3,000; Credit Depreciation Expense GHS3,000",
      "Debit Accumulated Depreciation GHS3,000; Credit Equipment GHS3,000"],
answer: "Debit Depreciation Expense GHS3,000; Credit Accumulated Depreciation GHS3,000"
  },
  {
    question: "Define the term 'liabilities'.",
    options: ["", "Obligations or debts owed by the business",
      "Resources owned by the business",
      "Owner's investment"],
answer: "Obligations or debts owed by the business"
  },
  {
    question: "What is petty cash used for?",
    options: ["", "Small daily expenses",
      "Large purchases",
      "Paying salaries"],
answer: "Small daily expenses"
  },
  {
    question: "Calculate the bank reconciliation if cash book balance is GHS10,000 and outstanding checks are GHS1,500.",
    options: ["", "GHS8,500",
      "GHS11,500",
      "GHS10,000"],
answer: "GHS8,500"
  },
  {
    question: "What is the primary purpose of an income statement?",
    options: ["", "To show profit or loss over a period",
      "To show assets and liabilities",
      "To record transactions"],
answer: "To show profit or loss over a period"
  },
  {
    question: "Prepare the ledger entry for credit sales of GHS15,000.",
    options: ["", "Debit Accounts Receivable GHS15,000; Credit Sales GHS15,000",
      "Debit Sales GHS15,000; Credit Accounts Receivable GHS15,000",
      "Debit Cash GHS15,000; Credit Sales GHS15,000"],
answer: "Debit Accounts Receivable GHS15,000; Credit Sales GHS15,000"
  },
  {
    question: "Define the term 'capital expenditure'.",
    options: ["", "Expenditure on acquiring or improving fixed assets",
      "Day-to-day operational expenses",
      "Expenses that are recurring"],
answer: "Expenditure on acquiring or improving fixed assets"
  },
  {
    question: "Calculate gross profit margin if gross profit is GHS50,000 and sales are GHS250,000.",
    options: ["", "20%",
      "25%",
      "15%"],
answer: "20%"
  },
  {
    question: "What is the effect of recording accrued income?",
    options: ["", "Assets increase and income increases",
      "Assets decrease and income decreases",
      "Liabilities increase"],
answer: "Assets increase and income increases"
  },
  {
    question: "What type of account is 'Drawings'?",
    options: ["", "Contra Capital Account",
      "Asset Account",
      "Liability Account"],
answer: "Contra Capital Account"
  },
  {
    question: "Calculate the debtors turnover period if credit sales are GHS180,000 and average debtors GHS15,000.",
    options: ["", "30 days",
      "45 days",
      "60 days"],
answer: "30 days"
  },
  {
    question: "Define 'provision for doubtful debts'.",
    options: ["", "Estimated amount of receivables unlikely to be collected",
      "Actual bad debts written off",
      "Cash received from debtors"],
answer: "Estimated amount of receivables unlikely to be collected"
  },
  {
    question: "What is the normal balance of a capital account?",
    options: ["", "Credit",
      "Debit",
      "Zero"],
answer: "Credit"
  },
  {
    question: "Calculate net assets if total assets are GHS500,000 and total liabilities GHS200,000.",
    options: ["", "GHS300,000",
      "GHS700,000",
      "GHS200,000"],
answer: "GHS300,000"
  },
  {
    question: "What is a suspense account used for?",
    options: ["", "To temporarily hold unclassified or uncertain transactions",
      "To record cash transactions",
      "To balance the trial balance permanently"],
answer: "To temporarily hold unclassified or uncertain transactions"
  },
  {
    question: "Explain the term 'double entry'.",
    options: ["", "Every transaction affects at least two accounts with equal debit and credit",
      "Recording only debit entries",
      "Recording only credit entries"],
answer: "Every transaction affects at least two accounts with equal debit and credit"
  },
{
  question: "What is the purpose of adjusting entries?",
  options: ["", "To update accounts before preparing financial statements",
    "To record cash transactions",
    "To close temporary accounts"],
answer: "To update accounts before preparing financial statements"
},
{
  question: "Calculate the VAT payable if sales are GHS120,000 and VAT rate is 15%.",
  options: ["", "GHS18,000",
    "GHS8,000",
    "GHS15,000"],
answer: "GHS18,000"
},
{
  question: "What is the effect of a credit purchase on the accounting equation?",
  options: ["", "Assets and Liabilities increase",
    "Assets and Capital increase",
    "Liabilities and Capital decrease"],
answer: "Assets and Liabilities increase"
},
{
  question: "Which account is credited when a business pays off its accounts payable?",
  options: ["", "Cash",
    "Accounts Payable",
    "Purchases"],
answer: "Cash"
},
{
  question: "Calculate depreciation using the straight-line method for an asset costing GHS50,000 with a useful life of 10 years and residual value of GHS5,000.",
  options: ["", "GHS4,500 per year",
    "GHS5,000 per year",
    "GHS45,000 per year"],
answer: "GHS4,500 per year"
},
{
  question: "Explain the term 'contra entry'.",
  options: ["", "An entry that involves both debit and credit to cash and bank accounts",
    "Recording of expenses",
    "Transfer of profits"],
answer: "An entry that involves both debit and credit to cash and bank accounts"
},
{
  question: "If opening stock is GHS20,000, purchases GHS80,000, and closing stock GHS25,000, calculate cost of goods sold.",
  options: ["", "GHS75,000",
    "GHS85,000",
    "GHS95,000"],
answer: "GHS75,000"
},
{
  question: "What is the normal balance of the sales account?",
  options: ["", "Credit",
    "Debit",
    "Zero"],
answer: "Credit"
},
{
  question: "Describe the users of accounting information and their primary needs.",
  options: ["", "Owners need profit info; creditors need solvency info; management needs control info",
    "Only management needs accounting info",
    "Government only"],
answer: "Owners need profit info; creditors need solvency info; management needs control info"
},
[
  {
    question: "Define the term 'trial balance'.",
    options: ["", "A statement showing debit and credit balances to check equality",
      "A list of all cash transactions",
      "An account of expenses only"],
answer: "A statement showing debit and credit balances to check equality"
  },
  {
    question: "Calculate the adjusted net profit if the unadjusted profit is GHS50,000 and depreciation of GHS5,000 is charged.",
    options: ["", "GHS45,000",
      "GHS55,000",
      "GHS50,000"],
answer: "GHS45,000"
  },
  {
    question: "Which book of original entry records credit sales?",
    options: ["", "Sales Journal",
      "Purchases Journal",
      "Cash Book"],
answer: "Sales Journal"
  },
  {
    question: "Explain the term 'double entry principle'.",
    options: ["", "Every transaction affects at least two accounts with equal debit and credit",
      "Only cash transactions are recorded",
      "Every transaction is recorded once"],
answer: "Every transaction affects at least two accounts with equal debit and credit"
  },
  {
    question: "What is the purpose of a petty cash book?",
    options: ["", "To record small day-to-day expenses",
      "To record sales",
      "To record purchases"],
answer: "To record small day-to-day expenses"
  },
  {
    question: "Calculate VAT on a sale of GHS30,000 at a rate of 12.5%.",
    options: ["", "GHS3,750",
      "GHS2,500",
      "GHS4,000"],
answer: "GHS3,750"
  },
  {
    question: "What effect does payment of salaries have on the accounting equation?",
    options: ["", "Assets decrease and expenses increase",
      "Assets increase and liabilities decrease",
      "Liabilities increase"],
answer: "Assets decrease and expenses increase"
  },
  {
    question: "Define 'accrued expenses'.",
    options: ["", "Expenses incurred but not yet paid",
      "Expenses paid in advance",
      "Expenses budgeted for next year"],
answer: "Expenses incurred but not yet paid"
  },
  {
    question: "Which of the following is a qualitative characteristic of accounting information?",
    options: ["", "Relevance",
      "Size",
      "Quantity"],
answer: "Relevance"
  },
  {
    question: "Calculate closing capital if opening capital is GHS100,000, net profit GHS20,000, and drawings GHS15,000.",
    options: ["", "GHS105,000",
      "GHS135,000",
      "GHS85,000"],
answer: "GHS105,000"
  },
  {
    question: "Which ledger division contains all personal accounts?",
    options: ["", "Sales ledger",
      "Purchase ledger",
      "General ledger"],
answer: "Sales ledger"
  },
  {
    question: "What does the term 'capital expenditure' refer to?",
    options: ["", "Expenditure on acquiring fixed assets",
      "Daily operating expenses",
      "Salaries and wages"],
answer: "Expenditure on acquiring fixed assets"
  },
  {
    question: "Prepare the journal entry for the purchase of inventory on credit for GHS10,000.",
    options: ["", "Debit Inventory GHS10,000; Credit Accounts Payable GHS10,000",
      "Debit Cash GHS10,000; Credit Inventory GHS10,000",
      "Debit Accounts Payable GHS10,000; Credit Inventory GHS10,000"],
answer: "Debit Inventory GHS10,000; Credit Accounts Payable GHS10,000"
  },
  {
    question: "What is meant by the term 'debtors'?",
    options: ["", "Customers who owe money to the business",
      "Suppliers who owe money to the business",
      "Owners of the business"],
answer: "Customers who owe money to the business"
  },
  {
    question: "Which accounting concept assumes that a business will continue to operate indefinitely?",
    options: ["", "Going concern concept",
      "Matching concept",
      "Accrual concept"],
answer: "Going concern concept"
  },
  {
    question: "Explain the term 'provision for doubtful debts'.",
    options: ["", "An estimated amount of receivables expected to be uncollectible",
      "Amount of bad debts paid",
      "Total sales on credit"],
answer: "An estimated amount of receivables expected to be uncollectible"
  },
  {
    question: "Calculate gross profit if sales are GHS150,000 and cost of goods sold is GHS100,000.",
    options: ["", "GHS50,000",
      "GHS250,000",
      "GHS100,000"],
answer: "GHS50,000"
  },
  {
    question: "Which financial statement shows the financial position of a business at a specific date?",
    options: ["", "Balance sheet",
      "Income statement",
      "Cash flow statement"],
answer: "Balance sheet"
  },
  {
    question: "What is meant by 'capital introduced'?",
    options: ["", "Additional money invested by the owner",
      "Money withdrawn by owner",
      "Revenue earned"],
answer: "Additional money invested by the owner"
  },
  {
    question: "Explain the term 'contra account' in relation to accounts receivable.",
    options: ["", "An account that offsets the accounts receivable balance",
      "An account showing additional sales",
      "An account recording purchases"],
answer: "An account that offsets the accounts receivable balance"
  },
  {
    question: "What is the effect on the accounting equation when cash is received from a debtor?",
    options: ["", "Assets increase and assets decrease",
      "Liabilities increase and assets decrease",
      "Assets increase and liabilities increase"],
answer: "Assets increase and assets decrease"
  },
  {
    question: "Define 'revenue expenditure'.",
    options: ["", "Expenditure incurred for the day-to-day running of the business",
      "Expenditure on fixed assets",
      "Long-term investment"],
answer: "Expenditure incurred for the day-to-day running of the business"
  },
  {
    question: "What is the main purpose of the cash book?",
    options: ["", "To record all cash receipts and payments",
      "To record credit sales",
      "To summarize expenses"],
answer: "To record all cash receipts and payments"
  },
  {
    question: "Calculate the total sales if the VAT charged is GHS7,500 and the VAT rate is 15%.",
    options: ["", "GHS50,000",
      "GHS55,000",
      "GHS45,000"],
answer: "GHS50,000"
  },
  {
    question: "What is the effect of an increase in accounts payable on the accounting equation?",
    options: ["", "Liabilities increase and assets increase",
      "Assets increase and liabilities decrease",
      "Capital increases"],
answer: "Liabilities increase and assets increase"
  },
  {
    question: "Explain the term 'accounting standards'.",
    options: ["", "Rules and guidelines for preparing financial statements",
      "A book of original entry",
      "A ledger account"],
answer: "Rules and guidelines for preparing financial statements"
  },
  {
    question: "Calculate net profit if gross profit is GHS40,000 and expenses are GHS15,000.",
    options: ["", "GHS25,000",
      "GHS55,000",
      "GHS40,000"],
answer: "GHS25,000"
  },
  {
    question: "Which document is used as evidence for credit purchases?",
    options: ["", "Purchase invoice",
      "Sales invoice",
      "Receipt"],
answer: "Purchase invoice"
  },
  {
    question: "Define the term 'ledger'.",
    options: ["", "A book containing all accounts of the business",
      "A list of cash transactions",
      "A financial statement"],
answer: "A book containing all accounts of the business"
  },
  {
    question: "What is the purpose of the suspense account?",
    options: ["", "To temporarily hold unclassified or doubtful transactions",
      "To record sales",
      "To record purchases"],
answer: "To temporarily hold unclassified or doubtful transactions"
  },
  {
    question: "Calculate the profit or loss from single entry records if opening capital is GHS100,000, closing capital GHS120,000, and drawings GHS10,000.",
    options: ["", "GHS30,000 profit",
      "GHS10,000 loss",
      "GHS20,000 profit"],
answer: "GHS30,000 profit",
    working: "Profit = Closing Capital + Drawings - Opening Capital = 120,000 + 10,000 - 100,000 = GHS30,000 profit"
  },
  {
    question: "Prepare a journal entry to record depreciation of GHS4,000 on equipment.",
    options: ["", "Debit Depreciation Expense GHS4,000; Credit Accumulated Depreciation GHS4,000",
      "Debit Equipment GHS4,000; Credit Cash GHS4,000",
      "Debit Accumulated Depreciation GHS4,000; Credit Equipment GHS4,000"],
answer: "Debit Depreciation Expense GHS4,000; Credit Accumulated Depreciation GHS4,000"
  },
  {
    question: "Define 'bad debts'.",
    options: ["", "Debts that cannot be collected",
      "Debts paid on time",
      "Advance payments"],
answer: "Debts that cannot be collected"
  },
  {
    question: "A company has sales of GHS200,000, returns inwards GHS10,000, purchases GHS120,000, and returns outwards GHS5,000. Calculate net sales and net purchases.",
    options: ["", "Net sales = GHS190,000; Net purchases = GHS115,000",
      "Net sales = GHS210,000; Net purchases = GHS125,000",
      "Net sales = GHS200,000; Net purchases = GHS120,000"],
answer: "Net sales = GHS190,000; Net purchases = GHS115,000",
    working: "Net sales = 200,000 - 10,000 = 190,000; Net purchases = 120,000 - 5,000 = 115,000"
  },
  {
    question: "What is the accounting treatment for provision for bad debts?",
    options: ["", "It is deducted from debtors in the balance sheet",
      "It is added to debtors",
      "It is shown as an expense"],
answer: "It is deducted from debtors in the balance sheet"
  },
  {
    question: "Explain the purpose of the bank reconciliation statement.",
    options: ["", "To reconcile differences between bank statement and cash book balances",
      "To record cash transactions",
      "To calculate net profit"],
answer: "To reconcile differences between bank statement and cash book balances"
  },
  {
    question: "Calculate the adjusted cash book balance if the unadjusted cash book balance is GHS12,000, bank charges of GHS200 have not been recorded, and a direct deposit of GHS500 was not recorded.",
    options: ["", "GHS12,300",
      "GHS11,700",
      "GHS12,500"],
answer: "GHS12,300",
    working: "Adjusted balance = 12,000 - 200 + 500 = GHS12,300"
  },
  {
    question: "What is a control account?",
    options: ["", "A summary account in the general ledger for a group of subsidiary accounts",
      "An account that tracks cash only",
      "An account for recording expenses"],
answer: "A summary account in the general ledger for a group of subsidiary accounts"
  },
  {
    question: "Prepare a sales ledger control account balance given total sales GHS150,000, receipts from debtors GHS130,000, and discounts allowed GHS5,000.",
    options: ["", "Closing balance GHS15,000 debit",
      "Closing balance GHS25,000 debit",
      "Closing balance GHS20,000 debit"],
answer: "Closing balance GHS15,000 debit",
    working: "Opening + Sales - Receipts - Discounts = Closing balance; assuming opening nil: 150,000 - 130,000 - 5,000 = 15,000 debit balance"
  },
  {
    question: "What is meant by 'incomplete records'?",
    options: ["", "Accounting records that are partial and not fully maintained",
      "Complete financial statements",
      "Fully audited accounts"],
answer: "Accounting records that are partial and not fully maintained"
  },
  {
    question: "How do you compute profit from incomplete records if opening capital is GHS80,000, closing capital GHS100,000, and drawings GHS15,000?",
    options: ["", "Profit = Closing capital + Drawings - Opening capital = GHS35,000",
      "Profit = Opening capital + Drawings - Closing capital = GHS5,000",
      "Profit = Closing capital - Drawings - Opening capital = GHS5,000"],
answer: "Profit = Closing capital + Drawings - Opening capital = GHS35,000",
    working: "Profit = 100,000 + 15,000 - 80,000 = GHS35,000"
  },
  {
    question: "Explain the nature of the accumulated fund in clubs and societies.",
    options: ["", "It is the net assets belonging to the club after liabilities",
      "It is the amount owed by members",
      "It is capital introduced by members"],
answer: "It is the net assets belonging to the club after liabilities"
  },
  {
    question: "Prepare an income and expenditure account given subscription income GHS25,000, donations GHS5,000, expenses GHS20,000, and depreciation GHS2,000.",
    options: ["", "Surplus of GHS8,000",
      "Deficit of GHS8,000",
      "Surplus of GHS2,000"],
answer: "Surplus of GHS8,000",
    working: "Income = 25,000 + 5,000 = 30,000; Expenses = 20,000 + 2,000 = 22,000; Surplus = 30,000 - 22,000 = GHS8,000"
  },
  {
    question: "What is the main purpose of manufacturing accounts?",
    options: ["", "To ascertain the cost of production",
      "To record sales only",
      "To track cash receipts"],
answer: "To ascertain the cost of production"
  },
  {
    question: "Calculate the prime cost if direct materials are GHS50,000, direct labor GHS30,000, and factory overheads GHS20,000.",
    options: ["", "GHS80,000",
      "GHS100,000",
      "GHS70,000"],
answer: "GHS80,000",
    working: "Prime cost = Direct materials + Direct labor = 50,000 + 30,000 = GHS80,000"
  },
  {
    question: "Explain the treatment of unrealized profit in inter-branch transactions.",
    options: ["", "It should be eliminated in the final accounts",
      "It is recorded as revenue",
      "It is ignored"],
answer: "It should be eliminated in the final accounts"
  },
  {
    question: "What is the difference between capital and recurrent expenditure in the public sector?",
    options: ["", "Capital expenditure is for assets, recurrent is for day-to-day running",
      "Both are the same",
      "Recurrent expenditure is for assets, capital is for salaries"],
answer: "Capital expenditure is for assets, recurrent is for day-to-day running"
  },
  {
    question: "Describe one advantage of computerized accounting systems over manual systems.",
    options: ["", "Faster data processing and error reduction",
      "Higher error rates",
      "More paperwork"],
answer: "Faster data processing and error reduction"
  },
  {
    question: "Calculate the net assets of a club with total assets GHS100,000 and total liabilities GHS30,000.",
    options: ["", "GHS70,000",
      "GHS130,000",
      "GHS30,000"],
answer: "GHS70,000",
    working: "Net assets = Total assets - Total liabilities = 100,000 - 30,000 = GHS70,000"
  },
  {
    question: "What is the effect on capital if the owner withdraws GHS5,000 for personal use?",
    options: ["", "Capital decreases by GHS5,000",
      "Capital increases by GHS5,000",
      "No effect"],
answer: "Capital decreases by GHS5,000"
  },
  {
    question: "What is the effect on capital if the owner withdraws GHS5,000 for personal use?",
    options: ["", "Capital decreases by GHS5,000",
      "Capital increases by GHS5,000",
      "No effect"],
answer: "Capital decreases by GHS5,000"
  },
  {
    question: "What is the purpose of suspense accounts in accounting?",
    options: ["", "To temporarily hold transactions when there is uncertainty",
      "To record all cash payments",
      "To track sales returns"],
answer: "To temporarily hold transactions when there is uncertainty"
  },
  {
    question: "Which document is used to authorize payment to a creditor?",
    options: ["", "Purchase order",
      "Payment voucher",
      "Sales invoice"],
answer: "Payment voucher"
  },
  {
    question: "Calculate the closing stock using the formula: Opening Stock + Purchases - Cost of Sales = Closing Stock. Given: Opening Stock GHS10,000, Purchases GHS50,000, Cost of Sales GHS45,000.",
    options: ["", "GHS15,000",
      "GHS5,000",
      "GHS55,000"],
answer: "GHS15,000"
  },
  {
    question: "What is meant by 'matching concept' in accounting?",
    options: ["", "Expenses should be matched with the revenues they help generate",
      "Cash receipts should be matched with cash payments",
      "Assets should be matched with liabilities"],
answer: "Expenses should be matched with the revenues they help generate"
  },
  {
    question: "Identify the primary users of financial statements.",
    options: ["", "Investors, creditors, management",
      "Only the government",
      "Suppliers only"],
answer: "Investors, creditors, management"
  },
  {
    question: "Explain the purpose of depreciation.",
    options: ["", "To allocate the cost of a fixed asset over its useful life",
      "To increase the value of an asset",
      "To record cash paid"],
answer: "To allocate the cost of a fixed asset over its useful life"
  },
  {
    question: "Calculate the net realizable value of stock if cost is GHS20,000 and net realizable value is GHS18,000.",
    options: ["", "GHS18,000",
      "GHS20,000",
      "GHS38,000"],
answer: "GHS18,000"
  },
  {
    question: "What does the term 'liquidity' refer to in accounting?",
    options: ["", "Ability of a business to meet short-term obligations",
      "Profitability of a business",
      "Capital structure"],
answer: "Ability of a business to meet short-term obligations"
  },
  {
    question: "Which financial statement shows income and expenses for a specific period?",
    options: ["", "Income statement (profit and loss account)",
      "Balance sheet",
      "Cash flow statement"],
answer: "Income statement (profit and loss account)"
  }  
];
export default accountingQuestions;