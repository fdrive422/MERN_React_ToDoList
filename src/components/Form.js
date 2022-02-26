import React, { useState } from 'react';

const Form = (props) => {

    const { todoItem, setTodoItem } = props;
    const [todoDesc, setTodoDesc] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        setTodoItem([...todoItem, {
            todoDesc: todoDesc,
            id: Math.floor(Math.random() * 10000).toString(),
            markedDelete: false
        }
        ])
        setTodoDesc("");
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={(e) => setTodoDesc(e.target.value)} value={todoDesc} type="Text" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form;