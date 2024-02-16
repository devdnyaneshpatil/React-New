import React, { useState } from "react";

function Todos() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <>
      <label>Enter Your Todo</label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodoList([...todoList, todo]);
        }}
      >
        Add Todo
      </button>
      <table>
        <thead>
          <th>Number</th>
          <th>Your Todos</th>
        </thead>
        <tbody>
          {todoList.map((todo, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{todo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Todos;
