import React, { useState } from 'react'
import './itemcount.css'
import Swal from 'sweetalert2'



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
                
          
        Swal.fire({ 
            title:'Has agregado un nuevo producto!', 
            text:'Para ver el detalle hacer click en el carrito.',
            icon: 'success',
            
        })
        return(
            console.log('Has agregado productos a tu carrito')

        ) 
        
        
    }

  return (
    <div>
       {/* <h1 className='titulo'>Agrega tus productos</h1> */}
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