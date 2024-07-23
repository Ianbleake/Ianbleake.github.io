import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/mainowl.svg'
import { TbMessageCircle } from "react-icons/tb";

const Header = () => {
  return (
    <header>


        <Link to="/" >
            <div className='logo'>
            <img src={Logo} className='headerlogo' />

            </div>
        </Link>

        <div className='btnmenu' >Menu</div>

        <Link to='' className='contact' >
            <TbMessageCircle />
            <h1 className='contactlabel' >Contact</h1>
        </Link>

    </header>
  )
}

export default Header