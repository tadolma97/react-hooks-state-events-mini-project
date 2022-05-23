import React from "react";

function CategoryFilter({selectedCategory, categories, handleSelectCategory}) {
  function handleSelect(event){
    handleSelectCategory(event.target.value)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>(
      <button className={category===selectedCategory? "selected":null} 
              key={category} value={category} onClick={handleSelect}>{category} 
      </button>))
      }
    </div>
  );
}


export default CategoryFilter;

