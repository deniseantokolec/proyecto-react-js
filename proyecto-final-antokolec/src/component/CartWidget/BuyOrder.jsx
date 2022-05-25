import React from 'react'
import { getAllOrders } from '../../database';
import useCartContext from '../../store/CartContext';

function BuyOrder() {
  const{ clearCart} = useCartContext();
  const datos =  getAllOrders();
  return (
    <div>
      <div>
        <h1>Detalle de la orden</h1>
      </div>
      <div>
        <h2>A continuación se detallan las clases compradas:</h2>
        <p>`${datos}`</p>
      </div>
      <div>
        <button onClick={clearCart}>Vaciar carrito</button>
      </div>
    </div>
  )
}

export default BuyOrder;