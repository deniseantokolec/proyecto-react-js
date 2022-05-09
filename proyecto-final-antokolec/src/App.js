import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import ItemDetailContainer from './pages/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryid' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />    
      </Routes>


      
        
     
    </div>
  );
}

export default App;


