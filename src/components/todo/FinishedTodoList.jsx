import {useEffect, useReducer} from "react";
import {todoInitialState, todoReducer} from "../../reducers/todoReducer";
import {getTodos} from "../../apis/apis";
import {message, Typography, Empty, Divider, Row, Col, Card, Space} from "antd";
import {TodoContext} from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";
import "./style/TodoList.css";
import {CheckCircleOutlined} from "@ant-design/icons";

const {Title} = Typography;

const FinishedTodoList = () => {
    const [todoItems, dispatch] = useReducer(todoReducer, todoInitialState);
    const value = {todoItems, dispatch};

    useEffect(() => {
        getTodos().then(response => {
            dispatch({type: 'load_todos', todos: response.data})
            message.success("Completed todos loaded successfully!");
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            }
            message.error("Failed to load completed todos!")
        })
    }, []);

    const completedTodos = todoItems.filter(({done}) => done);

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
                                <Title level={2} style={{marginBottom: '8px', color: '#52c41a'}}>
                                    <CheckCircleOutlined style={{marginRight: '8px'}} />
                                    Completed Tasks
                                </Title>
                                <Typography.Text type="secondary">
                                    {completedTodos.length} task{completedTodos.length !== 1 ? 's' : ''} completed
                                </Typography.Text>
                            </div>

                            <Divider style={{margin: '16px 0'}} />

                            {completedTodos.length <= 0 ? (
                                <Empty
                                    description="No completed tasks yet"
                                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                                    style={{margin: '40px 0'}}
                                >
                                    <Typography.Text type="secondary">
                                        Complete some tasks to see them here!
                                    </Typography.Text>
                                </Empty>
                            ) : (
                                <Space direction="vertical" size="small" style={{width: '100%'}}>
                                    {completedTodos.map(({id, text, done}) => (
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

export default FinishedTodoList;
