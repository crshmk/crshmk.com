import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from '@components/Header'
import Menu from '@components/Menu'
import Providers from '@store/Providers'
import Routes from './Routes'
import ScrollToTop from './ScrollToTop'

import './styles.css'

const App = () => (
  <Router>
    <ScrollToTop />
    <Providers>
      <Header />
      <Menu />
      <Routes />
    </Providers>
  </Router>
)
  
export default App