import React from 'react'

import './menu-button.css'

import useMenu from 'useMenu'

import makeAccessibilityProps from './makeAccessibilityProps'

const useClass = () => {
  const { isMenuShowing } = useMenu()
  return 'menu-btn' + (isMenuShowing ? ' showing' : '')
}

const Button = () => {
  const { showMenu } = useMenu()
  const className = useClass()
  const accessibilityProps = makeAccessibilityProps(showMenu)

  return (
    <div 
      {...accessibilityProps}
      className={className}
      onClick={showMenu}
      onMouseEnter={showMenu}
    >
      menu
    </div>
  ) 
}

export default Button