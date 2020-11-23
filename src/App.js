import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Layout, Breadcrumb} from 'antd';
import {Avatar} from 'antd';
import {MailOutlined, UserOutlined} from '@ant-design/icons';
import Title from "antd/es/skeleton/Title";
import {Menu, Button} from 'antd';

const {SubMenu} = Menu;


const {Header, Footer, Sider, Content} = Layout;


function App() {
    return (
        <div className="App">
            <Layout>
                <Header style={{padding: 150}}>
                    <h1 style={{float: "left", color: "White"}} level={3}> Laconik</h1>
                    <Avatar style={{float: "right"}} src='./Chrome_Logo.png'/>
                </Header>
                <Layout>
                    <Sider>
                        <Menu mode={"inline"}>
                            <Menu.Item key="Dashboard">
                                Farm
                            </Menu.Item>
                            <SubMenu key="sub1"
                                     title={
                                         <span>
              <MailOutlined/>
              <span>Location List</span>
            </span>
                                     }>
                                <Menu.ItemGroup title='About US'>
                                    <Menu.Item key='Location 1'>Location 1</Menu.Item>

                                    <Menu.Item key='Location 2'>Location 2</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                        </Menu>
                        Sider</Sider>
                    <Layout>

                        <Content className="site-layout-background"
                                 style={{
                                     padding: 200,
                                     margin: 0,
                                     minHeight: 580,
                                 }}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{background: '#fff', padding: 24, minHeight: 580}}
                                 className="site-layout-content">Content
                            </div>
                        </Content>
                        <Footer style = {{padding : 50 }}>footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


export default App;
