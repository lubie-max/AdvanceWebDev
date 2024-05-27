import Carousel from 'react-bootstrap/Carousel'
import { Item } from '../Redux/Types/searchResponseTypes'
import React, { useEffect } from 'react'

interface itemData {
    item : Item
}
const CarouselComponent = (props: itemData) => {

    const {item } = props

    const {href, data , links} = item

    const thumbnail = links?.find(link => link.rel === "preview")?.href
    
    useEffect(()=>{
        
            console.log("carousel Comp", item)
            console.log("thumbnail", thumbnail)
        

    }, [])
  return (
    <>
    
{/* <Carousel className="modal-content"> */}
    {thumbnail && (

  <Carousel.Item >

    <img
      className="d-block w-100"
      src={thumbnail}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

    )}

 {/* </Carousel>  */}
    </>
  )
}

export default CarouselComponent