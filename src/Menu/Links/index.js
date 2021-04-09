import React from 'react'
import { NavLink } from 'react-router-dom'

import pages from 'App/pages'

import { map } from 'ramda'

let makeLinks = map(({ label, path }) => (
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

let links = makeLinks(pages)

let Links = () => (
  <ul>{links}</ul>
)

export default Links