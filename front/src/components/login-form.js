import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let {login, password} = this.state;
        let {isLoginPending, isLoginSuccess, isLoginFailure, loginUser, loginError} = this.props;
        return (
            <form name="loginForm" onSubmit={this.onSubmit}>
                <div className="form-group-collection">
                    <div className="form-group">
                        <label>Login:</label>
                        <input type="text" name="login" onChange={e => this.setState({login: e.target.value})}
                               value={login}/>
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" name="password" onChange={e => this.setState({password: e.target.value})}
                               value={password}/>
                    </div>
                </div>

                <input type="submit" value="Login"/>

                <div className="message">
                    {isLoginPending && <div>Please wait...</div>}
                    {isLoginSuccess && loginUser && <Redirect to="/user"/>}
                    {isLoginFailure && loginError && <div>{loginError}</div>}
                </div>
            </form>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        let {login, password} = this.state;
        this.props.authenticate(login, password);
        this.setState({
            password: ''
        });
    }
}
