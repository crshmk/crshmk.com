import React from 'react'

import sections from './sections'

import makePageClassNames from '../makePageClassNames'

let makeItem = (item, i) => <p key={i}>{item}</p>

let makeSection = (section, i) => (
  <div key={i}>
    <h2>{section.header}</h2>
    {section.items.map(makeItem)}
  </div>
)

let Sections = () => sections.map(makeSection)

let Style = () => {
  let className = makePageClassNames('style')
  return (
    <div className={className}>
      <Sections />
    </div>
  )
}

export default Style
