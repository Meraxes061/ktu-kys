import React, { Component } from 'react'
import { firebaseApp } from '../firebase'
import { ROUTES } from '../constants'
import Loading from './Loading';

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: undefined,
            password: undefined,
            loading: false,
            errorCode: ''
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
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                this.setState({
                    loading: true
                })
                firebaseApp.firestore().collection('users').where('account_FK', '==', res.user.uid).get()
                    .then(s => {
                        s.forEach(d => {
                            localStorage.setItem('user', JSON.stringify({ id: d.id, ...d.data() }))
                        })
                    })
                    .then(() => {
                        this.setState({
                            loading: false
                        })
                    })
                    .then(() => {
                        this.props.history.push(ROUTES.HOME)
                    }) // Arrow func kullanınca sorun yok direkt this.props yazınca iki kere basmak gerekiyor butona ?

            })
            .catch(err => {
                this.setState({
                    loading: false,
                    errorCode: err.code
                }, () => console.log(err.code))
            })
    }

    setMessage = () => {
        let { errorCode } = this.state
        switch (errorCode) {
            case 'auth/user-not-found':
                return <small className="form-text text-muted">Kullanıcı bulunamadı</small>
            case 'auth/wrong-password':
                return <small className="form-text text-muted">Kullanıcı adı veya parola hatalı</small>
            default:
                return
        }
    }

    render() {
        const { loading } = this.state
        return (
            loading
                ? <Loading />
                : <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                            <div className="card p-4 shadow-sm">
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <input id='email' className='form-control' type='email' placeholder='E-mail' onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <input id='password' className='form-control' type='password' placeholder='Password' onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        {this.setMessage()}
                                    </div>
                                    < button type='submit' className='btn btn-primary btn-block'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
        )
    }
}

export default Login
