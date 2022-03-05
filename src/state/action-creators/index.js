export const addTodo = (title,description)=>{
    console.log("inside action creator !");
    return (dispatch) =>{
        dispatch({
            type : 'add',
            payload : {
                title : title,
                description : description
            }
        })
    }
}

export const deleteTodo = (todo)=>{
    return (dispatch) =>{
        dispatch({
            type : 'delete',
            payload : todo
        })
    }
}