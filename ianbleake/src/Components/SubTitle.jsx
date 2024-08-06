import React from 'react'

const SubTitle = ({text,border,extra}) => {
  return (
    <h2 className={`subTitle ${border} ${extra} `} >
    {text}
    </h2>
  )
}

export default SubTitle