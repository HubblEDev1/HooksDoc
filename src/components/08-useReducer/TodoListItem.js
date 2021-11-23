import React from 'react'
import './styles.css';

export const TodoListItem = ({item, id, handleDelete, handleToggle}) => {
    return (
        <li 
            key={item.id}
            className = "list-group-item"
        >
            <p 
                className={`${item.done && 'complete'}`} 
                onClick = {() => handleToggle(item.id)}
            >
                {id + 1}. {item.desc}
            </p>
            <button 
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
            >
                Borrar
            </button>
        </li>
    )
}
