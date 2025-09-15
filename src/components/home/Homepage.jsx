import {Card, Divider, Space, Typography} from "antd";
import {CheckCircleOutlined, DeleteOutlined, EditOutlined, PlusOutlined} from "@ant-design/icons";
import Paragraph from "antd/es/skeleton/Paragraph";
import Title from "antd/es/skeleton/Title";

const {Text} = Typography;

function Homepage() {
    return (
        <div style={{padding: '40px 20px', maxWidth: '800px', margin: '0 auto'}}>
            <Space direction="vertical" size="large" style={{width: '100%'}}>
                <div style={{textAlign: 'center'}}>
                    <Title level={1}>
                        <CheckCircleOutlined style={{color: '#52c41a', marginRight: '16px'}}/>
                        Todo List Application
                    </Title>
                    <Paragraph style={{fontSize: '18px', color: '#666'}}>
                        A simple and efficient way to manage your daily tasks
                    </Paragraph>
                </div>

                <Card
                    title="Welcome to Your Personal Todo Manager"
                    style={{marginTop: '32px'}}
                >
                    <Paragraph style={{fontSize: '16px', lineHeight: '1.6'}}>
                        This application helps you organize and manage your tasks efficiently.
                        You can perform all CRUD operations (Create, Read, Update, Delete) on your todo items.
                    </Paragraph>

                    <Divider/>

                    <Title level={3}>Features:</Title>
                    <Space direction="vertical" size="middle" style={{width: '100%'}}>
                        <div>
                            <Text strong>
                                <PlusOutlined style={{color: '#1890ff', marginRight: '8px'}}/>
                                Create New Todos
                            </Text>
                            <div style={{marginLeft: '24px', color: '#666'}}>
                                Add new tasks to your list with detailed descriptions
                            </div>
                        </div>

                        <div>
                            <Text strong>
                                <CheckCircleOutlined style={{color: '#52c41a', marginRight: '8px'}}/>
                                View & Track Progress
                            </Text>
                            <div style={{marginLeft: '24px', color: '#666'}}>
                                See all your tasks and track completion status
                            </div>
                        </div>

                        <div>
                            <Text strong>
                                <EditOutlined style={{color: '#fa8c16', marginRight: '8px'}}/>
                                Update Tasks
                            </Text>
                            <div style={{marginLeft: '24px', color: '#666'}}>
                                Modify task details and mark items as complete
                            </div>
                        </div>

                        <div>
                            <Text>
                                <DeleteOutlined style={{color: '#ff4d4f', marginRight: '8px'}}/>
                                Delete Completed Tasks
                            </Text>
                            <div style={{marginLeft: '24px', color: '#666'}}>
                                Remove tasks that are no longer needed
                            </div>
                        </div>
                    </Space>
                </Card>
            </Space>
        </div>
    );
}

export default Homepage;
