import React from 'react'

let Title = ({ item }) => {
  let [boldTitle, faintTitle] = item.title 
  return (
    <>
    <p>
      <span class="title">{boldTitle}</span>
      <span class="place-comma">,</span>
      <span class="place">{faintTitle}</span>
      <span class="date">{item.dates}</span>
    </p>
    <p class="phone-place">{faintTitle}</p>
    <p class="phone-date">{item.dates}</p>
    </>
  )
}

export default Title