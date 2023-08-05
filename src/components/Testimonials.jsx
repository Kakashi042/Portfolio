import React from 'react'
import '../styles/Testimonials.scss'

const Testimonials = () => {
  return (

    <div className='testimonials'>
        <h1>testimonials</h1>
        <div className='cards'>
        <section className='test-card'>
          <div className='header-section'>
          <div>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/circled-m.png" alt="circled-m"/>
          </div>
          <div >
            <article>Mom</article>
            <span><i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i></span>
          </div>
          </div>
          <p>He's an out of the box thinker. Quality work done. Extremely satisfied.</p>
        </section>
        <section className='test-card'>
          <div className='header-section'>
          <div>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/circled-d.png" alt="circled-m"/>
          </div>
          <div >
            <article>Dad</article>
            <span>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star-half" aria-hidden="true"></i></span>
          </div>
          </div>
          <p>Doesn't disappoint. Recommended</p>
        </section><section className='test-card'>
          <div className='header-section'>
          <div>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/circled-s.png" alt="circled-m"/>
          </div>
          <div >
            <article>Sibling</article>
            <span><i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i></span>
          </div>
          </div>
          <p>The best of the best<br /> #paid</p>
        </section>
        </div>
    </div>
  )
}

export default Testimonials