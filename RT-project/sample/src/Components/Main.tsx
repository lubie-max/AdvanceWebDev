
import { useEffect } from 'react'
import { getImageBySearch, getMedia } from '../Redux/Slices/imageBySearchSlice'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'
import { useSelector } from 'react-redux'




const Main = () => {


  const {href, links , items} = useAppSelector((state)=>state.imageBySearchSlice.collection)
  const collection = useAppSelector((state)=>state.imageBySearchSlice.collection)
  const medialink = useAppSelector((state)=> state.imageBySearchSlice.medialinks)


  // const checkMediaType = (m_type)=>{
   
  // }
  const dispatch = useAppDispatch()

  const url =  `https://images-assets.nasa.gov/video/Artemis Onward to the Moon/Artemis Onward to the Moon`

 useEffect(()=>{
  // const items = getData[collection][items]
  // console.log(href, items.map((i)=> console.log(i.data)))
  console.log(items.slice(0,1))
  console.log(links)
  console.log(
    'media L', medialink.mlinks
  )
 }, [])
console.log(url)
//  console.log(getData?.map((item)=> console.log(item.data)))
  return (

   <>
   
   {

    medialink.mlinks?.map((i, k)=><>
    {/* <p color='green'>{i}</p> */}
    <p key={k}>{i}</p>

<div>
    <video controls width="600" key={k}>
      <source src={i} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

</div>
    </>)
   }
   {/* 
   <img src = 'https://images-assets.nasa.gov/video/Artemis Onward to the Moon/Artemis Onward to the Moon~thumb.jpg'></img> */}


      <button onClick ={()=> dispatch(getImageBySearch())} >Click me to get the data</button>

<button onClick={()=>dispatch(getMedia('https://images-assets.nasa.gov/video/NHQ_2018_0131_Super%20Blue%20Moon%20Lunar%20Eclipse/collection.json'))}> Media </button>

    {/* ---------------------- */}
    <div className="search-bar">
      <input type="text" placeholder="Search images..." />
  
    </div>





  {/* --------------------------------css */}

   </>
  )
}

export default Main