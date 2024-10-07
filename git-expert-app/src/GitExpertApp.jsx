import { useState } from "react"
import AddCategory from "./AddCategory";

const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        console.log(newCategory)
        setCategories([newCategory, ...categories]);
    };

  return (
    <>
      {/*titulo */}
      <h1>GitExpertoApp</h1>

      {/*input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/*Listado de Gif */}
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        { categories.map( category => {
            return <li key={ category }>{ category }</li>;
        }) }
      </ol>
        {/*Gif Item */}
    </>
  )
}

export default GitExpertApp
