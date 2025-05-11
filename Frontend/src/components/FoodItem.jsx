import React, { useContext } from 'react'
import { useState } from 'react';
import './FoodItem.css'
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

export const FoodItem = ({item}) => {
    const {cartitems,addtocart,removefromcart} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img  className='food-item-image' src={"http://localhost:4000/images/" + item.image} alt="" />
            {
                !cartitems[item._id] ? <img className='add' onClick= {() => addtocart(item._id)} src={assets.add_icon_white}/>
                :<div className='food-item-counter'>
                    <img  onClick= {() => removefromcart(item._id)} src={assets.remove_icon_red}/>
                    <p className='food-item-count'>{cartitems[item._id]}</p>
                    <img  onClick= {() => addtocart(item._id)} src={assets.add_icon_green}/>
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{item.name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{item.description}</p>
            <p className="food-item-price">${item.price}</p>
        </div>
    </div>
  )
}
