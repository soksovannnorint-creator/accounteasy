// AccountEasy flashcards + glossary content (beginner vocabulary) and UI strings for the study tracker.
// Card format: K(category, [term], [simple definition], [detail], [example], optional formula)
DATA.cardCats = {
  basics: b('Accounting basics', 'មូលដ្ឋានគណនេយ្យ'),
  elements: b('Assets, liabilities, equity', 'ទ្រព្យសកម្ម បំណុល មូលធន'),
  profit: b('Revenue, profit and cash', 'ចំណូល ចំណេញ និងសាច់ប្រាក់'),
  principles: b('Accounting principles', 'គោលការណ៍គណនេយ្យ'),
  bookkeeping: b('Double-entry bookkeeping', 'ការកត់ត្រាគូ'),
  statements: b('Financial statements', 'របាយការណ៍ហិរញ្ញវត្ថុ'),
  practical: b('Practical accounting', 'គណនេយ្យអនុវត្ត')
};
// categories for the original 12 cards
const CAT0 = { c1: 'elements', c2: 'elements', c3: 'elements', c4: 'profit', c5: 'profit', c6: 'profit', c7: 'bookkeeping', c8: 'bookkeeping', c9: 'elements', c10: 'elements', c11: 'bookkeeping', c12: 'principles' };
DATA.cards.forEach(c => { c.cat = CAT0[c.id] || 'basics'; });

let _cardN = 13;
function K(cat, t, d, det, ex, formula) {
  DATA.cards.push({ id: 'c' + (_cardN++), cat, term: b(t[0], t[1]), def: b(d[0], d[1]), detail: b(det[0], det[1]), ex: b(ex[0], ex[1]), formula: formula || '' });
}

// ---------------- Accounting basics ----------------
K('basics', ['Accounting', 'គណនេយ្យ'], ['Recording, summarising and reporting money information about a business.', 'ការកត់ត្រា សង្ខេប និងរាយការណ៍ព័ត៌មានលុយរបស់អាជីវកម្ម។'],
  ['It helps owners, banks and tax offices understand how the business is doing.', 'វាជួយម្ចាស់ ធនាគារ និងការិយាល័យពន្ធដារយល់ពីស្ថានភាពអាជីវកម្ម។'],
  ['A coffee shop notes daily sales and costs to see its profit.', 'ហាងកាហ្វេកត់ការលក់ និងចំណាយប្រចាំថ្ងៃដើម្បីមើលចំណេញ។']);
K('basics', ['Bookkeeping', 'ការកត់ត្រាបញ្ជី'], ['The routine job of recording every transaction correctly.', 'ការងារប្រចាំថ្ងៃក្នុងការកត់រាល់ប្រតិបត្តិការឲ្យបានត្រឹមត្រូវ។'],
  ['Accounting uses bookkeeping records to prepare reports and give advice.', 'គណនេយ្យប្រើកំណត់ត្រាទាំងនេះដើម្បីរៀបចំរបាយការណ៍ និងផ្តល់ដំបូន្មាន។'],
  ['Writing each sale into a notebook or software.', 'ការសរសេររាល់ការលក់ក្នុងសៀវភៅ ឬកម្មវិធី។']);
K('basics', ['Transaction', 'ប្រតិបត្តិការ'], ['A business event involving money or goods that must be recorded.', 'ព្រឹត្តិការណ៍អាជីវកម្មដែលពាក់ព័ន្ធនឹងលុយ ឬទំនិញ ហើយត្រូវកត់ត្រា។'],
  ['Every transaction affects at least two accounts.', 'រាល់ប្រតិបត្តិការប៉ះពាល់គណនីយ៉ាងតិចពីរ។'],
  ['Buying a $1,200 machine with cash.', 'ការទិញម៉ាស៊ីន $1,200 ដោយសាច់ប្រាក់។']);
K('basics', ['Source document', 'ឯកសារមូលដ្ឋាន'], ['Paper or digital proof that a transaction happened.', 'ភស្តុតាងក្រដាស ឬឌីជីថលថាប្រតិបត្តិការបានកើតឡើង។'],
  ['Invoices, receipts, bank statements and contracts. Journal entries are based on them.', 'វិក្កយបត្រ បង្កាន់ដៃ របាយការណ៍ធនាគារ និងកិច្ចសន្យា។ កំណត់ត្រាកំណត់ហេតុផ្អែកលើពួកវា។'],
  ['A supplier invoice for $500 of goods.', 'វិក្កយបត្រអ្នកផ្គត់ផ្គង់សម្រាប់ទំនិញ $500។']);
K('basics', ['Invoice', 'វិក្កយបត្រ'], ['A bill a seller sends to a buyer asking for payment.', 'វិក្កយបត្រដែលអ្នកលក់ផ្ញើទៅអ្នកទិញដើម្បីទាមទារការបង់ប្រាក់។'],
  ['For the seller it creates a receivable. For the buyer it creates a payable.', 'សម្រាប់អ្នកលក់ វាបង្កើតគណនីត្រូវទទួល។ សម្រាប់អ្នកទិញ វាបង្កើតគណនីត្រូវបង់។'],
  ['You sell $300 on credit and send an invoice.', 'អ្នកលក់ជំពាក់ $300 ហើយផ្ញើវិក្កយបត្រ។']);
K('basics', ['Receipt', 'បង្កាន់ដៃ'], ['Proof that a payment has been received.', 'ភស្តុតាងថាបានទទួលការបង់ប្រាក់។'],
  ['It is a source document for cash transactions.', 'វាជាឯកសារមូលដ្ឋានសម្រាប់ប្រតិបត្តិការសាច់ប្រាក់។'],
  ['A printed slip for a $4 coffee.', 'បង្កាន់ដៃបោះពុម្ពសម្រាប់កាហ្វេ $4។']);
K('basics', ['Financial statements', 'របាយការណ៍ហិរញ្ញវត្ថុ'], ['Formal reports that summarise a business\'s results and position.', 'របាយការណ៍ផ្លូវការដែលសង្ខេបលទ្ធផល និងស្ថានភាពរបស់អាជីវកម្ម។'],
  ['The main ones are the income statement, balance sheet, cash flow statement and statement of changes in equity.', 'ចម្បងគឺរបាយការណ៍លទ្ធផល តារាងតុល្យការ របាយការណ៍លំហូរសាច់ប្រាក់ និងរបាយការណ៍បម្រែបម្រួលមូលធន។'],
  ['A bank asks for your statements before lending.', 'ធនាគារស្នើសុំរបាយការណ៍របស់អ្នកមុនផ្តល់កម្ចី។']);
K('basics', ['Accounting period', 'អំឡុងពេលគណនេយ្យ'], ['The length of time covered by one set of reports.', 'រយៈពេលដែលគ្របដណ្តប់ដោយសំណុំរបាយការណ៍មួយ។'],
  ['Usually a month, a quarter or a year.', 'ជាទូទៅមួយខែ មួយត្រីមាស ឬមួយឆ្នាំ។'],
  ['1 January to 31 December.', 'ពី ១ មករា ដល់ ៣១ ធ្នូ។']);
K('basics', ['Audit', 'សវនកម្ម'], ['An independent check that financial statements are fair.', 'ការត្រួតពិនិត្យឯករាជ្យថារបាយការណ៍ហិរញ្ញវត្ថុមានភាពសមរម្យ។'],
  ['Auditors are outsiders who test the records, which builds trust.', 'សវនករជាអ្នកខាងក្រៅដែលសាកល្បងកំណត់ត្រា ដែលបង្កើតទំនុកចិត្ត។'],
  ['A company\'s auditor signs its annual report.', 'សវនករក្រុមហ៊ុនចុះហត្ថលេខាលើរបាយការណ៍ប្រចាំឆ្នាំ។']);
K('basics', ['IFRS', 'IFRS (ស្តង់ដារអន្តរជាតិ)'], ['International accounting standards used in most countries.', 'ស្តង់ដារគណនេយ្យអន្តរជាតិដែលប្រើក្នុងប្រទេសភាគច្រើន។'],
  ['Cambodia\'s own standards, CIFRS, are based on IFRS. Always check which standard applies to you.', 'ស្តង់ដាររបស់កម្ពុជា CIFRS ផ្អែកលើ IFRS។ សូមពិនិត្យជានិច្ចថាស្តង់ដារណាអនុវត្តចំពោះអ្នក។'],
  ['A company in Phnom Penh preparing statements under CIFRS.', 'ក្រុមហ៊ុននៅភ្នំពេញរៀបចំរបាយការណ៍តាម CIFRS។']);
K('basics', ['US GAAP', 'US GAAP (ស្តង់ដារអាមេរិក)'], ['The set of accounting rules used in the United States.', 'សំណុំច្បាប់គណនេយ្យដែលប្រើក្នុងសហរដ្ឋអាមេរិក។'],
  ['It differs from IFRS in some treatments.', 'វាខុសពី IFRS ក្នុងការកត់ត្រាមួយចំនួន។'],
  ['A US-listed company reports under US GAAP.', 'ក្រុមហ៊ុនចុះបញ្ជីក្នុងអាមេរិករាយការណ៍តាម US GAAP។']);
K('basics', ['Stakeholder', 'ភាគីពាក់ព័ន្ធ'], ['Anyone with an interest in the business.', 'អ្នកណាដែលមានផលប្រយោជន៍ក្នុងអាជីវកម្ម។'],
  ['Owners, managers, staff, banks, suppliers, customers and the tax office.', 'ម្ចាស់ អ្នកគ្រប់គ្រង បុគ្គលិក ធនាគារ អ្នកផ្គត់ផ្គង់ អតិថិជន និងការិយាល័យពន្ធដារ។'],
  ['A supplier deciding whether to sell on credit.', 'អ្នកផ្គត់ផ្គង់សម្រេចថាតើលក់ជំពាក់ឬអត់។']);

// ---------------- Assets, liabilities, equity ----------------
K('elements', ['Current asset', 'ទ្រព្យសកម្មចរន្ត'], ['An asset expected to become cash or be used within about a year.', 'ទ្រព្យសកម្មដែលរំពឹងថានឹងក្លាយជាសាច់ប្រាក់ ឬប្រើក្នុងរយៈពេលប្រហែលមួយឆ្នាំ។'],
  ['Cash, receivables, inventory and prepaid expenses.', 'សាច់ប្រាក់ គណនីត្រូវទទួល ស្តុក និងចំណាយបង់មុន។'],
  ['Stock you plan to sell next month.', 'ស្តុកដែលអ្នកគ្រោងលក់ខែក្រោយ។']);
K('elements', ['Non-current asset', 'ទ្រព្យសកម្មមិនមែនចរន្ត'], ['An asset kept for more than a year to run the business.', 'ទ្រព្យសកម្មដែលរក្សាទុកលើសពីមួយឆ្នាំដើម្បីដំណើរការអាជីវកម្ម។'],
  ['Land, buildings, vehicles and machinery.', 'ដី អគារ យានយន្ត និងគ្រឿងចក្រ។'],
  ['A delivery van.', 'រថយន្តដឹកទំនិញ។']);
K('elements', ['Current liability', 'បំណុលចរន្ត'], ['A debt due within about a year.', 'បំណុលដែលត្រូវបង់ក្នុងរយៈពេលប្រហែលមួយឆ្នាំ។'],
  ['Accounts payable, wages payable and tax payable.', 'គណនីត្រូវបង់ ប្រាក់ខែត្រូវបង់ និងពន្ធត្រូវបង់។'],
  ['Wages owed to staff next week.', 'ប្រាក់ខែជំពាក់បុគ្គលិកសប្តាហ៍ក្រោយ។']);
K('elements', ['Non-current liability', 'បំណុលមិនមែនចរន្ត'], ['A debt due after more than a year.', 'បំណុលដែលត្រូវបង់ក្រោយលើសពីមួយឆ្នាំ។'],
  ['Mostly long-term bank loans.', 'ភាគច្រើនជាកម្ចីធនាគាររយៈពេលវែង។'],
  ['The part of a 5-year loan due in year 3.', 'ផ្នែកនៃកម្ចី ៥ឆ្នាំ ដែលត្រូវបង់ក្នុងឆ្នាំទី ៣។']);
K('elements', ['Capital', 'មូលធន (ដើមទុន)'], ['Money or assets the owner puts into the business.', 'លុយ ឬទ្រព្យដែលម្ចាស់ដាក់ចូលអាជីវកម្ម។'],
  ['It is part of equity and grows with owner investment and profit.', 'វាជាផ្នែកនៃមូលធន ហើយកើនតាមការដាក់ទុន និងចំណេញ។'],
  ['The owner invests $5,000 cash.', 'ម្ចាស់ដាក់ទុន $5,000 សាច់ប្រាក់។'], 'Dr Cash / Cr Capital');
K('elements', ['Drawings', 'ការដកប្រាក់ម្ចាស់'], ['Money or goods the owner takes out for personal use.', 'លុយ ឬទំនិញដែលម្ចាស់យកចេញសម្រាប់ប្រើផ្ទាល់ខ្លួន។'],
  ['It reduces equity and is not a business expense.', 'វាកាត់បន្ថយមូលធន ហើយមិនមែនជាចំណាយអាជីវកម្មទេ។'],
  ['The owner takes $100 for home bills.', 'ម្ចាស់យក $100 សម្រាប់វិក្កយបត្រផ្ទះ។'], 'Dr Drawings / Cr Cash');
K('elements', ['Inventory', 'ស្តុកទំនិញ'], ['Goods held for sale.', 'ទំនិញដែលរក្សាទុកសម្រាប់លក់។'],
  ['An asset until it is sold. When sold, its cost becomes cost of goods sold.', 'ជាទ្រព្យរហូតដល់លក់។ ពេលលក់ ថ្លៃដើមរបស់វាក្លាយជាថ្លៃដើមទំនិញលក់។'],
  ['Shirts on a clothing shop\'s shelves.', 'អាវនៅលើធ្នើរហាងសម្លៀកបំពាក់។']);
K('elements', ['Equipment', 'បរិក្ខារ'], ['Long-lasting items used to run the business.', 'របស់ប្រើបានយូរសម្រាប់ដំណើរការអាជីវកម្ម។'],
  ['A non-current asset. Its cost is spread over its life as depreciation.', 'ទ្រព្យមិនមែនចរន្ត។ ថ្លៃរបស់វាត្រូវចែកតាមអាយុកាលជាការរំលស់។'],
  ['A coffee machine.', 'ម៉ាស៊ីនកាហ្វេ។']);
K('elements', ['Bank loan', 'កម្ចីធនាគារ'], ['Money borrowed from a bank that must be repaid, usually with interest.', 'លុយខ្ចីពីធនាគារដែលត្រូវសងវិញ ជាធម្មតាមានការប្រាក់។'],
  ['It is a liability. Receiving it is not revenue.', 'វាជាបំណុល។ ការទទួលវាមិនមែនជាចំណូលទេ។'],
  ['Borrowing $2,000 to buy equipment.', 'ខ្ចី $2,000 ដើម្បីទិញបរិក្ខារ។'], 'Dr Cash / Cr Bank Loan');
K('elements', ['Prepaid expense', 'ចំណាយបង់មុន'], ['A cost paid before it is used.', 'ថ្លៃដើមដែលបង់មុនពេលប្រើ។'],
  ['An asset at first. It becomes an expense as time passes.', 'ជាទ្រព្យមុនដំបូង។ វាក្លាយជាចំណាយនៅពេលពេលវេលាកន្លងទៅ។'],
  ['12 months of insurance paid on 1 January.', 'ធានារ៉ាប់រង ១២ខែ បង់នៅ ១ មករា។']);
K('elements', ['Accrued expense', 'ចំណាយ accrued'], ['A cost already used but not yet paid.', 'ថ្លៃដើមដែលបានប្រើរួច តែមិនទាន់បង់។'],
  ['Recorded as an expense and a liability.', 'ត្រូវកត់ជាចំណាយ និងជាបំណុល។'],
  ['December electricity billed in January.', 'អគ្គិសនីខែធ្នូដែលមានវិក្កយបត្រខែមករា។'], 'Dr Expense / Cr Payable');
K('elements', ['Retained earnings', 'ចំណេញរក្សាទុក'], ['Profits kept in the business instead of being paid out.', 'ចំណេញដែលរក្សាទុកក្នុងអាជីវកម្ម ជំនួសឲ្យការចែកចាយ។'],
  ['Used mainly by companies. It is part of equity.', 'ប្រើជាចម្បងដោយក្រុមហ៊ុន។ វាជាផ្នែកនៃមូលធន។'],
  ['A company keeps $10,000 of this year\'s profit.', 'ក្រុមហ៊ុនរក្សាទុកចំណេញឆ្នាំនេះ $10,000។']);

// ---------------- Revenue, profit and cash ----------------
K('profit', ['Cash basis', 'មូលដ្ឋានសាច់ប្រាក់'], ['Record revenue and expenses only when cash moves.', 'កត់ចំណូល និងចំណាយតែពេលសាច់ប្រាក់ផ្លាស់ទី។'],
  ['Simple, but it can give a misleading picture of profit.', 'សាមញ្ញ ប៉ុន្តែអាចផ្តល់រូបភាពមិនត្រឹមត្រូវអំពីចំណេញ។'],
  ['A sale is recorded only when the customer pays.', 'ការលក់ត្រូវកត់តែពេលអតិថិជនបង់។']);
K('profit', ['Accrual basis', 'មូលដ្ឋាន accrual'], ['Record revenue when earned and expenses when incurred.', 'កត់ចំណូលពេលរកបាន និងចំណាយពេលកើតមាន។'],
  ['Required by IFRS and US GAAP for financial statements.', 'តម្រូវដោយ IFRS និង US GAAP សម្រាប់របាយការណ៍ហិរញ្ញវត្ថុ។'],
  ['A credit sale counts as revenue the day it is made.', 'ការលក់ជំពាក់រាប់ជាចំណូលនៅថ្ងៃដែលលក់។']);
K('profit', ['Net income (net profit)', 'ចំណេញសុទ្ធ'], ['What is left after all expenses are taken from revenue.', 'អ្វីដែលនៅសល់បន្ទាប់ពីដកចំណាយទាំងអស់ពីចំណូល។'],
  ['It is the bottom line of the income statement.', 'វាជាបន្ទាត់ចុងក្រោយនៃរបាយការណ៍លទ្ធផល។'],
  ['Revenue $2,000 − expenses $1,400 = $600.', 'ចំណូល $2,000 − ចំណាយ $1,400 = $600។'], 'Net income = Revenue − Expenses');
K('profit', ['Net loss', 'ការខាតបង់សុទ្ធ'], ['Expenses are larger than revenue.', 'ចំណាយធំជាងចំណូល។'],
  ['A loss reduces owner\'s equity.', 'ការខាតកាត់បន្ថយមូលធនម្ចាស់។'],
  ['Revenue $5,000 − expenses $5,800 = loss of $800.', 'ចំណូល $5,000 − ចំណាយ $5,800 = ខាត $800។']);
K('profit', ['Gross profit', 'ចំណេញដុល'], ['Sales minus the cost of the goods sold.', 'ការលក់ដកថ្លៃដើមទំនិញដែលបានលក់។'],
  ['It shows how much is left to pay other expenses.', 'វាបង្ហាញថានៅសល់ប៉ុន្មានដើម្បីបង់ចំណាយផ្សេងទៀត។'],
  ['Sales $800 − goods cost $500 = $300.', 'ការលក់ $800 − ថ្លៃដើមទំនិញ $500 = $300។'], 'Gross profit = Sales − Cost of goods sold');
K('profit', ['Cost of goods sold (COGS)', 'ថ្លៃដើមទំនិញលក់'], ['The cost of the goods that were actually sold.', 'ថ្លៃដើមនៃទំនិញដែលបានលក់ពិតប្រាកដ។'],
  ['Unsold goods stay in inventory.', 'ទំនិញមិនទាន់លក់នៅក្នុងស្តុក។'],
  ['A shirt bought for $10 and sold for $18 has COGS of $10.', 'អាវទិញ $10 លក់ $18 មានថ្លៃដើមទំនិញលក់ $10។']);
K('profit', ['Liquidity', 'សន្ទនីយភាព'], ['The ability to pay bills when they are due.', 'សមត្ថភាពបង់វិក្កយបត្រពេលដល់កំណត់។'],
  ['A profitable business can still have poor liquidity if customers pay late.', 'អាជីវកម្មមានចំណេញអាចមានសន្ទនីយភាពខ្សោយ បើអតិថិជនបង់យឺត។'],
  ['A shop with lots of profit but almost no cash.', 'ហាងមានចំណេញច្រើន តែស្ទើរគ្មានសាច់ប្រាក់។']);
K('profit', ['Depreciation', 'ការរំលស់'], ['Spreading the cost of an asset over its useful life.', 'ការចែកថ្លៃទ្រព្យតាមអាយុកាលប្រើប្រាស់។'],
  ['It is an expense that does not use cash in the period it is recorded.', 'វាជាចំណាយដែលមិនប្រើសាច់ប្រាក់ក្នុងអំឡុងពេលដែលកត់ត្រា។'],
  ['$1,200 machine ÷ 4 years = $300 a year.', 'ម៉ាស៊ីន $1,200 ÷ ៤ឆ្នាំ = $300 ក្នុងមួយឆ្នាំ។'], 'Straight-line = Cost ÷ Useful life');
K('profit', ['Credit sale', 'ការលក់ជំពាក់'], ['A sale where the customer pays later.', 'ការលក់ដែលអតិថិជនបង់ក្រោយ។'],
  ['Revenue is recorded now and an account receivable is created.', 'ចំណូលត្រូវកត់ឥឡូវ ហើយបង្កើតគណនីត្រូវទទួល។'],
  ['Selling $300 of goods to be paid next week.', 'លក់ទំនិញ $300 ដើម្បីបង់សប្តាហ៍ក្រោយ។'], 'Dr Accounts Receivable / Cr Sales Revenue');
K('profit', ['Cash sale', 'ការលក់សាច់ប្រាក់'], ['A sale paid for immediately.', 'ការលក់ដែលបង់ភ្លាមៗ។'],
  ['Revenue and cash are recorded at the same time.', 'ចំណូល និងសាច់ប្រាក់ត្រូវកត់ក្នុងពេលតែមួយ។'],
  ['A customer pays $4 for a coffee on the spot.', 'អតិថិជនបង់ $4 សម្រាប់កាហ្វេភ្លាមៗ។'], 'Dr Cash / Cr Sales Revenue');

// ---------------- Accounting principles ----------------
K('principles', ['Business Entity Principle', 'គោលការណ៍អង្គភាពអាជីវកម្ម'], ['The business and its owner are separate in the records.', 'អាជីវកម្ម និងម្ចាស់ត្រូវញែកដាច់ពីគ្នាក្នុងកំណត់ត្រា។'],
  ['Personal spending is not a business expense; it is drawings.', 'ការចំណាយផ្ទាល់ខ្លួនមិនមែនជាចំណាយអាជីវកម្មទេ គឺជាការដកប្រាក់។'],
  ['A family dinner paid from the till.', 'អាហារពេលល្ងាចគ្រួសារបង់ពីថតលុយ។']);
K('principles', ['Going Concern Principle', 'គោលការណ៍អាជីវកម្មបន្តដំណើរការ'], ['Assume the business will keep operating in the near future.', 'សន្មតថាអាជីវកម្មនឹងបន្តដំណើរការក្នុងអនាគតដ៏ជិត។'],
  ['This is why assets are not valued as if they must be sold tomorrow.', 'នេះជាមូលហេតុដែលទ្រព្យមិនត្រូវបានវាយតម្លៃដូចជាត្រូវលក់ថ្ងៃស្អែក។'],
  ['Equipment is depreciated over several years.', 'បរិក្ខារត្រូវរំលស់ក្នុងរយៈពេលច្រើនឆ្នាំ។']);
K('principles', ['Historical Cost Principle', 'គោលការណ៍ថ្លៃដើមប្រវត្តិសាស្ត្រ'], ['Record assets at the price originally paid.', 'កត់ទ្រព្យតាមតម្លៃដែលបានបង់ដំបូង។'],
  ['It is based on proof (an invoice) and avoids guessing. Some standards allow other measures in certain cases.', 'វាផ្អែកលើភស្តុតាង (វិក្កយបត្រ) ហើយជៀសវាងការស្មាន។ ស្តង់ដារខ្លះអនុញ្ញាតការវាស់វែងផ្សេងក្នុងករណីមួយចំនួន។'],
  ['A van bought for $9,000 stays recorded at $9,000 cost.', 'រថយន្តទិញ $9,000 នៅតែកត់ថ្លៃដើម $9,000។']);
K('principles', ['Monetary Unit Principle', 'គោលការណ៍ឯកតារូបិយវត្ថុ'], ['Record only things that can be measured in money.', 'កត់តែអ្វីដែលអាចវាស់ជាលុយបាន។'],
  ['A stable currency is assumed. Staff skill or a good reputation is not recorded as an asset.', 'សន្មតថារូបិយប័ណ្ណមានស្ថិរភាព។ ជំនាញបុគ្គលិក ឬកេរ្តិ៍ឈ្មោះល្អមិនត្រូវកត់ជាទ្រព្យទេ។'],
  ['A $50 sale is recorded; "friendly staff" is not.', 'ការលក់ $50 ត្រូវកត់ ប៉ុន្តែ "បុគ្គលិកស្និទ្ធស្នាល" មិនត្រូវកត់។']);
K('principles', ['Accounting Period Principle', 'គោលការណ៍អំឡុងពេលគណនេយ្យ'], ['Divide the life of the business into equal reporting periods.', 'ចែកជីវិតអាជីវកម្មជាអំឡុងពេលរាយការណ៍ស្មើគ្នា។'],
  ['Owners need regular results, not only when the business ends.', 'ម្ចាស់ត្រូវការលទ្ធផលទៀងទាត់ មិនមែនតែពេលអាជីវកម្មបញ្ចប់ទេ។'],
  ['Monthly profit reports for a coffee shop.', 'របាយការណ៍ចំណេញប្រចាំខែសម្រាប់ហាងកាហ្វេ។']);
K('principles', ['Revenue Recognition Principle', 'គោលការណ៍ទទួលស្គាល់ចំណូល'], ['Record revenue when it is earned.', 'កត់ចំណូលនៅពេលរកបាន។'],
  ['Usually when goods or services are delivered to the customer, not when cash arrives.', 'ជាទូទៅនៅពេលប្រគល់ទំនិញ ឬសេវាដល់អតិថិជន មិនមែនពេលសាច់ប្រាក់មកដល់ទេ។'],
  ['A repair is finished in December, paid in January: December revenue.', 'ការជួសជុលចប់ក្នុងខែធ្នូ បង់ក្នុងខែមករា៖ ចំណូលខែធ្នូ។']);
K('principles', ['Consistency Principle', 'គោលការណ៍ភាពស៊ីសង្វាក់'], ['Use the same accounting methods from period to period.', 'ប្រើវិធីគណនេយ្យដូចគ្នាពីអំឡុងពេលមួយទៅមួយ។'],
  ['This lets users compare results over time. A change must be explained.', 'នេះអនុញ្ញាតឲ្យអ្នកប្រើប្រៀបធៀបលទ្ធផលតាមពេលវេលា។ ការផ្លាស់ប្តូរត្រូវពន្យល់។'],
  ['Using straight-line depreciation every year.', 'ប្រើការរំលស់បន្ទាត់ត្រង់រាល់ឆ្នាំ។']);
K('principles', ['Full Disclosure Principle', 'គោលការណ៍បង្ហាញព័ត៌មានពេញលេញ'], ['Report all information that would matter to users.', 'រាយការណ៍ព័ត៌មានទាំងអស់ដែលសំខាន់ដល់អ្នកប្រើ។'],
  ['Extra details go in the notes to the financial statements.', 'ព័ត៌មានបន្ថែមដាក់ក្នុងកំណត់សម្គាល់នៃរបាយការណ៍ហិរញ្ញវត្ថុ។'],
  ['Telling users about a big court case against the business.', 'ប្រាប់អ្នកប្រើអំពីរឿងក្តីធំប្រឆាំងអាជីវកម្ម។']);
K('principles', ['Prudence Principle', 'គោលការណ៍ប្រុងប្រយ័ត្ន'], ['Be careful under uncertainty: do not overstate assets or profit.', 'ប្រុងប្រយ័ត្នពេលមានភាពមិនច្បាស់លាស់៖ កុំលើសតម្លៃទ្រព្យ ឬចំណេញ។'],
  ['Record likely losses early; do not record uncertain gains.', 'កត់ការខាតដែលអាចកើតឡើងឲ្យឆាប់ កុំកត់ចំណេញមិនប្រាកដ។'],
  ['Writing down stock that can no longer be sold.', 'បន្ថយតម្លៃស្តុកដែលលក់មិនបានទៀត។']);

// ---------------- Double-entry bookkeeping ----------------
K('bookkeeping', ['Account', 'គណនី'], ['A record that tracks one type of item, such as Cash or Rent Expense.', 'កំណត់ត្រាដែលតាមដានប្រភេទធាតុមួយ ដូចជាសាច់ប្រាក់ ឬចំណាយជួល។'],
  ['Each account has a type: asset, liability, equity, revenue or expense.', 'គណនីនីមួយៗមានប្រភេទ៖ ទ្រព្យ បំណុល មូលធន ចំណូល ឬចំណាយ។'],
  ['The Cash account.', 'គណនីសាច់ប្រាក់។']);
K('bookkeeping', ['Chart of accounts', 'បញ្ជីគណនី'], ['The complete list of accounts a business uses.', 'បញ្ជីពេញលេញនៃគណនីដែលអាជីវកម្មប្រើ។'],
  ['It is usually grouped by type, with account numbers.', 'ជាទូទៅដាក់ជាក្រុមតាមប្រភេទ ជាមួយលេខគណនី។'],
  ['1000 Cash, 2000 Accounts Payable, 4000 Sales Revenue.', '1000 សាច់ប្រាក់ 2000 គណនីត្រូវបង់ 4000 ចំណូលលក់។']);
K('bookkeeping', ['Journal', 'សៀវភៅកំណត់ហេតុ'], ['The book where transactions are first recorded in date order.', 'សៀវភៅដែលកត់ប្រតិបត្តិការជាលើកដំបូងតាមលំដាប់កាលបរិច្ឆេទ។'],
  ['It is called the book of original entry.', 'វាហៅថាសៀវភៅកត់ត្រាដើម។'],
  ['Entering today\'s sales and purchases.', 'ការបញ្ចូលការលក់ និងការទិញថ្ងៃនេះ។']);
K('bookkeeping', ['Journal entry', 'កំណត់ត្រាកំណត់ហេតុ'], ['One recorded transaction showing its debits and credits.', 'ប្រតិបត្តិការមួយដែលបានកត់ បង្ហាញ debit និង credit របស់វា។'],
  ['Total debits must equal total credits.', 'debit សរុបត្រូវស្មើ credit សរុប។'],
  ['Dr Cash 3,000 / Cr Capital 3,000.', 'Dr សាច់ប្រាក់ 3,000 / Cr មូលធន 3,000។']);
K('bookkeeping', ['Ledger', 'សៀវភៅធំ'], ['The book that groups all entries by account.', 'សៀវភៅដែលដាក់កំណត់ត្រាទាំងអស់ជាក្រុមតាមគណនី។'],
  ['It shows each account\'s running balance.', 'វាបង្ហាញសមតុល្យបន្តបន្ទាប់នៃគណនីនីមួយៗ។'],
  ['All cash transactions together in the Cash account.', 'ប្រតិបត្តិការសាច់ប្រាក់ទាំងអស់ជាមួយគ្នាក្នុងគណនីសាច់ប្រាក់។']);
K('bookkeeping', ['T-account', 'T-account'], ['A simple picture of an account: debits on the left, credits on the right.', 'រូបភាពសាមញ្ញនៃគណនី៖ debit ខាងឆ្វេង credit ខាងស្តាំ។'],
  ['The balance is the difference between the two sides.', 'សមតុល្យគឺជាផលសងរវាងភាគីទាំងពីរ។'],
  ['Cash: Dr 3,450, Cr 1,050 → balance 2,400 debit.', 'សាច់ប្រាក់៖ Dr 3,450 Cr 1,050 → សមតុល្យ 2,400 debit។'], 'Balance = Debits − Credits (for a debit-normal account)');
K('bookkeeping', ['Posting', 'ការផ្ទេរ (posting)'], ['Copying journal entries into the ledger accounts.', 'ការចម្លងកំណត់ត្រាកំណត់ហេតុទៅគណនីក្នុងសៀវភៅធំ។'],
  ['Each journal line goes to the account it names.', 'ជួរកំណត់ហេតុនីមួយៗទៅគណនីដែលវាបញ្ជាក់។'],
  ['The $3,000 debit to Cash is posted to the Cash account.', 'debit សាច់ប្រាក់ $3,000 ត្រូវផ្ទេរទៅគណនីសាច់ប្រាក់។']);
K('bookkeeping', ['Normal balance', 'សមតុល្យធម្មតា'], ['The side (debit or credit) on which an account normally increases.', 'ខាង (debit ឬ credit) ដែលគណនីជាធម្មតាកើន។'],
  ['Assets, expenses, drawings: debit. Liabilities, equity, revenue: credit.', 'ទ្រព្យ ចំណាយ ការដកប្រាក់៖ debit។ បំណុល មូលធន ចំណូល៖ credit។'],
  ['Accounts Payable normally has a credit balance.', 'គណនីត្រូវបង់ជាធម្មតាមានសមតុល្យ credit។']);
K('bookkeeping', ['Double-entry bookkeeping', 'ការកត់ត្រាគូ'], ['Every transaction is recorded with equal debits and credits.', 'រាល់ប្រតិបត្តិការត្រូវកត់ជាមួយ debit និង credit ស្មើគ្នា។'],
  ['This keeps the accounting equation balanced and helps find errors.', 'នេះរក្សាសមីការគណនេយ្យឲ្យតុល្យភាព ហើយជួយរកកំហុស។'],
  ['Buying equipment: Dr Equipment / Cr Cash.', 'ទិញបរិក្ខារ៖ Dr បរិក្ខារ / Cr សាច់ប្រាក់។'], 'Total debits = Total credits');

// ---------------- Financial statements ----------------
K('statements', ['Income statement', 'របាយការណ៍លទ្ធផល'], ['A report of revenue and expenses that shows profit or loss for a period.', 'របាយការណ៍ចំណូល និងចំណាយ ដែលបង្ហាញចំណេញ ឬខាតក្នុងអំឡុងពេលមួយ។'],
  ['It covers a period of time, such as a month or year.', 'វាគ្របដណ្តប់រយៈពេលមួយ ដូចជាមួយខែ ឬមួយឆ្នាំ។'],
  ['Revenue $2,000 − expenses $1,400 = profit $600.', 'ចំណូល $2,000 − ចំណាយ $1,400 = ចំណេញ $600។'], 'Net income = Revenue − Expenses');
K('statements', ['Balance sheet', 'តារាងតុល្យការ'], ['A report of assets, liabilities and equity on one date.', 'របាយការណ៍ទ្រព្យ បំណុល និងមូលធន នៅកាលបរិច្ឆេទមួយ។'],
  ['It is like a photograph of the business on that day. It must balance.', 'វាដូចរូបថតអាជីវកម្មនៅថ្ងៃនោះ។ វាត្រូវតែតុល្យភាព។'],
  ['Assets $6,600 = Liabilities $1,500 + Equity $5,100.', 'ទ្រព្យ $6,600 = បំណុល $1,500 + មូលធន $5,100។'], 'Assets = Liabilities + Equity');
K('statements', ['Cash flow statement', 'របាយការណ៍លំហូរសាច់ប្រាក់'], ['A report of cash coming in and going out during a period.', 'របាយការណ៍សាច់ប្រាក់ចូល និងចេញក្នុងអំឡុងពេលមួយ។'],
  ['It groups cash into operating, investing and financing activities.', 'វាដាក់សាច់ប្រាក់ជាក្រុមសកម្មភាពប្រតិបត្តិការ វិនិយោគ និងហិរញ្ញប្បទាន។'],
  ['Profit of $600 but cash fell by $600 after buying equipment.', 'ចំណេញ $600 ប៉ុន្តែសាច់ប្រាក់ថយ $600 បន្ទាប់ពីទិញបរិក្ខារ។']);
K('statements', ['Statement of changes in equity', 'របាយការណ៍បម្រែបម្រួលមូលធន'], ['A report showing how equity changed during a period.', 'របាយការណ៍បង្ហាញពីរបៀបដែលមូលធនផ្លាស់ប្តូរក្នុងអំឡុងពេលមួយ។'],
  ['It starts with opening equity, adds investment and profit, and subtracts drawings.', 'វាចាប់ផ្តើមពីមូលធនដើមគ្រា បូកការដាក់ទុន និងចំណេញ ហើយដកការដកប្រាក់។'],
  ['10,000 + 3,000 profit − 1,200 drawings = 11,800.', '10,000 + ចំណេញ 3,000 − ការដកប្រាក់ 1,200 = 11,800។'], 'Closing equity = Opening + Investment + Profit − Drawings');
K('statements', ['Working capital', 'ដើមទុនបង្វិល'], ['Current assets minus current liabilities.', 'ទ្រព្យសកម្មចរន្តដកបំណុលចរន្ត។'],
  ['It shows whether short-term assets can cover short-term debts.', 'វាបង្ហាញថាតើទ្រព្យរយៈពេលខ្លីអាចគ្របដណ្តប់បំណុលរយៈពេលខ្លីបានឬទេ។'],
  ['Current assets $8,000 − current liabilities $3,000 = $5,000.', 'ទ្រព្យចរន្ត $8,000 − បំណុលចរន្ត $3,000 = $5,000។'], 'Working capital = Current assets − Current liabilities');

// ---------------- Practical accounting ----------------
K('practical', ['Bank reconciliation', 'ការផ្ទៀងផ្ទាត់ធនាគារ'], ['Comparing your cash records with the bank statement and explaining differences.', 'ការប្រៀបធៀបកំណត់ត្រាសាច់ប្រាក់របស់អ្នកជាមួយរបាយការណ៍ធនាគារ ហើយពន្យល់ពីភាពខុសគ្នា។'],
  ['Typical differences: cheques not yet cashed, bank fees, deposits in transit.', 'ភាពខុសគ្នាទូទៅ៖ មូលប្បទានប័ត្រមិនទាន់ដក ថ្លៃសេវាធនាគារ ប្រាក់ដាក់កំពុងធ្វើដំណើរ។'],
  ['Your books say $2,400 but the bank says $2,350 after a $50 fee.', 'សៀវភៅអ្នកថា $2,400 តែធនាគារថា $2,350 បន្ទាប់ពីថ្លៃសេវា $50។']);
K('practical', ['Payroll', 'បញ្ជីប្រាក់ខែ'], ['The record of what employees are paid, including deductions.', 'កំណត់ត្រានៃអ្វីដែលបុគ្គលិកទទួលបាន រួមទាំងការកាត់។'],
  ['Wages are an expense. Amounts withheld for tax or social contributions are liabilities until paid over.', 'ប្រាក់ខែជាចំណាយ។ ចំនួនដែលកាត់សម្រាប់ពន្ធ ឬវិភាគទានសង្គមជាបំណុលរហូតដល់បង់ទៅ។'],
  ['A shop pays three staff each month.', 'ហាងបង់ប្រាក់ខែបុគ្គលិក ៣នាក់រាល់ខែ។']);
K('practical', ['Budget', 'ថវិកា'], ['A plan of expected income and spending for a future period.', 'ផែនការចំណូល និងចំណាយដែលរំពឹងសម្រាប់អំឡុងពេលអនាគត។'],
  ['Comparing the budget with actual results helps control costs.', 'ការប្រៀបធៀបថវិកាជាមួយលទ្ធផលជាក់ស្តែងជួយគ្រប់គ្រងចំណាយ។'],
  ['Planning $600 for electricity next month.', 'គ្រោង $600 សម្រាប់អគ្គិសនីខែក្រោយ។']);
K('practical', ['VAT (Value Added Tax)', 'ពន្ធលើតម្លៃបន្ថែម (VAT)'], ['A tax added to the price of goods and services, paid by the final customer.', 'ពន្ធបន្ថែមលើតម្លៃទំនិញ និងសេវា ដែលអតិថិជនចុងក្រោយជាអ្នកបង់។'],
  ['Businesses collect VAT and pass it to the tax office. The rate and rules depend on the country; check the tax authority.', 'អាជីវកម្មប្រមូល VAT ហើយបង់ទៅការិយាល័យពន្ធដារ។ អត្រា និងច្បាប់អាស្រ័យលើប្រទេស សូមពិនិត្យអាជ្ញាធរពន្ធដារ។'],
  ['A $100 sale with 10% VAT is charged to the customer as $110.', 'ការលក់ $100 ជាមួយ VAT 10% ត្រូវគិតអតិថិជន $110។']);
K('practical', ['Adjusting entry', 'កំណត់ត្រាកែតម្រូវ'], ['An entry at period end to update accounts for items not yet recorded.', 'កំណត់ត្រាចុងអំឡុងពេលដើម្បីធ្វើបច្ចុប្បន្នភាពគណនីសម្រាប់ធាតុមិនទាន់កត់។'],
  ['Common ones: accrued expenses, prepaid expenses and depreciation.', 'ទូទៅមាន៖ ចំណាយ accrued ចំណាយបង់មុន និងការរំលស់។'],
  ['Dr Insurance Expense 20 / Cr Prepaid Insurance 20.', 'Dr ចំណាយធានារ៉ាប់រង 20 / Cr ធានារ៉ាប់រងបង់មុន 20។']);
K('practical', ['Closing entry', 'កំណត់ត្រាបិទបញ្ជី'], ['An entry at period end that moves revenue, expenses and drawings into equity.', 'កំណត់ត្រាចុងអំឡុងពេលដែលផ្ទេរចំណូល ចំណាយ និងការដកប្រាក់ទៅមូលធន។'],
  ['It resets those accounts to zero for the next period.', 'វាកំណត់គណនីទាំងនោះទៅសូន្យសម្រាប់អំឡុងពេលបន្ទាប់។'],
  ['Revenue and expense balances are closed to Capital.', 'សមតុល្យចំណូល និងចំណាយត្រូវបិទទៅមូលធន។']);
K('practical', ['Accounting cycle', 'វដ្តគណនេយ្យ'], ['The full set of steps from recording transactions to closing the books.', 'សំណុំជំហានពេញលេញពីការកត់ប្រតិបត្តិការ ដល់ការបិទបញ្ជី។'],
  ['Journal → ledger → trial balance → adjustments → statements → closing.', 'សៀវភៅកំណត់ហេតុ → សៀវភៅធំ → តារាងតុល្យការសាកល្បង → ការកែតម្រូវ → របាយការណ៍ → ការបិទ។'],
  ['A shop repeats the cycle every month.', 'ហាងធ្វើវដ្តនេះម្តងទៀតរាល់ខែ។']);

// ---------------- UI strings for the study tracker ----------------
Object.assign(DATA.ui.en, {
  study: 'Study', cardsTotal: 'Total cards', stNew: 'New', stLearning: 'Learning', stMastered: 'Mastered', dueToday: 'Due now',
  masteredPct: 'cards mastered', startSession: 'Start study session', sessionSize: 'Cards per session', includeNotDue: 'Include cards that are not due yet',
  catAll: 'All categories', savedSession: 'Saved session', resume: 'Resume', discard: 'Discard', stopSave: 'Stop and save',
  progressSaved: 'Progress saved. You can resume anytime.', sessionDone: 'Session finished', reviewedToday: 'Reviewed today', cardOf: 'Card', lastSession: 'Last session',
  byCategory: 'Progress by category', endSession: 'Finish session', allCards: 'All', searchTerms: 'Search terms...', shownCards: 'terms', nextReview: 'Next review', reviewsN: 'reviews',
  flipHint: 'Tap the card to see the answer', howRated: 'How well did you know it?', againHint: 'Again = see it soon', cardsDone: 'done', nothingToStudy: 'No cards to study with these settings. Try including cards that are not due.'
});
Object.assign(DATA.ui.km, {
  study: 'សិក្សា', cardsTotal: 'កាតសរុប', stNew: 'ថ្មី', stLearning: 'កំពុងរៀន', stMastered: 'ស្ទាត់ជំនាញ', dueToday: 'ដល់ពេលរំលឹក',
  masteredPct: 'កាតស្ទាត់ជំនាញ', startSession: 'ចាប់ផ្តើមវគ្គសិក្សា', sessionSize: 'ចំនួនកាតក្នុងមួយវគ្គ', includeNotDue: 'រួមបញ្ចូលកាតដែលមិនទាន់ដល់ពេល',
  catAll: 'គ្រប់ប្រភេទ', savedSession: 'វគ្គដែលបានរក្សាទុក', resume: 'បន្ត', discard: 'បោះបង់', stopSave: 'ឈប់ និងរក្សាទុក',
  progressSaved: 'បានរក្សាទុកដំណើរការ។ អ្នកអាចបន្តនៅពេលណាក៏បាន។', sessionDone: 'វគ្គបានបញ្ចប់', reviewedToday: 'បានរំលឹកថ្ងៃនេះ', cardOf: 'កាត', lastSession: 'វគ្គចុងក្រោយ',
  byCategory: 'ដំណើរការតាមប្រភេទ', endSession: 'បញ្ចប់វគ្គ', allCards: 'ទាំងអស់', searchTerms: 'ស្វែងរកពាក្យ...', shownCards: 'ពាក្យ', nextReview: 'ការរំលឹកបន្ទាប់', reviewsN: 'ដងរំលឹក',
  flipHint: 'ចុចលើកាតដើម្បីមើលចម្លើយ', howRated: 'តើអ្នកដឹងវាប៉ុណ្ណា?', againHint: 'ម្តងទៀត = ឃើញវាឆាប់ៗ', cardsDone: 'រួចរាល់', nothingToStudy: 'គ្មានកាតដើម្បីសិក្សាជាមួយការកំណត់នេះទេ។ សាកល្បងរួមបញ្ចូលកាតដែលមិនទាន់ដល់ពេល។'
});

// ---------- UI strings: quiz pause / save ----------
Object.assign(DATA.ui.en, {
  pause: 'Pause', paused: 'Quiz paused', pausedMsg: 'The timer is stopped and the question is hidden. Resume when you are ready, or save and come back later.',
  resumeQuiz: 'Resume quiz', saveExit: 'Save and exit', finishNow: 'Finish and see score', savedQuiz: 'Unfinished quiz', answeredN: 'answered',
  savedAt: 'Saved', quizSaved: 'Quiz saved. Resume it from the Quiz page.', replaceNote: 'Starting a new quiz and then leaving it will replace the saved one.',
  autoSaved: 'Your quiz was saved automatically.', discardSure: 'Click again to discard'
});
Object.assign(DATA.ui.km, {
  pause: 'ផ្អាក', paused: 'កម្រងសំណួរត្រូវបានផ្អាក', pausedMsg: 'ម៉ោងបានឈប់ ហើយសំណួរត្រូវបានលាក់។ បន្តនៅពេលអ្នកត្រៀមខ្លួនរួច ឬរក្សាទុកហើយត្រឡប់មកវិញពេលក្រោយ។',
  resumeQuiz: 'បន្តកម្រងសំណួរ', saveExit: 'រក្សាទុក និងចាកចេញ', finishNow: 'បញ្ចប់ និងមើលពិន្ទុ', savedQuiz: 'កម្រងសំណួរមិនទាន់ចប់', answeredN: 'បានឆ្លើយ',
  savedAt: 'បានរក្សាទុក', quizSaved: 'បានរក្សាទុកកម្រងសំណួរ។ អ្នកអាចបន្តពីទំព័រកម្រងសំណួរ។', replaceNote: 'ការចាប់ផ្តើមកម្រងសំណួរថ្មី ហើយចាកចេញ នឹងជំនួសកម្រងដែលបានរក្សាទុក។',
  autoSaved: 'កម្រងសំណួររបស់អ្នកត្រូវបានរក្សាទុកដោយស្វ័យប្រវត្តិ។', discardSure: 'ចុចម្តងទៀតដើម្បីបោះបង់'
});
