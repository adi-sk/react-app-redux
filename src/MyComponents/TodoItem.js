import React from 'react'

export default function TodoItem(props) {
  return (
    <>
        <h5>{props.todo.title}</h5>
        <p>{props.todo.description}</p>
        <button className="btn-sm btn-danger" onClick={() =>{props.onDelete(props.todo)}}>DELETE</button>
    </>
  )
}
