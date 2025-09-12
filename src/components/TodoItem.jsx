import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

function TodoItem(props) {
    const {dispatch} = useContext(TodoContext);

    function markedAsDone(id) {
        dispatch({type: "mark_as_done", id: id});
    }

    function deleteTodoItem(id) {
        dispatch({type: "delete_todo", id: id});
    }

    return (
        <div>
            <div
                className={`todo-item ${props.done ? 'finished' : ''}`}
                onClick={() => {
                    markedAsDone(props.id)
                }}>
                {props.text}
            </div>
            <button
                onClick={() => {deleteTodoItem(props.id)}}
            >-</button>
        </div>
    )
}

export default TodoItem;