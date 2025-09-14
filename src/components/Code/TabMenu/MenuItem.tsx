import React from 'react'

import './tab-menu.css'

import useTabMenu from '@src/components/Code/useTabMenu'

const makeTabClassNames = (tabName: CodePageTabOption) => {
  const { activeTab } = useTabMenu()
  return 'code-menu-item before ' + (activeTab === tabName ? ' tab-active' : '')
}

const MenuItem = ({ tabName }: { tabName: CodePageTabOption }) => {
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
