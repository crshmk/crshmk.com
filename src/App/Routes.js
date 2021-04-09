import React from 'react'
import { Route, Switch } from 'react-router-dom'

import pages from './pages'

import { map } from 'ramda'

let makeRoute = ({ Component, path }) => (
  <Route key={path} exact path={path}>
    <Component />
  </Route>
)

let routes = map(makeRoute, pages)

let Routes = () => (
  <Switch>
    {routes}
  </Switch>
)

export default Routes
