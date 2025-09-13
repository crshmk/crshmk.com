import React from 'react'

import GithubIcon from '@icons/GithubIcon'

const linkToGithubProfile = 'https://github.com/crshmk'

const LinkToThisRepo = () => (
  <div className='home-repo-link'>
    <GithubIcon url={linkToGithubProfile} />
  </div>
)

export default LinkToThisRepo
