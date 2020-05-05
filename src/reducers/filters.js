const expenseFilterReducerDefaultState = {
    search: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}
export default (state = expenseFilterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_KEY':
            return { ...state, search: action.key }
        case 'SET_SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' }
        case 'SET_SORT_BY_DATE':
            return { ...state, sortBy: 'date' }
        case 'SET_START_DATE':
            return { ...state, startDate: action.date }
        case 'SET_END_DATE':
            return { ...state, endDate: action.date }
        default:
            return state;
    }
}

//export default expenseFilterReducer;