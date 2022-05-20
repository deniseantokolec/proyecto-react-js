import React, { useState } from 'react'
import ItemCount from '../BotonAgregar';
import useCartContext from '../../store/CartContext';
import {Link} from 'react-router-dom'
import './item-detail.css'





function Itemdetail({ actividad }) {
  const [isInCart,setIsInCart] = useState(false)
  const {addToCart} = useCartContext();

  function onAdd(count){
    setIsInCart(true)
    addToCart(actividad,count)
    console.log('Agregaste:', actividad,count);
    
  } 
   
  if(!actividad){
    return <h3>Cargando...</h3>
    
  }
  else{

 
    return (
      <div className='boxdetail'>
        <h3 className='titulodetail'>{actividad.Actividad}</h3>
        <img src={actividad.Img} alt={actividad.Actividad} className='imagendetail'/>
        <h4 className='descripciondetail'> La frecuencia es: {actividad.Frecuencia}</h4> 
        <p className='preciodetail'>${actividad.Precio}</p>
        {isInCart ? 
          <div>
          <Link to={'/cart'} className='bg-primary verdetalle'>Ver carrito</Link>
          </div> 
        : <ItemCount onAdd={onAdd} initial={1} stock={actividad.Stock}/>}

      
      
     </div>                 
    )
  }  
}

export default Itemdetail;