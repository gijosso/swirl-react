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
        dispatch(setUserGetPending(true));
        dispatch(setUserGetSuccess(null));
        dispatch(setUserGetFailure(null));

        callUserGetApi(response => {
            dispatch(setUserGetPending(false));
            if (response.constructor.name !== 'Error') {
                dispatch(setUserGetSuccess(response));
            }
            else {
                dispatch(setUserGetFailure(response));
            }
        })
    }
}

export function userAdd(login, password) {
    return dispatch => {
        dispatch(setUserAddPending(true));
        dispatch(setUserAddSuccess(null));
        dispatch(setUserAddFailure(null));

        callUserAddApi(login, password, response => {
            dispatch(setUserAddPending(false));
            if (response.constructor.name !== 'Error') {
                dispatch(setUserAddSuccess(response));
            }
            else {
                dispatch(setUserAddFailure(response));
            }
        })
    }
}

export function userRemove(id) {
    return dispatch => {
        dispatch(setUserRemovePending(true));
        dispatch(setUserRemoveSuccess(null));
        dispatch(setUserRemoveFailure(null));

        callUserDeleteApi(id, response => {
            dispatch(setUserRemovePending(false));
            if (response.constructor.name !== 'Error') {
                dispatch(setUserRemoveSuccess(response));
            }
            else {
                dispatch(setUserRemoveFailure(response));
            }
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
            if (res.status === 200) {
                res.json().then(body => {
                    return callback(body.data);
                });
                return;
            }
            res.json().then(body => {
                return callback(new Error(body.error));
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
            if (res.status === 201) {
                res.json().then(body => {
                    return callback(body.data);
                });
                return;
            }
            res.json().then(body => {
                return callback(new Error(body.error));
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
            if (res.status === 200) {
                res.json().then(body => {
                    return callback(body.data);
                });
                return;
            }
            res.json().then(body => {
                return callback(new Error(body.error));
            });
        });
}

function setUserGetPending(isUserGetPending) {
    return {
        type: USER_GET_PENDING, isUserGetPending: isUserGetPending
    }
}

function setUserGetSuccess(userGetSuccess) {
    return {
        type: USER_GET_SUCCESS, userGetSuccess: userGetSuccess
    }
}

function setUserGetFailure(userGetFailure) {
    return {
        type: USER_GET_FAILURE, userGetFailure: userGetFailure
    }
}

function setUserAddPending(isUserAddPending) {
    return {
        type: USER_ADD_PENDING, isUserAddPending
    }
}

function setUserAddSuccess(userAddSuccess) {
    return {
        type: USER_ADD_SUCCESS, userAddSuccess
    }
}

function setUserAddFailure(userAddFailure) {
    return {
        type: USER_ADD_FAILURE, userAddFailure
    }
}

function setUserRemovePending(isUserRemovePending) {
    return {
        type: USER_REMOVE_PENDING, isUserRemovePending
    }
}

function setUserRemoveSuccess(userRemoveSuccess) {
    return {
        type: USER_REMOVE_SUCCESS, userRemoveSuccess
    }
}

function setUserRemoveFailure(userRemoveFailure) {
    return {
        type: USER_REMOVE_FAILURE, userRemoveFailure
    }
}

