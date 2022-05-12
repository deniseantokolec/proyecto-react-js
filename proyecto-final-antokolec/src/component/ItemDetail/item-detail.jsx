import React, { useState } from 'react'
import ItemCount from '../BotonAgregar';
import useCartContext from '../../store/CartContext';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import './item-detail.css'



function Itemdetail({ actividad }) {
  const [isInCart,setIsInCart] = useState(false)
  const {addToCart} = useCartContext();

  function onAdd(count){
    setIsInCart(true)
    addToCart(actividad,count)
   
    return(
     console.log('Agregaste: ', actividad,count)
    )

  }


  return (
    <div className='boxdetail'>
      <h3 className='titulodetail'>{actividad.Actividades}</h3>
      <img src={actividad.Imgurl} alt={actividad.Actividades} className='imagendetail'/>
      <h4 className='descripciondetail'> La frecuencia es: {actividad.Frecuencia}</h4> 
      <p className='preciodetail'>{actividad.Precio}</p>
      {isInCart ? 
        <div>
          <button onClick={()=>{ Swal.fire({ 
            title:`Seleccione la accion a realizar`,
            text:`Has agregado ${onAdd()} clases a tu carrito, ¿Quiere continuar con la compra o desea cancelar?`,
            icon: 'success',
            cancelButtonText: 'Cancelar compra',
            confirmButtonText: <Link to={'/cart/carrito'}>Ir al carrito</Link> ,
            showCancelButton: true,
            showConfirmButton: true,
            
          })}} className=' bg-primary verdetalle'>Ver carrito</button>
        </div> 
      : <ItemCount onAdd={onAdd} initial={1} stock={actividad.Stock}/>}

      
      
    </div>                 
  )
}

export default Itemdetail;