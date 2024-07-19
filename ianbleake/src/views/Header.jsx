import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/mainowl.svg'
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Header = () => {
  return (
    <header>

        <ul className='rs' >
            <Link to="" ><li><VscGithub className='icon' /></li></Link>
            <Link to="" ><li><FaLinkedin className='icon' /></li></Link>
            <Link to="" ><li><AiFillTikTok className='icon' /></li></Link>
        </ul>

        <Link to="/" >
            <div className='logo'>
            <img src={Logo} className='headerlogo' />
                <h1 className='logotitle' >BleakeDev</h1>
            </div>
        </Link>

        <ul id="navigation" className='mainmenu'>
            <li className='mainlink'>
                <Link to="/about">About</Link>
            </li>
            <li className='mainlink'>
                <Link to="/contact">Contact</Link>
            </li>
            <li className='mainlink'>
                <Link to="/contact">Blog</Link>
            </li>
        </ul>

    </header>
  )
}

export default Header