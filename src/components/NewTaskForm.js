import React, {useState} from "react";

function NewTaskForm({categoryList, onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory1] = useState("Code");
  const mapCategory=categoryList.filter((cat)=>(cat!=="All")).map((cat)=>(<option key={cat}>{cat}</option>))

  function handleTaskName(event){
    setText(event.target.value)
  }
  function handleTaskCategory(event){
    setCategory1(event.target.value)
  }

  function handleSumbit(event){
    event.preventDefault()
    onTaskFormSubmit({text, category})
  }
  return (
    <form className="new-task-form" onSubmit={handleSumbit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTaskName}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleTaskCategory}>
          {mapCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
