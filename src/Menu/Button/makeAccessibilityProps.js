import onKey from "../../utils/onKey"

const staticProps = {
  'aria-label': 'show main menu',
  role: 'button',
  tabIndex: '0'
}

const makeAccessibilityProps = showMenu => {
  const onKeyDown = onKey({
    Enter: showMenu
  })

  return { ...staticProps, onKeyDown }
}

export default makeAccessibilityProps