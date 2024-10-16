import React from "react";
import { auth } from "./Firebase";
import MNavbar from "./MainNavbar";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Products from "./Products";
import Cart from "./Cart";
import SigIn from "./Sigin";
const Direct =()=> {
  return (
    <>
   <Router>
      <MNavbar/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/product' element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/SigIn" element={<SigIn/>}/>
         </Routes>
         <Footer/>
      </Router>
    </>
  )
}
export default Direct
