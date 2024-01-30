import React from 'react'
import './NotFoundPage.scss'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <section className='not-found'>
            <div className="not-found__text">4<span>0</span>4</div>
            <div className="not-found__text--small">Page not found</div>
            <Link to='/' className='not-found__link'>Go Home</Link>
        </section>
    )
}

export default NotFoundPage