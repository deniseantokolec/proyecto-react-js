import React from 'react';
import CartWidget from '../CartWidget';
import './Navbar.css'


function Navbar () {
    
    return (       
        <div className='bg-primary navbar'>
            <img src="" alt="logo"  className='icono'/>
            <ul className='nav'>
               <li><a  href="#/index.js">Inicio</a></li> 
               <li><a  href="#/index.js">Nosotros</a></li> 
               <li><a  href="#/index.js">Productos</a></li> 
               <li><a  href="#/index.js">Contacto</a></li>             
            </ul>
            <CartWidget  className='cartwidgetnav'/>
            
        </div>
       
       
       
       
       
       
       
       
       
       
    )

}


export default Navbar;

