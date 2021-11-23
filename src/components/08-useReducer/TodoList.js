import React from 'react'
import './styles.css';
import { TodoListItem } from './TodoListItem';


export const TodoList = ({state, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                state.map(( item, i ) => (
                    <TodoListItem key={item.id} item={item} id={i} handleDelete={handleDelete} handleToggle={handleToggle}/>
                    )
                )
            }
        </ul>
    )
}
