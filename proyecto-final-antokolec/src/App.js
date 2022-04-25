import React from 'react';
import Navbar from './component/Navbar';
import ItemListContainer from './component/ItemListContainer';
import ItemCount from './component/BotonAgregar';





function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting= 'En este sitio encontrarás todos nuestros productos próximamente. Te esperamos!!!' />
      <ItemCount stock={80} initial={1}/>
        
     
    </div>
  );
}

export default App;


