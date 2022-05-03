import React, { useEffect, useState } from 'react'
import clases from '../Items/clases'
import ItemList from '../Items/ItemList'
import'./item-list-container.css'

function getActivities(){
  return new Promise((resolve,reject) => {
    setTimeout(()=>{resolve(clases)},2000)
  })
}

function ItemListContainer( ) {
  const [clases,setClases] = useState([])

  useEffect( ()=>{
    getActivities().then(respuestaPromise =>{
     setClases(respuestaPromise);
    })
  },[])

  return (
     <div className='div-listcontainer'>
        <div>
          <h1 className='listcontainer'>Lista de actividades</h1>
          <ItemList clases={clases} />
        </div>
        
      </div>
      
    
  )
}

export default ItemListContainer;
