import { useState } from "react";
// import GifGrid from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";

const GiftExpertapp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const addCategorie = (category)=> {
    if(categories.includes(category)) return

    setCategories([category, ...categories])
  }
  return ( 
    <>
      <h1>Gift Expert App</h1>

      <AddCategory addCategorie={addCategorie}/>
      
      {categories.map(category => (
        <GifGrid key={category} category={category}/>
      ))}
    </>
   );
}
 
export default GiftExpertapp;