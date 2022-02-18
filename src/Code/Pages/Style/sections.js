
import React from 'react'

import GithubIcon from 'src/Icons/GithubIcon'

let urlToFunctionalGist = 'https://gist.github.com/crshmk/aa4a76eaa96a469b272a1110500f2054'
let urlToPhp = 'https://github.com/crshmk/vue-php/blob/master/private/Http/Request.php'
let urlToThisRepo = 'https://github.com/crshmk/crshmk.com/tree/main/src'

let FunctionalGistItem = () => (
  <>
  I like passing around short, composable functions, often as pipelines.
  <GithubIcon url={urlToFunctionalGist}/>
  </>
)

let PhpItem = () => (
  <>
  I also know when to reach for objects.
  <GithubIcon url={urlToPhp}/>
  </>
)

let ReactItem = () => (
  <>
    like the code for this site 
    <GithubIcon url={urlToThisRepo}/>
  </>
)

export default [
  {
    header: 'declarative, functional Javascript',
    items: [<FunctionalGistItem />]
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