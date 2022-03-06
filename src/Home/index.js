import React from 'react'

import './home.css'

import FilterCardPunchers from './FilterCardPunchers'
import LinkToThisRepo from './LinkToThisRepo'

const Home = () => (
  <div className="home hide-menu-active">
    <h1>Chris Hammock</h1>
    <h3>Software Engineer</h3>
    <FilterCardPunchers />
    <LinkToThisRepo />
  </div>
)

export default Home
