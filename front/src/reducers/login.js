import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login'

export default function reducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}