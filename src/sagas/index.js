import * as GoogleBooks from '../api/GoogleBooks'
import { SEARCH_REQUESTED, SEARCH_SUCCEEDED, SEARCH_FAILED } from '../actions'
import { call, put, all, takeLatest } from 'redux-saga/effects'

function * fetchData (criteria) {
  let { response, error } = yield call(GoogleBooks.search(criteria))

  if (response && !error) {
    yield put({
      type: SEARCH_SUCCEEDED,
      totalItems: response.totalItems,
      books: response.items
    })
  } else {
    yield put({ type: SEARCH_FAILED, error })
  }
}

function * watchFetchData () {
  yield takeLatest(SEARCH_REQUESTED, fetchData)
}

export default function * () {
  yield all([
    watchFetchData()
  ])
}
