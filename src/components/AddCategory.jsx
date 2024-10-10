import { useState } from "react";

export const AddCategory = ({addCategorie}) => {
  const [value, setValue] = useState("");

  const handleChange = ({target: {value}}) => {
    setValue(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.category.value.trim();

    if(value.length <= 1) return

    addCategorie(value)
    setValue("")
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <input 
        name="category"
        type="text" 
        placeholder="Write a category" 
        onChange={handleChange} 
        value={value}
      />
    </form>
   );
}
 