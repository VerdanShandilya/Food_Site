import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { useState } from 'react'

export const Navbar = () => {
    const [active, setactive] = useState("home");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className='navbar-menu'>
            <li className={active==="home"? "curr":""} onClick={() =>setactive("home")}>home</li>
            <li className={active==="menu"? "curr":""} onClick={() =>setactive("menu")}>menu</li>
            <li className={active==="mobile-app"? "curr":""} onClick={() =>setactive("mobile-app")}>mobile-app</li>
            <li className={active==="contact us"? "curr":""} onClick={() =>setactive("contact us")}>contact-us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>sign-in</button>
        </div>
    </div>
  )
}
