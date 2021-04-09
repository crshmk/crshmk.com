import React from 'react'

import './life.css'

import blurbs from './blurbs'

import { map } from 'ramda'

let makeBlurb = (blurb, i) => 
  <p key={i}>{blurb}</p>

let paragraphs = blurbs.map(makeBlurb)

let Life = () => (
  <div className="life hide-menu-active">
    {paragraphs}
  </div>
)

export default Life
