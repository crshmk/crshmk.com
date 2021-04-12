import React from 'react'

import './tab-menu.css'

import useTabMenu from 'src/Code/useTabMenu'

let makeTabClassNames = tabName => {
  let { activeTab } = useTabMenu()
  return 'code-menu-item before ' + (activeTab === tabName ? ' tab-active' : '')
}

let MenuItem = ({tabName}) => {
  let { setActiveTab, setHoveredTab } = useTabMenu()
  let className = makeTabClassNames(tabName)
  return (
    <li
      key={tabName}
      onClick={() => setActiveTab(tabName)}
      onMouseEnter={() => setHoveredTab(tabName)}
      onMouseLeave={() => setHoveredTab('')}
      className={className}
    >{tabName}</li>
  )
}

export default MenuItem
