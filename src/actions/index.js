export const addTodo = (data) => {
    return{
        type:"ADD-TODO",
        payload: new Date().getTime.toString(),
        data:data
    }
}

export const deleteTodo = () => {
    return{
        type:"DELETE-TODO"
    }
}

export const removeTodo = () => {
    return{
        type:"REMOVE-TODO"
    }
}