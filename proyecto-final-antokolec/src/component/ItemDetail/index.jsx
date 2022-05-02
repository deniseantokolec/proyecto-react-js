import React, { useState, useEffect } from 'react';
import clases from '../Items/data/clases';
import Itemdetail from './item-detail';
import './item-detail.css'

function getItem() {
  return new Promise ((resolve, reject) => {
        setTimeout (() => {resolve(clases);},2000)
    })
    
  
}

function ItemDetailContainer () {
    const [clase, setClase] = useState([]) 

    useEffect(() => {
        getItem().then(respuestaPromise => {
          setClase(respuestaPromise[0]);
        })
    
    },[])
    
    return (

        <section className='div-itemDetail'>    
            <Itemdetail actividad={clase} />
        </section>
    )
}

export default ItemDetailContainer;