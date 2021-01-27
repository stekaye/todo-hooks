import React, {createContext, useReducer} from 'react';
import todoReducer from '../reducers/todo.reducer.js';

const defaultTodos = [
  { id: 1, task: 'Watch Gilmour Girls', completed: false }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)
  
  return (
    <TodosContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  )
}
