import React from 'react'

const makeBullet = (bullet, i) => 
  <p key={i} className="bullet">{bullet}</p>

const Bullets = ({ item }) => {
  return !item.bullets ? null : item.bullets.map(makeBullet)
}

export default Bullets
