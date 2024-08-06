import React from 'react'
import MainTitle from '../Components/MainTitle'
import SubTitle from '../Components/SubTitle'
import ImagePanel from '../Components/ImagePanel'
import Button from '../Components/Button'

const Home = () => {
  return (
    <section className='Section' >
        <div className='Block Full' >
          <MainTitle text={'Hi! my name is Ivan.'} border={'Bottom'}/>
          <SubTitle text={'Nice to meet you!'} />
          <ImagePanel />
        </div>
        <div className='Block Full' >
          <SubTitle text={'Let me introduce myself:'} border={'Bottom'} />
          <p className='InfoText'>
            I am a resourceful Developer from CDMX, Mexico 🇲🇽 with a clear vision for creating impactful and effective web experiences. From e-commerce sites and Single-Page Applications to more experimental projects, I have helped extraordinary people turn their vision into reality.
          </p>
          <Button label={'About my approach'} route={'/MyWork'} />
        </div>
    </section>
  )
}

export default Home