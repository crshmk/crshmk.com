import React from 'react'

import makePageClassNames from '../makePageClassNames'

import sections from './sections'

const toolsSections = sections.map((section, i) => (
  <div key={i}>
    <h2>{section.header}</h2>
    <ul>
      {section.items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
))

const Tools = () => {
  const className = makePageClassNames('tools')
  return (
    <div className={className}>
      {toolsSections}
    </div>
  )
}

export default Tools