import React from 'react'

import content from './content'

import menuPageImg from '@src/assets/images/ngon-lg.jpg'

const About = () => (
  <div className="mvn-about">
    <div>
      <img src={menuPageImg} />
    </div>
    <p>{content.header}</p>
  </div>
)

export default About