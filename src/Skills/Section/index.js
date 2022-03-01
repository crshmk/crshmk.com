import React from 'react'

import Item from './Item'

const Section = ({ section }) => {
  const items = section.items.map((item, i) => <Item key={i} item={item} />)
  return (
    <div className="skills-section">
      <h2>{section.title}</h2>
      {items}
    </div>
  ) 
}

export default Section