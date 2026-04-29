import React, { useState } from 'react'

import './cv-sections.css'

import cvSections from './constants/cvSections'

import makeCvItem from './CvItem/makeCvItem'

import { ChevronDown } from 'react-feather'

const CvSection = ({ cvSection }: { cvSection: CvSection }) => {
  const { header, overview, items, isAccordion } = cvSection
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const toggleAccordion = () => {
    setIsAccordionOpen(prev => !prev)
  }

  const sectionItems = items.map(makeCvItem)

  const className = 'cv-section' + (isAccordion ? ' accordion' : '') + (isAccordionOpen ? ' active' : '')

  return (
    <div key={header} className={className}>
      <h2 onClick={toggleAccordion}>{header} 
        {cvSection.isAccordion && (
        <ChevronDown color="black" size={27} className="toggle-accordion-btn" />
        )}
      </h2>
      <div className="cv-section-content before after">
        {!!overview && <p className="cv-section-overview">{overview}</p>}
        {sectionItems}
      </div>
    </div>
  )
}

const sections = cvSections.map(cvSection => 
  <CvSection key={cvSection.header} cvSection={cvSection} />
)

const CvSections = () => {
  return (
    <div className="cv-sections">
      {sections}
    </div>
  )
}

export default CvSections