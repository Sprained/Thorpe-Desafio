import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/home' component={Home} />
                <Route path='/register' component={Register} />
            </Switch>
        </Router>
    );
}