import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";

function TodoGenerator() {
    const {dispatch} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");

    function addNewTodoItem() {
        if (inputValue.trim()) {
            dispatch({type: "add_todo", description: inputValue});
            setInputValue("");
        }
    }

    return (
        <div>
            <input
                className="todo-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="todo-add" onClick={addNewTodoItem}>add</button>
        </div>
    )
}

export default TodoGenerator;