import {TodoContext} from "../contexts/TodoContext";
import {useContext} from "react";

const TodoList = () => {
  const {todoItems, dispatch} = useContext(TodoContext);

  return (
      <div>{
        todoItems.map(todoItem => {
          return <div>{todoItem.text}</div>
        })
      }</div>
  );
}

export default TodoList