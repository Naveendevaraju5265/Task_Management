import React from "react";
import { TaskProvider } from "./context/TaskContext";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <Dashboard />
    </TaskProvider>
  );
}

export default App;
