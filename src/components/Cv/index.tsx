import React from 'react'

import './cv.css'

import CvHeader from './CvHeader'
import CvSections from './CvSections'
import FadeIn from '@components/FadeIn'

const Cv = () => (
  <FadeIn>
  <div className="cv page hide-menu-active">
    <CvHeader />
    <CvSections />
  </div>
  </FadeIn>
)

export default Cv
