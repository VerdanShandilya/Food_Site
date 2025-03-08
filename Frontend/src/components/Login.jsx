import React, { useState, useEffect } from 'react'
import './Login.css'
import { assets } from '../assets/assets';

export const Login = ({setshowlogin,showlogin}) => {
    const [currstate,setcurrstate] = useState("Login");

    useEffect(() => {
        if (showlogin) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }
        return () => {
          document.body.classList.remove('no-scroll')
        }
      }, [showlogin])

  return (
    <div className="login">
        <form className='login-popup-container'>
            <div  className="login-popup-title">
                <h2>{currstate}</h2>
                <img onClick={() =>setshowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currstate==="Sign up" && <input type="text" placeholder='your name' required />}
                <input type="email" placeholder='your email' required />
                <input type="password" placeholder='password' required />
            </div>
            <button>{currstate==="Sign up"?"Create Account": "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox"  required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currstate==='Login'? <p>Create a new account? <span onClick={()=>setcurrstate("Sign up")}>Click here!</span></p>: 
            <p>Login to you account? <span onClick={() =>setcurrstate("Login")}>Click here!</span></p>}
        </form>
    </div>
  )
}
