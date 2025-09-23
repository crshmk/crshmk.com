import Code from '@components/Code'
import Contact from '@components/Contact'
import Cv from '@components/Cv'
import Home from '@components/Home'
import Life from '@components/Life'
import MenuVNProject from '@components/Projects/MenuVN'

import { concat, map, mergeDeepRight } from 'ramda'

const pagesInMenu: Partial<PageRoute>[] = [
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

const pagesNotInMenu: PageRoute[] = [
    {
    path: '/projects/menuvn',
    Component: MenuVNProject
  }
]

export const allRoutes = pagesInMenu.concat(pagesNotInMenu)

// e.g. create path '/life' from label 'life' 
const makePathFromLabel = concat('/')

const addPaths: (pages: Partial<PageRoute>[]) => PageRoute[] = map(page => {
  const path = page.path || makePathFromLabel(page.label)
  return mergeDeepRight(page, {path})
})

export default addPaths(allRoutes)

