import React from 'react'
import shoppingcart1 from './shoppingcart1.png'
import './cart-widget.css'
import { Link } from 'react-router-dom';



function CartWidget() {
  return (
    <div className='cartwidget-box'>
      <Link to={'/cart/cartwidget'}><img src={shoppingcart1} className="cartwidget" alt="Carrito" /></Link> 
    </div>
    
  )
}

export default CartWidget;