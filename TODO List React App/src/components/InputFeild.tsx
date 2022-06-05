import React, { useRef } from "react";

import "./styles.css";

interface State_Props {
  todoText: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleNewTodo: (e: React.FormEvent) => void;
}

const InputFeild = ({ todoText, setTodo, handleNewTodo }: State_Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleNewTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todoText}
        onChange={(e) => setTodo(e.target.value)}
        className="input_box"
        placeholder="Enter a Task"
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
