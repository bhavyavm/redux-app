import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';
import ExpenseListFilter from './ExpenseListFilter';

class ExpenseList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.showTitle && <h5>All Expenses</h5>}
                <ExpenseListFilter />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>Description</th>
                            <th>Notes</th>
                            <th>Amount</th>
                            <th>CreatedAt</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.expenses.map((item, index) => {
                                return (
                                    <ExpenseListItem index={index} item={item} key={index} />
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters),
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpenseList);