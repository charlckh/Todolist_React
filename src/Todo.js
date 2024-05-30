import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { EditTodoForm } from './EditTodoForm'

export const Todo = ({task, toggleComplete, deletetodo, edittodo}) => {
  return (
    <div className='Todo'>
        <p onClick = {() => toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`} >{task.task}</p>
        <div>
            <FontAwesomeIcon icon = {faPenToSquare} className='edit-icon' onClick={() => edittodo(task.id)} />
            <FontAwesomeIcon icon = {faTrash} className='delete-icon' onClick = {() => deletetodo(task.id)} /> 
        </div>  
    </div>
  )
}
