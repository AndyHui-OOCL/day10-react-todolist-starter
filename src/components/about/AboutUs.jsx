import {Card, Divider, Space, Typography} from 'antd';
import {CodeOutlined, RocketOutlined, TeamOutlined} from '@ant-design/icons';

const {Title, Paragraph, Text} = Typography;

function AboutUs() {
    return (
        <div style={{
            padding: '40px',
            background: '#f5f5f5',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Card
                style={{
                    maxWidth: 600,
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
            >
                <Space direction="vertical" size="large" style={{width: '100%'}}>
                    <div style={{textAlign: 'center'}}>
                        <RocketOutlined style={{fontSize: '48px', color: '#1890ff', marginBottom: '16px'}}/>
                        <Title level={2} style={{margin: 0, color: '#262626'}}>
                            About Us
                        </Title>
                    </div>

                    <Divider/>

                    <div style={{textAlign: 'center'}}>
                        <Title level={3} style={{color: '#1890ff', marginBottom: '24px'}}>
                            <TeamOutlined style={{marginRight: '8px'}}/>
                            Thoughtworks Bootcamp 2025
                        </Title>
                        <Paragraph style={{fontSize: '16px', lineHeight: '1.8', color: '#595959'}}>
                            <CodeOutlined style={{marginRight: '8px', color: '#1890ff'}}/>
                            Built with React, Ant Design, and modern JavaScript practices.
                        </Paragraph>

                        <div style={{
                            background: '#f0f9ff',
                            padding: '20px',
                            borderRadius: '8px',
                            border: '1px solid #bae7ff',
                            marginTop: '24px'
                        }}>
                            <Text style={{color: '#0958d9', fontSize: '14px', fontWeight: '500'}}>
                                🚀 Learning • Growing • Building Amazing Things
                            </Text>
                        </div>
                    </div>
                </Space>
            </Card>
        </div>
    );
}

export default AboutUs;
