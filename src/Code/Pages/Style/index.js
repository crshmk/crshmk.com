import React from 'react'

import sections from './sections'

import makePageClassNames from '../makePageClassNames'

const makeItem = (item, i) => <p key={i}>{item}</p>

const makeSection = (section, i) => (
  <div key={i}>
    <h2>{section.header}</h2>
    {section.items.map(makeItem)}
  </div>
)

const Sections = () => sections.map(makeSection)

const Style = () => {
  const className = makePageClassNames('style')
  return (
    <div className={className}>
      <Sections />
    </div>
  )
}

export default Style
