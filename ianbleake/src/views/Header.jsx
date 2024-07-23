import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/mainowl.svg'
import { TbMessageCircle } from "react-icons/tb";

const Header = ({handler,menustate}) => {

  return (
    <header>
        <Link to="/" >
            <div className='logo'>
              <img src={Logo} className='headerlogo' alt='Logo' />
            </div>
        </Link>
        <button className='btnmenu'onClick={handler} >{ menustate ? 'Close' : 'menu' }</button>

        <Link to='' className='contact' >
            <TbMessageCircle />
            <h1 className='contactlabel' >Contact</h1>
        </Link>
    </header>
  )
}

export default Header