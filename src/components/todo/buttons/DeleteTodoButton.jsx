import {useContext} from "react";
import {TodoContext} from "../../../contexts/TodoContext";
import {deleteTodoById} from "../../../apis/apis";
import {Button, message, Popconfirm} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

function DeleteTodoButton(props) {
    const {dispatch} = useContext(TodoContext);

    function deleteTodoItem(id) {
        deleteTodoById(id).then(() => {
            dispatch({type: "delete_todo", id: id})
            message.success("Task deleted successfully!");
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            }
            message.error("Failed to delete task")
        })
    }

    return (
            <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                size="small"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            />
    )
}

export default DeleteTodoButton;