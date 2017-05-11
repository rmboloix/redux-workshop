import { SEARCH_SUCCEEDED } from '../actions'

let initialState = require('../../doc/data/books.json')

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUCCEEDED:
      if (!action.books) {
        return []
      }
      return action.books
    default:
      return state
  }
}
