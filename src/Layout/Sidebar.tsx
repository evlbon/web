import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, HomeOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

export function Sidebar() {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Account">
                    <Menu.Item key="1">
                        <Link to="/">All todos</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/todo/add">
                            Add todo
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        My Services
                    </Menu.Item>
                    <Menu.Item key="4">Limitations</Menu.Item>
                    <Menu.Item key="5">Settings</Menu.Item>
                    <Menu.Item key="6">Sign out</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<HomeOutlined />} title="Apartments">
                    <Menu.Item key="7">Recommendations</Menu.Item>
                    <Menu.Item key="8">All apartments</Menu.Item>
                    <Menu.Item key="9">All tours</Menu.Item>
                    <Menu.Item key="10">Settings</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Notifications">
                    <Menu.Item key="11">All notifications</Menu.Item>
                    <Menu.Item key="12">Settings</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}