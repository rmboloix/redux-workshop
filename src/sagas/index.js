import * as GoogleBooks from '../api/GoogleBooks'
import { put, fork, takeLatest } from 'redux-saga/effects'
import { SEARCH_REQUESTED, SEARCH_SUCCEEDED, SEARCH_FAILED } from '../actions'

function * fetchData (action) {
  let { response, error } = yield GoogleBooks.search(action.request)

  if (response && !error) {
    yield put({
      type: SEARCH_SUCCEEDED,
      totalItems: response.data.totalItems,
      books: response.data.items
    })
  } else {
    yield put({ type: SEARCH_FAILED, error })
  }
}

function * watchFetchData () {
  yield takeLatest(SEARCH_REQUESTED, fetchData)
}

export default function * () {
  yield [
    fork(watchFetchData)
  ]
}
