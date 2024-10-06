import { useState } from 'react'
import PropTypes from 'prop-types' 

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );
  
    const handlerAdd = () => {
        setCounter(counter + 1);
    }  

    const handlerSustract = () => {
        setCounter(counter - 1);
    } 
    
    const handlerReset = () => {
        setCounter(value);
    } 

  return (
    <>
     <h1>CounterApp</h1> 
     <h2>{ counter }</h2>

     <button onClick = { handlerAdd }>
        +1
     </button>
     <button onClick = { handlerSustract }>
        -1
     </button>
     <button onClick = { handlerReset }>
        Reset
     </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp
