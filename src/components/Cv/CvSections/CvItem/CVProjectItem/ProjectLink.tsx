import React from 'react'
import { Link } from 'react-router-dom'

import isExternalLink from '@utils/isExternalLink'

import ExternalLink from '@components/Cv/ExternalLink'

const ProjectLink = ({ title }: Pick<Project, 'title'>) => {
  const { description, label, url } = title 
  
  return (
    <span>
    <span>
      { isExternalLink(title.url) ? (
      <ExternalLink {...title} /> 
      ) : (
      <Link to={url} target="_self">{label}</Link>
      )}
    </span>
    <span> - {description}</span>
    </span>
  )
}
export default ProjectLink