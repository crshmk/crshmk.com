import React from 'react'

import sections from './sections'

import makePageClassNames from '../makePageClassNames'

let makeItem = (item, i) => <p key={i}>{item}</p>

let makeSection = (section, i) => (
  <div key={i}>
    <h2>{section.title}</h2>
    {section.items.map(makeItem)}
  </div>
)

let exampleSections = sections.map(makeSection)

let Projects = () => {
  let className = makePageClassNames('projects')
  return (
    <div className={className}>
      {exampleSections}
    </div>
  )
}

export default Projects