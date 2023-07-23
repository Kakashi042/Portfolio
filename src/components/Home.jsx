import React from 'react'
import '../styles/Home.scss'
import home from '../images/developer.svg'
import Skills from './Skills'

const Home = () => {
  return (
    <div>
    <div className='home'>
        <div className='home-info'>
        <header>
            <h1>
                Front-End React Developer
            </h1>
        </header>
        <p>
            Hi, I'm Prajwal K.<br></br>A passionate Front-end React Developer based in Bengaluru, India.
        </p>
        <div className='home-button'>
            <button>Contact me</button>
            <button>Read more</button>
        </div>
        </div>
        <div className='home-img'>
            <img src={home} alt='Home icon'/>
        </div>
    </div>
    <Skills />
    </div>
  )
}

export default Home;