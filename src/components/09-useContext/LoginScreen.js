import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext);
    
    return (
        <div>
            <h1>LoginApp</h1>
            <hr/>
            <button
                className = "btn btn-primary"
                onClick = {() => setUser({id: 'Edwin', email: 'edwin@example.com'})}
            >
                Mi nombre
            </button>
        </div>
    )
}
