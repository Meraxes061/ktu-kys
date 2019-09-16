import React from 'react'
import { withRouter } from 'react-router'
import { firebaseApp } from '../firebase'
import { ROUTES } from '../constants'
import LoggedInLinks from './LoggedInLinks';
import { Link } from 'react-router-dom'

function Navbar(props) {
    const user = JSON.parse(localStorage.getItem('user'))
    const logOut = () => {
        firebaseApp.auth().signOut()
        localStorage.removeItem('user')
        props.history.push(ROUTES.LOGIN)
    }

    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/">KTU KYS</Link>
            {user &&
                <LoggedInLinks logOut={logOut} />
            }
        </nav>
    )
}

export default withRouter(Navbar)
