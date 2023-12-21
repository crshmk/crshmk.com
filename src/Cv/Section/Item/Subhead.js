import React from 'react'

const Subhead = ({ item }) => {
  const [subhead, italicSubhead] = item.subhead

  return (
    <p className="subhead">
      {subhead && <span>{subhead}</span>}
      <span><i>{italicSubhead}</i></span>
    </p>
  )
}

export default Subhead