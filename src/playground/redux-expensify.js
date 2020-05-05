
const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expense1 = store.dispatch(addExpense({
    description: 'new car downpayment',
    note: 'this is the amount spend for the new car',
    amount: 6700,
    createdAt: 0
}));
const expense2 = store.dispatch(addExpense({
    description: 'House Contract renewd',
    note: 'deposit amount paid toward house contract egreement',
    amount: 1200,
    createdAt: 0
}));
const expense3 = store.dispatch(addExpense({
    description: 'NewYear party',
    note: 'payment towards novotel for the new year party',
    amount: 5000,
    createdAt: 0
}));

// store.dispatch(removeExpense({ id: expense2.expense.id }));
// store.dispatch(removeExpense({ id: expense1.expense.id }));
// store.dispatch(editExpense(expense3.expense.id, { amount: 1500, note: 'edited bill' }));
// store.dispatch(setFilterSearchKey('egreement'));
// store.dispatch(setFilterSearchKey());
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
// store.dispatch(setStartDate(124));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(120));