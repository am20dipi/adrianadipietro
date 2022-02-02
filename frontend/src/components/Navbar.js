import { Link } from 'react-router-dom'
import React from 'react'

function Navbar(){
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/">AD</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">projects</Link>
                        </li>
                        
                    </ul>
                </div>
    </nav>
    )
}

export default Navbar