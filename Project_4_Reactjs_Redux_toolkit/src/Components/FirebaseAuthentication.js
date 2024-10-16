import React, { useState } from "react";
import { auth,db } from "./Firebase";

const UserAuth = ()=>{
    const[data,setData]=useState({
        email:"",
        password:"",
    })
    const{email,password}=data;

    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const SigUp = (e)=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((user)=>console.log(user))
        .then((err)=>console.log(err))
    }
    const SigIn = (e)=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then((user)=>console.log(user))
        .then((err)=>console.log(err))
    }
    return (
        <div className="container loginpage align-content-center ">
            <div className="loginformthemealdb">
            <div className="col-4 m-auto">
                <form className=" p-3 bg-light ">
                    <h5 className="text-center  fw-bold">Log in to Flipkart</h5>
                    <div className="">
                        <input type="email" name="email" className="form-control shadow-none" autoComplete="off" value={email} placeholder="Enter Email" onChange={changeHandler} />
                         <br/>
                    </div>
                    <div>
                    <input type="password" name="password"  className="form-control shadow-none" autoComplete="new-password" value={password} placeholder="Enter Password" onChange={changeHandler}/>
                      <br/>
                    </div>
                    <button onClick={SigIn} className="btn btn-success w-100 fw-bold  ">Sign in</button>
                    <div className="d-flex mt-3 justify-content-between">
                        <a href="#">Forgotten Account?</a>
                        <a href="#" onClick={SigUp} >Sign up for flipkart</a>
                        {/* <Link to="/signUp">Sign up for Themealdb</Link> */}
                    </div>
                </form>
                </div>
            </div>
         
        </div>
    )
}
export default UserAuth