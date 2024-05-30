import Carousel from "react-bootstrap/Carousel";
import { Item } from "../Redux/Types/searchResponseTypes";
import React, { useEffect } from "react";

interface itemData {
  item: [Item];
}
const CarouselComponent = (props: itemData) => {
  const { item } = props;

//   const {href, data , links} = item

//   const thumbnail = links?.find(link => link.rel === "preview")?.href

  const videosWithPreview = item.filter(i => 
    i.links?.some(link => link.rel === 'preview')
  );


  return (
    <>


{/* <Carousel className="modal-content"> */}
      {videosWithPreview.map((item, index) => {
        const { links, href } = item;
        const thumbnailLink = links?.find(link => link.rel === 'preview')?.href;

        return (
          <Carousel.Item key={index}>
            {thumbnailLink && (
              <img
                className="d-block w-100"
                src={thumbnailLink}
                alt={`Slide ${index}`}
              />
            )}
            <Carousel.Caption>
              <h3>Video {index + 1}</h3>
              <p>
                Video description or additional details here.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    {/* </Carousel> */}





    {/* -------------------------- */}


    {/* <Carousel> */}
{/* {
    thumbnail && 
          <>
            <Carousel.Item>
              <img
                className="d-block w-100"
                //   src='https://images-assets.nasa.gov/video/JPL-20240301-WHATSUf-0001-Whats_Up_March_2024cc/JPL-20240301-WHATSUf-0001-Whats_Up_March_2024cc~thumb.jpg'
                src={thumbnail}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>hjgj</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </>

} */}
    {/* </Carousel> */}





      {/* {
    item.links?.map((l)=>{
        const thumbnail1 =  l.rel === "preview"?href:"" 
        console.log(thumbnail1)

        return(
            <>
             <Carousel.Item  >

    <img
      className="d-block w-100"
    //   src='https://images-assets.nasa.gov/video/JPL-20240301-WHATSUf-0001-Whats_Up_March_2024cc/JPL-20240301-WHATSUf-0001-Whats_Up_March_2024cc~thumb.jpg'
    src={thumbnail}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>hjgj</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
            </>
        )
    })
} */}

      {/* //  <Carousel className="modal-content">  */}
      {/* {
    thumbnail && 

  <Carousel.Item  >

    <img
      className="d-block w-100"
    //   src='https://images-assets.nasa.gov/video/JPL-20240301-WHATSUf-0001-Whats_Up_March_2024cc/JPL-20240301-WHATSUf-0001-Whats_Up_March_2024cc~thumb.jpg'
    src={thumbnail}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>hjgj</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

} */}
      {/* //   </Carousel>   */}
    </>
  );
};

export default CarouselComponent;
