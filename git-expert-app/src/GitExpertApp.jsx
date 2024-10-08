import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GitExpertoApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};

export default GitExpertApp;
