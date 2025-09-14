/**
 * add side borders
 * animate side borders when end items are hovered or active
 */
import useTabMenu from '@src/components/Code/useTabMenu'

import { 
  anyPass,
  append, 
  join, 
  pipe, 
  propEq, 
  when 
} from 'ramda'

const leftmostTab: CodePageTabOption = 'tools' 
const rightmostTab: CodePageTabOption  = 'contributions'

const isLeftTabActive = propEq('activeTab', leftmostTab)
const isLeftTabHovered = propEq('hoveredTab', leftmostTab)
const hideLeftBorder = anyPass([isLeftTabActive, isLeftTabHovered])

const isRightTabActive = propEq('activeTab', rightmostTab)
const isRightTabHovered = propEq('hoveredTab', rightmostTab)
const hideRightBorder = anyPass([isRightTabActive, isRightTabHovered])

type TabMenuState = ReturnType<typeof useTabMenu>

const addStaticClasses = () => ['code-tab-nav', 'before', 'after'] as const 

const maybeAddLeftBorderClass = (state: TabMenuState) => 
  when<string[]>(
    () => hideLeftBorder(state), 
    append('hide-border-left')
  )

const maybeAddRightBorderClass = (state: TabMenuState) => 
  when<string[]>(
    () => hideRightBorder(state), 
    append('hide-border-right')
  )

const makeClasses = (state: TabMenuState): () => string =>
  pipe(
    addStaticClasses,
    maybeAddLeftBorderClass(state),
    maybeAddRightBorderClass(state),
    join(' ')
  )
  
const useListClasses = () => {
  const state: ReturnType<typeof useTabMenu> = useTabMenu()
  return makeClasses(state)()
}



export default useListClasses
