import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            description: props.expense.description ? props.expense.description : '',
            note: props.expense.note ? props.expense.note : '',
            amount: props.expense.amount ? props.expense.amount : '',
            createdAt: props.expense.createdAt ? props.expense.createdAt : moment(),
            calandarFocus: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit({
            description: this.state.description,
            note: this.state.note,
            amount: this.state.amount,
            createdAt: 0
        });
        this.setState(() => ({
            description: '',
            note: '',
            amount: '',
            createdAt: moment(),
            calandarFocus: true
        }))
        this.props.history.push('/');
    }
    handleDescriptionChange = (e) => {
        let description = e.target.value;
        this.setState(() => ({ description }));
    }
    handleNoteChange = (e) => {
        let note = e.target.value;
        this.setState(() => ({ note }));
    }

    handleAmountChange = (e) => {
        let amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    render() {
        return (
            <div>
                <h3>AddExpense Page</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <p><label>Description</label></p>
                            <input
                                type="text"
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                                name="description"
                                required
                                autoFocus
                            />
                        </div>
                        <div>
                            <p><label>Note</label></p>
                            <textarea
                                value={this.state.note}
                                onChange={this.handleNoteChange}
                                name="note"
                            ></textarea>
                        </div>
                        <div>
                            <p><label>Amount</label></p>
                            <input
                                type="text"
                                value={this.state.amount}
                                onChange={this.handleAmountChange}
                                name="amount"
                                required />
                        </div>
                        {/* <div>
                            <SingleDatePicker
                                date={this.state.createdAt}
                                onDateChange={createdAt => this.setState({ createdAt })}
                                focused={this.state.calandarFocus}
                                onFocusChange={({ calandarFocus }) => this.setState({ calandarFocus })}
                            />
                        </div> */}
                    </div>
                    <div>
                        <button type="submit">save</button>
                    </div>
                </form>
            </div >
        )
    }
}
