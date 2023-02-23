
import React from 'react'

import GithubIcon from 'src/Icons/GithubIcon'

const urlToUtilLibrary = 'https://github.com/crshmk/utils'
const urlToPhp = 'https://github.com/crshmk/vue-php/blob/master/private/Http/Request.php'
const urlToThisRepo = 'https://github.com/crshmk/crshmk.com/tree/main/src'

const UtilLibrary = () => (
  <>
  small, composable functions
  <GithubIcon url={urlToUtilLibrary}/>
  </>
)

const PhpItem = () => (
  <>
  when necessary
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
    header: 'Declarative, functional Javascript',
    items: [<UtilLibrary />]
  },
  {
    header: 'OOP',
    items: [<PhpItem />]
  },
  {
    header: 'State',
    items: ['complex, elegant state design']
  },
  {
    header: 'Small, clean React components',
    items: [<ReactItem />]
  }
]