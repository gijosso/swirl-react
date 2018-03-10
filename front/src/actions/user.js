export const USER_GET_PENDING = 'USER_GET_PENDING';
export const USER_GET_SUCCESS = 'USER_GET_SUCCESS';
export const USER_GET_FAILURE = 'USER_GET_FAILURE';
export const USER_ADD_PENDING = 'USER_ADD_PENDING';
export const USER_ADD_SUCCESS = 'USER_ADD_SUCCESS';
export const USER_ADD_FAILURE = 'USER_ADD_FAILURE';
export const USER_REMOVE_PENDING = 'USER_REMOVE_PENDING';
export const USER_REMOVE_SUCCESS = 'USER_REMOVE_SUCCESS';
export const USER_REMOVE_FAILURE = 'USER_REMOVE_FAILURE';

export function userGet() {
    return dispatch => {
        dispatch(setUserGetPending());
        callUserGetApi(response => {
            dispatch(!response.error ? setUserGetSuccess(response) : setUserGetFailure(response));
        })
    }
}

export function userAdd(login, password) {
    return dispatch => {
        dispatch(setUserAddPending());
        callUserAddApi(login, password, response => {
            dispatch(!response.error ? setUserAddSuccess(response) : setUserAddFailure(response));
        })
    }
}

export function userRemove(id) {
    return dispatch => {
        dispatch(setUserRemovePending());
        callUserDeleteApi(id, response => {
            dispatch(!response.error ? setUserRemoveSuccess(response) : setUserRemoveFailure(response));
        })
    }
}

function callUserGetApi(callback) {
    fetch('http://localhost:8080/user/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        },
        redirect: 'follow',
        credentials: 'include'
    })
        .then(res => {
            res.json().then(body => {
                return callback(body);
            });
        });
}

function callUserAddApi(login, password, callback) {
    fetch('http://localhost:8080/user', {
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
            });
        });
}

function callUserDeleteApi(id, callback) {
    fetch('http://localhost:8080/user/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        },
        redirect: 'follow',
        credentials: 'include'
    })
        .then(res => {
            res.json().then(body => {
                return callback(body);
            });
        });
}

function setUserGetPending() {
    return {
        type: USER_GET_PENDING
    }
}

function setUserGetSuccess(payload) {
    return {
        type: USER_GET_SUCCESS, userList: payload.data
    }
}

function setUserGetFailure(payload) {
    return {
        type: USER_GET_FAILURE, userError: payload.error
    }
}

function setUserAddPending() {
    return {
        type: USER_ADD_PENDING
    }
}

function setUserAddSuccess(payload) {
    return {
        type: USER_ADD_SUCCESS, userAdded: payload.data
    }
}

function setUserAddFailure(payload) {
    return {
        type: USER_ADD_FAILURE, userError: payload.error
    }
}

function setUserRemovePending() {
    return {
        type: USER_REMOVE_PENDING
    }
}

function setUserRemoveSuccess(payload) {
    return {
        type: USER_REMOVE_SUCCESS, userRemoved: payload.data
    }
}

function setUserRemoveFailure(payload) {
    return {
        type: USER_REMOVE_FAILURE, userError: payload.error
    }
}
