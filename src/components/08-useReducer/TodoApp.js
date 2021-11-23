import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './styles.css';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    
    return JSON.parse(localStorage.getItem('state')) || [];
    
    /*return [{
        id: new Date().getTime(),
        desc: 'BMW',
        done: false
    }];*/
};

export const TodoApp = () => {
    const [state, dispatch] = useReducer(todoReducer, [], init);//init is the initialState an by default the initiState is [+


    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

    const handleDelete = (todoId) => {
        console.log(todoId);
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action)
        
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })

    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>Todo List ({state.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7"> 
                    todos
                    <TodoList state={state} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
