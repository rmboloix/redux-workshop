import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveViewReducer from './reducer_activeView'
import SearchReducer from './reducer_search'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeView: ActiveViewReducer,
  search: SearchReducer
})

export default rootReducer
