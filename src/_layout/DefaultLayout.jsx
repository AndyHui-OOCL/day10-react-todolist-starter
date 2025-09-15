import {Layout, Menu} from 'antd';
import {useState} from "react";
import {NavLink, Outlet} from "react-router";
import {HomeOutlined, InfoCircleOutlined, UnorderedListOutlined} from "@ant-design/icons";

const {Header, Footer, Sider, Content} = Layout;

const items = [
    {
        label: <NavLink to={'/'}>Home</NavLink>,
        key: 'Home',
    },
    {
        label: <NavLink to={'/todos'}>Todo List</NavLink>,
        key: 'Todo List',
    },
    {
        label: <NavLink to={'/about'}>About</NavLink>,
        key: 'About',
    }
];

export function DefaultLayout() {
    const [current, setCurrent] = useState('');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Layout>
        <Header>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
        </Header>
        <Content>
            <Outlet></Outlet>
        </Content>
        <Footer>
            Copyright
        </Footer>
    </Layout>
}