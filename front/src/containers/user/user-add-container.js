import React from 'react';
import {connect} from 'react-redux';
import {userAdd} from '../../actions/user';

import UserAdd from '../../components/user/user-add'

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        userAdd: (email, password) => dispatch(userAdd(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAdd);