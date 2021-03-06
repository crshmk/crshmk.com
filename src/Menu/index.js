import React, { useEffect } from 'react'

import './menu.css'

import Borders from './Borders'
import Button from './Button'
import Links from './Links'

import useMenu from 'useMenu'

import { blurActiveElement } from '../utils'

const useClass = () => {
  const { isMenuShowing } = useMenu()
  return 'main-menu' + (isMenuShowing ? ' showing' : '')
}

const Menu = () => {
  const { hideMenu } = useMenu()
  const className = useClass()

  useEffect(() => blurActiveElement)

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