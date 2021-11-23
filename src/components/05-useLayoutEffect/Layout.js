import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';


export const Layout = () => {
    
    const {state, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const {quote} = !!data && data[0];

    const parrafo = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        //console.log(parrafo.current)
        setBoxSize(parrafo.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>   
            <blockquote className="blockquote text-right">
                <p 
                    className = "mb-0"
                    ref = {parrafo}
                >
                    {quote}
                </p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>
            <button 
                className="btn btn-primary"
                onClick = {increment}
            >
                Next
            </button>
        </div>
    )
};
