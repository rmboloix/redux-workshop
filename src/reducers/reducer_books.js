import {SEARCH_RESPONSE} from '../actions/index'

let initialState = require('../../doc/data/books.json')

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESPONSE:
      if (!action.payload.books) {
        return []
      }
      return action.payload.books
    default:
      return state
  }
}
