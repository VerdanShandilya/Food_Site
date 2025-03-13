import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = ({ setshowlogin }) => {
  const [active, setactive] = useState("home")
  const navigate = useNavigate()

  const handleNavigation = (event, sectionId) => {
    event.preventDefault()
    navigate('/')
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className='navbar'>
      <Link to='/'><img onClick={() => setactive("home")} src={assets.logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' className={active === "home" ? "curr" : ""} onClick={() => setactive("home")}>home</Link>
        <a href='#explore-menu' className={active === "menu" ? "curr" : ""} onClick={(event) => handleNavigation(event, 'explore-menu')}>menu</a>
        <a href='#app-download' className={active === "mobile-app" ? "curr" : ""} onClick={(event) => handleNavigation(event, 'app-download')}>mobile-app</a>
        <a href='#footer' className={active === "contact us" ? "curr" : ""} onClick={(event) => handleNavigation(event, 'footer')}>contact-us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img onClick={() => setactive("")} src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => { setshowlogin(true) }}>sign-in</button>
      </div>
    </div>
  )
}