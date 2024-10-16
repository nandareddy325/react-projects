import React from "react";
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <>
        <div className="Footer">
            <div className="container  ">
                <footer className="text-center text-lg-start  mt-xl-5 pt-4">
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6   col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4 text-white">OUR WORLD</h5>
                                <ul className="list-unstyled mb-4">
                                    <li><Link to="/" className=" text-decoration-none">About</Link></li>
                                    <li><Link to="/" className=" text-decoration-none">Services</Link></li>
                                    <li><Link to="/" className=" text-decoration-none">Workers</Link></li>
                                    <li><Link to="/" className=" text-decoration-none">Teams</Link></li>
                                    <li><Link to="/" className=" text-decoration-none">Contact</Link></li>
                                </ul>
                            </div>

                        <div className="col-xl-3 col-lg-6  col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-uppercase mb-4 text-white">Assistance</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/" className=" text-decoration-none">About</Link></li>
                                <li><Link to="/" className=" text-decoration-none">Size Guide</Link></li>
                                <li><Link to="/" className=" text-decoration-none">Shipping Information</Link></li>
                                <li><Link to="/" className=" text-decoration-none">Returns & Exchanges</Link></li>
                                <li><Link to="/" className=" text-decoration-none">Payment</Link></li>
                            </ul>
                        </div>

                       <div className="col-xl-3 col-lg-6   col-md-6 mb-4 mb-lg-0 icon ">
                            <h5 className="text-uppercase mb-4 text-white">Social Media</h5>
                            <div className="row list-unstyled">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <li ><a href="#!" className="text-white"><i className=" mx-auto fa-brands fa-twitter "></i></a></li>
                                </div>
                                <div className="col-lg-4  col-md-4 col-sm-4 col-4">
                                <li ><a href="#!" className="text-white"><i className=" mx-auto fa-brands fa-facebook-f"></i></a></li>
                                </div>
                                <div className="col-lg-4  col-md-4 col-sm-4 col-4">
                                <li ><a href="#!" className="text-white"><i className=" mx-auto fa-brands fa-whatsapp"></i></a></li>
                                </div>
                                <div className="col-lg-4  col-md-4 col-sm-4 col-4">
                                <li ><a href="#!" className="text-white"><i className=" mx-auto fa-brands fa-tiktok"></i></a></li>
                                </div>
                                <div className="col-lg-4  col-md-4 col-sm-4 col-4">
                                <li ><a href="#!" className="text-white"><i className=" mx-auto fa-brands fa-github"></i></a></li>
                                </div>
                                <div className="col-lg-4  col-md-4 col-sm-4 col-4">
                                <li ><a href="#!" className="text-white"><i className=" mx-auto   fa-brands fa-linkedin"></i></a></li>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-xl-3 col-lg-6   col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4 text-white">Sign up</h5>
                                <div className="form-outline form-white mb-4">
                                <label className="form-label text-white"  for="form5Example2">Email address</label>
                                <input type="email" id="form5Example2" className="form-control" />
                        </div>
                               <button type="submit" className=" btn btn-primary w-100 text-white">Subscribe</button>
                    </div>
                  </div>
                </div>
                    <div className="text-center text-white p-3 border-top border-white">© 2024 Copyright
                            <a className="text-white text-center text-decoration-none" href="https://mdbootstrap.com/"> Corporate</a>
                    </div>
           </footer>
            </div>
        </div>
        </>
    )
}
export default Footer;