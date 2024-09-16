import { combineReducers } from 'redux';
import { todoReducer, TODO_KEY } from './todoRedux/todo.reducer';  // Ensure path is correct

const rootReducer = combineReducers({
  [TODO_KEY]: todoReducer
});

export default rootReducer;
