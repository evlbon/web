import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Homepage } from './Homepage/Homepage';
import { SignIn } from './Auth/SIgnIn';
import { SignUp } from './Auth/SignUp';
import { Navbar } from './Layout/Navbar';
import { Sidebar } from './Layout/Sidebar';

const { Content } = Layout;


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
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path="/">
                  <Homepage />
                </Route>
                <Route path="/sign-in">
                  <SignIn />
                </Route>
                <Route path="sign-up">
                  <SignUp />
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
