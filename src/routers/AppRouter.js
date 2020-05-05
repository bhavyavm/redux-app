import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help'
import PageNotFound from '../components/PageNotFound'
import Header from '../components/Header'

const AppRouter = (props) => {
    return (
        <BrowserRouter >
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/add" component={AddExpense} />
                    <Route path="/edit/:id" component={EditExpense} />
                    <Route exact path="/help" component={Help} />
                    <Route exact component={PageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default AppRouter;