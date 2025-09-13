import { pipe } from 'ramda'
import onKey from '@utils/onKey'

const staticProps = {
  'aria-label': 'show main menu',
  role: 'button',
  tabIndex: 0
}

const focusHomeLink = () => {
  const homeLink = document.querySelector("[href='/']")
  if (homeLink instanceof HTMLElement) homeLink.focus()
}

const makeAccessibilityProps = (showMenu: () => void) => {
  const onEnterKey: () => void = pipe(showMenu, focusHomeLink)
  const onKeyDown: () => void = onKey({
    Enter: onEnterKey
  })

  return { ...staticProps, onKeyDown }
}

export default makeAccessibilityProps