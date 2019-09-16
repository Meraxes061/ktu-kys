import React from 'react'
import { ROUTES, ROLES } from '../constants'
import { Redirect } from 'react-router'


function Home() {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
        switch (user.role) {
            case ROLES.STUDENT:
                return <Redirect to={ROUTES.STUDENT} />
            case ROLES.ADMIN:
                return <Redirect to={ROUTES.ADMIN} />
            default:
                return <Redirect to={ROUTES.LOGIN} />
        }
    }
    else return <Redirect to={ROUTES.LOGIN} />    
    
}

export default Home
