import React, { useState, useEffect } from 'react';
import clases from '../../component/Items/clases';
import Itemdetail from '../../component/ItemDetail/item-detail';
import '../../component/ItemDetail/item-detail.css'
import { useParams } from 'react-router-dom';

function getItem(id) {
    return new Promise ((resolve, reject) => {
        
        setTimeout (() => {
          if(id !== undefined){
            const item = clases.find(i => i.id === id);
            resolve(item)
          }
          else{
            resolve(clases)
          };},2000)
    })
    
 }

function ItemDetailContainer () {
    const [clase, setClase] = useState([]) 
    const{ id } = useParams();

    useEffect(() => {
        getItem(id).then(respuestaPromise => {
          setClase(respuestaPromise);
        })
    
    },[id])
    
    return (

      <div className='div-itemDetail'>    
        <Itemdetail actividad={clase} />
      </div>
    )
}

export default ItemDetailContainer;