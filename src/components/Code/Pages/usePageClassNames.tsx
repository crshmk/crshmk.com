import useTabMenu from '@src/components/Code/useTabMenu'

const usePageClassNames = (pageName: CodePageTabOption) => {
  const { activeTab } = useTabMenu()
  return 'code-tab-page' + (activeTab === pageName ? ' active' : '')
}

export default usePageClassNames
