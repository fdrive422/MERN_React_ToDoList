import React, { useState } from 'react';
import Display from './components/Display';
import Form from './components/Form';
import './App.css';


function App() {

  const [todoItem, setTodoItem] = useState([]);

  return (
    <div className="App">
      <Form todoItem={todoItem} setTodoItem={setTodoItem} />
      <Display todoItem={todoItem} setTodoItem={setTodoItem} />
    </div>
  );
}

export default App;
