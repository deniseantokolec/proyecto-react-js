import React from 'react'
import './remover.css'


function Remover(props) {
    props.addToCart()
    return(
        <button className='bg-primary botonremover'>Remover</button>
    )    
}

export default Remover;