import React from 'react'

import './contributions.css'

import usePageClassNames from '../usePageClassNames'

import NpmIcon from '@icons/NpmIcon'

const focusLockUrl = 'https://github.com/theKashey/react-focus-lock/pull/182'
const ramdaUrl = 'https://github.com/ramda/ramda/pull/3382'

const Contributions = () => {
  const className = usePageClassNames('contributions')
  return (
    <div className={className}>
      <h2>I budget a small amount of time for open source when</h2>
      <h3 className="before npm-item"><span>npm link gets painful</span> <NpmIcon /></h3>
      <h3 className="before">fixing the source is easier than the workaround, like some <a href={focusLockUrl} target="_blank">accessibility</a>  or <a href={ramdaUrl} target="_blank">webpack</a>  issue.</h3>
    </div>
  )
} 

export default Contributions
