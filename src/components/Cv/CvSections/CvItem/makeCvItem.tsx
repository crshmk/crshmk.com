import React from 'react'

import CvItem from './CvItem'
import CvProjectItem from './CVProjectItem'

const isProjectItem = (cvItem: CvItem | Project): cvItem is Project => 
  typeof cvItem.title !== 'string'

const makeCvItem = (cvItem: CvItem | Project) =>
  isProjectItem(cvItem) 
  ? <CvProjectItem key={cvItem.title.label} {...cvItem} />
  : <CvItem key={cvItem.title} {...cvItem} />

  export default makeCvItem