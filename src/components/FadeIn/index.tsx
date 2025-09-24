import React, { useEffect, useState } from 'react'

import './fade-in.css'

const FadeIn: React.FC<WithChildren<{delay?: number}>> = props => {
  const [isLoading, setIsLoading] = useState(true)
  const delay = props.delay || 50

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, delay)
  }, [])

  const className = 'fade-in' + (isLoading ? ' loading' : '')

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

export default FadeIn