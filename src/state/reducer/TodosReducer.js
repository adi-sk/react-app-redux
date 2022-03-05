const initState = ()=>{
    console.log("Inside state init!")
    if(localStorage.getItem("todos")){
        return JSON.parse(localStorage.getItem("todos"))
    }
    return [];
};


const reducer = (state= initState(),action)=>{
    console.log('inside reducer !');
    if(action.type === 'add'){
        let currentSrNo = 0;
        if(state.length > 0){
            currentSrNo = state[state.length - 1].srNo + 1;
        }
        let newTodo = {
            srNo : currentSrNo,
            title : action.payload.title,
            description : action.payload.description
        }
        console.log(state)
        let newState = [...state,newTodo];
        localStorage.setItem("todos",JSON.stringify(newState))
        return newState;
    }
    else if(action.type === 'delete'){
        let todo = action.payload;
        let index = state.indexOf(todo);
        state.splice(index,1);
        let newState = [...state];
        localStorage.setItem("todos",JSON.stringify(newState))
        return newState;
    }

    return state;
}

export default reducer;