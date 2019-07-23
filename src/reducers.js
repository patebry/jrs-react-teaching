import { combineReducers } from 'redux'

function users(state = [], action) {
  switch (action.type) {
    case 'SET_USERS':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({ users })
