import React from "react";
import bms from '../Images/bookmyshow.png'
import bookmyshow from '../Images/bookmyshow-logo-vector.png'

const Navbarbookmyshow =()=>{
    return(
    <>
    <div className="container-fluid header py-3 ">
        <div className="row">
        <div className="col-2">
            <div>
            <a class="navbar-brand" href="#"><img src={bookmyshow}/></a>
            </div>
        </div>
        <div className="col-6">
            <div className="search">
            <input class="form-control shadow-none rounded-0  w-100" type="search" placeholder="Search for Movies,Events,Plays,Sports and Activities" aria-label="Search"/>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div className="col-3 ms-auto hyd">
            <div className="d-flex align-content-center justify-content-around">
                <a href="#" className="align-content-center">Hyderabad</a>
                <a href="#" className="align-content-center"><i class="fa-solid fa-chevron-down"></i></a>
                <button className="btn btn-sm btn-danger px-4 py-1">Sign in</button>
                <a href="#" className="align-content-center"><i class="fa-solid fa-bars"></i></a>
            </div>
        </div>
    </div>

    <div className="d-flex navbar_2 py-2 bg-light border-bottom border-dark">
    <div className="me-auto"> 
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Movies</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Stream</a>
            </li>
            <li class="nav-item">
                 <a class="nav-link" href="#">Events</a>
             </li>
            <li class="nav-item">
                 <a class="nav-link" href="#">Plays</a>
            </li>
            <li class="nav-item">
                 <a class="nav-link" href="#">Sports</a>
             </li>
            <li class="nav-item">
                 <a class="nav-link" href="#">Activities</a>
            </li>
        </ul>
    </div>
    <div className="ms-auto">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="#">ListYourShow</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Comporates</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Offers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Gift Cards</a>
            </li>
        </ul>
    </div>
</div>
    </div>

    
    </>
    )
}
export default Navbarbookmyshow;