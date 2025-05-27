import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

const defaultTask = {
  title: "",
  description: "",
  status: "Todo",
  priority: "Low",
  dueDate: "",
  assignedTo: ""
};

const TaskForm = ({ selectedTask, onFinish }) => {
  const { tasks, addTask, updateTask } = useTaskContext();
  const [task, setTask] = useState(selectedTask || defaultTask);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title || !task.dueDate || !task.assignedTo) {
      alert("Please fill all required fields");
      return;
    }

    if (!selectedTask) {
      const duplicate = tasks.find(
        (t) => t.title.trim().toLowerCase() === task.title.trim().toLowerCase()
      );
      if (duplicate) {
        alert("Task with this name is already created.");
        return;
      }
    }

    selectedTask ? updateTask(selectedTask.id, task) : addTask(task);
    setTask(defaultTask);
    onFinish();
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="task-form"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "16px",
        maxWidth: "500px",
        margin: "0 auto",
        width: "100%"
      }}
    >
      <input
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        style={{ ...inputStyle, resize: "vertical", minHeight: "60px" }}
      />
      <select
        name="status"
        value={task.status}
        onChange={handleChange}
        style={inputStyle}
      >
        <option>Todo</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        style={inputStyle}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input
        name="dueDate"
        type="date"
        value={task.dueDate}
        onChange={handleChange}
        required
        placeholder="dd-mm-yyyy"
        style={inputStyle}
      />
      <input
        name="assignedTo"
        placeholder="Assigned User"
        value={task.assignedTo}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <button
        type="submit"
        style={{
          padding: "12px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {selectedTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
