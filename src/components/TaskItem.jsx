import React from "react";

const TaskItem = ({ task, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Todo": return "gray";
      case "In Progress": return "orange";
      case "Done": return "green";
      default: return "black";
    }
  };

  return (
    <div
      className="task-card"
      style={{
        borderLeft: `6px solid ${getStatusColor(task.status)}`,
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "70%",           // Half of parent width
        margin: "0 auto",       // Centers horizontally
      }}
    >
      <h3><strong>{"Task-Name: "} {task.title}</strong></h3>
      {[
        { label: "Description", value: task.description },
        { label: "Status", value: task.status },
        { label: "Priority", value: task.priority },
        { label: "Due", value: task.dueDate },
        { label: "Assigned", value: task.assignedTo }
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            marginBottom: "8px",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "6px",
            flexWrap: "wrap"
          }}
        >
          <strong
            style={{
              minWidth: "100px",
              textAlign: "left",
              display: "inline-block"
            }}
          >
            {item.label}:
          </strong>
          <span style={{ flex: 1, textAlign: "left", wordBreak: "break-word" }}>{item.value}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button onClick={() => onEdit(task)} style={{ padding: "8px" }}>Edit</button>
        <button onClick={() => onDelete(task.id)} style={{ padding: "8px", backgroundColor: "red", color: "white", border: "none", borderRadius: "4px" }}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
