import React from 'react'

import './languages.css'

import makePageClassNames from '../makePageClassNames'

import { mainLanguages, otherLanguages } from './sections'

let Language = ({ item }) => {
  let [language, years] = item
  return (
    <li className="language-item">
      <span>{language}</span>
      <span>{years}</span>
    </li>
  )
}

let makeMainLanguage = (language, i) => 
  <Language key={i} item={language} />

let makeOtherLanguage = language => 
  <li key={language}>{language}</li>

let mainItems = mainLanguages.map(makeMainLanguage)
let otherItems = otherLanguages.map(makeOtherLanguage)

let Languages = () => {
  let className = makePageClassNames('languages')
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