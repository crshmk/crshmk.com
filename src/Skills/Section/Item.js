import React from 'react'

let Item = ({ item }) => (
  <div className="skill-item">
    <p className="bullet">{item.bullet}</p>
    {item.subhead && <p className="skill-item-subhead">{item.subhead}</p>}
  </div>
)

export default Item