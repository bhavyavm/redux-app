import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import ExpenseList from './ExpenseList'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Dashboard Expenses</h3>
                <ExpenseList showTitle={false} />
            </div>
        )
    }
}