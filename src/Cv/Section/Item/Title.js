import React from 'react'

const Title = ({ item }) => {
  const [boldTitle, faintTitle] = item.title 
  return (
    <>
    <p>
      <span className="title">{boldTitle}</span>
      {faintTitle && <span className="place-comma">,</span>}
      <span className="place">{faintTitle}</span>
      <span className="date">{item.dates}</span>
    </p>
    <p className="phone-place">{faintTitle}</p>
    <p className="phone-date">{item.dates}</p>
    </>
  )
}

export default Title