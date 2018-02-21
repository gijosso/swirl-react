import React from 'react';

const UserItem = ({user}) => (
    <li>
        <span>{user.id}</span>
        <span>{user.login}</span>
        <span>{user.password}</span>
    </li>
);

export default UserItem;