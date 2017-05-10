import {googleAPISearchRequestGenerator} from '../api/googleApiSearch'

export const CHANGE_VIEW = 'CHANGE_VIEW'

export const SEARCH_REQUESTED = 'SEARCH_REQUESTED'
export const SEARCH_SUCCEEDED = 'SEARCH_SUCCEEDED'
export const SEARCH_FAILED = 'SEARCH_FAILED'

export function changeView (activeView) {
  return {
    type: CHANGE_VIEW,
    payload: activeView
  }
}

export function changePage (newPage) {
  return (dispatch, getState) => {
    let {searchTerm, searchType, resultsByPage} = getState().search.query
    let startIndex = (newPage - 1) * resultsByPage
    newSearch(searchTerm, searchType, resultsByPage, startIndex)(dispatch)
  }
}

export function newSearch (
    searchTerm,
    searchType,
    resultsByPage,
    startIndex = 0
) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_REQUEST,
      payload: {
        searchTerm,
        searchType,
        resultsByPage,
        startIndex
      }
    })
  }
}
