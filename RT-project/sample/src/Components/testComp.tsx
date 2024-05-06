
import React, { useEffect, useState } from 'react'
import TestComponent from './TestComponent';

function MainContent() {

    const [data , setData]= useState([])
  
    const apiKey = 'eG13qfCSScoBACP0Vb2anQegcn3fpc8QxSXrPzfO';
    const apiUrl = `https://images-api.nasa.gov/search?q=moon&media_type=image`;


    useEffect(()=> {
      fetch(apiUrl)
      .then(response => response.json())
      .then(d=> {
        // Process the data and display images or videos in your project
        // console.log(data.collection);
        let orgData = d.collection.items
        // console.table(orgData);
        orgData.slice(0, 10)
        setData(orgData);
        
  
        // console.log(data)
  
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
     



    }, [])
    


    useEffect(()=>{

      console.log(data)

    },[data])

      

  return (
    <>
     <div className="center">

     <TestComponent/>
     </div>

    </>
  )
}

export default MainContent