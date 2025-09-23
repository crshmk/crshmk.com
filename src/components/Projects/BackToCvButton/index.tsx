import React from 'react'
import { NavLink } from 'react-router-dom'

import './back-btn.css'

import BackIcon from '@src/assets/icons/Back'

const BackToCvButton = () => (
    <NavLink to="/cv" className="back-btn">
      <BackIcon />
      <span>Back to CV</span>
    </NavLink>
  )

export default BackToCvButton