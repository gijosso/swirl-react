import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import store from './store';
import UserList from './containers/UserList';
import NotFound from './components/NotFound';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginForm}/>
                <Route exact path="/login" component={LoginForm}/>
                <Route exact path="/user" component={UserList}/>
                <Redirect exact from="/" to="/login"/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
