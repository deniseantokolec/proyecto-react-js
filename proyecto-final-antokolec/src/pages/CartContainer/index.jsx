import React from 'react';
import {Link} from 'react-router-dom'
import useCartContext from '../../store/CartContext';
import './cart.css'


function CartContainer () {
  const{cart,removeFromCart, clearCart}= useCartContext();
  console.log(cart);
  
  if (cart.length ===0){
    return <div className='div-error'>
      <h3 className='sinseleccion'>No hay clases seleccionadas en el carrito...</h3>
      <button className='bg-primary volverainicio'><a href="/" className='linkinicio'>Volver a la lista de actividades</a></button>
    </div>
  }
  else{
    return (<div className='div-cart'>
      <h1 className='titulocart'>Tu carrito: Estas a un paso de convertirte en un artista</h1>
      {cart.map((itemcart)=>{
        return <div className='div-cartcontainer'>
          <div className='div-datoscart'>
            <h2 className='titulo-actividad'>{itemcart.Actividades}</h2>
            <h2 className='titulo-cantidad'>{itemcart.quantity}</h2>
            <h2 className='titulo-precio'>${itemcart.quantity * itemcart.price}</h2>
            <button onClick={()=>removeFromCart(itemcart.id)} className='bg-primary eliminar'>X</button>
          </div>
        </div>})}
      
        <div className='div-cartbotones'>
          <button className='bg-primary volverainicio'><Link to="/" className='linkinicio'>Volver a la lista de actividades</Link></button>
          <button onClick={clearCart} className='bg-primary vaciar'>Vaciar carrito</button>
        </div>
      </div>  
  )}
  
   
}

export default CartContainer;