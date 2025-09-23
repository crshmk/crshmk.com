import React from 'react'

import './menuvn.css'

import About from './About'
import AppItems from './AppItems'
import Header from './Header'
import MenuVNProjects from './MenuVNProjects'
import Status from './Status'

const MenuVN = () => {
  return (
    <div className="page projects hide-menu-active">
      <Header />
      <About />   
      <AppItems />
      <MenuVNProjects />
      <Status />
    </div>
  )
}

export default MenuVN