import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses'
import expenseFilterReducer from '../reducers/filters'

export default () => {
    //const store = createStore(expenseReducer);
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: expenseFilterReducer
        })
    )
    return store;
}

