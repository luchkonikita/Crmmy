const USERS_FILTER = {
  SET: 'USERS_FILTER.SET',
  RESET: 'USERS_FILTER.RESET'
}

export function setFilter (data) {
  return {type: USERS_FILTER.SET, data}
}

export default function (state = {}, action) {
  switch (action.type) {
    case USERS_FILTER.SET:
      return Object.assign({}, state, action.data)
    case USERS_FILTER.RESET:
      return {}
    default:
      return state
  }
}
