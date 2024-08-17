import React from 'react'

const makeBullet = (bullet, i) => 
  <p key={i} className="bullet">{bullet}</p>

export default makeBullet