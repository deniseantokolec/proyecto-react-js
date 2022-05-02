import React from 'react';
import Navbar from './component/Navbar';
import ItemDetailContainer from './component/ItemDetail';
{/*import ItemListContainer from './component/ItemListContainer';*/}



function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<ItemListContainer />*/}
      <ItemDetailContainer />  
     
    </div>
  );
}

export default App;


