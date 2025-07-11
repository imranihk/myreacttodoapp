import React, { useState } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/todos';
import About from './MyComponents/About';
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

  return (
    <Router>
      <div className="App">
        <Header title="My Todos Works" searchBar={true} />
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
