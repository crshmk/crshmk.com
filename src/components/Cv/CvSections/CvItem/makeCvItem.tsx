import React from 'react'

import { isAbsent } from 'ramjam'

import CvItem from './CvItem'
import CvProjectItem from './CVProjectItem'

const isProjectItem = (item: CvItem | Project): item is Project => 
  'img' in item

const makeCvItem = (cvItem: CvItem | Project) =>
  isProjectItem(cvItem) 
  ? <CvProjectItem key={cvItem.title.label} {...cvItem} />
  : <CvItem key={cvItem.dates} {...cvItem} />

  export default makeCvItem