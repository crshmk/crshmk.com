import React from 'react'

import './contributions.css'

import makePageClassNames from '../makePageClassNames'

import { contributions } from './sections'

const Contribution = ({ item }) => {
  const [packageName, description, prUrl] = item
  return (
    <div className="contribution-item">
      <p>{packageName}</p>
      <p><a href={prUrl} target="_blank">{description}</a></p>
    </div>
  )
}

const makeItem = (contribution, i) => 
  <Contribution key={i} item={contribution} />

const items = contributions.map(makeItem)

const Contributions = () => {
  const className = makePageClassNames('contributions')
  return (
    <div className={className}>
      <h2>I contribute to open source projects when fixing the source is the best solution</h2>
        {items}
    </div>
  )
} 

export default Contributions
