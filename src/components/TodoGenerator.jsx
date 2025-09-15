import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {addTodos} from "../apis/apis";

function TodoGenerator() {
    const {dispatch} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");

    function  addNewTodoItem() {
        if (inputValue.trim()) {
            addTodos({text: inputValue, done: false}).then((response) => {
                dispatch({type: "add_todo", todo: response.data})
            }).catch((error) => {
                if( error.response ){
                    console.log(error.response.data);
                }
            })
            setInputValue("");
        }
    }

    return (
        <div className="todo-generator">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addNewTodoItem}>add</button>
        </div>
    )
}

export default TodoGenerator;