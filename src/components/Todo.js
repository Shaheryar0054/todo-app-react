import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, deleteTodo, removeTodo} from '../actions'

function Todo() {
    const [inputData, setInputData] = useState("")
    const dispatch= (useDispatch);
    function userInput(event) {
        setInputData(event.target.value)
    }

    return (
        <>
            <div className="main-div">
                <div className="chlid-div">
                    <figcaption>Add Your List Here</figcaption>

                    <div className="add-items">
                        <input type='text' placeholder='Add Items' value={inputData} onChange={userInput}/>
                        <button type='submit' onClick={()=>dispatch(addTodo(inputData))}>submit</button>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Todo;
