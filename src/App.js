import React from 'react'
import {useState} from 'react'

import './App.css';

const App = () => {
  const [todos,setTodos] = useState([]);
  const [text, setText] = useState('')

  const addTodo = ()=> {
    if(text.trim().length){
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed:false,
        }
      ])
      setText('');
    }
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map(
        todo =>
        {
          if (todo.id !== todoId) return todo;

          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      )
    )
  }

  return (
    <div className='App'>
        <label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={addTodo} className='btn btn-outline-primary mx-3 p-1'>Add Todo</button>
        </label>

        <ul>
          {
            todos.map(todo =>
            <li key={todo.id}>
                <input type='checkbox'  checked={todo.completed} onChange={() => toggleTodoComplete(todo.id)}/>
                <span>{todo.text}</span>
                <span className='text-danger' role='button' onClick={() => removeTodo(todo.id)}>&times;</span>
            </li> )
          }
        </ul>

    </div>
  )
}

export default App
