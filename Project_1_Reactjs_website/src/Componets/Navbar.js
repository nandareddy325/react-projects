import React from 'react';
import brand from '../Images/C_later.jpg'
import { Link } from 'react-router-dom';
const Navbar = ()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container">
    <Link class="navbar-brand" href="#"> <img src={brand}/> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">
            Contact
          </Link>
          
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;