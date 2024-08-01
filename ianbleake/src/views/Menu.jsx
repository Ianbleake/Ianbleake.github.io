import React from 'react'
import { Link } from 'react-router-dom'
import Social from '../Components/Social'


const Menu = ({ handler, menustate }) => {
  return (
    <nav className={`mainmenu ${menustate ? 'visible' : ''}`} >
        <ul className='navcolum' >
            <li className='navlink'>
                <Link to="/MyWork" onClick={handler} >Work</Link>
            </li>
            <li className='navlink'>
                <Link to="/About" onClick={handler} >About</Link>
            </li>
            <li className='navlink'>
                <Link to="/Contact" onClick={handler} >Contact</Link>
            </li>
            <li className='navlink'>
                <Link to="/Blog" onClick={handler} >Blog</Link>
            </li>
        </ul>
        <ul className='rscolum' >
           <Social linkedin={'#'} github={'https://github.com/Ianbleake'} instagram={'#'} youtube={'#'} />
        </ul>
    </nav>
  )
}

export default Menu