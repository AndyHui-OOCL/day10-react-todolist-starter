import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {getTodos, updateTodoById} from "../apis/apis";

function TodoItem(props) {
    const {todoItems, dispatch} = useContext(TodoContext);

    function markedAsDone(id) {
        dispatch({type: "mark_as_done", id: id});
    }

    function deleteTodoItem(id) {
        dispatch({type: "delete_todo", id: id});
    }

    return (
        <div className="todo-item">
            <div
                className={`todo-info ${props.done ? 'finished' : ''}`}
                onClick={() => {
                    markedAsDone(props.id)
                }}>
                {props.text}
            </div>
            <button
                onClick={() => {
                    deleteTodoItem(props.id)
                }}
            > X
            </button>
        </div>
    )
}

export default TodoItem;