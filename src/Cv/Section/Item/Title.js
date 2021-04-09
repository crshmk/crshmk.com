import React from 'react'

let Title = ({ item }) => {
  let [boldTitle, faintTitle] = item.title 
  return (
    <>
    <p>
      <span className="title">{boldTitle}</span>
      <span className="place-comma">,</span>
      <span className="place">{faintTitle}</span>
      <span className="date">{item.dates}</span>
    </p>
    <p className="phone-place">{faintTitle}</p>
    <p className="phone-date">{item.dates}</p>
    </>
  )
}

export default Title