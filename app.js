/**
 * EduLedger 50/50 - Teacher & Youssef Ledger App
 * Accounting Engine, i18n Localization (Arabic & English), UI Controller & Mobile Enhancements
 */

// Internationalization Dictionary (Arabic & English)
const I18N = {
  ar: {
    splitBadge: 'مناصفة 50/50',
    subtitle: 'حاسبة إيرادات الحصص والمصروفات بين الأستاذ ويوسف',
    teacherRole: 'المعلم الرئيسي',
    brotherRole: 'يوسف',
    settlementTitle: 'التصفية الشهرية',
    settlementSubtext: 'بناءً على تقسيم الإيراد 50/50 والمصروفات المشتركة والمسحوبات الشخصية.',
    netEntitlement: 'الصافي المستحق',
    earnedShare: 'حصة الإيراد (50%):',
    expenseCredit: 'مستحق المصروفات:',
    cashDrawn: 'المقبوض/المسحوب:',
    kpiTotalRevenue: 'إجمالي إيراد الحصص',
    kpiTotalExpenses: 'المصروفات المشتركة',
    kpiTotalDraws: 'إجمالي المسحوبات',
    kpiPoolCash: 'الخزينة المشتركة',
    poolSub: 'المتبقي بالخزنة المباشرة',
    btnLogIncome: 'إيراد حصة',
    btnLogExpense: 'مصروف مشترك',
    btnLogDraw: 'مسحوبات شخصية',
    btnExport: 'تصدير ملف Excel/CSV',
    btnResetMonth: 'إعادة ضبط الشهر',
    ledgerTitle: 'سجل المعاملات اليومية',
    filterAll: 'كل الأنواع',
    filterIncome: 'إيراد حصة',
    filterExpense: 'مصروف مشترك',
    filterDraw: 'مسحوبات شخصية',
    thDate: 'التاريخ',
    thTitle: 'البيان / الوصف',
    thType: 'النوع',
    thAmount: 'المبلغ الكلي',
    thPerson: 'الدافع / المستلم',
    thSplit: 'التقسيم',
    thActions: 'إجراءات',
    emptyTitle: 'لا توجد معاملات مسجلة',
    emptySub: 'أضف إيراد حصة أو مصروف مواصلات أو مسحوبات للبدء في حساب التصفية.',
    footerText: 'EduLedger 50/50 • نظام التصفية المالية وحساب الأرباح بين الأستاذ ويوسف',
    
    // Modals
    modalIncomeTitle: 'تسجيل إيراد حصة',
    modalExpenseTitle: 'تسجيل مصروف مشترك (مواصلات / ورق)',
    modalDrawTitle: 'تسجيل مسحوبات شخصية',
    modalSettingsTitle: 'إعدادات التطبيق والأسماء',
    lblDate: 'التاريخ',
    lblLectureTitle: 'اسم الحصة / المجموعة',
    lblAmount: 'إجمالي المبلغ المستلم',
    lblCollector: 'من استلم / يحتفظ بالكاش؟',
    optPool: 'الخزينة المشتركة',
    infoSplitIncome: 'يتم تقسيم الإيراد تلقائياً <strong>50% للأستاذ</strong> و <strong>50% ليوسف</strong>.',
    btnCancel: 'إلغاء',
    btnSave: 'حفظ',
    btnSaveSettings: 'حفظ الإعدادات',
    
    lblExpenseTitle: 'وصف المصروف',
    lblCategory: 'القسم',
    catTransport: 'مواصلات / تاكسي / بنزين',
    catPrinting: 'طباعة وتصوير مذكرات',
    catSnacks: 'مشروبات ومأكولات',
    catHall: 'إيجار قاعة / نسبة السنتر',
    catOther: 'مصروفات عمل أخرى',
    lblAmountSpent: 'المبلغ المدفوع',
    lblPayer: 'من دفع من جيبه الشخصي؟',
    optExpPool: 'دُفع من الخزينة المشتركة',
    infoSplitExpense: 'المصروفات مقسمة <strong>50/50</strong>. يعوض من دفع من جيبه بنسبة 50% من حصة الطرف الآخر.',
    
    lblDrawPerson: 'من قام بالسحب الشخصي؟',
    lblDrawAmount: 'المبلغ المسحوب',
    lblDrawSource: 'مصدر المبلغ المسحوب',
    optDrawPool: 'من الخزينة المشتركة / الإيراد',
    lblDrawNote: 'ملاحظة / السبب (اختياري)',
    
    lblTeacherName: 'اسم المعلم',
    lblBrotherName: 'اسم الشريك (يوسف)',
    lblCurrency: 'رمز العملة',
    
    // Dynamic text
    typeIncome: 'إيراد',
    typeExpense: 'مصروف',
    typeDraw: 'مسحوبات',
    settledText: 'تمت التصفية بالكامل!',
    bothPositiveText: 'مستحقات التوزيع الصافية من أرباح الشهر:',
    owesText: 'ينبغي على {payer} دفع مبلغ {amount} إلى {payee}'
  },
  en: {
    splitBadge: '50/50 Split',
    subtitle: 'Lecture revenue & expense tracker for Teacher & Youssef',
    teacherRole: 'Primary Educator',
    brotherRole: 'Youssef',
    settlementTitle: 'End of Month Settlement',
    settlementSubtext: 'Based on 50/50 revenue split, out-of-pocket shared expenses, and individual cash draws.',
    netEntitlement: 'Net Entitlement',
    earnedShare: 'Earned Share (50%):',
    expenseCredit: 'Expense Credit:',
    cashDrawn: 'Cash Held/Drawn:',
    kpiTotalRevenue: 'Total Lectures Revenue',
    kpiTotalExpenses: 'Shared Expenses',
    kpiTotalDraws: 'Total Cash Drawn',
    kpiPoolCash: 'Shared Cash Pool',
    poolSub: 'Vault / Uncollected Cash',
    btnLogIncome: 'Lecture Income',
    btnLogExpense: 'Shared Expense',
    btnLogDraw: 'Cash Draw',
    btnExport: 'Export CSV',
    btnResetMonth: 'Reset Month',
    ledgerTitle: 'Transaction History',
    filterAll: 'All Types',
    filterIncome: 'Lecture Income',
    filterExpense: 'Shared Expense',
    filterDraw: 'Personal Draw',
    thDate: 'Date',
    thTitle: 'Category / Description',
    thType: 'Type',
    thAmount: 'Total Amount',
    thPerson: 'Paid / Collected By',
    thSplit: 'Split / Allocation',
    thActions: 'Actions',
    emptyTitle: 'No Transactions Found',
    emptySub: 'Add a lecture income, shared expense, or cash draw to calculate balances.',
    footerText: 'EduLedger 50/50 • Designed for seamless monthly settlement between Teacher & Youssef',
    
    modalIncomeTitle: 'Log Lecture Income',
    modalExpenseTitle: 'Log Shared Work Expense',
    modalDrawTitle: 'Log Personal Cash Draw',
    modalSettingsTitle: 'App Settings & Names',
    lblDate: 'Date',
    lblLectureTitle: 'Lecture Title / Student Group',
    lblAmount: 'Total Revenue Received',
    lblCollector: 'Who Collected / Holds Cash?',
    optPool: 'Shared Cash Box / Vault',
    infoSplitIncome: 'This amount will be split <strong>50% for Teacher</strong> and <strong>50% for Youssef</strong> automatically.',
    btnCancel: 'Cancel',
    btnSave: 'Save',
    btnSaveSettings: 'Save Settings',
    
    lblExpenseTitle: 'Expense Description',
    lblCategory: 'Category',
    catTransport: 'Transportation / Taxi',
    catPrinting: 'Printing & Materials',
    catSnacks: 'Snacks & Coffee',
    catHall: 'Hall Rental / Center Fee',
    catOther: 'Other Work Expense',
    lblAmountSpent: 'Total Amount Spent',
    lblPayer: 'Who Paid Out-of-Pocket?',
    optExpPool: 'Paid from Shared Cash Pool',
    infoSplitExpense: 'Shared expenses are divided <strong>50/50</strong>. The person who paid gets credited 50%.',
    
    lblDrawPerson: 'Who is taking the cash draw?',
    lblDrawAmount: 'Amount Taken',
    lblDrawSource: 'Source of Cash',
    optDrawPool: 'From Shared Cash Pool / Revenue',
    lblDrawNote: 'Note / Reason (Optional)',
    
    lblTeacherName: 'Teacher Display Name',
    lblBrotherName: 'Youssef Display Name',
    lblCurrency: 'Currency Symbol',
    
    typeIncome: 'Income',
    typeExpense: 'Expense',
    typeDraw: 'Draw',
    settledText: 'Month Completely Settled!',
    bothPositiveText: 'Net cash payout breakdown from earnings:',
    owesText: '{payer} owes {payee} {amount}'
  }
};

// Global State
const state = {
  settings: {
    teacherName: 'الأستاذ',
    brotherName: 'يوسف',
    currency: 'ج.م',
    theme: 'dark',
    lang: 'ar'
  },
  currentMonth: '', // YYYY-MM
  transactions: [],
  filterType: 'ALL',
  searchQuery: ''
};

// Initial Demo Data
const DEFAULT_DEMO_DATA = [
  {
    id: 'tx-101',
    date: '2026-10-01',
    month: '2026-10',
    type: 'INCOME',
    title: 'فيزياء الثانوية العامة - مراجعة الفصل الثالث',
    amount: 500,
    person: 'TEACHER',
    category: 'إيراد حصة',
    note: 'استلم الأستاذ كاش السنتر'
  },
  {
    id: 'tx-102',
    date: '2026-10-02',
    month: '2026-10',
    type: 'EXPENSE',
    title: 'تاكسي مواصلات السنتر ذهاب وإياد',
    amount: 40,
    person: 'BROTHER',
    category: 'Transportation',
    note: 'دفع يوسف من جيبه'
  },
  {
    id: 'tx-103',
    date: '2026-10-03',
    month: '2026-10',
    type: 'INCOME',
    title: 'كيمياء عضوي - مجموعة المتفوقين',
    amount: 400,
    person: 'POOL',
    category: 'إيراد حصة',
    note: 'وضعت في الخزينة المشتركة'
  },
  {
    id: 'tx-104',
    date: '2026-10-04',
    month: '2026-10',
    type: 'EXPENSE',
    title: 'تصوير واختبارات المذكرات',
    amount: 30,
    person: 'TEACHER',
    category: 'Printing & Materials',
    note: 'دفع الأستاذ للمكتبة'
  },
  {
    id: 'tx-105',
    date: '2026-10-04',
    month: '2026-10',
    type: 'DRAW',
    title: 'مسحوبات شخصية ليوسف',
    amount: 100,
    person: 'BROTHER',
    source: 'POOL',
    category: 'Personal Draw',
    note: 'مصروف شخصي'
  }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  setDefaultMonth();
  bindEvents();
  render();
});

// Storage Management
function initStorage() {
  const savedSettings = localStorage.getItem('edu_ledger_settings');
  if (savedSettings) {
    try {
      state.settings = { ...state.settings, ...JSON.parse(savedSettings) };
    } catch (e) {
      console.error('Error loading settings', e);
    }
  }

  const savedTx = localStorage.getItem('edu_ledger_transactions');
  if (savedTx) {
    try {
      state.transactions = JSON.parse(savedTx);
    } catch (e) {
      state.transactions = DEFAULT_DEMO_DATA;
    }
  } else {
    state.transactions = DEFAULT_DEMO_DATA;
    saveTransactions();
  }

  if (state.settings.theme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    document.getElementById('themeToggleBtn').innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

function saveTransactions() {
  localStorage.setItem('edu_ledger_transactions', JSON.stringify(state.transactions));
}

function saveSettings() {
  localStorage.setItem('edu_ledger_settings', JSON.stringify(state.settings));
}

function setDefaultMonth() {
  const monthPicker = document.getElementById('monthPicker');
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  
  const hasOctober2026 = state.transactions.some(t => t.month === '2026-10');
  state.currentMonth = hasOctober2026 ? '2026-10' : `${year}-${month}`;
  
  monthPicker.value = state.currentMonth;
}

// Accounting Engine Calculation (50/50 Split Logic)
function calculateAccounting(month) {
  const monthTx = state.transactions.filter(t => t.month === month);

  let totalRevenue = 0;
  let totalExpenses = 0;
  let totalDraws = 0;
  let lectureCount = 0;

  let teacherIncomeCollected = 0;
  let brotherIncomeCollected = 0;
  let poolIncomeCollected = 0;

  let teacherExpensePaid = 0;
  let brotherExpensePaid = 0;
  let poolExpensePaid = 0;

  let teacherDraws = 0;
  let brotherDraws = 0;
  let poolDraws = 0;

  monthTx.forEach(tx => {
    const amt = parseFloat(tx.amount) || 0;

    if (tx.type === 'INCOME') {
      totalRevenue += amt;
      lectureCount++;
      if (tx.person === 'TEACHER') teacherIncomeCollected += amt;
      else if (tx.person === 'BROTHER') brotherIncomeCollected += amt;
      else poolIncomeCollected += amt;
    } else if (tx.type === 'EXPENSE') {
      totalExpenses += amt;
      if (tx.person === 'TEACHER') teacherExpensePaid += amt;
      else if (tx.person === 'BROTHER') brotherExpensePaid += amt;
      else poolExpensePaid += amt;
    } else if (tx.type === 'DRAW') {
      totalDraws += amt;
      if (tx.person === 'TEACHER') teacherDraws += amt;
      else if (tx.person === 'BROTHER') brotherDraws += amt;

      if (tx.source === 'POOL' || !tx.source) poolDraws += amt;
    }
  });

  const teacherEarned = totalRevenue * 0.5;
  const brotherEarned = totalRevenue * 0.5;

  const teacherExpCredit = (teacherExpensePaid - brotherExpensePaid) * 0.5;
  const brotherExpCredit = (brotherExpensePaid - teacherExpensePaid) * 0.5;

  const teacherCashHeld = teacherIncomeCollected + teacherDraws;
  const brotherCashHeld = brotherIncomeCollected + brotherDraws;

  const teacherNet = teacherEarned + teacherExpCredit - teacherCashHeld;
  const brotherNet = brotherEarned + brotherExpCredit - brotherCashHeld;

  const poolCash = poolIncomeCollected - poolExpensePaid - poolDraws;

  return {
    totalRevenue,
    totalExpenses,
    totalDraws,
    lectureCount,
    teacherEarned,
    brotherEarned,
    teacherExpensePaid,
    brotherExpensePaid,
    teacherExpCredit,
    brotherExpCredit,
    teacherCashHeld,
    brotherCashHeld,
    teacherNet,
    brotherNet,
    poolCash
  };
}

// Render UI with i18n
function render() {
  applyLanguageUI();
  updateSettingsUI();
  updateSummaryAndHero();
  renderLedgerTable();
}

function applyLanguageUI() {
  const lang = state.settings.lang || 'ar';
  const dict = I18N[lang];
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  document.getElementById('langLabel').textContent = lang === 'ar' ? 'English' : 'العربية';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

function updateSettingsUI() {
  const curr = state.settings.currency;
  const tName = state.settings.teacherName;
  const bName = state.settings.brotherName;

  document.querySelectorAll('.currSym').forEach(el => el.textContent = curr);
  document.getElementById('teacherNameDisplay').textContent = tName;
  document.getElementById('brotherNameDisplay').textContent = bName;

  const lang = state.settings.lang || 'ar';
  if (lang === 'ar') {
    document.getElementById('optIncTeacher').textContent = `${tName} (احتفظ بالكاش)`;
    document.getElementById('optIncBrother').textContent = `${bName} (احتفظ بالكاش)`;
    document.getElementById('optExpTeacher').textContent = `${tName} دفع من جيبه`;
    document.getElementById('optExpBrother').textContent = `${bName} دفع من جيبه`;
    document.getElementById('optDrawTeacher').textContent = tName;
    document.getElementById('optDrawBrother').textContent = bName;
    document.getElementById('optDrawFromTeacher').textContent = `من يد ${tName} مباشرة`;
    document.getElementById('optDrawFromBrother').textContent = `من يد ${bName} مباشرة`;
  } else {
    document.getElementById('optIncTeacher').textContent = `${tName} (holds cash)`;
    document.getElementById('optIncBrother').textContent = `${bName} (holds cash)`;
    document.getElementById('optExpTeacher').textContent = `${tName} Paid out-of-pocket`;
    document.getElementById('optExpBrother').textContent = `${bName} Paid out-of-pocket`;
    document.getElementById('optDrawTeacher').textContent = tName;
    document.getElementById('optDrawBrother').textContent = bName;
    document.getElementById('optDrawFromTeacher').textContent = `Directly from ${tName}'s hand`;
    document.getElementById('optDrawFromBrother').textContent = `Directly from ${bName}'s hand`;
  }
}

function updateSummaryAndHero() {
  const acc = calculateAccounting(state.currentMonth);
  const curr = state.settings.currency;
  const tName = state.settings.teacherName;
  const bName = state.settings.brotherName;
  const lang = state.settings.lang || 'ar';
  const dict = I18N[lang];

  const [yr, mo] = state.currentMonth.split('-');
  const monthDate = new Date(parseInt(yr), parseInt(mo) - 1, 1);
  const monthName = monthDate.toLocaleString(lang === 'ar' ? 'ar-EG' : 'default', { month: 'long', year: 'numeric' });
  document.getElementById('settlementMonthLabel').textContent = monthName;

  document.getElementById('kpiTotalRevenue').textContent = `${acc.totalRevenue.toFixed(2)} ${curr}`;
  document.getElementById('kpiLectureCount').textContent = lang === 'ar' ? `${acc.lectureCount} حصة مسجلة` : `${acc.lectureCount} lectures logged`;

  document.getElementById('kpiTotalExpenses').textContent = `${acc.totalExpenses.toFixed(2)} ${curr}`;
  document.getElementById('kpiExpenseSub').textContent = lang === 'ar' ? `مناصفة 50/50 (${(acc.totalExpenses * 0.5).toFixed(2)} ${curr} لكل منهما)` : `50/50 split (${(acc.totalExpenses * 0.5).toFixed(2)} ${curr} each)`;

  document.getElementById('kpiTotalDraws').textContent = `${acc.totalDraws.toFixed(2)} ${curr}`;
  document.getElementById('kpiPoolCash').textContent = `${acc.poolCash.toFixed(2)} ${curr}`;

  document.getElementById('teacherNetVal').textContent = `${acc.teacherNet.toFixed(2)} ${curr}`;
  document.getElementById('teacherNetVal').className = `net-value ${acc.teacherNet >= 0 ? 'text-success' : 'text-danger'}`;
  document.getElementById('teacherEarnedVal').textContent = `${acc.teacherEarned.toFixed(2)} ${curr}`;
  document.getElementById('teacherReimburseVal').textContent = `${acc.teacherExpCredit >= 0 ? '+' : ''}${acc.teacherExpCredit.toFixed(2)} ${curr}`;
  document.getElementById('teacherDrawnVal').textContent = `-${acc.teacherCashHeld.toFixed(2)} ${curr}`;

  document.getElementById('brotherNetVal').textContent = `${acc.brotherNet.toFixed(2)} ${curr}`;
  document.getElementById('brotherNetVal').className = `net-value ${acc.brotherNet >= 0 ? 'text-success' : 'text-danger'}`;
  document.getElementById('brotherEarnedVal').textContent = `${acc.brotherEarned.toFixed(2)} ${curr}`;
  document.getElementById('brotherReimburseVal').textContent = `${acc.brotherExpCredit >= 0 ? '+' : ''}${acc.brotherExpCredit.toFixed(2)} ${curr}`;
  document.getElementById('brotherDrawnVal').textContent = `-${acc.brotherCashHeld.toFixed(2)} ${curr}`;

  const statusEl = document.getElementById('settlementStatusText');
  const subtextEl = document.getElementById('settlementSubtext');

  const tNet = acc.teacherNet;
  const bNet = acc.brotherNet;

  if (Math.abs(tNet) < 0.01 && Math.abs(bNet) < 0.01) {
    statusEl.innerHTML = `<span class="text-success"><i class="fa-solid fa-circle-check"></i> ${dict.settledText}</span>`;
    subtextEl.textContent = lang === 'ar' ? `جميع الأرباح والمصروفات مسواة تماماً لشهر ${monthName}.` : `All earnings, expenses, and draws are perfectly balanced for ${monthName}.`;
  } else if (tNet >= 0 && bNet >= 0) {
    if (lang === 'ar') {
      statusEl.innerHTML = `مستحق الصرف: <span class="text-success">${tName}</span> له <strong>${tNet.toFixed(2)} ${curr}</strong> &bull; <span class="text-purple">${bName}</span> له <strong>${bNet.toFixed(2)} ${curr}</strong>`;
    } else {
      statusEl.innerHTML = `Payout: <span class="text-success">${tName}</span> gets <strong>${tNet.toFixed(2)} ${curr}</strong> &bull; <span class="text-purple">${bName}</span> gets <strong>${bNet.toFixed(2)} ${curr}</strong>`;
    }
    subtextEl.textContent = lang === 'ar' ? `كلا الحسابين لهما رصيد مستحق للصرف من إيرادات الشهر.` : `Both accounts have positive balances to collect from available revenue.`;
  } else if (tNet < 0 && bNet > 0) {
    const oweAmt = Math.abs(tNet);
    if (lang === 'ar') {
      statusEl.innerHTML = `<span class="text-danger">يدفع ${tName} إلى ${bName}</span> <strong class="text-success">${oweAmt.toFixed(2)} ${curr}</strong>`;
      subtextEl.textContent = `احتفظ ${tName} بمبالغ أكثر من حصته وينبغي تحويل ${oweAmt.toFixed(2)} ${curr} إلى ${bName}.`;
    } else {
      statusEl.innerHTML = `<span class="text-danger">${tName} owes ${bName}</span> <strong class="text-success">${curr}${oweAmt.toFixed(2)}</strong>`;
      subtextEl.textContent = `${tName} collected/drew more cash than their share and needs to pay ${bName}.`;
    }
  } else if (bNet < 0 && tNet > 0) {
    const oweAmt = Math.abs(bNet);
    if (lang === 'ar') {
      statusEl.innerHTML = `<span class="text-purple">يدفع ${bName} إلى ${tName}</span> <strong class="text-success">${oweAmt.toFixed(2)} ${curr}</strong>`;
      subtextEl.textContent = `احتفظ ${bName} بمبالغ أكثر من حصته وينبغي تحويل ${oweAmt.toFixed(2)} ${curr} إلى ${tName}.`;
    } else {
      statusEl.innerHTML = `<span class="text-purple">${bName} owes ${tName}</span> <strong class="text-success">${curr}${oweAmt.toFixed(2)}</strong>`;
      subtextEl.textContent = `${bName} collected/drew more cash than their share and needs to pay ${tName}.`;
    }
  } else {
    statusEl.innerHTML = `${tName}: ${tNet.toFixed(2)} ${curr} | ${bName}: ${bNet.toFixed(2)} ${curr}`;
  }
}

function renderLedgerTable() {
  const tbody = document.getElementById('ledgerTableBody');
  const emptyState = document.getElementById('emptyState');
  const countBadge = document.getElementById('transactionCountBadge');
  const lang = state.settings.lang || 'ar';
  const dict = I18N[lang];

  const monthTx = state.transactions.filter(t => t.month === state.currentMonth);
  
  const filtered = monthTx.filter(t => {
    const matchesType = state.filterType === 'ALL' || t.type === state.filterType;
    const q = state.searchQuery.toLowerCase();
    const matchesSearch = !q || 
      t.title.toLowerCase().includes(q) || 
      (t.note && t.note.toLowerCase().includes(q)) ||
      (t.category && t.category.toLowerCase().includes(q));
    return matchesType && matchesSearch;
  });

  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  countBadge.textContent = lang === 'ar' ? `${filtered.length} معاملة` : `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  const curr = state.settings.currency;
  const tName = state.settings.teacherName;
  const bName = state.settings.brotherName;

  tbody.innerHTML = filtered.map(t => {
    let typeBadge = '';
    let personTag = '';
    let splitDesc = '';

    const amt = parseFloat(t.amount).toFixed(2);

    if (t.type === 'INCOME') {
      typeBadge = `<span class="type-pill type-income"><i class="fa-solid fa-graduation-cap"></i> ${dict.typeIncome}</span>`;
      personTag = getPersonTag(t.person);
      splitDesc = lang === 'ar' ? `<strong>50/50:</strong> ${(amt / 2).toFixed(2)} ${curr} لكل طرف` : `<strong>50/50:</strong> ${curr}${(amt / 2).toFixed(2)} each`;
    } else if (t.type === 'EXPENSE') {
      typeBadge = `<span class="type-pill type-expense"><i class="fa-solid fa-receipt"></i> ${dict.typeExpense}</span>`;
      personTag = getPersonTag(t.person);
      splitDesc = lang === 'ar' ? `<strong>50/50:</strong> ${(amt / 2).toFixed(2)} ${curr} مشاركة` : `<strong>50/50:</strong> ${curr}${(amt / 2).toFixed(2)} shared`;
    } else if (t.type === 'DRAW') {
      typeBadge = `<span class="type-pill type-draw"><i class="fa-solid fa-hand-holding-dollar"></i> ${dict.typeDraw}</span>`;
      personTag = getPersonTag(t.person);
      const srcName = t.source === 'POOL' ? (lang === 'ar' ? 'الخزينة المشتركة' : 'Shared Pool') : t.source === 'TEACHER' ? tName : bName;
      splitDesc = lang === 'ar' ? `مسحوبة من ${srcName}` : `Drawn from ${srcName}`;
    }

    return `
      <tr>
        <td style="white-space: nowrap; font-weight: 600;">${t.date}</td>
        <td>
          <div style="font-weight: 700;">${escapeHtml(t.title)}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(t.category || t.type)} ${t.note ? '&bull; ' + escapeHtml(t.note) : ''}</div>
        </td>
        <td>${typeBadge}</td>
        <td style="font-weight: 800; font-size: 1rem;">${amt} ${curr}</td>
        <td>${personTag}</td>
        <td style="font-size: 0.85rem;">${splitDesc}</td>
        <td>
          <button class="action-delete-btn" onclick="deleteTransaction('${t.id}')" title="مسح المعاملة">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function getPersonTag(person) {
  const tName = state.settings.teacherName;
  const bName = state.settings.brotherName;
  const lang = state.settings.lang || 'ar';

  if (person === 'TEACHER') {
    return `<span class="person-tag tag-teacher"><i class="fa-solid fa-user"></i> ${escapeHtml(tName)}</span>`;
  } else if (person === 'BROTHER') {
    return `<span class="person-tag tag-brother"><i class="fa-solid fa-user-gear"></i> ${escapeHtml(bName)}</span>`;
  } else {
    return `<span class="person-tag tag-pool"><i class="fa-solid fa-vault"></i> ${lang === 'ar' ? 'الخزينة المشتركة' : 'Shared Pool'}</span>`;
  }
}

// Event Bindings
function bindEvents() {
  document.getElementById('monthPicker').addEventListener('change', (e) => {
    state.currentMonth = e.target.value;
    render();
  });

  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderLedgerTable();
  });

  document.getElementById('typeFilter').addEventListener('change', (e) => {
    state.filterType = e.target.value;
    renderLedgerTable();
  });

  document.getElementById('langToggleBtn').addEventListener('click', () => {
    state.settings.lang = state.settings.lang === 'ar' ? 'en' : 'ar';
    saveSettings();
    render();
  });

  document.getElementById('themeToggleBtn').addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    if (isDark) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      state.settings.theme = 'light';
      document.getElementById('themeToggleBtn').innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      state.settings.theme = 'dark';
      document.getElementById('themeToggleBtn').innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
    saveSettings();
  });

  // Action Buttons (Desktop + Mobile Sticky Bar)
  const incomeBtns = ['addIncomeBtn', 'addIncomeBtnMobile'];
  incomeBtns.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => openModal('incomeModal'));
  });

  const expenseBtns = ['addExpenseBtn', 'addExpenseBtnMobile'];
  expenseBtns.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => openModal('expenseModal'));
  });

  const drawBtns = ['addDrawBtn', 'addDrawBtnMobile'];
  drawBtns.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => openModal('drawModal'));
  });

  document.getElementById('settingsBtn').addEventListener('click', () => {
    document.getElementById('cfgTeacherName').value = state.settings.teacherName;
    document.getElementById('cfgBrotherName').value = state.settings.brotherName;
    document.getElementById('cfgCurrency').value = state.settings.currency;
    openModal('settingsModal');
  });

  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close');
      closeModal(modalId);
    });
  });

  document.getElementById('incomeForm').addEventListener('submit', handleAddIncome);
  document.getElementById('expenseForm').addEventListener('submit', handleAddExpense);
  document.getElementById('drawForm').addEventListener('submit', handleAddDraw);
  document.getElementById('settingsForm').addEventListener('submit', handleSaveSettings);

  document.getElementById('exportDataBtn').addEventListener('click', exportToCSV);
  document.getElementById('resetDataBtn').addEventListener('click', handleResetMonth);
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    const today = new Date().toISOString().split('T')[0];
    modal.querySelectorAll('input[type="date"]').forEach(inp => {
      if (!inp.value) inp.value = today;
    });
    modal.classList.remove('hidden');
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('hidden');
}

function handleAddIncome(e) {
  e.preventDefault();
  const date = document.getElementById('incDate').value;
  const title = document.getElementById('incTitle').value.trim();
  const amount = parseFloat(document.getElementById('incAmount').value);
  const person = document.getElementById('incCollector').value;

  if (!date || !title || isNaN(amount) || amount <= 0) return;

  const month = date.substring(0, 7);
  const newTx = {
    id: 'tx-' + Date.now(),
    date,
    month,
    type: 'INCOME',
    title,
    amount,
    person,
    category: 'إيراد حصة',
    note: ''
  };

  state.transactions.push(newTx);
  saveTransactions();
  closeModal('incomeModal');
  e.target.reset();

  state.currentMonth = month;
  document.getElementById('monthPicker').value = month;
  render();
}

function handleAddExpense(e) {
  e.preventDefault();
  const date = document.getElementById('expDate').value;
  const title = document.getElementById('expTitle').value.trim();
  const category = document.getElementById('expCategory').value;
  const amount = parseFloat(document.getElementById('expAmount').value);
  const person = document.getElementById('expPayer').value;

  if (!date || !title || isNaN(amount) || amount <= 0) return;

  const month = date.substring(0, 7);
  const newTx = {
    id: 'tx-' + Date.now(),
    date,
    month,
    type: 'EXPENSE',
    title,
    amount,
    person,
    category,
    note: ''
  };

  state.transactions.push(newTx);
  saveTransactions();
  closeModal('expenseModal');
  e.target.reset();

  state.currentMonth = month;
  document.getElementById('monthPicker').value = month;
  render();
}

function handleAddDraw(e) {
  e.preventDefault();
  const date = document.getElementById('drawDate').value;
  const person = document.getElementById('drawPerson').value;
  const amount = parseFloat(document.getElementById('drawAmount').value);
  const source = document.getElementById('drawSource').value;
  const note = document.getElementById('drawNote').value.trim();

  if (!date || isNaN(amount) || amount <= 0) return;

  const personName = person === 'TEACHER' ? state.settings.teacherName : state.settings.brotherName;
  const month = date.substring(0, 7);
  const lang = state.settings.lang || 'ar';

  const newTx = {
    id: 'tx-' + Date.now(),
    date,
    month,
    type: 'DRAW',
    title: lang === 'ar' ? `مسحوبات شخصية (${personName})` : `Cash Draw by ${personName}`,
    amount,
    person,
    source,
    category: 'Personal Draw',
    note: note || ''
  };

  state.transactions.push(newTx);
  saveTransactions();
  closeModal('drawModal');
  e.target.reset();

  state.currentMonth = month;
  document.getElementById('monthPicker').value = month;
  render();
}

function handleSaveSettings(e) {
  e.preventDefault();
  state.settings.teacherName = document.getElementById('cfgTeacherName').value.trim() || 'الأستاذ';
  state.settings.brotherName = document.getElementById('cfgBrotherName').value.trim() || 'يوسف';
  state.settings.currency = document.getElementById('cfgCurrency').value.trim() || 'ج.م';

  saveSettings();
  closeModal('settingsModal');
  render();
}

window.deleteTransaction = function(id) {
  const lang = state.settings.lang || 'ar';
  const confirmMsg = lang === 'ar' ? 'هل أنت تأكد من حذف هذه المعاملة؟' : 'Are you sure you want to delete this transaction?';
  if (confirm(confirmMsg)) {
    state.transactions = state.transactions.filter(t => t.id !== id);
    saveTransactions();
    render();
  }
};

function handleResetMonth() {
  const lang = state.settings.lang || 'ar';
  const confirmMsg = lang === 'ar' ? `هل أنت متاكد من مسح جميع معاملات شهر ${state.currentMonth}؟` : `Are you sure you want to clear all transactions for ${state.currentMonth}?`;
  if (confirm(confirmMsg)) {
    state.transactions = state.transactions.filter(t => t.month !== state.currentMonth);
    saveTransactions();
    render();
  }
}

function exportToCSV() {
  const monthTx = state.transactions.filter(t => t.month === state.currentMonth);
  if (monthTx.length === 0) {
    alert(state.settings.lang === 'ar' ? 'لا توجد معاملات للتصدير هذا الشهر.' : 'No transactions to export for this month.');
    return;
  }

  let csvContent = '\uFEFFDate,Type,Title,Category,Amount,Paid/Collected By,Note\n';
  monthTx.forEach(t => {
    const row = [
      t.date,
      t.type,
      `"${(t.title || '').replace(/"/g, '""')}"`,
      `"${(t.category || '').replace(/"/g, '""')}"`,
      t.amount,
      t.person,
      `"${(t.note || '').replace(/"/g, '""')}"`
    ].join(',');
    csvContent += row + '\n';
  });

  const encodedUri = encodeURI('data:text/csv;charset=utf-8,' + csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `EduLedger_${state.currentMonth}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}
