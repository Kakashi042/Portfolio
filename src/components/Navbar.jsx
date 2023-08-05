import React, { Suspense, useEffect, useState } from 'react'
import '../styles/Navbar.scss'
import { Link } from 'react-router-dom';
import { Link as Anchor } from 'react-scroll';


const Navbar = () => {
    const [clicked, setClicked] = useState(true);

    const handle = ()=>{
        if(clicked===false){
            setClicked(true)
        }else
            setClicked(false)
    }
   
  return (
    <>
    <nav className='navbar' >
        <div className='logo'>
            <Link to='/' onClick='window.location.reload' ><h3>PK</h3></Link>
        
        </div>
        <div>
            <ul className={clicked?'':'active'}>
                <li>
                    <Anchor to='home' spy={true} smooth={true} offset={-500} duration={500}>
                        <Link to='/' onClick={handle}>Home</Link>
                    </Anchor>
                </li>
                <li><Link to='/projects' onClick={handle}>Projects</Link></li>
                <li><Link to='/contact' onClick={handle}>Contact</Link></li>
            </ul>
        </div>
            <div className='hamburger' onClick={handle}>
            <i className={clicked?"fa-solid fa-bars":"fa-solid fa-xmark"}></i>
        </div>
        
    </nav>
    </>
  )
}

export default Navbar;