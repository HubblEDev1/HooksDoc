import React from 'react'
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
    const {state, increment, decrement, reset} = useCounter();
    return (
        <>
            <h3>Counter {state}</h3>
            <hr/>
            <button
                className = "btn btn-primary"
                onClick = {() => increment(5)}
            >
                +1
            </button>
            <button 
                className = "btn btn-primary"
                onClick = {reset}
            >
                Reset
            </button>
            <button 
                className = "btn btn-primary"
                onClick = {() => decrement()}
            >
                -1
            </button>
        </>
    )
}
