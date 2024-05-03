
import React, { useEffect, useState } from 'react'

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
      {/* <!-- Main Content --> */}

      <div className="container-fluid">
    <div className="row min-vh-100">

      <div className="col-md-9">
        <div className="p-4">
          <h2>Main Content Area</h2>
          <p>This is the main content area. You can add your content here.</p>

          {
            data.map((item, key)=>  (<>
            {/* <h2>{item}</h2>
             */}

             {/* <link rel="stylesheet" href={item} key={key}/>
              */}

            <h4> Hi there. </h4>
            
            </>)
            
          )
          }
        </div>
      </div>

      </div>
      </div>
    
    </>
  )
}

export default MainContent