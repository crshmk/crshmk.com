import React from 'react'

import { propOr } from 'ramda'

const getTools = propOr('', 'tools') 

const Tools = ({ item }) => {
  const tools = getTools(item)
  return <p className="tools">{tools}</p>
} 

export default Tools 