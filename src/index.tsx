import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Cardapio from './pages/Cardapio';
import Inicio from 'pages/Inicio';

const componenteAtual = window.location.pathname === '/' ? <Inicio /> : <Cardapio />;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>    
    {componenteAtual}
  </React.StrictMode>
);

// AULA 02.02 'Pratos recomendados' Revisar e continuar