import {useContext} from "react";
import {TodoContext} from "../../contexts/TodoContext";
import {updateTodoById} from "../../apis/apis";
import {message, Card, Checkbox, Typography, Space} from "antd";
import ModifyTodoTextButton from "./buttons/ModifyTodoTextButton";
import DeleteTodoButton from "./buttons/DeleteTodoButton";
import TodoDetailButton from "./buttons/TodoDetailButton";

const {Text} = Typography;

function TodoItem(props) {
    const {todoItems, dispatch} = useContext(TodoContext);


    function markedAsDone(id) {
        const targetTodo = todoItems.find(todo => todo.id === id);
        const updatedTodo = {...targetTodo, done: !targetTodo.done};
        updateTodoById(id, updatedTodo).then(() => {
            dispatch({type: "mark_as_done", id: id});
            message.success("Task status updated!");
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            }
            message.error("Failed to update task status!");
        });
    }

    return (
        <Card
            className="todo-item-card"
            size="small"
            hoverable
            style={{
                borderRadius: '8px',
                border: '1px solid #f0f0f0',
                marginBottom: '8px',
                transition: 'all 0.3s ease'
            }}
            bodyStyle={{padding: '12px 16px'}}
        >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', alignItems: 'center', flex: 1}}>
                    <Checkbox
                        checked={props.done}
                        onChange={() => markedAsDone(props.id)}
                        style={{marginRight: '12px'}}
                    />
                    <Text
                        style={{
                            flex: 1,
                            fontSize: '16px',
                            textDecoration: props.done ? 'line-through' : 'none',
                            opacity: props.done ? 0.6 : 1,
                            color: props.done ? '#8c8c8c' : '#262626'
                        }}
                    >
                        {(props.text !== "") ? props.text : " "}
                    </Text>
                </div>

                <Space size="small" className="todo-actions">
                    <TodoDetailButton id={props.id} />
                    <ModifyTodoTextButton id={props.id} />
                    <DeleteTodoButton id={props.id} />
                </Space>
            </div>
        </Card>
    )
}

export default TodoItem;