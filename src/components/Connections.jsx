import React from 'react'
import '../styles/Connections.scss'

const Skills = () => {

  return (
    <div className='links' href='#readMore'>
        <span className='line'></span>
        <span className='connect'>
        <a href='#' alt='linkedin' title='linkedin'>
        <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/linkedin.png"  alt="linkedin"/>
        </a>
        </span>
        <span className='connect'>
        <a href="#" alt='github'>
        <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/github.png" alt="github"/>
        </a>
        </span>
        <span className='line'></span>
    </div>
  )
}

export default Skills