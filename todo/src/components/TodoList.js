import React, { useState } from 'react'
import '../styles/TodoList.css'
import { useTodo } from '../hooks'



function TodoList () {
    const [todo, setTodo] = useState('')
    const { todos, addTodo, removeTodo } = useTodo()
 

    function handleSubmit(e) {
        e.preventDefault()
        addTodo(todo)
    }

    return (
        <div className="TodoList">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={(e) => setTodo(e.target.value)}
                placeholder="What needs to be done?"
                />
            </form>
            <ul>
                {todos.map(todo => {
                    return (
                    <li>
                       <span>{todo.text}</span> 
                        <button onClick={() => removeTodo(todo.id)}>
                            </button>
                            </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default TodoList