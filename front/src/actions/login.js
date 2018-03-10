export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function authenticate(login, password) {
    return dispatch => {
        dispatch(setLoginPending());
        callLoginApi(login, password, response => {
            dispatch(!response.error ? setLoginSuccess(response) : setLoginError(response));
        });
    }
}

function callLoginApi(login, password, callback) {
    fetch('http://localhost:8080/authenticate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        },
        redirect: 'follow',
        credentials: 'include',
        body: "login=" + login + "&password=" + password
    })
        .then(res => {
            res.json().then(body => {
                return callback(body);
            })
        });
}

function setLoginPending() {
    return {
        type: LOGIN_PENDING
    };
}

function setLoginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS, loginUser: payload.data
    };
}

function setLoginError(payload) {
    return {
        type: LOGIN_FAILURE, loginError: payload.error
    }
}