import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

class EditExpense extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = (form) => {
        this.props.dispatch(editExpense(this.props.match.params.id, {
            description: form.description,
            note: form.note,
            amount: form.amount,
            createdAt: form.createdAt
        }));
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h3>Edit Expenses</h3>
                <ExpenseForm handleSubmit={this.handleSubmit} expense={this.props.expense} />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}
export default connect(mapStateToProps)(EditExpense)