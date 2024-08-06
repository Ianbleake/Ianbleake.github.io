import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({label,style,route,handler}) => {
  return (
    <Link to={route} onClick={handler} >
      <button className={`button ${style}`}>{label}</button>
    </Link>
  )
}

export default Button