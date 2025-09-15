import {Button, Input, message, Modal} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {updateTodoById} from "../apis/apis";
import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";

function ModifyTodoTextButton(props) {
    const {todoItems, dispatch} = useContext(TodoContext);
    const [inputText, setInputText] = useState('');
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    const showModal = () => {
        const targetTodo = todoItems.find(todo => todo.id === props.id);
        setInputText(targetTodo ? targetTodo.text : '');
        setOpen(true);
    }

    const handleOk = () => {
        setConfirmLoading(true);
        updateTodoText(props.id, inputText)
        setInputText('');
        setOpen(false);
        setConfirmLoading(false);
    }

    const handleCancel = () => {
        setOpen(false);
        setInputText('');
    };

    function updateTodoText(id, newText) {
        const targetTodo = todoItems.find(todo => todo.id === id);
        const updatedTodo = {...targetTodo, text: newText};
        updateTodoById(id, updatedTodo).then(() => {
            dispatch({type: "update_todo_text", id: id, text: newText})
            message.success("Todo text updated!")
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            }
            message.error("Todo text cannot be updated!")
        })
    }

    return (<>
        <Button icon={<EditOutlined/>} onClick={showModal}></Button>
        <Modal
            title="Update todo item text"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <Input placeholder="New todo text" value={inputText} onChange={handleInputChange}/>
        </Modal>
    </>)
}

export default ModifyTodoTextButton;