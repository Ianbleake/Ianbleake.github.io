import React from 'react'
import MainTitle from '../Components/MainTitle'
import ImagePanel from '../Components/ImagePanel'
import Slider from '../Components/Slider'
import Notes from '../Assets/lapiz.png'
import Phone from '../Assets/Phonebook.png'
import Cart from '../Assets/Carrito.png'

const Work = () => {

  const OPTIONS = { loop: true, delay: 500 }
  const SLIDESFRONT = [
    {
      id: 1,
      name: 'Notes',
      icono: Notes,
      ruta: 'https://ianbleake.github.io/Notes/'
    },
    {
      id: 2,
      name: 'Phonebook',
      icono: Phone,
      ruta: 'https://ianbleake.github.io/PhoneBook/'
    },
    {
      id: 3,
      name: 'SimuShop',
      icono: Cart,
      ruta: 'https://ianbleake.github.io/BleakeStore/'
    }
  ]
  

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
            <Slider slides={SLIDESFRONT} options={OPTIONS} />
          </div>
        </div>

        <div className='Section'>
          <div className='Block End' >
            <MainTitle text={'Back-End'} border={'Right'} /> 
          </div>
          <div className='Block' >
            <Slider slides={SLIDESFRONT} options={OPTIONS} />
          </div>
        </div>

        <div className='Section'>
          <div className='Block End' >
            <MainTitle text={'Mobile Apps'} border={'Right'} />
          </div>
          <div className='Block' >
            <Slider slides={SLIDESFRONT} options={OPTIONS} />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Work