import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userGet} from '../actions/user';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.props.userGet();
    }

    render() {
        let {users} = this.state;
        let {isGetPending, getSuccess, getError} = this.props;
        return (
            <div>
                <ul>
                    {
                        users.map(user => <li>{user.login}</li>)
                    }
                </ul>

                <div className="message">
                    {isGetPending && <div>Please wait...</div>}
                    {getSuccess && <div>{getSuccess}</div>}
                    {getError && <div>{getError.message}</div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isGetPending: state.user.isGetPending,
        getSuccess: state.user.getSuccess,
        getError: state.user.loginError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userGet: () => dispatch(userGet())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);