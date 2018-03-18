import React from 'react';
import {connect} from 'react-redux';
import {userGet} from '../../actions/user';

import UserList from '../../components/user/user-list';

const mapStateToProps = (state) => {
    return {
        isUserGetPending: state.user.isUserGetPending,
        isUserGetSuccess: state.user.isUserGetSuccess,
        isUserGetFailure: state.user.isUserGetFailure,

        isUserAddPending: state.user.isUserAddPending,
        isUserAddSuccess: state.user.isUserAddSuccess,
        isUserAddFailure: state.user.isUserAddFailure,

        isUserRemovePending: state.user.isUserRemovePending,
        isUserRemoveSuccess: state.user.isUserRemoveSuccess,
        isUserRemoveFailure: state.user.isUserRemoveFailure,

        userList: state.user.userList,
        userError: state.user.userError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userGet: () => dispatch(userGet())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);