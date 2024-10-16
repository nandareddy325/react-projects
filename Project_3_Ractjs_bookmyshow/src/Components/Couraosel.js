import axios from "axios";
import c1 from '../Images/c_1.jpg'
import c2 from '../Images/Pic_1.jpeg'
import c3 from '../Images/Pic_2.jpeg'
import c4 from '../Images/Pic_3.jpeg'
import c5 from '../Images/Pic_4.jpeg'
import c6 from '../Images/Pic_5.jpeg'
import c7 from '../Images/Pic_6.jpeg'
import c8 from '../Images/Pic_7.jpeg'
import c9 from '../Images/Pic_8.jpeg'
import c10 from '../Images/Pic_9.jpeg'
import c11 from '../Images/Pic_10.jpeg'
import c12 from '../Images/Pic_11.jpeg'
import c13 from '../Images/Pic_12.jpeg'
import c14 from '../Images/Pic_13.jpeg'
import c15 from '../Images/Pic_14.jpg'
import c16 from '../Images/Pic_15.jpeg'
import c17 from '../Images/Pic_16.webp'
import Gandikota from '../Images/Gandikota.jpg'
import Ramoj from '../Images/Ramoji.jpeg'
import stream from '../Images/stream-leadin-web-collection-202210241242.avif'


import Carousel_3 from '../Images/Car_1.avif'
import Carousel_2 from '../Images/Car_2.avif'
import Carousel_1 from '../Images/Car_3.avif'
import Live_1 from '../Images/Live_1.jpg'
import Live_2 from '../Images/Live_2.jpg'
import Live_3 from '../Images/Live_3.jpeg'
import Live_4 from '../Images/Live_4.jpeg'
import Live_5 from '../Images/Live_5.jpeg'




import OwlCarousel from 'react-owl-carousel';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Couraosel = ()=>{
  const [data,setData]=useState([]);
  useEffect (()=>{
    axios
    .get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
    .then(res=>setData(res.data))
  })
  
  const options = {
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    responsiveClass:true,
    nav:true,
    dots:false,
    margin:20,
    navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    responsive:{
        0:{items:1},600:{items:3},1000:{items:5}}
  }
    return(
        <>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        <div class="carousel-inner m-auto">
          <div class="carousel-item active"><a href="#"><img src={Carousel_3} class="" alt="..."/></a></div>
    <div class="carousel-item">
    <a href="#">
      <img src={Carousel_2} class="d-block" alt="..."/>
      </a>
      
    </div>
    <div class="carousel-item">
    <a href="#">
      <img src={Carousel_1} class="d-block" alt="..."/>
      </a>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/* --------------------------------------------------------- */}


<div className=" py-5 wrapper">
    <h4  className="fw-bold">Movies</h4>
<OwlCarousel className='owl-carousel p-3 owl-theme thebestofliveevents' carousel {...options}>
{data.
filter((name)=>name.Poster).
map((item)=>(
    <div>
        <div className="item">
            <Link to="/lineking"><img src={item.Poster} className="w-100"/></Link>
            <div className="votes  align-content-center">
                <a> <i class="fa-solid fa-star text-danger"></i> 9.1/10 {item.Runtime} Votes</a>
            </div>
        </div>
        <p className=""> <b>{item.Title} {item.Year} </b><br/> 
              <span className="text-muted">{item.Title}
              </span>
        </p>
    </div>
))}
</OwlCarousel>;
</div>
{/* ------------------------------------------------- */}
<div className="container-fluid">
    <div>
        <a href="#">
            <img src={stream} className="w-100"/>
        </a>
    </div>

</div>

{/* ------------------------------------------------- */}

<div className=" py-5 wrapper">
    <h4  className="fw-bold">Recommended Movies</h4>
<OwlCarousel className='owl-carousel p-3 owl-theme thebestofliveevents' carousel {...options}>
    <div>
        <div className="item">
            <a href="#"><img src={c7} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a> <i class="fa-solid fa-star text-danger"></i> 9.1/10 138.9K Votes</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c8} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a> <i class="fa-solid fa-star text-danger"></i> 9.1/10 138.9K Votes</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c9} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a> <i class="fa-solid fa-star text-danger"></i> 9.1/10 138.9K Votes</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c10} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a> <i class="fa-solid fa-star text-danger"></i> 9.1/10 138.9K Votes</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c11} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a> <i class="fa-solid fa-star text-danger"></i> 9.1/10 138.9K Votes</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c8} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a> <i class="fa-solid fa-star text-danger"></i> 9.1/10 138.9K Votes</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c4} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a> <i class="fa-solid fa-star text-danger"></i> 9.1/10 138.9K Votes</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c2} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a> <i class="fa-solid fa-star text-danger"></i> 9.1/10 138.9K Votes</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c3} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a> <i class="fa-solid fa-star text-danger"></i> 9.1/10 138.9K Votes</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c7} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a> <i class="fa-solid fa-star text-danger"></i> 9.1/10 138.9K Votes</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

</OwlCarousel>;
</div>
{/* -------------------------- */}

<div className=" py-5 thebestoflive">
    <h4  className="fw-bold">The Best Of Live Events</h4>
<OwlCarousel className='owl-theme live' {...options}>
    
        <div className="item">
            <a href="#"><img src={Live_1} className="w-100"/></a>
        </div>

        
        <div className="item">
            <a href="#"><img src={Live_2} className="w-100"/></a>
        </div>
        
        <div className="item">
            <a href="#"><img src={Live_3} className="w-100"/></a>
        </div>

        
        <div className="item">
            <a href="#"><img src={Live_4} className="w-100"/></a>
        </div>
        
        <div className="item">
            <a href="#"><img src={Live_5} className="w-100"/></a>
        </div>
        
        <div className="item">
            <a href="#"><img src={Live_1} className="w-100"/></a>
        </div>
        
        <div className="item">
            <a href="#"><img src={Live_2} className="w-100"/></a>
        </div>
        
        <div className="item">
            <a href="#"><img src={Live_3} className="w-100"/></a>
        </div>
        
        <div className="item">
            <a href="#"><img src={Live_4} className="w-100"/></a>
        </div>
        
        <div className="item">
            <a href="#"><img src={Live_5} className="w-100"/></a>
        </div>


</OwlCarousel>;
</div>

{/* ---------------------------- */}

<div className=" bg-dark py-5 px-3">
    <div className="d-flex py-3">
        <div className="">
              <a href="#" className="text-danger display-1"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div className="ms-3 align-content-center text-white">
            <h2 className="fw-bold">PREMIERE</h2>
            <p  className="">Watch new Movies at home, every Friday</p>
        </div>
    </div>

    <div className="text-white">
        <h3 className="fw-bold">Premiere</h3>
        <p>Brand new releases every Friday</p>
    </div>

<OwlCarousel className='owl-theme thebestofliveevents' {...options}>
    
    <div>
        <div className="item">
            <a href="#"><img src={c2} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white fw-bold">PREMIERE</a>
            </div>
        </div>
        <p className="text-white"> <b>Despicable Me 4 (Preview)</b><br/> 
              <span className="">Movies</span>
        </p>
    </div>
     


    <div>
        <div className="item">
            <a href="#"><img src={c3} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-danger fw-bold">PREMIERE</a>
            </div>
        </div>
        <p className="text-white"> <b>Despicable Me 4 (Preview)</b><br/> 
              <span className="">Movies</span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c4} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white fw-bold">PREMIERE</a>
            </div>
        </div>
        <p className="text-white"> <b>Despicable Me 4 (Preview)</b><br/> 
              <span className="">Movies</span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c5} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white fw-bold">PREMIERE</a>
            </div>
        </div>
        <p className="text-white"> <b>Despicable Me 4 (Preview)</b><br/> 
              <span className="">Movies</span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c6} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white fw-bold">PREMIERE</a>
            </div>
        </div>
        <p className="text-white"> <b>Despicable Me 4 (Preview)</b><br/> 
              <span className="">Movies</span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c3} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white fw-bold">PREMIERE</a>
            </div>
        </div>
        <p className="text-white"> <b>Despicable Me 4 (Preview)</b><br/> 
              <span className="">Movies</span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white fw-bold">PREMIERE</a>
            </div>
        </div>
        <p className="text-white"> <b>Despicable Me 4 (Preview)</b><br/> 
              <span className="">Movies</span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c2} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white fw-bold">PREMIERE</a>
            </div>
        </div>
        <p className="text-white"> <b>Despicable Me 4 (Preview)</b><br/> 
              <span className="">Movies</span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c4} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white fw-bold">PREMIERE</a>
            </div>
        </div>
        <p className="text-white"> <b>Despicable Me 4 (Preview)</b><br/> 
              <span className="">Movies</span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c6} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white fw-bold">PREMIERE</a>
            </div>
        </div>
        <p className="text-white"> <b>Despicable Me 4 (Preview)</b><br/> 
              <span className="">Movies</span>
        </p>
    </div>
    
</OwlCarousel>;
</div>

{/* ---------------------------- */}


<div className=" py-5 px-3">
    <h4 className="fw-bold">Your Music Studio</h4>
<OwlCarousel className='owl-theme thebestofliveevents' nav {...options}>
    <div>
        <div className="item">
            <a href="#"><img src={c13} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c14} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c15} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c16} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c17} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c17} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c13} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

</OwlCarousel>;
</div>


{/* ------------------------------ */}

<div className=" py-5 px-3">
    <h4 className="fw-bold">Outdoor Events</h4>
<OwlCarousel className='owl-theme thebestofliveevents' {...options}>
    <div>
        <div className="item">
            <a href="#"><img src={c2} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c12} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c15} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c4} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c7} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c8} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c16} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c17} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

</OwlCarousel>;
</div>



{/* --------------------------------------------------------------------------------------- */}


<div className=" py-5 px-3">
    <h4 className="fw-bold">Laughter Therapy</h4>
<OwlCarousel className='owl-theme thebestofliveevents' {...options}>
    <div>
        <div className="item">
            <a href="#"><img src={c5} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c9} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c17} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c12} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c11} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c10} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c3} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

</OwlCarousel>;
</div>


{/* --------------------------------------------------------------------------------------- */}

<div className=" py-5 px-3">
    <h4 className="fw-bold">Popular Events</h4>
<OwlCarousel className='owl-theme thebestofliveevents' {...options}>
    <div>
        <div className="item">
            <a href="#"><img src={c17} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c16} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c15} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c14} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c13} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c12} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c6} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c5} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

</OwlCarousel>;
</div>


{/* --------------------------------------------------------------------------------------- */}


<div className=" py-5 px-3">
    <h4 className="fw-bold">The Latest Plays</h4>
<OwlCarousel className='owl-theme thebestofliveevents' {...options}>
    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c2} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c3} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c4} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c5} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c6} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c8} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

</OwlCarousel>;
</div>


{/* ---------------------------------------------------------------------------------------- */}

<div className=" py-5 px-3">
    <h4 className="fw-bold">Top Games & Sport Events</h4>
<OwlCarousel className='owl-theme thebestofliveevents' {...options}>
    <div>
        <div className="item">
            <a href="#"><img src={c9} className="w-100"/></a>
            <div className="votes  align-content-center">
                <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c10} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c11} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c12} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c13} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c14} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c14} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

</OwlCarousel>;
</div>
{/* ---------------------------------------------------------------------------------------- */}

<div className=" py-5 px-3">
    <h4 className="fw-bold">Explore Fun Activities</h4>
    <OwlCarousel className='owl-theme thebestofliveevents' {...options}>
        <div>
            <div className="item">
                <a href="#"><img src={Gandikota} className="w-100"/></a>
                <div className="votes  align-content-center">
                    <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
                </div>
            </div>
            <p className=""> <b>Gandikota Camping - Rappelling-Tent Stay </b><br/> 
                <span className="text-muted">Gandikota Fort : Kadapa
                </span>
            </p>
        </div>

    <div>
        <div className="item">
            <a href="#"><img src={Ramoj} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white">Thu,22 Aug onwards</a>
            </div>
        </div>
        <p className=""> <b>Ramoji Film City Hyderabad </b><br/> 
              <span className="text-muted">Ramoji Film City: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>


    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

    <div>
        <div className="item">
            <a href="#"><img src={c1} className="w-100"/></a>
            <div className="votes  align-content-center">
            <a href="#" className="text-decoration-none text-white p-5">Sun,15 Sep</a>
            </div>
        </div>
        <p className=""> <b>Wonderla Amusement Park Hyderabad </b><br/> 
              <span className="text-muted">Wonderla Amusement Park: Hyderabad
              </span>
        </p>
    </div>

</OwlCarousel>;
</div>


{/* ------------------------------------------- */}
{/* ================================ */}
<div className="container py-5">
  <h4 className="fw-bold ">Trending Searches Right Now</h4>
    <div className="flex-wrap d-flex ">
        <a href="https://en.wikipedia.org/wiki/Indra_(2002_film)" className="text-decoration-none p-3 bg-light m-2"> 
            <span   className="text-danger">Indra</span> <br/> 
            <span   className="text-muted">Movies</span> 
        </a>
        <a href="#" className="text-decoration-none p-3 bg-light m-2"> 
            <span   className="text-danger">Kerthik Live Presented by prisem Outdoors </span> <br/> 
            <span   className="text-muted">Movies</span> 
        </a>
        <a href="#" className="text-decoration-none p-3 bg-light m-2"> 
            <span   className="text-danger">Stree 2: Sarkate Ka Aatank </span> <br/> 
            <span   className="text-muted">Movies</span> 
        </a>
        <a href="#" className="text-decoration-none p-3 bg-light m-2"> 
            <span   className="text-danger">Aay(Telugu)  </span> <br/> 
            <span   className="text-muted">Movies</span> 
        </a>
        <a href="#" className="text-decoration-none p-3 bg-light m-2"> 
            <span   className="text-danger">Kalki 2898AD </span> <br/> 
            <span   className="text-muted">Movies</span> 
        </a>
        <a href="#" className="text-decoration-none p-3 bg-light m-2"> 
            <span   className="text-danger">Commitee Kurrollu </span> <br/> 
            <span   className="text-muted">Movies</span> 
        </a>
        <a href="#" className="text-decoration-none p-3 bg-light m-2"> 
            <span   className="text-danger">Indra(Kannada) </span> <br/> 
            <span   className="text-muted">Movies</span> 
        </a>
        <a href="#" className="text-decoration-none p-3 bg-light m-2"> 
            <span   className="text-danger">Double iSmart</span> <br/> 
            <span   className="text-muted">Movies</span> 
        </a>
        <a href="#" className="text-decoration-none p-3 bg-light m-2"> 
            <span   className="text-danger">Thangalaan</span> <br/> 
            <span   className="text-muted">Movies</span> 
        </a>
        

        
    </div>
</div>
        </>
    )
}
export default Couraosel