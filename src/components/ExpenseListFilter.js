import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterSearchKey, sortByAmount, sortByDate } from '../actions/filters';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilter extends Component {
    constructor(props) {
        super(props);
        console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    handleSearchKeyChange = (e) => {
        this.props.dispatch(setFilterSearchKey(e.target.value))
    }
    handlesortByChange = (e) => {
        if (e.target.value == 'date') {
            this.props.dispatch(sortByDate());
        } else if (e.target.value == 'amount') {
            this.props.dispatch(sortByAmount());
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    name="search"
                    placeholder="search"
                    onChange={(e) => {
                        this.props.dispatch(setFilterSearchKey(e.target.value))
                    }}
                    value={this.props.filters.search}
                />
                <label>Order By</label>
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.handlesortByChange}
                >
                    <option value="date" >date</option>
                    <option value="amount">amount</option>
                </select>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilter);