import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {TodosContext} from './contexts/todos.context';

function TodoList() {
  const {todos} = useContext(TodosContext);
  
  if (todos.length) 
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <React.Fragment key={index}>
              <TodoItem {...todo} key={todo.id}/>
              {index < todos.length - 1 && <Divider/>}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
    return null;
}

export default TodoList;
