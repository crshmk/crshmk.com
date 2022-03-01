import React from 'react'
import { NavLink } from 'react-router-dom'

import pages from 'App/pages'

import { map } from 'ramda'

const makeLinks = map(({ label, path }) => (
  <li key={label} aria-label={label}>
    <NavLink 
      exact
      activeClassName="active-menu-item"
      to={path} 
    >
      {label}
    </NavLink>
  </li>
))

const links = makeLinks(pages)

const Links = () =>
  <ul>{links}</ul>

export default Links