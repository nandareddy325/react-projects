import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import UserAuth from './FirebaseAuthentication'
import Direct from "./Redirect";
const FireValid = ()=>{
    const[presentUser, SetPresentUser]= useState(null);
    
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                SetPresentUser({
                    Uid:user.uid,
                    email:user.email
                })
            }
            else{
                SetPresentUser(null)
            }
        })
    },[])
    return(
        <div>
             {presentUser ? <Direct/>:<UserAuth/>}
        </div>
    )
}
export default FireValid;