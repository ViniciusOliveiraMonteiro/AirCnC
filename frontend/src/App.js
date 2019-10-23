import React from 'react';
import './App.css';
import Routes from './routes';

import logo from './assets/logo.svg';

function App() {
  
  //Parei aqui 55:30
  
  return (
    <div className="container">
      <img src={logo} alt="AirCnC logo"/>

      <div className="content">

        <Routes />
        
      </div>
    </div>
  );
}

export default App;
