import {useParams} from "react-router";
import {useEffect, useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Card, Typography} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {todoInitialState, todoReducer} from "../reducers/todoReducer";
import {getTodos} from "../apis/apis";

function TodoItemDetail() {
    const {id} = useParams();
    console.log(id)
    const [todoItems, dispatch] = useReducer(todoReducer, todoInitialState);
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setLoading(true);
                const response = await getTodos();
                dispatch({ type: 'load_todos', todos: response.data });
            } catch (error) {
                console.error('Error fetching todos:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTodos();
    }, []);

    useEffect(() => {
        if (todoItems.length > 0 && id) {
            // Convert id to number for comparison if needed, or use string comparison
            const targetTodo = todoItems.find(item => item.id.toString() === id.toString());
            console.log(targetTodo)
            setTodo(targetTodo);
        }
    }, [id, todoItems]);

    const handleGoBack = () => {
        navigate("/todos")
    }

    if (loading) {
        return (
            <Card title="Todo details">
                <div>Loading...</div>
            </Card>
        );
    }

    if (!todo) {
        return (
            <Card
                title="Todo details"
                extra={
                    <Button type="primary" onClick={handleGoBack} icon={<ArrowLeftOutlined/>}> Back</Button>
                }
            >
                <div>Todo not found</div>
            </Card>
        );
    }

    return (
        <Card
            title="Todo details"
            extra={
                <Button type = "primary" onClick={handleGoBack} icon = {<ArrowLeftOutlined/>}> Back</Button>
            }
        >
            <div className="todo-detail">
                <Typography.Title level={4}>ID: {todo.id}</Typography.Title>
                <Typography.Paragraph>
                    <strong>Text:</strong> {todo.text}
                </Typography.Paragraph>
                <Typography.Paragraph>
                    <strong>Status:</strong> {todo.done ? "Completed" : "Active"}
                </Typography.Paragraph>
            </div>
        </Card>
    )
}

export default TodoItemDetail;