import React, { useState } from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {RiComputerLine, RiServiceLine} from 'react-icons/ri'
import {BiUser, BiMessageRoundedDetail} from 'react-icons/bi'


const Nav = () => {

  // active nav
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#'? 'active':''}><GoHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><BiUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><RiComputerLine/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default Nav