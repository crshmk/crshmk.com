import React from 'react'

import './life.css'

import blurbs from './blurbs'

import FadeIn from '@components/FadeIn'

const makeBlurb = (blurb: string, i: number) => 
  <p key={i}>{blurb}</p>

const paragraphs = blurbs.map(makeBlurb)

const Life = () => (
  <FadeIn>
  <div className="life hide-menu-active">
    {paragraphs}
  </div>
  </FadeIn>
)

export default Life
