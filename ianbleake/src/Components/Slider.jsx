import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

const Slider = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="slider">
      <div className="sliderView" ref={emblaRef}>
        <div className="sliderCont">
          {slides.map((index) => (
            <div className="slide" key={index}>
              <div className="slideCont">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider