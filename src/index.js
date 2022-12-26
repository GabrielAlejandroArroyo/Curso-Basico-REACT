import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App saludo="Buenas" />
  // Para llamarlo como childrem desde app.js
  //<App>
  //  Buenassssssssssssssssssss
  //</App>
);

