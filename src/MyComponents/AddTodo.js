import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export default function AddTodo(props) {

    const [title,setTitle] = useState("");
    const [desc,setDescription] = useState("");

    const dispatch = useDispatch()
    //const actions = bindActionCreators(actionCreators,dispatch); this way need to use actions.addTodo;
    const {addTodo} = bindActionCreators(actionCreators,dispatch);

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Desc can not be null")
        }
        addTodo(title,desc);
        setTitle('');
        setDescription('');
    }
    

    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text"  value={desc} onChange={(e)=> setDescription(e.target.value)} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
