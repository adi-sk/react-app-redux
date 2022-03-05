import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

export default function Todo(props) {
  const todos = useSelector(state => state.todo)

  return (
    <div>
      <div className="container text-center">
        <h4 >TODO List !</h4>
        {
          todos.length === 0 ? "Nothing to show" :
            todos.map((todo) => {
              return <TodoItem todo={todo} key={todo.srNo} className="my-3" onDelete={props.onDelete} />
            })
        }
      </div>

    </div>
  )
}
