import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export const Navbar = ({setshowlogin}) => {
    const [active, setactive] = useState("home");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className='navbar-menu'>
            <Link to='/' className={active==="home"? "curr":""} onClick={() =>setactive("home")}>home</Link>
            <a href='#explore-menu' className={active==="menu"? "curr":""} onClick={() =>setactive("menu")}>menu</a>
            <a href='#app-download' className={active==="mobile-app"? "curr":""} onClick={() =>setactive("mobile-app")}>mobile-app</a>
            <a href='#footer' className={active==="contact us"? "curr":""} onClick={() =>setactive("contact us")}>contact-us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button onClick={() =>{setshowlogin(true)}}>sign-in</button>
        </div>
    </div>
  )
}
