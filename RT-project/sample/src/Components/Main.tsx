
import { useEffect } from 'react'
import { getImageBySearch } from '../Redux/Slices/imageBySearchSlice'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'




const Main = () => {


  const getData = useAppSelector((state)=>state.imageBySearchSlice.collection?.items)
  
 const dispatch = useAppDispatch()

 useEffect(()=>{
  // const items = getData[collection][items]
  console.log(getData?.items  )
 }, [])

  return (

   <>
   
   <div className="container">
  
      {/* <!-- Carousel content goes here --> */}

      {/* <Carousel/> */}
       <h1>Data</h1>
      getData.map()
      
       
     {
      

     }


      <button onClick ={()=> dispatch(getImageBySearch())} >Click me to get the data</button>
    
    <div className="search-bar">
      <input type="text" placeholder="Search images..." />
  
    </div>
  </div>




  {/* --------------------------------css */}

   </>
  )
}

export default Main