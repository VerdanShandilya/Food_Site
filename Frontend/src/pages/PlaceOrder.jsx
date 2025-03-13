import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../context/StoreContext'

export const PlaceOrder = () => {
  const {gettotal} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='first name'/>
          <input type="text"  placeholder='last name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='street'/>
        <div className="multi-fields">
          <input type="text" placeholder='city'/>
          <input type="text"  placeholder='state'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='zip code'/>
          <input type="text"  placeholder='country'/>
        </div>
        <input type="text"  placeholder='phone'/>
      </div>
      <div className="place-order-right">
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

          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}
