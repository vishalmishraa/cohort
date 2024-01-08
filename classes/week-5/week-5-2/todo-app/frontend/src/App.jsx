import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

import './App.css'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoApp();
    console.log("fetched from App");
  }, []);

  function todoApp() {
    fetch('http://localhost:3000/todos')
      .then(async (res) => {
        const json = await res.json()
        setTodos(json.todos);
        console.log("fetched from todoApp");
      })
  }

  return (
    <>
      <CreateTodo todoApp={todoApp} />
      <Todos todos={todos} todoApp={todoApp} ></Todos >
    </>
  )
}

export default App
