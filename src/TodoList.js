import React from 'react';
import TodoItem from './TodoItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <>
            <TodoItem task={todo.task} key={todo.id} completed={todo.completed}/>
            <Divider/>
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList;
