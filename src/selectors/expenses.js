export default (expenses, { search, sortBy, startDate, endDate }) => {
    return expenses.filter((item) => {
        const searchDescMatch = item.description.toLowerCase().includes(search.toLowerCase());
        const searchNotesMatch = item.note.toLowerCase().includes(search.toLowerCase());
        return (searchDescMatch || searchNotesMatch);
    }).sort(function (a, b) {
        if (sortBy == 'date') {
            return a.createdAt - b.createdAt;
        } else if (sortBy == 'amount') {
            return a.amount - b.amount;
        }
    });
}