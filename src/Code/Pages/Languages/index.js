import React from 'react'

import './languages.css'

import makePageClassNames from '../makePageClassNames'

import { mainLanguages, otherLanguages } from './sections'

const Language = ({ item }) => {
  const [language, years] = item
  return (
    <p className="language-item">
      <span>{language}</span>
      <span>{years}</span>
    </p>
  )
}

const makeMainLanguage = (language, i) => 
  <Language key={i} item={language} />

const makeOtherLanguage = language => 
  <p key={language}>{language}</p>

const mainItems = mainLanguages.map(makeMainLanguage)
const otherItems = otherLanguages.map(makeOtherLanguage)

const Languages = () => {
  const className = makePageClassNames('languages')
  return (
    <div className={className}>
      <h2>Years of use</h2>
        {mainItems}
      <h3>I also know a bit of</h3>
      <ul>
        {otherItems}
      </ul>
    </div>
  )
} 

export default Languages