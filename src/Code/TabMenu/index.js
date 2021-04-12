import React from 'react'

import './tab-menu.css'

import useListClasses from './useListClasses'

import MenuItem from './MenuItem'

let tabNames = ['style', 'tools', 'languages', 'projects']

let makeMenuItem = (tabName, i) => 
  <MenuItem key={i} tabName={tabName} />

let menuItems = tabNames.map(makeMenuItem)

let Tabs = () => {
  let listClasses = useListClasses()
  return (
    <nav>
      <ul className={listClasses}>
        {menuItems}     
      </ul>
    </nav>
  )
}

export default Tabs