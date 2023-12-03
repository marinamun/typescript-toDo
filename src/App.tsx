import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./components/TodoTask";

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
    const newTask = { taskName: task, deadline: deadline }; //WHITE "TASK" AND "DEADLINE" COME FROM THE PROPERTIES OF THE INTERFACE
    setTodoList([...todoList, newTask]);
    //Clear the values of the form when a task is added:
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };
  return (
    <div className="app">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Type your task here✍🏼"
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            value={deadline}
            placeholder="Deadline in days"
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((oneTask: ITask, index: number) => {
          return (
            <TodoTask key={index} task={oneTask} completeTask={completeTask} />
          );
        })}
      </div>
      <p id="credits">
        <a href="https://github.com/marinamun/typescript-toDo" target="_blank">
          <strong>Open-source code </strong>
          by Marina M. ✨
        </a>
      </p>
    </div>
  );
};

export default App;
