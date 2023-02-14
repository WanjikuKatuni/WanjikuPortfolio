import React from 'react'
import './header.css'
import CTA from './CTA'
import Headersocials from './Headersocials'
import meimg from '../../assets/wanjiku.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Ann Wanjiku</h1>
        <h5 className="text-light"> Fullstack Developer </h5>
        <CTA/>
        <Headersocials/>


        <div className="me">
          <img src={meimg} alt='me'/>
        </div>
        <a href="#contact" className='scroll__down'> ScrollDown</a>
      </div>

    </header>
  )
}

export default Header