import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*import Nav from './components/Nav';*/

import { Tasks } from './tasks.json';
/*console.log(Tasks);*/


class App extends Component() {

  constructor(props){
    super();
    this.state = {
      title: 'Aplicacion de tareas',
      ntareas: 10
    };
  }

  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <nav className='navbar navbar-dark bg-dark'>
            <a href='#' className = 'text-white'>
              Tasks
            </a>
          </nav>
  
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
      </div>
    );
  }  
}

export default App;
