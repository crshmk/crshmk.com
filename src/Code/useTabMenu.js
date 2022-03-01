import React, { createContext, useContext, useState } from 'react'

const TabMenuContext = createContext()
const useTabMenu = () => useContext(TabMenuContext)

export const TabMenuProvider = props => {
  const [activeTab, setActiveTab] = useState('style')
  const [hoveredTab, setHoveredTab] = useState('')

  const ctx = { activeTab, setActiveTab, hoveredTab, setHoveredTab }

  return (
    <TabMenuContext.Provider value={ctx}>
      {props.children}
    </TabMenuContext.Provider>
  )
}

export default useTabMenu
