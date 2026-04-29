import React from 'react'
import { Link } from 'react-router-dom'

import ProjectLink from './ProjectLink'

import isExternalLink from '@utils/isExternalLink'

const CvProjectImage = ({ title, img }: Pick<Project, 'title' | 'img'>) => 
  isExternalLink(title.url) ? (
     <a href={title.url} target="_blank">
        <img src={img} />
      </a>
  ) : (
    <Link to={title.url}>
      <img src={img} />
    </Link>
  )


const CvProjectItem = ({ title, img, stack }: Project) => (
  <div className="project item">
    <div>
      <div className="cv-item">
        <div className="cv-item-header">
          <h3>
            <ProjectLink title={title} />
          </h3>
        
        </div>
        {!!stack && <p>{stack}</p>}
        {!isExternalLink(title.url) && (
          <Link to={title.url} className="link">details</Link>
        )}
      </div>
    </div>
    <div className="project-img">
     <CvProjectImage title={title} img={img} />
    </div>
  </div>
)

export default CvProjectItem