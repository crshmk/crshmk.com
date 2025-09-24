import React from 'react'

import './home.css'

import FadeIn from '@components/FadeIn'
import LinkToThisRepo from './LinkToThisRepo'

const Home = () => (
  <FadeIn>
  <div className="home hide-menu-active">
    <h1>Chris Hammock</h1>
    <h3>Software Engineer</h3>
    <LinkToThisRepo />
  </div>
  </FadeIn>
)

export default Home
