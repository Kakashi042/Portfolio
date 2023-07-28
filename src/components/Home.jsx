import React from 'react'
import '../styles/Home.scss'
import home from '../images/developer.svg'
import Connections from './Connections'
import Tech from './Tech'
import { Link } from 'react-scroll'
import { Link as Anchor } from 'react-router-dom'
import Testimonials from './Testimonials'
import Contact from './Contact'


const Home = () => {
  return (
    <div>
    <div id='home' href='#top' className='home'>
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
            <Anchor to='/contact' className='button1'><button >Contact me</button></Anchor>
            <Link className='button2' to='about' spy={true} smooth={true} offset={-100} duration={500}><button>Read more</button></Link>
        </div>
        </div>
        <div className='home-img'>
            <img src={home} alt='Home icon'/>
        </div>
    </div>
    <Connections />
    <div className='tech'>
      <Tech />
      <Testimonials />
    </div>
      <Contact />
    </div>
  )  
}

export default Home;