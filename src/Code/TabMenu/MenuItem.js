import React from 'react'

import './tab-menu.css'

import useTabMenu from 'src/Code/useTabMenu'

const makeTabClassNames = tabName => {
  const { activeTab } = useTabMenu()
  return 'code-menu-item before ' + (activeTab === tabName ? ' tab-active' : '')
}

const MenuItem = ({tabName}) => {
  const { setActiveTab, setHoveredTab } = useTabMenu()
  const className = makeTabClassNames(tabName)
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
