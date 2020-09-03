import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav titulo = 'Mi primer titulo'></Nav>
        

        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
