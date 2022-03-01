import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from 'src/Header'
import Menu from 'src/Menu'
import Routes from './Routes'
import { MenuProvider } from 'useMenu'

import './styles.css'

const App = () => {
  return (
    <Router>
      <MenuProvider>
        <Header />
        <Menu />
        <Routes />
      </MenuProvider>
    </Router>
  )
} 
  
export default App