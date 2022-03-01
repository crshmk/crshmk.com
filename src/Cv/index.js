import React from 'react'

import './cv.css'

import sections from './sections'

import Section from './Section'

const makeSection = (section, i) => 
  <Section key={i} section={section} i={i} />

const cvSections = sections.map(makeSection)

const Cv = () => (
  <div className="cv page hide-menu-active">
    {cvSections}
  </div>
)

export default Cv
