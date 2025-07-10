import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  if (!todo) return null; // defensive check
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
