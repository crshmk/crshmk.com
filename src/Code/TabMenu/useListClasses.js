/**
 * add side borders
 * animate side borders when end items are hovered or active
 */
import useTabMenu from 'src/Code/useTabMenu'

import { 
  anyPass,
  append, 
  join, 
  pipe, 
  propEq, 
  when 
} from 'ramda'

const leftmostTab = 'style'
const rightmostTab = 'projects'

const isLeftTabActive = propEq('activeTab', leftmostTab)
const isLeftTabHovered = propEq('hoveredTab', leftmostTab)
const hideLeftBorder = anyPass([isLeftTabActive, isLeftTabHovered])

const isRightTabActive = propEq('activeTab', rightmostTab)
const isRightTabHovered = propEq('hoveredTab', rightmostTab)
const hideRightBorder = anyPass([isRightTabActive, isRightTabHovered])


const addStaticClasses  = () => ['code-tab-nav', 'before', 'after']

const maybeAddLeftBorderClass = state => when(
    () => hideLeftBorder(state), 
    append('hide-border-left')
  )

const maybeAddRightBorderClass = state => when(
  () => hideRightBorder(state), 
  append('hide-border-right')
)

const makeClasses = state => pipe(
  addStaticClasses,
  maybeAddLeftBorderClass(state),
  maybeAddRightBorderClass(state),
  join(' ')
)

const useListClasses = () => {
  const state = useTabMenu()
  return makeClasses(state)()
}



export default useListClasses
