import React from 'react'

import './cv.css'

import sections from './sections'

import Section from './Section'

let makeSection = (section, i) => 
  <Section key={section.title} section={section} i={i} />

let cvSections = sections.map(makeSection)

let Cv = () => (
  <div className="cv page hide-menu-active">
    {cvSections}
  </div>
)

export default Cv
