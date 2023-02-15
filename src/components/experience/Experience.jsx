import React from 'react'
import './experience.css'
import {FaHtml5, FaCss3Alt, FaReact, FaAngular, FaBootstrap} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiTailwindcss, SiRubyonrails, SiPython, SiPostgresql} from 'react-icons/si'


const Experience = () => {
  return (
    <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My experience</h2>

    <div className="container experience__container">
      <div className="expereince__frontend">
        <h3>Frontend Development</h3>
        <div className="expereince__content">
          <article className="experience__details">
            <FaHtml5 className='expereince__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <FaCss3Alt className='expereince__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <TbBrandJavascript className='expereince__details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <FaReact className='expereince__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <FaAngular className='expereince__details-icon'/>
            <div>
              <h4>Angular</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <FaBootstrap className='expereince__details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <SiTailwindcss className='expereince__details-icon'/>
            <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>

      {/* backend */}
      <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="expereince__content">
            <article className="experience__details">
              <SiRubyonrails className='expereince__details-icon'/>
              <div>
                <h4>Rails</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPython className='expereince__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPostgresql className='expereince__details-icon'/>
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
      </div>
    </div>
   </section>
  )
}

export default Experience