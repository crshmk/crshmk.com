import React from 'react'

import './life.css'

import blurbs from './blurbs'

import { map } from 'ramda'

let makeBlurbs = map(blurb => <p>{blurb}</p>)

let paragraphs = makeBlurbs(blurbs)

let Life = () => (
  <div className="life hide-menu-active">
    {paragraphs}
  </div>
)

export default Life
