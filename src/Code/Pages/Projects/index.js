import React from 'react'

import sections from './sections'

import makePageClassNames from '../makePageClassNames'

const makeItem = (item, i) => <p key={i}>{item}</p>

const makeSection = (section, i) => (
  <div key={i}>
    <h2>{section.title}</h2>
    {section.items.map(makeItem)}
  </div>
)

const exampleSections = sections.map(makeSection)

const Projects = () => {
  const className = makePageClassNames('projects')
  return (
    <div className={className}>
      {exampleSections}
    </div>
  )
}

export default Projects