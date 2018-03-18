import React from 'react';
import {connect} from 'react-redux';
import {authenticate} from '../actions/login';

import LoginForm from '../components/login-form';

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.login.isLoginPending,
        isLoginSuccess: state.login.isLoginSuccess,
        isLoginFailure: state.login.isLoginFailure,
        loginUser: state.login.loginUser,
        loginError: state.login.loginError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (email, password) => dispatch(authenticate(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);