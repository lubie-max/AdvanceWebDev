import React, { useState } from 'react'

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
  <>
  
 
  <div className={`search-bar-container ${isFocused ? 'focused' : ''}`}>
      <input
        type="text"
        placeholder="   Search"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>

  </>
  )
}

export default SearchBar