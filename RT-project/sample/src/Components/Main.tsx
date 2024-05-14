
import { useAppDispatch, useAppSelector } from '../Redux/hooks'


const Main = () => {


  const getData = useAppSelector((state)=>state.imageBySearchSlice.collection)
 const dispatch = useAppDispatch()

  return (

   <>
   
   <div className="container">
  
      {/* <!-- Carousel content goes here --> */}

      {/* <Carousel/> */}
      {/* <h1>Data</h1>
      {getData.map((item)=><>
      <h4>{item}</h4>
      </>)} */}
      <button onClick ={()=> dispatch(getI)} >Click me to get the data</button>
    
    <div className="search-bar">
      <input type="text" placeholder="Search images..." />
  
    </div>
  </div>




  {/* --------------------------------css */}

   </>
  )
}

export default Main