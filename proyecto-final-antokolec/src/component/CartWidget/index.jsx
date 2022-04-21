import React from 'react'
import shoppingcart1 from './shoppingcart1.png'
import './cart-widget.css'



function CartWidget() {
  return (
    <div className='cartwidget-box'>
       <img src={shoppingcart1} className="cartwidget" alt="Carrito" />
    </div>
    
  )
}

export default CartWidget;