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

export function newSearch (criteria, pageSize, startIndex = 0) {
  return {
    type: SEARCH_REQUESTED,
    request: {
      criteria,
      pageSize,
      startIndex
    }
  }
}

export function changePage (currentRequest, newPage) {
  return newSearch(
    currentRequest.criteria,
    currentRequest.pageSize,
    (newPage - 1) * currentRequest.pageSize
  )
}
