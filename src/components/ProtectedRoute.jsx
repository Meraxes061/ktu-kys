import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'
import { ROUTES } from '../constants'

function ProtectedRoute({ component: Component, role, ...rest }) {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <Route {...rest} render={(props) => {
            if (user && user.role === role) return <Component {...props} user={user} />
            else {
                localStorage.removeItem('user')
                return <Redirect to={ROUTES.LOGIN} />
            }
        }} />
    )
}

export default ProtectedRoute
