import React from "react";
import Appliances from '../Images/Appliances.webp';
import Electronics from '../Images/Electronics.webp';
import Fashion from '../Images/Fashion.jpeg'
import Grocery from '../Images/Grocery.webp'
import Homes from '../Images/Home&Needs.webp'
import Mobile from '../Images/Mobiles.webp';
import Apple_iPad from '../Images/Apple_iPad.jpg'

import Toys from '../Images/Toys.jpeg';
import Travel from '../Images/Travel.webp'
import C1 from '../Images/C_1.webp'
import C2 from '../Images/C_2.webp'
import C3 from '../Images/C_3.webp'
import C4 from '../Images/C_4.webp'
import Speaker from '../Images/Speaker.jpg';
import Products from "../Images/Pr.jpeg";
import Cycle from '../Images/Cycle.jpg';
import Mobil from '../Images/Mobile.avif'
import ricecooker from '../Images/ricecooker.jpeg'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import Mobile_Bettery from '../Images/Mobile_Bettery.jpeg';
import power_back from '../Images/power_back.jpg'
import HP_Laptop from '../Images/HP_Laptop.jpeg';
import Books from '../Images/Books.jpg'
const Home = ()=>{
   const Option = {
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      responsiveClass:true,
      nav:true,
      dots:false,
      margin:23,
      navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
         responsive:{
             0:{items:2},
             600:{items:4},
             1000:{items:6}
         }
   }
    return(
        <>
        <div className="container images py-5 bg-light">
            <div className="row">
                <div className="col-4 col-md-1 col-lg-1 m-auto  p-4">
                   <div className="imgcontent">
                         <a href="#"><img src={Appliances}/>Appliances</a>
                   </div>
                </div>
                <div className="col-4 col-md-1 col-lg-1 m-auto  p-4">
                   <div className="imgcontent">
                    <a href="#"><img src={Electronics} className="w-100"/>Electronics</a>
                   </div>
                </div>
                <div className="col-4 col-md-1 col-lg-1 m-auto  p-4">
                   <div className="imgcontent">
                    <a href="#"><img src={Grocery} className="w-100"/>Grocery</a>
                   </div>
                </div>
                <div className="col-4 col-md-1 col-lg-1 m-auto  p-4">
                   <div className="imgcontent">
                    <a href="#"><img src={Homes} className="w-100"/>Homes</a>
                   </div>
                </div>
                <div className="col-4 col-md-1 col-lg-1 m-auto  p-4">
                   <div className="imgcontent">
                    <a href="#"><img src={Mobile} className="w-100"/>Mobile</a>
                   </div>
                </div>
                <div className="col-4 col-md-1 col-lg-1 m-auto  p-4">
                   <div className="imgcontent">
                    <a href="/product"><img src={Products} className="w-100"/>
                    Products
                    </a>
                   </div>
                </div>
                <div className="col-4 col-md-1 col-lg-1 m-auto  p-4">
                   <div className="imgcontent">
                    <a href="#"><img src={Toys} className="w-100"/>Toys</a>
                   </div>
                </div>
                <div className="col-4 col-md-1 col-lg-1 m-auto  p-4">
                   <div className="imgcontent">
                    <a href="#"><img src={Travel} className="w-100"/>Travel</a>
                   </div>
                </div>
                <div className="col-4 col-md-1 col-lg-1 m-auto p-4">
                   <div className="imgcontent">
                    <a href="#"><img src={Fashion} className="w-100"/>Fashion</a>
                   </div>
                </div>
            </div>
        </div>

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
       <div class="carousel-inner">
        <div class="carousel-item active">
            <img src={C2} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <img src={C1} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <img src={C3} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <img src={C3} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <img src={C4} class="d-block w-100" alt="..."/>
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
{/* ---------------------------------------------------------------- */}
<div className="bg-light">
<div className="container-fluid bestelectronics py-5 ">
   <h4>Best Of Electronics</h4>
   <div className="row g-4">
      <div className="col-6 col-md-3 col-lg-2 mx-auto">
         <div className="border border-2 rounded-3 bg-white">
            <img src={Speaker} className="w-100"/>
            <p className="text-center">Mobile Speaker</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
      </div>
      <div className="col-6 col-md-3 col-lg-2   mx-auto">
         <div className="border border-2 rounded-3 bg-white">
            <img src={Cycle} className="w-100"/>
            <p className="text-center">Cycle</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
      </div>
      <div className="col-6 col-md-3 col-lg-2   mx-auto " >
         <div className="border border-2 rounded-3 bg-white">
            <img src={Speaker} className="w-100"/>
            <p className="text-center">Mobile Speaker</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
      </div>
      <div className="col-6  col-md-3 col-lg-2  mx-auto">
         <div className="border border-2 rounded-3 bg-white">
            <img src={Speaker} className="w-100"/>
            <p className="text-center">Mobile Speaker</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
      </div>
      <div className="col-6 col-md-3 col-lg-2   mx-auto">
         <div className="border border-2 rounded-3 bg-white">
            <img src={ricecooker} className="w-100"/>
            <p className="text-center">Rice Cooker</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
      </div>
      <div className="col-6 col-md-3 col-lg-2   mx-auto">
         <div className="border border-2 rounded-3 bg-white">
            <img src={Mobil} className="w-100"/>
            <p className="text-center">Mobile Speaker</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
      </div>
   </div>
</div>
</div>

{/* ---------------------------------------------------------- */}
<div className="container-fluid py-5">
<h4>Grooming, Books, Auto & More</h4>
<OwlCarousel className='owl-theme'{...Option}>

    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={Cycle} className="w-100"/>
            <p className="text-center">Mobile Speaker</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
    </div>
    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={ricecooker} className="w-100"/>
            <p className="text-center">Rice Cooker</p>
            <p className="text-center fw-bold">From $599</p>
         </div>
    </div>
    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={Mobil} className="w-100"/>
            <p className="text-center">Mobile</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
    </div>
    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={Speaker} className="w-100"/>
            <p className="text-center">Speaker</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
    </div>
    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={Mobil} className="w-100"/>
            <p className="text-center">Mobile</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
    </div>
    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={Books} className="w-100"/>
            <p className="text-center">Books</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
    </div>
    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={Mobil} className="w-100"/>
            <p className="text-center">Mobile Speaker</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
    </div>
    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={Apple_iPad} className="w-100"/>
            <p className="text-center">Apple-iPad-Air-10.5</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
    </div>
    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={Mobil} className="w-100"/>
            <p className="text-center">Mobile Speaker</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
    </div>
    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={HP_Laptop} className="w-100"/>
            <p className="text-center">HP Laptop</p>
            <p className="text-center fw-bold">From $1099</p>
         </div>
    </div>
    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={power_back} className="w-100"/>
            <p className="text-center">Power Back</p>
            <p className="text-center fw-bold">From $399</p>
         </div>
    </div>
    <div class='item'>
    <div className="border border-2 rounded-3 bg-white">
            <img src={Mobile_Bettery} className="w-100"/>
            <p className="text-center">Mobile Bettery</p>
            <p className="text-center fw-bold">From $449</p>
         </div>
    </div>
</OwlCarousel>;
</div>

{/* ---------------------------------------------------------- */}

        </>
    )
}
export default Home;