import React, { useState } from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    const [active,setactive] = useState('');
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className={`${active==="add" ? "curr" : ""} sidebar-option`} onClick={() => setactive("add")}>
                {/* <img src={assets.add_icon} alt="" /> */}
                <p>Add Items</p>
            </NavLink>            
            <NavLink to="/list" className={`${active==="list" ? "curr" : ""} sidebar-option`}  onClick={() => setactive("list")}>
                {/* <img src={assets.order_icon} alt="" /> */}
                <p>List Items</p>
            </NavLink>            
            <NavLink tp='/orders' className={`${active==="order" ? "curr" : ""} sidebar-option`}  onClick={() => setactive("order")}>
                {/* <img src={assets.order_icon} alt="" /> */}
                <p>Orders</p>
            </NavLink>            
        </div>
    </div>
  )
}
