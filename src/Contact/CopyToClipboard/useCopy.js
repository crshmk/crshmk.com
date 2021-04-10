import { useState } from 'react'

let copyEmail = () => {
  navigator.clipboard.writeText('hello@crshmk.com')
}

let makeClassName = hasCopied => 
  'copy-to-clipboard' +  (hasCopied ? ' active' : '')

let useCopy = () => {
  let [hasCopied, setHasCopied] = useState(false)

  let onClick = () => {
    if(hasCopied) return
    copyEmail()
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 4000)
  }

  let className = makeClassName(hasCopied)

  return { className, onClick }
}

export default useCopy