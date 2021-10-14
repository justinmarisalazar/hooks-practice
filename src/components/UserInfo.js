import React, { Component } from 'react'

export class UserInfo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: {}
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(promise => promise.json())
        .then(data => this.setState({ user: data }));
    }
    
    render() {
        return (
            <div>
                User Info:<br />
                Name: {this.state.user.name}<br />
                Username: {this.state.user.username}<br />
                Email: {this.state.user.email}
            </div>
        )
    }
}

export default UserInfo
