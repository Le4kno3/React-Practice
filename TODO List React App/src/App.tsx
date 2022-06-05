import React, { useState } from "react";

import "./App.css";
import InputFeild from "./components/InputFeild";
import "./components/InputFeild.tsx";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

//specify return type of "App" function as "React.FC", where "FC" means functional compoent
const App = () => {
  //this "todo" records the user input
  const [todoText, setTodo] = useState<string>("");

  // console.log(todoText);

  //this "todos" is like database of all todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // console.log(todos);

  //the handleNewTodo is executed when user enters a string and then clicks on "Go" button
  const handleNewTodo = (e: React.FormEvent) => {
    e.preventDefault();
    //now onchange of input_box, the "todo" state is updated
    if (todoText) {
      console.log(todoText);
      setTodos([
        ...todos,
        { id: Date.now(), todoText: todoText, isDone: false },
      ]);
    }
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild
        todoText={todoText}
        setTodo={setTodo}
        handleNewTodo={handleNewTodo}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

//the defined react function needs to be exported so that, index.tsx can render it on website.
export default App;
