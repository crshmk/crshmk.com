import React, { createContext, useContext, useState } from 'react'

const TabMenuContext = createContext({
  activeTab: 'tools', 
  setActiveTab: (activeTab: CodePageTabOption) => {}, 
  hoveredTab: '', 
  setHoveredTab: (hoveredTab: CodePageTabOption | '') => {}
})
const useTabMenu = () => useContext(TabMenuContext)

export const TabMenuProvider = props => {
  const [activeTab, setActiveTab] = useState('tools')
  const [hoveredTab, setHoveredTab] = useState('')

  const ctx = { activeTab, setActiveTab, hoveredTab, setHoveredTab }

  return (
    <TabMenuContext.Provider value={ctx}>
      {props.children}
    </TabMenuContext.Provider>
  )
}

export default useTabMenu
