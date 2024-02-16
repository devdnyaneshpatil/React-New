import React, { useState } from 'react'
import {v4 as uuid} from "uuid"

function TodosInput({addTodo}) {
    const [todo, setTodo] = useState('')
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
    }}>
        <input type="text" placeholder='Add your Todo' value={todo} onChange={(e)=>{
            setTodo(e.target.value)
        }} />
        <button type='submit' onClick={()=>{
            const payload={
                id:uuid(),
                text:todo,
                status:'false'
            }
            addTodo(payload)
            setTodo("")
        }}>Add todo</button>
    </form>
  )
}

export default TodosInput