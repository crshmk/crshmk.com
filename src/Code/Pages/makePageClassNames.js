import useTabMenu from 'src/Code/useTabMenu'

const makePageClassNames = pageName => {
  const { activeTab } = useTabMenu()
  return 'code-tab-page' + (activeTab === pageName ? ' active' : '')
}

export default makePageClassNames
