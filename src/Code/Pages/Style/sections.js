
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
  My old PHP apps were heavily object oriented
  <GithubIcon url={urlToPhp}/>
  </>
)

const TsItem = () => (
  <>
  When memoization prevented the use of context, TS effectively clarified this prop drilling
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
    header: 'I prefer declarative, functional, vanilla Javascript',
    items: [<UtilLibrary />]
  },
  {
    header: 'I also use OOP',
    items: [<PhpItem />, <TsItem />]
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