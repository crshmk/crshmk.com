/**
 * scroll to top of page on route change
 * class required; FC with a hook causes flashing 
 */
import React, { Component, Fragment } from 'react'
import { useLocation } from 'react-router-dom'

class ScrollToTop extends Component<ScrollToTopProps> {
	componentDidUpdate(prevProps: ScrollToTopProps) {
		if (this.props.pathname !== prevProps.pathname) {
      setTimeout(() => {window.scrollTo(0, 0)}, 0)
		}
	}

	render() {
		return <Fragment />
	}
}

export default function() {
  const { pathname } = useLocation()
  
  return <ScrollToTop pathname={pathname} />
}

interface ScrollToTopProps {
  pathname: string
}
