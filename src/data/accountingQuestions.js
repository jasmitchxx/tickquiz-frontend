const accountingQuestions = [
  {
    question: "What is the accounting equation?",
    options: [
      "Assets + Liabilities = Capital",
      "Assets = Liabilities + Capital",
      "Capital = Assets - Liabilities",
      "Assets = Capital - Liabilities"
    ],
    answer: "Assets = Liabilities + Capital"
  },
  {
    question: "If total assets are GHS120,000 and liabilities are GHS45,000, what is the capital?",
    options: ["GHS165,000", "GHS75,000", "GHS45,000", "GHS120,000"],
    answer: "GHS75,000"
  },
  {
    question: "What is the purpose of the cash book in accounting?",
    options: [
      "To record all credit sales",
      "To record all cash and bank transactions",
      "To record depreciation",
      "To summarize final accounts"
    ],
    answer: "To record all cash and bank transactions"
  },
  {
    question: "Which of the following is not a qualitative characteristic of accounting information?",
    options: ["Reliability", "Comparability", "Relevance", "Obscurity"],
    answer: "Obscurity"
  },
  {
    question: "Calculate the VAT on an item sold for GHS400 at a VAT rate of 12.5%",
    options: ["GHS50", "GHS40", "GHS25", "GHS45"],
    answer: "GHS50"
  },
  {
    question: "What is the double entry for the purchase of furniture for cash?",
    options: [
      "Debit Furniture, Credit Cash",
      "Debit Cash, Credit Furniture",
      "Debit Sales, Credit Furniture",
      "Debit Purchases, Credit Cash"
    ],
    answer: "Debit Furniture, Credit Cash"
  },
  {
    question: "If opening stock is GHS3,000, purchases are GHS7,000 and closing stock is GHS2,000, what is the cost of goods sold?",
    options: ["GHS12,000", "GHS8,000", "GHS9,000", "GHS10,000"],
    answer: "GHS8,000"
  },
  {
    question: "What type of account is ‘Rent Expense’?",
    options: ["Asset", "Liability", "Expense", "Income"],
    answer: "Expense"
  },
  {
    question: "Which of the following is NOT a book of original entry?",
    options: ["Sales Journal", "Purchase Day Book", "General Ledger", "Petty Cash Book"],
    answer: "General Ledger"
  },
  {
    question: "A trial balance is prepared to:",
    options: [
      "Prepare financial statements",
      "Check arithmetical accuracy of ledger accounts",
      "Calculate VAT",
      "Compute depreciation"
    ],
    answer: "Check arithmetical accuracy of ledger accounts"
  },
  {
    question: "If depreciation is GHS2,000 on an asset of cost GHS10,000, what is the net book value?",
    options: ["GHS12,000", "GHS10,000", "GHS2,000", "GHS8,000"],
    answer: "GHS8,000"
  },
  {
    question: "What is the capital if assets = GHS90,000 and liabilities = GHS20,000?",
    options: ["GHS70,000", "GHS110,000", "GHS20,000", "GHS90,000"],
    answer: "GHS70,000"
  },
  {
    question: "Which account is used to correct errors temporarily?",
    options: ["Suspense account", "Capital account", "Profit account", "Sales account"],
    answer: "Suspense account"
  },
  {
    question: "What is the effect of withdrawing cash for personal use?",
    options: ["Increase liabilities", "Decrease assets", "Decrease capital", "Increase capital"],
    answer: "Decrease capital"
  },
  {
    question: "Calculate gross profit: Sales = GHS15,000, Cost of Goods Sold = GHS10,000",
    options: ["GHS5,000", "GHS25,000", "GHS10,000", "GHS15,000"],
    answer: "GHS5,000"
  },
  {
    question: "What are drawings in accounting?",
    options: ["Expenses paid by business", "Assets bought", "Withdrawals by owner", "Salaries paid"],
    answer: "Withdrawals by owner"
  },
  {
    question: "Which of these is a liability account?",
    options: ["Bank", "Debtors", "Creditors", "Rent"],
    answer: "Creditors"
  },
  {
    question: "The purpose of a control account is to:",
    options: [
      "Track fixed assets",
      "Summarize ledger balances",
      "Record cash transactions",
      "Calculate profit"
    ],
    answer: "Summarize ledger balances"
  },
  {
    question: "If wages paid are GHS2,500 and outstanding wages are GHS500, what is the total expense?",
    options: ["GHS2,000", "GHS3,000", "GHS2,500", "GHS500"],
    answer: "GHS3,000"
  },
  {
    question: "Which of the following is a capital expenditure?",
    options: ["Payment of rent", "Purchase of equipment", "Electricity bill", "Salaries"],
    answer: "Purchase of equipment"
  },
  {
    question: "A sales journal is used to record:",
    options: ["All cash sales", "All credit sales", "All credit purchases", "All returns"],
    answer: "All credit sales"
  },
  {
    question: "A manufacturing account is prepared to compute:",
    options: ["Net Profit", "Production Cost", "Sales", "Cash Balance"],
    answer: "Production Cost"
  },
  {
    question: "Cost of production is calculated as:",
    options: [
      "Prime cost + Factory overheads",
      "Prime cost + Administration expenses",
      "Sales - Profit",
      "Cost of sales - Opening stock"
    ],
    answer: "Prime cost + Factory overheads"
  },
  {
    question: "Which document is issued when goods are returned to the supplier?",
    options: ["Credit Note", "Invoice", "Receipt", "Purchase Order"],
    answer: "Credit Note"
  },
  {
    question: "Which account is credited when cash is received from a debtor?",
    options: ["Cash", "Debtors", "Sales", "Capital"],
    answer: "Debtors"
  },
  {
    question: "In departmental accounts, what is the main purpose?",
    options: ["To track branch sales", "To compare department performance", "To adjust VAT", "To record fixed assets"],
    answer: "To compare department performance"
  },
  {
    question: "If sales are GHS20,000 and returns inwards are GHS2,000, what are the net sales?",
    options: ["GHS22,000", "GHS18,000", "GHS20,000", "GHS2,000"],
    answer: "GHS18,000"
  },
  {
    question: "Which account is debited when insurance is prepaid?",
    options: ["Prepaid Insurance", "Insurance Expense", "Bank", "Capital"],
    answer: "Prepaid Insurance"
  },
  {
    question: "Which of these is a direct cost in manufacturing?",
    options: ["Factory rent", "Direct labour", "Advertising", "Interest"],
    answer: "Direct labour"
  },
  {
    question: "If a company buys goods on credit, the transaction affects:",
    options: ["Cash and Sales", "Purchases and Creditors", "Sales and Debtors", "Cash and Purchases"],
    answer: "Purchases and Creditors"
  },
  {
    question: "Which of these is a feature of computerized accounting?",
    options: ["Manual data entry only", "Faster data processing", "Handwritten ledgers", "No backup needed"],
    answer: "Faster data processing"
  },
  {
    question: "Who are internal users of accounting information?",
    options: ["Government", "Suppliers", "Investors", "Managers"],
    answer: "Managers"
  },
  {
    question: "What is goodwill in partnership accounting?",
    options: ["Profit of partners", "Fixed asset", "Intangible asset", "Credit balance"],
    answer: "Intangible asset"
  },
  {
    question: "What is the purpose of a revaluation account in partnership?",
    options: [
      "To revalue assets and liabilities on change in partnership",
      "To distribute net profit",
      "To calculate goodwill",
      "To dissolve the firm"
    ],
    answer: "To revalue assets and liabilities on change in partnership"
  },
  {
    question: "Which of the following best describes accruals?",
    options: [
      "Cash paid in advance",
      "Expenses incurred but not yet paid",
      "Assets owned by firm",
      "Income received in advance"
    ],
    answer: "Expenses incurred but not yet paid"
  },
  {
    question: "Which account is used for tracking subscriptions in clubs?",
    options: ["Income account", "Subscription account", "Receipts account", "Accumulated fund account"],
    answer: "Subscription account"
  },
  {
    question: "If accumulated fund at the beginning is GHS5,000 and surplus is GHS1,200, what is the new accumulated fund?",
    options: ["GHS3,800", "GHS5,000", "GHS6,200", "GHS1,200"],
    answer: "GHS6,200"
  },
  {
    question: "In single entry system, profit is calculated using:",
    options: [
      "Income and Expenditure Account",
      "Statement of Affairs method",
      "Trading Account",
      "Ledger Accounts"
    ],
    answer: "Statement of Affairs method"
  },
  {
    question: "What is a debit balance in the bank column of the cash book?",
    options: ["Bank overdraft", "Cash at bank", "Loan from bank", "Bank charges"],
    answer: "Cash at bank"
  },
  {
    question: "Which of the following increases capital?",
    options: ["Drawings", "Profit", "Loss", "Expenses"],
    answer: "Profit"
  },
  {
    question: "What is carriage inwards treated as?",
    options: ["Sales", "Expense", "Asset", "Liability"],
    answer: "Expense"
  },
  {
    question: "A creditor is a person or business to whom:",
    options: ["We owe money", "We sell goods", "We rent property", "We give loans"],
    answer: "We owe money"
  },
  {
    question: "The purpose of an income and expenditure account is to:",
    options: ["Record cash receipts", "Determine surplus or deficit", "Show closing stock", "Record liabilities"],
    answer: "Determine surplus or deficit"
  },
  {
    question: "Which of these is not a function of financial accounting?",
    options: ["Record transactions", "Prepare budgets", "Report financial position", "Summarize performance"],
    answer: "Prepare budgets"
  },
  {
    question: "Which of the following is a limitation of manual accounting?",
    options: ["Fast processing", "Real-time reporting", "Risk of errors", "Automated reports"],
    answer: "Risk of errors"
  },
  {
    question: "What is the main purpose of preparing a trial balance?",
    options: [
      "To determine profit or loss",
      "To check arithmetical accuracy of ledger entries",
      "To calculate tax",
      "To prepare audit report"
    ],
    answer: "To check arithmetical accuracy of ledger entries"
  },
  {
    question: "If Capital = GHS100,000 and Liabilities = GHS40,000, what are the Assets?",
    options: ["GHS60,000", "GHS100,000", "GHS140,000", "GHS40,000"],
    answer: "GHS140,000"
  },
  {
    question: "What is the depreciation expense if a machine costing GHS50,000 has a useful life of 5 years and no scrap value?",
    options: ["GHS5,000", "GHS10,000", "GHS25,000", "GHS50,000"],
    answer: "GHS10,000"
  },
  {
    question: "What type of account is 'Prepaid Rent'?",
    options: ["Income", "Liability", "Asset", "Expense"],
    answer: "Asset"
  },
  {
    question: "Calculate purchases: Opening stock = GHS5,000, Closing stock = GHS2,000, COGS = GHS13,000",
    options: ["GHS10,000", "GHS15,000", "GHS12,000", "GHS18,000"],
    answer: "GHS10,000"
  },
  {
    question: "What is the main book for recording daily petty expenses?",
    options: ["Cash Book", "Ledger", "Petty Cash Book", "Journal"],
    answer: "Petty Cash Book"
  },
  {
    question: "A debit in the purchases account signifies:",
    options: ["Goods sold", "Goods returned", "Goods bought", "Cash paid"],
    answer: "Goods bought"
  },
  {
    question: "If total sales are GHS30,000 and credit sales are GHS20,000, what are the cash sales?",
    options: ["GHS50,000", "GHS10,000", "GHS20,000", "GHS30,000"],
    answer: "GHS10,000"
  },
  {
    question: "What are trade receivables also known as?",
    options: ["Creditors", "Debtors", "Investors", "Suppliers"],
    answer: "Debtors"
  },
  {
    question: "Which accounting concept states that revenue and expenses should be matched?",
    options: ["Going concern", "Accrual", "Matching", "Consistency"],
    answer: "Matching"
  },
  {
    question: "Which of these would be found in the capital account of a sole trader?",
    options: ["Wages", "Interest paid", "Drawings", "Depreciation"],
    answer: "Drawings"
  },
  {
    question: "If opening capital is GHS20,000, profit for the year is GHS5,000 and drawings are GHS2,000, what is closing capital?",
    options: ["GHS25,000", "GHS23,000", "GHS22,000", "GHS27,000"],
    answer: "GHS23,000"
  },
  {
    question: "Which of the following is a direct cost in manufacturing?",
    options: ["Factory rent", "Depreciation", "Direct materials", "Factory insurance"],
    answer: "Direct materials"
  },
  {
    question: "Which of the following is shown in the trading account?",
    options: ["Net profit", "Expenses", "Cost of goods sold", "Interest received"],
    answer: "Cost of goods sold"
  },
  {
    question: "If total expenses = GHS7,000 and revenue = GHS10,000, what is the net profit?",
    options: ["GHS17,000", "GHS3,000", "GHS7,000", "GHS10,000"],
    answer: "GHS3,000"
  },
  {
    question: "Which accounting principle supports preparing accounts assuming the business will continue?",
    options: ["Going Concern", "Matching", "Realisation", "Materiality"],
    answer: "Going Concern"
  },
  {
    question: "What is the credit entry when goods are sold on credit?",
    options: ["Cash", "Sales", "Debtors", "Bank"],
    answer: "Sales"
  },
  {
    question: "Calculate Net Profit: Gross profit = GHS12,000, Expenses = GHS5,000",
    options: ["GHS7,000", "GHS12,000", "GHS5,000", "GHS17,000"],
    answer: "GHS7,000"
  },
  {
    question: "Which one of the following is a current asset?",
    options: ["Land", "Motor vehicle", "Inventory", "Building"],
    answer: "Inventory"
  },
  {
    question: "A company received GHS2,000 cash for rent in advance. How is this recorded?",
    options: ["Credit Rent Income", "Debit Rent Income", "Credit Prepaid Rent", "Credit Rent Received in Advance"],
    answer: "Credit Rent Received in Advance"
  },
  {
    question: "What is the purpose of the Income and Expenditure Account in a club?",
    options: ["To record all receipts", "To calculate accumulated fund", "To determine surplus or deficit", "To show liabilities"],
    answer: "To determine surplus or deficit"
  },
  {
    question: "If provision for bad debts is increased by GHS400, what is the double entry?",
    options: [
      "Dr Bad debts, Cr Provision",
      "Dr Debtors, Cr Bad Debts",
      "Dr Provision, Cr Debtors",
      "Dr Expenses, Cr Provision for Bad Debts"
    ],
    answer: "Dr Expenses, Cr Provision for Bad Debts"
  },
  {
    question: "In branch accounts, which account shows total goods sent from head office?",
    options: ["Sales Account", "Branch Stock Account", "Goods Sent to Branch Account", "HO Account"],
    answer: "Goods Sent to Branch Account"
  },
  {
    question: "If machinery is sold for GHS15,000 and book value is GHS12,000, what is the gain?",
    options: ["GHS3,000", "GHS27,000", "GHS12,000", "GHS15,000"],
    answer: "GHS3,000"
  },
  {
    question: "A decrease in liability will:",
    options: ["Increase assets", "Decrease capital", "Have no effect", "Increase drawings"],
    answer: "Decrease capital"
  },
  {
    question: "If VAT rate is 15% and selling price is GHS1,150, what is the VAT?",
    options: ["GHS150", "GHS115", "GHS1,000", "GHS165"],
    answer: "GHS150"
  },
  {
    question: "What is the effect of under-depreciating an asset?",
    options: ["Net profit will decrease", "Asset value is overstated", "Liability increases", "Cash increases"],
    answer: "Asset value is overstated"
  },
  {
    question: "What are outstanding expenses?",
    options: [
      "Expenses paid in advance",
      "Expenses already paid",
      "Expenses due but unpaid",
      "Expenses not incurred"
    ],
    answer: "Expenses due but unpaid"
  },
  {
    question: "Which of the following is a non-current liability?",
    options: ["Creditors", "Bank overdraft", "Bank loan (5 years)", "Rent payable"],
    answer: "Bank loan (5 years)"
  },
  {
    question: "What is the entry for a cheque received from a customer?",
    options: ["Dr Debtor, Cr Bank", "Dr Bank, Cr Debtor", "Dr Sales, Cr Debtor", "Dr Bank, Cr Sales"],
    answer: "Dr Bank, Cr Debtor"
  },
  {
    question: "Which of the following accounts would appear in the income statement?",
    options: ["Drawings", "Debtors", "Sales", "Creditors"],
    answer: "Sales"
  },
  {
    question: "The Revaluation Account is prepared when:",
    options: [
      "Profit is to be distributed",
      "New partner is admitted",
      "Business is sold",
      "Loan is repaid"
    ],
    answer: "New partner is admitted"
  },
  {
    question: "Which is a major difference between manual and computerized accounting?",
    options: [
      "Computerized is slower",
      "Manual is more accurate",
      "Manual requires software",
      "Computerized allows faster report generation"
    ],
    answer: "Computerized allows faster report generation"
  },
  {
    question: "A company uses a control account to:",
    options: ["Check stock", "Summarize receivables/payables", "Track capital", "Record depreciation"],
    answer: "Summarize receivables/payables"
  },
  {
    question: "What is the accounting treatment for drawings of GHS1,000?",
    options: ["Dr Cash, Cr Drawings", "Dr Drawings, Cr Cash", "Dr Capital, Cr Drawings", "Dr Drawings, Cr Capital"],
    answer: "Dr Drawings, Cr Cash"
  },
  {
    question: "If returns outward are GHS2,000, what is the effect on purchases?",
    options: ["Decrease by GHS2,000", "Increase by GHS2,000", "No effect", "Increase capital"],
    answer: "Decrease by GHS2,000"
  },
  {
    question: "A credit balance in the bank statement indicates:",
    options: ["Overdraft", "Cash at bank", "Loan from bank", "Bank charges"],
    answer: "Cash at bank"
  },
  {
    question: "What is the main objective of public sector accounting?",
    options: [
      "To show profit",
      "To satisfy shareholders",
      "To ensure accountability",
      "To calculate dividends"
    ],
    answer: "To ensure accountability"
  },
  {
    question: "Which account is debited when office stationery is bought with cash?",
    options: ["Cash", "Stationery", "Capital", "Sales"],
    answer: "Stationery"
  },
  {
    question: "What is included in prime cost?",
    options: ["Direct cost + Indirect cost", "Direct wages + Direct materials", "Factory rent", "Office expenses"],
    answer: "Direct wages + Direct materials"
  },
  {
    question: "Which of these best describes capital income?",
    options: ["Income from sale of fixed asset", "Daily sales", "Subscription income", "Interest received"],
    answer: "Income from sale of fixed asset"
  },
  {
    question: "In departmental accounts, expenses common to all departments are:",
    options: ["Ignored", "Divided equally", "Fully charged to one department", "Capitalized"],
    answer: "Divided equally"
  },
  {
    question: "The balance of the income and expenditure account is transferred to:",
    options: ["Bank", "Accumulated Fund", "Receipts and Payments Account", "Liabilities"],
    answer: "Accumulated Fund"
  },
  {
    question: "Which concept requires disclosure of all material facts?",
    options: ["Materiality", "Accrual", "Consistency", "Going Concern"],
    answer: "Materiality"
  },
  {
    question: "If opening stock is GHS4,000, purchases GHS6,000, closing stock GHS3,000, what is COGS?",
    options: ["GHS7,000", "GHS13,000", "GHS6,000", "GHS8,000"],
    answer: "GHS7,000"
  },
  {
    question: "If a machine costs GHS80,000 and is depreciated at 10% per annum on straight-line basis, what is the annual depreciation?",
    options: ["GHS8,000", "GHS10,000", "GHS80,000", "GHS1,000"],
    answer: "GHS8,000"
  },
  {
    question: "Which of these is recorded in the purchases returns journal?",
    options: ["Goods bought", "Cash purchases", "Goods returned to supplier", "Goods sold"],
    answer: "Goods returned to supplier"
  },
  {
    question: "A petty cashier is given GHS500. During the week, she spends GHS350. What is the reimbursement amount?",
    options: ["GHS500", "GHS150", "GHS350", "GHS0"],
    answer: "GHS350"
  },
  {
    question: "Which account is affected when rent is paid in advance?",
    options: ["Rent Payable", "Prepaid Rent", "Accrued Rent", "Rent Receivable"],
    answer: "Prepaid Rent"
  },
  {
    question: "What does a trial balance test?",
    options: ["Profitability", "Accuracy of transactions", "Equality of debits and credits", "Inventory levels"],
    answer: "Equality of debits and credits"
  },
  {
    question: "Calculate Gross Profit: Sales = GHS50,000, COGS = GHS30,000",
    options: ["GHS20,000", "GHS30,000", "GHS80,000", "GHS50,000"],
    answer: "GHS20,000"
  },
  {
    question: "If capital is GHS60,000 and assets are GHS90,000, what are liabilities?",
    options: ["GHS30,000", "GHS60,000", "GHS90,000", "GHS150,000"],
    answer: "GHS30,000"
  },
  {
    question: "Which of the following accounts is used to record credit purchases?",
    options: ["Sales", "Purchases", "Cash", "Returns Inward"],
    answer: "Purchases"
  },
  {
    question: "A debit entry increases which of the following?",
    options: ["Capital", "Revenue", "Expenses", "Liabilities"],
    answer: "Expenses"
  },
  {
    question: "Which of these is a real account?",
    options: ["Rent", "Debtors", "Bank", "Wages"],
    answer: "Bank"
  },
  {
    question: "The accounting equation is:",
    options: [
      "Assets + Liabilities = Capital",
      "Assets = Liabilities + Capital",
      "Assets = Revenue - Expenses",
      "Capital = Assets + Liabilities"
    ],
    answer: "Assets = Liabilities + Capital"
  },
  {
    question: "Calculate VAT: Sales = GHS2,300, VAT rate = 15%",
    options: ["GHS300", "GHS345", "GHS2,645", "GHS2,000"],
    answer: "GHS345"
  },
  {
    question: "In final accounts, carriage inwards is added to:",
    options: ["Sales", "Purchases", "Expenses", "Assets"],
    answer: "Purchases"
  },
  {
    question: "What is the purpose of a suspense account?",
    options: [
      "Record capital income",
      "Temporarily hold discrepancies in trial balance",
      "Record bank errors",
      "Store fixed assets"
    ],
    answer: "Temporarily hold discrepancies in trial balance"
  },
  {
    question: "If cash at bank is GHS8,000 and overdraft is GHS2,000, what is net bank position?",
    options: ["GHS10,000", "GHS6,000", "GHS8,000", "GHS2,000"],
    answer: "GHS6,000"
  },
  {
    question: "Which of these represents a liability?",
    options: ["Inventory", "Trade Receivables", "Loan Payable", "Prepaid Insurance"],
    answer: "Loan Payable"
  },
  {
    question: "In partnership, interest on capital is:",
    options: ["A liability", "An appropriation", "An expense", "An asset"],
    answer: "An appropriation"
  },
  {
    question: "Which document is issued when goods are returned by a customer?",
    options: ["Invoice", "Credit Note", "Receipt", "Debit Note"],
    answer: "Credit Note"
  },
  {
    question: "What is the result of an increase in drawings?",
    options: ["Capital increases", "Capital decreases", "Assets increase", "Liabilities increase"],
    answer: "Capital decreases"
  },
  {
    question: "Which is not part of the double entry for a purchase of fixed asset on credit?",
    options: ["Debit Asset", "Credit Creditor", "Debit Capital", "None of these"],
    answer: "Debit Capital"
  },
  {
    question: "What is meant by accrued income?",
    options: [
      "Income received in advance",
      "Income not yet received but earned",
      "Income not earned",
      "Income fully received"
    ],
    answer: "Income not yet received but earned"
  },
  {
    question: "If sales are GHS25,000 and returns inward are GHS2,000, what are net sales?",
    options: ["GHS27,000", "GHS23,000", "GHS25,000", "GHS2,000"],
    answer: "GHS23,000"
  },
  {
    question: "Which document contains all ledger accounts?",
    options: ["Cash Book", "Trial Balance", "General Ledger", "Journal"],
    answer: "General Ledger"
  },
  {
    question: "Which account is used in club accounting to track subscriptions?",
    options: ["Income and Expenditure", "Accumulated Fund", "Subscriptions Account", "Receipts and Payments"],
    answer: "Subscriptions Account"
  },
  {
    question: "Which concept requires using the same accounting methods every year?",
    options: ["Accrual", "Consistency", "Entity", "Going Concern"],
    answer: "Consistency"
  },
  {
    question: "What is the book value of an asset costing GHS40,000 after 3 years of 10% straight-line depreciation?",
    options: ["GHS28,000", "GHS30,000", "GHS36,000", "GHS10,000"],
    answer: "GHS28,000"
  },
  {
    question: "Which account shows the result of operations for the year?",
    options: ["Capital", "Trading and Profit & Loss", "Balance Sheet", "Cash Book"],
    answer: "Trading and Profit & Loss"
  },
  {
    question: "Which of the following best describes fixed assets?",
    options: [
      "Held for resale",
      "Intended for short-term use",
      "Used for business operations",
      "Not included in the balance sheet"
    ],
    answer: "Used for business operations"
  },
  {
    question: "Which account is credited when a business receives a loan?",
    options: ["Cash", "Bank Loan", "Loan Interest", "Capital"],
    answer: "Bank Loan"
  },
  {
    question: "Which financial statement shows a firm’s financial position at a point in time?",
    options: ["Income Statement", "Cash Flow", "Trial Balance", "Balance Sheet"],
    answer: "Balance Sheet"
  },
  {
    question: "The main feature of a computerized accounting system is:",
    options: ["Manual entry", "Immediate report generation", "Ledger books", "Handwritten vouchers"],
    answer: "Immediate report generation"
  },
  {
    question: "What is the accounting treatment for accrued expenses?",
    options: ["Debit Asset, Credit Expense", "Debit Expense, Credit Accrued Expenses", "Credit Expense, Debit Liability", "Debit Income, Credit Expense"],
    answer: "Debit Expense, Credit Accrued Expenses"
  },
  {
    question: "What type of account is 'Accumulated Depreciation'?",
    options: ["Asset", "Contra-Asset", "Liability", "Expense"],
    answer: "Contra-Asset"
  },
  {
    question: "If a business owner takes goods worth GHS500 for personal use, what is the entry?",
    options: ["Dr Drawings, Cr Purchases", "Dr Capital, Cr Drawings", "Dr Purchases, Cr Drawings", "Dr Drawings, Cr Sales"],
    answer: "Dr Drawings, Cr Purchases"
  },
  {
    question: "What is recorded in the returns outward book?",
    options: ["Sales returns", "Goods returned to suppliers", "Credit purchases", "Cash purchases"],
    answer: "Goods returned to suppliers"
  },
  {
    question: "In manufacturing accounts, which of these is included in factory overheads?",
    options: ["Raw materials", "Direct labor", "Indirect wages", "Sales commission"],
    answer: "Indirect wages"
  },
  {
    question: "The closing entries are passed:",
    options: ["At the beginning of the year", "During the year", "At year-end", "Never"],
    answer: "At year-end"
  },
  {
    question: "How is net profit determined?",
    options: ["Sales - Purchases", "Gross Profit - Expenses", "Assets - Liabilities", "Capital - Drawings"],
    answer: "Gross Profit - Expenses"
  },
  {
    question: "A company with multiple departments prepares separate accounts for each under:",
    options: ["Branch Accounting", "Control Accounts", "Departmental Accounting", "Public Sector Accounting"],
    answer: "Departmental Accounting"
  },
  {
    question: "In single entry bookkeeping, which item is commonly missing?",
    options: ["Sales", "Expenses", "Assets", "Complete double entry"],
    answer: "Complete double entry"
  },
  {
    question: "Which of these items increases the balance of the bank account?",
    options: ["Bank charges", "Cash paid", "Cheque received", "Direct debit"],
    answer: "Cheque received"
  },
  {
    question: "Which of the following is a capital expenditure?",
    options: ["Rent paid", "Wages", "Purchase of machinery", "Electricity bill"],
    answer: "Purchase of machinery"
  },
  {
    question: "Which of these is used to reconcile differences between bank and cash book balances?",
    options: ["Cash Flow Statement", "Bank Reconciliation Statement", "Ledger", "Petty Cash Book"],
    answer: "Bank Reconciliation Statement"
  },
  {
    question: "What is the correct entry for receiving GHS1,000 rent income?",
    options: ["Dr Cash, Cr Rent Income", "Dr Rent Expense, Cr Cash", "Dr Income, Cr Cash", "Dr Cash, Cr Debtor"],
    answer: "Dr Cash, Cr Rent Income"
  },
  {
    question: "What is the accounting treatment of carriage outwards?",
    options: ["Added to purchases", "Shown as sales", "Recorded as selling expense", "Added to inventory"],
    answer: "Recorded as selling expense"
  },
  {
    question: "Which of the following is a source of finance for a business?",
    options: ["Depreciation", "Sales returns", "Bank loan", "Drawings"],
    answer: "Bank loan"
  },
  {
    question: "A business buys goods worth GHS12,000. VAT is 15%. What is the total cost?",
    options: ["GHS12,000", "GHS13,800", "GHS14,000", "GHS1,800"],
    answer: "GHS13,800"
  },
  {
    question: "Which of the following is an intangible asset?",
    options: ["Equipment", "Goodwill", "Stock", "Vehicle"],
    answer: "Goodwill"
  },
  {
    question: "Calculate net profit: Gross profit = GHS18,000, Expenses = GHS5,000",
    options: ["GHS13,000", "GHS23,000", "GHS18,000", "GHS5,000"],
    answer: "GHS13,000"
  },
  {
    question: "Which ledger would you record wages paid?",
    options: ["Sales Ledger", "Purchases Ledger", "General Ledger", "Nominal Ledger"],
    answer: "Nominal Ledger"
  },
  {
    question: "A customer pays GHS2,000 on account. Which account is credited?",
    options: ["Cash", "Debtors", "Sales", "Creditors"],
    answer: "Debtors"
  },
  {
    question: "In partnership, how is interest on drawings treated?",
    options: [
      "As an income to the partnership",
      "As an expense to the firm",
      "As an expense to the partner",
      "As a liability"
    ],
    answer: "As an income to the partnership"
  },
  {
    question: "Sales = GHS100,000, Returns Inwards = GHS5,000, Purchases = GHS60,000. Calculate Gross Profit if COGS = GHS60,000",
    options: ["GHS35,000", "GHS40,000", "GHS45,000", "GHS55,000"],
    answer: "GHS35,000"
  },
  {
    question: "Which of the following is a current asset?",
    options: ["Building", "Fixtures", "Cash in Hand", "Capital"],
    answer: "Cash in Hand"
  },
  {
    question: "Depreciation is considered as:",
    options: ["An income", "A liability", "An expense", "A current asset"],
    answer: "An expense"
  },
  {
    question: "What is the accounting entry for goods sold on credit?",
    options: ["Dr Cash, Cr Sales", "Dr Sales, Cr Debtors", "Dr Debtors, Cr Sales", "Dr Purchases, Cr Sales"],
    answer: "Dr Debtors, Cr Sales"
  },
  {
    question: "GHS4,500 is paid for insurance for 12 months, but only 6 months fall in the current period. What is the prepaid amount?",
    options: ["GHS4,500", "GHS2,250", "GHS1,500", "GHS3,000"],
    answer: "GHS2,250"
  },
  {
    question: "Which is a source document for purchases?",
    options: ["Invoice", "Cheque", "Credit Note", "Receipt"],
    answer: "Invoice"
  },
  {
    question: "Which of the following is included in prime cost?",
    options: ["Factory Rent", "Direct Materials", "Depreciation", "Selling Expenses"],
    answer: "Direct Materials"
  },
  {
    question: "If Debtors = GHS20,000 and Bad Debts = GHS2,000, what is Net Debtors?",
    options: ["GHS18,000", "GHS22,000", "GHS20,000", "GHS2,000"],
    answer: "GHS18,000"
  },
  {
    question: "Credit purchases = GHS35,000, Returns Outwards = GHS5,000. Calculate Net Purchases.",
    options: ["GHS40,000", "GHS30,000", "GHS35,000", "GHS25,000"],
    answer: "GHS30,000"
  },
  {
    question: "Which of the following is an indirect expense?",
    options: ["Direct labor", "Factory electricity", "Raw materials", "Production supervisor salary"],
    answer: "Factory electricity"
  },
  {
    question: "Which account is affected by the depreciation of machinery?",
    options: ["Asset Account", "Cash Account", "Drawings Account", "Capital Account"],
    answer: "Asset Account"
  },
  {
    question: "What type of account is ‘Commission Received’?",
    options: ["Asset", "Expense", "Income", "Liability"],
    answer: "Income"
  },
  {
    question: "Which document supports a return of goods to supplier?",
    options: ["Debit Note", "Credit Note", "Invoice", "Receipt"],
    answer: "Debit Note"
  },
  {
    question: "What is meant by working capital?",
    options: [
      "Capital invested in fixed assets",
      "Current Assets - Current Liabilities",
      "Cash + Debtors",
      "Gross Profit - Expenses"
    ],
    answer: "Current Assets - Current Liabilities"
  },
  {
    question: "An asset costing GHS20,000 is depreciated at 25% reducing balance. What is depreciation for year 1?",
    options: ["GHS5,000", "GHS4,000", "GHS2,500", "GHS15,000"],
    answer: "GHS5,000"
  },
  {
    question: "Which account is NOT found in the control account?",
    options: ["Debtors", "Creditors", "Bank", "Discounts"],
    answer: "Bank"
  },
  {
    question: "A balance sheet is prepared to show:",
    options: [
      "Trading results over a year",
      "Cash flow during the year",
      "Financial position at a specific date",
      "VAT liabilities"
    ],
    answer: "Financial position at a specific date"
  },
  {
    question: "A factory pays GHS1,200 monthly rent. How much rent is charged to the factory account for one year?",
    options: ["GHS14,400", "GHS12,000", "GHS1,200", "GHS1,400"],
    answer: "GHS14,400"
  },
  {
    question: "Which of the following is a ledger division?",
    options: ["Nominal", "Trade", "Trial", "Purchase"],
    answer: "Nominal"
  },
  {
    question: "Provision for doubtful debts is:",
    options: ["An expense", "An income", "A liability", "A reduction from debtors"],
    answer: "A reduction from debtors"
  },
  {
    question: "Which of these best describes a control account?",
    options: [
      "Account used for correction of errors",
      "Summarizes ledger balances",
      "Tracks cash flow",
      "Records VAT only"
    ],
    answer: "Summarizes ledger balances"
  },
  {
    question: "In single entry, profit is found by:",
    options: [
      "Calculating income - expenses",
      "Comparing opening and closing capital",
      "Bank statement review",
      "Receipts minus payments"
    ],
    answer: "Comparing opening and closing capital"
  },
  {
    question: "If a GHS1,500 sale is recorded as GHS15,000, what error has occurred?",
    options: ["Error of commission", "Error of principle", "Error of original entry", "Transposition error"],
    answer: "Error of original entry"
  },
  {
    question: "Which of the following is a reason for preparing a bank reconciliation?",
    options: ["To update inventory records", "To reconcile VAT", "To identify discrepancies", "To record credit sales"],
    answer: "To identify discrepancies"
  },
  {
    question: "The receipts and payments account is used in:",
    options: ["Limited Companies", "Sole Traders", "Partnerships", "Clubs and Societies"],
    answer: "Clubs and Societies"
  },
  {
    question: "What is the accounting treatment for bad debts written off?",
    options: ["Dr Bad Debts, Cr Debtors", "Dr Debtors, Cr Bad Debts", "Dr Capital, Cr Debtors", "Dr Purchases, Cr Debtors"],
    answer: "Dr Bad Debts, Cr Debtors"
  },
  {
    question: "Which of the following is a limitation of financial accounting?",
    options: [
      "Provides cash flow info",
      "Gives profitability data",
      "Focuses on past events",
      "Summarizes cost elements"
    ],
    answer: "Focuses on past events"
  },
  {
    question: "Depreciation affects which financial statement(s)?",
    options: ["Only Balance Sheet", "Only Income Statement", "Both Income and Balance Sheet", "None"],
    answer: "Both Income and Balance Sheet"
  },
  {
    question: "A GHS5,000 machine is depreciated 10% annually on straight line. What is the book value after 2 years?",
    options: ["GHS4,000", "GHS3,500", "GHS5,000", "GHS4,500"],
    answer: "GHS4,000"
  },
  {
    question: "What is the purpose of the cash book?",
    options: [
      "To record credit transactions",
      "To record non-financial data",
      "To record all cash and bank transactions",
      "To summarize assets and liabilities"
    ],
    answer: "To record all cash and bank transactions"
  },
  {
    question: "Which of these is not included in the Trading Account?",
    options: ["Opening Stock", "Sales", "Office Rent", "Purchases"],
    answer: "Office Rent"
  },
  {
    question: "Which principle ensures that revenue is matched to the period it is earned?",
    options: ["Consistency", "Matching", "Entity", "Accrual"],
    answer: "Matching"
  },
  {
    question: "Which of these is NOT a function of accounting?",
    options: ["Recording transactions", "Analyzing data", "Measuring inflation", "Communicating results"],
    answer: "Measuring inflation"
  },
  {
    question: "What is the primary use of the purchases journal?",
    options: [
      "To record cash purchases",
      "To record all sales",
      "To record credit purchases of goods",
      "To record credit sales"
    ],
    answer: "To record credit purchases of goods"
  },
  {
    question: "Goods worth GHS1,000 were returned to the supplier. What is the correct journal entry?",
    options: ["Dr Supplier, Cr Returns Outwards", "Dr Returns Inwards, Cr Supplier", "Dr Returns Outwards, Cr Supplier", "Dr Purchases, Cr Supplier"],
    answer: "Dr Returns Outwards, Cr Supplier"
  },
  {
    question: "Which account records the profit or loss made by a club?",
    options: ["Receipts and Payments", "Subscriptions", "Income and Expenditure", "Accumulated Fund"],
    answer: "Income and Expenditure"
  },
  {
    question: "Which accounting standard deals with inventories?",
    options: ["IAS 7", "IAS 2", "IAS 16", "IAS 10"],
    answer: "IAS 2"
  },
  {
    question: "The value of fixed assets after depreciation is called:",
    options: ["Residual Value", "Scrap Value", "Net Book Value", "Written Down Value"],
    answer: "Net Book Value"
  },
  {
    question: "A business bought equipment for GHS30,000 and expects to use it for 5 years with no residual value. What is the annual depreciation using straight-line method?",
    options: ["GHS3,000", "GHS5,000", "GHS6,000", "GHS7,500"],
    answer: "GHS6,000"
  },
  {
    question: "Which concept requires revenue to be recorded when it is earned and not when cash is received?",
    options: ["Prudence", "Matching", "Accrual", "Consistency"],
    answer: "Accrual"
  },
  {
    question: "Calculate the VAT amount on a taxable sale of GHS4,600 at 15%.",
    options: ["GHS690", "GHS460", "GHS610", "GHS600"],
    answer: "GHS690"
  },
  {
    question: "What is the purpose of the trial balance?",
    options: [
      "To prepare final accounts",
      "To check arithmetical accuracy",
      "To show net profit",
      "To summarize cash flows"
    ],
    answer: "To check arithmetical accuracy"
  },
  {
    question: "Which of the following errors will affect the trial balance?",
    options: [
      "Error of omission",
      "Error of principle",
      "Transposition error",
      "Error of commission"
    ],
    answer: "Transposition error"
  },
  {
    question: "Which account is credited when goods are sold on credit?",
    options: ["Sales Account", "Purchases Account", "Cash Account", "Capital Account"],
    answer: "Sales Account"
  },
  {
    question: "A firm’s capital at the beginning was GHS40,000. During the year, the owner introduced GHS10,000 and withdrew GHS5,000. If the closing capital is GHS60,000, what is the profit?",
    options: ["GHS15,000", "GHS10,000", "GHS20,000", "GHS25,000"],
    answer: "GHS15,000"
  },
  {
    question: "Which of these is a liability?",
    options: ["Prepaid Rent", "Debtors", "Bank Overdraft", "Stock"],
    answer: "Bank Overdraft"
  },
  {
    question: "What does the prudence concept require?",
    options: [
      "Recording revenue only when received",
      "Understating income and overstating assets",
      "Not anticipating profits but providing for all probable losses",
      "Ignoring expenses until cash is paid"
    ],
    answer: "Not anticipating profits but providing for all probable losses"
  },
  {
    question: "What is the total cost of production if prime cost is GHS30,000 and factory overheads are GHS10,000?",
    options: ["GHS20,000", "GHS30,000", "GHS40,000", "GHS10,000"],
    answer: "GHS40,000"
  },
  {
    question: "What is the accounting treatment for a carriage inwards expense?",
    options: [
      "Added to purchases",
      "Subtracted from sales",
      "Recorded as an asset",
      "Recorded under administrative expenses"
    ],
    answer: "Added to purchases"
  },
  {
    question: "If accumulated depreciation on machinery is GHS12,000 and the original cost is GHS50,000, what is the net book value?",
    options: ["GHS38,000", "GHS62,000", "GHS12,000", "GHS50,000"],
    answer: "GHS38,000"
  },
  {
    question: "Which document is issued by a seller to reduce the amount owed by a buyer?",
    options: ["Credit note", "Debit note", "Invoice", "Quotation"],
    answer: "Credit note"
  },
  {
    question: "The trial balance totals do not agree. What is the first action to take?",
    options: [
      "Prepare final accounts anyway",
      "Ignore the difference",
      "Check the additions of the trial balance",
      "Prepare a bank reconciliation statement"
    ],
    answer: "Check the additions of the trial balance"
  },
  {
    question: "Which of the following is not included in the calculation of cost of goods sold?",
    options: [
      "Opening stock",
      "Closing stock",
      "Sales",
      "Purchases"
    ],
    answer: "Sales"
  },
  // 201
  {
    question: "A business bought equipment for GHS30,000 and expects to use it for 5 years with no residual value. What is the annual depreciation using straight-line method?",
    options: ["GHS3,000", "GHS5,000", "GHS6,000", "GHS7,500"],
    answer: "GHS6,000"
  },
  // 202
  {
    question: "Which concept requires revenue to be recorded when it is earned, not when received?",
    options: ["Prudence", "Matching", "Accrual", "Consistency"],
    answer: "Accrual"
  },
  // 203
  {
    question: "Calculate VAT: GHS4,600 sale, VAT at 15%",
    options: ["GHS690", "GHS460", "GHS610", "GHS600"],
    answer: "GHS690"
  },
  // 204
  {
    question: "What is the purpose of preparing a trial balance?",
    options: [
      "To prepare final accounts",
      "To check arithmetical accuracy",
      "To show net profit",
      "To summarize cash flows"
    ],
    answer: "To check arithmetical accuracy"
  },
  // 205
  {
    question: "Which error will affect the trial balance totals?",
    options: ["Error of omission", "Error of principle", "Transposition", "Error of commission"],
    answer: "Transposition"
  },
  // 206
  {
    question: "Which account is credited when goods are sold on credit?",
    options: ["Sales Account", "Purchases", "Cash", "Capital"],
    answer: "Sales Account"
  },
  // 207
  {
    question: "Capital at start GHS40,000, introduced GHS10,000, drawings GHS5,000, closing capital GHS60,000. Profit?",
    options: ["GHS15,000", "GHS10,000", "GHS20,000", "GHS25,000"],
    answer: "GHS15,000"
  },
  // 208
  {
    question: "Which of these is a current liability?",
    options: ["Bank overdraft", "Debtors", "Stock", "Plant"],
    answer: "Bank Overdraft"
  },
  // 209
  {
    question: "What is the prudence concept?",
    options: [
      "Record revenue only when received",
      "Understate liabilities",
      "Not anticipate profits but provide for probable losses",
      "Ignore future costs"
    ],
    answer: "Not anticipate profits but provide for probable losses"
  },
  // 210
  {
    question: "Prime cost GHS30,000, factory overheads GHS10,000. Total production cost?",
    options: ["GHS20,000", "GHS30,000", "GHS40,000", "GHS10,000"],
    answer: "GHS40,000"
  },
  // 211
  {
    question: "Accounting treatment for carriage inwards expense?",
    options: [
      "Added to purchases",
      "Subtracted from sales",
      "Recorded as an asset",
      "Admin expense"
    ],
    answer: "Added to purchases"
  },
  // 212
  {
    question: "Accumulated depreciation GHS12,000, cost GHS50,000. Net book value?",
    options: ["GHS38,000", "GHS62,000", "GHS12,000", "GHS50,000"],
    answer: "GHS38,000"
  },
  // 213
  {
    question: "Seller issues a document reducing buyer’s liability. It’s a:",
    options: ["Credit note", "Debit note", "Invoice", "Receipt"],
    answer: "Credit note"
  },
  // 214
  {
    question: "Trial balance doesn’t agree. First action?",
    options: [
      "Prepare accounts anyway",
      "Ignore it",
      "Re-add trial balance",
      "Do bank reconciliation"
    ],
    answer: "Re-add trial balance"
  },
  // 215
  {
    question: "Which is NOT included in cost of goods sold?",
    options: ["Opening stock", "Closing stock", "Purchases", "Sales"],
    answer: "Sales"
  },
  // 216
  {
    question: "Intangible asset example:",
    options: ["Equipment", "Goodwill", "Stock", "Vehicle"],
    answer: "Goodwill"
  },
  // 217
  {
    question: "Net profit: Gross GHS18,000, expenses GHS5,000?",
    options: ["GHS13,000", "GHS23,000", "GHS18,000", "GHS5,000"],
    answer: "GHS13,000"
  },
  // 218
  {
    question: "Ledger for wages:",
    options: ["Sales ledger", "Purchases ledger", "General ledger", "Nominal ledger"],
    answer: "Nominal ledger"
  },
  // 219
  {
    question: "Customer pays GHS2,000 on account. Credit which account?",
    options: ["Cash", "Debtors", "Sales", "Creditors"],
    answer: "Debtors"
  },
  // 220
  {
    question: "In partnership, interest on drawings is treated as:",
    options: ["Income to firm", "Expense to firm", "Expense to partner", "Liability"],
    answer: "Income to firm"
  },
  // 221
  {
    question: "Sales GHS100k, returns inwards GHS5k, COGS GHS60k. Gross profit?",
    options: ["GHS35,000", "GHS40,000", "GHS45,000", "GHS55,000"],
    answer: "GHS35,000"
  },
  // 222
  {
    question: "Which is a current asset?",
    options: ["Building", "Fixtures", "Cash in hand", "Capital"],
    answer: "Cash in hand"
  },
  // 223
  {
    question: "Depreciation is classified as a(n):",
    options: ["Income", "Liability", "Expense", "Current Asset"],
    answer: "Expense"
  },
  // 224
  {
    question: "Credit entry for goods sold on credit?",
    options: ["Dr Cash, Cr Sales", "Dr Sales, Cr Debtors", "Dr Debtors, Cr Sales", "Dr Purchases, Cr Sales"],
    answer: "Dr Debtors, Cr Sales"
  },
  // 225
  {
    question: "Prepaid insurance out of GHS4,500 (12 months) – current period 6 months?",
    options: ["GHS2,250", "GHS4,500", "GHS1,500", "GHS3,000"],
    answer: "GHS2,250"
  },
  // 226
  {
    question: "Which is source document for purchases?",
    options: ["Invoice", "Cheque", "Credit note", "Receipt"],
    answer: "Invoice"
  },
  // 227
  {
    question: "Included in prime cost:",
    options: ["Factory rent", "Direct materials", "Depreciation", "Admin"],
    answer: "Direct materials"
  },
  // 228
  {
    question: "Debtors GHS20,000, bad debts GHS2,000. Net debtors?",
    options: ["GHS18,000", "GHS22,000", "GHS20,000", "GHS2,000"],
    answer: "GHS18,000"
  },
  // 229
  {
    question: "Credit purchases GHS35,000, returns outwards GHS5,000. Net purchases?",
    options: ["GHS30,000", "GHS40,000", "GHS35,000", "GHS25,000"],
    answer: "GHS30,000"
  },
  // 230
  {
    question: "Which is an indirect manufacturing expense?",
    options: ["Direct labour", "Factory electricity", "Raw materials", "Sales commission"],
    answer: "Factory electricity"
  },
  // 231
  {
    question: "Depreciation affects which statements?",
    options: ["Income only", "Balance only", "Both", "Neither"],
    answer: "Both"
  },
  // 232
  {
    question: "Book value of GHS5k asset after 2 years of 10% SL depreciation?",
    options: ["GHS4,000", "GHS3,500", "GHS5,000", "GHS4,500"],
    answer: "GHS4,000"
  },
  // 233
  {
    question: "Purpose of a cash book:",
    options: [
      "Record credit transactions",
      "Record non-financial data",
      "Record all cash/bank transactions",
      "Summarize position"
    ],
    answer: "Record all cash/bank transactions"
  },
  // 234
  {
    question: "Which is excluded from the trading account?",
    options: ["Opening stock", "Sales", "Office rent", "Purchases"],
    answer: "Office rent"
  },
  // 235
  {
    question: "Which principle matches revenue in correct period?",
    options: ["Consistency", "Matching", "Entity", "Accrual"],
    answer: "Matching"
  },
  // 236
  {
    question: "Which is NOT a function of accounting?",
    options: ["Recording transactions", "Analyzing data", "Measuring inflation", "Communicating results"],
    answer: "Measuring inflation"
  },
  // 237
  {
    question: "Primary use of purchases journal?",
    options: [
      "Record cash purchases",
      "Record all sales",
      "Record credit purchases",
      "Record credit sales"
    ],
    answer: "Record credit purchases"
  },
  // 238
  {
    question: "Goods worth GHS1,000 returned to supplier. Entry?",
    options: [
      "Dr Supplier, Cr Returns Outwards",
      "Dr Returns Inwards, Cr Supplier",
      "Dr Returns Outwards, Cr Supplier",
      "Dr Purchases, Cr Supplier"
    ],
    answer: "Dr Returns Outwards, Cr Supplier"
  },
  // 239
  {
    question: "Profit or loss in club appears in which account?",
    options: ["Receipts & Payments", "Subscriptions", "Income & Expenditure", "Accumulated Fund"],
    answer: "Income & Expenditure"
  },
  // 240
  {
    question: "IAS dealing with inventories?",
    options: ["IAS 7", "IAS 2", "IAS 16", "IAS 10"],
    answer: "IAS 2"
  },
  // 241
  {
    question: "Value of fixed assets after depreciation is called?",
    options: ["Residual value", "Scrap value", "Net book value", "Disposed value"],
    answer: "Net book value"
  },
  // 242
  {
    question: "Accumulated depreciation GHS12,000 for GHS50,000 asset: net book?",
    options: ["GHS38,000", "GHS12,000", "GHS50,000", "GHS62,000"],
    answer: "GHS38,000"
  },
  // 243
  {
    question: "What’s the role of a suspense account?",
    options: [
      "Hold ledger totals",
      "Temporarily store trial balance differences",
      "Record VAT entries",
      "Store capital receipts"
    ],
    answer: "Temporarily store trial balance differences"
  },
  // 244
  {
    question: "Which concept assumes business will continue?",
    options: ["Consistency", "Going concern", "Realisation", "Materiality"],
    answer: "Going concern"
  },
  // 245
  {
    question: "Club has opening accumulated fund GHS5,000, surplus GHS1,200. New fund?",
    options: ["GHS5,000", "GHS6,200", "GHS3,800", "GHS1,200"],
    answer: "GHS6,200"
  },
  // 246
  {
    question: "Single entry profit determined by?",
    options: [
      "Income & Expenditure",
      "Statement of affairs method",
      "Ledger accounts",
      "Trading account"
    ],
    answer: "Statement of affairs method"
  },
  // 247
  {
    question: "Capital income example?",
    options: ["Depreciation", "Sales returns", "Bank loan", "Sale of fixed asset"],
    answer: "Sale of fixed asset"
  },
  // 248
  {
    question: "Which account records subscriptions in clubs?",
    options: [
      "Receipts",
      "Subscriptions Account",
      "Income Statement",
      "Capital"
    ],
    answer: "Subscriptions Account"
  },
  // 249
  {
    question: "Which financial statement shows performance over time?",
    options: ["Balance sheet", "Income statement", "Cash flow statement", "Trial balance"],
    answer: "Income statement"
  },
  // 250
  {
    question: "Bank reconciliation statement is prepared to:",
    options: [
      "Update stock records",
      "Identify bank–book differences",
      "Prepare final accounts",
      "Record credit sales"
    ],
    answer: "Identify bank–book differences"
  },
  // 251
  {
    question: "Opening stock is GHS10,000, purchases GHS50,000, and closing stock is GHS12,000. What is the cost of goods sold?",
    options: ["GHS48,000", "GHS50,000", "GHS52,000", "GHS60,000"],
    answer: "GHS48,000"
  },
  // 252
  {
    question: "What is the main purpose of Control Accounts?",
    options: ["To detect errors", "To record assets", "To avoid trial balance", "To record liabilities"],
    answer: "To detect errors"
  },
  // 253
  {
    question: "Which of these accounts is not part of the cash book?",
    options: ["Bank", "Cash", "Discount", "Sales"],
    answer: "Sales"
  },
  // 254
  {
    question: "If assets are GHS150,000 and liabilities GHS90,000, what is the capital?",
    options: ["GHS60,000", "GHS90,000", "GHS240,000", "GHS150,000"],
    answer: "GHS60,000"
  },
  // 255
  {
    question: "In departmental accounts, common expenses are usually:",
    options: ["Ignored", "Divided equally", "Allocated based on usage", "Added to one department"],
    answer: "Allocated based on usage"
  },
  // 256
  {
    question: "Which account is debited when a customer settles their debt in cash?",
    options: ["Debtors", "Sales", "Cash", "Bank"],
    answer: "Cash"
  },
  // 257
  {
    question: "What is the purpose of an income and expenditure account in a club?",
    options: [
      "To record cash received and paid",
      "To show the financial position",
      "To determine surplus or deficit",
      "To show accumulated fund"
    ],
    answer: "To determine surplus or deficit"
  },
  // 258
  {
    question: "A company buys machinery worth GHS80,000 and estimates a residual value of GHS8,000 after 6 years. Annual depreciation (straight-line)?",
    options: ["GHS12,000", "GHS10,000", "GHS8,000", "GHS9,000"],
    answer: "GHS12,000"
  },
  // 259
  {
    question: "The matching principle requires:",
    options: [
      "Revenue matches with expenses in the same period",
      "Assets = liabilities + equity",
      "Cash equals net profit",
      "Prepaid expenses recorded as revenue"
    ],
    answer: "Revenue matches with expenses in the same period"
  },
  // 260
  {
    question: "Which of the following is not a user of accounting information?",
    options: ["Investors", "Suppliers", "Customers", "Librarians"],
    answer: "Librarians"
  },
  // 261
  {
    question: "Sales GHS120,000; Debtors GHS20,000; Returns Inward GHS5,000; What is net sales?",
    options: ["GHS125,000", "GHS100,000", "GHS115,000", "GHS120,000"],
    answer: "GHS115,000"
  },
  // 262
  {
    question: "The ledger which includes capital, sales, and expenses is called:",
    options: ["General Ledger", "Sales Ledger", "Purchases Ledger", "Subsidiary Ledger"],
    answer: "General Ledger"
  },
  // 263
  {
    question: "A payment received from a customer is recorded in the:",
    options: ["Journal", "Sales Day Book", "Cash Book", "Trial Balance"],
    answer: "Cash Book"
  },
  // 264
  {
    question: "A GHS5,000 debt is written off. What is the journal entry?",
    options: [
      "Dr Bad Debts, Cr Debtors",
      "Dr Debtors, Cr Bad Debts",
      "Dr Cash, Cr Debtors",
      "Dr Debtors, Cr Sales"
    ],
    answer: "Dr Bad Debts, Cr Debtors"
  },
  // 265
  {
    question: "Purchases ledger is also known as:",
    options: ["Sales ledger", "General ledger", "Creditors ledger", "Nominal ledger"],
    answer: "Creditors ledger"
  },
  // 266
  {
    question: "A club's receipts and payments account is a type of:",
    options: ["Income statement", "Cash account", "Balance sheet", "Trial balance"],
    answer: "Cash account"
  },
  // 267
  {
    question: "What are accruals?",
    options: ["Prepaid expenses", "Income received in advance", "Expenses due but unpaid", "Assets"],
    answer: "Expenses due but unpaid"
  },
  // 268
  {
    question: "If cash received is GHS2,500 and not recorded, what is the impact on the trial balance?",
    options: ["Overstated", "Understated", "It will not agree", "No effect"],
    answer: "It will not agree"
  },
  // 269
  {
    question: "Which of the following is an intangible asset?",
    options: ["Furniture", "Debtors", "Goodwill", "Vehicles"],
    answer: "Goodwill"
  },
  // 270
  {
    question: "Which of these is a capital expenditure?",
    options: ["Purchasing a delivery van", "Rent paid", "Stationery", "Wages"],
    answer: "Purchasing a delivery van"
  },
  // 271
  {
    question: "Petty cash is kept under which system?",
    options: ["Credit system", "Banking system", "Imprest system", "General ledger system"],
    answer: "Imprest system"
  },
  // 272
  {
    question: "Which concept requires the same accounting treatment year to year?",
    options: ["Accrual", "Prudence", "Consistency", "Entity"],
    answer: "Consistency"
  },
  // 273
  {
    question: "A ledger account with more debits than credits has:",
    options: ["A credit balance", "A debit balance", "A nil balance", "An overdraft"],
    answer: "A debit balance"
  },
  // 274
  {
    question: "If bad debts of GHS1,000 are to be written off, and provision is already GHS1,200, what happens?",
    options: ["Increase provision", "Reduce provision", "No adjustment", "Create new account"],
    answer: "Reduce provision"
  },
  // 275
  {
    question: "Control accounts help in:",
    options: ["Recording payroll", "Verifying individual balances", "Recording assets", "Producing income statement"],
    answer: "Verifying individual balances"
  },
  // 276
  {
    question: "A partnership revalues assets before admission of a new partner. The account used is:",
    options: ["Capital", "Goodwill", "Revaluation", "Profit and Loss"],
    answer: "Revaluation"
  },
  // 277
  {
    question: "Which statement best explains ‘substance over form’?",
    options: [
      "Transactions are recorded by legal form",
      "Transactions are recorded by appearance",
      "Economic reality takes precedence over legal form",
      "Only physical transactions are recorded"
    ],
    answer: "Economic reality takes precedence over legal form"
  },
  // 278
  {
    question: "Credit sales for the month are GHS40,000 and cash sales are GHS15,000. Total sales?",
    options: ["GHS55,000", "GHS25,000", "GHS40,000", "GHS15,000"],
    answer: "GHS55,000"
  },
  // 279
  {
    question: "Gross profit is calculated as:",
    options: ["Revenue - Expenses", "Revenue - COGS", "COGS - Expenses", "Revenue - Assets"],
    answer: "Revenue - COGS"
  },
  // 280
  {
    question: "Capital + Liabilities equals:",
    options: ["Assets", "Equity", "Revenue", "Expenses"],
    answer: "Assets"
  },
  // 281
  {
    question: "Which of these is not a direct cost?",
    options: ["Raw materials", "Direct wages", "Factory rent", "Machine operator wages"],
    answer: "Factory rent"
  },
  // 282
  {
    question: "In a cash flow statement, ‘purchase of fixed assets’ appears under:",
    options: ["Operating activities", "Financing activities", "Investing activities", "Capital activities"],
    answer: "Investing activities"
  },
  // 283
  {
    question: "A business paid GHS3,000 rent in advance. It is recorded as:",
    options: ["Accrued expense", "Prepaid expense", "Capital expense", "Deferred revenue"],
    answer: "Prepaid expense"
  },
  // 284
  {
    question: "The ledger used for assets and expenses is:",
    options: ["General ledger", "Purchases ledger", "Sales ledger", "Nominal ledger"],
    answer: "General ledger"
  },
  // 285
  {
    question: "The double entry for cash paid to a creditor is:",
    options: ["Dr Creditor, Cr Cash", "Dr Purchases, Cr Cash", "Dr Cash, Cr Creditor", "Dr Cash, Cr Purchases"],
    answer: "Dr Creditor, Cr Cash"
  },
  // 286
  {
    question: "Which is a function of accounting software?",
    options: ["Cook meals", "Process payroll", "Clean storage", "Repair machinery"],
    answer: "Process payroll"
  },
  // 287
  {
    question: "Capital expenditure appears in the:",
    options: ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Bank Reconciliation"],
    answer: "Balance Sheet"
  },
  // 288
  {
    question: "A manufacturing account shows:",
    options: ["Net profit", "Gross profit", "Cost of goods produced", "Sales"],
    answer: "Cost of goods produced"
  },
  // 289
  {
    question: "What is GHS5,000 of electricity unpaid at year end classified as?",
    options: ["Accrued income", "Prepaid expense", "Accrued expense", "Deferred income"],
    answer: "Accrued expense"
  },
  // 290
  {
    question: "Which of the following is a liability?",
    options: ["Stock", "Prepaid rent", "Trade creditors", "Wages"],
    answer: "Trade creditors"
  },
  // 291
  {
    question: "An asset with a long life used in operations is called:",
    options: ["Fixed asset", "Current asset", "Intangible asset", "Liquid asset"],
    answer: "Fixed asset"
  },
  // 292
  {
    question: "Total expenses = GHS24,000, revenue = GHS50,000. Net profit?",
    options: ["GHS26,000", "GHS76,000", "GHS24,000", "GHS50,000"],
    answer: "GHS26,000"
  },
  // 293
  {
    question: "Prepaid insurance is an example of a(n):",
    options: ["Asset", "Liability", "Revenue", "Expense"],
    answer: "Asset"
  },
  // 294
  {
    question: "The book of prime entry for credit sales is the:",
    options: ["Cash Book", "Journal", "Sales Day Book", "Ledger"],
    answer: "Sales Day Book"
  },
  // 295
  {
    question: "Depreciation is based on which concept?",
    options: ["Matching", "Accrual", "Going concern", "Materiality"],
    answer: "Matching"
  },
  // 296
  {
    question: "What is a suspense account used for?",
    options: ["Store assets", "Hide errors", "Temporarily hold differences", "Create liabilities"],
    answer: "Temporarily hold differences"
  },
  // 297
  {
    question: "Which of these is not a book of original entry?",
    options: ["Journal", "Ledger", "Cash Book", "Sales Day Book"],
    answer: "Ledger"
  },
  // 298
  {
    question: "Which ledger would you find ‘sales returns’?",
    options: ["Nominal ledger", "Sales ledger", "Purchases ledger", "General ledger"],
    answer: "Nominal ledger"
  },
  // 299
  {
    question: "Which concept assumes the business is separate from owner?",
    options: ["Going concern", "Consistency", "Business entity", "Materiality"],
    answer: "Business entity"
  },
  // 300
  {
    question: "What type of account is a Drawings Account?",
    options: ["Expense", "Liability", "Capital", "Contra-capital"],
    answer: "Contra-capital"
  },
  // 301
  {
    question: "If purchases are GHS60,000, purchase returns GHS5,000, and carriage inwards GHS3,000, what is the net cost of purchases?",
    options: ["GHS55,000", "GHS58,000", "GHS60,000", "GHS62,000"],
    answer: "GHS58,000"
  },
  // 302
  {
    question: "In partnership accounts, interest on drawings is treated as:",
    options: ["An expense", "An income", "A liability", "A capital reduction"],
    answer: "An income"
  },
  // 303
  {
    question: "Which of the following is a feature of a manufacturing account?",
    options: ["Closing stock of finished goods", "Prime cost", "Net profit", "Dividends"],
    answer: "Prime cost"
  },
  // 304
  {
    question: "A machine costs GHS100,000 with a residual value of GHS10,000 after 5 years. What is the annual depreciation (straight-line)?",
    options: ["GHS18,000", "GHS20,000", "GHS22,000", "GHS25,000"],
    answer: "GHS18,000"
  },
  // 305
  {
    question: "What is the purpose of a trial balance?",
    options: [
      "To show profits",
      "To detect fraud",
      "To check arithmetic accuracy of double entry",
      "To display net assets"
    ],
    answer: "To check arithmetic accuracy of double entry"
  },
  // 306
  {
    question: "What type of asset is inventory?",
    options: ["Non-current", "Tangible", "Intangible", "Current"],
    answer: "Current"
  },
  // 307
  {
    question: "What is the double entry for cash sales?",
    options: ["Dr Cash, Cr Sales", "Dr Sales, Cr Cash", "Dr Cash, Cr Debtors", "Dr Debtors, Cr Sales"],
    answer: "Dr Cash, Cr Sales"
  },
  // 308
  {
    question: "A bank statement shows GHS1,000 more than the cash book. What could cause this?",
    options: ["Unpresented cheques", "Bank charges", "Direct debit", "Standing order"],
    answer: "Unpresented cheques"
  },
  // 309
  {
    question: "Which of the following is NOT a characteristic of VAT?",
    options: ["Charged on value addition", "Collected by government", "Paid by final consumer", "Charged on wages"],
    answer: "Charged on wages"
  },
  // 310
  {
    question: "Provision for doubtful debts is created to:",
    options: ["Write off all debtors", "Reduce profits", "Reflect realistic receivables", "Show bad debts"],
    answer: "Reflect realistic receivables"
  },
  // 311
  {
    question: "If total assets are GHS200,000 and liabilities are GHS70,000, what is capital?",
    options: ["GHS270,000", "GHS130,000", "GHS200,000", "GHS70,000"],
    answer: "GHS130,000"
  },
  // 312
  {
    question: "Drawings by owners decrease:",
    options: ["Assets", "Liabilities", "Capital", "Expenses"],
    answer: "Capital"
  },
  // 313
  {
    question: "Which of these is NOT an accounting concept?",
    options: ["Going concern", "Matching", "Flexibility", "Accrual"],
    answer: "Flexibility"
  },
  // 314
  {
    question: "What is the book where credit purchases are first recorded?",
    options: ["Sales Day Book", "Purchases Day Book", "General Journal", "Cash Book"],
    answer: "Purchases Day Book"
  },
  // 315
  {
    question: "In computerized accounting, which of these is a benefit?",
    options: ["Slower processing", "Increased errors", "Real-time reporting", "Manual posting"],
    answer: "Real-time reporting"
  },
  // 316
  {
    question: "Which account is debited when a business pays telephone bills?",
    options: ["Telephone expense", "Cash", "Bank", "Capital"],
    answer: "Telephone expense"
  },
  // 317
  {
    question: "If rent is paid in advance, what is the accounting treatment?",
    options: ["Accrued income", "Prepaid expense", "Capital income", "Liability"],
    answer: "Prepaid expense"
  },
  // 318
  {
    question: "In control accounts, what does the credit side of the sales ledger control show?",
    options: ["Receipts from debtors", "Sales returns", "Opening debtors", "Closing debtors"],
    answer: "Receipts from debtors"
  },
  // 319
  {
    question: "A club received GHS5,000 in subscriptions, GHS500 was for next year. Income to report?",
    options: ["GHS5,500", "GHS4,500", "GHS5,000", "GHS500"],
    answer: "GHS4,500"
  },
  // 320
  {
    question: "Which financial statement shows assets and liabilities?",
    options: ["Income statement", "Trial balance", "Cash flow", "Statement of financial position"],
    answer: "Statement of financial position"
  },
  // 321
  {
    question: "If provision for depreciation is GHS12,000 and the asset costs GHS40,000, what is the net book value?",
    options: ["GHS28,000", "GHS40,000", "GHS12,000", "GHS52,000"],
    answer: "GHS28,000"
  },
  // 322
  {
    question: "Capital introduced GHS30,000, profit GHS10,000, and drawings GHS5,000. What is closing capital?",
    options: ["GHS30,000", "GHS35,000", "GHS40,000", "GHS45,000"],
    answer: "GHS35,000"
  },
  // 323
  {
    question: "VAT on purchases is:",
    options: ["An asset", "An expense", "A liability", "Not recorded"],
    answer: "An asset"
  },
  // 324
  {
    question: "What type of account is 'bank overdraft'?",
    options: ["Asset", "Liability", "Capital", "Income"],
    answer: "Liability"
  },
  // 325
  {
    question: "Which ledger is used to record wages and salaries?",
    options: ["Sales ledger", "Purchases ledger", "Nominal ledger", "Control account"],
    answer: "Nominal ledger"
  },
  // 326
  {
    question: "Cost of raw materials GHS25,000; direct wages GHS10,000. What is prime cost?",
    options: ["GHS35,000", "GHS25,000", "GHS10,000", "GHS15,000"],
    answer: "GHS35,000"
  },
  // 327
  {
    question: "A factory machine is purchased for GHS50,000. Which account is debited?",
    options: ["Machinery", "Cash", "Purchases", "Capital"],
    answer: "Machinery"
  },
  // 328
  {
    question: "Which of the following is a feature of public sector accounting?",
    options: ["Profit-driven", "Private ownership", "Budget focus", "Unlimited liability"],
    answer: "Budget focus"
  },
  // 329
  {
    question: "Which financial statement would you consult to calculate liquidity ratio?",
    options: ["Income statement", "Balance sheet", "Cash flow", "VAT returns"],
    answer: "Balance sheet"
  },
  // 330
  {
    question: "What is the main source of income for clubs?",
    options: ["Sales", "Subscriptions", "Investments", "Rent"],
    answer: "Subscriptions"
  },
  // 331
  {
    question: "A transaction is first recorded in a:",
    options: ["Journal", "Ledger", "Trial balance", "Control account"],
    answer: "Journal"
  },
  // 332
  {
    question: "Cost of goods manufactured is transferred to:",
    options: ["Trading account", "Profit and loss", "Balance sheet", "Manufacturing account"],
    answer: "Trading account"
  },
  // 333
  {
    question: "If depreciation is omitted, which statement is overstated?",
    options: ["Expenses", "Assets", "Liabilities", "Revenue"],
    answer: "Assets"
  },
  // 334
  {
    question: "What is the function of a purchases ledger control account?",
    options: ["Control sales", "Track debtors", "Summarize creditors", "Calculate profit"],
    answer: "Summarize creditors"
  },
  // 335
  {
    question: "Capital is increased by:",
    options: ["Drawings", "Losses", "Expenses", "Profits"],
    answer: "Profits"
  },
  // 336
  {
    question: "A non-current asset is:",
    options: ["To be sold in 1 year", "Held for short term", "Used in operations", "Cash equivalent"],
    answer: "Used in operations"
  },
  // 337
  {
    question: "Rent owing GHS2,000 is recorded as:",
    options: ["Prepaid expense", "Accrued expense", "Accrued income", "Deferred revenue"],
    answer: "Accrued expense"
  },
  // 338
  {
    question: "Factory insurance is classified as:",
    options: ["Administrative expense", "Selling expense", "Factory overhead", "Capital expense"],
    answer: "Factory overhead"
  },
  // 339
  {
    question: "What is the total cost if raw materials = GHS15,000, direct labor = GHS10,000, and overheads = GHS5,000?",
    options: ["GHS30,000", "GHS25,000", "GHS20,000", "GHS15,000"],
    answer: "GHS30,000"
  },
  // 340
  {
    question: "When a debtor becomes insolvent, which account is credited?",
    options: ["Bad debts", "Debtors", "Cash", "Bank"],
    answer: "Debtors"
  },
  // 341
  {
    question: "Goodwill is shown under:",
    options: ["Current assets", "Intangible assets", "Liabilities", "Capital"],
    answer: "Intangible assets"
  },
  // 342
  {
    question: "A branch's net profit is transferred to:",
    options: ["General reserve", "Head office", "Cash flow", "Revaluation account"],
    answer: "Head office"
  },
  // 343
  {
    question: "The unit of measurement in accounting is:",
    options: ["Length", "Volume", "Currency", "Quantity"],
    answer: "Currency"
  },
  // 344
  {
    question: "A cheque dishonored is recorded as:",
    options: ["Credit bank, debit debtor", "Credit debtor, debit bank", "Credit bank, debit sales", "No entry"],
    answer: "Credit bank, debit debtor"
  },
  // 345
  {
    question: "What is the purpose of an income statement?",
    options: ["To show financial position", "To show profit or loss", "To show cash flows", "To show assets"],
    answer: "To show profit or loss"
  },
  // 346
  {
    question: "Which item appears in both manufacturing and income statements?",
    options: ["Factory rent", "Prime cost", "Cost of goods sold", "Sales"],
    answer: "Cost of goods sold"
  },
  // 347
  {
    question: "Petty cash balance appears in the:",
    options: ["Income statement", "Cash flow", "Balance sheet", "Petty cash book only"],
    answer: "Balance sheet"
  },
  // 348
  {
    question: "Discount received is classified as:",
    options: ["Income", "Expense", "Asset", "Liability"],
    answer: "Income"
  },
  // 349
  {
    question: "Unit cost = GHS4, quantity produced = 1,200. Total cost?",
    options: ["GHS4,800", "GHS4,200", "GHS3,800", "GHS5,000"],
    answer: "GHS4,800"
  },
  // 350
  {
    question: "Which of the following is not a qualitative characteristic of financial info?",
    options: ["Reliability", "Relevance", "Cost", "Comparability"],
    answer: "Cost"
  },
  {
    question: "What are the main characteristics of a manufacturing account?",
    options: [
      "It records personal expenses of the owner",
      "It includes prime cost and cost of production",
      "It includes dividends and interest",
      "It tracks only administrative costs"
    ],
    answer: "It includes prime cost and cost of production"
  },
  {
    question: "Calculate the production cost given: Prime cost = GHS40,000, Factory overhead = GHS10,000.",
    options: ["GHS30,000", "GHS50,000", "GHS40,000", "GHS60,000"],
    answer: "GHS50,000"
  },
  {
    question: "Which of the following is a direct cost in manufacturing?",
    options: [
      "Factory rent",
      "Factory supervisor's salary",
      "Raw materials",
      "Depreciation on machinery"
    ],
    answer: "Raw materials"
  },
  {
    question: "Which account helps separate profits made in the manufacturing department from general business profits?",
    options: [
      "Trading account",
      "Manufacturing account",
      "Profit and Loss account",
      "Capital account"
    ],
    answer: "Manufacturing account"
  },
  {
    question: "How are unrealized profits on stock treated in manufacturing accounts?",
    options: [
      "They are added to gross profit",
      "They are ignored",
      "They are deducted from inventory",
      "They are included in closing stock valuation"
    ],
    answer: "They are deducted from inventory"
  },
  {
    question: "What does departmental accounting allow businesses to do?",
    options: [
      "Track competitor performance",
      "Allocate total profit without details",
      "Measure performance of each segment",
      "Prepare manufacturing statements"
    ],
    answer: "Measure performance of each segment"
  },
  {
    question: "Which document tracks inter-branch transfers in branch accounting?",
    options: [
      "Transfer journal",
      "Branch adjustment account",
      "Stock register",
      "Bank reconciliation"
    ],
    answer: "Transfer journal"
  },
  {
    question: "Calculate total revenue from two branches: Branch A = GHS120,000, Branch B = GHS80,000.",
    options: ["GHS180,000", "GHS160,000", "GHS200,000", "GHS100,000"],
    answer: "GHS200,000"
  },
  {
    question: "What is a major feature of partnership accounting?",
    options: [
      "Equal capital contribution",
      "Separation of ownership and control",
      "Profit sharing ratios",
      "Use of manufacturing accounts"
    ],
    answer: "Profit sharing ratios"
  },
  {
    question: "How is goodwill treated in partnership admission?",
    options: [
      "It is ignored",
      "It is shown only in dissolution",
      "It is adjusted in old partners’ capital accounts",
      "It is paid to new partner"
    ],
    answer: "It is adjusted in old partners’ capital accounts"
  },
  {
    question: "A partnership firm is dissolved. Which account is used to record asset realization?",
    options: [
      "Capital account",
      "Revaluation account",
      "Realization account",
      "Cash account"
    ],
    answer: "Realization account"
  },
  {
    question: "How is depreciation charged in partnership accounts?",
    options: [
      "Only on tangible current assets",
      "On capital contributions",
      "On fixed assets based on usage",
      "On drawings"
    ],
    answer: "On fixed assets based on usage"
  },
  {
    question: "Which is not a type of company?",
    options: [
      "Sole trader company",
      "Private limited company",
      "Public limited company",
      "Company limited by guarantee"
    ],
    answer: "Sole trader company"
  },
  {
    question: "What distinguishes public sector accounting from private sector accounting?",
    options: [
      "Focus on profit maximization",
      "Emphasis on service delivery",
      "Use of ledger books",
      "Tracking manufacturing costs"
    ],
    answer: "Emphasis on service delivery"
  },
  {
    question: "What is the key component in cash flow statements?",
    options: [
      "Profit and loss",
      "Income summary",
      "Operating, investing, and financing activities",
      "Working capital ratio"
    ],
    answer: "Operating, investing, and financing activities"
  },
  {
    question: "Calculate working capital: Current assets = GHS25,000, Current liabilities = GHS10,000.",
    options: ["GHS35,000", "GHS10,000", "GHS15,000", "GHS25,000"],
    answer: "GHS15,000"
  },
  {
    question: "What is capital expenditure?",
    options: [
      "Expenses on routine operations",
      "Expenses for daily needs",
      "Spending on assets that last over a year",
      "Salaries and wages"
    ],
    answer: "Spending on assets that last over a year"
  },
  {
    question: "What is the source of government revenue?",
    options: ["Internal borrowing", "Capital reserve", "Taxation", "Reserves"],
    answer: "Taxation"
  },
  {
    question: "What distinguishes capital expenditure from recurrent expenditure?",
    options: [
      "Capital is routine and short-term",
      "Capital is long-term investment; recurrent is regular operational",
      "Capital is for daily expenses",
      "There is no difference"
    ],
    answer: "Capital is long-term investment; recurrent is regular operational"
  },
  {
    question: "Which software is commonly used in computerized accounting?",
    options: ["CorelDraw", "Tally", "Photoshop", "Windows Media Player"],
    answer: "Tally"
  },
  {
    question: "Which of the following is an advantage of computerized accounting?",
    options: [
      "High error rate",
      "Slower processes",
      "Reduced need for auditing",
      "Quick and accurate reports"
    ],
    answer: "Quick and accurate reports"
  },
  {
    question: "What is a primary drawback of manual accounting?",
    options: [
      "Requires no training",
      "Prone to human errors",
      "Fast data retrieval",
      "Secured backup"
    ],
    answer: "Prone to human errors"
  },
  {
    question: "Which component helps ensure accountability in public sector accounting?",
    options: [
      "Private balance sheet",
      "Auditing and reporting",
      "Stock valuation",
      "Branch profit analysis"
    ],
    answer: "Auditing and reporting"
  },
  {
    question: "Which report is submitted by District Assemblies for financial accountability?",
    options: [
      "Cash flow forecast",
      "Receipts and Payments Account",
      "Petty cash statement",
      "Trial balance"
    ],
    answer: "Receipts and Payments Account"
  },
  {
    question: "If opening capital = GHS30,000, closing capital = GHS40,000, drawings = GHS5,000, what is profit?",
    options: ["GHS5,000", "GHS15,000", "GHS10,000", "GHS35,000"],
    answer: "GHS15,000"
  },
  {
    question: "Which book records VAT collected from customers?",
    options: [
      "Sales day book",
      "VAT output book",
      "Cash book",
      "Trial balance"
    ],
    answer: "VAT output book"
  },
  {
    question: "Calculate VAT: Selling price = GHS1,000, VAT rate = 15%",
    options: ["GHS150", "GHS115", "GHS1,150", "GHS850"],
    answer: "GHS150"
  },
  {
    question: "Which document records discounts allowed to customers?",
    options: [
      "Sales invoice",
      "Cash book (debit side)",
      "Returns inward book",
      "Journal proper"
    ],
    answer: "Cash book (debit side)"
  },
  {
    question: "Which qualitative characteristic ensures accounting info is timely?",
    options: [
      "Faithful representation",
      "Comparability",
      "Timeliness",
      "Verifiability"
    ],
    answer: "Timeliness"
  },
  {
    question: "A trial balance fails to balance. What may help identify the issue?",
    options: [
      "Control accounts",
      "Petty cash voucher",
      "Sales ledger",
      "Suspense account"
    ],
    answer: "Suspense account"
  },
  {
    question: "What is the formula for computing credit sales using control accounts?",
    options: [
      "Opening debtors + Cash received - Closing debtors",
      "Closing creditors - Purchases + Cash paid",
      "Closing stock + Purchases - Sales",
      "Sales + Returns - Discounts"
    ],
    answer: "Closing debtors - Opening debtors + Cash received"
  },
  {
    question: "Which ledger would contain accumulated fund account for clubs?",
    options: [
      "General ledger",
      "Cash book",
      "Creditors ledger",
      "Income ledger"
    ],
    answer: "General ledger"
  },
  {
    question: "Subscriptions due but not received are classified as:",
    options: ["Prepaid expense", "Liability", "Accrued income", "Drawings"],
    answer: "Accrued income"
  },
  {
    question: "How do you calculate prime cost?",
    options: [
      "Direct materials + Direct labor + Factory overhead",
      "Direct materials + Direct labor",
      "Indirect expenses + Salaries",
      "Cost of production - Factory expenses"
    ],
    answer: "Direct materials + Direct labor"
  },
  {
    question: "Which of the following is an indirect cost?",
    options: ["Raw materials", "Factory rent", "Direct wages", "Royalties"],
    answer: "Factory rent"
  },
  {
    question: "What is depreciation?",
    options: [
      "Reduction in inventory value",
      "Loss from sales returns",
      "Allocation of cost of asset over useful life",
      "Increase in capital"
    ],
    answer: "Allocation of cost of asset over useful life"
  },
  {
    question: "Which book is not a book of original entry?",
    options: [
      "Cash book",
      "Journal",
      "Trial balance",
      "Sales day book"
    ],
    answer: "Trial balance"
  },
  {
    question: "How is petty cash replenished?",
    options: [
      "Credit sales",
      "Cash withdrawals",
      "Imprest system",
      "Ledger transfers"
    ],
    answer: "Imprest system"
  },
  {
    question: "Calculate closing stock: Opening stock = GHS5,000, Purchases = GHS15,000, Cost of sales = GHS10,000",
    options: ["GHS5,000", "GHS10,000", "GHS15,000", "GHS20,000"],
    answer: "GHS10,000"
  },
  {
    question: "Bad debts are classified under:",
    options: ["Fixed assets", "Revenue", "Expenses", "Capital"],
    answer: "Expenses"
  },
  {
    question: "Why are control accounts prepared?",
    options: [
      "To record fixed assets",
      "To help locate errors",
      "To replace ledgers",
      "To track petty cash"
    ],
    answer: "To help locate errors"
  },
  {
    question: "What is a distinguishing feature of computerized accounting?",
    options: [
      "Use of vouchers",
      "Manual calculation",
      "Automated error checking",
      "Ledger balancing"
    ],
    answer: "Automated error checking"
  },
  {
    question: "Which ledger contains the wages account?",
    options: ["Sales ledger", "General ledger", "Purchases ledger", "Cash book"],
    answer: "General ledger"
  },
  {
    question: "Which type of account is 'Rent received'?",
    options: ["Asset", "Expense", "Income", "Liability"],
    answer: "Income"
  },
  {
    question: "What type of asset is goodwill?",
    options: ["Tangible", "Current", "Fictitious", "Intangible"],
    answer: "Intangible"
  },
  {
    question: "What is the main difference between capital and revenue expenditure?",
    options: [
      "Capital expenditure recurs annually",
      "Revenue expenditure is recorded in balance sheet",
      "Capital expenditure benefits more than one accounting period",
      "Revenue expenditure creates assets"
    ],
    answer: "Capital expenditure benefits more than one accounting period"
  },
  {
    question: "Which of the following best describes a partnership?",
    options: [
      "Owned by one person",
      "Run by the government",
      "Owned by two or more persons sharing profits and liabilities",
      "A limited liability company"
    ],
    answer: "Owned by two or more persons sharing profits and liabilities"
  },
  {
    question: "Calculate goodwill if purchase price = GHS80,000 and net assets = GHS65,000.",
    options: ["GHS15,000", "GHS80,000", "GHS65,000", "GHS145,000"],
    answer: "GHS15,000"
  },
  {
    question: "Which statement is affected when bad debts are written off?",
    options: ["Cash Flow Statement", "Income Statement", "Balance Sheet", "Bank Reconciliation"],
    answer: "Income Statement"
  },
  {
    question: "In company accounts, which document outlines the company’s objectives?",
    options: ["Articles of Association", "Memorandum of Association", "Prospectus", "Cash Flow Statement"],
    answer: "Memorandum of Association"
  },
  {
    question: "What is the key characteristic of the public sector?",
    options: [
      "Profit motive",
      "Personal gain of owners",
      "Provision of public goods and services",
      "Owned by shareholders"
    ],
    answer: "Provision of public goods and services"
  },
  {
    question: "In public sector accounting, what does recurrent expenditure refer to?",
    options: ["Spending on buildings", "Spending on salaries and administration", "Spending on investments", "Spending on new equipment"],
    answer: "Spending on salaries and administration"
  },
  {
    question: "Which of the following is not a department in a departmental account?",
    options: ["Sales", "Transport", "Stationery", "Creditors"],
    answer: "Creditors"
  },
  {
    question: "Calculate gross profit: Sales = GHS100,000, Cost of sales = GHS70,000.",
    options: ["GHS170,000", "GHS30,000", "GHS100,000", "GHS70,000"],
    answer: "GHS30,000"
  },
  {
    question: "Which of the following is an intangible asset?",
    options: ["Building", "Goodwill", "Machinery", "Inventory"],
    answer: "Goodwill"
  },

  // Continue from question 461 to 500...

  {
    question: "What is the double entry for receiving interest income in bank?",
    options: [
      "Debit Interest Income, Credit Bank",
      "Debit Bank, Credit Interest Income",
      "Credit Interest Income, Credit Cash",
      "Debit Capital, Credit Bank"
    ],
    answer: "Debit Bank, Credit Interest Income"
  },
  {
    question: "In VAT accounting, if output VAT is GHS2,000 and input VAT is GHS500, how much VAT is payable?",
    options: ["GHS2,500", "GHS500", "GHS1,500", "GHS1,000"],
    answer: "GHS1,500"
  },
  {
    question: "What is the main use of control accounts?",
    options: [
      "To replace ledgers",
      "To detect errors and omissions",
      "To record capital income",
      "To track employee payments"
    ],
    answer: "To detect errors and omissions"
  },
  {
    question: "Which ledger contains accounts of suppliers?",
    options: ["General ledger", "Sales ledger", "Purchases ledger", "Nominal ledger"],
    answer: "Purchases ledger"
  },
  {
    question: "Calculate net profit: Gross profit = GHS50,000, Expenses = GHS30,000.",
    options: ["GHS80,000", "GHS30,000", "GHS20,000", "GHS50,000"],
    answer: "GHS20,000"
  },
  {
    question: "Which financial statement shows the financial position at a point in time?",
    options: ["Cash Flow Statement", "Income Statement", "Balance Sheet", "Ledger"],
    answer: "Balance Sheet"
  },
  {
    question: "Which principle is applied when expenses are recorded in the same period as the related revenues?",
    options: ["Matching", "Going concern", "Consistency", "Prudence"],
    answer: "Matching"
  },
  {
    question: "Calculate production cost: Prime cost = GHS40,000, Factory overheads = GHS10,000.",
    options: ["GHS30,000", "GHS10,000", "GHS50,000", "GHS60,000"],
    answer: "GHS50,000"
  },
  {
    question: "Which of the following is prepared by non-profit organizations?",
    options: ["Income Statement", "Profit and Loss", "Income and Expenditure", "Trading Account"],
    answer: "Income and Expenditure"
  },
  {
    question: "Which entry closes off expense accounts at year end?",
    options: [
      "Debit Expense, Credit Capital",
      "Debit Profit and Loss, Credit Expense",
      "Debit Expense, Credit Profit and Loss",
      "Credit Expense, Credit Profit and Loss"
    ],
    answer: "Debit Profit and Loss, Credit Expense"
  },
  {
    question: "Which concept assumes a business will continue to operate indefinitely?",
    options: [
      "Matching concept",
      "Accrual concept",
      "Going concern concept",
      "Consistency concept"
    ],
    answer: "Going concern concept"
  },
  {
    question: "Calculate the total assets: Capital = GHS25,000, Liabilities = GHS15,000.",
    options: ["GHS10,000", "GHS25,000", "GHS40,000", "GHS30,000"],
    answer: "GHS40,000"
  },
  {
    question: "Which ledger records individual debtors’ accounts?",
    options: ["Sales Ledger", "General Ledger", "Purchases Ledger", "Nominal Ledger"],
    answer: "Sales Ledger"
  },
  {
    question: "What is the effect of drawing cash for personal use?",
    options: [
      "Increase in liabilities",
      "Increase in capital",
      "Reduction in assets and capital",
      "Increase in revenue"
    ],
    answer: "Reduction in assets and capital"
  },
  {
    question: "Which book of original entry is used to record goods sold on credit?",
    options: ["Sales Day Book", "Cash Book", "Purchases Journal", "Returns Inwards Book"],
    answer: "Sales Day Book"
  },
  {
    question: "Calculate depreciation: Cost = GHS12,000, Useful life = 4 years.",
    options: ["GHS4,000", "GHS3,000", "GHS2,500", "GHS5,000"],
    answer: "GHS3,000"
  },
  {
    question: "Which of the following is a current liability?",
    options: ["Loan (10 years)", "Creditors", "Building", "Capital"],
    answer: "Creditors"
  },
  {
    question: "In club accounts, what does the accumulated fund represent?",
    options: [
      "Liabilities owed",
      "The club’s surplus",
      "Net assets of the club",
      "Subscription income"
    ],
    answer: "Net assets of the club"
  },
  {
    question: "What is the role of a cash flow statement?",
    options: [
      "To determine profitability",
      "To record transactions",
      "To show cash inflows and outflows",
      "To calculate VAT"
    ],
    answer: "To show cash inflows and outflows"
  },
  {
    question: "If prime cost = GHS60,000 and factory overheads = GHS20,000, what is the production cost?",
    options: ["GHS40,000", "GHS80,000", "GHS60,000", "GHS100,000"],
    answer: "GHS80,000"
  },
  {
    question: "Which concept requires expenses to be recognized when incurred, not when paid?",
    options: [
      "Accrual concept",
      "Prudence concept",
      "Realization concept",
      "Consistency concept"
    ],
    answer: "Accrual concept"
  },
  {
    question: "Calculate interest: GHS5,000 at 10% per annum for 2 years.",
    options: ["GHS500", "GHS1,000", "GHS1,200", "GHS2,000"],
    answer: "GHS1,000"
  },
  {
    question: "Which of the following reduces gross profit?",
    options: ["Rent", "Discount Allowed", "Sales Returns", "Interest Expense"],
    answer: "Sales Returns"
  },
  {
    question: "What is the entry for goods bought on credit?",
    options: [
      "Debit Purchases, Credit Bank",
      "Debit Cash, Credit Purchases",
      "Debit Purchases, Credit Creditors",
      "Debit Capital, Credit Sales"
    ],
    answer: "Debit Purchases, Credit Creditors"
  },
  {
    question: "In a manufacturing account, which of the following is part of factory overheads?",
    options: ["Raw materials", "Factory Rent", "Sales Expenses", "Distribution Cost"],
    answer: "Factory Rent"
  },
  {
    question: "Calculate VAT: Selling price = GHS150, VAT rate = 15%",
    options: ["GHS15", "GHS22.50", "GHS30", "GHS25"],
    answer: "GHS22.50"
  },
  {
    question: "A business purchased a machine for GHS30,000 with expected scrap value GHS6,000 over 6 years. Calculate annual depreciation.",
    options: ["GHS6,000", "GHS5,000", "GHS4,000", "GHS3,000"],
    answer: "GHS4,000"
  },
  {
    question: "Which principle requires the same accounting methods to be used every year?",
    options: ["Matching", "Consistency", "Accrual", "Prudence"],
    answer: "Consistency"
  },
  {
    question: "If capital at start = GHS40,000, drawings = GHS5,000, profit = GHS10,000, what is closing capital?",
    options: ["GHS55,000", "GHS45,000", "GHS50,000", "GHS35,000"],
    answer: "GHS45,000"
  },
  {
    question: "What is the effect of over-depreciation on profit?",
    options: ["No effect", "Increases profit", "Decreases profit", "Increases asset value"],
    answer: "Decreases profit"
  },
  {
    question: "Which of these is an indirect expense?",
    options: ["Factory wages", "Rent", "Raw materials", "Direct labor"],
    answer: "Rent"
  },
  {
    question: "In single entry, if opening capital = GHS20,000, closing capital = GHS25,000, and drawings = GHS2,000, what is profit?",
    options: ["GHS3,000", "GHS5,000", "GHS7,000", "GHS2,000"],
    answer: "GHS7,000"
  },
  {
    question: "Which of these items appears in the trading account?",
    options: ["Rent", "Sales", "Debtors", "Bank overdraft"],
    answer: "Sales"
  },
  {
    question: "Which of the following is a fixed cost in manufacturing?",
    options: ["Direct materials", "Wages", "Depreciation of machinery", "Commission on sales"],
    answer: "Depreciation of machinery"
  },
  {
    question: "Calculate net sales: Sales = GHS120,000, Sales returns = GHS10,000.",
    options: ["GHS130,000", "GHS110,000", "GHS120,000", "GHS100,000"],
    answer: "GHS110,000"
  },
  {
    question: "Which of these is a feature of computerized accounting?",
    options: [
      "Manual recording",
      "Delayed reporting",
      "Real-time processing",
      "Handwritten ledgers"
    ],
    answer: "Real-time processing"
  },
  {
    question: "In VAT returns, output VAT is VAT on:",
    options: ["Purchases", "Sales", "Expenses", "Returns"],
    answer: "Sales"
  },
  {
    question: "Which source document is used for recording credit purchases?",
    options: ["Invoice", "Receipt", "Cheque", "Debit note"],
    answer: "Invoice"
  },
  {
    question: "Which account shows money spent and received by a club?",
    options: [
      "Income and Expenditure Account",
      "Trading Account",
      "Receipts and Payments Account",
      "Cash Flow Statement"
    ],
    answer: "Receipts and Payments Account"
  },
  {
    question: "Calculate profit: Revenue = GHS90,000, Expenses = GHS75,000.",
    options: ["GHS20,000", "GHS15,000", "GHS10,000", "GHS5,000"],
    answer: "GHS15,000"
  },
  {
    question: "What is the double entry for payment of rent by cheque?",
    options: [
      "Debit Rent, Credit Cash",
      "Debit Rent, Credit Bank",
      "Debit Bank, Credit Rent",
      "Debit Cash, Credit Rent"
    ],
    answer: "Debit Rent, Credit Bank"
  },
  {
    question: "What is the accounting treatment for a provision for doubtful debts?",
    options: [
      "It increases revenue",
      "It reduces net profit",
      "It is added to trade receivables",
      "It is ignored"
    ],
    answer: "It reduces net profit"
  },
  {
    question: "What are factory overheads?",
    options: [
      "Direct material costs",
      "Costs not directly traceable to a unit",
      "Selling costs",
      "Office costs"
    ],
    answer: "Costs not directly traceable to a unit"
  },
  {
    question: "Which account is credited when capital is introduced in cash?",
    options: ["Cash", "Capital", "Sales", "Bank"],
    answer: "Capital"
  },
  {
    question: "Which is a capital expenditure?",
    options: ["Wages", "Rent", "Purchase of machinery", "Telephone bill"],
    answer: "Purchase of machinery"
  },
  {
    question: "In partnership accounts, what is a revaluation account used for?",
    options: [
      "To distribute profits",
      "To adjust asset values before admission or retirement",
      "To pay off creditors",
      "To record drawings"
    ],
    answer: "To adjust asset values before admission or retirement"
  },
  {
    question: "Calculate total production cost: Prime Cost = GHS70,000, Factory Overheads = GHS30,000.",
    options: ["GHS100,000", "GHS90,000", "GHS70,000", "GHS30,000"],
    answer: "GHS100,000"
  },
  {
    question: "What is a trial balance?",
    options: [
      "A statement showing profit or loss",
      "A summary of all transactions",
      "A statement listing debit and credit balances",
      "A record of fixed assets"
    ],
    answer: "A statement listing debit and credit balances"
  },
  {
    question: "Which type of expenditure appears in the income and expenditure account?",
    options: ["Capital", "Revenue", "Investments", "Drawings"],
    answer: "Revenue"
  },
  {
    question: "Which of the following is not a qualitative characteristic of financial statements?",
    options: ["Relevance", "Comparability", "Complexity", "Faithful representation"],
    answer: "Complexity"
  },
  {
    question: "What does prudence in accounting mean?",
    options: [
      "Overstating profits",
      "Ignoring losses",
      "Anticipating profits early",
      "Recording losses as soon as they are expected"
    ],
    answer: "Recording losses as soon as they are expected"
  },
  {
    question: "If Credit Sales = GHS80,000 and Returns Inwards = GHS5,000, what are net sales?",
    options: ["GHS85,000", "GHS75,000", "GHS80,000", "GHS70,000"],
    answer: "GHS75,000"
  },
  {
    question: "Which book records goods returned by customers?",
    options: ["Returns Inwards Book", "Sales Book", "Purchases Book", "Petty Cash Book"],
    answer: "Returns Inwards Book"
  }
];
export default accountingQuestions;