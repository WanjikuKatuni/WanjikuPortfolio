import React from 'react'
import './testimonials.css'
import AV1 from '../../assets/av1.jpg'
import AV2 from '../../assets/av2.jpg'
import AV3 from '../../assets/av3.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    // id:1,
    avatar: AV1,
    name: 'Paytech',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fuga provident ad. Quod dignissimos expedita tempore libero necessitatibus repudiandae quis nam, sapiente voluptates natus, sit corporis accusantium voluptate ad et',
  },
  {
    // id:2,
    avatar: AV2,
    name: 'Wacuka Njoroge',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fuga provident ad. Quod dignissimos expedita tempore libero necessitatibus repudiandae quis nam, sapiente voluptates natus, sit corporis accusantium voluptate ad et',
  },
  {
    // id:3,
    avatar: AV3,
    name: 'DragonTech',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fuga provident ad. Quod dignissimos expedita tempore libero necessitatibus repudiandae quis nam, sapiente voluptates natus, sit corporis accusantium voluptate ad et',
  }

]

const Testimonials = () => {
  return (
    <section>
      <h5>Client reviews</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
        >        

        {
          data.map(({avatar,name, review}, index)=> {
            return(
              <SwiperSlide key={index} className='testimonial'>
                  <div className="client__avatar">
                    <img src={avatar} alt={name} />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>{review}</small>
              </SwiperSlide>
    
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials