import React from 'react';
import TodoItem from './TodoItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function TodoList({todos, deleteTodo, toggleTodo, updateTodo}) {
  if (todos.length) 
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <>
              <TodoItem 
                task={todo.task} 
                id={todo.id} 
                key={todo.id} 
                completed={todo.completed} 
                deleteTodo={deleteTodo} 
                toggleTodo={toggleTodo}
                updateTodo={updateTodo}
              />
              {index < todos.length - 1 && <Divider/>}
            </>
          ))}
        </List>
      </Paper>
    );
    return null;
}

export default TodoList;
