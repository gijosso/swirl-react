import React, {Component} from 'react';

export default class UserDelete extends Component {
    componentDidMount() {
        this._onClick = this._onClick.bind(this);
    }

    render() {
        return (
            <div onClick={() => this._onClick()}>Delete</div>
        )
    }

    _onClick() {
        const {id} = this.props;
        this.props.userRemove(id);
    }
}
