import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'

const Slider = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="slider">
      <div className="sliderView" ref={emblaRef}>
        <div className="sliderCont">
          {slides.map((slide) => (
            <div className="slide" key={slide.id}>
              <div className="slideCont">
                <Link to={slide.ruta} >
                  <img src={slide.icono} alt={slide.name} />
                </Link>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider
