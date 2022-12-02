import React, { useState, useEffect ,Component } from 'react'
import { Link } from 'react-router-dom';
import App from '../App';


const Navbar = (props) => {

    const [Navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
    
      useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })
    return (
        <div >
            <nav className={`navbar fixed-top navbar-expand-lg ${Navbar===false?'':'bg-light'} py-2 px-4 `}>
                <div className="container-fluid d-flex justify-content-between">
                    <a className={`navbar-brand fs-1 text-${Navbar===false?'light':'dark'}`} href="/">WhatsNew</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <ul className='navbar-nav float-right'>
                            <li><a className={`nav-link fs-4  mx-2 active text-${Navbar===false?'light':'dark'}`} aria-current="page" href="/">Home</a></li>
                            <li className="nav-item dropdown">
                                <a className={`nav-link fs-4 mx-2 dropdown-toggle text-${Navbar===false?'light':'dark'}`} href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                            </ul>
                            <div className="form-check form-switch float-right ">
                </div>
                        </div>
                    </div>
                </div>
                
            </nav>
        </div>
    )

}

export default Navbar