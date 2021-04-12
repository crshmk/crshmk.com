import React from 'react'
import { Route, Switch } from 'react-router-dom'

import pages from './pages'

import { map } from 'ramda'

import useMenu from 'src/Menu/useMenu'

let makeRoute = ({ Component, path }) => (
  <Route key={path} exact path={path}>
    <Component />
  </Route>
)

let routes = map(makeRoute, pages)

let Routes = () => {
  let { hideMenu } = useMenu()
  return (
    <Switch>
      <div onClick={hideMenu}>
        {routes}
      </div>
    </Switch>
  )
} 

export default Routes
