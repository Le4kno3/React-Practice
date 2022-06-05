import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import TodoList from "./TodoList";

interface SingleTodoInterface {
  todo: Todo;
  key: number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, key, todos, setTodos }: SingleTodoInterface) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todoText);

  const handleTaskDone = (id: number) => {
    setTodos(
      todos.map(
        (todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo) //toggle selection using !todo.isDone
      )
    );
  };

  const handleTaskDelete = (id: number) => {
    setTodos(
      todos.filter((todo) => todo.id !== id) //toggle selection using !todo.isDone
    );
  };

  const handleTaskEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map(
        (todo) => (todo.id === id ? { ...todo, todoText: editTodo } : todo) //toggle selection using !todo.isDone
      )
    );
    setEdit(false);
  };

  return (
    //we have defined it as "form" instead of "div", because we will be having editTodo functionality on each single todo component.
    <form
      id="form_single_todo"
      className="container_single_todo"
      //   we supply "event" to handleTaskEdit function to prevent page refresh on submit (when we press enter)
      onSubmit={(e) => handleTaskEdit(e, todo.id)}
    >
      {edit ? ( //display input box in edit mode, task can only be completed/deleted in normal mode, so we only need to add a new input and thats all.
        <input
          className="single_todo_text"
          value={editTodo}
          placeholder="Edit"
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? ( //normal view -> click Task completed
        <s className="single_todo_text">{todo.todoText}</s>
      ) : (
        <span className="single_todo_text">{todo.todoText}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={(e) => {
            //   checks whether mode is already in edit or not && if task is completed or not
            if (!edit && !todo.isDone) {
              //toggle the edit when not in edit.
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleTaskDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleTaskDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

<div className="todos"></div>;

export default SingleTodo;
