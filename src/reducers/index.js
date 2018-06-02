import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// Sets state.books property the return from BooksReducer
// and  state.activeBook property the return from ActiveBook Reducer
const rootReducer = combineReducers({
    books : BooksReducer,
    activeBook : ActiveBook
});

export default rootReducer;