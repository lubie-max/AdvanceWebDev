


import React from 'react'
import SearchBar from './SearchBar'
import { Carousel } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'
import imageBySearchSlice, { getImageBySearch } from '../Redux/Slices/imageBySearchSlice'

const Main = () => {


  const getData = useAppSelector((state)=>state.imageBySearchSlice.data)
 const dispatch = useAppDispatch()

 const clickAction = () => {

  dispatch(getImageBySearch())

 }
  return (

   <>
   
   <div className="container">
  
      {/* <!-- Carousel content goes here --> */}

      {/* <Carousel/> */}
      <h1>Data</h1>
      {getData.map((item)=><>
      <h4>{item}</h4>
      </>)}
      <button onClick ={()=> clickAction()} >Click me to get the data</button>
    
    <div className="search-bar">
      <input type="text" placeholder="Search images..." />
  
    </div>
  </div>




  {/* --------------------------------css */}

   </>
  )
}

export default Main