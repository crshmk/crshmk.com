/**
 * a single job, degree, or other event
 * a recent project has its own view
 */
import React from 'react'

import makeBullet from './makeBullet'

const CvItem = ({ title, dates, location, stack, bullets, note }) => (
  <div key={title} className="cv-item">
    <div className="cv-item-header">
      <h3>{title}</h3> 
      {!!dates && <p className="dates">{dates}</p>}
    </div>
    {!!location && <p>{location}</p>}
    {!!stack && <p>{stack}</p>}
    {!!bullets && bullets.map(makeBullet)}
    {!!note && <p className="note">{note}</p>}
  </div>
)

export default CvItem