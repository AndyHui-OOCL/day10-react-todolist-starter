import {TodoContext} from "../../contexts/TodoContext";
import "./style/TodoList.css"
import {useEffect, useReducer} from "react";
import TodoItem from "./TodoItem";
import TodoGenerator from "./TodoGenerator";
import {todoInitialState, todoReducer} from "../../reducers/todoReducer";
import {getTodos} from "../../apis/apis";
import {message, Typography, Empty, Divider, Row, Col, Card, Space} from "antd";
import {CheckCircleOutlined} from "@ant-design/icons";

const {Title} = Typography;

const TodoList = () => {
    const [todoItems, dispatch] = useReducer(todoReducer, todoInitialState);
    const value = {todoItems, dispatch};

    useEffect(() => {
        getTodos().then(response => {
            dispatch({type: 'load_todos', todos: response.data})
            message.success("Todos loaded successfully!");
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            }
            message.error("Failed to load todos!")
        })
    }, []);

    const activeTodos = todoItems.filter(({done}) => !done);

    return (
        <TodoContext.Provider value={value}>
            <Row justify="center" style={{padding: '20px'}}>
                <Col xs={24} sm={20} md={16} lg={12} xl={10}>
                    <Card
                        className="todo-list-card"
                        bordered={false}
                        style={{
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            borderRadius: '12px'
                        }}
                    >
                        <Space direction="vertical" size="large" style={{width: '100%'}}>
                            <div style={{textAlign: 'center'}}>
                                <Title level={2} style={{marginBottom: '8px', color: '#1890ff'}}>
                                    <CheckCircleOutlined style={{marginRight: '8px'}} />
                                    Active Tasks
                                </Title>
                                <Typography.Text type="secondary">
                                    {activeTodos.length} task{activeTodos.length !== 1 ? 's' : ''} remaining
                                </Typography.Text>
                            </div>

                            <Divider style={{margin: '16px 0'}} />

                            <TodoGenerator/>

                            {activeTodos.length <= 0 ? (
                                <Empty
                                    description="No active tasks"
                                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                                    style={{margin: '40px 0'}}
                                >
                                    <Typography.Text type="secondary">
                                        Add your first task above to get started!
                                    </Typography.Text>
                                </Empty>
                            ) : (
                                <Space direction="vertical" size="small" style={{width: '100%'}}>
                                    {activeTodos.map(({id, text, done}) => (
                                        <TodoItem
                                            key={id}
                                            id={id}
                                            text={text}
                                            done={done}
                                        />
                                    ))}
                                </Space>
                            )}
                        </Space>
                    </Card>
                </Col>
            </Row>
        </TodoContext.Provider>

    );
}

export default TodoList