import React from 'react'

import './menu.css'

import Borders from './Borders'
import Button from './Button'
import Links from './Links'

import useMenu from 'useMenu'

let useClass = () => {
  let { isMenuShowing } = useMenu()
  return 'main-menu' + (isMenuShowing ? ' showing' : '')
}

let Menu = () => {
  let { hideMenu } = useMenu()
  let className = useClass()
  return (
    <>
    <Button />
    <div className={className} onMouseLeave={hideMenu}>
      <Borders />
      <Links />
    </div>
    </>
  )
}

export default Menu