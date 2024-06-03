import React, { useEffect, useMemo } from "react";
import Carousel from "react-bootstrap/Carousel";

import SearchBar from "./SearchBar";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { getMedia } from "../Redux/Slices/imageBySearchSlice";
import { getPopularFilter } from "../Redux/Slices/popularFilterSlice";
import CarouselComponent from "./Carousel";
import GridComponent from "./GridComponent";

const Home = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector(
    (state) => state.popularFilterSlice.collection.items
  );

  const popularUrl = `https://images-assets.nasa.gov/popular.json`;

  useEffect(() => {
    dispatch(getPopularFilter(popularUrl));
    // console.log("popular filter collection", items.map((i)=));
    items.map((i)=>console.table(i))
  }, []);

  return (
    <>
          {/* <Carousel className="modal-content">
        {items?.map((item, i) => {
          return (
            <>
              <CarouselComponent key={i} item={[item]} />
            </>
          );
        })}
        </Carousel> */}

<div className="grid-container">
{

  items.map((item , i)=><>
  
  <GridComponent item={item} key={i}/>

  
  </>)

}
  </div>

  <div>
  <div className="popup-viewer">
         <video className="popup-content" controls>
           <source src='http://images-assets.nasa.gov/video/JPL-20240301-WHATSUf-0001-Whats_Up_March_2024cc/JPL-20240301-WHATSUf-0001-Whats_Up_March_2024cc~orig.mp4' type="video/mp4" />
           Your browser does not support the video tag.
         </video>
       </div>
   </div>


      <div className="search-bar">
        {/* <input type="text" placeholder="Search..." /> */}
        <SearchBar />
      </div>
    </>
  );
};

export default Home;
