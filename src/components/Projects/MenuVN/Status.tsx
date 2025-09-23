import React from 'react'

import content from './content'

const Status = () => (
   <div className="status">
    <h3>Project Status</h3>
    <p>{content.status}</p>
  </div>
)

export default Status