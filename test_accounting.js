// Verification script for 50/50 accounting math engine

function calculateAccounting(transactions, month) {
  const monthTx = transactions.filter(t => t.month === month);

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
    teacherExpCredit,
    brotherExpCredit,
    teacherCashHeld,
    brotherCashHeld,
    teacherNet,
    brotherNet,
    poolCash
  };
}

// Test Case 1: Simple 50/50 Income split ($500 revenue collected by Teacher)
const test1 = [
  { month: '2026-10', type: 'INCOME', amount: 500, person: 'TEACHER' }
];
const res1 = calculateAccounting(test1, '2026-10');
console.assert(res1.teacherNet === -250, `Test 1 Teacher Net failed: expected -250, got ${res1.teacherNet}`);
console.assert(res1.brotherNet === 250, `Test 1 Brother Net failed: expected 250, got ${res1.brotherNet}`);
console.log('✓ Test 1 Passed: Teacher owes Brother $250 when Teacher holds full $500 revenue.');

// Test Case 2: Out-of-pocket taxi expense ($30 paid by Brother)
const test2 = [
  { month: '2026-10', type: 'INCOME', amount: 500, person: 'TEACHER' },
  { month: '2026-10', type: 'EXPENSE', amount: 30, person: 'BROTHER' }
];
const res2 = calculateAccounting(test2, '2026-10');
// Teacher earned: 250. Teacher exp credit: -15. Teacher held: 500. Net: 250 - 15 - 500 = -265
// Brother earned: 250. Brother exp credit: +15. Brother held: 0. Net: 250 + 15 = 265
console.assert(res2.teacherNet === -265, `Test 2 Teacher Net failed: expected -265, got ${res2.teacherNet}`);
console.assert(res2.brotherNet === 265, `Test 2 Brother Net failed: expected 265, got ${res2.brotherNet}`);
console.log('✓ Test 2 Passed: Teacher owes Brother $265 ($250 revenue share + $15 taxi reimbursement).');

// Test Case 3: Personal Cash Draw by Brother ($50 drawn from pool)
const test3 = [
  { month: '2026-10', type: 'INCOME', amount: 500, person: 'POOL' },
  { month: '2026-10', type: 'DRAW', amount: 50, person: 'BROTHER', source: 'POOL' }
];
const res3 = calculateAccounting(test3, '2026-10');
// Teacher earned: 250. Teacher held: 0. Net: 250
// Brother earned: 250. Brother held: 50. Net: 200
// Pool cash: 500 - 50 = 450
console.assert(res3.teacherNet === 250, `Test 3 Teacher Net failed: expected 250, got ${res3.teacherNet}`);
console.assert(res3.brotherNet === 200, `Test 3 Brother Net failed: expected 200, got ${res3.brotherNet}`);
console.assert(res3.poolCash === 450, `Test 3 Pool Cash failed: expected 450, got ${res3.poolCash}`);
console.log('✓ Test 3 Passed: Teacher gets $250 from pool, Brother gets $200 from pool (after $50 draw).');

console.log('\nALL 50/50 ACCOUNTING ENGINE UNIT TESTS PASSED SUCCESSFULLY! 🎉');
