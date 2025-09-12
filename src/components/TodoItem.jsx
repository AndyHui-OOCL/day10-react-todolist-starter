import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

function TodoItem(props) {
    const {dispatch} = useContext(TodoContext);

    function markedAsDone(id) {
        dispatch({type: "mark_as_done", id: id});
    }

    return (
        <div
            className={`todo-item ${props.done ? 'finished' : ''}`}
            onClick={() => {
                markedAsDone(props.id)
            }}>
            {props.text}
        </div>
    )
}

export default TodoItem;