import {
    USER_GET_FAILURE,
    USER_GET_PENDING,
    USER_GET_SUCCESS,
    USER_ADD_FAILURE,
    USER_ADD_PENDING,
    USER_ADD_SUCCESS,
    USER_REMOVE_FAILURE,
    USER_REMOVE_PENDING,
    USER_REMOVE_SUCCESS,
} from '../actions/user'

export default function reducer(state = {
    isUserGetPending: false,
    isUserGetSuccess: false,
    isUserGetFailure: false,

    isUserAddPending: false,
    isUserAddSuccess: false,
    isUserAddFailure: false,

    isUserRemovePending: false,
    isUserRemoveSuccess: false,
    isUserRemoveFailure: false,

    userList: [],
    userAddedList: [],
    userRemovedList: [],

    userError: null
}, action) {
    switch (action.type) {
        case USER_GET_PENDING:
            return Object.assign({}, state, {
                isUserGetPending: true, isUserGetSuccess: false, isUserGetFailure: false
            });

        case USER_GET_SUCCESS:
            return Object.assign({}, state, {
                isUserGetPending: false, isUserGetSuccess: true, isUserGetFailure: false, userList: action.userList
            });

        case USER_GET_FAILURE:
            return Object.assign({}, state, {
                isUserGetPending: false, isUserGetSuccess: false, isUserGetFailure: true, userError: action.userError
            });

        case USER_ADD_PENDING:
            return Object.assign({}, state, {
                isUserAddPending: true, isUserAddSuccess: false, isUserAddFailure: false
            });

        case USER_ADD_SUCCESS:
            return Object.assign({}, state, {
                isUserAddPending: false, isUserAddSuccess: true, isUserAddFailure: false, userList: state.userList.concat(action.userAdded), userAddedList: state.userAddedList.concat(action.userAdded)
            });

        case USER_ADD_FAILURE:
            return Object.assign({}, state, {
                isUserAddPending: false, isUserAddSuccess: false, isUserAddFailure: true, userError: action.userError
            });

        case USER_REMOVE_PENDING:
            return Object.assign({}, state, {
                isUserRemovePending: true, isUserRemoveSuccess: false, isUserRemoveFailure: false
            });

        case USER_REMOVE_SUCCESS:
            return Object.assign({}, state, {
                isUserRemovePending: true, isUserRemoveSuccess: false, isUserRemoveFailure: false, userList: state.userList.filter(user => user.id !== action.userRemoved.id), userRemovedList: state.userRemovedList.concat(action.userRemoved)
            });

        case USER_REMOVE_FAILURE:
            return Object.assign({}, state, {
                userRemoveFailure: action.userRemoveFailure
            });

        default:
            return state;
    }
}