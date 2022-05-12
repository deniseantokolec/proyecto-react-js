import React, {useState, useParams, useEffect} from 'react'
import CartWidget from '../../component/CartWidget/cartWidget';


function CartContainer () {
                            
  return (
    <div>
        <h1>Tu carrito</h1>
        <CartWidget />
        
        
    </div>
  )
}

export default CartContainer;