import React, {useState} from 'react';

import './count.css';

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 80
    });

    const {counter1, counter2} = state;

    const countHandled = () => {
        setState({
            ...state,
            counter1: counter1+1,
        });
    }
    
    return(
        <>
            <h3>Counter {counter1}</h3>
            <h3>Counter {counter2}</h3>
            <hr/>
            <button className="btn btn-primary"
                    onClick={countHandled}
            >
                +1
            </button>
        </>
    )
}