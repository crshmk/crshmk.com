import React from 'react'

import './menu-button.css'

import useMenu from 'useMenu'

let props = {
  'aria-label': 'show main menu',
  role: 'button',
  tabIndex: '0'
}

let useClass = () => {
  let { isMenuShowing } = useMenu()
  return 'menu-btn' + (isMenuShowing ? ' showing' : '')
}

let Button = () => {
  let { showMenu } = useMenu()
  let className = useClass()

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