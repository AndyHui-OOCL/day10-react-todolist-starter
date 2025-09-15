import {useEffect, useReducer} from "react";
import {todoInitialState, todoReducer} from "../reducers/todoReducer";
import {getTodos} from "../apis/apis";
import {message} from "antd";
import {TodoContext} from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import "./style/TodoList.css";

const FinishedTodoList = () => {
    const [todoItems, dispatch] = useReducer(todoReducer, todoInitialState);
    const value = {todoItems, dispatch};

    useEffect(() => {
        getTodos().then(response => {
            dispatch({type: 'load_todos', todos: response.data})
            message.success("Successful query!");
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            }
            message.error("Unsuccessful query!")
        })
    }, []);

    return (
        <TodoContext.Provider value={value}>
            <div className="todo-list">
                <div className="todo-title">Completed Todo List</div>
                {
                    todoItems.length <= 0 ? (
                        <div className="empty-todo">
                            No completed tasks yet...
                        </div>
                    ) : (
                        todoItems.filter(({done}) => done).map(({id, text, done}) => (
                            <TodoItem
                                key={id}
                                id={id}
                                text={text}
                                done={done}
                            />
                        ))
                    )}
            </div>
        </TodoContext.Provider>
    );
}

export default FinishedTodoList;
