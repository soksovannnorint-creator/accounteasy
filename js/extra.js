// AccountEasy extra content: in-depth sections, comparison tables, key terms, Cambodian examples.
// Attached to lessons by id. Every text is {en, km} via b().
const EX = {};

// ======================= 1. What is accounting? =======================
EX.intro = {
  deep: [
    { h: b('The accounting process: four steps', 'ដំណើរការគណនេយ្យ៖ បួនជំហាន'),
      p: b('Accounting is not just writing numbers down. It follows four connected steps that turn raw business activity into useful information.',
           'គណនេយ្យមិនមែនគ្រាន់តែសរសេរលេខទេ។ វាមានបួនជំហានដែលភ្ជាប់គ្នា ដើម្បីបំប្លែងសកម្មភាពអាជីវកម្មឲ្យទៅជាព័ត៌មានមានប្រយោជន៍។'),
      list: [
        b('1. Identify: decide which events are business transactions (a sale, a purchase, a loan). A phone call with a customer is not one until money or goods are involved.', '១. កំណត់៖ សម្រេចថាព្រឹត្តិការណ៍ណាជាប្រតិបត្តិការអាជីវកម្ម (ការលក់ ការទិញ កម្ចី)។ ការហៅទូរស័ព្ទជាមួយអតិថិជនមិនទាន់ជាប្រតិបត្តិការទេ រហូតដល់មានលុយ ឬទំនិញពាក់ព័ន្ធ។'),
        b('2. Record: write each transaction in the books, in order, with its date and amount.', '២. កត់ត្រា៖ សរសេររាល់ប្រតិបត្តិការក្នុងបញ្ជី តាមលំដាប់ ជាមួយកាលបរិច្ឆេទ និងចំនួនទឹកប្រាក់។'),
        b('3. Summarise: group the records into totals and financial statements (income statement, balance sheet).', '៣. សង្ខេប៖ ដាក់កំណត់ត្រាជាក្រុមទៅជាតួលេខសរុប និងរបាយការណ៍ហិរញ្ញវត្ថុ (របាយការណ៍លទ្ធផល តារាងតុល្យការ)។'),
        b('4. Communicate: give the reports to the people who need them, such as the owner, a bank or the tax office.', '៤. ផ្សព្វផ្សាយ៖ ផ្តល់របាយការណ៍ដល់អ្នកដែលត្រូវការ ដូចជាម្ចាស់ ធនាគារ ឬការិយាល័យពន្ធដារ។')
      ] },
    { h: b('Who uses accounting information, and for what?', 'តើអ្នកណាប្រើព័ត៌មានគណនេយ្យ ហើយសម្រាប់អ្វី?'),
      p: b('Different people ask different questions of the same numbers. Internal users run the business. External users decide whether to trust, lend to, invest in, or tax it.',
           'មនុស្សផ្សេងគ្នាសួរសំណួរផ្សេងគ្នាចំពោះតួលេខតែមួយ។ អ្នកប្រើផ្ទៃក្នុងគ្រប់គ្រងអាជីវកម្ម។ អ្នកប្រើខាងក្រៅសម្រេចថាតើគួរជឿទុកចិត្ត ឲ្យខ្ចី វិនិយោគ ឬយកពន្ធ។'),
      list: [
        b('Owner: "Am I making money? Can I take some out?"', 'ម្ចាស់៖ "តើខ្ញុំរកលុយបានទេ? តើខ្ញុំអាចដកខ្លះបានទេ?"'),
        b('Manager: "Which product earns most? Where can we cut costs?"', 'អ្នកគ្រប់គ្រង៖ "ផលិតផលណារកបានច្រើនជាងគេ? តើកាត់បន្ថយចំណាយត្រង់ណាបាន?"'),
        b('Bank: "Can this business repay a loan?"', 'ធនាគារ៖ "តើអាជីវកម្មនេះអាចសងកម្ចីបានទេ?"'),
        b('Supplier: "Will they pay if I sell on credit?"', 'អ្នកផ្គត់ផ្គង់៖ "បើខ្ញុំលក់ជំពាក់ តើពួកគេនឹងបង់ឬអត់?"'),
        b('Tax authority: "Is the tax calculated correctly?"', 'អាជ្ញាធរពន្ធដារ៖ "តើពន្ធត្រូវបានគណនាត្រឹមត្រូវឬទេ?"'),
        b('Investor: "Is this business worth putting money into?"', 'វិនិយោគិន៖ "តើអាជីវកម្មនេះសមនឹងដាក់ទុនឬទេ?"')
      ] },
    { h: b('Bookkeeping and accounting are related, but not identical', 'ការកត់ត្រា (bookkeeping) និងគណនេយ្យ ទាក់ទងគ្នា ប៉ុន្តែមិនដូចគ្នាទេ'),
      p: b('Bookkeeping is the routine part: recording transactions correctly. Accounting includes bookkeeping and goes further by classifying, summarising, analysing and interpreting the results so decisions can be made.',
           'ការកត់ត្រាជាផ្នែកប្រចាំថ្ងៃ៖ កត់ប្រតិបត្តិការឲ្យបានត្រឹមត្រូវ។ គណនេយ្យរួមបញ្ចូលការកត់ត្រា ហើយទៅឆ្ងាយជាងនេះដោយចាត់ថ្នាក់ សង្ខេប វិភាគ និងបកស្រាយលទ្ធផល ដើម្បីឲ្យអាចសម្រេចចិត្តបាន។') },
    { h: b('Accounting standards: why rules matter', 'ស្តង់ដារគណនេយ្យ៖ ហេតុអ្វីបានជាច្បាប់សំខាន់'),
      p: b('If every business recorded things its own way, nobody could compare them. Standards give common rules. The two best-known sets are IFRS (used in most countries) and US GAAP (used in the United States). Cambodia has its own standards, called CIFRS, which are based on IFRS. Always check which standard your course or company uses, because a few treatments differ.',
           'បើអាជីវកម្មនីមួយៗកត់តាមវិធីរបស់ខ្លួន គ្មាននរណាអាចប្រៀបធៀបបានទេ។ ស្តង់ដារផ្តល់ច្បាប់រួម។ ស្តង់ដារពីរដែលល្បីជាងគេគឺ IFRS (ប្រើក្នុងប្រទេសភាគច្រើន) និង US GAAP (ប្រើក្នុងសហរដ្ឋអាមេរិក)។ កម្ពុជាមានស្តង់ដាររបស់ខ្លួន ហៅថា CIFRS ដែលផ្អែកលើ IFRS។ សូមពិនិត្យជានិច្ចថាវគ្គសិក្សា ឬក្រុមហ៊ុនរបស់អ្នកប្រើស្តង់ដារណា ព្រោះការកត់ត្រាខ្លះមានភាពខុសគ្នា។') }
  ],
  compare: [
    { t: b('Financial accounting vs managerial accounting', 'គណនេយ្យហិរញ្ញវត្ថុ ប្រៀបធៀប គណនេយ្យគ្រប់គ្រង'),
      head: [b('Feature', 'លក្ខណៈ'), b('Financial accounting', 'គណនេយ្យហិរញ្ញវត្ថុ'), b('Managerial accounting', 'គណនេយ្យគ្រប់គ្រង')],
      rows: [
        [b('Main users', 'អ្នកប្រើចម្បង'), b('External: banks, investors, tax office', 'ខាងក្រៅ៖ ធនាគារ វិនិយោគិន ការិយាល័យពន្ធដារ'), b('Internal: owners and managers', 'ផ្ទៃក្នុង៖ ម្ចាស់ និងអ្នកគ្រប់គ្រង')],
        [b('Purpose', 'គោលបំណង'), b('Show overall results and position', 'បង្ហាញលទ្ធផល និងស្ថានភាពទូទៅ'), b('Support planning and decisions', 'គាំទ្រផែនការ និងការសម្រេចចិត្ត')],
        [b('Time focus', 'ការផ្តោតលើពេលវេលា'), b('Mostly the past', 'ភាគច្រើនអតីតកាល'), b('Past and future (budgets, forecasts)', 'អតីតកាល និងអនាគត (ថវិកា ការព្យាករ)')],
        [b('Rules', 'ច្បាប់'), b('Must follow standards (IFRS / GAAP)', 'ត្រូវអនុវត្តតាមស្តង់ដារ (IFRS / GAAP)'), b('Free format, set by the business', 'ទម្រង់សេរី កំណត់ដោយអាជីវកម្ម')],
        [b('Reports', 'របាយការណ៍'), b('Income statement, balance sheet, cash flow', 'របាយការណ៍លទ្ធផល តារាងតុល្យការ លំហូរសាច់ប្រាក់'), b('Budgets, cost reports, product profitability', 'ថវិកា របាយការណ៍ថ្លៃដើម ចំណេញតាមផលិតផល')]
      ] },
    { t: b('Bookkeeping vs accounting', 'ការកត់ត្រា ប្រៀបធៀប គណនេយ្យ'),
      head: [b('Feature', 'លក្ខណៈ'), b('Bookkeeping', 'ការកត់ត្រា'), b('Accounting', 'គណនេយ្យ')],
      rows: [
        [b('Main job', 'ការងារចម្បង'), b('Record transactions', 'កត់ប្រតិបត្តិការ'), b('Record, classify, summarise, analyse', 'កត់ត្រា ចាត់ថ្នាក់ សង្ខេប វិភាគ')],
        [b('Output', 'លទ្ធផល'), b('Journals and ledgers', 'សៀវភៅកំណត់ហេតុ និងសៀវភៅធំ'), b('Financial statements and advice', 'របាយការណ៍ហិរញ្ញវត្ថុ និងដំបូន្មាន')],
        [b('Decisions', 'ការសម្រេចចិត្ត'), b('Does not interpret results', 'មិនបកស្រាយលទ្ធផល'), b('Interprets results for decisions', 'បកស្រាយលទ្ធផលសម្រាប់ការសម្រេចចិត្ត')]
      ] }
  ],
  terms: [
    [b('Transaction', 'ប្រតិបត្តិការ'), b('A business event involving money or goods that is recorded.', 'ព្រឹត្តិការណ៍អាជីវកម្មដែលពាក់ព័ន្ធនឹងលុយ ឬទំនិញ ហើយត្រូវកត់ត្រា។')],
    [b('Financial statements', 'របាយការណ៍ហិរញ្ញវត្ថុ'), b('Formal reports that summarise results and position.', 'របាយការណ៍ផ្លូវការដែលសង្ខេបលទ្ធផល និងស្ថានភាព។')],
    [b('Stakeholder', 'ភាគីពាក់ព័ន្ធ'), b('Anyone with an interest in the business: owner, bank, staff, tax office.', 'អ្នកណាដែលមានចំណាប់អារម្មណ៍លើអាជីវកម្ម៖ ម្ចាស់ ធនាគារ បុគ្គលិក ការិយាល័យពន្ធដារ។')],
    [b('Audit', 'សវនកម្ម'), b('An independent check that financial statements are fair.', 'ការត្រួតពិនិត្យឯករាជ្យថារបាយការណ៍ហិរញ្ញវត្ថុមានភាពសមរម្យ។')]
  ],
  kh: b('Dara sells kuy teav (noodle soup) in Siem Reap. Each day she sells 80 bowls at 6,000 riel (KHR). Revenue = 80 × 6,000 = 480,000 KHR. Ingredients cost 210,000 KHR and her helper is paid 60,000 KHR. Profit = 480,000 − 210,000 − 60,000 = 210,000 KHR (about $52 at roughly 4,000 riel per US dollar). Without a notebook she could not know this, or show a bank that she can repay a loan.',
        'ដារ៉ាលក់គុយទាវនៅសៀមរាប។ រាល់ថ្ងៃនាងលក់បាន ៨០ចាន ក្នុងតម្លៃ ៦,០០០រៀលក្នុងមួយចាន។ ចំណូល = 80 × 6,000 = 480,000 រៀល។ គ្រឿងផ្សំចំណាយ 210,000 រៀល ហើយបង់ប្រាក់ខែជំនួយការ 60,000 រៀល។ ចំណេញ = 480,000 − 210,000 − 60,000 = 210,000 រៀល (ប្រហែល $52 តាមអត្រាប្រហែល ៤,០០០រៀលក្នុងមួយដុល្លារ)។ បើគ្មានសៀវភៅកត់ត្រា នាងមិនអាចដឹងរឿងនេះ ឬបង្ហាញធនាគារថានាងអាចសងកម្ចីបានទេ។')
};

// ======================= 2. Assets, liabilities, equity =======================
EX.elements = {
  deep: [
    { h: b('Assets in detail: current and non-current', 'ទ្រព្យសកម្មលម្អិត៖ ចរន្ត និងមិនមែនចរន្ត'),
      p: b('Assets are split by how quickly they turn into cash. Current assets are expected to become cash, or be used up, within about a year. Non-current assets are kept for longer to help run the business.',
           'ទ្រព្យសកម្មត្រូវបានបែងចែកតាមល្បឿនបម្លែងទៅជាសាច់ប្រាក់។ ទ្រព្យសកម្មចរន្តរំពឹងថានឹងក្លាយជាសាច់ប្រាក់ ឬប្រើអស់ក្នុងរយៈពេលប្រហែលមួយឆ្នាំ។ ទ្រព្យសកម្មមិនមែនចរន្តត្រូវរក្សាទុកយូរជាងនេះ ដើម្បីជួយដំណើរការអាជីវកម្ម។'),
      list: [
        b('Current: cash, bank balance, accounts receivable, inventory, prepaid expenses.', 'ចរន្ត៖ សាច់ប្រាក់ សមតុល្យធនាគារ គណនីត្រូវទទួល ស្តុក ចំណាយបង់មុន។'),
        b('Non-current: land, buildings, vehicles, machinery, office equipment.', 'មិនមែនចរន្ត៖ ដី អគារ យានយន្ត គ្រឿងចក្រ បរិក្ខារការិយាល័យ។')
      ] },
    { h: b('Liabilities in detail: current and non-current', 'បំណុលលម្អិត៖ ចរន្ត និងមិនមែនចរន្ត'),
      p: b('Liabilities are split by when they must be paid. Current liabilities are due within about a year. Non-current liabilities are due later.',
           'បំណុលត្រូវបានបែងចែកតាមពេលវេលាត្រូវបង់។ បំណុលចរន្តត្រូវបង់ក្នុងរយៈពេលប្រហែលមួយឆ្នាំ។ បំណុលមិនមែនចរន្តត្រូវបង់ក្រោយនេះ។'),
      list: [
        b('Current: accounts payable, wages payable, tax payable, the part of a loan due this year.', 'ចរន្ត៖ គណនីត្រូវបង់ ប្រាក់ខែត្រូវបង់ ពន្ធត្រូវបង់ ផ្នែកនៃកម្ចីដែលត្រូវបង់ឆ្នាំនេះ។'),
        b('Non-current: a bank loan repaid over five years (the part due later).', 'មិនមែនចរន្ត៖ កម្ចីធនាគារដែលសងក្នុងរយៈពេលប្រាំឆ្នាំ (ផ្នែកដែលត្រូវបង់ក្រោយ)។')
      ] },
    { h: b('What is owner\'s equity made of?', 'មូលធនម្ចាស់ផ្សំឡើងពីអ្វី?'),
      p: b('Equity is the owner\'s claim on the business. It grows when the owner invests or the business makes a profit. It shrinks when the owner draws money out or the business makes a loss.',
           'មូលធនគឺជាសិទ្ធិរបស់ម្ចាស់លើអាជីវកម្ម។ វាកើនឡើងនៅពេលម្ចាស់ដាក់ទុន ឬអាជីវកម្មរកចំណេញ។ វាថយចុះនៅពេលម្ចាស់ដកលុយចេញ ឬអាជីវកម្មខាត។'),
      list: [
        b('Closing equity = Opening capital + Owner investments + Profit − Drawings', 'មូលធនចុងគ្រា = មូលធនដើមគ្រា + ការដាក់ទុនថ្មី + ចំណេញ − ការដកប្រាក់'),
        b('Example: 10,000 + 0 + 3,000 − 1,200 = $11,800', 'ឧទាហរណ៍៖ 10,000 + 0 + 3,000 − 1,200 = $11,800')
      ] },
    { h: b('A 3-question test to classify any item', 'តេស្ត ៣ សំណួរដើម្បីចាត់ថ្នាក់ធាតុណាមួយ'),
      p: b('When you are unsure, ask these questions in order.', 'នៅពេលអ្នកមិនប្រាកដ សូមសួរសំណួរទាំងនេះតាមលំដាប់។'),
      list: [
        b('Does the business own or control it and expect a benefit? → Asset.', 'តើអាជីវកម្មជាម្ចាស់ ឬគ្រប់គ្រងវា ហើយរំពឹងផលប្រយោជន៍ឬទេ? → ទ្រព្យសកម្ម។'),
        b('Does the business have to pay or deliver something to someone else? → Liability.', 'តើអាជីវកម្មត្រូវបង់ ឬប្រគល់អ្វីមួយដល់អ្នកដទៃឬទេ? → បំណុល។'),
        b('Is it the owner\'s own share, or part of profit/drawings? → Equity.', 'តើវាជាចំណែករបស់ម្ចាស់ ឬផ្នែកនៃចំណេញ/ការដកប្រាក់ឬទេ? → មូលធន។')
      ] }
  ],
  compare: [
    { t: b('Asset vs liability vs equity', 'ទ្រព្យសកម្ម បំណុល និងមូលធន ប្រៀបធៀបគ្នា'),
      head: [b('Feature', 'លក្ខណៈ'), b('Asset', 'ទ្រព្យសកម្ម'), b('Liability', 'បំណុល'), b('Equity', 'មូលធន')],
      rows: [
        [b('Simple meaning', 'អត្ថន័យសាមញ្ញ'), b('What the business owns', 'អ្វីដែលអាជីវកម្មជាម្ចាស់'), b('What the business owes', 'អ្វីដែលអាជីវកម្មជំពាក់'), b('What is left for the owner', 'អ្វីដែលនៅសល់សម្រាប់ម្ចាស់')],
        [b('Examples', 'ឧទាហរណ៍'), b('Cash, stock, equipment', 'សាច់ប្រាក់ ស្តុក បរិក្ខារ'), b('Bank loan, accounts payable', 'កម្ចីធនាគារ គណនីត្រូវបង់'), b('Owner\'s capital, profit kept', 'មូលធនម្ចាស់ ចំណេញរក្សាទុក')],
        [b('Normal balance', 'សមតុល្យធម្មតា'), 'Debit', 'Credit', 'Credit'],
        [b('Side of the equation', 'ផ្នែកនៃសមីការ'), b('Left', 'ឆ្វេង'), b('Right', 'ស្តាំ'), b('Right', 'ស្តាំ')]
      ] },
    { t: b('Current vs non-current', 'ចរន្ត ប្រៀបធៀប មិនមែនចរន្ត'),
      head: [b('Feature', 'លក្ខណៈ'), b('Current', 'ចរន្ត'), b('Non-current', 'មិនមែនចរន្ត')],
      rows: [
        [b('Time', 'ពេលវេលា'), b('Within about 1 year', 'ក្នុងរយៈពេលប្រហែល ១ ឆ្នាំ'), b('Longer than 1 year', 'លើសពី ១ ឆ្នាំ')],
        [b('Asset examples', 'ឧទាហរណ៍ទ្រព្យ'), b('Cash, receivables, inventory', 'សាច់ប្រាក់ គណនីត្រូវទទួល ស្តុក'), b('Vehicles, buildings, machinery', 'យានយន្ត អគារ គ្រឿងចក្រ')],
        [b('Liability examples', 'ឧទាហរណ៍បំណុល'), b('Accounts payable, wages payable', 'គណនីត្រូវបង់ ប្រាក់ខែត្រូវបង់'), b('Long-term bank loan', 'កម្ចីធនាគាររយៈពេលវែង')]
      ] },
    { t: b('Accounts receivable vs accounts payable', 'គណនីត្រូវទទួល ប្រៀបធៀប គណនីត្រូវបង់'),
      head: [b('Feature', 'លក្ខណៈ'), b('Accounts receivable', 'គណនីត្រូវទទួល'), b('Accounts payable', 'គណនីត្រូវបង់')],
      rows: [
        [b('Who owes whom', 'អ្នកណាជំពាក់អ្នកណា'), b('Customers owe the business', 'អតិថិជនជំពាក់អាជីវកម្ម'), b('The business owes suppliers', 'អាជីវកម្មជំពាក់អ្នកផ្គត់ផ្គង់')],
        [b('Classification', 'ការចាត់ថ្នាក់'), b('Asset', 'ទ្រព្យសកម្ម'), b('Liability', 'បំណុល')],
        [b('Created by', 'កើតពី'), b('Selling on credit', 'ការលក់ជំពាក់'), b('Buying on credit', 'ការទិញជំពាក់')],
        [b('Cash effect when settled', 'ផលលើសាច់ប្រាក់ពេលបង់'), b('Cash comes in', 'សាច់ប្រាក់ចូល'), b('Cash goes out', 'សាច់ប្រាក់ចេញ')]
      ] }
  ],
  terms: [
    [b('Current asset', 'ទ្រព្យសកម្មចរន្ត'), b('An asset expected to be turned into cash or used within about a year.', 'ទ្រព្យសកម្មដែលរំពឹងថានឹងក្លាយជាសាច់ប្រាក់ ឬប្រើក្នុងរយៈពេលប្រហែលមួយឆ្នាំ។')],
    [b('Non-current asset', 'ទ្រព្យសកម្មមិនមែនចរន្ត'), b('An asset kept for more than a year.', 'ទ្រព្យសកម្មដែលរក្សាទុកលើសពីមួយឆ្នាំ។')],
    [b('Capital', 'មូលធន (ដើមទុន)'), b('Money or assets the owner puts into the business.', 'លុយ ឬទ្រព្យដែលម្ចាស់ដាក់ចូលអាជីវកម្ម។')],
    [b('Drawings', 'ការដកប្រាក់'), b('Money or goods the owner takes out for personal use.', 'លុយ ឬទំនិញដែលម្ចាស់យកចេញសម្រាប់ប្រើផ្ទាល់ខ្លួន។')]
  ],
  kh: b('Sophea owns a clothing shop in Phnom Penh. Cash $1,500, stock of clothes $2,500, a sewing machine $1,000. She owes a fabric supplier $800. Assets = 1,500 + 2,500 + 1,000 = $5,000. Liabilities = $800. Equity = 5,000 − 800 = $4,200. If her bank asks "how much of the business is really yours?", the answer is $4,200.',
        'សុភារ៉ាជាម្ចាស់ហាងសម្លៀកបំពាក់នៅភ្នំពេញ។ សាច់ប្រាក់ $1,500 ស្តុកសម្លៀកបំពាក់ $2,500 ម៉ាស៊ីនដេរ $1,000។ នាងជំពាក់អ្នកផ្គត់ផ្គង់ក្រណាត់ $800។ ទ្រព្យសកម្ម = 1,500 + 2,500 + 1,000 = $5,000។ បំណុល = $800។ មូលធន = 5,000 − 800 = $4,200។ បើធនាគារសួរថា "តើអាជីវកម្មប៉ុន្មានដែលពិតជារបស់អ្នក?" ចម្លើយគឺ $4,200។')
};

// ======================= 3. Accounting equation =======================
EX.equation = {
  deep: [
    { h: b('Why the equation always balances', 'ហេតុអ្វីសមីការតុល្យភាពជានិច្ច'),
      p: b('Every resource in a business came from somewhere. Either someone lent it (liability) or the owner provided it (equity). So the total of what the business has must equal the total of where it came from. A transaction never changes this fact; it only changes the items.',
           'រាល់ធនធានក្នុងអាជីវកម្មមកពីប្រភពណាមួយ។ ឬមានអ្នកឲ្យខ្ចី (បំណុល) ឬម្ចាស់ផ្តល់ (មូលធន)។ ដូច្នេះសរុបអ្វីដែលអាជីវកម្មមាន ត្រូវស្មើនឹងសរុបប្រភពរបស់វា។ ប្រតិបត្តិការមិនផ្លាស់ប្តូរការពិតនេះទេ វាគ្រាន់តែផ្លាស់ប្តូរធាតុនីមួយៗ។') },
    { h: b('The expanded equation', 'សមីការពង្រីក'),
      p: b('Equity changes during the year through revenue, expenses and drawings. Showing them separately gives the expanded equation.',
           'មូលធនផ្លាស់ប្តូរក្នុងឆ្នាំតាមរយៈចំណូល ចំណាយ និងការដកប្រាក់។ ការបង្ហាញពួកវាដាច់ដោយឡែកផ្តល់សមីការពង្រីក។'),
      list: [
        b('Assets = Liabilities + Capital + Revenue − Expenses − Drawings', 'ទ្រព្យសកម្ម = បំណុល + មូលធន + ចំណូល − ចំណាយ − ការដកប្រាក់'),
        b('Revenue increases equity. Expenses and drawings decrease equity.', 'ចំណូលបង្កើនមូលធន។ ចំណាយ និងការដកប្រាក់បន្ថយមូលធន។')
      ] },
    { h: b('Eight common transaction patterns', 'ទម្រង់ប្រតិបត្តិការទូទៅប្រាំបី'),
      p: b('Almost every transaction fits one of these patterns. Learn them and you can predict the effect before writing anything.',
           'ស្ទើរតែគ្រប់ប្រតិបត្តិការសមនឹងទម្រង់មួយក្នុងចំណោមទាំងនេះ។ រៀនវា ហើយអ្នកអាចទាយផលមុនពេលសរសេរអ្វីទាំងអស់។'),
      list: [
        b('Owner invests cash: Assets ↑, Equity ↑', 'ម្ចាស់ដាក់ទុនជាសាច់ប្រាក់៖ ទ្រព្យ ↑ មូលធន ↑'),
        b('Borrow from bank: Assets ↑, Liabilities ↑', 'ខ្ចីពីធនាគារ៖ ទ្រព្យ ↑ បំណុល ↑'),
        b('Buy an asset with cash: one asset ↑, another asset ↓ (total unchanged)', 'ទិញទ្រព្យដោយសាច់ប្រាក់៖ ទ្រព្យមួយ ↑ ទ្រព្យមួយទៀត ↓ (សរុបមិនប្តូរ)'),
        b('Buy an asset on credit: Assets ↑, Liabilities ↑', 'ទិញទ្រព្យជំពាក់៖ ទ្រព្យ ↑ បំណុល ↑'),
        b('Repay a debt: Assets ↓, Liabilities ↓', 'សងបំណុល៖ ទ្រព្យ ↓ បំណុល ↓'),
        b('Earn revenue: Assets ↑, Equity ↑', 'រកចំណូល៖ ទ្រព្យ ↑ មូលធន ↑'),
        b('Pay an expense: Assets ↓, Equity ↓', 'បង់ចំណាយ៖ ទ្រព្យ ↓ មូលធន ↓'),
        b('Owner withdraws cash: Assets ↓, Equity ↓', 'ម្ចាស់ដកសាច់ប្រាក់៖ ទ្រព្យ ↓ មូលធន ↓')
      ] },
    { h: b('Tip: check the balance after every transaction', 'គន្លឹះ៖ ពិនិត្យតុល្យភាពបន្ទាប់ពីរាល់ប្រតិបត្តិការ'),
      p: b('If Assets ≠ Liabilities + Equity at any point, a mistake was made in that step. Finding it early is far easier than finding it at month end.',
           'បើ ទ្រព្យ ≠ បំណុល + មូលធន នៅពេលណាមួយ មានកំហុសក្នុងជំហាននោះ។ ការរកឃើញវាឆាប់ងាយជាងរកឃើញនៅចុងខែ។') }
  ],
  compare: [
    { t: b('How each transaction changes the equation', 'ប្រតិបត្តិការនីមួយៗផ្លាស់ប្តូរសមីការយ៉ាងដូចម្តេច'),
      head: [b('Transaction', 'ប្រតិបត្តិការ'), b('Assets', 'ទ្រព្យ'), b('Liabilities', 'បំណុល'), b('Equity', 'មូលធន')],
      rows: [
        [b('Owner invests $5,000', 'ម្ចាស់ដាក់ទុន $5,000'), '+5,000', '0', '+5,000'],
        [b('Borrow $2,000 from bank', 'ខ្ចី $2,000 ពីធនាគារ'), '+2,000', '+2,000', '0'],
        [b('Buy equipment $1,200 cash', 'ទិញបរិក្ខារ $1,200 សាច់ប្រាក់'), '+1,200 / −1,200', '0', '0'],
        [b('Sell goods $800 cash', 'លក់ទំនិញ $800 សាច់ប្រាក់'), '+800', '0', '+800'],
        [b('Pay rent $400', 'បង់ថ្លៃជួល $400'), '−400', '0', '−400'],
        [b('Repay $500 of the loan', 'សងកម្ចី $500'), '−500', '−500', '0']
      ] },
    { t: b('Running totals after each transaction', 'សរុបបន្តបន្ទាប់ក្រោយប្រតិបត្តិការនីមួយៗ'),
      head: [b('After', 'ក្រោយ'), b('Assets', 'ទ្រព្យ'), b('=', '='), b('Liabilities + Equity', 'បំណុល + មូលធន')],
      rows: [
        [b('Owner invests $5,000', 'ម្ចាស់ដាក់ទុន $5,000'), '5,000', '=', '0 + 5,000'],
        [b('Borrow $2,000', 'ខ្ចី $2,000'), '7,000', '=', '2,000 + 5,000'],
        [b('Buy equipment $1,200 cash', 'ទិញបរិក្ខារ $1,200'), '7,000', '=', '2,000 + 5,000'],
        [b('Sell goods $800 cash', 'លក់ទំនិញ $800'), '7,800', '=', '2,000 + 5,800'],
        [b('Pay rent $400', 'បង់ថ្លៃជួល $400'), '7,400', '=', '2,000 + 5,400'],
        [b('Repay $500 loan', 'សងកម្ចី $500'), '6,900', '=', '1,500 + 5,400']
      ],
      note: b('The cost of the goods sold is ignored here to keep the example simple.', 'ថ្លៃដើមទំនិញដែលបានលក់ត្រូវបានរំលងក្នុងឧទាហរណ៍នេះ ដើម្បីឲ្យងាយយល់។') }
  ],
  terms: [
    [b('Double effect', 'ផលពីរជាន់'), b('Every transaction affects at least two items.', 'រាល់ប្រតិបត្តិការប៉ះពាល់ធាតុយ៉ាងតិចពីរ។')],
    [b('Balanced', 'តុល្យភាព'), b('Both sides of the equation have the same total.', 'ភាគីទាំងពីរនៃសមីការមានចំនួនសរុបស្មើគ្នា។')],
    [b('Revenue', 'ចំណូល'), b('Increase in equity from selling goods or services.', 'ការកើនឡើងនៃមូលធនពីការលក់ទំនិញ ឬសេវា។')],
    [b('Expense', 'ចំណាយ'), b('Decrease in equity from the cost of running the business.', 'ការថយចុះនៃមូលធនពីថ្លៃដើមក្នុងការដំណើរការអាជីវកម្ម។')]
  ],
  kh: b('Vanna runs an online shop that sells through Telegram and Facebook in Phnom Penh. (1) She invests $2,000: Assets 2,000 = Equity 2,000. (2) She buys goods on credit for $600: Assets 2,600 = Liabilities 600 + Equity 2,000. (3) She pays the supplier $300: Assets 2,300 = Liabilities 300 + Equity 2,000. The equation balanced after every step.',
        'វណ្ណាដំណើរការហាងអនឡាញលក់តាម Telegram និង Facebook នៅភ្នំពេញ។ (១) នាងដាក់ទុន $2,000៖ ទ្រព្យ 2,000 = មូលធន 2,000។ (២) នាងទិញទំនិញជំពាក់ $600៖ ទ្រព្យ 2,600 = បំណុល 600 + មូលធន 2,000។ (៣) នាងបង់អ្នកផ្គត់ផ្គង់ $300៖ ទ្រព្យ 2,300 = បំណុល 300 + មូលធន 2,000។ សមីការតុល្យភាពបន្ទាប់ពីគ្រប់ជំហាន។')
};

// ======================= 4. Cash vs profit =======================
EX.cashprofit = {
  deep: [
    { h: b('Two ways to record: cash basis and accrual basis', 'វិធីកត់ត្រាពីរ៖ មូលដ្ឋានសាច់ប្រាក់ និងមូលដ្ឋាន accrual'),
      p: b('On the cash basis you record revenue when cash arrives and expenses when cash leaves. On the accrual basis you record revenue when it is earned and expenses when they are incurred, whatever the cash timing. Most businesses and the standards (IFRS, US GAAP) use accrual accounting for financial statements, because it shows performance more fairly.',
           'ក្រោមមូលដ្ឋានសាច់ប្រាក់ អ្នកកត់ចំណូលពេលសាច់ប្រាក់មកដល់ និងចំណាយពេលសាច់ប្រាក់ចេញ។ ក្រោមមូលដ្ឋាន accrual អ្នកកត់ចំណូលពេលរកបាន និងចំណាយពេលកើតមាន ដោយមិនគិតពេលសាច់ប្រាក់។ អាជីវកម្មភាគច្រើន និងស្តង់ដារ (IFRS, US GAAP) ប្រើគណនេយ្យ accrual សម្រាប់របាយការណ៍ហិរញ្ញវត្ថុ ព្រោះវាបង្ហាញលទ្ធផលបានសមរម្យជាង។') },
    { h: b('Five reasons profit and cash differ', 'ហេតុផលប្រាំយ៉ាងដែលចំណេញ និងសាច់ប្រាក់ខុសគ្នា'),
      p: b('Whenever cash moves at a different time from revenue and expenses, or is not revenue or expense at all, the two numbers separate.',
           'នៅពេលណាសាច់ប្រាក់ផ្លាស់ទីខុសពេលពីចំណូល និងចំណាយ ឬមិនមែនជាចំណូល ឬចំណាយទាល់តែសោះ លេខទាំងពីរនឹងខុសគ្នា។'),
      list: [
        b('Credit sales: profit rises now, cash arrives later.', 'ការលក់ជំពាក់៖ ចំណេញកើនឥឡូវនេះ សាច់ប្រាក់មកក្រោយ។'),
        b('Credit purchases: the expense is recorded, the cash is paid later.', 'ការទិញជំពាក់៖ ចំណាយត្រូវបានកត់ សាច់ប្រាក់បង់ក្រោយ។'),
        b('Buying equipment: cash leaves now, but it is an asset, not an expense (it is spread over its life as depreciation).', 'ការទិញបរិក្ខារ៖ សាច់ប្រាក់ចេញឥឡូវនេះ ប៉ុន្តែវាជាទ្រព្យ មិនមែនចំណាយទេ (វាត្រូវបានចែកតាមអាយុកាលជាការរំលស់)។'),
        b('Loans: cash comes in, but it is not revenue.', 'កម្ចី៖ សាច់ប្រាក់ចូល ប៉ុន្តែមិនមែនជាចំណូលទេ។'),
        b('Owner investment and drawings: cash moves, but profit does not.', 'ការដាក់ទុន និងការដកប្រាក់របស់ម្ចាស់៖ សាច់ប្រាក់ផ្លាស់ទី ប៉ុន្តែចំណេញមិនប្តូរ។')
      ] },
    { h: b('Profitability vs liquidity', 'ភាពចំណេញ ប្រៀបធៀប សន្ទនីយភាព'),
      p: b('Profitability asks "do we earn more than we spend?" Liquidity asks "can we pay our bills on time?" A business can be profitable but illiquid (customers pay late) or liquid but unprofitable (a big loan hides losses for a while). Healthy businesses watch both.',
           'ភាពចំណេញសួរថា "តើយើងរកបានច្រើនជាងចំណាយឬទេ?" សន្ទនីយភាពសួរថា "តើយើងអាចបង់វិក្កយបត្រទាន់ពេលឬទេ?" អាជីវកម្មអាចមានចំណេញ ប៉ុន្តែខ្វះសាច់ប្រាក់ (អតិថិជនបង់យឺត) ឬមានសាច់ប្រាក់ប៉ុន្តែខាត (កម្ចីធំលាក់ការខាតបណ្តោះអាសន្ន)។ អាជីវកម្មដែលមានសុខភាពល្អតាមដានទាំងពីរ។') },
    { h: b('Where to find each number', 'កន្លែងរកលេខនីមួយៗ'),
      p: b('Profit is reported on the income statement. Cash movements are reported on the cash flow statement. The cash balance is also an asset on the balance sheet.',
           'ចំណេញត្រូវបានរាយការណ៍លើរបាយការណ៍លទ្ធផល។ ចលនាសាច់ប្រាក់ត្រូវបានរាយការណ៍លើរបាយការណ៍លំហូរសាច់ប្រាក់។ សមតុល្យសាច់ប្រាក់ក៏ជាទ្រព្យសកម្មលើតារាងតុល្យការដែរ។') }
  ],
  compare: [
    { t: b('Cash vs profit', 'សាច់ប្រាក់ ប្រៀបធៀប ប្រាក់ចំណេញ'),
      head: [b('Feature', 'លក្ខណៈ'), b('Cash', 'សាច់ប្រាក់'), b('Profit', 'ប្រាក់ចំណេញ')],
      rows: [
        [b('What it measures', 'វាស់អ្វី'), b('Money actually in hand or bank', 'លុយដែលមានជាក់ស្តែងក្នុងដៃ ឬធនាគារ'), b('Revenue earned minus expenses incurred', 'ចំណូលរកបាន ដកចំណាយកើតមាន')],
        [b('Reported on', 'រាយការណ៍លើ'), b('Cash flow statement / balance sheet', 'របាយការណ៍លំហូរសាច់ប្រាក់ / តារាងតុល្យការ'), b('Income statement', 'របាយការណ៍លទ្ធផល')],
        [b('Credit sale', 'ការលក់ជំពាក់'), b('No change yet', 'មិនទាន់ប្តូរ'), b('Increases', 'កើន')],
        [b('Bank loan received', 'ទទួលកម្ចីធនាគារ'), b('Increases', 'កើន'), b('No change', 'មិនប្តូរ')],
        [b('Equipment bought with cash', 'ទិញបរិក្ខារដោយសាច់ប្រាក់'), b('Decreases', 'ថយ'), b('No immediate change (depreciated later)', 'មិនប្តូរភ្លាមៗ (រំលស់ក្រោយ)')],
        [b('Question it answers', 'សំណួរដែលវាឆ្លើយ'), b('Can we pay our bills?', 'តើយើងអាចបង់វិក្កយបត្របានទេ?'), b('Are we earning more than we spend?', 'តើយើងរកបានច្រើនជាងចំណាយទេ?')]
      ] },
    { t: b('Cash basis vs accrual basis', 'មូលដ្ឋានសាច់ប្រាក់ ប្រៀបធៀប មូលដ្ឋាន accrual'),
      head: [b('Feature', 'លក្ខណៈ'), b('Cash basis', 'មូលដ្ឋានសាច់ប្រាក់'), b('Accrual basis', 'មូលដ្ឋាន accrual')],
      rows: [
        [b('Revenue recorded when', 'កត់ចំណូលពេល'), b('Cash is received', 'ទទួលសាច់ប្រាក់'), b('Earned', 'រកបាន')],
        [b('Expense recorded when', 'កត់ចំណាយពេល'), b('Cash is paid', 'បង់សាច់ប្រាក់'), b('Incurred', 'កើតមាន')],
        [b('Receivables / payables', 'គណនីត្រូវទទួល / ត្រូវបង់'), b('Not recorded', 'មិនកត់ត្រា'), b('Recorded', 'កត់ត្រា')],
        [b('Matches revenue and expenses', 'ផ្គូផ្គងចំណូល និងចំណាយ'), b('Poorly', 'មិនល្អ'), b('Well', 'ល្អ')],
        [b('Typical use', 'ការប្រើជាទូទៅ'), b('Very small businesses, personal budgets', 'អាជីវកម្មតូចៗ ថវិកាផ្ទាល់ខ្លួន'), b('Most businesses; required by IFRS / US GAAP', 'អាជីវកម្មភាគច្រើន តម្រូវដោយ IFRS / US GAAP')]
      ] },
    { t: b('One month, two views', 'មួយខែ មើលពីរបែប'),
      head: [b('Item', 'ធាតុ'), b('Profit (accrual)', 'ចំណេញ (accrual)'), b('Cash change', 'ការប្តូរសាច់ប្រាក់')],
      rows: [
        [b('Sales $2,000 ($1,100 cash, $900 credit)', 'ការលក់ $2,000 (សាច់ប្រាក់ $1,100 ជំពាក់ $900)'), '+2,000', '+1,100'],
        [b('Expenses $1,400 ($1,100 paid, $300 unpaid)', 'ចំណាយ $1,400 (បង់ $1,100 មិនទាន់បង់ $300)'), '−1,400', '−1,100'],
        [b('Equipment bought, $600 cash', 'ទិញបរិក្ខារ $600 សាច់ប្រាក់'), '0', '−600'],
        [b('Result', 'លទ្ធផល'), b('Profit $600', 'ចំណេញ $600'), b('Cash falls $600', 'សាច់ប្រាក់ថយ $600')]
      ] }
  ],
  terms: [
    [b('Accrual basis', 'មូលដ្ឋាន accrual'), b('Record revenue when earned and expenses when incurred.', 'កត់ចំណូលពេលរកបាន និងចំណាយពេលកើតមាន។')],
    [b('Cash basis', 'មូលដ្ឋានសាច់ប្រាក់'), b('Record only when cash moves.', 'កត់តែពេលសាច់ប្រាក់ផ្លាស់ទី។')],
    [b('Liquidity', 'សន្ទនីយភាព'), b('Ability to pay bills when they are due.', 'សមត្ថភាពបង់វិក្កយបត្រពេលដល់កំណត់។')],
    [b('Net loss', 'ការខាតបង់សុទ្ធ'), b('Expenses are larger than revenue.', 'ចំណាយធំជាងចំណូល។')]
  ],
  kh: b('A small guesthouse in Siem Reap earns $3,000 of room revenue this month, but a tour agency still owes $1,200. It pays $2,000 of expenses in cash. Profit = 3,000 − 2,000 = $1,000. Cash received = 3,000 − 1,200 = $1,800, so cash change = 1,800 − 2,000 = −$200. The guesthouse is profitable yet its cash fell, so it must chase the $1,200.',
        'ផ្ទះសំណាក់តូចមួយនៅសៀមរាបរកចំណូលបន្ទប់ $3,000 ក្នុងខែនេះ ប៉ុន្តែភ្នាក់ងារទេសចរណ៍នៅជំពាក់ $1,200។ វាបង់ចំណាយ $2,000 ជាសាច់ប្រាក់។ ចំណេញ = 3,000 − 2,000 = $1,000។ សាច់ប្រាក់ទទួលបាន = 3,000 − 1,200 = $1,800 ដូច្នេះការប្តូរសាច់ប្រាក់ = 1,800 − 2,000 = −$200។ ផ្ទះសំណាក់មានចំណេញ ប៉ុន្តែសាច់ប្រាក់ថយ ដូច្នេះត្រូវទារ $1,200។')
};

// ======================= 5. Debit and credit =======================
EX.debitcredit = {
  deep: [
    { h: b('Debit and credit are only positions', 'Debit និង Credit គ្រាន់តែជាទីតាំង'),
      p: b('In everyday life, "credit" sounds good and "debit" sounds bad. In accounting they are just the left side (debit) and the right side (credit) of an account. Whether an entry increases or decreases an account depends on the account type.',
           'ក្នុងជីវិតប្រចាំថ្ងៃ "credit" ស្តាប់ទៅល្អ ហើយ "debit" ស្តាប់ទៅអាក្រក់។ ក្នុងគណនេយ្យ វាគ្រាន់តែជាខាងឆ្វេង (debit) និងខាងស្តាំ (credit) នៃគណនី។ ថាតើកំណត់ត្រាបង្កើន ឬបន្ថយគណនី អាស្រ័យលើប្រភេទគណនី។') },
    { h: b('Where the rules come from', 'ច្បាប់មកពីណា'),
      p: b('Assets sit on the left of the accounting equation, so they increase on the left (debit). Liabilities and equity sit on the right, so they increase on the right (credit). Expenses reduce equity, so they are the opposite of equity: they increase with a debit. Revenue increases equity, so it increases with a credit. Drawings reduce equity, so they increase with a debit.',
           'ទ្រព្យសកម្មស្ថិតនៅខាងឆ្វេងនៃសមីការគណនេយ្យ ដូច្នេះវាកើនខាងឆ្វេង (debit)។ បំណុល និងមូលធនស្ថិតនៅខាងស្តាំ ដូច្នេះវាកើនខាងស្តាំ (credit)។ ចំណាយកាត់បន្ថយមូលធន ដូច្នេះវាផ្ទុយពីមូលធន៖ វាកើនដោយ debit។ ចំណូលបង្កើនមូលធន ដូច្នេះវាកើនដោយ credit។ ការដកប្រាក់កាត់បន្ថយមូលធន ដូច្នេះវាកើនដោយ debit។') },
    { h: b('A 5-step method for any transaction', 'វិធី ៥ ជំហានសម្រាប់ប្រតិបត្តិការណាមួយ'),
      p: b('Follow these steps in order and you will rarely make a mistake.', 'អនុវត្តតាមជំហានទាំងនេះតាមលំដាប់ ហើយអ្នកនឹងកម្រមានកំហុស។'),
      list: [
        b('1. Which accounts are affected? (at least two)', '១. គណនីណាខ្លះត្រូវបានប៉ះពាល់? (យ៉ាងតិចពីរ)'),
        b('2. What type is each: asset, liability, equity, revenue or expense?', '២. តើនីមួយៗជាប្រភេទអ្វី៖ ទ្រព្យ បំណុល មូលធន ចំណូល ឬចំណាយ?'),
        b('3. Does each one increase or decrease?', '៣. តើនីមួយៗកើន ឬថយ?'),
        b('4. Apply the rule to decide debit or credit.', '៤. អនុវត្តច្បាប់ដើម្បីសម្រេច debit ឬ credit។'),
        b('5. Check: total debits = total credits.', '៥. ពិនិត្យ៖ debit សរុប = credit សរុប។')
      ] },
    { h: b('T-accounts and balances', 'T-account និងសមតុល្យ'),
      p: b('A T-account is a simple picture of one account: debits on the left, credits on the right. The balance is the difference. Example: Cash with debits of 3,000 and 450 and credits of 800 and 250 has a balance of (3,000 + 450) − (800 + 250) = 2,400 debit.',
           'T-account គឺជារូបភាពសាមញ្ញនៃគណនីមួយ៖ debit ខាងឆ្វេង credit ខាងស្តាំ។ សមតុល្យគឺជាផលសងគ្នា។ ឧទាហរណ៍៖ សាច់ប្រាក់មាន debit 3,000 និង 450 ហើយ credit 800 និង 250 មានសមតុល្យ (3,000 + 450) − (800 + 250) = 2,400 debit។') },
    { h: b('Journal, ledger and trial balance', 'សៀវភៅកំណត់ហេតុ សៀវភៅធំ និងតារាងតុល្យការសាកល្បង'),
      p: b('The journal records each transaction in date order. Posting copies each line to its account in the ledger. A trial balance then lists every account balance to check that total debits equal total credits. If they differ, there is an error to find.',
           'សៀវភៅកំណត់ហេតុកត់ប្រតិបត្តិការនីមួយៗតាមលំដាប់កាលបរិច្ឆេទ។ ការផ្ទេរ (posting) ចម្លងជួរនីមួយៗទៅគណនីរបស់វាក្នុងសៀវភៅធំ។ បន្ទាប់មកតារាងតុល្យការសាកល្បងរាយសមតុល្យគណនីទាំងអស់ ដើម្បីពិនិត្យថា debit សរុបស្មើ credit សរុប។ បើខុសគ្នា មានកំហុសត្រូវរក។') }
  ],
  compare: [
    { t: b('The rules for all account types', 'ច្បាប់សម្រាប់គ្រប់ប្រភេទគណនី'),
      head: [b('Account type', 'ប្រភេទគណនី'), b('Increases with', 'កើនដោយ'), b('Decreases with', 'ថយដោយ'), b('Normal balance', 'សមតុល្យធម្មតា')],
      rows: [
        [b('Asset', 'ទ្រព្យសកម្ម'), 'Debit', 'Credit', 'Debit'],
        [b('Expense', 'ចំណាយ'), 'Debit', 'Credit', 'Debit'],
        [b('Drawings', 'ការដកប្រាក់'), 'Debit', 'Credit', 'Debit'],
        [b('Liability', 'បំណុល'), 'Credit', 'Debit', 'Credit'],
        [b('Equity (capital)', 'មូលធន'), 'Credit', 'Debit', 'Credit'],
        [b('Revenue', 'ចំណូល'), 'Credit', 'Debit', 'Credit']
      ] },
    { t: b('Debit vs credit', 'Debit ប្រៀបធៀប Credit'),
      head: [b('Feature', 'លក្ខណៈ'), b('Debit (Dr)', 'Debit (Dr)'), b('Credit (Cr)', 'Credit (Cr)')],
      rows: [
        [b('Side of account', 'ខាងនៃគណនី'), b('Left', 'ឆ្វេង'), b('Right', 'ស្តាំ')],
        [b('Increases', 'បង្កើន'), b('Assets, expenses, drawings', 'ទ្រព្យ ចំណាយ ការដកប្រាក់'), b('Liabilities, equity, revenue', 'បំណុល មូលធន ចំណូល')],
        [b('Decreases', 'បន្ថយ'), b('Liabilities, equity, revenue', 'បំណុល មូលធន ចំណូល'), b('Assets, expenses, drawings', 'ទ្រព្យ ចំណាយ ការដកប្រាក់')],
        [b('Meaning of the word', 'អត្ថន័យនៃពាក្យ'), b('Not "bad" or "decrease"', 'មិនមែន "អាក្រក់" ឬ "ថយ"'), b('Not "good" or "increase"', 'មិនមែន "ល្អ" ឬ "កើន"')]
      ] },
    { t: b('Common transactions: what to debit and credit', 'ប្រតិបត្តិការទូទៅ៖ អ្វីត្រូវ debit និង credit'),
      head: [b('Transaction', 'ប្រតិបត្តិការ'), b('Debit', 'Debit'), b('Credit', 'Credit')],
      rows: [
        [b('Owner invests cash', 'ម្ចាស់ដាក់ទុនសាច់ប្រាក់'), b('Cash', 'សាច់ប្រាក់'), b('Owner\'s Capital', 'មូលធនម្ចាស់')],
        [b('Borrow from bank', 'ខ្ចីពីធនាគារ'), b('Cash', 'សាច់ប្រាក់'), b('Bank Loan', 'កម្ចីធនាគារ')],
        [b('Buy equipment with cash', 'ទិញបរិក្ខារដោយសាច់ប្រាក់'), b('Equipment', 'បរិក្ខារ'), b('Cash', 'សាច់ប្រាក់')],
        [b('Buy goods on credit', 'ទិញទំនិញជំពាក់'), b('Inventory', 'ស្តុក'), b('Accounts Payable', 'គណនីត្រូវបង់')],
        [b('Sell for cash', 'លក់ដោយសាច់ប្រាក់'), b('Cash', 'សាច់ប្រាក់'), b('Sales Revenue', 'ចំណូលលក់')],
        [b('Sell on credit', 'លក់ជំពាក់'), b('Accounts Receivable', 'គណនីត្រូវទទួល'), b('Sales Revenue', 'ចំណូលលក់')],
        [b('Pay rent', 'បង់ថ្លៃជួល'), b('Rent Expense', 'ចំណាយជួល'), b('Cash', 'សាច់ប្រាក់')],
        [b('Customer pays what they owe', 'អតិថិជនបង់អ្វីដែលជំពាក់'), b('Cash', 'សាច់ប្រាក់'), b('Accounts Receivable', 'គណនីត្រូវទទួល')],
        [b('Pay a supplier', 'បង់អ្នកផ្គត់ផ្គង់'), b('Accounts Payable', 'គណនីត្រូវបង់'), b('Cash', 'សាច់ប្រាក់')],
        [b('Owner withdraws cash', 'ម្ចាស់ដកសាច់ប្រាក់'), b('Owner\'s Drawings', 'ការដកប្រាក់ម្ចាស់'), b('Cash', 'សាច់ប្រាក់')]
      ] },
    { t: b('Journal vs ledger', 'សៀវភៅកំណត់ហេតុ ប្រៀបធៀប សៀវភៅធំ'),
      head: [b('Feature', 'លក្ខណៈ'), b('Journal', 'សៀវភៅកំណត់ហេតុ'), b('Ledger', 'សៀវភៅធំ')],
      rows: [
        [b('Organised by', 'រៀបចំតាម'), b('Date (order of events)', 'កាលបរិច្ឆេទ (លំដាប់ព្រឹត្តិការណ៍)'), b('Account', 'គណនី')],
        [b('Step', 'ជំហាន'), b('First: record', 'ដំបូង៖ កត់ត្រា'), b('Second: post and summarise', 'ទីពីរ៖ ផ្ទេរ និងសង្ខេប')],
        [b('Answers', 'ឆ្លើយ'), b('What happened and when?', 'អ្វីបានកើតឡើង និងពេលណា?'), b('What is the balance of this account?', 'តើសមតុល្យគណនីនេះប៉ុន្មាន?')]
      ] }
  ],
  terms: [
    [b('Journal entry', 'កំណត់ត្រាកំណត់ហេតុ'), b('A record of one transaction with its debits and credits.', 'កំណត់ត្រានៃប្រតិបត្តិការមួយ ជាមួយ debit និង credit របស់វា។')],
    [b('Posting', 'ការផ្ទេរ (posting)'), b('Copying journal lines to ledger accounts.', 'ការចម្លងជួរកំណត់ហេតុទៅគណនីក្នុងសៀវភៅធំ។')],
    [b('Normal balance', 'សមតុល្យធម្មតា'), b('The side (debit or credit) on which an account normally increases.', 'ខាង (debit ឬ credit) ដែលគណនីជាធម្មតាកើន។')],
    [b('Trial balance', 'តារាងតុល្យការសាកល្បង'), b('A list of all balances to prove debits equal credits.', 'បញ្ជីសមតុល្យទាំងអស់ដើម្បីបញ្ជាក់ថា debit ស្មើ credit។')]
  ],
  kh: b('Sophea starts a mobile coffee cart in Phnom Penh. She invests $3,000: Dr Cash 3,000 / Cr Capital 3,000. She buys a cart for $800 cash: Dr Equipment 800 / Cr Cash 800. She buys cups for $50 on credit: Dr Inventory 50 / Cr Accounts Payable 50. The Cash T-account now shows Dr 3,000 and Cr 800, so the balance is $2,200 debit.',
        'សូភាចាប់ផ្តើមរទេះកាហ្វេចល័តនៅភ្នំពេញ។ នាងដាក់ទុន $3,000៖ Dr សាច់ប្រាក់ 3,000 / Cr មូលធន 3,000។ នាងទិញរទេះ $800 សាច់ប្រាក់៖ Dr បរិក្ខារ 800 / Cr សាច់ប្រាក់ 800។ នាងទិញកែវ $50 ជំពាក់៖ Dr ស្តុក 50 / Cr គណនីត្រូវបង់ 50។ T-account សាច់ប្រាក់ឥឡូវបង្ហាញ Dr 3,000 និង Cr 800 ដូច្នេះសមតុល្យគឺ $2,200 debit។')
};

// ======================= 6. Business entity principle =======================
EX.entity = {
  deep: [
    { h: b('An accounting idea, not just a legal one', 'គំនិតគណនេយ្យ មិនមែនគ្រាន់តែផ្លូវច្បាប់'),
      p: b('A sole proprietor and their shop may be the same person in law, but accountants still keep two sets of money: the business\'s and the owner\'s. The business is treated as its own "person" with its own assets, debts and profit.',
           'ម្ចាស់ម្នាក់ឯង និងហាងរបស់គាត់ អាចជាមនុស្សតែមួយក្នុងផ្លូវច្បាប់ ប៉ុន្តែគណនេយ្យករនៅតែរក្សាលុយពីរសំណុំ៖ របស់អាជីវកម្ម និងរបស់ម្ចាស់។ អាជីវកម្មត្រូវបានចាត់ទុកជា "មនុស្ស" ដាច់ដោយឡែក ដែលមានទ្រព្យ បំណុល និងចំណេញផ្ទាល់ខ្លួន។') },
    { h: b('What goes in the books and what stays out', 'អ្វីត្រូវកត់ក្នុងបញ្ជី និងអ្វីត្រូវនៅក្រៅ'),
      p: b('Use this simple test: would this transaction exist if the business did not exist?', 'ប្រើតេស្តសាមញ្ញនេះ៖ តើប្រតិបត្តិការនេះនឹងមានទេ បើគ្មានអាជីវកម្ម?'),
      list: [
        b('In the books: sales, shop rent, staff wages, stock for resale, business loan repayments.', 'ក្នុងបញ្ជី៖ ការលក់ ថ្លៃជួលហាង ប្រាក់ខែបុគ្គលិក ស្តុកសម្រាប់លក់បន្ត ការសងកម្ចីអាជីវកម្ម។'),
        b('Out of the books: owner\'s home bills, family meals, personal holidays, the owner\'s personal car loan.', 'នៅក្រៅបញ្ជី៖ វិក្កយបត្រផ្ទះរបស់ម្ចាស់ អាហារគ្រួសារ ដំណើរកំសាន្តផ្ទាល់ខ្លួន កម្ចីឡានផ្ទាល់ខ្លួនរបស់ម្ចាស់។')
      ] },
    { h: b('How owner transactions are recorded', 'របៀបកត់ប្រតិបត្តិការរបស់ម្ចាស់'),
      p: b('The owner does deal with the business, and those dealings are recorded between the two.', 'ម្ចាស់មានទំនាក់ទំនងជាមួយអាជីវកម្ម ហើយទំនាក់ទំនងទាំងនោះត្រូវកត់ត្រារវាងភាគីទាំងពីរ។'),
      list: [
        b('Owner puts money in: Dr Cash / Cr Owner\'s Capital.', 'ម្ចាស់ដាក់លុយចូល៖ Dr សាច់ប្រាក់ / Cr មូលធនម្ចាស់។'),
        b('Owner takes money out for personal use: Dr Owner\'s Drawings / Cr Cash.', 'ម្ចាស់ដកលុយចេញសម្រាប់ប្រើផ្ទាល់ខ្លួន៖ Dr ការដកប្រាក់ម្ចាស់ / Cr សាច់ប្រាក់។'),
        b('Owner pays a business bill from their own pocket ($50 of supplies): Dr Supplies Expense 50 / Cr Owner\'s Capital 50.', 'ម្ចាស់បង់វិក្កយបត្រអាជីវកម្មពីហោប៉ៅខ្លួនឯង (សម្ភារៈ $50)៖ Dr ចំណាយសម្ភារៈ 50 / Cr មូលធនម្ចាស់ 50។')
      ] },
    { h: b('Why mixing the two causes problems', 'ហេតុអ្វីការលាយពីរនាំឲ្យមានបញ្ហា'),
      p: b('If personal costs are recorded as business expenses, profit looks smaller than it is, tax may be wrong, a bank may refuse a loan because the numbers look messy, and the owner cannot tell whether the business really pays its way. Separate records also make it possible to sell the business later at a fair price.',
           'បើចំណាយផ្ទាល់ខ្លួនត្រូវបានកត់ជាចំណាយអាជីវកម្ម ចំណេញនឹងមើលទៅតូចជាងការពិត ពន្ធអាចខុស ធនាគារអាចបដិសេធកម្ចីព្រោះលេខរញ៉េរញ៉ៃ ហើយម្ចាស់មិនអាចដឹងថាអាជីវកម្មពិតជាចិញ្ចឹមខ្លួនឯងបានឬអត់។ កំណត់ត្រាដាច់ដោយឡែកក៏ធ្វើឲ្យអាចលក់អាជីវកម្មនៅពេលក្រោយក្នុងតម្លៃសមរម្យ។') }
  ],
  compare: [
    { t: b('Business expense vs owner\'s drawings', 'ចំណាយអាជីវកម្ម ប្រៀបធៀប ការដកប្រាក់របស់ម្ចាស់'),
      head: [b('Item', 'ធាតុ'), b('Belongs to', 'ជារបស់'), b('Recorded as', 'កត់ជា'), b('Reduces profit?', 'បន្ថយចំណេញ?')],
      rows: [
        [b('Shop rent', 'ថ្លៃជួលហាង'), b('Business', 'អាជីវកម្ម'), b('Rent expense', 'ចំណាយជួល'), b('Yes', 'បាទ/ចាស')],
        [b('Staff wages', 'ប្រាក់ខែបុគ្គលិក'), b('Business', 'អាជីវកម្ម'), b('Wages expense', 'ចំណាយប្រាក់ខែ'), b('Yes', 'បាទ/ចាស')],
        [b('Owner\'s home electricity', 'អគ្គិសនីផ្ទះរបស់ម្ចាស់'), b('Owner (personal)', 'ម្ចាស់ (ផ្ទាល់ខ្លួន)'), b('Drawings', 'ការដកប្រាក់'), b('No (reduces equity)', 'ទេ (បន្ថយមូលធន)')],
        [b('Owner\'s own pay (sole trader)', 'ប្រាក់ខែម្ចាស់ (អាជីវកម្មបុគ្គល)'), b('Owner (personal)', 'ម្ចាស់ (ផ្ទាល់ខ្លួន)'), b('Drawings', 'ការដកប្រាក់'), b('No (reduces equity)', 'ទេ (បន្ថយមូលធន)')],
        [b('Stock bought for resale', 'ស្តុកទិញសម្រាប់លក់'), b('Business', 'អាជីវកម្ម'), b('Inventory (asset)', 'ស្តុក (ទ្រព្យ)'), b('Not until sold', 'មិនទាន់ទេ រហូតដល់លក់')]
      ] },
    { t: b('Sole proprietorship vs partnership vs company', 'អាជីវកម្មបុគ្គល ភាពជាដៃគូ និងក្រុមហ៊ុន'),
      head: [b('Feature', 'លក្ខណៈ'), b('Sole proprietorship', 'អាជីវកម្មបុគ្គល'), b('Partnership', 'ភាពជាដៃគូ'), b('Company', 'ក្រុមហ៊ុន')],
      rows: [
        [b('Owners', 'ម្ចាស់'), b('One person', 'មនុស្សម្នាក់'), b('Two or more partners', 'ដៃគូពីរនាក់ឬច្រើន'), b('Shareholders', 'ម្ចាស់ភាគហ៊ុន')],
        [b('Legally separate from owners?', 'ដាច់ពីម្ចាស់ក្នុងផ្លូវច្បាប់?'), b('No', 'ទេ'), b('Usually no', 'ជាទូទៅទេ'), b('Yes', 'បាទ/ចាស')],
        [b('Owner\'s responsibility for debts', 'ការទទួលខុសត្រូវរបស់ម្ចាស់ចំពោះបំណុល'), b('Personally liable', 'ទទួលខុសត្រូវផ្ទាល់ខ្លួន'), b('Usually personally liable', 'ជាទូទៅទទួលខុសត្រូវផ្ទាល់ខ្លួន'), b('Limited to money invested (limited liability)', 'កំណត់ត្រឹមលុយដែលបានវិនិយោគ (ទំនួលខុសត្រូវមានកំណត់)')],
        [b('Equity is called', 'មូលធនហៅថា'), b('Owner\'s capital', 'មូលធនម្ចាស់'), b('Partners\' capital', 'មូលធនដៃគូ'), b('Share capital and retained earnings', 'ដើមទុនភាគហ៊ុន និងចំណេញរក្សាទុក')],
        [b('Accounting entity?', 'អង្គភាពគណនេយ្យ?'), b('Yes, separate', 'បាទ/ចាស ដាច់ដោយឡែក'), b('Yes, separate', 'បាទ/ចាស ដាច់ដោយឡែក'), b('Yes, separate', 'បាទ/ចាស ដាច់ដោយឡែក')]
      ],
      note: b('Legal details differ by country. Check the law that applies to your business.', 'ព័ត៌មានលម្អិតផ្លូវច្បាប់ខុសគ្នាតាមប្រទេស។ សូមពិនិត្យច្បាប់ដែលអនុវត្តចំពោះអាជីវកម្មរបស់អ្នក។') }
  ],
  terms: [
    [b('Entity', 'អង្គភាព'), b('A business treated as separate from its owner in the records.', 'អាជីវកម្មដែលត្រូវបានចាត់ទុកថាដាច់ពីម្ចាស់ក្នុងកំណត់ត្រា។')],
    [b('Sole proprietorship', 'អាជីវកម្មបុគ្គល'), b('A business owned by one person.', 'អាជីវកម្មដែលមានម្ចាស់តែម្នាក់។')],
    [b('Limited liability', 'ទំនួលខុសត្រូវមានកំណត់'), b('Owners can lose only what they invested.', 'ម្ចាស់អាចបាត់បង់តែអ្វីដែលបានវិនិយោគប៉ុណ្ណោះ។')],
    [b('Drawings', 'ការដកប្រាក់'), b('Owner taking value out for personal use; reduces equity.', 'ម្ចាស់យកតម្លៃចេញសម្រាប់ប្រើផ្ទាល់ខ្លួន កាត់បន្ថយមូលធន។')]
  ],
  kh: b('A kuy teav shop owner in Battambang takes $40 from the till to pay her child\'s school fee. This is not a shop expense. It is drawings: Dr Owner\'s Drawings 40 / Cr Cash 40. The same day she buys $60 of noodles for the shop. That is a business purchase: Dr Inventory 60 / Cr Cash 60. Keeping these apart shows her real shop profit.',
        'ម្ចាស់ហាងគុយទាវម្នាក់នៅបាត់ដំបងយកលុយ $40 ពីថតលុយដើម្បីបង់ថ្លៃសិក្សាកូន។ នេះមិនមែនជាចំណាយហាងទេ។ វាជាការដកប្រាក់៖ Dr ការដកប្រាក់ម្ចាស់ 40 / Cr សាច់ប្រាក់ 40។ ថ្ងៃតែមួយនាងទិញមីមួយ $60 សម្រាប់ហាង។ នោះជាការទិញអាជីវកម្ម៖ Dr ស្តុក 60 / Cr សាច់ប្រាក់ 60។ ការញែកពីរនេះបង្ហាញប្រាក់ចំណេញពិតរបស់ហាង។')
};

// ======================= 7. Matching principle =======================
EX.matching = {
  deep: [
    { h: b('The idea: costs follow the revenue they help create', 'គំនិត៖ ថ្លៃដើមតាមចំណូលដែលវាជួយបង្កើត'),
      p: b('To know whether December was profitable, you must put December\'s revenue and all the costs of earning it in the same month. Otherwise one month looks great (costs not yet recorded) and the next looks terrible.',
           'ដើម្បីដឹងថាខែធ្នូមានចំណេញឬអត់ អ្នកត្រូវដាក់ចំណូលខែធ្នូ និងថ្លៃដើមទាំងអស់ក្នុងការរកវា ក្នុងខែតែមួយ។ បើមិនដូច្នេះទេ ខែមួយមើលទៅល្អ (ថ្លៃដើមមិនទាន់កត់) ហើយខែបន្ទាប់មើលទៅអាក្រក់។') },
    { h: b('Two kinds of matching', 'ការផ្គូផ្គងពីរប្រភេទ'),
      p: b('Direct matching links a cost to a specific sale, such as the cost of the goods sold. Period matching links a cost to a time period when it cannot be tied to one sale, such as rent, insurance or office wages.',
           'ការផ្គូផ្គងដោយផ្ទាល់ភ្ជាប់ថ្លៃដើមទៅនឹងការលក់ជាក់លាក់ ដូចជាថ្លៃដើមទំនិញដែលបានលក់។ ការផ្គូផ្គងតាមអំឡុងពេលភ្ជាប់ថ្លៃដើមទៅអំឡុងពេលមួយ នៅពេលមិនអាចភ្ជាប់ទៅការលក់តែមួយ ដូចជាថ្លៃជួល ធានារ៉ាប់រង ឬប្រាក់ខែការិយាល័យ។') },
    { h: b('Accrued expenses: used but not yet paid', 'ចំណាយកើតមានមិនទាន់បង់ (accrued)'),
      p: b('If you use a service now but pay later, record the expense now and a liability. Example: $400 of December electricity, billed in January. At 31 December: Dr Electricity Expense 400 / Cr Accounts Payable (or Accrued Expenses) 400. In January when you pay: Dr Accounts Payable 400 / Cr Cash 400.',
           'បើអ្នកប្រើសេវាឥឡូវនេះ តែបង់ក្រោយ ត្រូវកត់ចំណាយឥឡូវនេះ និងបំណុលមួយ។ ឧទាហរណ៍៖ អគ្គិសនីខែធ្នូ $400 ដែលមានវិក្កយបត្រខែមករា។ នៅថ្ងៃ ៣១ ធ្នូ៖ Dr ចំណាយអគ្គិសនី 400 / Cr គណនីត្រូវបង់ (ឬចំណាយត្រូវបង់) 400។ ពេលបង់ក្នុងខែមករា៖ Dr គណនីត្រូវបង់ 400 / Cr សាច់ប្រាក់ 400។') },
    { h: b('Prepaid expenses: paid before use', 'ចំណាយបង់មុន (prepaid)'),
      p: b('If you pay now for something used later, it is first an asset. Example: $240 for 12 months of insurance paid on 1 January. Day 1: Dr Prepaid Insurance 240 / Cr Cash 240. Each month: Dr Insurance Expense 20 / Cr Prepaid Insurance 20.',
           'បើអ្នកបង់ឥឡូវនេះសម្រាប់អ្វីដែលប្រើក្រោយ វាជាទ្រព្យមុនគេ។ ឧទាហរណ៍៖ $240 សម្រាប់ធានារ៉ាប់រង ១២ ខែ បង់នៅ ១ មករា។ ថ្ងៃដំបូង៖ Dr ធានារ៉ាប់រងបង់មុន 240 / Cr សាច់ប្រាក់ 240។ រាល់ខែ៖ Dr ចំណាយធានារ៉ាប់រង 20 / Cr ធានារ៉ាប់រងបង់មុន 20។') },
    { h: b('Depreciation: spreading the cost of equipment', 'ការរំលស់៖ ការចែកថ្លៃបរិក្ខារ'),
      p: b('A machine helps earn revenue for years, so its cost is spread over its useful life. With the straight-line method and no leftover value: a $1,200 machine used for 4 years gives $1,200 ÷ 4 = $300 per year, or $25 per month. The yearly charge is a depreciation expense.',
           'ម៉ាស៊ីនជួយរកចំណូលជាច្រើនឆ្នាំ ដូច្នេះថ្លៃដើមរបស់វាត្រូវបានចែកតាមអាយុកាលប្រើប្រាស់។ ដោយវិធីបន្ទាត់ត្រង់ និងគ្មានតម្លៃសល់៖ ម៉ាស៊ីន $1,200 ប្រើ ៤ ឆ្នាំ ផ្តល់ $1,200 ÷ 4 = $300 ក្នុងមួយឆ្នាំ ឬ $25 ក្នុងមួយខែ។ ការកាត់ប្រចាំឆ្នាំគឺជាចំណាយរំលស់។') },
    { h: b('Related principles', 'គោលការណ៍ដែលពាក់ព័ន្ធ'),
      p: b('Matching works together with revenue recognition (when to record revenue) and prudence (do not overstate profit or assets). Under IFRS the same idea appears through the framework\'s definitions of income and expenses, so the wording differs from older US GAAP texts.',
           'ការផ្គូផ្គងដំណើរការរួមជាមួយការទទួលស្គាល់ចំណូល (ពេលណាត្រូវកត់ចំណូល) និងការប្រុងប្រយ័ត្ន (កុំលើសតម្លៃចំណេញ ឬទ្រព្យ)។ ក្រោម IFRS គំនិតដូចគ្នាបង្ហាញតាមរយៈនិយមន័យនៃចំណូល និងចំណាយក្នុងក្របខ័ណ្ឌ ដូច្នេះពាក្យសម្តីខុសពីឯកសារ US GAAP ចាស់ៗ។') }
  ],
  compare: [
    { t: b('Accrued expense vs prepaid expense', 'ចំណាយ accrued ប្រៀបធៀប ចំណាយបង់មុន'),
      head: [b('Feature', 'លក្ខណៈ'), b('Accrued expense', 'ចំណាយ accrued'), b('Prepaid expense', 'ចំណាយបង់មុន')],
      rows: [
        [b('Cash vs use', 'សាច់ប្រាក់ ប្រៀបធៀប ការប្រើ'), b('Used first, paid later', 'ប្រើមុន បង់ក្រោយ'), b('Paid first, used later', 'បង់មុន ប្រើក្រោយ')],
        [b('Balance sheet account', 'គណនីលើតារាងតុល្យការ'), b('Liability (payable)', 'បំណុល (ត្រូវបង់)'), b('Asset (prepaid)', 'ទ្រព្យ (បង់មុន)')],
        [b('Example', 'ឧទាហរណ៍'), b('December electricity paid in January', 'អគ្គិសនីខែធ្នូបង់ខែមករា'), b('12-month insurance paid in January', 'ធានារ៉ាប់រង ១២ ខែ បង់ខែមករា')],
        [b('Expense recorded', 'ចំណាយត្រូវកត់'), b('In the month of use', 'ក្នុងខែដែលប្រើ'), b('Gradually, month by month', 'បន្តិចម្តងៗ ខែម្តង')]
      ] },
    { t: b('Which period does each cost belong to?', 'ថ្លៃដើមនីមួយៗជារបស់អំឡុងពេលណា?'),
      head: [b('Cost', 'ថ្លៃដើម'), b('Cash paid', 'បង់សាច់ប្រាក់'), b('Matched to', 'ផ្គូផ្គងទៅ'), b('Why', 'ហេតុអ្វី')],
      rows: [
        [b('Electricity $400', 'អគ្គិសនី $400'), b('January', 'ខែមករា'), b('December', 'ខែធ្នូ'), b('Used in December', 'ប្រើក្នុងខែធ្នូ')],
        [b('Insurance $240 for a year', 'ធានារ៉ាប់រង $240 មួយឆ្នាំ'), b('January 1', '១ មករា'), b('$20 each month', '$20 រាល់ខែ'), b('Covers 12 months', 'គ្របដណ្តប់ ១២ ខែ')],
        [b('Machine $1,200', 'ម៉ាស៊ីន $1,200'), b('December', 'ខែធ្នូ'), b('$25 a month for 48 months', '$25 ក្នុងមួយខែ ក្នុងរយៈពេល ៤៨ ខែ'), b('Useful life of 4 years', 'អាយុកាលប្រើប្រាស់ ៤ ឆ្នាំ')],
        [b('Staff wages $900', 'ប្រាក់ខែបុគ្គលិក $900'), b('December', 'ខែធ្នូ'), b('December', 'ខែធ្នូ'), b('Work done in December', 'ការងារធ្វើក្នុងខែធ្នូ')]
      ] },
    { t: b('Expense vs asset (small repair vs big purchase)', 'ចំណាយ ប្រៀបធៀប ទ្រព្យ (ជួសជុលតូច ប្រៀបធៀប ការទិញធំ)'),
      head: [b('Feature', 'លក្ខណៈ'), b('Expense', 'ចំណាយ'), b('Asset', 'ទ្រព្យ')],
      rows: [
        [b('Benefit lasts', 'ផលប្រយោជន៍មានរយៈពេល'), b('Only this period', 'តែអំឡុងពេលនេះ'), b('Several periods', 'ច្រើនអំឡុងពេល')],
        [b('Example', 'ឧទាហរណ៍'), b('$50 repair', 'ជួសជុល $50'), b('$1,200 machine', 'ម៉ាស៊ីន $1,200')],
        [b('Effect on profit now', 'ផលលើចំណេញឥឡូវ'), b('Full amount reduces profit now', 'ចំនួនពេញកាត់បន្ថយចំណេញឥឡូវ'), b('Only the depreciation reduces profit', 'មានតែការរំលស់ទេដែលកាត់បន្ថយចំណេញ')]
      ] }
  ],
  terms: [
    [b('Accrued expense', 'ចំណាយ accrued'), b('An expense incurred but not yet paid.', 'ចំណាយដែលកើតមានតែមិនទាន់បង់។')],
    [b('Prepaid expense', 'ចំណាយបង់មុន'), b('A payment made in advance; an asset until used.', 'ការបង់ប្រាក់ទុកមុន ជាទ្រព្យរហូតដល់ប្រើ។')],
    [b('Depreciation', 'ការរំលស់'), b('Spreading an asset\'s cost over its useful life.', 'ការចែកថ្លៃទ្រព្យតាមអាយុកាលប្រើប្រាស់។')],
    [b('Useful life', 'អាយុកាលប្រើប្រាស់'), b('How long an asset is expected to help the business.', 'រយៈពេលដែលទ្រព្យរំពឹងថានឹងជួយអាជីវកម្ម។')]
  ],
  kh: b('A tuk-tuk business in Siem Reap pays $240 on 1 January for 12 months of insurance. It is not a $240 expense in January. Day 1: Dr Prepaid Insurance 240 / Cr Cash 240. Each month: Dr Insurance Expense 20 / Cr Prepaid Insurance 20. After 3 months, $60 is expense and $180 is still an asset.',
        'អាជីវកម្មតុកតុកនៅសៀមរាបបង់ $240 នៅ ១ មករា សម្រាប់ធានារ៉ាប់រង ១២ ខែ។ វាមិនមែនជាចំណាយ $240 ក្នុងខែមករាទេ។ ថ្ងៃដំបូង៖ Dr ធានារ៉ាប់រងបង់មុន 240 / Cr សាច់ប្រាក់ 240។ រាល់ខែ៖ Dr ចំណាយធានារ៉ាប់រង 20 / Cr ធានារ៉ាប់រងបង់មុន 20។ ក្រោយ ៣ ខែ $60 ជាចំណាយ ហើយ $180 នៅតែជាទ្រព្យ។')
};

DATA.lessons.forEach(l => { l.extra = EX[l.id] || null; });

// ======================= Extra questions (to pass 100) =======================
// intro
Q('q74', 'intro', 2, ['Which statement correctly compares bookkeeping and accounting?', 'ប្រយោគណាប្រៀបធៀបការកត់ត្រា និងគណនេយ្យបានត្រឹមត្រូវ?'],
  [['Bookkeeping records transactions; accounting also summarises, analyses and interprets them', 'ការកត់ត្រាកត់ប្រតិបត្តិការ ហើយគណនេយ្យក៏សង្ខេប វិភាគ និងបកស្រាយផងដែរ'], ['Accounting only records; bookkeeping interprets', 'គណនេយ្យគ្រាន់តែកត់ ហើយការកត់ត្រាបកស្រាយ'], ['They are exactly the same', 'ពួកវាដូចគ្នាទាំងស្រុង'], ['Bookkeeping prepares tax law', 'ការកត់ត្រារៀបចំច្បាប់ពន្ធ']], 0,
  ['Bookkeeping is the recording part. Accounting includes it and goes further to produce and interpret reports.', 'ការកត់ត្រាជាផ្នែកកត់។ គណនេយ្យរួមបញ្ចូលវា ហើយទៅឆ្ងាយជាងនេះដើម្បីបង្កើត និងបកស្រាយរបាយការណ៍។']);
Q('q75', 'intro', 2, ['Managerial accounting reports must follow IFRS or US GAAP as strictly as the financial statements given to outsiders.', 'របាយការណ៍គណនេយ្យគ្រប់គ្រងត្រូវអនុវត្តតាម IFRS ឬ US GAAP ដោយតឹងរ៉ឹងដូចរបាយការណ៍ហិរញ្ញវត្ថុដែលផ្តល់ឲ្យអ្នកខាងក្រៅ។'], null, 1,
  ['Managerial reports are for internal decisions, so the business chooses their format. Financial statements for outsiders follow standards.', 'របាយការណ៍គ្រប់គ្រងសម្រាប់ការសម្រេចចិត្តផ្ទៃក្នុង ដូច្នេះអាជីវកម្មជ្រើសទម្រង់ដោយខ្លួនឯង។ របាយការណ៍ហិរញ្ញវត្ថុសម្រាប់អ្នកខាងក្រៅអនុវត្តតាមស្តង់ដារ។']);
Q('q76', 'intro', 2, ['A supplier wants to know whether a shop can pay if goods are sold on credit. The supplier is a(n):', 'អ្នកផ្គត់ផ្គង់ចង់ដឹងថាតើហាងអាចបង់បានទេ បើលក់ទំនិញជំពាក់។ អ្នកផ្គត់ផ្គង់គឺជា៖'],
  [['Owner', 'ម្ចាស់'], ['External user', 'អ្នកប្រើខាងក្រៅ'], ['Production manager', 'អ្នកគ្រប់គ្រងផលិតកម្ម'], ['Internal user', 'អ្នកប្រើផ្ទៃក្នុង']], 1,
  ['The supplier is outside the business, so it is an external user.', 'អ្នកផ្គត់ផ្គង់នៅខាងក្រៅអាជីវកម្ម ដូច្នេះជាអ្នកប្រើខាងក្រៅ។']);
Q('q77', 'intro', 3, ['Which pair correctly describes financial vs managerial accounting?', 'គូណាពិពណ៌នាគណនេយ្យហិរញ្ញវត្ថុ ប្រៀបធៀប គណនេយ្យគ្រប់គ្រង បានត្រឹមត្រូវ?'],
  [['Financial: mostly past results for outsiders. Managerial: planning and decisions inside', 'ហិរញ្ញវត្ថុ៖ ភាគច្រើនលទ្ធផលអតីតកាលសម្រាប់អ្នកខាងក្រៅ។ គ្រប់គ្រង៖ ផែនការ និងការសម្រេចចិត្តផ្ទៃក្នុង'], ['Financial: budgets for managers. Managerial: tax returns', 'ហិរញ្ញវត្ថុ៖ ថវិកាសម្រាប់អ្នកគ្រប់គ្រង។ គ្រប់គ្រង៖ ការប្រកាសពន្ធ'], ['Financial: free format. Managerial: strict standards', 'ហិរញ្ញវត្ថុ៖ ទម្រង់សេរី។ គ្រប់គ្រង៖ ស្តង់ដារតឹងរ៉ឹង'], ['They serve exactly the same users', 'ពួកវាបម្រើអ្នកប្រើដូចគ្នាទាំងស្រុង']], 0,
  ['Financial accounting follows standards and serves outsiders; managerial accounting is flexible and serves internal decision makers.', 'គណនេយ្យហិរញ្ញវត្ថុអនុវត្តតាមស្តង់ដារ ហើយបម្រើអ្នកខាងក្រៅ។ គណនេយ្យគ្រប់គ្រងមានភាពបត់បែន ហើយបម្រើអ្នកសម្រេចចិត្តផ្ទៃក្នុង។']);
Q('q78', 'intro', 1, ['Giving financial statements to a bank is which step of the accounting process?', 'ការផ្តល់របាយការណ៍ហិរញ្ញវត្ថុទៅធនាគារ គឺជាជំហានណានៃដំណើរការគណនេយ្យ?'],
  [['Identifying', 'ការកំណត់'], ['Recording', 'ការកត់ត្រា'], ['Summarising', 'ការសង្ខេប'], ['Communicating', 'ការផ្សព្វផ្សាយ']], 3,
  ['The four steps are identify, record, summarise and communicate. Handing reports to users is communicating.', 'បួនជំហានគឺកំណត់ កត់ត្រា សង្ខេប និងផ្សព្វផ្សាយ។ ការប្រគល់របាយការណ៍ដល់អ្នកប្រើគឺជាការផ្សព្វផ្សាយ។']);
Q('q79', 'intro', 2, ['A kuy teav shop sells 80 bowls at 6,000 KHR. Ingredients cost 210,000 KHR and the helper 60,000 KHR. What is the daily profit?', 'ហាងគុយទាវលក់ ៨០ចាន ក្នុងតម្លៃ ៦,០០០រៀល។ គ្រឿងផ្សំ ២១០,០០០រៀល ហើយជំនួយការ ៦០,០០០រៀល។ ចំណេញប្រចាំថ្ងៃប៉ុន្មាន?'],
  [['480,000 KHR', '480,000 រៀល'], ['270,000 KHR', '270,000 រៀល'], ['210,000 KHR', '210,000 រៀល'], ['150,000 KHR', '150,000 រៀល']], 2,
  ['Revenue 80 × 6,000 = 480,000. Profit = 480,000 − 210,000 − 60,000 = 210,000 KHR.', 'ចំណូល 80 × 6,000 = 480,000។ ចំណេញ = 480,000 − 210,000 − 60,000 = 210,000 រៀល។']);

// elements
Q('q80', 'elements', 2, ['Which is a NON-current asset?', 'តើអ្វីជាទ្រព្យសកម្មមិនមែនចរន្ត?'],
  [['Cash', 'សាច់ប្រាក់'], ['A delivery van', 'រថយន្តដឹកទំនិញ'], ['Inventory', 'ស្តុក'], ['Accounts receivable', 'គណនីត្រូវទទួល']], 1,
  ['A van is kept for several years to run the business, so it is non-current. The others turn into cash within about a year.', 'រថយន្តត្រូវរក្សាទុកច្រើនឆ្នាំដើម្បីដំណើរការអាជីវកម្ម ដូច្នេះជាមិនមែនចរន្ត។ ផ្សេងទៀតបម្លែងទៅជាសាច់ប្រាក់ក្នុងរយៈពេលប្រហែលមួយឆ្នាំ។']);
Q('q81', 'elements', 2, ['Which is a CURRENT liability?', 'តើអ្វីជាបំណុលចរន្ត?'],
  [['The part of a 10-year loan due after 5 years', 'ផ្នែកនៃកម្ចី ១០ឆ្នាំ ដែលត្រូវបង់ក្រោយ ៥ឆ្នាំ'], ['Wages owed to staff and due next week', 'ប្រាក់ខែជំពាក់បុគ្គលិក ត្រូវបង់សប្តាហ៍ក្រោយ'], ['Owner\'s capital', 'មូលធនម្ចាស់'], ['Equipment', 'បរិក្ខារ']], 1,
  ['Wages due next week must be paid within a year, so they are a current liability.', 'ប្រាក់ខែដល់កំណត់សប្តាហ៍ក្រោយត្រូវបង់ក្នុងមួយឆ្នាំ ដូច្នេះជាបំណុលចរន្ត។']);
Q('q82', 'elements', 2, ['Owner\'s equity increases when the business makes a profit.', 'មូលធនម្ចាស់កើនឡើងនៅពេលអាជីវកម្មរកចំណេញ។'], null, 0,
  ['Profit belongs to the owner, so it adds to equity. Drawings and losses reduce it.', 'ចំណេញជារបស់ម្ចាស់ ដូច្នេះវាបន្ថែមលើមូលធន។ ការដកប្រាក់ និងការខាតកាត់បន្ថយវា។']);
Q('q83', 'elements', 3, ['Opening capital $10,000, profit $3,000, drawings $1,200, no new investment. What is closing equity?', 'មូលធនដើមគ្រា $10,000 ចំណេញ $3,000 ការដកប្រាក់ $1,200 គ្មានការដាក់ទុនថ្មី។ មូលធនចុងគ្រាប៉ុន្មាន?'],
  [['$14,200', '$14,200'], ['$11,800', '$11,800'], ['$8,200', '$8,200'], ['$12,200', '$12,200']], 1,
  ['Closing equity = 10,000 + 3,000 − 1,200 = $11,800.', 'មូលធនចុងគ្រា = 10,000 + 3,000 − 1,200 = $11,800។']);
Q('q84', 'elements', 2, ['Which statement about accounts receivable and accounts payable is correct?', 'ប្រយោគណាអំពីគណនីត្រូវទទួល និងគណនីត្រូវបង់ ត្រឹមត្រូវ?'],
  [['Both are liabilities', 'ទាំងពីរជាបំណុល'], ['Receivable is an asset; payable is a liability', 'ត្រូវទទួលជាទ្រព្យ ហើយត្រូវបង់ជាបំណុល'], ['Receivable is a liability; payable is an asset', 'ត្រូវទទួលជាបំណុល ហើយត្រូវបង់ជាទ្រព្យ'], ['Both are equity', 'ទាំងពីរជាមូលធន']], 1,
  ['Receivable is money owed to you (asset). Payable is money you owe (liability).', 'ត្រូវទទួលជាប្រាក់ដែលគេជំពាក់អ្នក (ទ្រព្យ)។ ត្រូវបង់ជាប្រាក់ដែលអ្នកជំពាក់ (បំណុល)។']);
Q('q85', 'elements', 3, ['A clothing shop has cash $1,500, stock $2,500 and a sewing machine $1,000. It owes a supplier $800. What is equity?', 'ហាងសម្លៀកបំពាក់មានសាច់ប្រាក់ $1,500 ស្តុក $2,500 ម៉ាស៊ីនដេរ $1,000 ហើយជំពាក់អ្នកផ្គត់ផ្គង់ $800។ មូលធនប៉ុន្មាន?'],
  [['$5,800', '$5,800'], ['$4,200', '$4,200'], ['$800', '$800'], ['$5,000', '$5,000']], 1,
  ['Assets = 1,500 + 2,500 + 1,000 = 5,000. Equity = 5,000 − 800 = $4,200.', 'ទ្រព្យ = 1,500 + 2,500 + 1,000 = 5,000។ មូលធន = 5,000 − 800 = $4,200។']);

// equation
Q('q86', 'equation', 2, ['In the expanded accounting equation, expenses:', 'ក្នុងសមីការគណនេយ្យពង្រីក ចំណាយ៖'],
  [['Increase equity', 'បង្កើនមូលធន'], ['Decrease equity', 'បន្ថយមូលធន'], ['Increase liabilities', 'បង្កើនបំណុល'], ['Have no effect', 'គ្មានផល']], 1,
  ['Assets = Liabilities + Capital + Revenue − Expenses − Drawings. Expenses are subtracted from equity.', 'ទ្រព្យ = បំណុល + មូលធន + ចំណូល − ចំណាយ − ការដកប្រាក់។ ចំណាយត្រូវដកពីមូលធន។']);
Q('q87', 'equation', 2, ['The business pays $400 rent in cash. What is the effect on the equation?', 'អាជីវកម្មបង់ថ្លៃជួល $400 សាច់ប្រាក់។ តើមានផលអ្វីលើសមីការ?'],
  [['Assets −$400 and Equity −$400', 'ទ្រព្យ −$400 និងមូលធន −$400'], ['Assets +$400 and Equity +$400', 'ទ្រព្យ +$400 និងមូលធន +$400'], ['Assets −$400 and Liabilities −$400', 'ទ្រព្យ −$400 និងបំណុល −$400'], ['No change', 'គ្មានការប្តូរ']], 0,
  ['Cash falls, and the expense reduces equity by the same amount.', 'សាច់ប្រាក់ថយ ហើយចំណាយបន្ថយមូលធនស្មើគ្នា។']);
Q('q88', 'equation', 2, ['The business sells goods for $800 cash (ignore the cost of the goods). What is the effect?', 'អាជីវកម្មលក់ទំនិញ $800 សាច់ប្រាក់ (មិនគិតថ្លៃដើមទំនិញ)។ តើមានផលអ្វី?'],
  [['Assets +$800 and Equity +$800', 'ទ្រព្យ +$800 និងមូលធន +$800'], ['Assets +$800 and Liabilities +$800', 'ទ្រព្យ +$800 និងបំណុល +$800'], ['Assets unchanged', 'ទ្រព្យមិនប្តូរ'], ['Equity −$800', 'មូលធន −$800']], 0,
  ['Revenue increases equity, and cash (an asset) increases.', 'ចំណូលបង្កើនមូលធន ហើយសាច់ប្រាក់ (ទ្រព្យ) កើន។']);
Q('q89', 'equation', 3, ['Start: Assets 7,000 = Liabilities 2,000 + Equity 5,000. Then: sell goods $800 cash, pay rent $400, repay $500 of the loan. What is equity at the end?', 'ដំបូង៖ ទ្រព្យ 7,000 = បំណុល 2,000 + មូលធន 5,000។ បន្ទាប់មក៖ លក់ទំនិញ $800 សាច់ប្រាក់ បង់ថ្លៃជួល $400 សងកម្ចី $500។ មូលធនចុងក្រោយប៉ុន្មាន?'],
  [['$5,000', '$5,000'], ['$5,400', '$5,400'], ['$5,900', '$5,900'], ['$6,900', '$6,900']], 1,
  ['Equity = 5,000 + 800 − 400 = 5,400. (Assets 6,900 = Liabilities 1,500 + Equity 5,400.)', 'មូលធន = 5,000 + 800 − 400 = 5,400។ (ទ្រព្យ 6,900 = បំណុល 1,500 + មូលធន 5,400។)']);
Q('q90', 'equation', 2, ['Owner\'s drawings increase owner\'s equity.', 'ការដកប្រាក់របស់ម្ចាស់បង្កើនមូលធនម្ចាស់។'], null, 1,
  ['Drawings take value out of the business, so they decrease equity.', 'ការដកប្រាក់យកតម្លៃចេញពីអាជីវកម្ម ដូច្នេះវាបន្ថយមូលធន។']);
Q('q91', 'equation', 3, ['A business buys goods on credit for $600, then pays the supplier $300. What are liabilities afterwards?', 'អាជីវកម្មទិញទំនិញជំពាក់ $600 បន្ទាប់មកបង់អ្នកផ្គត់ផ្គង់ $300។ តើបំណុលក្រោយនោះប៉ុន្មាន?'],
  [['$0', '$0'], ['$300', '$300'], ['$600', '$600'], ['$900', '$900']], 1,
  ['Payables rise by 600 then fall by 300, leaving $300 still owed.', 'គណនីត្រូវបង់កើន 600 បន្ទាប់មកថយ 300 នៅសល់ $300 ដែលនៅជំពាក់។']);

// cash vs profit
Q('q92', 'cashprofit', 2, ['On the cash basis, revenue is recorded when:', 'ក្រោមមូលដ្ឋានសាច់ប្រាក់ ចំណូលត្រូវកត់នៅពេល៖'],
  [['The sale is agreed', 'ការលក់ត្រូវបានយល់ព្រម'], ['Cash is received', 'ទទួលសាច់ប្រាក់'], ['The invoice is printed', 'បោះពុម្ពវិក្កយបត្រ'], ['The year ends', 'ឆ្នាំបញ្ចប់']], 1,
  ['The cash basis records only when cash moves. The accrual basis records when revenue is earned.', 'មូលដ្ឋានសាច់ប្រាក់កត់តែពេលសាច់ប្រាក់ផ្លាស់ទី។ មូលដ្ឋាន accrual កត់ពេលរកចំណូលបាន។']);
Q('q93', 'cashprofit', 3, ['Sales $2,000 ($1,100 cash, $900 credit). Expenses $1,400 ($1,100 paid, $300 unpaid). Equipment $600 bought with cash. What are the accrual profit and the change in cash?', 'ការលក់ $2,000 (សាច់ប្រាក់ $1,100 ជំពាក់ $900)។ ចំណាយ $1,400 (បង់ $1,100 មិនទាន់បង់ $300)។ ទិញបរិក្ខារ $600 សាច់ប្រាក់។ តើចំណេញ accrual និងការប្តូរសាច់ប្រាក់ប៉ុន្មាន?'],
  [['Profit $600; cash change +$600', 'ចំណេញ $600; សាច់ប្រាក់ +$600'], ['Profit $600; cash change −$600', 'ចំណេញ $600; សាច់ប្រាក់ −$600'], ['Profit −$600; cash change −$600', 'ចំណេញ −$600; សាច់ប្រាក់ −$600'], ['Profit $1,200; cash change $0', 'ចំណេញ $1,200; សាច់ប្រាក់ $0']], 1,
  ['Profit = 2,000 − 1,400 = 600. Cash = +1,100 − 1,100 − 600 = −600. Equipment is an asset, not an expense.', 'ចំណេញ = 2,000 − 1,400 = 600។ សាច់ប្រាក់ = +1,100 − 1,100 − 600 = −600។ បរិក្ខារជាទ្រព្យ មិនមែនចំណាយទេ។']);
Q('q94', 'cashprofit', 2, ['Buying equipment with cash is recorded as an expense for the full amount immediately.', 'ការទិញបរិក្ខារដោយសាច់ប្រាក់ត្រូវកត់ជាចំណាយពេញចំនួនភ្លាមៗ។'], null, 1,
  ['Equipment is an asset. Its cost is spread over its life as depreciation.', 'បរិក្ខារជាទ្រព្យ។ ថ្លៃរបស់វាត្រូវបានចែកតាមអាយុកាលជាការរំលស់។']);
Q('q95', 'cashprofit', 3, ['A guesthouse earns $3,000 of room revenue but $1,200 is unpaid. It pays $2,000 of expenses in cash. What are profit and net cash change?', 'ផ្ទះសំណាក់រកចំណូលបន្ទប់ $3,000 ប៉ុន្តែ $1,200 មិនទាន់បង់។ វាបង់ចំណាយ $2,000 ជាសាច់ប្រាក់។ តើចំណេញ និងការប្តូរសាច់ប្រាក់សុទ្ធប៉ុន្មាន?'],
  [['Profit $1,000; cash −$200', 'ចំណេញ $1,000; សាច់ប្រាក់ −$200'], ['Profit $1,000; cash +$1,000', 'ចំណេញ $1,000; សាច់ប្រាក់ +$1,000'], ['Profit $1,800; cash −$200', 'ចំណេញ $1,800; សាច់ប្រាក់ −$200'], ['Profit −$200; cash $1,000', 'ចំណេញ −$200; សាច់ប្រាក់ $1,000']], 0,
  ['Profit = 3,000 − 2,000 = 1,000. Cash = (3,000 − 1,200) − 2,000 = −200.', 'ចំណេញ = 3,000 − 2,000 = 1,000។ សាច់ប្រាក់ = (3,000 − 1,200) − 2,000 = −200។']);
Q('q96', 'cashprofit', 2, ['Which financial statement reports the movements of cash?', 'របាយការណ៍ហិរញ្ញវត្ថុណារាយការណ៍ពីចលនាសាច់ប្រាក់?'],
  [['Income statement', 'របាយការណ៍លទ្ធផល'], ['Statement of cash flows', 'របាយការណ៍លំហូរសាច់ប្រាក់'], ['Trial balance', 'តារាងតុល្យការសាកល្បង'], ['Journal', 'សៀវភៅកំណត់ហេតុ']], 1,
  ['The cash flow statement shows cash in and out. The income statement shows profit.', 'របាយការណ៍លំហូរសាច់ប្រាក់បង្ហាញសាច់ប្រាក់ចូល និងចេញ។ របាយការណ៍លទ្ធផលបង្ហាញចំណេញ។']);
Q('q97', 'cashprofit', 2, ['The ability of a business to pay its bills when they fall due is called:', 'សមត្ថភាពរបស់អាជីវកម្មក្នុងការបង់វិក្កយបត្រពេលដល់កំណត់ ហៅថា៖'],
  [['Profitability', 'ភាពចំណេញ'], ['Liquidity', 'សន្ទនីយភាព'], ['Depreciation', 'ការរំលស់'], ['Revenue', 'ចំណូល']], 1,
  ['Liquidity is about having enough cash in time. Profitability is about earning more than you spend.', 'សន្ទនីយភាពគឺអំពីការមានសាច់ប្រាក់គ្រប់គ្រាន់ទាន់ពេល។ ភាពចំណេញគឺអំពីការរកបានច្រើនជាងចំណាយ។']);

// debit and credit
Q('q98', 'debitcredit', 2, ['The owner withdraws $100 cash for personal use. The entry is:', 'ម្ចាស់ដកសាច់ប្រាក់ $100 សម្រាប់ប្រើផ្ទាល់ខ្លួន។ កំណត់ត្រាគឺ៖'],
  [['Dr Owner\'s Drawings / Cr Cash', 'Dr ការដកប្រាក់ម្ចាស់ / Cr សាច់ប្រាក់'], ['Dr Cash / Cr Owner\'s Drawings', 'Dr សាច់ប្រាក់ / Cr ការដកប្រាក់ម្ចាស់'], ['Dr Salary Expense / Cr Cash', 'Dr ចំណាយប្រាក់ខែ / Cr សាច់ប្រាក់'], ['Dr Capital / Cr Revenue', 'Dr មូលធន / Cr ចំណូល']], 0,
  ['Drawings increase with a debit (they reduce equity). Cash falls with a credit.', 'ការដកប្រាក់កើនដោយ debit (វាបន្ថយមូលធន)។ សាច់ប្រាក់ថយដោយ credit។']);
Q('q99', 'debitcredit', 2, ['The business buys goods on credit for $300. The entry is:', 'អាជីវកម្មទិញទំនិញជំពាក់ $300។ កំណត់ត្រាគឺ៖'],
  [['Dr Accounts Payable / Cr Inventory', 'Dr គណនីត្រូវបង់ / Cr ស្តុក'], ['Dr Inventory / Cr Accounts Payable', 'Dr ស្តុក / Cr គណនីត្រូវបង់'], ['Dr Inventory / Cr Cash', 'Dr ស្តុក / Cr សាច់ប្រាក់'], ['Dr Cash / Cr Accounts Payable', 'Dr សាច់ប្រាក់ / Cr គណនីត្រូវបង់']], 1,
  ['Inventory (asset) rises → debit. The business owes the supplier (liability rises) → credit.', 'ស្តុក (ទ្រព្យ) កើន → debit។ អាជីវកម្មជំពាក់អ្នកផ្គត់ផ្គង់ (បំណុលកើន) → credit។']);
Q('q100', 'debitcredit', 2, ['The business pays a supplier $300 it owed. The entry is:', 'អាជីវកម្មបង់អ្នកផ្គត់ផ្គង់ $300 ដែលជំពាក់។ កំណត់ត្រាគឺ៖'],
  [['Dr Accounts Payable / Cr Cash', 'Dr គណនីត្រូវបង់ / Cr សាច់ប្រាក់'], ['Dr Cash / Cr Accounts Payable', 'Dr សាច់ប្រាក់ / Cr គណនីត្រូវបង់'], ['Dr Inventory / Cr Cash', 'Dr ស្តុក / Cr សាច់ប្រាក់'], ['Dr Expense / Cr Accounts Payable', 'Dr ចំណាយ / Cr គណនីត្រូវបង់']], 0,
  ['The liability falls → debit. Cash falls → credit.', 'បំណុលថយ → debit។ សាច់ប្រាក់ថយ → credit។']);
Q('q101', 'debitcredit', 3, ['What is the normal balance of the Owner\'s Drawings account?', 'តើសមតុល្យធម្មតានៃគណនីការដកប្រាក់ម្ចាស់ជាអ្វី?'],
  [['Debit', 'Debit'], ['Credit', 'Credit'], ['It has no normal balance', 'វាគ្មានសមតុល្យធម្មតា'], ['Zero always', 'សូន្យជានិច្ច']], 0,
  ['Drawings reduce equity, so they are the opposite of capital and increase with a debit.', 'ការដកប្រាក់កាត់បន្ថយមូលធន ដូច្នេះវាផ្ទុយពីមូលធន ហើយកើនដោយ debit។']);
Q('q102', 'debitcredit', 2, ['In a T-account, debits are on the right and credits are on the left.', 'ក្នុង T-account debit នៅខាងស្តាំ ហើយ credit នៅខាងឆ្វេង។'], null, 1,
  ['It is the other way round: debits on the left, credits on the right.', 'វាផ្ទុយមកវិញ៖ debit ខាងឆ្វេង credit ខាងស្តាំ។']);
Q('q103', 'debitcredit', 3, ['The Cash T-account has debits of 3,000 and 450 and credits of 800 and 250. What is the balance?', 'T-account សាច់ប្រាក់មាន debit 3,000 និង 450 ហើយ credit 800 និង 250។ សមតុល្យប៉ុន្មាន?'],
  [['3,450 credit', '3,450 credit'], ['2,400 debit', '2,400 debit'], ['1,050 debit', '1,050 debit'], ['4,500 debit', '4,500 debit']], 1,
  ['Debits 3,450 − credits 1,050 = 2,400, a debit balance (normal for an asset).', 'Debit 3,450 − credit 1,050 = 2,400 ជាសមតុល្យ debit (ធម្មតាសម្រាប់ទ្រព្យ)។']);
Q('q104', 'debitcredit', 2, ['What is the difference between the journal and the ledger?', 'តើអ្វីជាភាពខុសគ្នារវាងសៀវភៅកំណត់ហេតុ និងសៀវភៅធំ?'],
  [['The journal lists transactions by date; the ledger groups them by account', 'សៀវភៅកំណត់ហេតុរាយប្រតិបត្តិការតាមកាលបរិច្ឆេទ ហើយសៀវភៅធំដាក់ជាក្រុមតាមគណនី'], ['The journal groups by account; the ledger lists by date', 'សៀវភៅកំណត់ហេតុដាក់ក្រុមតាមគណនី ហើយសៀវភៅធំរាយតាមកាលបរិច្ឆេទ'], ['They are the same book', 'ពួកវាជាសៀវភៅតែមួយ'], ['The ledger is only for tax', 'សៀវភៅធំសម្រាប់តែពន្ធ']], 0,
  ['You record in the journal first, then post each line to its ledger account.', 'អ្នកកត់ក្នុងសៀវភៅកំណត់ហេតុមុន បន្ទាប់មកផ្ទេរជួរនីមួយៗទៅគណនីក្នុងសៀវភៅធំ។']);

// entity
Q('q105', 'entity', 2, ['Which business form usually gives its owners limited liability?', 'ទម្រង់អាជីវកម្មណាជាទូទៅផ្តល់ទំនួលខុសត្រូវមានកំណត់ដល់ម្ចាស់?'],
  [['Sole proprietorship', 'អាជីវកម្មបុគ្គល'], ['Ordinary partnership', 'ភាពជាដៃគូធម្មតា'], ['Company', 'ក្រុមហ៊ុន'], ['None of them', 'គ្មានទេ']], 2,
  ['A company is legally separate, so shareholders usually risk only what they invested. Check local law for details.', 'ក្រុមហ៊ុនដាច់ដោយឡែកក្នុងផ្លូវច្បាប់ ដូច្នេះម្ចាស់ភាគហ៊ុនជាទូទៅប្រថុយតែអ្វីដែលបានវិនិយោគ។ សូមពិនិត្យច្បាប់មូលដ្ឋានសម្រាប់ព័ត៌មានលម្អិត។']);
Q('q106', 'entity', 2, ['The owner pays a $50 business supply bill from their own pocket. How is it recorded?', 'ម្ចាស់បង់វិក្កយបត្រសម្ភារៈអាជីវកម្ម $50 ពីហោប៉ៅខ្លួនឯង។ តើកត់ត្រាយ៉ាងដូចម្តេច?'],
  [['Dr Supplies Expense 50 / Cr Owner\'s Capital 50', 'Dr ចំណាយសម្ភារៈ 50 / Cr មូលធនម្ចាស់ 50'], ['Dr Owner\'s Drawings 50 / Cr Cash 50', 'Dr ការដកប្រាក់ម្ចាស់ 50 / Cr សាច់ប្រាក់ 50'], ['Not recorded at all', 'មិនកត់ត្រាទាល់តែសោះ'], ['Dr Cash 50 / Cr Revenue 50', 'Dr សាច់ប្រាក់ 50 / Cr ចំណូល 50']], 0,
  ['It is a real business cost (expense), paid by the owner, so it counts as the owner putting value into the business.', 'វាជាថ្លៃដើមអាជីវកម្មពិតប្រាកដ (ចំណាយ) ដែលម្ចាស់បានបង់ ដូច្នេះរាប់ជាការដែលម្ចាស់ដាក់តម្លៃចូលអាជីវកម្ម។']);
Q('q107', 'entity', 2, ['For a sole trader, the owner\'s own pay taken from the business is recorded as drawings, not as a salary expense.', 'សម្រាប់អាជីវកម្មបុគ្គល ប្រាក់ខែរបស់ម្ចាស់ដែលយកពីអាជីវកម្មត្រូវកត់ជាការដកប្រាក់ មិនមែនចំណាយប្រាក់ខែទេ។'], null, 0,
  ['The owner and the business are not separate employer and employee, so the money taken out is drawings.', 'ម្ចាស់ និងអាជីវកម្មមិនមែនជានិយោជក និងនិយោជិតដាច់ដោយឡែកទេ ដូច្នេះលុយដែលយកចេញគឺជាការដកប្រាក់។']);
Q('q108', 'entity', 3, ['A noodle shop owner takes $40 from the till to pay her child\'s school fee. The correct treatment is:', 'ម្ចាស់ហាងគុយទាវយក $40 ពីថតលុយដើម្បីបង់ថ្លៃសិក្សាកូន។ ការកត់ត្រាត្រឹមត្រូវគឺ៖'],
  [['Drawings of $40, reducing equity but not profit', 'ការដកប្រាក់ $40 កាត់បន្ថយមូលធន តែមិនកាត់ចំណេញ'], ['A shop expense of $40', 'ចំណាយហាង $40'], ['Revenue of $40', 'ចំណូល $40'], ['A liability of $40', 'បំណុល $40']], 0,
  ['School fees are personal, so the entry is Dr Drawings / Cr Cash.', 'ថ្លៃសិក្សាជាចំណាយផ្ទាល់ខ្លួន ដូច្នេះកំណត់ត្រាគឺ Dr ការដកប្រាក់ / Cr សាច់ប្រាក់។']);
Q('q109', 'entity', 2, ['Which of these is a genuine business expense?', 'តើអ្វីជាចំណាយអាជីវកម្មពិតប្រាកដ?'],
  [['Rent of the shop', 'ថ្លៃជួលហាង'], ['The owner\'s home electricity bill', 'វិក្កយបត្រអគ្គិសនីផ្ទះរបស់ម្ចាស់'], ['The owner\'s family dinner', 'អាហារពេលល្ងាចគ្រួសារម្ចាស់'], ['The owner\'s personal car loan', 'កម្ចីឡានផ្ទាល់ខ្លួនរបស់ម្ចាស់']], 0,
  ['Shop rent exists because of the business. The others are personal.', 'ថ្លៃជួលហាងមានដោយសារអាជីវកម្ម។ ផ្សេងទៀតជាផ្ទាល់ខ្លួន។']);

// matching
Q('q110', 'matching', 2, ['A machine costs $1,200 and is used for 4 years with no leftover value (straight-line). What is the yearly depreciation?', 'ម៉ាស៊ីនថ្លៃ $1,200 ប្រើ ៤ឆ្នាំ គ្មានតម្លៃសល់ (បន្ទាត់ត្រង់)។ ការរំលស់ប្រចាំឆ្នាំប៉ុន្មាន?'],
  [['$1,200', '$1,200'], ['$600', '$600'], ['$300', '$300'], ['$4,800', '$4,800']], 2,
  ['1,200 ÷ 4 = $300 per year ($25 per month).', '1,200 ÷ 4 = $300 ក្នុងមួយឆ្នាំ ($25 ក្នុងមួយខែ)។']);
Q('q111', 'matching', 2, ['$240 is paid on 1 January for 12 months of insurance. What is the insurance expense for January?', 'បង់ $240 នៅ ១ មករា សម្រាប់ធានារ៉ាប់រង ១២ខែ។ ចំណាយធានារ៉ាប់រងខែមករាប៉ុន្មាន?'],
  [['$240', '$240'], ['$120', '$120'], ['$20', '$20'], ['$0', '$0']], 2,
  ['240 ÷ 12 = $20 a month. The rest is still a prepaid asset.', '240 ÷ 12 = $20 ក្នុងមួយខែ។ ផ្នែកដែលនៅសល់នៅតែជាទ្រព្យបង់មុន។']);
Q('q112', 'matching', 3, ['Prepaid insurance on the balance sheet is classified as a(n):', 'ធានារ៉ាប់រងបង់មុនលើតារាងតុល្យការត្រូវបានចាត់ថ្នាក់ជា៖'],
  [['Asset', 'ទ្រព្យសកម្ម'], ['Liability', 'បំណុល'], ['Expense', 'ចំណាយ'], ['Revenue', 'ចំណូល']], 0,
  ['The business has paid for future cover, which is a benefit it has not used yet, so it is an asset until used.', 'អាជីវកម្មបានបង់សម្រាប់ការធានាអនាគត ដែលជាផលប្រយោជន៍មិនទាន់ប្រើ ដូច្នេះជាទ្រព្យរហូតដល់ប្រើ។']);
Q('q113', 'matching', 2, ['What is an accrued expense?', 'តើចំណាយ accrued ជាអ្វី?'],
  [['An expense paid in advance', 'ចំណាយបង់ទុកមុន'], ['An expense incurred but not yet paid', 'ចំណាយកើតមានតែមិនទាន់បង់'], ['A personal expense of the owner', 'ចំណាយផ្ទាល់ខ្លួនរបស់ម្ចាស់'], ['A type of revenue', 'ប្រភេទនៃចំណូល']], 1,
  ['Accrued means the cost has happened but cash has not left yet, so a liability is recorded.', 'Accrued មានន័យថាថ្លៃដើមបានកើតឡើង តែសាច់ប្រាក់មិនទាន់ចេញ ដូច្នេះត្រូវកត់បំណុល។']);
Q('q114', 'matching', 3, ['A business pays $1,200 for a machine in December. For December, the correct treatment is to:', 'អាជីវកម្មបង់ $1,200 សម្រាប់ម៉ាស៊ីនក្នុងខែធ្នូ។ សម្រាប់ខែធ្នូ ការកត់ត្រាត្រឹមត្រូវគឺ៖'],
  [['Record the full $1,200 as December expense', 'កត់ $1,200 ទាំងអស់ជាចំណាយខែធ្នូ'], ['Record it as an asset and expense only the depreciation for the period used', 'កត់ជាទ្រព្យ ហើយចំណាយតែការរំលស់សម្រាប់អំឡុងពេលដែលបានប្រើ'], ['Ignore it until January', 'មិនអើពើរហូតដល់ខែមករា'], ['Record it as revenue', 'កត់ជាចំណូល']], 1,
  ['A machine helps earn revenue for years, so matching spreads its cost over its useful life.', 'ម៉ាស៊ីនជួយរកចំណូលជាច្រើនឆ្នាំ ដូច្នេះការផ្គូផ្គងចែកថ្លៃរបស់វាតាមអាយុកាលប្រើប្រាស់។']);
Q('q115', 'matching', 2, ['A $50 repair is an expense, while a $1,200 machine is recorded as an asset.', 'ការជួសជុល $50 ជាចំណាយ ហើយម៉ាស៊ីន $1,200 ត្រូវកត់ជាទ្រព្យ។'], null, 0,
  ['A repair benefits only this period. A machine benefits several periods.', 'ការជួសជុលមានប្រយោជន៍តែអំឡុងពេលនេះ។ ម៉ាស៊ីនមានប្រយោជន៍ច្រើនអំឡុងពេល។']);
