         
         
    
import React, { useState } from "react";


const SigIn = ()=>{
    
    return (
        <div className="container loginpage align-content-center ">
            <div className="loginformthemealdb">
            <div className="col-4 m-auto">
                <form className=" p-3 bg-light ">
                    <h5 className="text-center  fw-bold">Log in to Flipkart</h5>
                    <div className="">
                        <input type="email" name="email" className="form-control shadow-none" autoComplete="off"  placeholder="Enter Email" />
                         <br/>
                    </div>
                    <div>
                    <input type="password" name="password"  className="form-control shadow-none" autoComplete="new-password" placeholder="Enter Password" />
                      <br/>
                    </div>
                    <button className="btn btn-success w-100 fw-bold  ">Sign in</button>
                    <div className="d-flex mt-3 justify-content-between">
                        <a href="#">Forgotten Account?</a>
                        <a href="#">Sign up for flipkart</a>
                        {/* <Link to="/signUp">Sign up for Themealdb</Link> */}
                    </div>
                </form>
                </div>
            </div>
         
        </div>
    )
}
export default SigIn