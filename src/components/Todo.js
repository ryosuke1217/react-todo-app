import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import TodoForm from './TodoForm';
import '../css/Todo.css';

function Todo(props) {
  const [edit, setEdit] = useState(false);
  const theme = useContext(ThemeContext);

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
      <button className="btn" onClick={() => setEdit(true)}>Edit</button>
      <button className="btn" onClick={() => props.onDelete(props.ID)}>Delete</button>
    </div>
  );
}

export default Todo;