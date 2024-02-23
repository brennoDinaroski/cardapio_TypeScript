import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Router from 'routes.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>    
    <Router/>
  </React.StrictMode>
);

// AULA 03.04 'Trocando a Tag A' assistir do inicio