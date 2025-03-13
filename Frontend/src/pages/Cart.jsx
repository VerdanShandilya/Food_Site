import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../context/StoreContext'
import {useNavigate} from 'react-router-dom'

export const Cart = () => {

  const {food_list,
    addtocart,
    setcartitems,
    cartitems,
    removefromcart,
  gettotal} = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-itens">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index) =>{
          if(cartitems[item._id]>0){
            return(
              <div>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
                <p>{cartitems[item._id]}</p>
                <p>Rs.{item.price*cartitems[item._id]}</p>
                <p className='cross' onClick={() =>{removefromcart(item._id)}}>x</p>
              </div>
              <hr/>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{gettotal()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{15}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{gettotal()+15}</b>
            </div>
          </div>

          <button onClick={() =>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode enter here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promocode'/>
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
