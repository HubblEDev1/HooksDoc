import React, { useRef } from 'react'

export const FocusScreen = () => {
    
    const inputRef = useRef();

    const handleClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }
    console.log(inputRef);
    return (
        <div>
            <h1>FocusScreen</h1>
            <hr/>
            <input
                ref = {inputRef}
                className="form-control"
                placeholder="Enter something"
            />
            <button 
                onClick={handleClick}
            >
                Select
            </button>
        </div>
    )
}
