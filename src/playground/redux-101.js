import { createStore } from 'redux';


// create action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});
const resetCount = () => ({
    type: 'RESET'
})
const setCount = (payload = {}) => ({
    type: 'SET',
    count: typeof payload.count === 'number' ? payload.count : 0
})



//reducers 

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
}



const store = createStore(countReducer);

console.log(store.getState());
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 10 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 45 }));
