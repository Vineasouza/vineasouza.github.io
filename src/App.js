import React from 'react';
import Initial from './initial/main';
import SobreMim from './sobremim/main';
import Portifolio from './portifolio/main';
import Contato from './contato/main';

function App() {
  return (
    <div className="App">
      <Initial/>
      <SobreMim/>
      <Portifolio/>
      <Contato/>
    </div>
  );
}

export default App;