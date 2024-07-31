import React from 'react'
import { Link } from 'react-router-dom'
import Social from '../Components/Social'


const Menu = ({ handler, menustate }) => {
  return (
    <nav className={`mainmenu ${menustate ? 'visible' : ''}`} >
        <ul className='navcolum' >
            <li className='navlink'>
                <Link to="/" onClick={handler} >Home</Link>
            </li>
            <li className='navlink'>
                <Link to="/about" onClick={handler} >About</Link>
            </li>
            <li className='navlink'>
                <Link to="/contact" onClick={handler} >Contact</Link>
            </li>
            <li className='navlink'>
                <Link to="/contact" onClick={handler} >Blog</Link>
            </li>
        </ul>
        <ul className='rscolum' >
           <Social linkedin={'#'} github={'#'} instagram={'#'} youtube={'#'} />
        </ul>
    </nav>
  )
}

export default Menu