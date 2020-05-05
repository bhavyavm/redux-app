import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setFilterSearchKey } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routers/AppRouter'
import './styles/style.css';

const store = createStore();
const state = store.getState();

store.dispatch(addExpense({
    description: 'electricity bill',
    note: 'electricity bill for october paid',
    amount: 350,
    createdAt: 5
}));
store.dispatch(addExpense({
    description: 'water bill',
    note: 'water bill for october',
    amount: 120,
    createdAt: 9
}));
store.dispatch(addExpense({
    description: 'education loan',
    note: 'education loan paid for the quarter',
    amount: 3000,
    createdAt: 2
}));

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const root = document.getElementById('app');
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, root)