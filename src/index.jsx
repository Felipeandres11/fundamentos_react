import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {Card} from './components/Card'
import {Texto} from './components/Texto'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Usuarios nombre="Felipe" edad={28} direccion={{
      calle: 'Av. el libano',
      ciudad: 'Santiago',
      comuna: 'Macul',
      pais: 'Chile'
    }}/> */}
    {/* <Card estado={false}></Card> */}
    <Texto></Texto>
  </React.StrictMode>
);


