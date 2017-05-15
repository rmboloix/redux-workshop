import { combineReducers } from 'redux'
import BooksReducer from './Books'
import ActiveViewReducer from './ActiveView'
import SearchReducer from './Search'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeView: ActiveViewReducer,
  search: SearchReducer
})

export default rootReducer
