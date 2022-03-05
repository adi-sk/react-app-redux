import React from 'react'
import TodoItem from './TodoItem'

export default function Todo(props) {
  return (
    <div>
      <div className="container text-center">
        <h4 >TODO List !</h4>
        {
          props.todos.length === 0 ? "Nothing to show" :
            props.todos.map((todo) => {
              return <TodoItem todo={todo} key={todo.srNo} className="my-3" onDelete={props.onDelete} />
            })
        }
      </div>

    </div>
  )
}
