import React from 'react';
import ItemCount from '../BotonAgregar';
import './item.css'



function Items({actividad}) {
    return (
            
        <div className='box'>
            <h3 className='titulo'>{actividad.Actividades}</h3>
            <small className='descripcion'> La frecuencia es: {actividad.Frecuencia}</small> 
            <p className='precio'>{actividad.Precio}</p>
            <ItemCount initial={1} stock={80} />
        </div>                 
    )
}
    



export default Items;