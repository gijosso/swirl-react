import {
    USER_ADD_FAILURE,
    USER_ADD_PENDING,
    USER_ADD_SUCCESS,
    USER_REMOVE_FAILURE,
    USER_REMOVE_PENDING,
    USER_REMOVE_SUCCESS
} from '../actions/user'

export default function reducer(state = {
    isUserAddPending: false,
    userAddSuccess: null,
    userAddFailure: null,

    isRemovePending: false,
    userRemoveSuccess: null,
    userRemoveFailure: null
}, action) {
    switch (action.type) {
        case USER_ADD_PENDING:
            return Object.assign({}, state, {
                isUserAddPending: action.isUserAddPending
            });

        case USER_ADD_SUCCESS:
            return Object.assign({}, state, {
                userAddSuccess: action.userAddSuccess
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
                userRemoveSuccess: action.userRemoveSuccess
            });

        case USER_REMOVE_FAILURE:
            return Object.assign({}, state, {
                userRemoveFailure: action.userRemoveFailure
            });

        default:
            return state;
    }
}