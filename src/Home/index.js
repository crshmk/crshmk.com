import React from 'react'

import './home.css'

import GithubIcon from 'src/Icons/GithubIcon'

let linkToThisRepo = 'https://github.com/crshmk/crshmk.com'

let Home = () => {
  return (
    <div className="home hide-menu-active">
      <h1>Chris Hammock</h1>
      <h3>Software Engineer</h3>
      <GithubIcon url={linkToThisRepo} />
    </div>
  )
}

export default Home
