import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Dashboard } from '../pages/dashboard';
import { TransactionList } from '../pages/transactions/TransactionList';


const Routes: React.FC = () => {
    return (
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={TransactionList} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;