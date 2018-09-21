import { SHOW, DISMISS } from './types'

const initialState = {
  queue: []
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SHOW:
      return { queue: [ ...state.queue, { id: Date.now(), ...payload } ] }
    case DISMISS:
      return { queue: state.queue.filter((snackbar) => snackbar.id !== payload.id) }
    default:
      return state
  }
}
