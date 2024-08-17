import React from 'react'

import ExternalLink from '../../ExternalLink'

const ContactItem = ({ contactItem }) => {
  const { Icon, label, url } = contactItem 

  return (
    <p>
      <span>
      {!url ? label : <ExternalLink label={label} url={url} />}
      </span>
      <span><Icon /></span>
    </p>
  )
}

export default ContactItem