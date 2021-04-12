import React from 'react'

import makePageClassNames from '../makePageClassNames'

import sections from './sections'

let toolsSections = sections.map((section, i) => (
  <div key={i}>
    <h2>{section.header}</h2>
    <ul>
      {section.items.map(item => <li>{item}</li>)}
    </ul>
  </div>
))

let Tools = () => {
  let className = makePageClassNames('tools')
  return (
    <div className={className}>
      {toolsSections}
    </div>
  )
}

export default Tools