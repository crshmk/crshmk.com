import React from 'react'

import './code.css'

import FadeIn from '@components/FadeIn'
import Pages from './Pages'
import TabMenu from './TabMenu'
import { TabMenuProvider } from './useTabMenu'

const Code = () => (
  <FadeIn>
  <TabMenuProvider>
    <div className="code page hide-menu-active">
      <TabMenu />
      <Pages />
    </div>
  </TabMenuProvider>
  </FadeIn>
)

export default Code
