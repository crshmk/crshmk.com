import React from 'react'

import GithubIcon from 'src/Icons/GithubIcon'

const linkToGithubProfile = 'https://github.com/crshmk'

const LinkToThisRepo = () => (
  <div className='home-repo-link'>
    <GithubIcon url={linkToGithubProfile} />
  </div>
)

export default LinkToThisRepo
