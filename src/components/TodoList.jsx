import {TodoContext} from "../contexts/TodoContext";
import "./style/TodoList.css"
import {useContext} from "react";
import TodoItem from "./TodoItem";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
    const {todoItems} = useContext(TodoContext);

    return (
        <div className="todo-list">
            <div className="todo-title">Todo List</div>
            {
                todoItems.map(({id, text, done}) => (
                    <TodoItem
                        key={id}
                        id={id}
                        text={text}
                        done={done}
                    />
                ))
            }
            <TodoGenerator/>
        </div>

    );
}

export default TodoList