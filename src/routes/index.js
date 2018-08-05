import React from 'react'

import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contacts from '../pages/Contacts/Contacts'


const routes = (
  <Switch>
    <Route  exact path="/" component={Home} />
    <Route  path="/about" component={About} />
    <Route  path="/contacts" component={Contacts} />
  </Switch>
)

export default routes
