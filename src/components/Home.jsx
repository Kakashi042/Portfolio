import React from 'react'
import '../styles/Home.scss'
import home from '../images/developer.svg'

const Home = () => {
  return (
    <div className='home'>
        <div className='home-info'>
        <header>
            <h2>
                Webdev_Prajwal
            </h2>
        </header>
        <p>
            I empower your business with state-of-the-art digital solutions e.g. website, web application and digital marketing with a focus on your needs: web design, web development and more.
        </p>
        </div>
        <div className='home-img'>
            <img src={home} alt='Home icon'/>
        </div>
    </div>
  )
}

export default Home;