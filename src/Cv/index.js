import React from 'react'

import './cv.css'

import { map } from 'ramda'

import sections from './sections'

import SectionItem from './SectionItem'

let makeItems = map(item => <SectionItem item={item} />)

let Sections = () => {
  return sections.map((section, i) => {
    let items = makeItems(section.items)
    return (
      <div className="cv-section">
      <h3>
        <span className="number">{i+1}</span>
        {section.title}
      </h3>
      {items}
      </div>
    )
  })
}

let Cv = () =>  (
  <div className="cv page hide-menu-active">
    <Sections />
  </div>
)

export default Cv
