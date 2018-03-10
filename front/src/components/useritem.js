import React, {Component} from 'react';
import UserDelete from './userdelete'

class UserItem extends Component {
    render() {
        let {user} = this.props;
        return (
            <li>
                <span>{user.login}<UserDelete id={user.id}/></span>
            </li>
        )
    }
}

export default UserItem;