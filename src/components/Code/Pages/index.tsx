import React from 'react'

import Contributions from './Contributions'
import Tools from './Tools'

import LinkToThisRepo from '@components/Home/LinkToThisRepo'

const Pages = () => (
  <div className="code-content">
    <Tools />
    <Contributions />
    <div className="bottom-bar">
      <LinkToThisRepo />
    </div>
  </div>
)

export default Pages
