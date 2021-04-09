/**
 * [
 *   { 
 *     Component: React Component, 
 *     label: String, 
 *     path: String 
 *   }
 * ]
 */
import Code from '../Code'
import Contact from '../Contact'
import Cv from '../Cv'
import Home from '../Home'
import Life from '../Life'

import { concat, map, mergeDeepRight } from 'ramda'

let pages = [
  {
    path: '/',
    label: 'home',
    Component: Home
  },
  {
    label: 'code',
    Component: Code
  },
  {
    label: 'contact',
    Component: Contact
  },
  {
    label: 'cv',
    Component: Cv
  },
  {
    label: 'life',
    Component: Life
  }
]

// e.g. create path '/life' from label 'life' 
let makePathFromLabel = concat('/')

let addPaths = map(page => {
  let path = page.path || makePathFromLabel(page.label)
  return mergeDeepRight(page, {path})
})

export default addPaths(pages)