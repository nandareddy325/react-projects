import React, { useState } from "react";
import { auth,db } from "./Firebase";
import { Button } from "bootstrap";

const UserAuthSign = ()=>{
    const[data,setData]=useState({
        username:"",
        email:"",
        password:"",
    })
    const{username,email,password}=data;
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
    return (
        <div className="container loginpage align-content-center">
            <div className="loginformthemealdb">
            <div className="col-4 m-auto">
                <form className=" p-3 bg-light ">
                    <h5 className="text-center text-primary fw-bold">Log in to  ThemealDB</h5>
                    <div>
                        <input type="text" className="form-control shadow-none" autoComplete="off" placeholder="Enter Username.." name="username" value={username} onChange={changeHandler}/>
                    </div>
                    <div className="">
                        <input type="email" name="email" className="form-control shadow-none" autoComplete="off" value={email} placeholder="Enter Email" onChange={changeHandler} />
                        <i class="fa-regular fa-envelope"></i>  <br/>
                    </div>
                    <div>
                    <input type="password" name="password"  className="form-control shadow-none" autoComplete="new-password" value={password} placeholder="Enter Password" onChange={changeHandler}/>
                     <i class="fa-solid fa-lock"></i> <br/>
                    </div>
                    <div className="d-flex mt-3 justify-content-between">
                        <a href="#">Forgotten Account?</a>
                        <Button onClick={SigUp} className="btn btn-primary btn-sm w-100" >SignUp</Button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
export default UserAuthSign