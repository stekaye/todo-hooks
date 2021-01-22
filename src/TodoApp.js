import React, {useState} from 'react';
import uuid from 'react-uuid'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
  const initialTodos = [
    {id: 1, task: 'Clean Fishtank', completed: false},
    {id: 2, task: 'Wash Car', completed: true},
    {id: 3, task: 'Grow Beard', completed: false},
  ]
  
  const [todos, setTodos] = useState(initialTodos);
  
  const addTodo = (newTodoText) => {
    setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
  }
  
  const deleteTodo = todoId => {
    let newTodosArray = todos.filter(todo => todo.id !== todoId);
    setTodos(newTodosArray);
  }

  const toggleTodo = (todoId) => {
    let newTodosArray = todos.map(todo => todoId === todo.id ? {...todo, completed: !todo.completed} : todo);
    setTodos(newTodosArray)
  }

  return (
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{height: '64px'}}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>

      <Grid container justify="center" style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo}/>
          <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;
