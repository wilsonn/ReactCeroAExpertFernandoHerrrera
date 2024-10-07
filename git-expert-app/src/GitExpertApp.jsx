import { useState } from "react"
import AddCategory from "./AddCategory";

const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'Valorant']);
    };

  return (
    <>
      {/*titulo */}
      <h1>GitExpertoApp</h1>

      {/*input */}
      <AddCategory onAddCategories={setCategories} />

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
