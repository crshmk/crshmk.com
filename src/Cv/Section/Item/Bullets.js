import React from 'react'

let makeBullet = (bullet, i) => 
  <p key={i} className="bullet">{bullet}</p>

let Bullets = ({ item }) => {
  return !item.bullets ? null : item.bullets.map(makeBullet)
}

export default Bullets
