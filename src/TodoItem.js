import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function TodoItem({task, completed, id, deleteTodo, toggleTodo, updateTodo}) {

  const [isEditing, toggleIsEditing] = useToggleState(false);

  const listItem =  <>
                      <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
                      <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => deleteTodo(id)}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                          <EditIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </>
  
  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? <EditTodoForm id={id} task={task} updateTodo={updateTodo} toggleIsEditing={toggleIsEditing}/> : listItem}
    </ListItem>
  )
}

export default TodoItem;
