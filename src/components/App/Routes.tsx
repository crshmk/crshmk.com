import React from 'react'
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom'

import allRoutes from './pages'

import { map } from 'ramda'

import useMenu from '@store/useMenu'

const makeRoute = ({ Component, path }: { Component: React.FC, path: string }) => 
  <Route key={path} path={path} element={<Component />} />


const routes = map(makeRoute, allRoutes)

const Routes = () => {
  const { hideMenu } = useMenu()
  return (
    <div onClick={hideMenu}>
      <ReactRouterRoutes>
        {routes as React.JSX.Element[]}
      </ReactRouterRoutes> 
    </div>
  )
} 

export default Routes
