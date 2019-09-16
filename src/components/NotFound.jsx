import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants'

function NotFound() {
    return (
        <div className="container h-100">
            <div className="row align-content-center h-100">
                <div className="col-6 offset-3 text-center">
                    <h1 className='text-danger w-100'>404 NOT FOUND</h1>
                    <p>Aradığınız sayfa bulunamadı. Silinmiş veya hiç varolmamış olabilir.</p>
                    <Link to={ROUTES.HOME} className='btn btn-danger'>ANASAYFA</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
