import {useContext, useState} from "react";
import {TodoContext} from "../../contexts/TodoContext";
import {addTodos} from "../../apis/apis";
import {Button, Input, message, Space} from "antd";
import {PlusOutlined} from "@ant-design/icons";

function TodoGenerator() {
    const {dispatch} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");

    function addNewTodoItem() {
        if (inputValue.trim()) {
            addTodos({text: inputValue, done: false}).then((response) => {
                dispatch({type: "add_todo", todo: response.data})
                message.success("Task added successfully!");
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                }
                message.error("Failed to add task!")
            })
            setInputValue("");
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addNewTodoItem();
        }
    };

    return (
        <Space.Compact style={{width: '100%'}}>
            <Input
                placeholder="What needs to be done today?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                size="large"
                style={{
                    borderRadius: '8px 0 0 8px',
                    fontSize: '16px',
                    height: '48px'
                }}
            />
            <Button
                type="primary"
                icon={<PlusOutlined/>}
                onClick={addNewTodoItem}
                size="large"
                style={{
                    height: '48px',
                    borderRadius: '0 8px 8px 0',
                    background: 'linear-gradient(135deg, #1890ff 0%, #722ed1 100%)',
                    border: 'none',
                    minWidth: '80px',
                    fontWeight: '600'
                }}
            >
                Add Task
            </Button>
        </Space.Compact>
    )
}

export default TodoGenerator;