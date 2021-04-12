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

let leftmostTab = 'style'
let rightmostTab = 'projects'

let isLeftTabActive = propEq('activeTab', leftmostTab)
let isLeftTabHovered = propEq('hoveredTab', leftmostTab)
let hideLeftBorder = anyPass([isLeftTabActive, isLeftTabHovered])

let isRightTabActive = propEq('activeTab', rightmostTab)
let isRightTabHovered = propEq('hoveredTab', rightmostTab)
let hideRightBorder = anyPass([isRightTabActive, isRightTabHovered])


let addStaticClasses  = () => ['code-tab-nav', 'before', 'after']

let maybeAddLeftBorderClass = state => when(
    () => hideLeftBorder(state), 
    append('hide-border-left')
  )

let maybeAddRightBorderClass = state => when(
  () => hideRightBorder(state), 
  append('hide-border-right')
)

let makeClasses = state => pipe(
  addStaticClasses,
  maybeAddLeftBorderClass(state),
  maybeAddRightBorderClass(state),
  join(' ')
)

let useListClasses = () => {
  let state = useTabMenu()
  return makeClasses(state)()
}



export default useListClasses
