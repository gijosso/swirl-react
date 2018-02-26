export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function authenticate(login, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        callLoginApi(login, password, error => {
            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setLoginSuccess(true));
            } else {
                dispatch(setLoginError(error));
            }
        });
    }
}

function setLoginPending(isLoginPending) {
    return {
        type: LOGIN_PENDING, isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess) {
    return {
        type: LOGIN_SUCCESS, isLoginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: LOGIN_FAILURE, loginError
    }
}

function callLoginApi(login, password, callback) {
    fetch('http://localhost:8080/authenticate', {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: "login=" + login + "&password=" + password
    })
        .then(res => {
            if (res.status === 200) {
                return callback(null);
            }
            return callback(new Error('Invalid login/password'))
        });
}