import { SEARCH_REQUESTED, SEARCH_SUCCEEDED } from '../actions'
import { searchTypes } from '../api/GoogleBooks'

const status = {
  NONE: 'NONE',
  DONE: 'DONE',
  SEARCHING: 'SEARCHING'
}

const initialState = {
  totalItems: 20,
  status: status.NONE,
  totalPages: 1,
  activePage: 1,
  request: {
    criteria: { [searchTypes.title]: 'docker' },
    pageSize: 20,
    startIndex: 0
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUESTED:
      return {
        ...state,
        status: status.SEARCHING,
        request: action.request
      }
    case SEARCH_SUCCEEDED:
      return {
        ...state,
        status: status.DONE,
        totalItems: action.totalItems,
        totalPages: Math.ceil(action.totalItems / state.request.pageSize),
        activePage: parseInt(state.request.startIndex / state.request.pageSize + 1)
      }
    default:
      return state
  }
}
