import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'

import { v4 as uuid4 } from 'uuid'
import { EditTodoForm } from './EditTodoForm'

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        setTodos([...todos, {id: uuid4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)  
        
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo
        }))
    }

    const deletetodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const edittodo = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id){
                return {...todo, isEditing: !todo.isEditing}
            }
            return todo
        }))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: task, isEditing: !todo.isEditing} 
            }
            return todo
        }))
    }
    return (
    <div className='TodoWrapper'>
        <h1> To do list </h1>
        <TodoForm addTodo = {addTodo} />
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task = {todo}/> 
            ):(
            <Todo task = {todo} key = {index} toggleComplete={toggleComplete} deletetodo = {deletetodo} edittodo={edittodo} />
            )
        ))}

    </div>
)
}
