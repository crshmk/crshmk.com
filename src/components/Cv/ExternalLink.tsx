import React from 'react'

const ExternalLink = ({ label, url }: { label: string, url: string}) => 
  <a href={url} target="_blank">{label}</a>

export default ExternalLink 