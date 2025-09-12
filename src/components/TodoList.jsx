import {TodoContext} from "../contexts/TodoContext";
import "./TodoList.css"
import {useContext} from "react";

const TodoList = () => {
    const {todoItems, dispatch} = useContext(TodoContext);

    return (
        <div className={"todo-list"}>
            <div>This is a Todo List</div>
            {
            todoItems.map(todoItem => {
                return <div  className={"todo-item"} key={todoItem.id}>{todoItem.text}</div>
            })
        }</div>
    );
}

export default TodoList