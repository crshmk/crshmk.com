import React from 'react'

import { map } from 'ramda'

import Item from './Item'

let makeItems = map(item => 
  <Item key={item.title} item={item} />
)

let Section = ({ section, i }) => {
  let items = makeItems(section.items)
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
