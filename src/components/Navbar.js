import React, { Component } from 'react'
import { Link } from 'react-router-dom';


 const Navbar=()=> {
   
        return (
            <div className='mb-4'>
                <nav className="navbar fixed-top navbar-expand-lg bg-dark mb-4">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="/">WhatsNew</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Categories
                                    </a>
                                    <div className="dropdown-menu text-light" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to='/general'>General</Link>
                                        <Link className="dropdown-item" to='/sports'>Sports</Link>
                                        <Link className="dropdown-item" to='/business'>Business</Link>
                                        <Link className="dropdown-item" to='/entertainment'>Entertainment</Link>
                                        <Link className="dropdown-item" to='/science'>Science</Link>
                                        <Link className="dropdown-item" to='/technology'>Technology</Link>
        
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    
}

export default Navbar