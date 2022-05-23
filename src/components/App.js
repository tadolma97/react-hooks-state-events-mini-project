import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks]=useState(TASKS)
  const [category, setCategory]=useState('All')

  function handleDelete(newTasks){
    console.log(newTasks)
    setTasks(tasks.filter((task)=>task.text!==newTasks))
  }

  function handleTaskSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  const filterCategory=tasks.filter((task)=>{
    if (category==="All") return true;
    return task.category===category
  })

  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} handleSelectCategory={setCategory} />
      <NewTaskForm categoryList={CATEGORIES} onTaskFormSubmit={handleTaskSubmit} />
      <TaskList displayTasks={filterCategory} onDeleteTask={handleDelete}/>
    </div>
  );
}

export default App;

