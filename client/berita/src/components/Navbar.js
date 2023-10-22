import React from 'react';
import Logo from '../logo2.png'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body">
                <div className="container-fluid">
                <div className="navbar-brand p-0">
                    <img src ={Logo} className="d-inline-block align-text-top" width={'70px'}/>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ms-auto">
                    <Link to='' className='nav-link'>
                    <li className="nav-item">
                        <div className="nav-link text-white">Home</div>
                    </li>
                    </Link>

                    <Link to='' className='nav-link'>
                    <li className="nav-item">
                        <div className="nav-link text-white">About</div>
                    </li>
                    </Link>

                    <Link to={'/Posting'} className='nav-link'>
                    <li className="nav-item">
                        <div className="nav-link text-white">Posting</div>
                    </li>
                    </Link>
                    
                    <Link to={'/ContacUs'} className='nav-link'>
                    <li className="nav-item">
                        <div className="nav-link text-white">Contact Us</div>
                    </li>
                    </Link>
                    </ul>
        
                    <ul className="nav navbar-nav d-flex ms-auto">
                    
                    <li className="nav-item dropdown text-center ">
                        <div className="nav-link dropdown-toggle text-white"  data-bs-toggle="dropdown" >
                        <span className="fs-6 text-center"/>Login / Register
                        </div>
                        <ul className="dropdown-menu text-center ms-6 px-3 border-0 dropdown-menu-dark" aria-labelledby="navbarDropdown">
                        <li><div className="dropdown-item">Login</div></li>
                        <li><div className="dropdown-item" >Register</div></li>
                        </ul>
                    </li>
        
                    </ul>
        
        
                </div>
                </div>
        </nav>
        <Outlet/>
      </div>
    );
}

export default Navbar;
