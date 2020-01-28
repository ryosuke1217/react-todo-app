import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import TodoForm from './TodoForm';
import '../css/Todo.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Todo(props) {
  const [edit, setEdit] = useState(false);
  const theme = useContext(ThemeContext);
  const classes = useStyles();

  const handleUpdate = data => {
    props.onSave(data);
    setEdit(false);
  };

  if (edit) {
    return (
      <TodoForm
        {...props}
        onSave={handleUpdate}
        onCancel={() => setEdit(false)}
      />
    );
  }

  return (
    <div className="todo" style={theme}>
      <div className="check">
        {props.done && <span>✓</span>}
      </div>
      <div className="body">
        <div className="header">
          <span className="date">CreatedAt: {props.createdAt}</span>
          <span className="date">UpdatedAt: {props.updatedAt}</span>
        </div>
        <div className="content">{props.content}</div>
      </div>
      <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={() => setEdit(true)}>Edit</Button>
      <Button variant="contained" size="small" color="secondary" className={classes.margin} onClick={() => props.onDelete(props.id)}>Delete</Button>
    </div>
  );
}

export default Todo;