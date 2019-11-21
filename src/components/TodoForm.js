import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import '../css/Todo.css';

function TodoForm(props = { done: false, content: '', onSave: () => {} }) {
  const [done, setDone] = useState(!!props.done);
  const [content, setContent] = useState(props.content);
  const theme = useContext(ThemeContext);

  const handleSave = () => {
    const data = {
      ...props,
      done: done,
      content: content,
    };

    props.onSave(data);
    setDone(false);
    setContent('');
  };

  return (
    <div className="todo" style={theme}>
      <div className="check">
        <input type="checkbox" checked={done}
          onChange={e => setDone(e.target.checked)} />
      </div>
      <div className="body">
        <textarea value={content}
          onChange={e => setContent(e.target.value)} />
      </div>
      <button className="btn" onClick={handleSave}>Save</button>
      {props.ID && (
        <button className="btn" onClick={props.onCancel}>Cancel</button>
      )}
    </div>
  );
}

export default TodoForm;