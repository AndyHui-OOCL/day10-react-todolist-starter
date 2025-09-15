import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {updateTodoById} from "../apis/apis";
import {message} from "antd";
import ModifyTodoTextButton from "./ModifyTodoTextButton";
import DeleteTodoButton from "./DeleteTodoButton";

function TodoItem(props) {
    const {todoItems, dispatch} = useContext(TodoContext);


    function markedAsDone(id) {
        const targetTodo = todoItems.find(todo => todo.id === id);
        const updatedTodo = {...targetTodo, done: !targetTodo.done};
        updateTodoById(id, updatedTodo).then(() => {
            dispatch({type: "mark_as_done", id: id});
            message.success("Marked as done!");
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            }
            message.error("Unsuccessful mark as done!");
        });
    }

    return (
        <div className="todo-item">
            <div
                className={`todo-info ${props.done ? 'finished' : ''}`}
                onClick={() => {
                    markedAsDone(props.id)
                }}>
                {(props.text !== "") ? props.text : " " }
            </div>
            <ModifyTodoTextButton id={props.id}></ModifyTodoTextButton>
            <DeleteTodoButton id={props.id}></DeleteTodoButton>

        </div>
    )
}

export default TodoItem;