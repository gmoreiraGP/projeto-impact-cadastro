import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home'
import Cursos from '../../pages/cursos'
import Contato from '../../pages/contato'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cursos" component={Cursos} />
      <Route exact path="/contato" component={Contato} />
    </Switch>
  )
}

export default Router