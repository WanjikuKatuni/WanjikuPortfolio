import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portimg1.jpg'
import IMG2 from '../../assets/portimg2.jpg'
import IMG3 from '../../assets/portimg3.jpg'
import IMG4 from '../../assets/portimg4.jpg'
import IMG5 from '../../assets/portimg5.jpg'
import IMG6 from '../../assets/portimg6.jpg'
import IMG7 from '../../assets/portimg7.jpg'
import IMG8 from '../../assets/portimg8.jpg'
import IMG9 from '../../assets/portimg9.jpg'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/> 
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='http://github.com' className='btn' target='_blank'>Github</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/> 
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='http://github.com' className='btn' target='_blank'>Github</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/> 
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='http://github.com' className='btn' target='_blank'>Github</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/> 
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='http://github.com' className='btn' target='_blank'>Github</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/> 
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='http://github.com' className='btn' target='_blank'>Github</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/> 
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='http://github.com' className='btn' target='_blank'>Github</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/> 
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='http://github.com' className='btn' target='_blank'>Github</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/> 
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='http://github.com' className='btn' target='_blank'>Github</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/> 
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='http://github.com' className='btn' target='_blank'>Github</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio