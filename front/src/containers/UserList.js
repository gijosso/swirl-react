import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userGet} from '../actions/user';
import UserItem from '../components/UserItem'
import UserAdd from '../components/UserAdd'

class UserList extends Component {
    componentDidMount() {
        this.props.userGet();
    }

    render() {
        let {isUserGetPending, userGetSuccess, userGetFailure} = this.props;
        return (
            <div>
                <ul>
                    {
                        userGetSuccess && userGetSuccess.map(user => <UserItem key={user.id} user={user}/>)
                    }
                </ul>
                <UserAdd/>

                <div className="message">
                    {isUserGetPending && <div>Please wait...</div>}
                    {userGetFailure && <div>{userGetFailure.message}</div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isUserGetPending: state.user.isUserGetPending,
        userGetSuccess: state.user.userGetSuccess,
        userGetFailure: state.user.userGetFailure
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userGet: () => dispatch(userGet())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);