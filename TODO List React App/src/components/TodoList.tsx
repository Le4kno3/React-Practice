import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface TodosInterface {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

//we need to import setTodos also because we will need to delete todos also using this component.
const TodoList = ({ todos, setTodos }: TodosInterface) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
