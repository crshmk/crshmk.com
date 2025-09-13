import React from 'react'
import { createRoot } from 'react-dom/client'

import App from '@components/App'

const container = document.getElementById("app")

const root = createRoot(container)

const renderApp = () => root.render(<App  />)

if(!!document.fonts?.ready) {

  let hasLoaded = false 

  setTimeout(() => {
    if(!hasLoaded) {
      hasLoaded = true 
      renderApp()
    }
  }, 3000)

  // @ts-ignore
  document.fonts.ready.then((fontFaceSet) => {
    if(!hasLoaded) {
      hasLoaded = true
      renderApp()
    }
    hasLoaded = true
  })
} else {
  renderApp()
}
