import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Initial from './initial/main';
import SobreMim from './sobremim/main';
import Contato from './contato/main';

ReactDOM.render(
  <React.StrictMode>
    <Initial />
    <SobreMim />
    <Contato />
  </React.StrictMode>,
  document.getElementById('root')
);