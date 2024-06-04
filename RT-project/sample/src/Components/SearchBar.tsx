import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { getImageBySearch } from '../Redux/Slices/imageBySearchSlice';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const dispatch = useAppDispatch()
  const {items, href, links} = useAppSelector((state)=> state.imageBySearchSlice.collection)
  const collection = useAppSelector((state)=> state.imageBySearchSlice.collection)

  const popularUrl = `https://images-assets.nasa.gov/popular.json`

 
  // useEffect(()=>{
  //   // console.log(items.slice(0,1))
  //   console.log(collection)
 
  //  }, [collection])


  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>)=>{
    console.log(e.currentTarget.value)
  // items?.map((i)=>console.log(i))
    if (e.key === "Enter"  && e.currentTarget.value != " "  ){

      dispatch(getImageBySearch(e.currentTarget.value))
    }

  }

  return (
  <>
  
 
  <div className={`search-bar-container ${isFocused ? 'focused' : ''}`}>
      <input
        type="text"
        placeholder=" Search"
        onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>handleSearch(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>

  </>
  )
}

export default SearchBar