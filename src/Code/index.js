import React from 'react'

import './code.css'

import Pages from './Pages'
import TabMenu from './TabMenu'
import { TabMenuProvider } from './useTabMenu'

const Code = () => (
  <TabMenuProvider>
    <div className="code page hide-menu-active">
      <TabMenu />
      <Pages />
    </div>
  </TabMenuProvider>
)

export default Code
