import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userAdd} from '../actions/user';

class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let {login, password} = this.state;
        let {isUserAddPending, userAddSuccess, userAddFailure} = this.props;
        return (
            <form name="loginForm" onSubmit={this.onSubmit}>
                <div className="form-group-collection">
                    <div className="form-group">
                        <label>Login:</label>
                        <input type="text" name="login" onChange={e => this.setState({login: e.target.value})}
                               value={login}/>
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" name="password" onChange={e => this.setState({password: e.target.value})}
                               value={password}/>
                    </div>
                </div>

                <input type="submit" value="Add"/>

                <div className="message">
                    {isUserAddPending && <div>Please wait...</div>}
                    {userAddSuccess !== null && <div>User added !</div>}
                    {userAddFailure && <div>{userAddFailure.message}</div>}
                </div>
            </form>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        let {login, password} = this.state;
        this.props.userAdd(login, password);
        this.setState({
            user: '',
            password: ''
        });
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAddPending: state.user.isUserAddPending,
        userAddSuccess: state.user.userAddSuccess,
        userAddFailure: state.user.userAddFailure
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userAdd: (email, password) => dispatch(userAdd(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAdd);