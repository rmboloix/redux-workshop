import {googleAPISearchRequestGenerator} from './googleApiSearch'

export const CHANGE_VIEW = 'CHANGE_VIEW'
export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_RESPONSE = 'SEARCH_RESPONSE'

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

    googleAPISearchRequestGenerator(searchTerm, searchType, resultsByPage, startIndex)
      .then((response) => {
        dispatch({
          type: SEARCH_RESPONSE,
          payload: {
            totalItems: response.data.totalItems,
            books: response.data.items
          }
        })
      })
  }
}
