import React from 'react'

import './tab-menu.css'

import useListClasses from './useListClasses'

import MenuItem from './MenuItem'

const tabNames = ['style', 'tools', 'languages']

const makeMenuItem = (tabName, i) => 
  <MenuItem key={i} tabName={tabName} />

const menuItems = tabNames.map(makeMenuItem)

const Tabs = () => {
  const listClasses = useListClasses()
  return (
    <nav>
      <ul className={listClasses}>
        {menuItems}     
      </ul>
    </nav>
  )
}

export default Tabs