import React from 'react'
import { NavLink } from 'react-router-dom'

import pages from 'App/pages'

import useMenu from '../useMenu'

import { map } from 'ramda'
import { onKey } from '../../utils'

const Link = ({ label, path }) => {
  const { hideMenu } = useMenu()
  const onKeyDown = onKey({ Escape: hideMenu })
  return (
    <li aria-label={label}>
      <NavLink 
        exact
        activeClassName="active-menu-item"
        to={path} 
        onKeyDown={onKeyDown}
      >
        {label}
      </NavLink>
    </li>
  )

}

const makeLinks = map(({ label, path }) => {
  return <Link key={label} label={label} path={path} />
} )

const links = makeLinks(pages)

const Links = () => (
  <ul>{links}</ul>
)

export default Links