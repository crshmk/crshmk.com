import React, { createContext, useContext, useState } from 'react'

let TabMenuContext = createContext()
let useTabMenu = () => useContext(TabMenuContext)

export let TabMenuProvider = props => {
  let [activeTab, setActiveTab] = useState('style')
  let [hoveredTab, setHoveredTab] = useState('')

  let ctx = { activeTab, setActiveTab, hoveredTab, setHoveredTab }

  return (
    <TabMenuContext.Provider value={ctx}>
      {props.children}
    </TabMenuContext.Provider>
  )
}

export default useTabMenu
