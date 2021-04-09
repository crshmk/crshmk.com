import React from 'react'

import './home.css'

import GithubButton from './GithubButton'

let linkToThisRepo = 'https://github.com/crshmk/crshmk.com'

let Home = () => {
  return (
    <div className="home">
      <h1>Chris Hammock</h1>
      <h3>Web Developer</h3>
      <GithubButton url={linkToThisRepo} />
    </div>
  )
}

export default Home
