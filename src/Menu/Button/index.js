import React from 'react'

import './menu-button.css'

import useMenu from 'useMenu'

const props = {
  'aria-label': 'show main menu',
  role: 'button',
  tabIndex: '0'
}

const useClass = () => {
  const { isMenuShowing } = useMenu()
  return 'menu-btn' + (isMenuShowing ? ' showing' : '')
}

const Button = () => {
  const { showMenu } = useMenu()
  const className = useClass()

  return (
    <div 
      {...props}
      className={className}
      onClick={showMenu}
      onMouseEnter={showMenu}
      onKeyDown={showMenu}
    >
      menu
    </div>
  ) 
}

export default Button