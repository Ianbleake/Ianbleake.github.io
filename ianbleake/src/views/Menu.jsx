import React from 'react'

const Menu = () => {
  return (
    <div>
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
    </div>
  )
}

export default Menu