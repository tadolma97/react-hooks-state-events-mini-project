import React from "react";

function Task({displaytext, category, onDeleteTask}) {
  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{displaytext}</div>
      <button className="delete" onClick={()=>onDeleteTask(displaytext)}>X</button>
    </div>
  );
}

export default Task;

