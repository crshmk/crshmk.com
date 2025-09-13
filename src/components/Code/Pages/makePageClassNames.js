import useTabMenu from '@src/components/Code/useTabMenu'

const makePageClassNames = pageName => {
  const { activeTab } = useTabMenu()
  return 'code-tab-page' + (activeTab === pageName ? ' active' : '')
}

export default makePageClassNames
