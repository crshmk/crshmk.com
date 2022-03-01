import React from 'react'

import './copy-to-clipboard.css'

import CopyIcon from 'Icons/CopyIcon'

import useCopy from './useCopy'

const CopyToClipboard = () => {
  const { className, onClick } = useCopy()

  return (
    <span className={className}>
      <span 
        className="copy-icon"
        onClick={onClick}
      >
        <CopyIcon />
      </span>
      <span className="copy-message">email copied to clipboard</span>
    </span>
  )
}

export default CopyToClipboard