import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './Navbar.css'


function Navbar () {
    
    return (       
        <div className='bg-primary navbar'>
            <img src="" alt="logo"  className='icono'/>
            <ul className='nav'>
               <li><Link to={'/'}>Inicio</Link></li> 
               <li><Link to={'/Nosotros'}>Nosotros</Link></li> 
               <li><Link to={'/ItemListContainer/*'}>Productos</Link></li> 
               <li><Link to={'/Contacto'}>Contacto</Link></li>             
            </ul>
            <CartWidget  className='cartwidgetnav'/>
            
        </div>
                       
    )

}


export default Navbar;

