import React from 'react'

import GithubIcon from 'src/Icons/GithubIcon'

const linkToThisRepo = 'https://github.com/crshmk/crshmk.com'

const LinkToThisRepo = () => (
  <div className='home-repo-link'>
    <GithubIcon url={linkToThisRepo} />
  </div>
)

export default LinkToThisRepo