import React from 'react'

const makeBullet = (bullet: string | [], i: number) => 
  <p key={i} className="bullet">{bullet}</p>

export default makeBullet