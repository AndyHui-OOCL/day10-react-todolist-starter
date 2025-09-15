import {useParams} from "react-router";
import {useEffect, useReducer, useState} from "react";
import {Card, Spin, Typography} from "antd";
import {CheckCircleOutlined, ClockCircleOutlined} from "@ant-design/icons";
import {todoInitialState, todoReducer} from "../../reducers/todoReducer";
import {getTodos} from "../../apis/apis";
import "./style/TodoItemDetail.css";

function TodoItemDetail() {
    const {id} = useParams();
    const [todoItems, dispatch] = useReducer(todoReducer, todoInitialState);
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setLoading(true);
                const response = await getTodos();
                dispatch({type: 'load_todos', todos: response.data});
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
            const targetTodo = todoItems.find(item => item.id.toString() === id.toString());
            setTodo(targetTodo);
        }
    }, [id, todoItems]);

    if (loading) {
        return (
            <Card className="todo-detail-card" title="Todo Details">
                <div className="todo-detail-loading">
                    <Spin size="large"/>
                    <Typography.Text>Loading todo details...</Typography.Text>
                </div>
            </Card>
        );
    }

    if (!todo) {
        return (
            <Card className="todo-detail-card" title="Todo Details">
                <div className="todo-detail-content">
                    <Typography.Text type="warning">
                        Todo with ID "{id}" not found.
                    </Typography.Text>
                </div>
            </Card>
        );
    }

    return (
        <Card
            className="todo-detail-card"
            title="Todo Details"
        >
            <div className="todo-detail-content">
                <div className="todo-detail-field todo-id-field">
                    <div className="todo-field-value">{todo.id}</div>
                </div>

                <div className="todo-detail-field todo-text-field">
                    <span className="todo-field-label">Description</span>
                    <div className="todo-field-value">{todo.text}</div>
                </div>

                <div className="todo-detail-field todo-status-field">
                    <span className="todo-field-label">Status</span>
                    <div className="todo-field-value">
                        {todo.done ? (
                            <>
                                <CheckCircleOutlined style={{color: '#52c41a'}}/>
                                <span className="status-badge status-completed">Completed</span>
                            </>
                        ) : (
                            <>
                                <ClockCircleOutlined style={{color: '#fa8c16'}}/>
                                <span className="status-badge status-active">Active</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default TodoItemDetail;