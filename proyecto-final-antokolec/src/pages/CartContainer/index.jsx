import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import useCartContext from '../../store/CartContext';
import { createBuyOrder } from '../../database/'
import './cart.css'
import ItemListContainer from '../ItemListContainer/'





function CartContainer () {
  const{cart,removeFromCart, clearCart, CartQuantity, CartPrice}= useCartContext();
  console.log(cart);
  const [ orderID, setOrderIDEnviada] = useState(false);



  

  function handleBuy() {
    const itemsToBuy = cart.map((items) => ({
      Actividad: items.Actividad,
      quantity: items.quantity,
      Precio: items.Precio,
      id: items.id
    }))
    const buyOrder = {
      buyer: {
        name:"Denise",
        phone:"11655447788",
        email:"dmeisui@gmail.com",
      },
      items: itemsToBuy,
      total: CartPrice(),
    }
    createBuyOrder(buyOrder).then(res => {
      setOrderIDEnviada(res)
    })
    console.log(orderID);
  
    clearCart()
  }
        
  if(cart.length === 0){
    if(orderID){
      return (
        <div className='div-id'>
          <h2 className='id'>El Id de tu compra es: {orderID}</h2>
       </div>
      )
    }
    return(
      <>
      <div className='div-error'>
      <h2 className='sinseleccion'>No hay clases nuevas seleccionadas...</h2>
      <button className='bg-primary volverainicio'><Link to="/" className='linkinicio'>Volver a 
        la lista de actividades</Link></button>
      </div>
      
      </>
    ) 
 
 
 
  
  }else  if(cart.length !== 0){
    return(
      <div className='div-cart'>
        <h1 className='titulocart'>Tu carrito: Estas a un paso de convertirte en un artista</h1>
        {cart.map((itemcart)=>{
          return (<div className='div-cartcontainer'>
            <div className='div-datoscart'>
              <h2 className='titulo-actividad'>{itemcart.Actividad}</h2>
              <h2 className='titulo-cantidad'>{itemcart.quantity}</h2>
              <h2 className='titulo-precio'>${itemcart.quantity * itemcart.Precio}</h2>
              <button onClick={()=>removeFromCart(itemcart.id)} className='bg-primary eliminar'>X</button>
            </div>
          </div>
        )})}
      
      
        <div className='div-totales'>
          <h2 className='cantidadtotal'>Cantidad total: {CartQuantity()} clases</h2>
          <h2 className='preciototal'>Precio Total: ${CartPrice()}</h2>
        </div>
      
      
        <div className='div-cartbotones'>
          <button onClick={handleBuy} className='bg-primary comprar'>Comprar!</button><br />
          <button className='bg-primary volverainicio'><Link to="/" className='linkinicio'>Volver a 
          la lista de actividades</Link></button><br />
          <button onClick={clearCart} className='bg-primary vaciar'>Vaciar carrito</button>
        </div>
      </div>
    )
  }
  else{
    return <ItemListContainer/>
  }
}  
export default CartContainer;