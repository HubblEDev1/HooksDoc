import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    
    /*
    const increment = () => {
        setCounter(counter +1)
    }*/

    const increment = useCallback(() => {  //It returns a memo, and we set the dependency which tell to REact if somenthing change
        setCounter(c => c + 1);
    }, [setCounter]);

    useEffect( () => {

    }, [increment]);

    return (
        <div>
            <h1>UseCallbackHook {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment} />
        </div>
    )
}
