import React from 'react'

import { MenuProvider } from './useMenu'

const Providers = ({ children }) => (
  <>
  <MenuProvider>
    {children}
  </MenuProvider>
  </>
)

export default Providers