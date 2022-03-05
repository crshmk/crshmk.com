import { pipe } from 'ramda'
import { onKey } from '../../utils'

const staticProps = {
  'aria-label': 'show main menu',
  role: 'button',
  tabIndex: '0'
}

const focusHomeLink = () => {
  const homeLink = document.querySelector("[href='/']")
  homeLink && homeLink.focus()
}

const makeAccessibilityProps = showMenu => {
  const onEnterKey = pipe(showMenu, focusHomeLink)
  const onKeyDown = onKey({
    Enter: onEnterKey
  })

  return { ...staticProps, onKeyDown }
}

export default makeAccessibilityProps