import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from 'src/Menu'
import Routes from './Routes'
import { MenuProvider } from 'useMenu'

import './styles.css'

let App = () => {
  return (
    <Router>
      <MenuProvider>
        <Menu />
        <Routes />
      </MenuProvider>
    </Router>
  )
} 
  
export default App