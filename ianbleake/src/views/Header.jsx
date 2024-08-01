import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/mainowl.svg';
import { SlEnvolope } from "react-icons/sl";
import ButtonLabel from '../Components/ButtonLabel';
import { CiBeaker1 } from "react-icons/ci";

const Header = ({ handler, menustate }) => {
  return (
    <header>
      <div className='HeaderWrap' >
        <Link to="/">
          <div className='logo'>
            <img src={Logo} className='headerlogo' alt='Logo' />
          </div>
        </Link>
        <button className='btnmenu' onClick={handler}>
          <ButtonLabel label={menustate ? 'Close' : 'Menu'} isVisible={!menustate} />
        </button>
      </div>
      <div className='HeaderWrap' >
        <Link to='/Test' className='IconHeader' >
          <CiBeaker1 />
        </Link>
        <Link to="mailto:ang.ivan.ran@gmail.com?cc=arviluki@gmail.com&subject=Hi%20I'm%20..%20and%20..." className='IconHeader'>      
          <SlEnvolope />
        </Link>
      </div>
    </header>
  );
};

export default Header;
