
import { useEffect } from 'react'
import { getImageBySearch } from '../Redux/Slices/imageBySearchSlice'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'




const Main = () => {


  const {href, items, links} = useAppSelector((state)=>state.imageBySearchSlice.collection)
  const { } = useAppSelector((state)=>state.imageBySearchSlice.collection.items)
  const f = items[0]

  const dispatch = useAppDispatch()

 useEffect(()=>{
  // const items = getData[collection][items]
  // console.log(href, items.map((i)=> console.log(i.data)))
  console.log(items.slice(0,1))
 }, [])

//  console.log(getData?.map((item)=> console.log(item.data)))
  return (

   <>
   
   <div className="container">
   {
    links.map((link,k)=><>
    
    {/* <img src={link.href} alt="" />
     */}
     <h5 key={k}>{link.href}</h5>

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