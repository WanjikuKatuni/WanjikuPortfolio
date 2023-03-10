import React from 'react'
import './about.css'
import aboutimg from '../../assets/wanjiku.png'
import {FaAward, FaProjectDiagram} from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* img */}
        <div className='about__me'>
          <div className="about__me-image">
            <img src={aboutimg} alt='About Image'/>
          </div>
        </div>

        {/* about content */}
        <div className="about__content">
          <div className='about__cards'>
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <RiTeamFill className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ Clients</small>
            </article>
            <article className="about__card">
              <FaProjectDiagram className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum a natus incidunt rem ullam atque non et asperiores enim dignissimos eius est saepe, nam, illum harum, molestiae excepturi placeat. Earum!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About