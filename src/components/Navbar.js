import React from 'react'
import square from './square.png';

export default function Navbar() {
    return (
        <div >
           
            <div className='good'>
          <nav class="navbar navbar-expand-lg navbar-light navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img className='logo' src='https://zerodistance.io/assets/images/logo-2-140x128-7.png'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"  id='go'>
        <li class="nav-item" >
          <a  class="nav-link active"  aria-current="page" href="#">Home </a>
        </li>
        <li class="nav-item">
          <a     class="nav-link" href="#">ACTIVITY FEED</a>
        </li>
        <li class="nav-item">
          <a   class="nav-link" href="#">PEOPLE</a>
        </li>
        <li class="nav-item">
          <a  style={{color: "#000"}} class="nav-link blacky" href="#">EXHIBITORS</a>
        </li>
        <li class="nav-item">
          <a   class="nav-link" href="#">SESSIONS</a>
        </li>
       
      </ul>
      
    </div>
   
  </div>
 
</nav>

</div>

        </div>
    )
}
