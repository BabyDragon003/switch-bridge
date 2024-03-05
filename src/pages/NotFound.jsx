import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='not-found'>
            {/* main content */}
            <section className="main-content">
                <div className="container main">
                    <div className="col-lg-5 col-md-8 col-sm-12">
                        <div className="card">
                            <h1><span>404 !</span> Page not found</h1>
                            <p>The page you are looking for doesn't exists.</p>
                            <NavLink to='/' className="gradient-btn">Go to Homepage</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
