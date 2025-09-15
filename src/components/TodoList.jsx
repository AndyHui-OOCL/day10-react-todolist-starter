import {TodoContext} from "../contexts/TodoContext";
import "./style/TodoList.css"
import {useReducer} from "react";
import TodoItem from "./TodoItem";
import TodoGenerator from "./TodoGenerator";
import {todoInitialState, todoReducer} from "../reducers/todoReducer";

const TodoList = () => {
    const [todoItems, dispatch] = useReducer(todoReducer, todoInitialState);
    const value = {todoItems, dispatch};

    return (
        <TodoContext.Provider value={value}>
            <div className="todo-list">
                <div className="todo-title">Todo List</div>
                {
                    todoItems.length <= 0 ? (
                        <div className="empty-todo">
                            Add the things you need to do today...
                        </div>
                    ) : (
                        todoItems.map(({id, text, done}) => (
                            <TodoItem
                                key={id}
                                id={id}
                                text={text}
                                done={done}
                            />
                        ))
                    )}
                <TodoGenerator/>
            </div>
        </TodoContext.Provider>

    );
}

export default TodoList