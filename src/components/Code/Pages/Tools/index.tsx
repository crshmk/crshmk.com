import React from 'react'

import usePageClassNames from '../usePageClassNames'

import sections from './toolsSections'

const toolsSections = sections.map((section, i) => (
  <div key={i}>
    <h2>{section.header}</h2>
    <ul>
      {section.items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
))

const Tools = () => {
  const className = usePageClassNames('tools')
  return (
    <div className={className}>
      {toolsSections}
    </div>
  )
}

export default Tools