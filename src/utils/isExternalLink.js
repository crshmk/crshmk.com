import { startsWith } from 'ramda'

const isExternalLink = startsWith('http')

export default isExternalLink