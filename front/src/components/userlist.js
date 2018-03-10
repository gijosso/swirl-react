import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userGet} from '../actions/user';
import UserItem from './useritem'
import UserAdd from './useradd'

class UserList extends Component {
    componentDidMount() {
        this.props.userGet();
    }

    render() {
        let {isUserGetPending, /*isUserGetSuccess,*/ isUserGetFailure,
            isUserAddPending, /*isUserAddSuccess,*/ isUserAddFailure,
            isUserRemovePending, /*isUserRemoveSuccess,*/ isUserRemoveFailure,
            userList, userError
        } = this.props;
        return (
            <div>
                <ul>
                    {
                        userList.map(user => <UserItem key={user.id} user={user}/>)
                    }
                </ul>
                <UserAdd/>

                <div className="message">
                    {(isUserGetPending || isUserAddPending || isUserRemovePending) &&  <div>Please wait...</div>}
                    {(isUserGetFailure || isUserAddFailure || isUserRemoveFailure) && <div>{userError}</div>}
                </div>
            </div>
        )
    }
}

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