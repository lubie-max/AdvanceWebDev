

import React from 'react'
import { Card } from 'react-bootstrap'
function Sidebar() {


  return (
    <>
   
   <div className="container-fluid">
    <div className="row min-vh-100">
     
      <div className="col-md-3 bg-dark text-light">
        <div className="py-4 px-3">
          <h4>Sidebar</h4>
          <ul className="nav flex-column">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>

    
    </div>
  </div>
    
    </>
  )
}

export default Sidebar