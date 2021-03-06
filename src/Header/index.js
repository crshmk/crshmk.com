import React from 'react'
import { useLocation } from 'react-router-dom'

import './header.css'

import { tail } from 'ramda'

const usePath = () => {
  const { pathname } = useLocation()
  return tail(pathname) || 'home'
}

const Header = () => {
  const path = usePath()

  return (
    <div className="app-header">
      <ul>
        <li>
          <span className="header-name hide-menu-active">Chris Hammock</span> 
          <span className="header-current-page after before">{path}</span>
        </li>
        <li className="header-email hide-menu-active">hello@crshmk.com</li>
      </ul>
    </div>
  )
}

export default Header
