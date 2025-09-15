import {TodoContext} from "../contexts/TodoContext";
import "./style/TodoList.css"
import {useEffect, useReducer} from "react";
import TodoItem from "./TodoItem";
import TodoGenerator from "./TodoGenerator";
import {todoInitialState, todoReducer} from "../reducers/todoReducer";
import {getTodos} from "../apis/apis";

const TodoList = () => {
    const [todoItems, dispatch] = useReducer(todoReducer, todoInitialState);
    const value = {todoItems, dispatch};

    useEffect(() => {
        getTodos().then(response => {
            dispatch({type: 'load_todos', todos: response.data})
        })
    }, []);

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