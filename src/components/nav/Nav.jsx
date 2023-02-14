import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {RiComputerLine, RiServiceLine} from 'react-icons/ri'
import {BiUser, BiMessageRoundedDetail} from 'react-icons/bi'


const Nav = () => {
  return (
    <nav>
      <a href="#"><GoHome/></a>
      <a href="#about"><BiUser/></a>
      <a href="#experience"><RiComputerLine/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default Nav