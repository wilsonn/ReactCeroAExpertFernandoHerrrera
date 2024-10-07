import { useState } from "react"
import PropTypes from 'prop-types' 

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const newInputValue = inputValue.trim(); 
        if ( newInputValue.trim().length <=1 ) return;
        
        onNewCategory(newInputValue);
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
    onNewCategory: PropTypes.func.isRequired
}


export default AddCategory
