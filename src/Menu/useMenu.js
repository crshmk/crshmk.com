import React, { 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from 'react'
import { useLocation } from 'react-router-dom'

export let MenuContext = createContext()

let useMenu = () => useContext(MenuContext)

export let MenuProvider = props => {
  let location = useLocation()

  let [isMenuShowing, setIsMenuShowing] = useState(false)

  let showMenu = () => setIsMenuShowing(true)
  let hideMenu = () => setIsMenuShowing(false)

  useEffect(hideMenu, [location])

  let ctx = { hideMenu, isMenuShowing, showMenu }

  let className = isMenuShowing ? 'menu-active' : ''

  return (
    <MenuContext.Provider value={ctx}>
      <div className={className}>
        {props.children}
      </div>
    </MenuContext.Provider>
  )
}

export default useMenu
