// todo.reducer.js
import { LOAD_TODO, DELETE_TODO } from './todo.actionTypes';

export const TODO_KEY = 'todoStore';

const initialState = {
  todos: []  // Make sure initial state is consistent with how you're accessing it
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== payload)
      };

    default:
      return state;
  }
};
