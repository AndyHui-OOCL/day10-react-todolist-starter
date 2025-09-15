import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {getTodos, updateTodoById} from "../apis/apis";

function TodoItem(props) {
    const {todoItems, dispatch} = useContext(TodoContext);

    function markedAsDone(id) {
        const targetTodo = todoItems.find(todo => todo.id === id);
        const updatedTodo = {...targetTodo, done: !targetTodo.done};
        updateTodoById(id, updatedTodo).then(() => {
            dispatch({type: "mark_as_done", id: id});
        });
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