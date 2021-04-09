import React from 'react'

let makeBullet = bullet => 
  <p class="bullet">{bullet}</p>

let Bullets = ({ item }) => {
  return !item.bullets ? null : item.bullets.map(makeBullet)
}

export default Bullets
