import React from 'react'
import { Route, Switch } from 'react-router-dom'

import allRoutes from './pages'

import { map } from 'ramda'

import useMenu from 'src/Menu/useMenu'

const makeRoute = ({ Component, path }) => (
  <Route key={path} exact path={path}>
    <Component />
  </Route>
)

const routes = map(makeRoute, allRoutes)

const Routes = () => {
  const { hideMenu } = useMenu()
  return (
    <div onClick={hideMenu}>
      <Switch>
        {routes}
      </Switch>
    </div>
  )
} 

export default Routes
