// step 1
import { createStore } from 'redux'

// step 2
const initialState = {
  allMovie: []
}

// step 3 - bikin reducer
const doCounter = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "GET_DATA":
      return { ...state, allMovie: payload }
    default:
      return state
  }
}

let store =  createStore(doCounter)

export default store