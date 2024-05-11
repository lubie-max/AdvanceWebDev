

import React from 'react'

const Carousel = () => {
  return (
    <>
    
<section className="carousel" aria-label="Gallery">
  <ol className="carousel__viewport">
    <li id="carousel__slide1"
       
        className="carousel__slide">
      <div className="carousel__snapper">
        <a href="#carousel__slide4"
           className="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           className="carousel__next">Go to next slide</a>
      </div>
    </li>
 
  </ol>
  
  <aside className="carousel__navigation">
    <ol className="carousel__navigation-list">
      <li className="carousel__navigation-item">
        <a href="#carousel__slide1"
           className="carousel__navigation-button">Go to slide 1</a>
      </li>
    </ol>
  </aside>
</section>
<div>
 <button type="button"> Click me to get data</button>

</div>
    </>
  )
}

export default Carousel