import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Navbar } from './Layout/Navbar';
import { Layout, Menu } from 'antd';
import { UserOutlined, HomeOutlined, NotificationOutlined } from '@ant-design/icons';
import { Route, Link } from "react-router-dom";
import { SignIn } from './Auth/SignIn';
import { SignUp } from './Auth/SignUp';
import Homepage from './Homepage/Homepage';
import AddTodo from './Homepage/AddTodo';

const { SubMenu } = Menu;
const { Sider } = Layout;
const { Content } = Layout;

function Sidebar() {
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


function App() {
  return (
    <Layout>
      <Router>
        <Navbar />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{ padding: 24, margin: 0, minHeight: 280, }}
            >
              <Switch>
                <Route path="/todo/add">
                  <AddTodo />
                </Route>
                <Route path="/sign-in">
                  <SignIn />
                </Route>
                <Route path="/sign-up">
                  <SignUp />
                </Route>
                <Route path="/">
                  <Homepage />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Layout>
  );
}

export default App;
