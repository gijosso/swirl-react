import {LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESS} from '../actions/login'

export default function reducer(state = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginFailure: false,
    loginError: null,
    loginUser: null,

}, action) {
    switch (action.type) {
        case LOGIN_PENDING:
            return Object.assign({}, state, {
                isLoginPending: true, isLoginSuccess: false, isLoginFailure: false, loginError: null, loginUser: null
            });

        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoginPending: false, isLoginSuccess: true, isLoginFailure: false, loginError: null, loginUser: action.loginUser
            });

        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isLoginPending: false, isLoginSuccess: false, isLoginFailure: true, loginError: action.loginError, loginUser: null
            });

        default:
            return state;
    }
}