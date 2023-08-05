import React from 'react';
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div>
        <h3>
            Prajwal K &copy; All rights are reserved
        </h3>      
        </div>
        <div>
        <a href='#' alt="linkedin">
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/40/f6f6f6/linkedin.png" alt="linkedin"/>
        </a>
        <a href="#" alt="github">
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/40/f6f6f6/github.png" alt="github"/>
        </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer