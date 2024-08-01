import React from 'react'
import MainTitle from '../Components/MainTitle'
import ImagePanel from '../Components/ImagePanel'
import Slider from '../Components/Slider'

const Work = () => {

  const OPTIONS = { loop: true, delay: 1000 }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <section className='Section' >

      <div className='Block' >
        <MainTitle text={'My work'} border={'Bottom'} />
        <p className='InfoText' >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className='Block' >
        <ImagePanel shape={'Circle'} />
      </div>
        
      <div className='Block' >
        <ImagePanel />
      </div>

      <div className='Block' >
        <MainTitle text={'I work with'} border={'Bottom'} />
        <p className='InfoText' >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>

      <div className='Block Full'>
        <MainTitle text={'Some of my work:'} border={'Bottom'} />

        <div className='Section '>
          <div className='Block End' >
            <MainTitle text={'Front-End'} border={'Right'} />
          </div>
          <div className='Block' >
            <Slider slides={SLIDES} options={OPTIONS} />
          </div>
        </div>

        <div className='Section'>
          <div className='Block End' >
            <MainTitle text={'Back-End'} border={'Right'} /> 
          </div>
          <div className='Block' >
            <Slider slides={SLIDES} options={OPTIONS} />
          </div>
        </div>

        <div className='Section'>
          <div className='Block End' >
            <MainTitle text={'Mobile Apps'} border={'Right'} />
          </div>
          <div className='Block' >
            <Slider slides={SLIDES} options={OPTIONS} />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Work