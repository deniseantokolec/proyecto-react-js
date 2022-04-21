import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import ItemListContainer from './component/ItemListContainer';





function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting= 'En este sitio encontrarás todos nuestros productos próximamente. Te esperamos!!!' />

      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


