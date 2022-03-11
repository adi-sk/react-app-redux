import './App.css';
import Header from './MyComponents/Header'
import Todo from './MyComponents/Todo';
import Footer from './MyComponents/Footer';
import React, { useEffect, useState } from 'react';
import AddTodo from './MyComponents/AddTodo';
import {
  // BrowserRouter as Router,
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import About from './MyComponents/About';
import News from './News/News';

function App() {

  let initTodos = [];

  if (localStorage.getItem("todos")) {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodos);
  useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)) }, [todos]);

  const addTodo = (title, desc) => {
    let currentSrNo = 1;
    if (todos.length > 0) {
      currentSrNo = todos[todos.length - 1].srNo + 1;
    }

    let todo = {
      srNo: currentSrNo,
      title: title,
      description: desc
    };

    console.log(todo);
    setTodos(todos.concat(todo));
  }

  const onDelete = (todo) => {
    console.log(todo)

    setTodos(todos.filter((val) => {
      return val !== todo
    }))

  }

  return (
    <>
      <HashRouter>
        <Header title="POC" showSearch={true} />  {/*value is sent through props*/}

        <Routes>
          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todo todos={todos} onDelete={onDelete} />
            </>
          }>
          </Route>
          <Route path="/about" element={
            <About />
          }>

          </Route>

          <Route path='/news'element = {<News/>}></Route>
        </Routes>


        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
