import React, { useState } from 'react';

const Display = (props) => {

    const { todoItem, setTodoItem } = props;

    const deleteButton = (idFromBelow) => {
        setTodoItem(todoItem.filter((todo, index) => todo.id !== idFromBelow));
    }

    const handleComplete = (todo) => {
        todo.markedDelete = !todo.markedDelete;
        setTodoItem([...todoItem]);
    }

    const styled = (markedDelete) => {
        if (markedDelete === true) {
            return "complete"
        }
        else {
            return "notComplete"
        }
    }


    return (
        <div>
            {
                todoItem.map((todo, index) => (
                    <div key={index}>
                        <p className={styled(todo.markedDelete)}>{todo.todoDesc}</p>
                        <input onClick={() => handleComplete(todo)} type="checkbox" />
                        <button onClick={() => deleteButton(todo.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;