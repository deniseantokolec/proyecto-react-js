import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import CartContainer from './pages/CartContainer';
import Contacto from './pages/Contacto';
import ItemDetailContainer from './pages/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer';
import {CartContextProvider} from './store/CartContext'



function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryid' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart/' element={<CartContainer/>} />
          <Route path='/contacto/' element={<Contacto />} />
        </Routes>
      </CartContextProvider>

      
        
     
    </div>
  );
}

export default App;


