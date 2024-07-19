import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/BleakeDevLogo.png'

const Header = () => {
  return (
    <header>

        <Link to="/" >
            <div className='logo'>
                <img src={Logo} className='headerlogo' />
                <h1 className='logotitle' >BleakeDev</h1>
            </div>
        </Link>

        <nav>
            <ul id="navigation" className='mainmenu'>
                <li className='mainlink' >
                    <Link to="/">Home</Link>
                </li>
                <li className='mainlink'>
                    <Link to="/about">About</Link>
                </li>
                <li className='mainlink'>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header