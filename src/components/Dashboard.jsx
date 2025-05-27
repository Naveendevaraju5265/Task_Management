import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Modal = ({ children, onClose }) => {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}
    onClick={onClose}
    >
      <div style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "90%",
        maxWidth: "600px",
        maxHeight: "80vh",
        overflowY: "auto",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
      }}
      onClick={e => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose} style={{ marginTop: "10px", padding: "12px 20px", fontSize: "16px", backgroundColor: "red", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Close</button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddTaskClick = () => {
    setShowForm(true);
    setEditingTask(null);
  };

  const handleFinish = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  return (
    <div className="dashboard">
    <h1
    style={{
      backgroundColor: "white",
      padding: "12px 24px",
      borderRadius: "12px", 
      display: "inline-block",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      border: "2px solid #1a144e"
    }}
>
  Task Management Dashboard
</h1>
      {!showForm && !editingTask && (
        <button onClick={handleAddTaskClick} style={{ padding: "12px 24px", fontSize: "18px", backgroundColor: "green", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>Add Task</button>
      )}
      {(showForm || editingTask) && (
        <Modal onClose={handleCloseModal}>
          <TaskForm selectedTask={editingTask} onFinish={handleFinish} />
        </Modal>
      )}
      <TaskList onEdit={handleEdit} />
    </div>
  );
};

export default Dashboard;
