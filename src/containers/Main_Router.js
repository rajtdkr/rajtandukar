import React from "react";
import { Layout } from "antd";
import Header_app from "./Header/Header_app";
import Sider_app from "./Sider/Sider_app";
import Login_Form from "./Login_avatar/Login_Form";
import Footer_app from "./Footer/Footer_app";
import { Switch, Route } from "react-router-dom";
import Login_Successful_app from "./Login_Successful";
import Calender_app from "./Home/Calender_app";
import GoogleMaps_app from "./Home/GoogleMaps_app";
import Home_app from "./Home/Home_app";
import ColorChanger from "./Home/ColorChanger";
import Resume_app from "./ResumePage/Resume_app";
const { Footer, Sider, Content, Header } = Layout;


function Main_Router() {
  return (
    <div className="App">
      <Layout className={'full-height'}>
        <Header><Header_app /></Header>
        <Layout><Sider><Sider_app /></Sider>
          <Layout>
            <Content
              className="site-layout-background"
              style={{
                color: 'red',
                padding: 50,
                height:'400px'
              }}
            >
              <Switch>
                <Route exact path="/">Home <Home_app/></Route>
                <Route path="/about">About <Calender_app/></Route>
                <Route path = "/location">Location <GoogleMaps_app/></Route>
                <Route path = "/colorchanger">Color Changer <ColorChanger/></Route>
                <Route path = "/resume">Resume <Resume_app/></Route>
                <Route path = "/loginSuccessul"><ColorChanger/></Route>
                <Route path="/dashboard"><Login_Form/></Route>
              </Switch>
            </Content>
            <Footer style={{ padding: 0 }}>
              <Footer_app />
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Main_Router;
