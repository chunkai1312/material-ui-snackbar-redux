import { SHOW, DISMISS } from './types'

const initialState = {
  message: null,
  open: false,
  action: null
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SHOW:
      const { message, action, handleAction } = payload
      return { ...state, open: true, message: message || payload, action, handleAction }
    case DISMISS:
      return { ...state, open: false, action: null, handleAction: null }
    default:
      return state
  }
}
