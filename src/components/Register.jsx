import React, { Component } from 'react'
import { firebaseApp } from '../firebase'

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: undefined,
            password: undefined
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        const { email, password } = this.state
        e.preventDefault()
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(res => console.log(res.user.uid))
            .catch(err => console.log(err.message))

    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input id='email' type='email' placeholder='E-mail' onChange={this.handleChange} />
                <input id='password' type='password' placeholder='Password' onChange={this.handleChange} />
                <button type='submit'>Register</button>
            </form>
        )
    }
}

export default Register
