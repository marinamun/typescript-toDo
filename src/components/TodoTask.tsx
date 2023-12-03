import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <h3>
        <span className="taskName">{task.taskName} </span>in {task.deadline} days
      </h3>
      {/*FROM INTERFACE OF ITASK- EITHER TASKNAME OR DEADLINE*/}
      <button onClick={() => completeTask(task.taskName)}>✔️</button>
    </div>
  );
};
export default TodoTask;
