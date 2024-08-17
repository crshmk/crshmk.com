import React from 'react'

const ExternalLink = ({ label, url }) => 
  <a href={url} target="_blank">{label}</a>

export default ExternalLink 