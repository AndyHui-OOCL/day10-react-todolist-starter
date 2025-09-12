import {TodoContext} from "../contexts/TodoContext";
import "./TodoList.css"
import {useContext} from "react";

const TodoList = () => {
    const {todoItems, dispatch} = useContext(TodoContext);

    function markedAsDone(id) {
        dispatch({type: "mark_as_done", id: id})
    }

    return (
        <div className={"todo-list"}>
            <div>Todo List</div>
            {
            todoItems.map(({id, text, done}) => {
                return <div
                    className={`todo-item ${done? 'finished' : ''}`}
                    onClick={() => {markedAsDone(id)}}> {text}</div>
            })
        }</div>
    );
}

export default TodoList