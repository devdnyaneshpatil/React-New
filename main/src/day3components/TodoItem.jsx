import React from 'react'

function TodoItem({todo}) {
  return (
    <div>
       <h3>Todo Name:-{todo.text}</h3>
       <p>TodoId:-{todo.id}</p>
       <p>Status:-{todo.status}</p>
    </div>
  )
}

export default TodoItem