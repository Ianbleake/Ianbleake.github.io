import React from 'react'

const MainTitle = ({text, border, extra}) => {
  return (
    <h1 className={`MainTitle ${border} ${extra} `} >
      {text}
    </h1>
  )
}

export default MainTitle