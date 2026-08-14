import React from 'react'

import { name, title, techDescription, edDescription } from './header'

import Contacts from './Contacts'

const CvHeader = () => {
  return (
    <div className="cv-header">
      <div className="cv-title">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{techDescription}</p>
        <p>{edDescription}</p>
      </div>
      <Contacts />
    </div>
  )
}

export default CvHeader