import React, { useState, useEffect } from 'react';
import Itemdetail from '../../component/ItemDetail/item-detail';
import { getItemsId as getItem } from '../../database';
import '../../component/ItemDetail/item-detail.css'
import { useParams } from 'react-router-dom';
import './item-detail-container.css'


function ItemDetailContainer () {
    const [clase, setClase] = useState() 
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