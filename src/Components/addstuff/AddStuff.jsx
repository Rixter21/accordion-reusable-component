import React from 'react'
import { useState } from 'react'
import useToggle from '../hooks/useToggle';

const AddStuff = () => {
    const [inputValue, setInputValue] = useState("");

    const {status: addStuff, toggleStatus: toggleAddStuff } = useToggle();

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

  return (
    <div>
        {addStuff ? (
            <label>
                Title
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputValue} 
                />
            </label>
        ) : (
            <>Title {inputValue}</>
        )}
        <br />
        <button onClick={toggleAddStuff}>
            {addStuff ? 'Submit' : 'Edit'}
        </button>
    </div>
  )
}

export default AddStuff;