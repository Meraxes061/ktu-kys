import React from 'react'

function LoggedInLinks({logOut}) {
    return (
        <button className="btn btn-outline-primary ml-auto" onClick={logOut}> Logout</button >
    )
}

export default LoggedInLinks
