import React from 'react'
import './testimonials.css'
import AV1 from '../../assets/av1.jpg'
import AV2 from '../../assets/av2.jpg'
import AV3 from '../../assets/av3.jpg'


const Testimonials = () => {
  return (
    <section>
      <h5>Client reviews</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AV1} alt="avatar one" />
          </div>
          <h5 className='client__name'> Paytech</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam explicabo quia iure, laudantium nobis quo repellat aliquid tenetur. Aliquam fuga repudiandae beatae a illo, ad sint modi soluta reprehenderit.
            </small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AV2} alt="avatar two" />
          </div>
          <h5 className='client__name'> MziziFreshProduce</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam explicabo quia iure, laudantium nobis quo repellat aliquid tenetur. Aliquam fuga repudiandae beatae a illo, ad sint modi soluta reprehenderit.
            </small>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AV3} alt="avatar three" />
          </div>
          <h5 className='client__name'> DragonTech</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam explicabo quia iure, laudantium nobis quo repellat aliquid tenetur. Aliquam fuga repudiandae beatae a illo, ad sint modi soluta reprehenderit.
            </small>
        </article>

      </div>
    </section>
  )
}

export default Testimonials