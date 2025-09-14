import React from 'react'

import './contributions.css'

import makePageClassNames from '../makePageClassNames'

import { contributions } from './sections'

const Contribution = ({ item }) => {
  const [packageName, description, prUrl] = item
  return (
    <div className="contribution-item">
      <p>{''}</p>
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
      <h2>I make time for open source when</h2>
      <h3>npm link becomes painful</h3>
      <p></p>
      <h3>fixing the source is better than the workaround</h3>
        {items}
    </div>
  )
} 

export default Contributions
