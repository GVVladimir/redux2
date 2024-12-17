import { useDispatch, useSelector } from "react-redux";
import { togleTaskStatus, deleteTask } from "./todoSlice";
import "../../style/style.css";

const TaskList = () => {
  const tasks = useSelector((state) => {
    if (state.todos.filter === "completed") {
      return state.todos.tasks.filter((task) => task.completed);
    }
    else if (state.todos.filter === "incomplete") {
      return state.todos.tasks.filter((task) => !task.completed);
    }

    return state.todos.tasks;
  });

  const dispatch = useDispatch();
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
            onClick={() => dispatch(togleTaskStatus(task.id))}
            className="task-text"
          >
            {task.text}
          </span>
          <button
            className="delet-btn"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            Удалить
          </button>
        </li>
      ))}
    </div>
  );
};

export default TaskList;
