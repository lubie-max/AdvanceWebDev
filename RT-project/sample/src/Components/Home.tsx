import React, { useEffect, useMemo } from "react";
import Carousel from 'react-bootstrap/Carousel'

import SearchBar from "./SearchBar";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { getMedia } from "../Redux/Slices/imageBySearchSlice";
import { getPopularFilter } from "../Redux/Slices/popularFilterSlice";
import CarouselComponent from "./Carousel";

const Home = () => {

  const dispatch = useAppDispatch()

  const items = useAppSelector((state)=> state.popularFilterSlice.collection.items)



  const popularUrl = `https://images-assets.nasa.gov/popular.json`

  const defaultFilter = (url:string = popularUrl)=>{
    // dispatch(getMedia(url))
    // return mLinks.mlinks.filter((i)=>  i.endsWith('.mp4'))
    // return dispatch(getMedia(url))
    
  }

  // const memoDefaultFilter =  useMemo(() => defaultFilter(popularUrl), [mLinks])

  useEffect(()=>{
    
    dispatch(getPopularFilter(popularUrl))
    console.log('popular filter collection', items)

  },[])

  return (
<>
<div className="">

{

  <Carousel className="modal-content" >

    {

      items?.map((item,index)=>{
      
        return(
      
      <>
      {
      
          <CarouselComponent key={index}  item={item}/>
      
      }
      
       
      
      </>
      
        )
      })

    }

</Carousel>


}


</div>

<div className="search-bar">
        {/* <input type="text" placeholder="Search..." /> */}
        <SearchBar/>
</div>
</>
  );
};

export default Home;
