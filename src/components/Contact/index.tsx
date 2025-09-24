import React from 'react'

import './contact.css'

import CopyToClipboard from './CopyToClipboard'
import FadeIn from '@components/FadeIn'

const Contact = () => (
  <FadeIn>
  <div className="contact page hide-menu-active">
    <h1>hello@crshmk.com <CopyToClipboard /></h1>
  </div>
  </FadeIn>
)

export default Contact
