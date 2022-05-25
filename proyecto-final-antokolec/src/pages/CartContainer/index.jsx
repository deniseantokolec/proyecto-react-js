import React from 'react';
import {Link} from 'react-router-dom'
import useCartContext from '../../store/CartContext';
import { createBuyOrder} from '../../database/'
import './cart.css'
import BuyOrder from '../../component/CartWidget/BuyOrder';
import ItemListContainer from '../ItemListContainer/'





function CartContainer () {
  const{cart,removeFromCart, clearCart, CartQuantity, CartPrice}= useCartContext();
  console.log(cart);


  function handleBuy() {
    const itemsToBuy = cart.map((items) => ({
      Actividad: items.Actividad,
      quantity: items.quantity,
      Precio: items.Precio,
      id: items.id
    }))
    const buyOrder = {
      buyer: {
        name:"",
        phone:"",
        email:"",
      },
      items: itemsToBuy,
      total: CartPrice(),
    }
    
    createBuyOrder(buyOrder)
    
  }
        
  if (cart.length === 0){
    return(<div className='div-error'>
      <h3 className='sinseleccion'>No hay clases seleccionadas en el carrito...</h3>
      <button className='bg-primary volverainicio'><a href="/" className='linkinicio'>Volver a la 
      lista de actividades</a></button>
    </div>)
  }else if(cart.length !== 0){
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
          <button onClick={handleBuy()} className='bg-primary comprar'>Comprar!</button><br />
          <button onClick= {()=>{return <BuyOrder/>}} className=' bg-primary detalle'>Ver detalle</button><br />
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