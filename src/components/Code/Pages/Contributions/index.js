import React from 'react'

import './contributions.css'

import makePageClassNames from '../makePageClassNames'

import { contributions } from './sections'

import NpmIcon from '@icons/NpmIcon'

const Contribution = ({ item }) => {
  const [_, description, prUrl ] = item
  return (
    <div className="contribution-item">
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
      <h2>I budget a small amount of time for open source when</h2>
      <h3 className="before npm-item"><span>npm link gets painful</span> <NpmIcon /></h3>
      <h3 className="before">fixing the source is easier than the workaround, like some <a href="https://github.com/theKashey/react-focus-lock/pull/182" target="_blank">accessibility</a>  or <a href="https://github.com/ramda/ramda/pull/3382" target="_blank">webpack</a>  issue.</h3>
    </div>
  )
} 

export default Contributions
