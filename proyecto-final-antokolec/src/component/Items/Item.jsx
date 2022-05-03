import React from 'react';
import BotonDetalle from '../Botondetalle';
import './item.css'



function Items({actividad}) {
    return (
            
        <div className='box'>
            <h3 className='titulo'>{actividad.Actividades}</h3>
            <img src={actividad.Imgurl} alt="Foto actividad" className='imgitems'/>
            <small className='descripcion'> La frecuencia es: {actividad.Frecuencia}</small> 
            <p className='precio'>{actividad.Precio}</p>
            <BotonDetalle />
        </div>                 
    )
}
    



export default Items;