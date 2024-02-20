import React from 'react'

function TodoItem({todo}) {
  return (
    <div>
      <h3>Todo Name:-{todo.text}</h3>
      <p>TodoId:-{todo.id}</p>
      <input
        type="checkbox"
        name="status"
        id=""
        checked={todo.status}
      />
    </div>
  );
}

export default TodoItem