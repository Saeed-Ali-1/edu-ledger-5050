/**
 * EduLedger 50/50 - Teacher & Assistant Finance App
 * Accounting Engine, UI Controller, and Storage Engine
 */

// Global State
const state = {
  settings: {
    teacherName: 'Teacher',
    brotherName: 'Assistant Brother',
    currency: '$',
    theme: 'dark'
  },
  currentMonth: '', // YYYY-MM
  transactions: [],
  filterType: 'ALL',
  searchQuery: ''
};

// Initial Demo Seed Data
const DEFAULT_DEMO_DATA = [
  {
    id: 'tx-101',
    date: '2026-10-01',
    month: '2026-10',
    type: 'INCOME',
    title: 'Physics Grade 12 - Chapter 3 Lecture',
    amount: 300,
    person: 'TEACHER', // Teacher collected cash
    category: 'Lecture Income',
    note: 'Collected cash directly from center'
  },
  {
    id: 'tx-102',
    date: '2026-10-02',
    month: '2026-10',
    type: 'EXPENSE',
    title: 'Uber Taxi to Educational Center',
    amount: 24,
    person: 'BROTHER', // Brother paid out-of-pocket
    category: 'Transportation',
    note: 'Round trip taxi for both of us'
  },
  {
    id: 'tx-103',
    date: '2026-10-03',
    month: '2026-10',
    type: 'INCOME',
    title: 'Chemistry Organic Review Lecture',
    amount: 250,
    person: 'POOL', // Money put into shared cash box
    category: 'Lecture Income',
    note: 'Paid into shared box'
  },
  {
    id: 'tx-104',
    date: '2026-10-04',
    month: '2026-10',
    type: 'EXPENSE',
    title: 'Exam Sheets Printing & Worksheets',
    amount: 16,
    person: 'TEACHER', // Teacher paid out-of-pocket
    category: 'Printing & Materials',
    note: '100 copies of quiz papers'
  },
  {
    id: 'tx-105',
    date: '2026-10-04',
    month: '2026-10',
    type: 'DRAW',
    title: 'Personal Cash Draw for Assistant',
    amount: 50,
    person: 'BROTHER', // Brother took draw
    source: 'POOL',
    category: 'Personal Draw',
    note: 'Personal advance'
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

  // Apply saved theme
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
  
  // Default to 2026-10 if demo data exists for 2026-10
  const hasOctober2026 = state.transactions.some(t => t.month === '2026-10');
  state.currentMonth = hasOctober2026 ? '2026-10' : `${year}-${month}`;
  
  monthPicker.value = state.currentMonth;
}

// Accounting Engine Calculation
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

  // 50/50 Revenue Earned Shares
  const teacherEarned = totalRevenue * 0.5;
  const brotherEarned = totalRevenue * 0.5;

  // Shared Expenses Split: Each person owes 50% of out-of-pocket expenses
  // Net expense reimbursement credit for paying out of pocket:
  const teacherExpCredit = (teacherExpensePaid - brotherExpensePaid) * 0.5;
  const brotherExpCredit = (brotherExpensePaid - teacherExpensePaid) * 0.5;

  // Cash held or drawn
  const teacherCashHeld = teacherIncomeCollected + teacherDraws;
  const brotherCashHeld = brotherIncomeCollected + brotherDraws;

  // Net Payouts / Entitlements
  const teacherNet = teacherEarned + teacherExpCredit - teacherCashHeld;
  const brotherNet = brotherEarned + brotherExpCredit - brotherCashHeld;

  // Pool Cash Remaining
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

// Render UI
function render() {
  updateSettingsUI();
  updateSummaryAndHero();
  renderLedgerTable();
}

function updateSettingsUI() {
  const curr = state.settings.currency;
  document.querySelectorAll('.currSym').forEach(el => el.textContent = curr);
  document.getElementById('teacherNameDisplay').textContent = state.settings.teacherName;
  document.getElementById('brotherNameDisplay').textContent = state.settings.brotherName;
}

function updateSummaryAndHero() {
  const acc = calculateAccounting(state.currentMonth);
  const curr = state.settings.currency;
  const tName = state.settings.teacherName;
  const bName = state.settings.brotherName;

  // Month Format
  const [yr, mo] = state.currentMonth.split('-');
  const monthName = new Date(parseInt(yr), parseInt(mo) - 1, 1).toLocaleString('default', { month: 'long', year: 'numeric' });
  document.getElementById('settlementMonthLabel').textContent = monthName;

  // KPI Grid
  document.getElementById('kpiTotalRevenue').textContent = `${curr}${acc.totalRevenue.toFixed(2)}`;
  document.getElementById('kpiLectureCount').textContent = `${acc.lectureCount} lectures logged`;

  document.getElementById('kpiTotalExpenses').textContent = `${curr}${acc.totalExpenses.toFixed(2)}`;
  document.getElementById('kpiExpenseSub').textContent = `50/50 split (${curr}${(acc.totalExpenses * 0.5).toFixed(2)} each)`;

  document.getElementById('kpiTotalDraws').textContent = `${curr}${acc.totalDraws.toFixed(2)}`;
  document.getElementById('kpiPoolCash').textContent = `${curr}${acc.poolCash.toFixed(2)}`;

  // Person Cards
  document.getElementById('teacherNetVal').textContent = `${curr}${acc.teacherNet.toFixed(2)}`;
  document.getElementById('teacherNetVal').className = `net-value ${acc.teacherNet >= 0 ? 'text-success' : 'text-danger'}`;
  document.getElementById('teacherEarnedVal').textContent = `${curr}${acc.teacherEarned.toFixed(2)}`;
  document.getElementById('teacherReimburseVal').textContent = `${acc.teacherExpCredit >= 0 ? '+' : ''}${curr}${acc.teacherExpCredit.toFixed(2)}`;
  document.getElementById('teacherDrawnVal').textContent = `-${curr}${acc.teacherCashHeld.toFixed(2)}`;

  document.getElementById('brotherNetVal').textContent = `${curr}${acc.brotherNet.toFixed(2)}`;
  document.getElementById('brotherNetVal').className = `net-value ${acc.brotherNet >= 0 ? 'text-success' : 'text-danger'}`;
  document.getElementById('brotherEarnedVal').textContent = `${curr}${acc.brotherEarned.toFixed(2)}`;
  document.getElementById('brotherReimburseVal').textContent = `${acc.brotherExpCredit >= 0 ? '+' : ''}${curr}${acc.brotherExpCredit.toFixed(2)}`;
  document.getElementById('brotherDrawnVal').textContent = `-${curr}${acc.brotherCashHeld.toFixed(2)}`;

  // Settlement Hero Text Calculation
  const statusEl = document.getElementById('settlementStatusText');
  const subtextEl = document.getElementById('settlementSubtext');

  const tNet = acc.teacherNet;
  const bNet = acc.brotherNet;

  if (Math.abs(tNet) < 0.01 && Math.abs(bNet) < 0.01) {
    statusEl.innerHTML = `<span class="text-success"><i class="fa-solid fa-circle-check"></i> Month Completely Settled!</span>`;
    subtextEl.textContent = `All earnings, expenses, and draws are perfectly balanced for ${monthName}.`;
  } else if (tNet >= 0 && bNet >= 0) {
    statusEl.innerHTML = `Payout: <span class="text-success">${tName}</span> gets <strong>${curr}${tNet.toFixed(2)}</strong> &bull; <span class="text-purple">${bName}</span> gets <strong>${curr}${bNet.toFixed(2)}</strong>`;
    subtextEl.textContent = `Both accounts have positive balances to collect from available revenue.`;
  } else if (tNet < 0 && bNet > 0) {
    const oweAmt = Math.abs(tNet);
    statusEl.innerHTML = `<span class="text-danger">${tName} owes ${bName}</span> <strong class="text-success">${curr}${oweAmt.toFixed(2)}</strong>`;
    subtextEl.textContent = `${tName} has collected/drawn more cash than their 50% share and needs to pay ${bName}.`;
  } else if (bNet < 0 && tNet > 0) {
    const oweAmt = Math.abs(bNet);
    statusEl.innerHTML = `<span class="text-purple">${bName} owes ${tName}</span> <strong class="text-success">${curr}${oweAmt.toFixed(2)}</strong>`;
    subtextEl.textContent = `${bName} has collected/drawn more cash than their 50% share and needs to pay ${tName}.`;
  } else {
    statusEl.innerHTML = `Settlement: ${tName}: ${curr}${tNet.toFixed(2)} | ${bName}: ${curr}${bNet.toFixed(2)}`;
    subtextEl.textContent = `Final calculated balance for ${monthName}.`;
  }
}

function renderLedgerTable() {
  const tbody = document.getElementById('ledgerTableBody');
  const emptyState = document.getElementById('emptyState');
  const countBadge = document.getElementById('transactionCountBadge');

  const monthTx = state.transactions.filter(t => t.month === state.currentMonth);
  
  // Apply Search & Type Filters
  const filtered = monthTx.filter(t => {
    const matchesType = state.filterType === 'ALL' || t.type === state.filterType;
    const q = state.searchQuery.toLowerCase();
    const matchesSearch = !q || 
      t.title.toLowerCase().includes(q) || 
      (t.note && t.note.toLowerCase().includes(q)) ||
      (t.category && t.category.toLowerCase().includes(q));
    return matchesType && matchesSearch;
  });

  // Sort newest first
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  countBadge.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;

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
      typeBadge = `<span class="type-pill type-income"><i class="fa-solid fa-graduation-cap"></i> Income</span>`;
      personTag = getPersonTag(t.person);
      splitDesc = `<strong>50/50:</strong> ${curr}${(amt / 2).toFixed(2)} each`;
    } else if (t.type === 'EXPENSE') {
      typeBadge = `<span class="type-pill type-expense"><i class="fa-solid fa-receipt"></i> Expense</span>`;
      personTag = getPersonTag(t.person);
      splitDesc = `<strong>50/50:</strong> ${curr}${(amt / 2).toFixed(2)} shared`;
    } else if (t.type === 'DRAW') {
      typeBadge = `<span class="type-pill type-draw"><i class="fa-solid fa-hand-holding-dollar"></i> Draw</span>`;
      personTag = getPersonTag(t.person);
      splitDesc = `Drawn from ${t.source === 'POOL' ? 'Shared Pool' : t.source === 'TEACHER' ? tName : bName}`;
    }

    return `
      <tr>
        <td style="white-space: nowrap; font-weight: 600;">${t.date}</td>
        <td>
          <div style="font-weight: 700;">${escapeHtml(t.title)}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(t.category || t.type)} ${t.note ? '&bull; ' + escapeHtml(t.note) : ''}</div>
        </td>
        <td>${typeBadge}</td>
        <td style="font-weight: 800; font-size: 1rem;">${curr}${amt}</td>
        <td>${personTag}</td>
        <td style="font-size: 0.85rem;">${splitDesc}</td>
        <td>
          <button class="action-delete-btn" onclick="deleteTransaction('${t.id}')" title="Delete Transaction">
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

  if (person === 'TEACHER') {
    return `<span class="person-tag tag-teacher"><i class="fa-solid fa-user"></i> ${escapeHtml(tName)}</span>`;
  } else if (person === 'BROTHER') {
    return `<span class="person-tag tag-brother"><i class="fa-solid fa-user-gear"></i> ${escapeHtml(bName)}</span>`;
  } else {
    return `<span class="person-tag tag-pool"><i class="fa-solid fa-vault"></i> Shared Cash Pool</span>`;
  }
}

// Event Bindings
function bindEvents() {
  // Month Picker
  document.getElementById('monthPicker').addEventListener('change', (e) => {
    state.currentMonth = e.target.value;
    render();
  });

  // Search & Type Filter
  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderLedgerTable();
  });

  document.getElementById('typeFilter').addEventListener('change', (e) => {
    state.filterType = e.target.value;
    renderLedgerTable();
  });

  // Theme Toggle
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

  // Modal Open Buttons
  document.getElementById('addIncomeBtn').addEventListener('click', () => openModal('incomeModal'));
  document.getElementById('addExpenseBtn').addEventListener('click', () => openModal('expenseModal'));
  document.getElementById('addDrawBtn').addEventListener('click', () => openModal('drawModal'));
  document.getElementById('settingsBtn').addEventListener('click', () => {
    document.getElementById('cfgTeacherName').value = state.settings.teacherName;
    document.getElementById('cfgBrotherName').value = state.settings.brotherName;
    document.getElementById('cfgCurrency').value = state.settings.currency;
    openModal('settingsModal');
  });

  // Modal Close Buttons
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close');
      closeModal(modalId);
    });
  });

  // Form Submissions
  document.getElementById('incomeForm').addEventListener('submit', handleAddIncome);
  document.getElementById('expenseForm').addEventListener('submit', handleAddExpense);
  document.getElementById('drawForm').addEventListener('submit', handleAddDraw);
  document.getElementById('settingsForm').addEventListener('submit', handleSaveSettings);

  // Secondary Actions
  document.getElementById('exportDataBtn').addEventListener('click', exportToCSV);
  document.getElementById('resetDataBtn').addEventListener('click', handleResetMonth);
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    // Set default date to today or current month date
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
    category: 'Lecture Income',
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

  const newTx = {
    id: 'tx-' + Date.now(),
    date,
    month,
    type: 'DRAW',
    title: `Cash Draw by ${personName}`,
    amount,
    person,
    source,
    category: 'Personal Draw',
    note: note || 'Cash advance'
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
  state.settings.teacherName = document.getElementById('cfgTeacherName').value.trim() || 'Teacher';
  state.settings.brotherName = document.getElementById('cfgBrotherName').value.trim() || 'Assistant Brother';
  state.settings.currency = document.getElementById('cfgCurrency').value.trim() || '$';

  saveSettings();
  closeModal('settingsModal');
  render();
}

window.deleteTransaction = function(id) {
  if (confirm('Are you sure you want to delete this transaction?')) {
    state.transactions = state.transactions.filter(t => t.id !== id);
    saveTransactions();
    render();
  }
};

function handleResetMonth() {
  if (confirm(`Are you sure you want to clear all transactions for ${state.currentMonth}?`)) {
    state.transactions = state.transactions.filter(t => t.month !== state.currentMonth);
    saveTransactions();
    render();
  }
}

function exportToCSV() {
  const monthTx = state.transactions.filter(t => t.month === state.currentMonth);
  if (monthTx.length === 0) {
    alert('No transactions to export for this month.');
    return;
  }

  let csvContent = 'data:text/csv;charset=utf-8,Date,Type,Title,Category,Amount,Paid/Collected By,Note\n';
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

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `EduLedger_Settlement_${state.currentMonth}.csv`);
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
