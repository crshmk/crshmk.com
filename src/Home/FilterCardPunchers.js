import React from 'react'

const urlToFpGist = 'https://gist.github.com/crshmk/b87db5c3dc79211ea4adec51310aa4e1'

const LinkToRamdaRepl = () => (
  <a href={urlToFpGist} target="_blank">this</a>
)

const FilterCardPunchers = () => (
  <div className="filter-card-punchers">
    <h3>
      <span>Looking for a team that thinks </span>
      <LinkToRamdaRepl />
      <span> is great</span>
    </h3>
  </div>
)

export default FilterCardPunchers