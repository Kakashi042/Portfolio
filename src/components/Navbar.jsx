import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <Link to='/'><h2>P</h2></Link>
        </div>
        <div className='navbar-items'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Projects</Link></li>
                <li><Link to='/'>Contact</Link></li>
                <li>
                    <button>dark</button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;