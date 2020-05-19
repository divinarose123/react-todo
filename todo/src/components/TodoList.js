import React, { useEffect, useState } from 'react'
import '../styles/TodoList.css';
import { useTodo } from "../hooks"

export default () => {
    const { todos, getTodos, addTodo, deleteTodo } = useTodo()
    const [listText, setListText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(listText)
        setListText('')
    }

    useEffect(() => {
        getTodos()
    }, [])
    return (
        <div className="todo-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={listText}
                    onChange={(e) => setListText(e.target.value)}
                />
            </form>
            <ul>
                {todos.map(list => {
                    return (
                        <li key={list.id}>
                            {list.text}
                            <button onClick={() => deleteTodo(list.id)}>X</button>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
};