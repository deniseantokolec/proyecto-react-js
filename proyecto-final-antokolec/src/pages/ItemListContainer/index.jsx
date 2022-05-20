import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../component/Items/ItemList'
import { getAll as getActivities, getItems } from '../../database'
import'./item-list-container.css'


function ItemListContainer( ) {
  const [clase,setClase] = useState([]);
  const { categoryid } = useParams();


  useEffect( ()=>{
    if(categoryid === undefined){
      getActivities().then((respuestaPromise) =>{
        setClase(respuestaPromise);
      })
    }
    else{
      getItems(categoryid).then((respuestaPromise) =>{
        setClase(respuestaPromise);
    })
  }},[categoryid])

  return (
     <div className='div-listcontainer'>
        <div>
          <h1 className='listcontainer'>Lista de actividades</h1>
          <ItemList clases={clase} />
        </div>
        
      </div>
      
    
  )
}

export default ItemListContainer;
