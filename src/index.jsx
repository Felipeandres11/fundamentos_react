import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Usuarios} from './components/Usuarios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Usuarios nombre="Felipe" edad={28} direccion={{
      calle: 'Av. el libano',
      ciudad: 'Santiago',
      comuna: 'Macul',
      pais: 'Chile'
    }}/>
  </React.StrictMode>
);


