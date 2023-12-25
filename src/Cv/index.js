import React from 'react'

import './cv.css'

import sections from './sections'

import Section from './Section'

const PrintCvMessage = () => (
  <p className="print">
    More information at 
    <a href="http://crshmk.com"> crshmk.com</a>
  </p>
)

const makeSection = (section, i) => 
  <Section key={section.title} section={section} i={i} />

const cvSections = sections.map(makeSection)

const Cv = () => (
  <div className="cv page hide-menu-active">
    <PrintCvMessage />
    {cvSections}
  </div>
)

export default Cv
