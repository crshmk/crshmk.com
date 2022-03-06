import React from 'react'

const urlToRamdaRepl = 'https://ramdajs.com/repl/#?const%20headLens%20%3D%20lensIndex%280%29%0A%0Aconst%20updateKeys%20%3D%20keyTransform%20%3D%3E%20%0A%20%20pipe%28%0A%20%20%20%20toPairs%2C%0A%20%20%20%20map%28over%28headLens%2C%20keyTransform%29%29%2C%0A%20%20%20%20fromPairs%0A%20%20%29%0A%0Aconst%20x%20%3D%20%7B%0A%20%20oNe%3A%201%2C%0A%20%20tWo%3A%202%0A%7D%0A%0Aconst%20toLowerKeys%20%3D%20updateKeys%28toLower%29%0AtoLowerKeys%28x%29%0A%0Aconst%20mapToLowerKeys%20%3D%20map%28toLowerKeys%29%0AmapToLowerKeys%28%5Bx%2C%20x%5D%29%0A%20%0A'

const LinkToRamdaRepl = () => (
  <a href={urlToRamdaRepl} target="_blank">this</a>
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