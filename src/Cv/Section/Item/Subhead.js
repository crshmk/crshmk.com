import React from 'react'

const Subhead = ({ item }) => {
  const [subhead, italicSubhead] = item.subhead

  return (
    <p>
      {subhead && <span>{subhead}</span>}
      {italicSubhead && <span>, <i>{italicSubhead}</i></span>}
    </p>
  )
}

export default Subhead