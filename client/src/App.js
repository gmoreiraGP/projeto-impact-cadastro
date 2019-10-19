import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { Container } from './components/Container'
import Menu from './components/menu'
import Router from './components/router'


function App() {
  return (
    <Container fluid>
      <Menu />
      <Router />
    </Container>
  );
}

export default App;

