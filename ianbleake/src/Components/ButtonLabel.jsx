
import React from 'react';
import '../Styles/Components.css'; 


const ButtonLabel = ({ label, isVisible }) => {

  return (
    <span className={`labelmenu ${isVisible ? '' : 'hidden'}`}>
      {label}
    </span>
  );
};

export default ButtonLabel;
