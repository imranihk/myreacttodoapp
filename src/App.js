import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/todos';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of", todo);
  }

let todos = [
  {
    sno: 1,
    title: "Buy groceries",
    desc: "Pick up milk, bread, eggs, and fruits from the supermarket."
  },
  {
    sno: 2,
    title: "Finish React project",
    desc: "Complete the remaining components and test the app thoroughly."
  },
  {
    sno: 3,
    title: "Call the electrician",
    desc: "Schedule a visit to fix the kitchen light and check wiring."
  },
  {
    sno: 4,
    title: "Pay utility bills",
    desc: "Pay electricity and internet bills before the due date."
  },
  {
    sno: 5,
    title: "Read a book",
    desc: "Spend at least 30 minutes reading 'Atomic Habits'."
  },
  {
    sno: 6,
    title: "Exercise",
    desc: "Go for a 20-minute run in the park in the evening."
  },
  {
    sno: 7,
    title: "Plan weekend trip",
    desc: "Look up places to visit and book a hotel for Saturday night."
  },
  {
    sno: 8,
    title: "Organize workspace",
    desc: "Declutter desk, file documents, and clean up cables."
  },
  {
    sno: 9,
    title: "Reply to emails",
    desc: "Respond to pending work emails and schedule follow-ups."
  },
  {
    sno: 10,
    title: "Cook dinner",
    desc: "Try making pasta with homemade sauce for dinner tonight."
  }
];


  return (
    <div className="App">
      <>
        <Header title="My Todos Works" searchBar={true} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </>
    </div>
  );
}

export default App;
