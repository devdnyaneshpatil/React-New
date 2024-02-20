import React, { useState } from 'react'
import TodosInput from './TodosInput'
import TodoList from './TodoList'

function Todos() {
    const [todoList, setTodoList] = useState([])
    const handleAddTodo=(todo)=>{
        setTodoList([...todoList,todo])
    } 
  return (
    <div>
        <TodosInput addTodo={handleAddTodo} />
        <TodoList todoList={todoList} />
    </div>
  )
}

export default Todos