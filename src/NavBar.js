import React from 'react';
import { Link } from 'react-router-dom';

const NavBar =() => {
    return (
        <nav className ="nav-wrapper grey darken-3">
            <div className="conteiner">
            <Link to='/' className='brand-logo'></Link>
            </div>
        </nav>
    )
}

export default NavBar; 