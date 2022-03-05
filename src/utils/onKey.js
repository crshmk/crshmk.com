/**
 * curry a map of e.key to callbacks 
 * 
 * const onKeyDown = onKey({
 *   Enter: fn1,
 *   Escape: fn2
 *   s: fn3
 * })
 * 
 * <div tabIndex={0} onKeyDown={onKeyDown}>
 */
import { isNil } from 'ramda'

const onKey = mapping => e => {
  const cb = mapping[e.key]
  if(isNil(cb)) return 
  cb(e)
}

export default onKey