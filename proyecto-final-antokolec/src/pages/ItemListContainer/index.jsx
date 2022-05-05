import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import clases from '../../component/Items/clases'
import ItemList from '../../component/Items/ItemList'
import'./item-list-container.css'

function getActivities(categoryid){
  const mypromise = new Promise((resolve,reject) => {
    setTimeout(()=>{
      if(categoryid){
        const filtrar = clases.filter((c)=>{
          return c.Genero === categoryid;
        })
        resolve(filtrar)
      }
      else{
      resolve(clases)
      }},2000)
  })
  return mypromise
}

function ItemListContainer( ) {
  const [clase,setClase] = useState([]);
  const { categoryid } = useParams();


  useEffect( ()=>{
    getActivities(categoryid).then(respuestaPromise =>{
     setClase(respuestaPromise);
    })
  },[categoryid])

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
