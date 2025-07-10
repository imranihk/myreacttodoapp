import React from 'react';
import TodoItem from "../MyComponents/todo";

const Todos = (props) => {
  const todos = props.todos || [];

  return (
    <div className='container'>
      <h3>Todos List</h3>
      {todos.length === 0
        ? "No todos to display"
        : todos.map((todo) => (
            <TodoItem todo={todo} key={todo.sno} onDelete={() => props.onDelete(todo)} />
          ))
      }
    </div>
  );
};

export default Todos;
