import React from 'react'
import { NavLink } from 'react-router-dom'

import pages from '@components/App/pages'

import useMenu from '@store/useMenu'

import { map } from 'ramda'
import onKey from '@utils/onKey'

type LinkType = Pick<PageRoute, 'label' | 'path'>

const Link = ({ label, path }: LinkType) => {
  const { hideMenu } = useMenu()
  const onKeyDown = onKey({ Escape: hideMenu })

  const navClassName = ({ isActive }) => 
    isActive ? 'active-menu-item' : undefined

  return (
    <li aria-label={label}>
      <NavLink 
        className={navClassName}
        to={path} 
        onKeyDown={onKeyDown}
      >
        {label}
      </NavLink>
    </li>
  )
}

const makeLinks: (links: LinkType[]) => React.JSX.Element[] = map((
  { label, path }: LinkType) => <Link key={path} label={label} path={path} />
)

const links = makeLinks(pages)

const Links = () => (
  <ul>{links}</ul>
)

export default Links