import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  if (!todo) return null; // safety check

  // custom styles
  const snoStyle = {
    fontSize: "0.9rem",
    color: "#6c757d",
    fontWeight: "500"
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "0.25rem"
  };

  const descStyle = {
    fontSize: "0.95rem",
    color: "#495057"
  };

  return (
    <div 
      className="card my-3 shadow-sm"
      style={{ borderLeft: "4px solid #0d6efd", transition: "transform 0.2s" }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <div style={snoStyle}>#{todo.sno}</div>
          <div style={titleStyle}>{todo.title}</div>
          <div style={descStyle}>{todo.desc}</div>
        </div>
        <button className="btn btn-sm btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
