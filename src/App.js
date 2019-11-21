import React, { useState, useEffect, createContext } from 'react';
import './css/App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const url = 'http://localhost:5000/todos'

const Themes = {
  light: {
    color: '#000',
    backgroundColor: '#fff',
  },
  dark: {
    color: '#fff',
    backgroundColor: '#000',
  },
};

export const ThemeContext = createContext(Themes.light);

function App() {
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(url, { method: 'GET' });
      const res = await response.json();
      setTodos(res.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1));
    };
    getTodos();
  }, [refresh]);

  const handleCreate = data => {
    data.id = `${todos.length + 1}`;
    data.createdAt = (new Date()).toISOString();
    data.updatedAt = (new Date()).toISOString();
    const createTodo = async () => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data),
      });
      console.log(response.status);
      setRefresh(Date.now());
    };
    createTodo();
  };

  const handleUpdate = data => {
    const updateTodo = async () => {
      const response = await fetch(`${url}/${data.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data),
      });
      console.log(response.status);
      setRefresh(Date.now());
    };
    updateTodo();
  };

  const handleDelete = id => {
    console.log(id);
    const deleteTodo = async () => {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      console.log(response.status);
      setRefresh(Date.now());
    };
    deleteTodo();
  };

  const handleTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={Themes[theme]}>
        <div className="theme-selector">
          <label><input type="radio" name="theme" value="light" defaultChecked={theme === 'light'} onChange={handleTheme} />Light</label>
          <label><input type="radio" name="theme" value="dark" defaultChecked={theme === 'dark'} onChange={handleTheme} />Dark</label>
        </div>

        <TodoForm onSave={handleCreate} />

        {todos.map(item => (
          <Todo
            key={item.id} {...item}
            onDelete={handleDelete}
            onSave={handleUpdate}
          />)
        )}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;