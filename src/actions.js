import { SHOW, DISMISS } from './types'

const show = (payload) => ({
  type: SHOW,
  payload
})

const dismiss = (payload) => ({
  type: DISMISS,
  payload
})

export default { show, dismiss }
