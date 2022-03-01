import React from 'react'

import { map } from 'ramda'

import Item from './Item'

const makeItems = map(item => 
  <Item key={item.title} item={item} />
)

const Section = ({ section, i }) => {
  const items = makeItems(section.items)
  return (
    <div key={section.title} className="cv-section">
      <h3>
        <span className="number">{i+1}</span>
        {section.title}
      </h3>    
      {items}
    </div>
  )
} 

export default Section
