import React from 'react'

import './languages.css'

import makePageClassNames from '../makePageClassNames'

import { mainLanguages, otherLanguages } from './sections'

const Language = ({ item }) => {
  const [language, years] = item
  return (
    <li className="language-item">
      <span>{language}</span>
      <span>{years}</span>
    </li>
  )
}

const makeMainLanguage = (language, i) => 
  <Language key={i} item={language} />

const makeOtherLanguage = language => 
  <li key={language}>{language}</li>

const mainItems = mainLanguages.map(makeMainLanguage)
const otherItems = otherLanguages.map(makeOtherLanguage)

const Languages = () => {
  const className = makePageClassNames('languages')
  return (
    <div className={className}>
      <h2>Years of use</h2>
      <ul>
        {mainItems}
      </ul>
      <h3>I also know a bit of</h3>
      <ul>
        {otherItems}
      </ul>
    </div>
  )
} 

export default Languages