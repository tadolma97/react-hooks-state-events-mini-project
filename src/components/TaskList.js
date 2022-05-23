import React from "react";
import Task from "./Task";

function TaskList({displayTasks, onDeleteTask}) {
  return (
    <div className="tasks">
        {displayTasks.map((task)=>(
          <Task key={task.text} displaytext={task.text} category={task.category} onDeleteTask={onDeleteTask}/>))}
    </div>
  );
}

export default TaskList;

