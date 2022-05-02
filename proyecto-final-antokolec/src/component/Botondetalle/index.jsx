import React from 'react';
import { Link } from 'react-router-dom';

import './detalle.css'

function BotonDetalle() {
  return (

    <button className='bg-primary boton' ><Link to={'ItemDetail'} className='detalle'>Ver detalle</Link></button>

  )
}


    

export default BotonDetalle;