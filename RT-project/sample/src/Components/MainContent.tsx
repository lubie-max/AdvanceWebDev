
import React, { useEffect } from 'react'

function MainContent() {

  
    const apiKey = 'eG13qfCSScoBACP0Vb2anQegcn3fpc8QxSXrPzfO';
    const apiUrl = `https://images-api.nasa.gov/search?q=moon&media_type=image`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Process the data and display images or videos in your project
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  return (
    <>
      {/* <!-- Main Content --> */}

      <div className="container-fluid">
    <div className="row min-vh-100">

      <div className="col-md-9">
        <div className="p-4">
          <h2>Main Content Area</h2>
          <p>This is the main content area. You can add your content here.</p>
        </div>
      </div>

      </div>
      </div>
    
    </>
  )
}

export default MainContent