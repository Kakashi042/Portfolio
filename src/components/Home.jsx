import React, { Suspense, lazy } from 'react'
import '../styles/Home.scss'
import home from '../images/developer.svg'
import { Link } from 'react-scroll'
import { Link as Anchor } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import fallbackRender from './ErrorBoundary'


const Connections = lazy(()=> import('./Connections'))
const Tech = lazy(()=>import('./Tech'))
const Testimonials = lazy(()=>import('./Testimonials'))
const Contact = lazy(()=>import('./Contact')) 


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
            <img src={home} height='375px' alt='Home icon'/>
        </div>
    </div>
    <ErrorBoundary fallbackRender={fallbackRender} onReset={()=>{}}>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Connections />
    <div className='tech'>
      <Tech />
      <Testimonials />
    </div>
      <Contact />
    </Suspense>
    </ErrorBoundary>
    </div>
  )  
}




export default Home;