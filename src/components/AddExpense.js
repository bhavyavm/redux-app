import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

class AddExpense extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = (form) => {
        this.props.dispatch(addExpense({
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
                <h3>AddExpense Page</h3>
                <ExpenseForm handleSubmit={this.handleSubmit}/>
            </div >
        )
    }
}
export default connect()(AddExpense)