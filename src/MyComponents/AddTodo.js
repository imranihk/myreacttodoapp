import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
            return;
        }
        addTodo(title, desc);
        setTitle("");
        setDesc("");
    };

    return (
        <div className='container my-3'>
            <h3>Add A Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="titleid" className="form-label">Todo Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="titleid" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        aria-describedby="titlehelp" 
                    />
                    <div id="titlehelp" className="form-text">Please enter the title of your todo.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="descid" className="form-label">Description</label>
                    <input 
                        type="text" 
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control" 
                        id="descid"
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    );
}

export default AddTodo;
