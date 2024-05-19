
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
    'media L', medialink
  )
 }, [])
console.log(url)
//  console.log(getData?.map((item)=> console.log(item.data)))
  return (

   <>
   
   <img src = 'https://images-assets.nasa.gov/video/Artemis Onward to the Moon/Artemis Onward to the Moon~thumb.jpg'></img>
   <video controls width="600">
      {/* <source src="https://images-assets.nasa.gov/video/NHQ_2019_0311_Go Forward to the Moon.mp4" type="video/mp4" /> */}
      <track translate="yes" src='https://images-assets.nasa.gov/video/Artemis Onward to the Moon/Artemis Onward to the Moon.srt'></track>
      Your browser does not support the video tag.
    </video>

      <button onClick ={()=> dispatch(getImageBySearch())} >Click me to get the data</button>

{/* <button onClick={()=>dispatch(getMedia())}> Media </button> */}

    {/* ---------------------- */}
    <div className="search-bar">
      <input type="text" placeholder="Search images..." />
  
    </div>





  {/* --------------------------------css */}

   </>
  )
}

export default Main