import React, { useState } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/todos';
import About from './MyComponents/About';
import AddTodo from './MyComponents/AddTodo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState([
    { sno: 1, title: "Buy groceries", desc: "Pick up milk, bread, eggs, and fruits." },
    { sno: 2, title: "Finish React project", desc: "Complete remaining components & tests." },
    { sno: 3, title: "Call electrician", desc: "Schedule visit to fix kitchen light." },
  ]);

  const onDelete = (todo) => {
    setTodos(todos.filter(e => e !== todo));
  };
  const addTodo = (title, desc) => {
    let sno = todos[todos.length-1].sno+1;
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc
    } 
    setTodos([...todos,myTodo]);
    console.log("i am adding this todo",title,desc);
  }

  return (
    <Router>
      <div className="App">
        <Header title="My Todos Works" searchBar={true} />
        <AddTodo addTodo ={addTodo}/>
        <Routes>
          <Route
            path="/"
            element={<Todos todos={todos} onDelete={onDelete} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
