import React, { useState, useEffect,useContext } from 'react'
import './Login.css'
import { assets } from '../assets/assets';
import axios from 'axios'
import { StoreContext } from '../context/StoreContext';

export const Login = ({setshowlogin,showlogin}) => {
    const [currstate,setcurrstate] = useState("Login");

    const {token,settoken} = useContext(StoreContext);

    useEffect(() => {
      if(showlogin){
        document.body.classList.add('no-scroll')
      } 
      else{
        document.body.classList.remove('no-scroll')
      }
      return () =>{
        document.body.classList.remove('no-scroll')
      }
    }, [showlogin])


    const [data,setdata] = useState({
      name:"",
      email:"",
      password:""
    })
    const onSubmitHandle = async (e) =>{
      e.preventDefault();
      const URL="http://localhost:4000";
      try{
        let info;
        let url= URL;
        if(currstate==="Login"){
          info = {email:data.email, password:data.password};
          url+="/api/user/login"
        }
        else{
          info = {name:data.name, email:data.email, password:data.password};
          url+="/api/user/register"
        }
        const user = await axios.post(url,info);
        if(user.data.success){
          settoken(user.data.token);
          localStorage.setItem("token",user.data.token);
          setshowlogin(false);
        }
        else{
          alert(response.data.message);
        }
      }
      catch (error){
        console.log(error);
      }
    }
  return (
    <div className="login">
        <form className='login-popup-container' onSubmit={onSubmitHandle}>
            <div  className="login-popup-title">
                <h2>{currstate}</h2>
                <img onClick={() =>setshowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currstate==="Sign up" && <input type="text" placeholder='your name' value={data.name} required onChange={(e) =>setdata({...data, name : e.target.value})}/>}
                <input type="email" placeholder='your email' required onChange={(e) =>setdata({...data, email : e.target.value})} value={data.email}/>
                <input type="password" placeholder='password' required onChange={(e) =>setdata({...data, password : e.target.value})} value={data.password}/>
            </div>
            <button type="submit">{currstate==="Sign up"?"Create Account": "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox"  required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currstate==='Login'? <p>Create a new account? <span onClick={()=>setcurrstate("Sign up")}>Click here!</span></p>: 
            <p>Login to you account? <span onClick={() =>setcurrstate("Login")} >Click here!</span></p>}
        </form>
    </div>
  )
}
