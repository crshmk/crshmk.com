import { startsWith } from 'ramda'

export const isExternalLink = startsWith('http')
