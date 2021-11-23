import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

    const {state, increment} = useCounter(5000);
    const [show, setShow] = useState(false);

    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);//If state changes, it memorizes the result, the dependency will say when mem  


    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{state}</small></h3>
            <hr/>
            {/*<p>{procesoPesado(state)}</p>*/
                <p>{memoProcesoPesado}</p>
            }

            <button
                className = "btn btn-primary"
                onClick = {increment}
            >
                +1
            </button>
            <button
                className = "btn btn-outline-danger ml-3"
                onClick = {() => {setShow(!show)}}
            >
                Show/Hide {JSON.stringify(show)}
            </button>


        </div>
    )
}
