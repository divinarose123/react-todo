// 1. imports
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const ADD_TODO = "todos/ADD_TODO"


// 3. initial state
const initialState = {
  todos: []
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: action.payload }
    default:
      return state
  }
}

// 5. action creators

function getTheTodo() {
  return dispatch => {
    axios.get('http://localhost:3001/todos').then(resp => {
        dispatch({
            type: ADD_TODO,
            payload: resp.data
        })
    })
  }
}

function postTodo(text) {
    return dispatch => {
        axios.post('http://localhost:3001/todos', {text, status: 'active'}).then(resp => {
            dispatch(getTheTodo())

    })
      
    }
}

function deleteTheTodo(id) {
    return dispatch => {
        axios.delete('http://localhost:3001/todos', + id).then(resp => {
            dispatch(getTheTodo())

    })
      
    }
}



// 6. custom hook
export function useTodo() {
  const dispatch = useDispatch()
  const todos = useSelector(appState => appState.todoState.todos)

  const getTodos = () => dispatch(getTheTodo())
const addTodo = (text) => dispatch(postTodo(text))
const deleteTodo = (text) => dispatch(deleteTheTodo(text))

  return { todos, getTodos, addTodo, deleteTodo }
}
