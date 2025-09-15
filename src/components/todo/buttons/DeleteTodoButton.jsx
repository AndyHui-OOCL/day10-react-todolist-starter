import {useContext} from "react";
import {TodoContext} from "../../../contexts/TodoContext";
import {deleteTodoById} from "../../../apis/apis";
import {Button, message} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

function DeleteTodoButton(props) {
    const {dispatch} = useContext(TodoContext);

    function deleteTodoItem(id) {
        deleteTodoById(id).then(() => {
            dispatch({type: "delete_todo", id: id})
            message.success("Successful delete!");
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            }
            message.error("Unsuccessful delete")
        })
    }

    return (
        <Button
            className="todo-action-btn delete-btn"
            icon={<DeleteOutlined/>}
            onClick={() => deleteTodoItem(props.id)}
        />
    )
}

export default DeleteTodoButton;