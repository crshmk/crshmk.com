
import React from 'react'

import GithubIcon from 'src/Icons/GithubIcon'

const urlToUtilLibrary = 'https://github.com/crshmk/utils'
const urlToPhp = 'https://github.com/crshmk/vue-php/blob/master/private/Http/Request.php'
const urlToThisRepo = 'https://github.com/crshmk/crshmk.com/tree/main/src'

const UtilLibrary = () => (
  <>
  I like creating small, composable functions.
  <GithubIcon url={urlToUtilLibrary}/>
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
    like the code for this site.
    <GithubIcon url={urlToThisRepo}/>
  </>
)

export default [
  {
    header: 'declarative, functional Javascript',
    items: [<UtilLibrary />]
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