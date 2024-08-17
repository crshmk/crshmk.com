import React from 'react'

import { name, title, description } from './header'

import Contacts from './Contacts'

const CvHeader = () => {
  return (
    <div className="cv-header">
      <div className="cv-title">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Contacts />
    </div>
  )
}

export default CvHeader