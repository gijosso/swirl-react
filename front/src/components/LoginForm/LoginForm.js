import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authenticate} from '../../actions/login';

class LoginForm extends Component {

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
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
            <form name="loginForm" onSubmit={this.onSubmit}>
                <div className="form-group-collection">
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" name="email" onChange={e => this.setState({login: e.target.value})}
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
                    {isLoginSuccess && <div>Success.</div>}
                    {loginError && <div>{loginError.message}</div>}
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

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.login.isLoginPending,
        isLoginSuccess: state.login.isLoginSuccess,
        loginError: state.login.loginError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (email, password) => dispatch(authenticate(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);