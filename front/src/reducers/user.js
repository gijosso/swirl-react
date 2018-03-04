import {
    USER_GET_FAILURE,
    USER_GET_PENDING,
    USER_GET_SUCCESS,
    USER_ADD_FAILURE,
    USER_ADD_PENDING,
    USER_ADD_SUCCESS,
    USER_REMOVE_FAILURE,
    USER_REMOVE_PENDING,
    USER_REMOVE_SUCCESS, userRemove
} from '../actions/user'

export default function reducer(state = {
    isUserGetPending: false,
    userGetSuccess: null,
    userGetFailure: null,

    isUserAddPending: false,
    userAddSuccess: null,
    userAddFailure: null,

    isRemovePending: false,
    userRemoveSuccess: null,
    userRemoveFailure: null
}, action) {
    switch (action.type) {
        case USER_GET_PENDING:
            return Object.assign({}, state, {
                isUserGetPending: action.isUserGetPending
            });

        case USER_GET_SUCCESS:
            return Object.assign({}, state, {
                userGetSuccess: action.userGetSuccess
            });

        case USER_GET_FAILURE:
            return Object.assign({}, state, {
                userGetFailure: action.userGetFailure
            });

        case USER_ADD_PENDING:
            return Object.assign({}, state, {
                isUserAddPending: action.isUserAddPending
            });

        case USER_ADD_SUCCESS:
            return Object.assign({}, state, {
                userGetSuccess: action.userAddSuccess ? state.userGetSuccess.concat(action.userAddSuccess) : state.userGetSuccess, userAddSuccess: action.userAddSuccess
            });

        case USER_ADD_FAILURE:
            return Object.assign({}, state, {
                userAddFailure: action.userAddFailure
            });

        case USER_REMOVE_PENDING:
            return Object.assign({}, state, {
                isUserRemovePending: action.isUserRemovePending
            });

        case USER_REMOVE_SUCCESS:
            return Object.assign({}, state, {
                userGetSuccess: action.userRemoveSuccess ? state.userGetSuccess.filter(user => user.id !== action.userRemoveSuccess.id) : state.userGetSuccess, userRemoveSuccess: action.userRemoveSuccess
            });

        case USER_REMOVE_FAILURE:
            return Object.assign({}, state, {
                userRemoveFailure: action.userRemoveFailure
            });

        default:
            return state;
    }
}