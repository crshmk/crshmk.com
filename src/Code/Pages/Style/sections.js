
import React from 'react'

import GithubIcon from 'src/Icons/GithubIcon'

const urlToFunctionalLib = 'https://github.com/crshmk/_'
const urlToFunctionalGist = 'https://gist.github.com/crshmk/aa4a76eaa96a469b272a1110500f2054'
const urlToPhp = 'https://github.com/crshmk/vue-php/blob/master/private/Http/Request.php'
const urlToThisRepo = 'https://github.com/crshmk/crshmk.com/tree/main/src'

const FunctionalLibItem = () => (
  <>
    As instruction for new devs, I made a vanilla mini functional programming library. 
    <GithubIcon url={urlToFunctionalLib}/>
  </>
)

const FunctionalGistItem = () => (
  <>
  I like passing around short, composable functions, often as pipelines.
  <GithubIcon url={urlToFunctionalGist}/>
  </>
)

const PhpItem = () => (
  <>
  I also know when to reach for objects.
  <GithubIcon url={urlToPhp}/>
  </>
)

const ReactItem = () => (
  <>
    like the code for this site 
    <GithubIcon url={urlToThisRepo}/>
  </>
)

export default [
  {
    header: 'declarative, functional Javascript',
    items: [
      <FunctionalGistItem />,
      <FunctionalLibItem />
    ]
  },
  {
    header: 'OOP',
    items: [<PhpItem />]
  },
  {
    header: 'state',
    items: ['I can design complex, elegant state with a one-way, data-down approach that leverages computed values.']
  },
  {
    header: 'small, clean React components',
    items: [<ReactItem />]
  }
]