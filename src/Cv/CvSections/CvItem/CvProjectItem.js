import React from 'react'

import ExternalLink from '../../ExternalLink'

const CvProjectItem = ({ title, img, stack }) => (
  <div className="project">
    <div>
      <div className="cv-item">
        <div className="cv-item-header">
          <h3><ExternalLink {...title} /> - {title.description}</h3>
        </div>
        {!!stack && <p>{stack}</p>}
      </div>
    </div>
    <div className="project-img">
      <a href={title.url} target="_blank">
        <img src={img} />
      </a>
    </div>
  </div>
)

export default CvProjectItem