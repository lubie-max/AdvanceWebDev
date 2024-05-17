
import { useEffect } from 'react'
import { getImageBySearch } from '../Redux/Slices/imageBySearchSlice'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'




const Main = () => {


  const getCollection = useAppSelector((state)=>state.imageBySearchSlice.collection)
  const getData = useAppSelector((state)=>state.imageBySearchSlice.collection.items)
  const getHref = useAppSelector((state)=>state.imageBySearchSlice.collection.href)
  const dispatch = useAppDispatch()

 useEffect(()=>{
  // const items = getData[collection][items]
  console.log(getData)
 }, [])

//  console.log(getData?.map((item)=> console.log(item.data)))
  return (

   <>
   
   <div className="container">
    {getCollection.version}
  
  {
    getCollection.items?.map((item,key)=><>
  {/* {key} */}
<h1>{item.data[0].links.map((i)=> <> <img src={i.href} alt="" /></>)}</h1>

<h4>{}</h4>
{/* <figure>
  <img  alt="Description of the image" />
  <figcaption>Caption describing the image</figcaption>
</figure> */}


    </>)
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