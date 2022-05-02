import React from 'react'
import ItemCount from '../BotonAgregar';
import './item-detail.css'

function Itemdetail({actividad}) {
  return (
    <div className='box'>
        <div className='div-titulo'>
            <h3 className='titulodetail'>{actividad.Actividades}</h3>
            <img src={actividad.Imgurl} alt={actividad.Actividades} className='object-contain imagendetail'/>
        </div>
        <div className='div-detail'>
            <h4 className='descripciondetail'> La frecuencia es: {actividad.Frecuencia}</h4> 
            <p className='preciodetail'>{actividad.Precio}</p>
            <ItemCount initial={1} stock={actividad.Stock}/>
        </div>
    </div>                 
  )
}

export default Itemdetail;