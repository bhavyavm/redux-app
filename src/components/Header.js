import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <h3>Page Hedaer</h3>
                <ul>
                    <li><NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink></li>
                    <li><NavLink to="/add" activeClassName="is-active">Add Expense</NavLink></li>
                    <li><NavLink to="/help" activeClassName="is-active">Will Not Match</NavLink></li>
                </ul>
            </div>
        )
    }
}