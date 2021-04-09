import React from 'react'

let Subhead = ({ item }) => {
  let [subhead, italicSubhead] = item.subhead

  return (
    <p>
      {subhead && <span>{subhead}</span>}
      <span><i>{italicSubhead}</i></span>
    </p>
  )
}

export default Subhead