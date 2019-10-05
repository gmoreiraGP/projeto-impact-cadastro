import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Cursos from './pages/cursos'
import Contato from './pages/contato'
import Menu from './components/menu'

function App() {
  return (
    <div className="container-fluid">
      <Menu />
      <Cursos />
      <Contato />
    </div>
  );
}

export default App;

