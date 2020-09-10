import React, { Component } from 'react';

function Nav(props){
    return(
        <nav className='navbar navbar-dark bg-dark'>
          <a href='' className = 'text-white'>
            {props.titulo}
          </a>
        </nav>
    );
}

export default Nav;
