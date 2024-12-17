import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTask } from "./todoSlice";
import "../../style/style.css";

const TaskFilter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter);

  return (
    <div className="task-filter">
      <button
        onClick={() => dispatch(filterTask("all"))}
        disabled={currentFilter === "all"}
        className="filter-button"
      >
        все
      </button>

      <button
        onClick={() => dispatch(filterTask("completed"))}
        disabled={currentFilter === "completed"}
        className="filter-button"
      >
        сделал
      </button>

      <button
        onClick={() => dispatch(filterTask("incomplete"))}
        disabled={currentFilter === "incomplete"}
        className="filter-button"
      >
        еще сделать
      </button>
    </div>
  );
};

export default TaskFilter;
