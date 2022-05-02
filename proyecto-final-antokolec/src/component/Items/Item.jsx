import React from 'react';
import BotonDetalle from '../Botondetalle';
import './item.css'



function Items({actividad}) {
    return (
            
        <div className='box'>
            <h3 className='titulo'>{actividad.Actividades}</h3>
            <small className='descripcion'> La frecuencia es: {actividad.Frecuencia}</small> 
            <p className='precio'>{actividad.Precio}</p>
            <BotonDetalle />
        </div>                 
    )
}
    



export default Items;