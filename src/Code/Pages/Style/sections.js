
import React from 'react'

import GithubIcon from 'src/Icons/GithubIcon'

const urlToUtilLibrary = 'https://github.com/crshmk/utils'
const urlToPhp = 'https://github.com/crshmk/vue-php/blob/master/private/Http/Request.php'
const urlToThisRepo = 'https://github.com/crshmk/crshmk.com/tree/master/src'
const urlToTs = 'https://github.com/crshmk/react-form'

const UtilLibrary = () => (
  <>
  using small, composable functions
  <GithubIcon url={urlToUtilLibrary}/>
  </>
)

const PhpItem = () => (
  <>
  with my old PHP apps
  <GithubIcon url={urlToPhp}/>
  </>
)

const TsItem = () => (
  <>
  when memoization prevents the use of context
  <GithubIcon url={urlToTs}/>
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
    header: 'Declarative, functional, vanilla Javascript',
    items: [<UtilLibrary />]
  },
  {
    header: 'OOP',
    items: [<PhpItem />, <TsItem />, 'with large enterprise teams after TS took over the front end']
  },
  {
    header: 'A decade of elegant state design',
    items: ['using many popular patterns']
  },
  {
    header: 'Small, clean React components',
    items: [<ReactItem />]
  }
]