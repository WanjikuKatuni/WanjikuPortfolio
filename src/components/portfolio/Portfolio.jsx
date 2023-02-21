import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portimg1.jpg'
// import IMG2 from '../../assets/portimg2.jpg'
import IMG3 from '../../assets/portimg3.jpg'
import IMG4 from '../../assets/portimg4.jpg'
import IMG5 from '../../assets/portimg5.jpg'
import IMG6 from '../../assets/portimg6.jpg'
import IMG7 from '../../assets/portimg7.jpg'
// import IMG8 from '../../assets/portimg8.jpg'
// import IMG9 from '../../assets/portimg9.jpg'

// portfolio data
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Ticket management System using QR scan',
    github: 'http://github.com',
    demo: 'http://github.com'

  },
  {
    id: 2,
    image: IMG7,
    title: 'Tendering management system',
    github: 'http://github.com',
    demo: 'http://github.com'

  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio website',
    github: 'http://github.com',
    demo: 'http://github.com'

  },
  {
    id: 4,
    image: IMG4,
    title: 'Template designs on figma',
    github: 'http://github.com',
    demo: 'http://github.com'

  },
  {
    id: 5,
    image: IMG5,
    title: 'Twitter clone',
    github: 'http://github.com',
    demo: 'http://github.com'

  }, {
    id: 6,
    image: IMG6,
    title: 'Secret santa clone',
    github: 'http://github.com',
    demo: 'http://github.com'

  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {/* map througgh the data */}
      {
        data.map(({id,image,title,github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/> 
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href= {github} className='btn' target='_blank'>Github</a>
                  <a href= {demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default Portfolio