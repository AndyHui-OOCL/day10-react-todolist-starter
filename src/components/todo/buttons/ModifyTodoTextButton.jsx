import {Button, Input, message, Modal} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {updateTodoById} from "../../../apis/apis";
import {useContext, useState} from "react";
import {TodoContext} from "../../../contexts/TodoContext";

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
        if (inputText.trim()) {
            setConfirmLoading(true);
            updateTodoText(props.id, inputText)
            setInputText('');
            setOpen(false);
            setConfirmLoading(false);
        } else {
            message.warning("Task text cannot be empty!");
        }
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
            message.success("Task updated successfully!")
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            }
            message.error("Failed to update task!")
        })
    }

    return (<>
        <Button
            type="text"
            icon={<EditOutlined/>}
            onClick={showModal}
            size="small"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        />
        <Modal
            title="Edit Task"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okText="Update"
            cancelText="Cancel"
            style={{top: 100}}
        >
            <Input
                placeholder="Enter task description"
                value={inputText}
                onChange={handleInputChange}
                size="large"
                style={{marginTop: '16px'}}
                onPressEnter={handleOk}
            />
        </Modal>
    </>)
}

export default ModifyTodoTextButton;