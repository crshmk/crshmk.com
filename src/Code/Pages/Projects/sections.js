import React from 'react'

let LustySite = () => (
  <>
    <a href="https://wlustyandsons.com" target="_blank">
      Public B2B website
    </a>
    (catalogue requires login)
  </>
)

export default [
  {
    title: 'Apple',
    items: ['large internal React application']
  },
  {
    title: 'W. Lusty & Sons',
    items: [
      <LustySite />, 
      '(the public part of this is small; most of the app requires an account)',
      'numerous internal applications to organize communication and workflow'
    ]
  },
  {
    title: 'Michetti Information Systems',
    items: ['School Information System UI redesign']
  }
]
