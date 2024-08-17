import React from 'react'

import './cv-sections.css'

import cvSections from './constants/cvSections'

import makeCvItem from './CvItem/makeCvItem'

const makeCvSection = cvSection => {
  const { header, overview, items } = cvSection

  const sectionItems = items.map(makeCvItem)

  return (
    <div key={header} className="cv-section">
      <h2>{header}</h2>
      <div className="cv-section-content before after">
        {!!overview && <p className="cv-section-overview">{overview}</p>}
        {sectionItems}
      </div>
    </div>
  )
}

const sections = cvSections.map(makeCvSection)

const CvSections = () => {
  return (
    <div className="cv-sections">
      {sections}
    </div>
  )
}

export default CvSections