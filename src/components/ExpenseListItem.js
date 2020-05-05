import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ({ index, item, dispatch }) => (
    <tr>
        <td>{index + 1}</td>
        <td><Link to={`/edit/${item.id}`}>{item.description}</Link></td>
        <td>{item.note}</td>
        <td>${item.amount ? item.amount : 0}</td>
        <td>{item.createdAt}</td>
        <td>
            <Link to={`/edit/${item.id}`}><Button variant="primary">Edit</Button></Link>
            <Button variant="primary" onClick={() => {
                dispatch(removeExpense({ id: item.id }))
            }}>Delete</Button>
        </td>
    </tr>
);
export default connect()(ExpenseListItem);

