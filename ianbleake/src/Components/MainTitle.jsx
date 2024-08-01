import React from 'react'

const MainTitle = ({text, border}) => {
  return (
    <h1 className={`MainTitle ${border}`} >
      {text}
    </h1>
  )
}

export default MainTitle