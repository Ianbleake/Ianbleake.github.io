import React from 'react'
import { Link } from 'react-router-dom'
import Social from '../Components/Social'


const Menu = () => {
  return (
    <nav className='mainmenu'>
        <ul className='navcolum' >
            <li className='navlink'>
                <Link to="/about">About</Link>
            </li>
            <li className='navlink'>
                <Link to="/contact">Contact</Link>
            </li>
            <li className='navlink'>
                <Link to="/contact">Blog</Link>
            </li>
        </ul>
        <ul className='rscolum' >
           <Social linkedin={'#'} github={'#'} instagram={'#'} youtube={'#'} />
        </ul>
    </nav>
  )
}

export default Menu