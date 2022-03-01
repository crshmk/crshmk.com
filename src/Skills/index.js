import React from 'react'

import './skills.css'

import sections from './sections'

import Header from './Header'
import Section from './Section'

const makeSection = (section, i) => 
  <Section key={i} section={section} />

const sectionItems = sections.map(makeSection)

const Skills = () => (
  <div className="skills page hide-menu-active">
    <Header />
    <div className="skills-content">
    {sectionItems}
    </div>
    <div className="footer-border"></div>
  </div>
)

export default Skills
