import React, {Component} from 'react';
import UserItem from './user-item';
import UserAdd from '../../containers/user/user-add-container';

export default class UserList extends Component {
    componentDidMount() {
        this.props.userGet();
    }

    render() {
        let {
            isUserGetPending, /*isUserGetSuccess,*/ isUserGetFailure,
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
                    {(isUserGetPending || isUserAddPending || isUserRemovePending) && <div>Please wait...</div>}
                    {(isUserGetFailure || isUserAddFailure || isUserRemoveFailure) && <div>{userError}</div>}
                </div>
            </div>
        )
    }
}
