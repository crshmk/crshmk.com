import React from 'react'

import './npm-icon.css'

const NpmIcon = ({ url }: { url?: string }) => {
  url = url || 'https://www.npmjs.com/~crshmk'

  return (
    <a className="npm" href={url} target="_blank">
      <svg
        viewBox="0 0 27.23 27.23"
        width={20}
        height={20}
        aria-hidden="true"
      >
        <rect width="27.23" height="27.23" rx="2" />
        <polygon
          points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"
        />
      </svg>
    </a>
  )
}

export default NpmIcon
