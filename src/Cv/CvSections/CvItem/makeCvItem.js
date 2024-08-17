import React from 'react'

import CvItem from './CvItem'
import CvProjectItem from './CvProjectItem'

const isProjectItem = cvItem => 
  typeof cvItem.title !== 'string'

const makeCvItem = cvItem =>
  isProjectItem(cvItem) 
  ? <CvProjectItem key={cvItem.title.label} {...cvItem} />
  : <CvItem key={cvItem.title} {...cvItem} />

  export default makeCvItem