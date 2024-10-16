import React from "react";
import { auth,db } from "./Firebase";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const MNavbar= ()=>{
    const cartCount = useSelector((state)=>state.CartRed.cartValues.length)
 
    return(
        <div className="container mainnavbar py-3">
            <div className="row">
                <div className=" col-2">
                    <div>
                    <Link to="/"> <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />
                         </Link>
                    </div>
                </div>
                <div className="col-5 forminput ">
                    <div>
                        <form className="">
                        <a href="#"><i class="fa-solid fa-magnifying-glass"></i> </a> <input type="text" className="text-dark" placeholder="Search for Products,Brands and More"/>
                        </form>
                    </div>
                </div>
                <div className="col-5 icons">
                    <div className="d-flex justify-content-between">
                    <a href="#" className="text-decoration-none  text-dark p-2" onClick={()=>auth.signOut()}> <i class="fa-solid fa-arrow-right-from-bracket"></i> LogOut</a>
                       <Link to="/cart" className="text-decoration-none  text-dark  p-2"><i class="fa-solid fa-cart-shopping"></i> Cart <span className="text-danger ">{cartCount}</span> </Link>
                       <button  className="text-decoration-none  text-dark  p-2 " id="liveToastBtn"> <i class="fa-solid fa-handshake"></i> SigIn</button>
                       
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="..."/>
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>



                       <a href="#"><i class="fa-solid fa-ellipsis-vertical  text-dark  p-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default MNavbar;