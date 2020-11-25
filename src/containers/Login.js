import React from "react";
import { Layout } from "antd";
import Header_app from "./Header_app";
import Sider_app from "./Sider_app";
import Content_app from "./Content_app";
import Footer_app from "./Footer_app";
import { Switch, Route } from "react-router-dom";
import Login_Successful_app from "./Login_Successful";
import Calender_app from "./Calender_app";
import GoogleMaps_app from "./GoogleMaps_app";
const { Footer, Sider, Content, Header } = Layout;

function Login() {
  return (
    <div className="App">
      <Layout className={'full-height'}>
        <Header>
          <Header_app />
        </Header>
        <Layout>
          <Sider>
            <Sider_app />
          </Sider>
          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 0,
                height:'400px',
              }}
            >
              <Switch>
                <Route exact path="/">
                  Home
                </Route>
                <Route path="/about">About <Calender_app/></Route>
                <Route path = "/location">Location <GoogleMaps_app/></Route>

                 <Route path = "/loginSuccessul"><Login_Successful_app/></Route>

                <Route path="/dashboard">
                  <Content_app />
                </Route>
              </Switch>
            </Content>
            <Footer style={{ padding: 50 }}>
              <Footer_app />
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Login;
