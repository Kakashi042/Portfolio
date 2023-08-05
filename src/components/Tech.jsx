import React from 'react';
import '../styles/Tech.scss';
import tech from '../images/tech.webp'

const Tech = () => {
  return (
    
      <div className='tech-overview' id='about'>
        <div className='tech-image'>
          <img src={tech} width='720px' alt='tech image'/>
          <p>As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications</p>
          <div className='resume'>
            <a href='../images/Prajwal Resume(May 2023).docx' alt='Resume' target='_blank'><button>MY RESUME</button></a>
          </div>
        </div>
            <div className='tech-detail'>
              <h1>TECH STACK</h1>
              <div className='stack-image'>
                <span><img width="60" height="60" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html5"/></span>
                <span><img width="60" height="60" src="https://img.icons8.com/color/60/css3.png" alt="css3"/></span>
                <span><img width="60" height="60" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript"/></span>
                <span><img width="60" height="60" src="https://img.icons8.com/officel/60/react.png" alt="react"/></span>
                <span><img width="60" height="60" src="https://img.icons8.com/color/48/redux.png" alt="redux"/></span>
                <span><img width="60" height="60" src="https://img.icons8.com/color/48/git.png" alt="git"/></span>
                <span><img width="60" height="60" src="https://img.icons8.com/ios-filled/60/sql.png" alt="sql"/></span>
              </div>  
            </div>
      </div>
  
    
  )
}

export default Tech