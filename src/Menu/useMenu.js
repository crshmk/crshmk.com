import React, { 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from 'react'
import { useLocation } from 'react-router-dom'

export const MenuContext = createContext()

const useMenu = () => useContext(MenuContext)

export const MenuProvider = props => {
  const location = useLocation()

  const [isMenuShowing, setIsMenuShowing] = useState(false)

  const showMenu = () => setIsMenuShowing(true)
  const hideMenu = () => setIsMenuShowing(false)

  useEffect(hideMenu, [location])

  const ctx = { hideMenu, isMenuShowing, showMenu }

  const className = isMenuShowing ? 'menu-active' : ''

  return (
    <MenuContext.Provider value={ctx}>
      <div className={className}>
        {props.children}
      </div>
    </MenuContext.Provider>
  )
}

export default useMenu
