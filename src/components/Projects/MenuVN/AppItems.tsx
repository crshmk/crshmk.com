import React from 'react'

import content, { Content } from './content'

const AppItem = ({ appItem }: { appItem: Content['apps'][number] }) => 
  <li className="menuvn-app-item"><appItem.Icon size={17} /> {appItem.label}</li>

const makeAppItem = (appItem, i) => 
  <AppItem key={i} appItem={appItem} />

const appItems = content.apps.map(makeAppItem)

const AppItems = () => (
  <div className="mvn-items after">
    <h3>I built four applications:</h3>
    <ul>
      {appItems}
    </ul>
  </div>
)
  
export default AppItems