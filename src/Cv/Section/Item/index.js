import React from 'react'

import Bullets from './Bullets'
import Subhead from './Subhead'
import Title from './Title'

let Item = ({ item }) => (
  <div className="cv-section-item">
    <Title item={item} />
    <Subhead item={item} />
    <Bullets item={item} />
  </div>
)

export default Item