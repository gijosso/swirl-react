import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userRemove} from '../actions/user';

class UserDelete extends Component {
    componentDidMount() {
        this._onClick = this._onClick.bind(this);
    }

    render() {
        let {id} = this.props;
        return (
            <div onClick={() => this._onClick()}>Delete</div>
        )
    }

    _onClick() {
        let {id} = this.props;
        this.props.userRemove(id);
    }
}

const mapStateToProps = (state) => {
    return {
        isUserRemovePending: state.user.isUserRemovePending,
        userRemoveSuccess: state.user.userRemoveSuccess,
        userRemoveFailure: state.user.userRemoveFailure
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userRemove: (id) => dispatch(userRemove(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDelete);