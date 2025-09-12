import {TodoContext} from "../contexts/TodoContext";
import {useContext} from "react";

const TodoList = () => {
    const {todoItems, dispatch} = useContext(TodoContext);

    return (
        <div>{
            todoItems.map(todoItem => {
                return <div key={todoItem.id}>{todoItem.text}</div>
            })
        }</div>
    );
}

export default TodoList