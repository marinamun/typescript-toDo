import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { task: task, deadline: deadline }; //WHITE "TASK" AND "DEADLINE" COME FROM THE PROPERTIES OF THE INTERFACE
    setTodoList([...todoList, newTask]);
    console.log(todoList);
  };
  return (
    <div className="app">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            placeholder="Type your task"
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            placeholder="Deadline in days"
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
