import { useState } from "react"
import PropTypes from 'prop-types' 

const AddCategory = ({ onAddCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        if ( inputValue.trim().length <=1 ) return;
        
        onAddCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    }
  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
AddCategory.propTypes = {
    onAddCategories: PropTypes.func.isRequired
}


export default AddCategory
