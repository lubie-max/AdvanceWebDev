import React, { useEffect, useMemo } from "react";
import Carousel from 'react-bootstrap/Carousel'
import SearchBar from "./SearchBar";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { getMedia } from "../Redux/Slices/imageBySearchSlice";
import { getPopularFilter } from "../Redux/Slices/popularFilterSlice";

const Home = () => {

  const dispatch = useAppDispatch()
  const {items, href, links} = useAppSelector((state)=> state.imageBySearchSlice.collection)
  const  mLinks = useAppSelector((state)=>state.imageBySearchSlice.medialinks)

  const collection = useAppSelector((state)=> state.popularFilterSlice.collection)

  const popularUrl = `https://images-assets.nasa.gov/popular.json`

  const defaultFilter = (url:string = popularUrl)=>{
    // dispatch(getMedia(url))
    // return mLinks.mlinks.filter((i)=>  i.endsWith('.mp4'))
    // return dispatch(getMedia(url))
    
  }

  // const memoDefaultFilter =  useMemo(() => defaultFilter(popularUrl), [mLinks])

  useEffect(()=>{
    
    // console.log(mLinks?.mlinks)

    dispatch(getPopularFilter(popularUrl))
    console.log('popular filter collection', collection)

    // dispatch(getMedia(popularUrl))
    // console.log(memoDefaultFilter)
  },[])

  return (
<>
<div className="">

{


<Carousel className="modal-content">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://images-assets.nasa.gov/video/NHQ_2018_0131_Super Blue Moon Lunar Eclipse/NHQ_2018_0131_Super Blue Moon Lunar Eclipse~medium_1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  </Carousel>

}

<Carousel className="modal-content">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://images-assets.nasa.gov/video/NHQ_2018_0131_Super Blue Moon Lunar Eclipse/NHQ_2018_0131_Super Blue Moon Lunar Eclipse~medium_1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://images-assets.nasa.gov/video/NHQ_2018_0131_Super Blue Moon Lunar Eclipse/NHQ_2018_0131_Super Blue Moon Lunar Eclipse~medium_1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://images-assets.nasa.gov/video/NHQ_2018_0131_Super Blue Moon Lunar Eclipse/NHQ_2018_0131_Super Blue Moon Lunar Eclipse~medium_1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

<div className="search-bar">
        {/* <input type="text" placeholder="Search..." /> */}
        <SearchBar/>
</div>
</>
  );
};

export default Home;
