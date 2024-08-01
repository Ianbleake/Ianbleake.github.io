import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/mainowl.svg';
import { SlEnvolope } from "react-icons/sl";
import ButtonLabel from '../Components/ButtonLabel';

const Header = ({ handler, menustate }) => {
  return (
    <header>
      <Link to="/">
        <div className='logo'>
          <img src={Logo} className='headerlogo' alt='Logo' />
        </div>
      </Link>
      <button className='btnmenu' onClick={handler}>
        <ButtonLabel label={menustate ? 'Close' : 'Menu'} isVisible={!menustate} />
      </button>
      <Link to='' className='contact'>      
        <SlEnvolope />
      </Link>
    </header>
  );
};

export default Header;
