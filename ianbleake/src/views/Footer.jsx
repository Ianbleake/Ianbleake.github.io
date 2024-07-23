import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/mainowl.svg'
import { SiGithubpages } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <section className='secfooter'>
        <div className='colfooter' ></div>
        <div className='colfooter' ></div>
        <div className='colfooter' >
          <Link to="/" >
              <div className='logo'>
              <img src={Logo} className='headerlogo' />
                  <h1 className='logotitle' >BleakeDev</h1>
              </div>
          </Link>
        </div>
        <div className='colfooter' ></div>
        <div className='colfooter' ></div>
      </section>
      <div className='copy' >
        <p>Develop for Ivan Rangel, hosted in </p>
        <SiGithubpages className='iconft' />
      </div>
    </footer>
  )
}

export default Footer