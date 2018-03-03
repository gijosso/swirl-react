export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function authenticate(login, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(null));
        dispatch(setLoginError(null));

        callLoginApi(login, password, response => {
            dispatch(setLoginPending(false));
            if (response.constructor.name !== 'Error') {
                dispatch(setLoginSuccess(response));
            } else {
                dispatch(setLoginError(response));
            }
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
            if (res.status === 200 || res.status === 201) {
                res.json().then(body => {
                    return callback(body.data);
                });
                return;
            }
            res.json().then(body => {
                    return callback(new Error(body.error));
                })
        });
}

function setLoginPending(isLoginPending) {
    return {
        type: LOGIN_PENDING, isLoginPending: isLoginPending
    };
}

function setLoginSuccess(loginSuccess) {
    return {
        type: LOGIN_SUCCESS, loginSuccess: loginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: LOGIN_FAILURE, loginError: loginError
    }
}