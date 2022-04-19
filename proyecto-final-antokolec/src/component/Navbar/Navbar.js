import * as React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { Nav, Container } from 'react-bootstrap';


function Indice () {
      
    return (
        
        <Navbar bg="light" variant="light" className='Indice-navbar'>
            <Container className='Indice-container'>
               <NavbarBrand href="#Inicio" className='Indice-barand'>Sueños</NavbarBrand>
                    <Nav className="Indice-nav">
                       <Nav.Link href="#Inicio" className='Indice-link'>Inicio</Nav.Link>
                        <Nav.Link href="#Nosotros" className='Indice-link'>Nosotros</Nav.Link>
                        <Nav.Link href="#Productos" className='Indice-link'>Productos</Nav.Link>
                        <Nav.Link href="#Contacto" className='Indice-link'>Contacto</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>     
    )

}


export default Indice;

