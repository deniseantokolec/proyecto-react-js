import React from 'react'
import'./item-list-container.css'

function ItemListContainer( {greeting} ) {
  return (
     <div className='div-listcontainer'>
        <p className='listcontainer'>{ greeting }</p>
     </div> 
    
  )
}

export default ItemListContainer;
