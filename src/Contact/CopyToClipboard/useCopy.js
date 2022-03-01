import { useState } from 'react'

const copyEmail = () => {
  navigator.clipboard.writeText('hello@crshmk.com')
}

const makeClassName = hasCopied => 
  'copy-to-clipboard' +  (hasCopied ? ' active' : '')

const useCopy = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const onClick = () => {
    if(hasCopied) return
    copyEmail()
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 4000)
  }

  const className = makeClassName(hasCopied)

  return { className, onClick }
}

export default useCopy