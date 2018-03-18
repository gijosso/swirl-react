import React from 'react';
import {connect} from 'react-redux';
import {userRemove} from '../../actions/user';

import UserDelete from '../../components/user/user-delete';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        userRemove: (id) => dispatch(userRemove(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDelete);