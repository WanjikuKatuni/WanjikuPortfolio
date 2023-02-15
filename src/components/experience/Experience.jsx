import React from 'react'
import {FaHtml5} from 'react-icons/fa'


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
            <FaHtml5/>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className="experience__details">
            <FaHtml5/>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className="experience__details">
            <FaHtml5/>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className="experience__details">
            <FaHtml5/>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className="experience__details">
            <FaHtml5/>
            <h4>Angular</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className="experience__details">
            <FaHtml5/>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className="experience__details">
            <FaHtml5/>
            <h4>Tailwind</h4>
            <small className='text-light'>Intermediate</small>
          </article>
        </div>
      </div>

      {/* backend */}
      <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="expereince__content">
            <article className="experience__details">
              <FaHtml5/>
              <h4>Rails</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <FaHtml5/>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <FaHtml5/>
              <h4>PostgreSQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            </div>
      </div>
    </div>
   </section>
  )
}

export default Experience