
import React from 'react'

const SearchBar = () => {
  return (
<>



        
<div className="darksoul-search-bar">
       
       <img className="search-icon" src="https://darksoul-codepen.github.io/search-icon.png" width="50" height="50" />
       <input type="text" name="search" placeholder="Search DarkSoul or type a URL" className="darksoul-search-input" autoComplete="on"/>

   </div>

   












        {/* ------------------------------------------------ CSS  ----------------------------------------------*/}

        
<style>
        {`
    
  
 
    .darksoul-search-bar
    {
        width: 60px;
        height: 60px;
        margin: auto;
        // background-color: white;
        display: flex;
        border-radius: 0% 30px 30px 30px;
        transition: width 1s;
        box-shadow: 5px 5px 20px #d8e6fd, -5px -5px 30px white;
        // position: fixed;
        top: 102px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
    .search-icon
    {
        margin-bottom: auto;
        margin-top: auto;
        margin-left: 5px;
        margin-right: auto;
        border-radius: 50%;
        
    }
    .darksoul-search-bar:hover
    {
        width: 400px;
        border-radius:  0% 30px 30px 30px;
    }
    .darksoul-search-input
    {
        margin: auto;
        display: none;
        transition: display 12s;
        outline: none;
        border: none;
        font-family: 'Belanosima', sans-serif;
        border-radius: 25px;
        padding-left: 10px;
    }
    .darksoul-search-bar:hover .darksoul-search-input
    {
        display: inline-flex;
        width: 78%;
        height: 70%;
    }
    input[type="submit"]
    {
        display: none;
    }
 
 

 

        `}
      </style>

</>
 


    
  )
}

export default SearchBar