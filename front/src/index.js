import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'
import store from './store';
import NotFound from './containers/notfound';
import Login from './containers/login';
import User from './containers/user';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/user" component={User}/>
                <Redirect exact from="/" to="/login"/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
