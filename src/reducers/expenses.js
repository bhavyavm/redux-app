const expenseReducerDefaultState = [];

export default (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense);
            return [...state, action.expense];

        case 'REMOVE_EXPENSE':
            if (action.id) {
                console.log(action.id);
                //return Object.assign(state, { expenses: state.expenses.filter((item, i) => i !== action.index) };
                // return {
                //     ...state,
                //     expenses:state.expenses.filter((item,i)=>i!==action.index)
                // }
                return state.filter((item) => item.id !== action.id);
            } else {
                return state;
            }
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id == action.id) {
                    return { ...expense, ...action.updates }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

//export default expenseReducer;