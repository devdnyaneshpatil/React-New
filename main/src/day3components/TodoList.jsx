import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todoList}) {
  return (
    <div>
       {
        todoList.map((el)=>{
            return <TodoItem key={el.id} todo={el} />
        })
       }
    </div>
  )
}

export default TodoList