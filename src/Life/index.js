import React from 'react'

import './life.css'

import blurbs from './blurbs'

const makeBlurb = (blurb, i) => 
  <p key={i}>{blurb}</p>

const paragraphs = blurbs.map(makeBlurb)

const Life = () => (
  <div className="life hide-menu-active">
    {paragraphs}
  </div>
)

export default Life
