import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'
import { useLocation } from 'react-router-dom'

type MenuContextType = {
  isMenuShowing: boolean
  showMenu: () => void
  hideMenu: () => void
}

const MenuContext = createContext<MenuContextType>({
  isMenuShowing: false,
  showMenu: () => {},
  hideMenu: () => {}
})

const useMenu = () => useContext(MenuContext)

export const MenuProvider = ({ children }) => {
  const location = useLocation()

  const [isMenuShowing, setIsMenuShowing] = useState(false)

  const showMenu = () => setIsMenuShowing(true)
  const hideMenu = () => setIsMenuShowing(false)

  useEffect(hideMenu, [location])

  const ctx = { hideMenu, isMenuShowing, showMenu }

  const className = isMenuShowing ? 'menu-active' : ''

  return (
    <MenuContext.Provider value={ctx}>
      <div className={className}>{children}</div>
    </MenuContext.Provider>
  )
}

export default useMenu
