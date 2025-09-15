import {Divider, Layout, Menu, Space, Typography} from 'antd';
import {useEffect, useState} from "react";
import {NavLink, Outlet, useLocation} from "react-router";
import {CheckCircleOutlined, HomeOutlined, InfoCircleOutlined, UnorderedListOutlined} from "@ant-design/icons";
import "./DefaultLayout.css"

const {Header, Footer, Content} = Layout;
const {Title} = Typography;


const items = [
    {
        label: <NavLink to={'/'}>Home</NavLink>,
        key: 'Home',
        icon: <HomeOutlined/>
    },
    {
        label: <NavLink to={'/todos'}>Todo List</NavLink>,
        key: 'Todos',
        icon: <UnorderedListOutlined/>
    },
    {
        label: <NavLink to={'/finished-todos'}>Finished Todos</NavLink>,
        key: 'Finished Todos',
        icon: <CheckCircleOutlined/>
    },
    {
        label: <NavLink to={'/about'}>About</NavLink>,
        key: 'About',
        icon: <InfoCircleOutlined/>
    }
];

export function DefaultLayout() {
    const [current, setCurrent] = useState('');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') setCurrent('Home');
        else if (path === '/todos') setCurrent('Todos');
        else if (path === '/finished-todos') setCurrent('Finished Todos');
        else if (path === '/about') setCurrent('About');
    }, [location]);

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <Layout className="default-layout">
            <Header className='default-header'>
                <div>
                    <Title level={3} className="default-header-title">
                        Todo Manager
                    </Title>
                    <Menu
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                        items={items}
                        className="default-menu"
                    />
                </div>
            </Header>

            <Content className="default-content">
                <div className="default-content-wrapper">
                    <Outlet/>
                </div>
            </Content>

            <Footer className="default-footer">
                <Space>
                    <span>© 2025 Todo Manager</span>
                    <Divider type="vertical"/>
                    <span>Built with React & Ant Design</span>
                </Space>
            </Footer>
        </Layout>
    );
}