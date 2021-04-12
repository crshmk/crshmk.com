import useTabMenu from 'src/Code/useTabMenu'

let makePageClassNames = pageName => {
  let { activeTab } = useTabMenu()
  return 'code-tab-page' + (activeTab === pageName ? ' active' : '')
}

export default makePageClassNames
