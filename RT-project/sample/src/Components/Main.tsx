


import React from 'react'
import SearchBar from './SearchBar'
import { Carousel } from 'react-bootstrap'

const Main = () => {
  return (
   <>
   
   <div className="container">
  
      {/* <!-- Carousel content goes here --> */}

      <Carousel/>
    
    <div className="search-bar">
      <input type="text" placeholder="Search images..." />
      
       {/* <SearchBar/> */}
    </div>
  </div>




  {/* --------------------------------css */}

   </>
  )
}

export default Main