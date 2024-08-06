import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

const Slider = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="slider">
      <div className="sliderView" ref={emblaRef}>
        <div className="sliderCont">
          {slides.map((slide) => (
            <div className="slide" key={slide.id}>
              <div className="slideCont">
                <a href={slide.ruta} target='_blank' rel='noreferrer' >
                  <img src={slide.icono} alt={slide.name} />
                </a>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider
