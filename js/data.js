// AccountEasy content + translations. Every text is {en, km}.
const b = (en, km) => ({ en, km });

const DATA = {};

// ---------- UI strings ----------
DATA.ui = {
  en: {
    appName: 'AccountEasy', dashboard: 'Dashboard', paths: 'Learning Paths', lessons: 'Lessons',
    practice: 'Practice Exercises', quiz: 'Quiz Center', sim: 'Accounting Simulator', cards: 'Flashcards',
    progress: 'My Progress', bookmarks: 'Bookmarks', settings: 'Settings',
    welcome: 'Welcome back, student!', level: 'Level', completion: 'Course completion', done: 'Lessons completed',
    streak: 'Day streak', studyTime: 'Study time (min)', quizAvg: 'Quiz average', dailyGoal: 'Daily goal (min)',
    continue: 'Continue Learning', recommended: 'Recommended next', recent: 'Recent activity', noActivity: 'No activity yet. Start your first lesson!',
    badges: 'Achievements', weekly: 'Weekly study (minutes)', mastery: 'Topic mastery', sample: 'Sample data', real: 'Your data',
    sampleNote: 'The weekly chart shows SAMPLE data until you study. Everything else is your real progress.',
    objectives: 'Learning objectives', simple: 'Simple explanation', detailed: 'Detailed explanation', example: 'Real-world example',
    worked: 'Step-by-step worked example', visual: 'Visual', mistakes: 'Common mistakes', summaryT: 'Lesson summary',
    masteryCheck: 'Take mastery check', markDone: 'Mark as completed', completed: 'Completed', prev: 'Previous', next: 'Next',
    bookmark: 'Bookmark', bookmarked: 'Bookmarked', notes: 'My notes', saveNote: 'Save note', saved: 'Saved', print: 'Print', copy: 'Copy text', keyTerms: 'Key terms', khEx: 'Cambodian example (optional)',
    start: 'Start', review: 'Review', open: 'Open', comingSoon: 'Coming soon (planned)', lessonsCount: 'lessons',
    submit: 'Submit', correct: 'Correct!', incorrect: 'Not quite.', explanation: 'Explanation', yourAnswer: 'Your answer', rightAnswer: 'Correct answer',
    true: 'True', false: 'False', topic: 'Topic', all: 'All topics', difficulty: 'Difficulty', beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced', any: 'Any',
    questions: 'Number of questions', mode: 'Mode', modePractice: 'Practice (instant feedback)', modeExam: 'Exam (answers hidden until submit)',
    timeLimit: 'Time limit (minutes, 0 = no limit)', timeUsed: 'Time', timeTaken: 'Time taken', timedOut: 'time ran out', startQuiz: 'Start quiz', score: 'Score', retry: 'Retry', reviewAnswers: 'Review answers',
    history: 'Quiz history', noHistory: 'No quizzes taken yet.', finish: 'Finish', timeLeft: 'Time left', question: 'Question', of: 'of',
    reviewWrong: 'Review lesson', weak: 'Weak topics', noWeak: 'No weak topics detected yet. Take some quizzes!', backLesson: 'Back to lesson',
    addLine: 'Add line', account: 'Account', debit: 'Debit', credit: 'Credit', amount: 'Amount', total: 'Total',
    balanced: 'Debits equal credits', notBalanced: 'Debits do NOT equal credits', checkEntry: 'Check my entry', nextEx: 'Next exercise', transaction: 'Transaction',
    simIntro: 'Run a fictional business. For each transaction choose the account to debit, the account to credit and the amount.',
    chooseBiz: 'Choose business type', coffee: 'Coffee shop', clothing: 'Clothing store', debitAcct: 'Account to DEBIT', creditAcct: 'Account to CREDIT',
    choose: '-- choose --', equationEffect: 'Effect on accounting equation', journal: 'Journal', ledger: 'Ledger', trial: 'Trial balance',
    statements: 'Financial statements', incomeStmt: 'Income statement', balanceSheet: 'Balance sheet', revenue: 'Revenue', expenses: 'Expenses',
    netIncome: 'Net income', assets: 'Assets', liabilities: 'Liabilities', equity: 'Owner\'s equity', reset: 'Reset', simDone: 'All transactions recorded!',
    nextTx: 'Next transaction', tries: 'Attempts', yes: 'Yes',
    reveal: 'Show answer', again: 'Again', good: 'Good', easy: 'Easy', dueNow: 'Cards due', noDue: 'No cards due. Come back later!',
    glossary: 'Glossary', term: 'Term', definition: 'Definition', formula: 'Formula', front: 'Tap to reveal',
    lessonsDone: 'Lessons completed', practiceAcc: 'Practice accuracy', sessions: 'Study days', flashRev: 'Flashcard reviews',
    noBookmarks: 'No bookmarks yet. Open a lesson and tap Bookmark.', language: 'Language', theme: 'Theme', light: 'Light', dark: 'Dark',
    goal: 'Daily study goal (minutes)', export: 'Export revision summary', clear: 'Erase all saved progress', confirmClear: 'Erase ALL progress? This cannot be undone.',
    storageNote: 'Progress is saved in this browser only (localStorage). It is not synced to the cloud.',
    search: 'Search lessons and terms...', results: 'Search results', none: 'Nothing found.', ex: 'Exercise', weakRec: 'You are weak in this topic. Review:',
    tryHarder: 'Great mastery! Try an advanced quiz.', startFirst: 'Start with your first lesson.', allDone: 'All lessons done. Take a mixed quiz!',
    dueTools: 'Study tools', planned: 'Planned for later phases: AI tutor, cloud accounts, advanced levels 4-7.'
  },
  km: {
    appName: 'AccountEasy', dashboard: 'ផ្ទាំងព័ត៌មាន', paths: 'ផ្លូវសិក្សា', lessons: 'មេរៀន',
    practice: 'លំហាត់អនុវត្ត', quiz: 'មជ្ឈមណ្ឌលសំណួរ', sim: 'ម៉ាស៊ីនក្លែងធ្វើគណនេយ្យ', cards: 'កាតចងចាំ',
    progress: 'ដំណើរការរបស់ខ្ញុំ', bookmarks: 'ចំណាំ', settings: 'ការកំណត់',
    welcome: 'សូមស្វាគមន៍ការត្រឡប់មកវិញ សិស្ស!', level: 'កម្រិត', completion: 'ភាគរយនៃវគ្គសិក្សា', done: 'មេរៀនបានបញ្ចប់',
    streak: 'ថ្ងៃរៀនជាប់ៗគ្នា', studyTime: 'ពេលវេលារៀន (នាទី)', quizAvg: 'មធ្យមភាគសំណួរ', dailyGoal: 'គោលដៅប្រចាំថ្ងៃ (នាទី)',
    continue: 'បន្តរៀន', recommended: 'មេរៀនបន្ទាប់ដែលណែនាំ', recent: 'សកម្មភាពថ្មីៗ', noActivity: 'មិនទាន់មានសកម្មភាពទេ។ ចាប់ផ្តើមមេរៀនដំបូង!',
    badges: 'សមិទ្ធផល', weekly: 'ការសិក្សាប្រចាំសប្តាហ៍ (នាទី)', mastery: 'កម្រិតស្ទាត់ជំនាញតាមប្រធានបទ', sample: 'ទិន្នន័យគំរូ', real: 'ទិន្នន័យរបស់អ្នក',
    sampleNote: 'ក្រាហ្វប្រចាំសប្តាហ៍បង្ហាញទិន្នន័យគំរូ រហូតដល់អ្នកចាប់ផ្តើមរៀន។ ទិន្នន័យផ្សេងទៀតគឺជាដំណើរការពិតរបស់អ្នក។',
    objectives: 'គោលបំណងនៃការសិក្សា', simple: 'ការពន្យល់ងាយៗ', detailed: 'ការពន្យល់លម្អិត', example: 'ឧទាហរណ៍ក្នុងជីវិតពិត',
    worked: 'ឧទាហរណ៍គណនាជាជំហានៗ', visual: 'រូបភាពបង្ហាញ', mistakes: 'កំហុសដែលតែងកើតមាន', summaryT: 'សេចក្តីសង្ខេបមេរៀន',
    masteryCheck: 'ធ្វើតេស្តវាស់ជំនាញ', markDone: 'សម្គាល់ថាបានបញ្ចប់', completed: 'បានបញ្ចប់', prev: 'មុន', next: 'បន្ទាប់',
    bookmark: 'ចំណាំ', bookmarked: 'បានចំណាំ', notes: 'កំណត់ត្រារបស់ខ្ញុំ', saveNote: 'រក្សាទុកកំណត់ត្រា', saved: 'បានរក្សាទុក', print: 'បោះពុម្ព', copy: 'ចម្លងអត្ថបទ', keyTerms: 'ពាក្យគន្លឹះ', khEx: 'ឧទាហរណ៍កម្ពុជា (ជម្រើស)',
    start: 'ចាប់ផ្តើម', review: 'ពិនិត្យឡើងវិញ', open: 'បើក', comingSoon: 'ឆាប់ៗនេះ (គ្រោងទុក)', lessonsCount: 'មេរៀន',
    submit: 'បញ្ជូន', correct: 'ត្រឹមត្រូវ!', incorrect: 'មិនទាន់ត្រឹមត្រូវទេ។', explanation: 'ការពន្យល់', yourAnswer: 'ចម្លើយរបស់អ្នក', rightAnswer: 'ចម្លើយត្រឹមត្រូវ',
    true: 'ពិត', false: 'មិនពិត', topic: 'ប្រធានបទ', all: 'គ្រប់ប្រធានបទ', difficulty: 'កម្រិតលំបាក', beginner: 'ដំបូង', intermediate: 'មធ្យម', advanced: 'ខ្ពស់', any: 'ទាំងអស់',
    questions: 'ចំនួនសំណួរ', mode: 'របៀប', modePractice: 'អនុវត្ត (ឃើញចម្លើយភ្លាមៗ)', modeExam: 'ប្រឡង (លាក់ចម្លើយរហូតដល់បញ្ជូន)',
    timeLimit: 'ពេលកំណត់ (នាទី 0 = គ្មានកំណត់)', timeUsed: 'ពេលវេលា', timeTaken: 'ពេលវេលាដែលបានប្រើ', timedOut: 'អស់ពេល', startQuiz: 'ចាប់ផ្តើមសំណួរ', score: 'ពិន្ទុ', retry: 'ធ្វើម្តងទៀត', reviewAnswers: 'ពិនិត្យចម្លើយ',
    history: 'ប្រវត្តិសំណួរ', noHistory: 'មិនទាន់បានធ្វើសំណួរទេ។', finish: 'បញ្ចប់', timeLeft: 'ពេលនៅសល់', question: 'សំណួរ', of: 'ក្នុងចំណោម',
    reviewWrong: 'ពិនិត្យមេរៀន', weak: 'ប្រធានបទដែលខ្សោយ', noWeak: 'មិនទាន់រកឃើញប្រធានបទខ្សោយទេ។ សូមធ្វើសំណួរបន្ថែម!', backLesson: 'ត្រឡប់ទៅមេរៀន',
    addLine: 'បន្ថែមជួរ', account: 'គណនី', debit: 'ឥណពន្ធ (Debit)', credit: 'ឥណទាន (Credit)', amount: 'ចំនួនទឹកប្រាក់', total: 'សរុប',
    balanced: 'ឥណពន្ធស្មើឥណទាន', notBalanced: 'ឥណពន្ធមិនស្មើឥណទានទេ', checkEntry: 'ពិនិត្យកំណត់ត្រារបស់ខ្ញុំ', nextEx: 'លំហាត់បន្ទាប់', transaction: 'ប្រតិបត្តិការ',
    simIntro: 'បញ្ជាអាជីវកម្មសម្មតិកម្ម។ សម្រាប់ប្រតិបត្តិការនីមួយៗ សូមជ្រើសគណនីដែលត្រូវ Debit គណនីដែលត្រូវ Credit និងចំនួនទឹកប្រាក់។',
    chooseBiz: 'ជ្រើសប្រភេទអាជីវកម្ម', coffee: 'ហាងកាហ្វេ', clothing: 'ហាងលក់សម្លៀកបំពាក់', debitAcct: 'គណនីដែលត្រូវ DEBIT', creditAcct: 'គណនីដែលត្រូវ CREDIT',
    choose: '-- ជ្រើសរើស --', equationEffect: 'ផលប៉ះពាល់លើសមីការគណនេយ្យ', journal: 'សៀវភៅកំណត់ហេតុ', ledger: 'សៀវភៅធំ', trial: 'តារាងតុល្យការសាកល្បង',
    statements: 'របាយការណ៍ហិរញ្ញវត្ថុ', incomeStmt: 'របាយការណ៍លទ្ធផល', balanceSheet: 'តារាងតុល្យការ', revenue: 'ចំណូល', expenses: 'ចំណាយ',
    netIncome: 'ប្រាក់ចំណេញសុទ្ធ', assets: 'ទ្រព្យសកម្ម', liabilities: 'បំណុល', equity: 'មូលធនម្ចាស់', reset: 'កំណត់ឡើងវិញ', simDone: 'បានកត់ត្រាប្រតិបត្តិការទាំងអស់!',
    nextTx: 'ប្រតិបត្តិការបន្ទាប់', tries: 'ចំនួនព្យាយាម', yes: 'បាទ/ចាស',
    reveal: 'បង្ហាញចម្លើយ', again: 'ម្តងទៀត', good: 'ល្អ', easy: 'ងាយ', dueNow: 'កាតដល់ពេលត្រូវរំលឹក', noDue: 'គ្មានកាតដល់ពេលទេ។ សូមត្រឡប់មកវិញពេលក្រោយ!',
    glossary: 'សទ្ទានុក្រម', term: 'ពាក្យ', definition: 'និយមន័យ', formula: 'រូបមន្ត', front: 'ចុចដើម្បីមើលចម្លើយ',
    lessonsDone: 'មេរៀនបានបញ្ចប់', practiceAcc: 'ភាពត្រឹមត្រូវនៃលំហាត់', sessions: 'ថ្ងៃដែលបានរៀន', flashRev: 'ចំនួនរំលឹកកាត',
    noBookmarks: 'មិនទាន់មានចំណាំទេ។ បើកមេរៀនមួយហើយចុច ចំណាំ។', language: 'ភាសា', theme: 'រចនាប័ទ្ម', light: 'ភ្លឺ', dark: 'ងងឹត',
    goal: 'គោលដៅរៀនប្រចាំថ្ងៃ (នាទី)', export: 'នាំចេញសេចក្តីសង្ខេបសម្រាប់ពិនិត្យឡើងវិញ', clear: 'លុបដំណើរការដែលបានរក្សាទុកទាំងអស់', confirmClear: 'លុបដំណើរការទាំងអស់? មិនអាចមកវិញបានទេ។',
    storageNote: 'ដំណើរការត្រូវបានរក្សាទុកក្នុងកម្មវិធីរុករកនេះប៉ុណ្ណោះ (localStorage) មិនបានធ្វើសមកាលកម្មទៅ cloud ទេ។',
    search: 'ស្វែងរកមេរៀន និងពាក្យ...', results: 'លទ្ធផលស្វែងរក', none: 'រកមិនឃើញអ្វីទេ។', ex: 'លំហាត់', weakRec: 'អ្នកនៅខ្សោយប្រធានបទនេះ។ សូមពិនិត្យ៖',
    tryHarder: 'ស្ទាត់ណាស់! សូមសាកល្បងសំណួរកម្រិតខ្ពស់។', startFirst: 'ចាប់ផ្តើមជាមួយមេរៀនដំបូងរបស់អ្នក។', allDone: 'បានបញ្ចប់មេរៀនទាំងអស់។ សូមធ្វើសំណួរចម្រុះ!',
    dueTools: 'ឧបករណ៍សិក្សា', planned: 'គ្រោងទុកសម្រាប់ដំណាក់កាលក្រោយ៖ គ្រូ AI គណនី cloud និងកម្រិត ៤-៧។'
  }
};

// ---------- Accounts ----------
DATA.accounts = {
  cash:  { type: 'asset',     name: b('Cash', 'សាច់ប្រាក់') },
  ar:    { type: 'asset',     name: b('Accounts Receivable', 'គណនីត្រូវទទួល') },
  inv:   { type: 'asset',     name: b('Inventory', 'ស្តុកទំនិញ') },
  equip: { type: 'asset',     name: b('Equipment', 'បរិក្ខារ') },
  ap:    { type: 'liability', name: b('Accounts Payable', 'គណនីត្រូវបង់') },
  loan:  { type: 'liability', name: b('Bank Loan', 'ប្រាក់កម្ចីធនាគារ') },
  cap:   { type: 'equity',    name: b("Owner's Capital", 'មូលធនម្ចាស់') },
  rev:   { type: 'revenue',   name: b('Sales Revenue', 'ចំណូលលក់') },
  rent:  { type: 'expense',   name: b('Rent Expense', 'ចំណាយជួល') },
  sal:   { type: 'expense',   name: b('Salaries Expense', 'ចំណាយប្រាក់ខែ') },
  util:  { type: 'expense',   name: b('Utilities Expense', 'ចំណាយទឹកភ្លើង') }
};
DATA.typeName = {
  asset: b('Asset', 'ទ្រព្យសកម្ម'), liability: b('Liability', 'បំណុល'), equity: b('Equity', 'មូលធន'),
  revenue: b('Revenue', 'ចំណូល'), expense: b('Expense', 'ចំណាយ')
};
DATA.debitNormal = { asset: true, expense: true, liability: false, equity: false, revenue: false };

// ---------- Topics ----------
DATA.topics = {
  intro: b('What is accounting?', 'គណនេយ្យជាអ្វី?'),
  elements: b('Assets, liabilities, equity', 'ទ្រព្យសកម្ម បំណុល មូលធន'),
  equation: b('The accounting equation', 'សមីការគណនេយ្យ'),
  cashprofit: b('Cash vs profit', 'សាច់ប្រាក់ និងប្រាក់ចំណេញ'),
  debitcredit: b('Debit and credit', 'ឥណពន្ធ និងឥណទាន'),
  entity: b('Business Entity Principle', 'គោលការណ៍អង្គភាពអាជីវកម្ម'),
  matching: b('Matching Principle', 'គោលការណ៍ផ្គូផ្គង')
};

// ---------- Lessons ----------
DATA.lessons = [
 { id: 'intro', topic: 'intro', level: 1,
   title: b('What is accounting?', 'គណនេយ្យជាអ្វី?'),
   objectives: [b('Define accounting', 'និយាយអំពីនិយមន័យនៃគណនេយ្យ'), b('Explain why businesses need it', 'ពន្យល់ពីមូលហេតុដែលអាជីវកម្មត្រូវការគណនេយ្យ'), b('Name the users of accounting information', 'រាប់ឈ្មោះអ្នកប្រើប្រាស់ព័ត៌មានគណនេយ្យ')],
   simple: b('Accounting is how a business keeps score. It writes down money coming in and money going out, so the owner knows if the business is really making money.',
             'គណនេយ្យគឺជាវិធីដែលអាជីវកម្មរក្សាពិន្ទុ។ វាកត់ត្រាប្រាក់ចូល និងប្រាក់ចេញ ដើម្បីឲ្យម្ចាស់ដឹងថាអាជីវកម្មរកលុយបានពិតប្រាកដឬអត់។'),
   detailed: b('Accounting is the process of identifying, recording, summarising and communicating financial information. Users include owners and managers (internal), and banks, tax authorities, suppliers and investors (external). Main types: financial accounting (reports for outsiders), managerial accounting (reports for decisions inside), tax accounting and auditing. The exact rules depend on the accounting standards used, such as IFRS or US GAAP.',
               'គណនេយ្យគឺជាដំណើរការកំណត់ កត់ត្រា សង្ខេប និងផ្សព្វផ្សាយព័ត៌មានហិរញ្ញវត្ថុ។ អ្នកប្រើប្រាស់រួមមានម្ចាស់ និងអ្នកគ្រប់គ្រង (ផ្ទៃក្នុង) ព្រមទាំងធនាគារ អាជ្ញាធរពន្ធដារ អ្នកផ្គត់ផ្គង់ និងវិនិយោគិន (ខាងក្រៅ)។ ប្រភេទសំខាន់ៗ៖ គណនេយ្យហិរញ្ញវត្ថុ គណនេយ្យគ្រប់គ្រង គណនេយ្យពន្ធដារ និងសវនកម្ម។ ច្បាប់ពិតប្រាកដអាស្រ័យលើស្តង់ដារគណនេយ្យដែលប្រើ ដូចជា IFRS ឬ US GAAP។'),
   example: b('Sokha runs a small coffee shop in Phnom Penh. Every evening she writes her sales and costs in a notebook. At month-end she can see her profit and decide whether to hire a helper.',
              'សុខាបើកហាងកាហ្វេតូចមួយនៅភ្នំពេញ។ រាល់ល្ងាចនាងកត់ការលក់ និងចំណាយក្នុងសៀវភៅ។ ចុងខែនាងឃើញប្រាក់ចំណេញ ហើយសម្រេចថាតើគួរជួលជំនួយការឬអត់។'),
   worked: [b('Sales for the day: $120', 'ការលក់ក្នុងមួយថ្ងៃ៖ $120'), b('Costs: coffee beans $40 + helper wages $30 = $70', 'ចំណាយ៖ គ្រាប់កាហ្វេ $40 + ប្រាក់ខែជំនួយការ $30 = $70'), b('Profit = Sales − Costs = 120 − 70 = $50', 'ប្រាក់ចំណេញ = ការលក់ − ចំណាយ = 120 − 70 = $50')],
   visual: null,
   mistakes: [b('Thinking only big companies need accounting.', 'គិតថាមានតែក្រុមហ៊ុនធំៗទេដែលត្រូវការគណនេយ្យ។'), b('Mixing personal money with business money.', 'លាយលុយផ្ទាល់ខ្លួនជាមួយលុយអាជីវកម្ម។')],
   summary: [b('Accounting records and reports financial information.', 'គណនេយ្យកត់ត្រា និងរាយការណ៍ព័ត៌មានហិរញ្ញវត្ថុ។'), b('Profit = Revenue − Expenses', 'ប្រាក់ចំណេញ = ចំណូល − ចំណាយ'), b('Rules follow standards (IFRS / US GAAP).', 'ច្បាប់អនុវត្តតាមស្តង់ដារ (IFRS / US GAAP)។')] },

 { id: 'elements', topic: 'elements', level: 1,
   title: b('Assets, liabilities and owner\'s equity', 'ទ្រព្យសកម្ម បំណុល និងមូលធនម្ចាស់'),
   objectives: [b('Define asset, liability and equity', 'កំណត់និយមន័យទ្រព្យសកម្ម បំណុល និងមូលធន'), b('Classify items correctly', 'ចាត់ថ្នាក់ធាតុឲ្យបានត្រឹមត្រូវ'), b('Calculate equity', 'គណនាមូលធន')],
   simple: b('Assets are things the business owns. Liabilities are things the business owes. Equity is what is left for the owner.',
             'ទ្រព្យសកម្មគឺជាអ្វីដែលអាជីវកម្មជាម្ចាស់។ បំណុលគឺជាអ្វីដែលអាជីវកម្មជំពាក់។ មូលធនគឺជាអ្វីដែលនៅសល់សម្រាប់ម្ចាស់។'),
   detailed: b('An asset is a resource controlled by the business that is expected to bring future benefit (cash, inventory, equipment, money customers owe = accounts receivable). A liability is an obligation to pay others (bank loan, accounts payable). Owner\'s equity is the owner\'s claim: Equity = Assets − Liabilities.',
               'ទ្រព្យសកម្មគឺជាធនធានដែលអាជីវកម្មគ្រប់គ្រង ហើយរំពឹងថានឹងផ្តល់ផលប្រយោជន៍នាពេលអនាគត (សាច់ប្រាក់ ស្តុក បរិក្ខារ ប្រាក់ដែលអតិថិជនជំពាក់ = គណនីត្រូវទទួល)។ បំណុលគឺជាកាតព្វកិច្ចត្រូវបង់អ្នកដទៃ (កម្ចីធនាគារ គណនីត្រូវបង់)។ មូលធនម្ចាស់គឺជាសិទ្ធិរបស់ម្ចាស់៖ មូលធន = ទ្រព្យសកម្ម − បំណុល។'),
   example: b('A clothing store has $3,000 cash, $2,000 of clothes in stock, and owes a supplier $1,500. Assets = $5,000, liabilities = $1,500.',
              'ហាងសម្លៀកបំពាក់មានសាច់ប្រាក់ $3,000 ស្តុកសម្លៀកបំពាក់ $2,000 ហើយជំពាក់អ្នកផ្គត់ផ្គង់ $1,500។ ទ្រព្យសកម្ម = $5,000 បំណុល = $1,500។'),
   worked: [b('Assets = 3,000 + 2,000 = $5,000', 'ទ្រព្យសកម្ម = 3,000 + 2,000 = $5,000'), b('Liabilities = $1,500', 'បំណុល = $1,500'), b('Equity = 5,000 − 1,500 = $3,500', 'មូលធន = 5,000 − 1,500 = $3,500')],
   visual: { type: 'eq', a: 5000, l: 1500, e: 3500 },
   mistakes: [b('Calling a loan an asset because the money is in your bank.', 'ហៅកម្ចីថាជាទ្រព្យសកម្ម ព្រោះលុយនៅក្នុងគណនីធនាគារ។'), b('Forgetting that money owed BY customers is an asset.', 'ភ្លេចថាលុយដែលអតិថិជនជំពាក់យើង គឺជាទ្រព្យសកម្ម។')],
   summary: [b('Equity = Assets − Liabilities', 'មូលធន = ទ្រព្យសកម្ម − បំណុល'), b('Owns = asset, owes = liability', 'ជាម្ចាស់ = ទ្រព្យសកម្ម ជំពាក់ = បំណុល')] },

 { id: 'equation', topic: 'equation', level: 1,
   title: b('The accounting equation', 'សមីការគណនេយ្យ'),
   objectives: [b('Write the accounting equation', 'សរសេរសមីការគណនេយ្យ'), b('Show how transactions change it', 'បង្ហាញពីរបៀបដែលប្រតិបត្តិការផ្លាស់ប្តូរវា'), b('Prove it always balances', 'បញ្ជាក់ថាវាតុល្យភាពជានិច្ច')],
   simple: b('What the business owns always equals what it owes plus what the owner has put in. The two sides must always match.',
             'អ្វីដែលអាជីវកម្មជាម្ចាស់ តែងតែស្មើនឹងអ្វីដែលវាជំពាក់ បូកអ្វីដែលម្ចាស់បានដាក់ចូល។ ភាគីទាំងពីរត្រូវតែស្មើគ្នាជានិច្ច។'),
   detailed: b('Assets = Liabilities + Owner\'s Equity. Every transaction has at least two effects, so the equation stays in balance. A transaction can raise one asset and lower another (total unchanged), or raise an asset and a liability/equity together.',
               'ទ្រព្យសកម្ម = បំណុល + មូលធនម្ចាស់។ រាល់ប្រតិបត្តិការមានផលប៉ះពាល់យ៉ាងតិចពីរ ដូច្នេះសមីការនៅតែតុល្យភាព។ ប្រតិបត្តិការអាចបង្កើនទ្រព្យមួយ ហើយបន្ថយទ្រព្យមួយទៀត (សរុបមិនប្តូរ) ឬបង្កើនទ្រព្យ និងបំណុល/មូលធនព្រមគ្នា។'),
   example: b('A coffee shop owner puts $5,000 into the business, then borrows $2,000, then buys a $1,200 coffee machine with cash.',
              'ម្ចាស់ហាងកាហ្វេដាក់ប្រាក់ $5,000 ចូលអាជីវកម្ម បន្ទាប់មកខ្ចី $2,000 ហើយទិញម៉ាស៊ីនកាហ្វេ $1,200 ដោយសាច់ប្រាក់។'),
   worked: [b('1) Owner invests $5,000: Assets 5,000 = Liabilities 0 + Equity 5,000', '១) ម្ចាស់ដាក់ទុន $5,000៖ ទ្រព្យ 5,000 = បំណុល 0 + មូលធន 5,000'), b('2) Borrow $2,000: Assets 7,000 = Liabilities 2,000 + Equity 5,000', '២) ខ្ចី $2,000៖ ទ្រព្យ 7,000 = បំណុល 2,000 + មូលធន 5,000'), b('3) Buy machine $1,200 cash: cash 5,800 + equipment 1,200 = still 7,000', '៣) ទិញម៉ាស៊ីន $1,200 សាច់ប្រាក់៖ សាច់ប្រាក់ 5,800 + បរិក្ខារ 1,200 = នៅតែ 7,000')],
   visual: { type: 'eq', a: 7000, l: 2000, e: 5000 },
   mistakes: [b('Thinking buying equipment with cash increases total assets.', 'គិតថាការទិញបរិក្ខារដោយសាច់ប្រាក់បង្កើនទ្រព្យសរុប។'), b('Forgetting that both sides must be equal.', 'ភ្លេចថាភាគីទាំងពីរត្រូវស្មើគ្នា។')],
   summary: [b('Assets = Liabilities + Equity', 'ទ្រព្យសកម្ម = បំណុល + មូលធន'), b('Every transaction keeps the equation balanced.', 'រាល់ប្រតិបត្តិការរក្សាសមីការឲ្យតុល្យភាព។')] },

 { id: 'cashprofit', topic: 'cashprofit', level: 1,
   title: b('Cash versus profit', 'សាច់ប្រាក់ និងប្រាក់ចំណេញ'),
   objectives: [b('Tell cash and profit apart', 'ញែកសាច់ប្រាក់ និងប្រាក់ចំណេញ'), b('Explain why profit can be high while cash is low', 'ពន្យល់ថាហេតុអ្វីចំណេញខ្ពស់ តែសាច់ប្រាក់ទាប')],
   simple: b('Cash is the money in your hand or bank. Profit is what you earned minus what you spent. They are not the same thing.',
             'សាច់ប្រាក់គឺជាលុយក្នុងដៃ ឬក្នុងធនាគារ។ ប្រាក់ចំណេញគឺជាអ្វីដែលរកបាន ដកអ្វីដែលបានចំណាយ។ វាមិនដូចគ្នាទេ។'),
   detailed: b('Profit = Revenue − Expenses. Under accrual accounting, revenue is recorded when earned, even if the customer has not paid yet. So a business can show a profit but still run out of cash if customers pay late.',
               'ប្រាក់ចំណេញ = ចំណូល − ចំណាយ។ ក្រោមគណនេយ្យបែប accrual ចំណូលត្រូវបានកត់ត្រានៅពេលរកបាន ទោះអតិថិជនមិនទាន់បង់ក៏ដោយ។ ដូច្នេះអាជីវកម្មអាចមានចំណេញ ប៉ុន្តែអស់សាច់ប្រាក់ ប្រសិនបើអតិថិជនបង់យឺត។'),
   example: b('An online shop sells $300 of goods on credit to a customer. Revenue rises $300, but no cash arrives until the customer pays next week.',
              'ហាងអនឡាញលក់ទំនិញ $300 ជំពាក់ឲ្យអតិថិជន។ ចំណូលកើន $300 ប៉ុន្តែគ្មានសាច់ប្រាក់ចូលរហូតដល់អតិថិជនបង់នៅសប្តាហ៍ក្រោយ។'),
   worked: [b('Revenue $2,000 − Expenses $1,400 = Profit $600', 'ចំណូល $2,000 − ចំណាយ $1,400 = ចំណេញ $600'), b('Customers still owe $900 → cash received only $1,100', 'អតិថិជននៅជំពាក់ $900 → សាច់ប្រាក់ទទួលបានត្រឹម $1,100'), b('Profit $600 but cash movement is different.', 'ចំណេញ $600 ប៉ុន្តែចលនាសាច់ប្រាក់ខុសគ្នា។')],
   visual: null,
   mistakes: [b('Assuming a profitable business always has lots of cash.', 'សន្មតថាអាជីវកម្មមានចំណេញតែងតែមានសាច់ប្រាក់ច្រើន។'), b('Treating a loan as revenue.', 'ចាត់ទុកកម្ចីជាចំណូល។')],
   summary: [b('Profit = Revenue − Expenses', 'ចំណេញ = ចំណូល − ចំណាយ'), b('Profit ≠ cash', 'ចំណេញ ≠ សាច់ប្រាក់')] },

 { id: 'debitcredit', topic: 'debitcredit', level: 3,
   title: b('Debit and credit', 'ឥណពន្ធ (Debit) និងឥណទាន (Credit)'),
   objectives: [b('Know that debit = left and credit = right', 'ដឹងថា debit = ឆ្វេង credit = ស្តាំ'), b('Apply the increase/decrease rules to 5 account types', 'អនុវត្តច្បាប់កើន/ថយលើគណនី ៥ ប្រភេទ'), b('Write simple journal entries', 'សរសេរកំណត់ហេតុសាមញ្ញ')],
   simple: b('Debit and credit are just LEFT and RIGHT. They do not mean good or bad. Each transaction needs one debit and one credit of the same amount.',
             'Debit និង Credit គ្រាន់តែជា ឆ្វេង និង ស្តាំ។ វាមិនមានន័យថាល្អ ឬអាក្រក់ទេ។ រាល់ប្រតិបត្តិការត្រូវមាន debit មួយ និង credit មួយ ក្នុងចំនួនស្មើគ្នា។'),
   detailed: b('Assets and expenses INCREASE with a debit and decrease with a credit. Liabilities, equity and revenue INCREASE with a credit and decrease with a debit. Normal balances: assets and expenses are debit; liabilities, equity and revenue are credit. In every entry, total debits = total credits.',
               'ទ្រព្យសកម្ម និងចំណាយ កើនដោយ debit ហើយថយដោយ credit។ បំណុល មូលធន និងចំណូល កើនដោយ credit ហើយថយដោយ debit។ សមតុល្យធម្មតា៖ ទ្រព្យ និងចំណាយជា debit បំណុល មូលធន និងចំណូលជា credit។ ក្នុងរាល់កំណត់ត្រា ឥណពន្ធសរុប = ឥណទានសរុប។'),
   example: b('The owner puts $3,000 into the business bank account. Cash (asset) goes up → debit Cash. Owner\'s capital (equity) goes up → credit Capital.',
              'ម្ចាស់ដាក់ប្រាក់ $3,000 ចូលគណនីធនាគារអាជីវកម្ម។ សាច់ប្រាក់ (ទ្រព្យ) កើន → debit សាច់ប្រាក់។ មូលធនម្ចាស់ (មូលធន) កើន → credit មូលធន។'),
   worked: [b('Dr Cash 3,000 (asset increases)', 'Dr សាច់ប្រាក់ 3,000 (ទ្រព្យកើន)'), b('Cr Owner\'s Capital 3,000 (equity increases)', 'Cr មូលធនម្ចាស់ 3,000 (មូលធនកើន)'), b('Debits 3,000 = Credits 3,000 ✔', 'ឥណពន្ធ 3,000 = ឥណទាន 3,000 ✔')],
   visual: { type: 'taccount' },
   mistakes: [b('Thinking debit always means "decrease".', 'គិតថា debit តែងតែមានន័យថា "ថយ"។'), b('Debiting and crediting the same side twice.', 'ដាក់ debit ឬ credit ខាងតែមួយពីរដង។')],
   summary: [b('Dr = left, Cr = right', 'Dr = ឆ្វេង Cr = ស្តាំ'), b('Assets & expenses: Dr increases', 'ទ្រព្យ និងចំណាយ៖ Dr កើន'), b('Liabilities, equity, revenue: Cr increases', 'បំណុល មូលធន ចំណូល៖ Cr កើន')] },

 { id: 'entity', topic: 'entity', level: 2,
   title: b('Business Entity Principle', 'គោលការណ៍អង្គភាពអាជីវកម្ម'),
   objectives: [b('Explain the business entity principle', 'ពន្យល់គោលការណ៍អង្គភាពអាជីវកម្ម'), b('Separate owner and business transactions', 'ញែកប្រតិបត្តិការម្ចាស់ និងអាជីវកម្ម')],
   simple: b('The business and its owner are two different "people" in the books. Keep their money separate.',
             'អាជីវកម្ម និងម្ចាស់គឺជា "មនុស្ស" ពីរផ្សេងគ្នាក្នុងបញ្ជីគណនេយ្យ។ ត្រូវញែកលុយរបស់ពួកគេ។'),
   detailed: b('Accounting records only the transactions of the business, not the owner\'s personal ones. If the owner takes cash for personal use, it is a drawing (a reduction of equity), not a business expense. This principle applies under both IFRS and US GAAP.',
               'គណនេយ្យកត់ត្រាតែប្រតិបត្តិការរបស់អាជីវកម្ម មិនមែនរបស់ម្ចាស់ផ្ទាល់ខ្លួនទេ។ បើម្ចាស់យកសាច់ប្រាក់ទៅប្រើផ្ទាល់ខ្លួន នោះជាការដកប្រាក់ (ការថយមូលធន) មិនមែនចំណាយអាជីវកម្មទេ។ គោលការណ៍នេះអនុវត្តទាំងក្រោម IFRS និង US GAAP។'),
   example: b('A freelancer designer pays $60 for a family dinner from the business account. This is not a business expense; it is a drawing.',
              'អ្នករចនាឯករាជ្យបង់ $60 សម្រាប់អាហារពេលល្ងាចគ្រួសារពីគណនីអាជីវកម្ម។ នេះមិនមែនជាចំណាយអាជីវកម្មទេ គឺជាការដកប្រាក់។'),
   worked: [b('Wrong: Dr Office Expense 60 / Cr Cash 60', 'ខុស៖ Dr ចំណាយការិយាល័យ 60 / Cr សាច់ប្រាក់ 60'), b('Right: Dr Owner\'s Drawings 60 / Cr Cash 60', 'ត្រូវ៖ Dr ការដកប្រាក់ម្ចាស់ 60 / Cr សាច់ប្រាក់ 60'), b('Drawings reduce equity, not profit.', 'ការដកប្រាក់កាត់បន្ថយមូលធន មិនមែនប្រាក់ចំណេញទេ។')],
   visual: null,
   mistakes: [b('Recording personal bills as business expenses.', 'កត់វិក្កយបត្រផ្ទាល់ខ្លួនជាចំណាយអាជីវកម្ម។')],
   summary: [b('Business ≠ owner in the books.', 'អាជីវកម្ម ≠ ម្ចាស់ក្នុងបញ្ជី។'), b('Personal use of cash = drawings.', 'ការប្រើសាច់ប្រាក់ផ្ទាល់ខ្លួន = ការដកប្រាក់។')] },

 { id: 'matching', topic: 'matching', level: 2,
   title: b('Matching Principle', 'គោលការណ៍ផ្គូផ្គង'),
   objectives: [b('Explain the matching principle', 'ពន្យល់គោលការណ៍ផ្គូផ្គង'), b('Place expenses in the right period', 'ដាក់ចំណាយក្នុងអំឡុងពេលត្រឹមត្រូវ')],
   simple: b('Record an expense in the same period as the sales it helped to make.',
             'កត់ចំណាយក្នុងអំឡុងពេលតែមួយជាមួយការលក់ដែលវាជួយបង្កើត។'),
   detailed: b('Expenses are matched with the revenues they helped earn, in the same accounting period, regardless of when cash is paid. This gives a fair profit for each period. It works with accrual accounting and is reflected in IFRS and US GAAP, though the wording of the standards differs.',
               'ចំណាយត្រូវបានផ្គូផ្គងជាមួយចំណូលដែលវាជួយរក ក្នុងអំឡុងពេលគណនេយ្យតែមួយ ទោះសាច់ប្រាក់បង់ពេលណាក៏ដោយ។ នេះធ្វើឲ្យប្រាក់ចំណេញសមរម្យក្នុងរយៈពេលនីមួយៗ។ វាដំណើរការជាមួយគណនេយ្យ accrual ហើយឆ្លុះបញ្ចាំងក្នុង IFRS និង US GAAP ទោះពាក្យក្នុងស្តង់ដារខុសគ្នាក៏ដោយ។'),
   example: b('A restaurant uses $400 of electricity in December but receives the bill and pays in January. The $400 belongs to December\'s expenses.',
              'ភោជនីយដ្ឋានប្រើអគ្គិសនី $400 ក្នុងខែធ្នូ តែទទួលវិក្កយបត្រ និងបង់ក្នុងខែមករា។ $400 នេះជាចំណាយរបស់ខែធ្នូ។'),
   worked: [b('December revenue: $3,000', 'ចំណូលខែធ្នូ៖ $3,000'), b('December expenses: wages 900 + electricity 400 = $1,300', 'ចំណាយខែធ្នូ៖ ប្រាក់ខែ 900 + អគ្គិសនី 400 = $1,300'), b('December profit = 3,000 − 1,300 = $1,700', 'ចំណេញខែធ្នូ = 3,000 − 1,300 = $1,700')],
   visual: null,
   mistakes: [b('Recording the expense only when cash is paid.', 'កត់ចំណាយតែពេលបង់សាច់ប្រាក់។')],
   summary: [b('Match expenses to the revenue they helped earn.', 'ផ្គូផ្គងចំណាយជាមួយចំណូលដែលវាជួយរក។'), b('Timing of cash does not decide the period.', 'ពេលបង់សាច់ប្រាក់មិនកំណត់អំឡុងពេលទេ។')] }
];

DATA.paths = [
  { id: 'p1', name: b('Level 1: Accounting Fundamentals', 'កម្រិត ១៖ មូលដ្ឋានគ្រឹះគណនេយ្យ'), lessons: ['intro', 'elements', 'equation', 'cashprofit'] },
  { id: 'p2', name: b('Level 2: Principles of Accounting', 'កម្រិត ២៖ គោលការណ៍គណនេយ្យ'), lessons: ['entity', 'matching'] },
  { id: 'p3', name: b('Level 3: Double-Entry Bookkeeping', 'កម្រិត ៣៖ ការកត់ត្រាគូ'), lessons: ['debitcredit'] }
];
DATA.planned = [
  b('Level 4: The Accounting Cycle', 'កម្រិត ៤៖ វដ្តគណនេយ្យ'), b('Level 5: Financial Statements', 'កម្រិត ៥៖ របាយការណ៍ហិរញ្ញវត្ថុ'),
  b('Level 6: Practical Accounting', 'កម្រិត ៦៖ គណនេយ្យអនុវត្ត'), b('Level 7: Intermediate & Advanced', 'កម្រិត ៧៖ មធ្យម និងខ្ពស់')
];

// ---------- Questions ----------
// Q(id, topic, level, [qEn,qKm], options[[en,km]...] or null for true/false, answerIndex (tf: 0=true,1=false), [expEn,expKm])
DATA.questions = [];
function Q(id, topic, level, q, opts, ans, exp) { DATA.questions.push({ id, topic, level, q: b(q[0], q[1]), opts: opts && opts.map(o => b(o[0], o[1])), tf: !opts, ans, exp: b(exp[0], exp[1]) }); }

Q('q1', 'intro', 1, ['What is the main purpose of accounting?', 'គោលបំណងចម្បងនៃគណនេយ្យគឺអ្វី?'],
  [['Record and communicate financial information', 'កត់ត្រា និងផ្សព្វផ្សាយព័ត៌មានហិរញ្ញវត្ថុ'], ['Advertise products', 'ផ្សព្វផ្សាយផលិតផល'], ['Produce goods', 'ផលិតទំនិញ'], ['Hire staff', 'ជួលបុគ្គលិក']], 0,
  ['Accounting identifies, records and reports financial information to decision makers.', 'គណនេយ្យកំណត់ កត់ត្រា និងរាយការណ៍ព័ត៌មានហិរញ្ញវត្ថុដល់អ្នកសម្រេចចិត្ត។']);
Q('q2', 'intro', 1, ['Only large companies need accounting.', 'មានតែក្រុមហ៊ុនធំៗទេដែលត្រូវការគណនេយ្យ។'], null, 1,
  ['Even a small coffee shop needs records to know its profit.', 'សូម្បីហាងកាហ្វេតូចក៏ត្រូវការកំណត់ត្រាដើម្បីដឹងប្រាក់ចំណេញដែរ។']);
Q('q3', 'intro', 1, ['Which is an EXTERNAL user of accounting information?', 'តើអ្នកណាជាអ្នកប្រើប្រាស់ព័ត៌មានគណនេយ្យខាងក្រៅ?'],
  [['The business owner', 'ម្ចាស់អាជីវកម្ម'], ['A bank deciding on a loan', 'ធនាគារដែលកំពុងសម្រេចផ្តល់កម្ចី'], ['The shop manager', 'អ្នកគ្រប់គ្រងហាង'], ['The cashier', 'អ្នកគិតលុយ']], 1,
  ['Banks are outside the business; owners and managers are internal users.', 'ធនាគារស្ថិតនៅខាងក្រៅអាជីវកម្ម រីឯម្ចាស់ និងអ្នកគ្រប់គ្រងជាអ្នកប្រើផ្ទៃក្នុង។']);
Q('q4', 'elements', 1, ['Money a customer owes you is a(n):', 'ប្រាក់ដែលអតិថិជនជំពាក់អ្នកគឺជា៖'],
  [['Liability', 'បំណុល'], ['Asset (receivable)', 'ទ្រព្យសកម្ម (គណនីត្រូវទទួល)'], ['Equity', 'មូលធន'], ['Expense', 'ចំណាយ']], 1,
  ['It is something the business will collect, so it is an asset called accounts receivable.', 'វាជាអ្វីដែលអាជីវកម្មនឹងប្រមូលបាន ដូច្នេះជាទ្រព្យសកម្មហៅថាគណនីត្រូវទទួល។']);
Q('q5', 'elements', 1, ['A bank loan is a(n):', 'កម្ចីធនាគារគឺជា៖'],
  [['Asset', 'ទ្រព្យសកម្ម'], ['Liability', 'បំណុល'], ['Revenue', 'ចំណូល'], ['Equity', 'មូលធន']], 1,
  ['The business must repay it, so it is a liability.', 'អាជីវកម្មត្រូវសងវា ដូច្នេះជាបំណុល។']);
Q('q6', 'elements', 2, ["Owner's equity equals:", 'មូលធនម្ចាស់ស្មើនឹង៖'],
  [['Assets + Liabilities', 'ទ្រព្យ + បំណុល'], ['Assets − Liabilities', 'ទ្រព្យ − បំណុល'], ['Liabilities − Assets', 'បំណុល − ទ្រព្យ'], ['Revenue − Expenses', 'ចំណូល − ចំណាយ']], 1,
  ['Equity is what remains after paying all liabilities from assets.', 'មូលធនគឺជាអ្វីដែលនៅសល់បន្ទាប់ពីយកទ្រព្យសងបំណុលទាំងអស់។']);
Q('q7', 'equation', 2, ['Assets are $9,000 and liabilities are $3,500. What is equity?', 'ទ្រព្យ $9,000 បំណុល $3,500។ តើមូលធនប៉ុន្មាន?'],
  [['$12,500', '$12,500'], ['$5,500', '$5,500'], ['$3,500', '$3,500'], ['$6,500', '$6,500']], 1,
  ['9,000 − 3,500 = 5,500.', '9,000 − 3,500 = 5,500។']);
Q('q8', 'equation', 2, ['A business buys equipment for $1,000 cash. What happens to total assets?', 'អាជីវកម្មទិញបរិក្ខារ $1,000 ដោយសាច់ប្រាក់។ តើទ្រព្យសរុបមានអ្វីកើតឡើង?'],
  [['Increase by $1,000', 'កើន $1,000'], ['Unchanged: equipment up, cash down', 'មិនប្តូរ៖ បរិក្ខារកើន សាច់ប្រាក់ថយ'], ['Decrease by $1,000', 'ថយ $1,000'], ['Liabilities rise', 'បំណុលកើន']], 1,
  ['One asset rises and another falls by the same amount.', 'ទ្រព្យមួយកើន ហើយមួយទៀតថយស្មើគ្នា។']);
Q('q9', 'equation', 1, ['The accounting equation must always balance.', 'សមីការគណនេយ្យត្រូវតែតុល្យភាពជានិច្ច។'], null, 0,
  ['Assets = Liabilities + Equity after every transaction.', 'ទ្រព្យ = បំណុល + មូលធន បន្ទាប់ពីរាល់ប្រតិបត្តិការ។']);
Q('q10', 'cashprofit', 2, ['A shop sells goods on credit for $300. What is the effect?', 'ហាងលក់ទំនិញជំពាក់ $300។ តើមានផលអ្វី?'],
  [['Cash up $300 and profit up $300', 'សាច់ប្រាក់កើន $300 ចំណេញកើន $300'], ['Profit up $300 but cash unchanged', 'ចំណេញកើន $300 តែសាច់ប្រាក់មិនប្តូរ'], ['Only cash goes up', 'មានតែសាច់ប្រាក់កើន'], ['Nothing changes', 'គ្មានអ្វីប្តូរ']], 1,
  ['Revenue is earned (receivable up) but no cash has arrived yet.', 'ចំណូលរកបាន (គណនីត្រូវទទួលកើន) ប៉ុន្តែមិនទាន់មានសាច់ប្រាក់ចូលទេ។']);
Q('q11', 'cashprofit', 1, ['Revenue $2,000 and expenses $1,400. What is profit?', 'ចំណូល $2,000 ចំណាយ $1,400។ ចំណេញប៉ុន្មាន?'],
  [['$3,400', '$3,400'], ['$600', '$600'], ['$1,400', '$1,400'], ['$2,000', '$2,000']], 1,
  ['2,000 − 1,400 = 600.', '2,000 − 1,400 = 600។']);
Q('q12', 'cashprofit', 2, ['A profitable business can still run out of cash.', 'អាជីវកម្មមានចំណេញអាចអស់សាច់ប្រាក់បាន។'], null, 0,
  ['If customers pay late, profit exists on paper while cash is short.', 'បើអតិថិជនបង់យឺត ចំណេញមានលើក្រដាស តែសាច់ប្រាក់ខ្វះ។']);
Q('q13', 'debitcredit', 1, ['Which account INCREASES with a debit?', 'គណនីណាកើនដោយ debit?'],
  [['Cash', 'សាច់ប្រាក់'], ['Bank Loan', 'ប្រាក់កម្ចីធនាគារ'], ["Owner's Capital", 'មូលធនម្ចាស់'], ['Sales Revenue', 'ចំណូលលក់']], 0,
  ['Assets increase with debits. Liabilities, equity and revenue increase with credits.', 'ទ្រព្យកើនដោយ debit។ បំណុល មូលធន ចំណូល កើនដោយ credit។']);
Q('q14', 'debitcredit', 1, ['The owner invests cash. The entry is:', 'ម្ចាស់ដាក់ទុនជាសាច់ប្រាក់។ កំណត់ត្រាគឺ៖'],
  [['Dr Cash / Cr Capital', 'Dr សាច់ប្រាក់ / Cr មូលធន'], ['Dr Capital / Cr Cash', 'Dr មូលធន / Cr សាច់ប្រាក់'], ['Dr Cash / Cr Revenue', 'Dr សាច់ប្រាក់ / Cr ចំណូល'], ['Dr Loan / Cr Cash', 'Dr កម្ចី / Cr សាច់ប្រាក់']], 0,
  ['Cash (asset) rises → debit. Capital (equity) rises → credit.', 'សាច់ប្រាក់ (ទ្រព្យ) កើន → debit។ មូលធនកើន → credit។']);
Q('q15', 'debitcredit', 2, ['The business pays rent $400 in cash. The entry is:', 'អាជីវកម្មបង់ថ្លៃជួល $400 ជាសាច់ប្រាក់។ កំណត់ត្រាគឺ៖'],
  [['Dr Rent Expense / Cr Cash', 'Dr ចំណាយជួល / Cr សាច់ប្រាក់'], ['Dr Cash / Cr Rent Expense', 'Dr សាច់ប្រាក់ / Cr ចំណាយជួល'], ['Dr Rent Expense / Cr Revenue', 'Dr ចំណាយជួល / Cr ចំណូល'], ['Dr Capital / Cr Cash', 'Dr មូលធន / Cr សាច់ប្រាក់']], 0,
  ['Expenses increase with a debit; cash (asset) decreases with a credit.', 'ចំណាយកើនដោយ debit សាច់ប្រាក់ (ទ្រព្យ) ថយដោយ credit។']);
Q('q16', 'debitcredit', 3, ['A debit always means an increase.', 'Debit តែងតែមានន័យថាកើន។'], null, 1,
  ['A debit increases assets and expenses but decreases liabilities, equity and revenue.', 'Debit បង្កើនទ្រព្យ និងចំណាយ ប៉ុន្តែបន្ថយបំណុល មូលធន និងចំណូល។']);
Q('q17', 'debitcredit', 2, ['A customer pays $300 they owed. The entry is:', 'អតិថិជនបង់ $300 ដែលជំពាក់។ កំណត់ត្រាគឺ៖'],
  [['Dr Cash / Cr Accounts Receivable', 'Dr សាច់ប្រាក់ / Cr គណនីត្រូវទទួល'], ['Dr Accounts Receivable / Cr Cash', 'Dr គណនីត្រូវទទួល / Cr សាច់ប្រាក់'], ['Dr Cash / Cr Revenue', 'Dr សាច់ប្រាក់ / Cr ចំណូល'], ['Dr Revenue / Cr Cash', 'Dr ចំណូល / Cr សាច់ប្រាក់']], 0,
  ['Cash rises (debit); the receivable is collected so it falls (credit). Revenue was already recorded at the sale.', 'សាច់ប្រាក់កើន (debit) គណនីត្រូវទទួលត្រូវបានប្រមូលដូច្នេះថយ (credit)។ ចំណូលបានកត់ត្រារួចនៅពេលលក់។']);
Q('q18', 'entity', 2, ['The owner pays a personal holiday from business cash. Under the entity principle it is:', 'ម្ចាស់បង់ដំណើរកំសាន្តផ្ទាល់ខ្លួនពីសាច់ប្រាក់អាជីវកម្ម។ តាមគោលការណ៍អង្គភាព វាគឺជា៖'],
  [['A business expense', 'ចំណាយអាជីវកម្ម'], ["Owner's drawings, not a business expense", 'ការដកប្រាក់ម្ចាស់ មិនមែនចំណាយអាជីវកម្ម'], ['Revenue', 'ចំណូល'], ['Ignored completely', 'មិនកត់ត្រាទាល់តែសោះ']], 1,
  ['Personal use of business cash is a drawing, which reduces equity.', 'ការប្រើសាច់ប្រាក់អាជីវកម្មផ្ទាល់ខ្លួនគឺជាការដកប្រាក់ ដែលកាត់បន្ថយមូលធន។']);
Q('q19', 'entity', 1, ['The business and its owner are treated as separate entities in accounting.', 'អាជីវកម្ម និងម្ចាស់ត្រូវបានចាត់ទុកជាអង្គភាពដាច់ដោយឡែកក្នុងគណនេយ្យ។'], null, 0,
  ['This is the business entity principle.', 'នេះជាគោលការណ៍អង្គភាពអាជីវកម្ម។']);
Q('q20', 'matching', 2, ['December electricity is used in December but paid in January. Which period gets the expense?', 'អគ្គិសនីប្រើក្នុងខែធ្នូ តែបង់ខែមករា។ ចំណាយនេះជារបស់ខែណា?'],
  [['January', 'ខែមករា'], ['December', 'ខែធ្នូ'], ['Neither', 'គ្មានខែណាទេ'], ['Whenever cash is paid', 'ពេលណាបង់សាច់ប្រាក់']], 1,
  ['Match the expense to the period in which it helped earn revenue.', 'ផ្គូផ្គងចំណាយទៅអំឡុងពេលដែលវាជួយរកចំណូល។']);
Q('q21', 'matching', 1, ['The matching principle says to:', 'គោលការណ៍ផ្គូផ្គងនិយាយថា៖'],
  [['Match expenses with the revenues they helped earn', 'ផ្គូផ្គងចំណាយជាមួយចំណូលដែលវាជួយរក'], ['Match assets with liabilities', 'ផ្គូផ្គងទ្រព្យជាមួយបំណុល'], ['Match debits with credits only', 'ផ្គូផ្គងតែ debit ជាមួយ credit'], ['Match cash with profit', 'ផ្គូផ្គងសាច់ប្រាក់ជាមួយចំណេញ']], 0,
  ['Expenses belong in the same period as the related revenue.', 'ចំណាយជារបស់អំឡុងពេលតែមួយជាមួយចំណូលពាក់ព័ន្ធ។']);
Q('q22', 'matching', 2, ['Under the matching principle, an expense is recorded only when cash is paid.', 'តាមគោលការណ៍ផ្គូផ្គង ចំណាយត្រូវកត់តែពេលបង់សាច់ប្រាក់។'], null, 1,
  ['Timing is based on when revenue is earned, not on cash payment.', 'ពេលវេលាផ្អែកលើពេលរកចំណូល មិនមែនពេលបង់សាច់ប្រាក់ទេ។']);

// ---------- Journal exercises ----------
DATA.exercises = [
  { id: 'e1', text: b('The owner invests $3,000 cash in the business.', 'ម្ចាស់ដាក់ទុន $3,000 ជាសាច់ប្រាក់ចូលអាជីវកម្ម។'), lines: [['cash', 'dr', 3000], ['cap', 'cr', 3000]],
    why: b('Cash (asset) increases → debit. Capital (equity) increases → credit.', 'សាច់ប្រាក់ (ទ្រព្យ) កើន → debit។ មូលធន កើន → credit។') },
  { id: 'e2', text: b('The business buys equipment for $800 on credit (pay later).', 'អាជីវកម្មទិញបរិក្ខារ $800 ជំពាក់ (បង់ក្រោយ)។'), lines: [['equip', 'dr', 800], ['ap', 'cr', 800]],
    why: b('Equipment (asset) increases → debit. Accounts Payable (liability) increases → credit.', 'បរិក្ខារ (ទ្រព្យ) កើន → debit។ គណនីត្រូវបង់ (បំណុល) កើន → credit។') },
  { id: 'e3', text: b('The business sells goods for $450 cash.', 'អាជីវកម្មលក់ទំនិញបាន $450 សាច់ប្រាក់។'), lines: [['cash', 'dr', 450], ['rev', 'cr', 450]],
    why: b('Cash increases → debit. Revenue increases → credit.', 'សាច់ប្រាក់កើន → debit។ ចំណូលកើន → credit។') },
  { id: 'e4', text: b('The business pays $250 rent in cash.', 'អាជីវកម្មបង់ថ្លៃជួល $250 សាច់ប្រាក់។'), lines: [['rent', 'dr', 250], ['cash', 'cr', 250]],
    why: b('Rent expense increases → debit. Cash decreases → credit.', 'ចំណាយជួលកើន → debit។ សាច់ប្រាក់ថយ → credit។') },
  { id: 'e5', text: b('The business provides services worth $600 on credit.', 'អាជីវកម្មផ្តល់សេវាតម្លៃ $600 ជំពាក់។'), lines: [['ar', 'dr', 600], ['rev', 'cr', 600]],
    why: b('Receivable (asset) increases → debit. Revenue is earned now → credit.', 'គណនីត្រូវទទួល (ទ្រព្យ) កើន → debit។ ចំណូលរកបានឥឡូវនេះ → credit។') },
  { id: 'e6', text: b('The business pays its supplier $800 owed (accounts payable).', 'អាជីវកម្មបង់អ្នកផ្គត់ផ្គង់ $800 ដែលជំពាក់ (គណនីត្រូវបង់)។'), lines: [['ap', 'dr', 800], ['cash', 'cr', 800]],
    why: b('Liability decreases → debit. Cash decreases → credit.', 'បំណុលថយ → debit។ សាច់ប្រាក់ថយ → credit។') },
  { id: 'e7', text: b('The business pays $120 for electricity in cash.', 'អាជីវកម្មបង់ថ្លៃអគ្គិសនី $120 សាច់ប្រាក់។'), lines: [['util', 'dr', 120], ['cash', 'cr', 120]],
    why: b('Utilities expense increases → debit. Cash decreases → credit.', 'ចំណាយទឹកភ្លើងកើន → debit។ សាច់ប្រាក់ថយ → credit។') }
];

// ---------- Simulator transactions ----------
DATA.simTx = [
  { text: b('Owner invests $5,000.', 'ម្ចាស់ដាក់ទុន $5,000។'), dr: 'cash', cr: 'cap', amt: 5000, why: b('Cash (asset) rises → debit. Owner\'s Capital (equity) rises → credit.', 'សាច់ប្រាក់ (ទ្រព្យ) កើន → debit។ មូលធនម្ចាស់ កើន → credit។'), effect: b('Assets +5,000 = Equity +5,000', 'ទ្រព្យ +5,000 = មូលធន +5,000') },
  { text: b('Business borrows $2,000 from a bank.', 'អាជីវកម្មខ្ចីប្រាក់ $2,000 ពីធនាគារ។'), dr: 'cash', cr: 'loan', amt: 2000, why: b('Cash rises → debit. Bank Loan (liability) rises → credit.', 'សាច់ប្រាក់កើន → debit។ កម្ចីធនាគារ (បំណុល) កើន → credit។'), effect: b('Assets +2,000 = Liabilities +2,000', 'ទ្រព្យ +2,000 = បំណុល +2,000') },
  { text: b('Business buys equipment for $1,200 cash.', 'អាជីវកម្មទិញបរិក្ខារ $1,200 ដោយសាច់ប្រាក់។'), dr: 'equip', cr: 'cash', amt: 1200, why: b('Equipment rises → debit. Cash falls → credit.', 'បរិក្ខារកើន → debit។ សាច់ប្រាក់ថយ → credit។'), effect: b('Assets +1,200 and −1,200 (total unchanged)', 'ទ្រព្យ +1,200 និង −1,200 (សរុបមិនប្តូរ)') },
  { text: b('Business buys inventory for $500 cash.', 'អាជីវកម្មទិញស្តុក $500 ដោយសាច់ប្រាក់។'), dr: 'inv', cr: 'cash', amt: 500, why: b('Inventory rises → debit. Cash falls → credit.', 'ស្តុកកើន → debit។ សាច់ប្រាក់ថយ → credit។'), effect: b('Assets +500 and −500 (total unchanged)', 'ទ្រព្យ +500 និង −500 (សរុបមិនប្តូរ)') },
  { text: b('Business sells products for $800 cash.', 'អាជីវកម្មលក់ទំនិញបាន $800 សាច់ប្រាក់។'), dr: 'cash', cr: 'rev', amt: 800, why: b('Cash rises → debit. Revenue rises → credit. (Cost of goods sold is skipped here to keep the MVP simple.)', 'សាច់ប្រាក់កើន → debit។ ចំណូលកើន → credit។ (ថ្លៃដើមទំនិញលក់ត្រូវរំលងក្នុងកំណែសាមញ្ញនេះ)។'), effect: b('Assets +800 = Equity +800 (via revenue)', 'ទ្រព្យ +800 = មូលធន +800 (តាមរយៈចំណូល)') },
  { text: b('Business sells products worth $300 on credit.', 'អាជីវកម្មលក់ទំនិញតម្លៃ $300 ជំពាក់។'), dr: 'ar', cr: 'rev', amt: 300, why: b('Accounts Receivable rises → debit. Revenue is earned → credit.', 'គណនីត្រូវទទួលកើន → debit។ ចំណូលរកបាន → credit។'), effect: b('Assets +300 = Equity +300 (via revenue)', 'ទ្រព្យ +300 = មូលធន +300 (តាមរយៈចំណូល)') },
  { text: b('Business pays rent of $400.', 'អាជីវកម្មបង់ថ្លៃជួល $400។'), dr: 'rent', cr: 'cash', amt: 400, why: b('Rent Expense rises → debit. Cash falls → credit.', 'ចំណាយជួលកើន → debit។ សាច់ប្រាក់ថយ → credit។'), effect: b('Assets −400 = Equity −400 (via expense)', 'ទ្រព្យ −400 = មូលធន −400 (តាមរយៈចំណាយ)') },
  { text: b('Business pays employee salaries of $600.', 'អាជីវកម្មបង់ប្រាក់ខែបុគ្គលិក $600។'), dr: 'sal', cr: 'cash', amt: 600, why: b('Salaries Expense rises → debit. Cash falls → credit.', 'ចំណាយប្រាក់ខែកើន → debit។ សាច់ប្រាក់ថយ → credit។'), effect: b('Assets −600 = Equity −600 (via expense)', 'ទ្រព្យ −600 = មូលធន −600 (តាមរយៈចំណាយ)') },
  { text: b('A customer pays their $300 outstanding balance.', 'អតិថិជនបង់សមតុល្យ $300 ដែលជំពាក់។'), dr: 'cash', cr: 'ar', amt: 300, why: b('Cash rises → debit. Receivable falls → credit. No new revenue: it was recorded at the credit sale.', 'សាច់ប្រាក់កើន → debit។ គណនីត្រូវទទួលថយ → credit។ គ្មានចំណូលថ្មីទេ៖ បានកត់នៅពេលលក់ជំពាក់។'), effect: b('Assets +300 and −300 (total unchanged)', 'ទ្រព្យ +300 និង −300 (សរុបមិនប្តូរ)') },
  { text: b('Business repays $500 of its bank loan.', 'អាជីវកម្មសងកម្ចីធនាគារ $500។'), dr: 'loan', cr: 'cash', amt: 500, why: b('Bank Loan (liability) falls → debit. Cash falls → credit.', 'កម្ចីធនាគារ (បំណុល) ថយ → debit។ សាច់ប្រាក់ថយ → credit។'), effect: b('Assets −500 = Liabilities −500', 'ទ្រព្យ −500 = បំណុល −500') }
];

// ---------- Flashcards / glossary ----------
DATA.cards = [
  { id: 'c1', term: b('Asset', 'ទ្រព្យសកម្ម'), def: b('Something the business owns.', 'អ្វីដែលអាជីវកម្មជាម្ចាស់។'), detail: b('A resource controlled by the business that is expected to bring future benefit.', 'ធនធានដែលអាជីវកម្មគ្រប់គ្រង ហើយរំពឹងថានឹងផ្តល់ផលប្រយោជន៍អនាគត។'), ex: b('Cash, inventory, equipment.', 'សាច់ប្រាក់ ស្តុក បរិក្ខារ។'), formula: 'Assets = Liabilities + Equity' },
  { id: 'c2', term: b('Liability', 'បំណុល'), def: b('Something the business owes.', 'អ្វីដែលអាជីវកម្មជំពាក់។'), detail: b('A present obligation to pay others.', 'កាតព្វកិច្ចបច្ចុប្បន្នត្រូវបង់អ្នកដទៃ។'), ex: b('Bank loan, accounts payable.', 'កម្ចីធនាគារ គណនីត្រូវបង់។'), formula: '' },
  { id: 'c3', term: b("Owner's Equity", 'មូលធនម្ចាស់'), def: b("The owner's share of the business.", 'ចំណែករបស់ម្ចាស់ក្នុងអាជីវកម្ម។'), detail: b('What remains after liabilities are subtracted from assets.', 'អ្វីដែលនៅសល់បន្ទាប់ពីដកបំណុលពីទ្រព្យ។'), ex: b('Assets $5,000 − Liabilities $1,500 = $3,500.', 'ទ្រព្យ $5,000 − បំណុល $1,500 = $3,500។'), formula: 'Equity = Assets − Liabilities' },
  { id: 'c4', term: b('Revenue', 'ចំណូល'), def: b('Money earned from selling goods or services.', 'ប្រាក់រកបានពីការលក់ទំនិញ ឬសេវា។'), detail: b('Recorded when earned, not necessarily when cash is received.', 'កត់ត្រានៅពេលរកបាន មិនចាំបាច់ពេលទទួលសាច់ប្រាក់ទេ។'), ex: b('A $300 credit sale.', 'ការលក់ជំពាក់ $300។'), formula: '' },
  { id: 'c5', term: b('Expense', 'ចំណាយ'), def: b('A cost of running the business.', 'ថ្លៃដើមក្នុងការដំណើរការអាជីវកម្ម។'), detail: b('Reduces equity through profit.', 'កាត់បន្ថយមូលធនតាមរយៈប្រាក់ចំណេញ។'), ex: b('Rent, salaries, electricity.', 'ថ្លៃជួល ប្រាក់ខែ អគ្គិសនី។'), formula: '' },
  { id: 'c6', term: b('Profit', 'ប្រាក់ចំណេញ'), def: b('Revenue minus expenses.', 'ចំណូលដកចំណាយ។'), detail: b('If expenses are bigger, it is a loss.', 'បើចំណាយច្រើនជាង វាគឺជាការខាតបង់។'), ex: b('2,000 − 1,400 = 600.', '2,000 − 1,400 = 600។'), formula: 'Profit = Revenue − Expenses' },
  { id: 'c7', term: b('Debit', 'ឥណពន្ធ (Debit)'), def: b('The left side of an account.', 'ខាងឆ្វេងនៃគណនី។'), detail: b('Increases assets and expenses; decreases liabilities, equity, revenue.', 'បង្កើនទ្រព្យ និងចំណាយ បន្ថយបំណុល មូលធន ចំណូល។'), ex: b('Dr Cash when money comes in.', 'Dr សាច់ប្រាក់ពេលលុយចូល។'), formula: '' },
  { id: 'c8', term: b('Credit', 'ឥណទាន (Credit)'), def: b('The right side of an account.', 'ខាងស្តាំនៃគណនី។'), detail: b('Increases liabilities, equity, revenue; decreases assets and expenses.', 'បង្កើនបំណុល មូលធន ចំណូល បន្ថយទ្រព្យ និងចំណាយ។'), ex: b('Cr Cash when money goes out.', 'Cr សាច់ប្រាក់ពេលលុយចេញ។'), formula: '' },
  { id: 'c9', term: b('Accounts Receivable', 'គណនីត្រូវទទួល'), def: b('Money customers owe you.', 'ប្រាក់ដែលអតិថិជនជំពាក់អ្នក។'), detail: b('An asset created by selling on credit.', 'ទ្រព្យសកម្មដែលកើតពីការលក់ជំពាក់។'), ex: b('Sold $300 on credit.', 'លក់ជំពាក់ $300។'), formula: '' },
  { id: 'c10', term: b('Accounts Payable', 'គណនីត្រូវបង់'), def: b('Money you owe suppliers.', 'ប្រាក់ដែលអ្នកជំពាក់អ្នកផ្គត់ផ្គង់។'), detail: b('A liability from buying on credit.', 'បំណុលដែលកើតពីការទិញជំពាក់។'), ex: b('Bought equipment $800, pay later.', 'ទិញបរិក្ខារ $800 បង់ក្រោយ។'), formula: '' },
  { id: 'c11', term: b('Trial Balance', 'តារាងតុល្យការសាកល្បង'), def: b('A list of all account balances to check debits equal credits.', 'បញ្ជីសមតុល្យគណនីទាំងអស់ដើម្បីពិនិត្យថា debit ស្មើ credit។'), detail: b('Prepared after posting to the ledger.', 'រៀបចំបន្ទាប់ពីផ្ទេរចូលសៀវភៅធំ។'), ex: b('Total debits 7,400 = total credits 7,400.', 'debit សរុប 7,400 = credit សរុប 7,400។'), formula: '' },
  { id: 'c12', term: b('Matching Principle', 'គោលការណ៍ផ្គូផ្គង'), def: b('Record expenses in the same period as the revenue they helped earn.', 'កត់ចំណាយក្នុងអំឡុងពេលតែមួយជាមួយចំណូលដែលវាជួយរក។'), detail: b('Gives a fair profit for each period.', 'ផ្តល់ប្រាក់ចំណេញសមរម្យក្នុងរយៈពេលនីមួយៗ។'), ex: b('December electricity is a December expense.', 'អគ្គិសនីខែធ្នូជាចំណាយខែធ្នូ។'), formula: '' }
];

// ================= Extra questions (every topic now has 10+) =================
// ---- What is accounting? ----
Q('q23', 'intro', 1, ['Which is NOT a main type of accounting?', 'តើអ្វីមិនមែនជាប្រភេទគណនេយ្យចម្បង?'],
  [['Financial accounting', 'គណនេយ្យហិរញ្ញវត្ថុ'], ['Managerial accounting', 'គណនេយ្យគ្រប់គ្រង'], ['Tax accounting', 'គណនេយ្យពន្ធដារ'], ['Advertising accounting', 'គណនេយ្យផ្សព្វផ្សាយ']], 3,
  ['The main types are financial, managerial, tax accounting and auditing. "Advertising accounting" is not one of them.', 'ប្រភេទចម្បងគឺគណនេយ្យហិរញ្ញវត្ថុ គណនេយ្យគ្រប់គ្រង គណនេយ្យពន្ធដារ និងសវនកម្ម។ "គណនេយ្យផ្សព្វផ្សាយ" មិនមែនជាប្រភេទមួយក្នុងចំណោមនោះទេ។']);
Q('q24', 'intro', 1, ['Managers use accounting information to make decisions inside the business.', 'អ្នកគ្រប់គ្រងប្រើព័ត៌មានគណនេយ្យដើម្បីសម្រេចចិត្តក្នុងអាជីវកម្ម។'], null, 0,
  ['Managers are internal users. For example, profit figures help them decide whether to hire more staff.', 'អ្នកគ្រប់គ្រងជាអ្នកប្រើផ្ទៃក្នុង។ ឧទាហរណ៍ តួលេខចំណេញជួយពួកគេសម្រេចថាតើគួរជួលបុគ្គលិកបន្ថែមឬអត់។']);
Q('q25', 'intro', 1, ['Which of these is an INTERNAL user of accounting information?', 'តើអ្នកណាជាអ្នកប្រើប្រាស់ព័ត៌មានគណនេយ្យផ្ទៃក្នុង?'],
  [['A tax authority', 'អាជ្ញាធរពន្ធដារ'], ['A supplier', 'អ្នកផ្គត់ផ្គង់'], ['The shop manager', 'អ្នកគ្រប់គ្រងហាង'], ['An outside investor', 'វិនិយោគិនខាងក្រៅ']], 2,
  ['Managers work inside the business. Tax authorities, suppliers and outside investors are external users.', 'អ្នកគ្រប់គ្រងធ្វើការក្នុងអាជីវកម្ម។ អាជ្ញាធរពន្ធដារ អ្នកផ្គត់ផ្គង់ និងវិនិយោគិនខាងក្រៅជាអ្នកប្រើខាងក្រៅ។']);
Q('q26', 'intro', 2, ['Financial accounting mainly produces reports for:', 'គណនេយ្យហិរញ្ញវត្ថុផលិតរបាយការណ៍សម្រាប់ជាចម្បង៖'],
  [['External users such as banks and investors', 'អ្នកប្រើខាងក្រៅ ដូចជាធនាគារ និងវិនិយោគិន'], ['Only the owner\'s family', 'តែក្រុមគ្រួសារម្ចាស់ប៉ុណ្ណោះ'], ['Only the cashier', 'តែអ្នកគិតលុយប៉ុណ្ណោះ'], ['Nobody', 'គ្មានអ្នកណាទេ']], 0,
  ['Financial accounting reports (like the income statement and balance sheet) are mainly for people outside the business.', 'របាយការណ៍គណនេយ្យហិរញ្ញវត្ថុ (ដូចជារបាយការណ៍លទ្ធផល និងតារាងតុល្យការ) សម្រាប់អ្នកខាងក្រៅអាជីវកម្មជាចម្បង។']);
Q('q27', 'intro', 1, ['The exact accounting rules can depend on the standards used, such as IFRS or US GAAP.', 'ច្បាប់គណនេយ្យជាក់លាក់អាចអាស្រ័យលើស្តង់ដារដែលប្រើ ដូចជា IFRS ឬ US GAAP។'], null, 0,
  ['Different countries and companies follow different standards, so some treatments differ.', 'ប្រទេស និងក្រុមហ៊ុនផ្សេងគ្នាអនុវត្តតាមស្តង់ដារផ្សេងគ្នា ដូច្នេះការកត់ត្រាខ្លះអាចខុសគ្នា។']);
Q('q28', 'intro', 2, ['A coffee shop sells $120 of coffee and has costs of $70. What is the profit?', 'ហាងកាហ្វេលក់កាហ្វេបាន $120 ហើយមានចំណាយ $70។ ចំណេញប៉ុន្មាន?'],
  [['$190', '$190'], ['$50', '$50'], ['$70', '$70'], ['$120', '$120']], 1,
  ['Profit = Revenue − Expenses = 120 − 70 = $50.', 'ចំណេញ = ចំណូល − ចំណាយ = 120 − 70 = $50។']);
Q('q29', 'intro', 2, ['Why should an owner keep business money separate from personal money?', 'ហេតុអ្វីម្ចាស់គួរញែកលុយអាជីវកម្មពីលុយផ្ទាល់ខ្លួន?'],
  [['To avoid using a bank', 'ដើម្បីជៀសវាងការប្រើធនាគារ'], ['To make the business look bigger', 'ដើម្បីឲ្យអាជីវកម្មមើលទៅធំជាងមុន'], ['So the real profit and position of the business can be seen', 'ដើម្បីឲ្យឃើញប្រាក់ចំណេញ និងស្ថានភាពពិតរបស់អាជីវកម្ម'], ['There is no reason', 'គ្មានហេតុផលទេ']], 2,
  ['Mixing the two hides how the business is really doing.', 'ការលាយទាំងពីរបិទបាំងស្ថានភាពពិតរបស់អាជីវកម្ម។']);

// ---- Assets, liabilities, equity ----
Q('q30', 'elements', 1, ['Which of these is an asset?', 'តើអ្វីជាទ្រព្យសកម្ម?'],
  [['Equipment', 'បរិក្ខារ'], ['Bank loan', 'កម្ចីធនាគារ'], ['Accounts payable', 'គណនីត្រូវបង់'], ['Rent expense', 'ចំណាយជួល']], 0,
  ['Equipment is owned by the business and gives future benefit. Loans and payables are liabilities; rent is an expense.', 'បរិក្ខារជាកម្មសិទ្ធិរបស់អាជីវកម្ម ហើយផ្តល់ផលប្រយោជន៍អនាគត។ កម្ចី និងគណនីត្រូវបង់ជាបំណុល ចំណាយជួលជាចំណាយ។']);
Q('q31', 'elements', 1, ['Which of these is a liability?', 'តើអ្វីជាបំណុល?'],
  [['Cash', 'សាច់ប្រាក់'], ['Accounts payable', 'គណនីត្រូវបង់'], ['Inventory', 'ស្តុកទំនិញ'], ['Equipment', 'បរិក្ខារ']], 1,
  ['Accounts payable is money the business owes to suppliers.', 'គណនីត្រូវបង់គឺជាប្រាក់ដែលអាជីវកម្មជំពាក់អ្នកផ្គត់ផ្គង់។']);
Q('q32', 'elements', 1, ['Inventory (goods held for sale) is an asset.', 'ស្តុកទំនិញ (ទំនិញរក្សាទុកសម្រាប់លក់) ជាទ្រព្យសកម្ម។'], null, 0,
  ['The business owns the goods and expects to sell them for cash later.', 'អាជីវកម្មជាម្ចាស់ទំនិញ ហើយរំពឹងថានឹងលក់បានសាច់ប្រាក់នៅពេលក្រោយ។']);
Q('q33', 'elements', 2, ['Assets are $12,000 and liabilities are $4,500. What is owner\'s equity?', 'ទ្រព្យសកម្ម $12,000 បំណុល $4,500។ តើមូលធនម្ចាស់ប៉ុន្មាន?'],
  [['$16,500', '$16,500'], ['$4,500', '$4,500'], ['$7,500', '$7,500'], ['$8,500', '$8,500']], 2,
  ['Equity = Assets − Liabilities = 12,000 − 4,500 = $7,500.', 'មូលធន = ទ្រព្យ − បំណុល = 12,000 − 4,500 = $7,500។']);
Q('q34', 'elements', 2, ['A shop buys goods on credit and owes the supplier $800. This amount is called:', 'ហាងទិញទំនិញជំពាក់ ហើយជំពាក់អ្នកផ្គត់ផ្គង់ $800។ ចំនួននេះហៅថា៖'],
  [['Accounts payable', 'គណនីត្រូវបង់'], ['Accounts receivable', 'គណនីត្រូវទទួល'], ['Revenue', 'ចំណូល'], ['Owner\'s equity', 'មូលធនម្ចាស់']], 0,
  ['It is money the business must pay later, so it is a liability called accounts payable.', 'វាជាប្រាក់ដែលអាជីវកម្មត្រូវបង់នៅពេលក្រោយ ដូច្នេះជាបំណុលហៅថាគណនីត្រូវបង់។']);
Q('q35', 'elements', 2, ['Money that customers owe the business is a liability.', 'ប្រាក់ដែលអតិថិជនជំពាក់អាជីវកម្មគឺជាបំណុល។'], null, 1,
  ['It is an asset (accounts receivable), because the business will collect it. A liability is money the business owes to others.', 'វាជាទ្រព្យសកម្ម (គណនីត្រូវទទួល) ព្រោះអាជីវកម្មនឹងប្រមូលបាន។ បំណុលគឺជាប្រាក់ដែលអាជីវកម្មជំពាក់អ្នកដទៃ។']);
Q('q36', 'elements', 3, ['A shop has cash $2,000, inventory $3,000 and equipment $5,000. It has a bank loan of $4,000. What is equity?', 'ហាងមានសាច់ប្រាក់ $2,000 ស្តុក $3,000 បរិក្ខារ $5,000 និងកម្ចីធនាគារ $4,000។ មូលធនប៉ុន្មាន?'],
  [['$10,000', '$10,000'], ['$4,000', '$4,000'], ['$14,000', '$14,000'], ['$6,000', '$6,000']], 3,
  ['Assets = 2,000 + 3,000 + 5,000 = $10,000. Equity = 10,000 − 4,000 = $6,000.', 'ទ្រព្យ = 2,000 + 3,000 + 5,000 = $10,000។ មូលធន = 10,000 − 4,000 = $6,000។']);

// ---- Accounting equation ----
Q('q37', 'equation', 1, ['Which is the accounting equation?', 'តើអ្វីជាសមីការគណនេយ្យ?'],
  [['Assets = Liabilities + Equity', 'ទ្រព្យ = បំណុល + មូលធន'], ['Assets = Liabilities − Equity', 'ទ្រព្យ = បំណុល − មូលធន'], ['Equity = Assets + Liabilities', 'មូលធន = ទ្រព្យ + បំណុល'], ['Liabilities = Assets + Equity', 'បំណុល = ទ្រព្យ + មូលធន']], 0,
  ['What the business owns equals what it owes plus the owner\'s share.', 'អ្វីដែលអាជីវកម្មជាម្ចាស់ ស្មើនឹងអ្វីដែលវាជំពាក់ បូកចំណែកម្ចាស់។']);
Q('q38', 'equation', 2, ['Liabilities are $2,000 and equity is $6,000. What are total assets?', 'បំណុល $2,000 មូលធន $6,000។ តើទ្រព្យសរុបប៉ុន្មាន?'],
  [['$4,000', '$4,000'], ['$8,000', '$8,000'], ['$12,000', '$12,000'], ['$6,000', '$6,000']], 1,
  ['Assets = Liabilities + Equity = 2,000 + 6,000 = $8,000.', 'ទ្រព្យ = បំណុល + មូលធន = 2,000 + 6,000 = $8,000។']);
Q('q39', 'equation', 2, ['The owner invests $5,000 cash. What is the effect on the equation?', 'ម្ចាស់ដាក់ទុន $5,000 សាច់ប្រាក់។ តើមានផលអ្វីលើសមីការ?'],
  [['Assets +$5,000 and Equity +$5,000', 'ទ្រព្យ +$5,000 និងមូលធន +$5,000'], ['Assets +$5,000 and Liabilities +$5,000', 'ទ្រព្យ +$5,000 និងបំណុល +$5,000'], ['Assets −$5,000 and Equity −$5,000', 'ទ្រព្យ −$5,000 និងមូលធន −$5,000'], ['No change', 'គ្មានការប្តូរ']], 0,
  ['Cash (an asset) rises and the owner\'s claim (equity) rises by the same amount.', 'សាច់ប្រាក់ (ទ្រព្យ) កើន ហើយសិទ្ធិរបស់ម្ចាស់ (មូលធន) កើនស្មើគ្នា។']);
Q('q40', 'equation', 2, ['The business borrows $2,000 from a bank. What is the effect?', 'អាជីវកម្មខ្ចី $2,000 ពីធនាគារ។ តើមានផលអ្វី?'],
  [['Assets +$2,000 and Equity +$2,000', 'ទ្រព្យ +$2,000 និងមូលធន +$2,000'], ['Assets +$2,000 and Liabilities +$2,000', 'ទ្រព្យ +$2,000 និងបំណុល +$2,000'], ['Only liabilities increase', 'មានតែបំណុលកើន'], ['Assets decrease', 'ទ្រព្យថយ']], 1,
  ['Cash rises (asset) and the business now owes the bank (liability).', 'សាច់ប្រាក់កើន (ទ្រព្យ) ហើយអាជីវកម្មជំពាក់ធនាគារ (បំណុល)។']);
Q('q41', 'equation', 2, ['Paying a supplier $500 cash for an amount already owed reduces both assets and liabilities.', 'ការបង់អ្នកផ្គត់ផ្គង់ $500 សាច់ប្រាក់ សម្រាប់ចំនួនដែលជំពាក់រួច កាត់បន្ថយទាំងទ្រព្យ និងបំណុល។'], null, 0,
  ['Cash falls by $500 and accounts payable falls by $500, so the equation still balances.', 'សាច់ប្រាក់ថយ $500 ហើយគណនីត្រូវបង់ថយ $500 ដូច្នេះសមីការនៅតែតុល្យភាព។']);
Q('q42', 'equation', 3, ['Assets $7,000 = Liabilities $2,000 + Equity $5,000. The business buys equipment for $1,200 cash. What are total assets afterwards?', 'ទ្រព្យ $7,000 = បំណុល $2,000 + មូលធន $5,000។ អាជីវកម្មទិញបរិក្ខារ $1,200 សាច់ប្រាក់។ តើទ្រព្យសរុបក្រោយនោះប៉ុន្មាន?'],
  [['$8,200', '$8,200'], ['$5,800', '$5,800'], ['$7,000', '$7,000'], ['$5,000', '$5,000']], 2,
  ['Equipment rises by $1,200 and cash falls by $1,200, so total assets stay at $7,000.', 'បរិក្ខារកើន $1,200 ហើយសាច់ប្រាក់ថយ $1,200 ដូច្នេះទ្រព្យសរុបនៅ $7,000។']);
Q('q43', 'equation', 3, ['Which transaction increases both assets and liabilities?', 'ប្រតិបត្តិការណាបង្កើនទាំងទ្រព្យ និងបំណុល?'],
  [['Buying equipment with cash', 'ទិញបរិក្ខារដោយសាច់ប្រាក់'], ['Buying equipment on credit', 'ទិញបរិក្ខារជំពាក់'], ['The owner invests cash', 'ម្ចាស់ដាក់ទុនជាសាច់ប្រាក់'], ['Paying rent in cash', 'បង់ថ្លៃជួលជាសាច់ប្រាក់']], 1,
  ['Equipment (asset) rises and accounts payable (liability) rises. Buying with cash only swaps one asset for another.', 'បរិក្ខារ (ទ្រព្យ) កើន ហើយគណនីត្រូវបង់ (បំណុល) កើន។ ការទិញដោយសាច់ប្រាក់គ្រាន់តែប្តូរទ្រព្យមួយជាទ្រព្យមួយទៀត។']);

// ---- Cash vs profit ----
Q('q44', 'cashprofit', 1, ['Which formula gives profit?', 'រូបមន្តណាផ្តល់ប្រាក់ចំណេញ?'],
  [['Revenue − Expenses', 'ចំណូល − ចំណាយ'], ['Assets − Liabilities', 'ទ្រព្យ − បំណុល'], ['Revenue + Expenses', 'ចំណូល + ចំណាយ'], ['Cash − Loans', 'សាច់ប្រាក់ − កម្ចី']], 0,
  ['Profit is what the business earned minus what it spent to earn it.', 'ចំណេញគឺអ្វីដែលអាជីវកម្មរកបាន ដកអ្វីដែលបានចំណាយដើម្បីរកវា។']);
Q('q45', 'cashprofit', 1, ['Cash and profit are always equal.', 'សាច់ប្រាក់ និងប្រាក់ចំណេញតែងតែស្មើគ្នា។'], null, 1,
  ['They are different. For example, a credit sale creates profit but no cash yet.', 'ពួកវាខុសគ្នា។ ឧទាហរណ៍ ការលក់ជំពាក់បង្កើតចំណេញ ប៉ុន្តែមិនទាន់មានសាច់ប្រាក់។']);
Q('q46', 'cashprofit', 2, ['Revenue is $5,000 and expenses are $5,800. What is the result?', 'ចំណូល $5,000 ចំណាយ $5,800។ តើលទ្ធផលជាអ្វី?'],
  [['A profit of $800', 'ចំណេញ $800'], ['A loss of $800', 'ខាត $800'], ['A profit of $10,800', 'ចំណេញ $10,800'], ['No profit and no loss', 'គ្មានចំណេញ គ្មានខាត']], 1,
  ['5,000 − 5,800 = −800. When expenses are bigger than revenue, it is a loss.', '5,000 − 5,800 = −800។ នៅពេលចំណាយច្រើនជាងចំណូល វាគឺជាការខាតបង់។']);
Q('q47', 'cashprofit', 2, ['Which of these is NOT revenue?', 'តើអ្វីមិនមែនជាចំណូល?'],
  [['Sales of goods', 'ការលក់ទំនិញ'], ['Fees earned from a service', 'ថ្លៃសេវាដែលរកបាន'], ['A bank loan received', 'ប្រាក់កម្ចីដែលទទួលពីធនាគារ'], ['Products sold on credit', 'ទំនិញលក់ជំពាក់']], 2,
  ['A loan must be repaid, so it is a liability, not revenue.', 'កម្ចីត្រូវសងវិញ ដូច្នេះវាជាបំណុល មិនមែនចំណូលទេ។']);
Q('q48', 'cashprofit', 2, ['Under accrual accounting, revenue is recorded when it is earned, even if the cash has not arrived yet.', 'ក្រោមគណនេយ្យ accrual ចំណូលត្រូវបានកត់ត្រានៅពេលរកបាន ទោះសាច់ប្រាក់មិនទាន់មកដល់ក៏ដោយ។'], null, 0,
  ['This is why profit and cash can be different in the same period.', 'នេះជាមូលហេតុដែលចំណេញ និងសាច់ប្រាក់អាចខុសគ្នាក្នុងរយៈពេលតែមួយ។']);
Q('q49', 'cashprofit', 3, ['A month has revenue of $9,000, of which $3,000 is still unpaid by customers. Expenses are $6,500. What are the profit and the cash collected from customers?', 'ក្នុងមួយខែមានចំណូល $9,000 ដែលក្នុងនោះ $3,000 អតិថិជនមិនទាន់បង់។ ចំណាយ $6,500។ តើចំណេញ និងសាច់ប្រាក់ប្រមូលបានពីអតិថិជនប៉ុន្មាន?'],
  [['Profit $2,500; cash from customers $9,000', 'ចំណេញ $2,500; សាច់ប្រាក់ពីអតិថិជន $9,000'], ['Profit $6,000; cash from customers $2,500', 'ចំណេញ $6,000; សាច់ប្រាក់ពីអតិថិជន $2,500'], ['Profit $2,500; cash from customers $6,000', 'ចំណេញ $2,500; សាច់ប្រាក់ពីអតិថិជន $6,000'], ['Profit $9,000; cash from customers $6,500', 'ចំណេញ $9,000; សាច់ប្រាក់ពីអតិថិជន $6,500']], 2,
  ['Profit = 9,000 − 6,500 = $2,500. Cash collected = 9,000 − 3,000 unpaid = $6,000.', 'ចំណេញ = 9,000 − 6,500 = $2,500។ សាច់ប្រាក់ប្រមូលបាន = 9,000 − 3,000 មិនទាន់បង់ = $6,000។']);
Q('q50', 'cashprofit', 2, ['The business receives a $1,000 bank loan. What happens to profit?', 'អាជីវកម្មទទួលកម្ចីធនាគារ $1,000។ តើចំណេញមានអ្វីកើតឡើង?'],
  [['It rises by $1,000', 'កើន $1,000'], ['It does not change, because a loan is a liability, not revenue', 'មិនប្តូរ ព្រោះកម្ចីជាបំណុល មិនមែនចំណូលទេ'], ['It falls by $1,000', 'ថយ $1,000'], ['It doubles', 'កើនទ្វេដង']], 1,
  ['Cash goes up, but profit only changes through revenue and expenses.', 'សាច់ប្រាក់កើន ប៉ុន្តែចំណេញផ្លាស់ប្តូរតាមរយៈចំណូល និងចំណាយប៉ុណ្ណោះ។']);

// ---- Debit and credit ----
Q('q51', 'debitcredit', 1, ['In accounting, a debit is recorded on which side of an account?', 'ក្នុងគណនេយ្យ debit ត្រូវកត់នៅខាងណានៃគណនី?'],
  [['Right', 'ស្តាំ'], ['Left', 'ឆ្វេង'], ['Top', 'ខាងលើ'], ['Bottom', 'ខាងក្រោម']], 1,
  ['Debit = left, credit = right.', 'Debit = ឆ្វេង credit = ស្តាំ។']);
Q('q52', 'debitcredit', 1, ['Which account normally has a CREDIT balance?', 'គណនីណាដែលជាធម្មតាមានសមតុល្យ CREDIT?'],
  [['Cash', 'សាច់ប្រាក់'], ['Rent Expense', 'ចំណាយជួល'], ['Accounts Payable', 'គណនីត្រូវបង់'], ['Equipment', 'បរិក្ខារ']], 2,
  ['Liabilities, equity and revenue normally have credit balances. Assets and expenses have debit balances.', 'បំណុល មូលធន និងចំណូលជាធម្មតាមានសមតុល្យ credit។ ទ្រព្យ និងចំណាយមានសមតុល្យ debit។']);
Q('q53', 'debitcredit', 2, ['The business buys inventory for $500 cash. The entry is:', 'អាជីវកម្មទិញស្តុក $500 សាច់ប្រាក់។ កំណត់ត្រាគឺ៖'],
  [['Dr Cash / Cr Inventory', 'Dr សាច់ប្រាក់ / Cr ស្តុក'], ['Dr Inventory / Cr Cash', 'Dr ស្តុក / Cr សាច់ប្រាក់'], ['Dr Inventory / Cr Revenue', 'Dr ស្តុក / Cr ចំណូល'], ['Dr Capital / Cr Inventory', 'Dr មូលធន / Cr ស្តុក']], 1,
  ['Inventory (asset) increases → debit. Cash (asset) decreases → credit.', 'ស្តុក (ទ្រព្យ) កើន → debit។ សាច់ប្រាក់ (ទ្រព្យ) ថយ → credit។']);
Q('q54', 'debitcredit', 2, ['The business sells products for $800 cash. The entry is:', 'អាជីវកម្មលក់ទំនិញបាន $800 សាច់ប្រាក់។ កំណត់ត្រាគឺ៖'],
  [['Dr Cash / Cr Sales Revenue', 'Dr សាច់ប្រាក់ / Cr ចំណូលលក់'], ['Dr Sales Revenue / Cr Cash', 'Dr ចំណូលលក់ / Cr សាច់ប្រាក់'], ['Dr Cash / Cr Capital', 'Dr សាច់ប្រាក់ / Cr មូលធន'], ['Dr Inventory / Cr Cash', 'Dr ស្តុក / Cr សាច់ប្រាក់']], 0,
  ['Cash (asset) increases → debit. Revenue increases → credit.', 'សាច់ប្រាក់ (ទ្រព្យ) កើន → debit។ ចំណូលកើន → credit។']);
Q('q55', 'debitcredit', 2, ['In every journal entry, total debits must equal total credits.', 'ក្នុងរាល់កំណត់ត្រាកំណត់ហេតុ ឥណពន្ធសរុបត្រូវស្មើឥណទានសរុប។'], null, 0,
  ['This is the core rule of double-entry bookkeeping and keeps the accounting equation balanced.', 'នេះជាច្បាប់គ្រឹះនៃការកត់ត្រាគូ ហើយរក្សាសមីការគណនេយ្យឲ្យតុល្យភាព។']);
Q('q56', 'debitcredit', 3, ['The business repays $500 of its bank loan in cash. The entry is:', 'អាជីវកម្មសងកម្ចីធនាគារ $500 ជាសាច់ប្រាក់។ កំណត់ត្រាគឺ៖'],
  [['Dr Cash / Cr Bank Loan', 'Dr សាច់ប្រាក់ / Cr កម្ចីធនាគារ'], ['Dr Bank Loan / Cr Cash', 'Dr កម្ចីធនាគារ / Cr សាច់ប្រាក់'], ['Dr Loan Expense / Cr Cash', 'Dr ចំណាយកម្ចី / Cr សាច់ប្រាក់'], ['Dr Cash / Cr Revenue', 'Dr សាច់ប្រាក់ / Cr ចំណូល']], 1,
  ['The liability decreases → debit. Cash decreases → credit. Repaying the loan amount is not an expense.', 'បំណុលថយ → debit។ សាច់ប្រាក់ថយ → credit។ ការសងប្រាក់ដើមកម្ចីមិនមែនជាចំណាយទេ។']);
Q('q57', 'debitcredit', 2, ['Which account INCREASES with a credit?', 'គណនីណាកើនដោយ credit?'],
  [['Sales Revenue', 'ចំណូលលក់'], ['Cash', 'សាច់ប្រាក់'], ['Rent Expense', 'ចំណាយជួល'], ['Equipment', 'បរិក្ខារ']], 0,
  ['Revenue, liabilities and equity increase with credits. Assets and expenses increase with debits.', 'ចំណូល បំណុល និងមូលធន កើនដោយ credit។ ទ្រព្យ និងចំណាយ កើនដោយ debit។']);

// ---- Business entity principle ----
Q('q58', 'entity', 1, ['The business entity principle says that:', 'គោលការណ៍អង្គភាពអាជីវកម្មនិយាយថា៖'],
  [['The business and its owner are separate in the records', 'អាជីវកម្ម និងម្ចាស់ត្រូវញែកដាច់ពីគ្នាក្នុងកំណត់ត្រា'], ['The owner and the business are the same person', 'ម្ចាស់ និងអាជីវកម្មជាមនុស្សតែមួយ'], ['Only large businesses need records', 'មានតែអាជីវកម្មធំៗទេដែលត្រូវការកំណត់ត្រា'], ['Expenses are recorded when paid', 'ចំណាយត្រូវកត់ពេលបង់']], 0,
  ['Only the business\'s own transactions are recorded in its books.', 'មានតែប្រតិបត្តិការរបស់អាជីវកម្មទេដែលត្រូវកត់ក្នុងបញ្ជីរបស់វា។']);
Q('q59', 'entity', 2, ['The owner pays for personal groceries from business cash. This should be recorded as a business expense.', 'ម្ចាស់បង់ថ្លៃគ្រឿងឆ្អិនផ្ទាល់ខ្លួនពីសាច់ប្រាក់អាជីវកម្ម។ នេះគួរកត់ជាចំណាយអាជីវកម្ម។'], null, 1,
  ['It is a personal cost, so it is recorded as owner\'s drawings, not as a business expense.', 'វាជាចំណាយផ្ទាល់ខ្លួន ដូច្នេះត្រូវកត់ជាការដកប្រាក់របស់ម្ចាស់ មិនមែនចំណាយអាជីវកម្មទេ។']);
Q('q60', 'entity', 2, ['The owner takes $200 cash from the business for personal use. The correct entry is:', 'ម្ចាស់យកសាច់ប្រាក់ $200 ពីអាជីវកម្មសម្រាប់ប្រើផ្ទាល់ខ្លួន។ កំណត់ត្រាត្រឹមត្រូវគឺ៖'],
  [['Dr Owner\'s Drawings / Cr Cash', 'Dr ការដកប្រាក់ម្ចាស់ / Cr សាច់ប្រាក់'], ['Dr Cash / Cr Owner\'s Drawings', 'Dr សាច់ប្រាក់ / Cr ការដកប្រាក់ម្ចាស់'], ['Dr Office Expense / Cr Cash', 'Dr ចំណាយការិយាល័យ / Cr សាច់ប្រាក់'], ['Dr Cash / Cr Revenue', 'Dr សាច់ប្រាក់ / Cr ចំណូល']], 0,
  ['Drawings reduce equity (debit) and cash falls (credit).', 'ការដកប្រាក់កាត់បន្ថយមូលធន (debit) ហើយសាច់ប្រាក់ថយ (credit)។']);
Q('q61', 'entity', 2, ['Which transaction belongs in the business\'s books?', 'ប្រតិបត្តិការណាត្រូវកត់ក្នុងបញ្ជីរបស់អាជីវកម្ម?'],
  [['The owner buys a personal TV for home', 'ម្ចាស់ទិញទូរទស្សន៍ផ្ទាល់ខ្លួនសម្រាប់ផ្ទះ'], ['The owner pays a family holiday', 'ម្ចាស់បង់ថ្លៃដំណើរកំសាន្តគ្រួសារ'], ['The business buys $300 of inventory for sale', 'អាជីវកម្មទិញស្តុក $300 សម្រាប់លក់'], ['The owner pays their personal phone bill', 'ម្ចាស់បង់វិក្កយបត្រទូរស័ព្ទផ្ទាល់ខ្លួន']], 2,
  ['Only transactions of the business itself are recorded in its books.', 'មានតែប្រតិបត្តិការរបស់អាជីវកម្មខ្លួនឯងទេដែលត្រូវកត់ក្នុងបញ្ជីរបស់វា។']);
Q('q62', 'entity', 2, ['Owner\'s drawings reduce which part of the accounting equation?', 'ការដកប្រាក់របស់ម្ចាស់កាត់បន្ថយផ្នែកណាមួយនៃសមីការគណនេយ្យ?'],
  [['Liabilities', 'បំណុល'], ['Owner\'s equity', 'មូលធនម្ចាស់'], ['Revenue', 'ចំណូល'], ['Inventory', 'ស្តុក']], 1,
  ['Drawings are the owner taking value out of the business, so equity falls.', 'ការដកប្រាក់គឺជាការដែលម្ចាស់យកតម្លៃចេញពីអាជីវកម្ម ដូច្នេះមូលធនថយ។']);
Q('q63', 'entity', 1, ['The owner\'s personal house is automatically an asset of the business.', 'ផ្ទះផ្ទាល់ខ្លួនរបស់ម្ចាស់ជាទ្រព្យសកម្មរបស់អាជីវកម្មដោយស្វ័យប្រវត្តិ។'], null, 1,
  ['Personal property stays outside the business records unless the owner formally puts it into the business.', 'ទ្រព្យផ្ទាល់ខ្លួននៅក្រៅកំណត់ត្រាអាជីវកម្ម លុះត្រាតែម្ចាស់ដាក់វាចូលអាជីវកម្មជាផ្លូវការ។']);
Q('q64', 'entity', 3, ['A freelance designer pays $60 for a family dinner from the business bank account. What is the correct treatment?', 'អ្នករចនាឯករាជ្យបង់ $60 សម្រាប់អាហារពេលល្ងាចគ្រួសារពីគណនីធនាគារអាជីវកម្ម។ តើការកត់ត្រាត្រឹមត្រូវជាអ្វី?'],
  [['Owner\'s drawings of $60, which reduce equity and not profit', 'ការដកប្រាក់ម្ចាស់ $60 ដែលកាត់បន្ថយមូលធន មិនមែនប្រាក់ចំណេញ'], ['Meals expense of $60, which reduces profit', 'ចំណាយអាហារ $60 ដែលកាត់បន្ថយប្រាក់ចំណេញ'], ['Revenue of $60', 'ចំណូល $60'], ['Ignore it, because no cash moved', 'មិនអើពើ ព្រោះគ្មានសាច់ប្រាក់ផ្លាស់ទី']], 0,
  ['Cash really left the business, but the cost is personal, so it is a drawing.', 'សាច់ប្រាក់ពិតជាចេញពីអាជីវកម្ម ប៉ុន្តែចំណាយនេះជាផ្ទាល់ខ្លួន ដូច្នេះជាការដកប្រាក់។']);
Q('q65', 'entity', 2, ['Why is the business entity principle important?', 'ហេតុអ្វីគោលការណ៍អង្គភាពអាជីវកម្មមានសារៈសំខាន់?'],
  [['It lowers the tax automatically', 'វាបន្ថយពន្ធដោយស្វ័យប្រវត្តិ'], ['It stops personal spending from distorting the business\'s profit and position', 'វាការពារកុំឲ្យការចំណាយផ្ទាល់ខ្លួនបំផ្លាញប្រាក់ចំណេញ និងស្ថានភាពអាជីវកម្ម'], ['It makes the business look larger', 'វាធ្វើឲ្យអាជីវកម្មមើលទៅធំជាងមុន'], ['It removes the need for a bank account', 'វាលុបបំបាត់តម្រូវការគណនីធនាគារ']], 1,
  ['Clean, separate records show how the business is really performing.', 'កំណត់ត្រាស្អាត និងដាច់ដោយឡែក បង្ហាញពីស្ថានភាពពិតរបស់អាជីវកម្ម។']);
Q('q66', 'entity', 2, ['The business entity principle applies whether a business uses IFRS or US GAAP.', 'គោលការណ៍អង្គភាពអាជីវកម្មអនុវត្តទាំងពេលអាជីវកម្មប្រើ IFRS ឬ US GAAP។'], null, 0,
  ['It is a basic idea shared by both sets of standards.', 'វាជាគំនិតមូលដ្ឋានដែលស្តង់ដារទាំងពីរមានរួមគ្នា។']);

// ---- Matching principle ----
Q('q67', 'matching', 1, ['Under the matching principle, expenses are matched with:', 'តាមគោលការណ៍ផ្គូផ្គង ចំណាយត្រូវផ្គូផ្គងជាមួយ៖'],
  [['The revenue they helped earn', 'ចំណូលដែលវាជួយរក'], ['The owner\'s drawings', 'ការដកប្រាក់ម្ចាស់'], ['The bank balance', 'សមតុល្យធនាគារ'], ['The next year\'s budget', 'ថវិកាឆ្នាំក្រោយ']], 0,
  ['The cost of earning revenue belongs in the same period as that revenue.', 'ថ្លៃដើមក្នុងការរកចំណូលជារបស់អំឡុងពេលតែមួយជាមួយចំណូលនោះ។']);
Q('q68', 'matching', 1, ['The matching principle goes together with accrual accounting.', 'គោលការណ៍ផ្គូផ្គងដំណើរការរួមជាមួយគណនេយ្យ accrual។'], null, 0,
  ['Accrual accounting records revenue when earned and expenses when incurred, not when cash moves.', 'គណនេយ្យ accrual កត់ចំណូលពេលរកបាន និងចំណាយពេលកើតមាន មិនមែនពេលសាច់ប្រាក់ផ្លាស់ទីទេ។']);
Q('q69', 'matching', 2, ['Staff earn a $300 commission on December sales, but it is paid in January. In which month is the expense?', 'បុគ្គលិកទទួលកម្រៃជើងសារ $300 ពីការលក់ខែធ្នូ តែបង់ក្នុងខែមករា។ ចំណាយនេះជារបស់ខែណា?'],
  [['January, when it is paid', 'ខែមករា ពេលបង់'], ['December, with the sales it helped earn', 'ខែធ្នូ ជាមួយការលក់ដែលវាជួយរក'], ['Split half and half', 'ចែកពាក់កណ្តាលម្តង'], ['It is never recorded', 'មិនត្រូវកត់ទាល់តែសោះ']], 1,
  ['The commission helped earn December revenue, so it is a December expense.', 'កម្រៃជើងសារជួយរកចំណូលខែធ្នូ ដូច្នេះជាចំណាយខែធ្នូ។']);
Q('q70', 'matching', 2, ['Why is the matching principle useful?', 'ហេតុអ្វីគោលការណ៍ផ្គូផ្គងមានប្រយោជន៍?'],
  [['It gives a fair profit figure for each period', 'វាផ្តល់តួលេខប្រាក់ចំណេញសមរម្យសម្រាប់រយៈពេលនីមួយៗ'], ['It makes cash always equal profit', 'វាធ្វើឲ្យសាច់ប្រាក់ស្មើចំណេញជានិច្ច'], ['It removes the need for a trial balance', 'វាលុបបំបាត់តម្រូវការតារាងតុល្យការសាកល្បង'], ['It increases revenue', 'វាបង្កើនចំណូល']], 0,
  ['Putting costs and revenue in the same period shows how profitable that period really was.', 'ការដាក់ថ្លៃដើម និងចំណូលក្នុងអំឡុងពេលតែមួយ បង្ហាញថាអំឡុងពេលនោះរកចំណេញបានពិតប៉ុណ្ណា។']);
Q('q71', 'matching', 2, ['Under the matching principle, the date the cash is paid decides which period an expense belongs to.', 'តាមគោលការណ៍ផ្គូផ្គង ថ្ងៃបង់សាច់ប្រាក់កំណត់ថាចំណាយជារបស់អំឡុងពេលណា។'], null, 1,
  ['The period depends on when the expense helped earn revenue, not when cash was paid.', 'អំឡុងពេលអាស្រ័យលើពេលដែលចំណាយជួយរកចំណូល មិនមែនពេលបង់សាច់ប្រាក់ទេ។']);
Q('q72', 'matching', 3, ['December revenue is $3,000. Wages are $900. Electricity used in December is $400 but the bill arrives in January. What is the December profit?', 'ចំណូលខែធ្នូ $3,000។ ប្រាក់ខែ $900។ អគ្គិសនីប្រើខែធ្នូ $400 តែវិក្កយបត្រមកដល់ខែមករា។ ចំណេញខែធ្នូប៉ុន្មាន?'],
  [['$2,100', '$2,100'], ['$2,600', '$2,600'], ['$1,300', '$1,300'], ['$1,700', '$1,700']], 3,
  ['The electricity belongs to December: 3,000 − 900 − 400 = $1,700.', 'អគ្គិសនីជារបស់ខែធ្នូ៖ 3,000 − 900 − 400 = $1,700។']);
Q('q73', 'matching', 3, ['A shop pays $1,200 in December for January\'s rent. Under the matching principle, to which period does this rent expense belong?', 'ហាងបង់ $1,200 ក្នុងខែធ្នូ សម្រាប់ថ្លៃជួលខែមករា។ តាមគោលការណ៍ផ្គូផ្គង ចំណាយជួលនេះជារបស់អំឡុងពេលណា?'],
  [['December, because the cash was paid then', 'ខែធ្នូ ព្រោះបង់សាច់ប្រាក់ពេលនោះ'], ['January, the month the rent relates to', 'ខែមករា ខែដែលថ្លៃជួលពាក់ព័ន្ធ'], ['Both months equally', 'ទាំងពីរខែស្មើគ្នា'], ['Neither month', 'គ្មានខែណាទេ']], 1,
  ['The rent is used up in January, so the expense belongs to January. Until then the payment is a prepaid amount (an asset).', 'ថ្លៃជួលត្រូវប្រើអស់ក្នុងខែមករា ដូច្នេះចំណាយជារបស់ខែមករា។ មុនពេលនោះ ការបង់ប្រាក់គឺជាប្រាក់បង់មុន (ទ្រព្យសកម្ម)។']);
