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
import MenuVNProject from '../Projects/MenuVN'

import { concat, map, mergeDeepRight } from 'ramda'

const pagesInMenu = [
  {
    path: '/',
    label: 'home',
    Component: Home
  },
  {
    label: 'cv',
    Component: Cv
  },
  {
    label: 'code',
    Component: Code
  },
  {
    label: 'life',
    Component: Life
  },
  {
    label: 'contact',
    Component: Contact
  }
]

const pagesNotInMenu = [
    {
    path: '/projects/menuvn',
    Component: MenuVNProject
  }
]

export const allRoutes = pagesInMenu.concat(pagesNotInMenu)

// e.g. create path '/life' from label 'life' 
const makePathFromLabel = concat('/')

const addPaths = map(page => {
  const path = page.path || makePathFromLabel(page.label)
  return mergeDeepRight(page, {path})
})

export default addPaths(pagesInMenu)

