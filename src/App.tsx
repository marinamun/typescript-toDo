import React, { FC } from "react";
import "./App.css"

const App: FC = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Type your task" />
          <input type="number" placeholder="Deadline in days" />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
