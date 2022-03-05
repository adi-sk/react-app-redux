import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export default function TodoItem(props) {

  const dispatch = useDispatch()
    //const actions = bindActionCreators(actionCreators,dispatch); this way need to use actions.addTodo;
  const {deleteTodo} = bindActionCreators(actionCreators,dispatch);

  return (
    <>
        <h5>{props.todo.title}</h5>
        <p>{props.todo.description}</p>
        <button className="btn-sm btn-danger" onClick={() =>{deleteTodo(props.todo)}}>DELETE</button>
    </>
  )
}
