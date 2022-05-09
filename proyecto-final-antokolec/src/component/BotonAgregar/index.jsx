import React, { useState } from 'react'
import './itemcount.css'




function ItemCount(props) {
    const [count,setCount] = useState(props.initial);

    function handleAgregar() {
        if (count !== props.stock)
        return setCount(count + 1)
    }

    function handleQuitar() {
       if (count > props.initial)
       return setCount(count - 1)
    }


    function AgregarCarrito(){              
        props.onAdd(count)
        
        return(
            console.log('Has agregado productos a tu carrito')
            
            

        ) 
        
        
    }

  return (
    <div>
        <div>
           <div className='botones'>
                <button onClick={handleQuitar} className=' bg-primary quitar'>-</button>
                <span className='valor'>{count}</span>
                <button onClick={handleAgregar} className=' bg-primary agregar'>+</button>
            </div>   
            <div className='botonagregar'>
                <button onClick={AgregarCarrito} className='bg-primary carrito'>Agregar a carrito</button>
            </div>
        </div>
    


    </div>
  )
}

export default ItemCount;
