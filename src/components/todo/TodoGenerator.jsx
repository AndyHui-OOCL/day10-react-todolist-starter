import {useContext, useState} from "react";
import {TodoContext} from "../../contexts/TodoContext";
import {addTodos} from "../../apis/apis";
import {Button, Card, Input, message, Space} from "antd";
import {PlusOutlined} from "@ant-design/icons";

function TodoGenerator() {
    const {dispatch} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");

    function addNewTodoItem() {
        if (inputValue.trim()) {
            addTodos({text: inputValue, done: false}).then((response) => {
                dispatch({type: "add_todo", todo: response.data})
                message.success("Todo added successfully!");
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                }
                message.error("Failed to add todo!")
            })
            setInputValue("");
        }
    }

    return (
        <Card
            className="todo-generator"
        >
            <Space.Compact style={{width: '100%', display: 'flex'}}>
                <Input
                    placeholder="What needs to be done?"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                    type="primary"
                    icon={<PlusOutlined/>}
                    onClick={addNewTodoItem}
                    style={{
                        height: '40px',
                        borderRadius: '0 8px 8px 0',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        border: 'none',
                        minWidth: '60px'
                    }}
                >
                    Add
                </Button>
            </Space.Compact>
        </Card>
    )
}

export default TodoGenerator;