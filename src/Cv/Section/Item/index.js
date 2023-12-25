import React from 'react'

import Bullets from './Bullets'
import Subhead from './Subhead'
import Title from './Title'
import Tools from './Tools'

const Item = ({ item }) => (
  <div className="cv-section-item">
    <Title item={item} />
    <Subhead item={item} />
    <Bullets item={item} />
    <Tools item={item} />
  </div>
)

export default Item