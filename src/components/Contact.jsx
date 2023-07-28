import React from 'react';
import '../styles/Contact.scss'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='background-gradient'>
        <div className='contact'>
            <div>
            <h2>CONTACT</h2>
            </div>
            <div>
            <p>Any questions or something else? Don't hesitate to contact me.</p>
            </div>
            <Link to='/contact'><button>CONTACT ME</button></Link>
        </div>
    </div>
  )
}

export default Contact