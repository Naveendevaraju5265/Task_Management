import React from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = ({ onEdit }) => {
  const { tasks, deleteTask } = useTaskContext();

  if (tasks.length === 0) return <p style={{ marginTop: "20px" }}>No tasks yet.</p>;

  return (
    <div
      className="task-list"
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        padding: "0 40px",
        boxSizing: "border-box"
      }}
    >
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
