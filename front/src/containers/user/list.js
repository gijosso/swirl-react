import React from 'react';
import {connect} from 'react-redux';
import UserItem from '../../components/user/item';

// pick useful properties from application state
const mapStateToProps = (state, ownProps) => ({
    users: state.users,
});

const UserList = ({users}) => (
    <ul style={{listStyle: 'none', padding: 0, backgroundColor: "#E9573F"}}>
        {
            users.map(user => <UserItem key={user.id} user={user}/>)
        }
    </ul>
);

// "enhance" layout with properties inherited from application state
export default connect(mapStateToProps)(UserList);