import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import '../css/Todo.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function TodoForm(props = { done: false, content: '', onSave: () => {} }) {
  const [done, setDone] = useState(!!props.done);
  const [content, setContent] = useState(props.content);
  const theme = useContext(ThemeContext);
  const classes = useStyles();

  const ColorButton = withStyles(theme => ({
    root: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
  }))(Button);

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
        {/* <TextField
          variant="outlined"
          margin="normal"
          label="Text"
          value={content}
          required
          onChange={e => setContent(e.target.value)}
        /> */}
        <textarea value={content}
          onChange={e => setContent(e.target.value)} />
      </div>
      <ColorButton variant="contained" size="small" color="primary" className={classes.margin} onClick={handleSave}>Save</ColorButton>
      {props.id && (
        <Button variant="contained" size="small" className={classes.margin} onClick={props.onCancel}>Cancel</Button>
      )}
    </div>
  );
}

export default TodoForm;