import React from 'react'

import './cv.css'

import CvHeader from './CvHeader'
import CvSections from './CvSections'

const Cv = () => (
  <div className="cv page hide-menu-active">
    <CvHeader />
    <CvSections />
  </div>
)

export default Cv
