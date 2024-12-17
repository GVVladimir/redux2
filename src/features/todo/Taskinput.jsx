import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import "../../style/style.css";

const TaskInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <input
        className="task-input"
        type="text"
        placeholder="Введите задачу"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="sabmit" className="task-button">
        Добавить
      </button>
    </form>
  );
};

export default TaskInput;
