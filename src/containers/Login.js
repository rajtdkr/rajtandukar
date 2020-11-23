import React from "react";
import { Layout} from "antd";
import Header_app from "./Header_app";
import Sider_app from "./Sider_app";
import Content_app from "./Content_app";
import Footer_app from "./Footer_app";
const { Footer, Sider, Content, Header} = Layout;

function Login(){
    return(  <div className="App">
            <Layout>
                <Header><Header_app/></Header>
                <Layout>
                    <Sider><Sider_app/></Sider>
                    <Layout>
                        <Content className="site-layout-background"
                                 style={{
                                     padding: 0,
                                     margin: 200,
                                     minHeight: 10,
                                 }}>
                        <Content_app/>
                        </Content>
                        <Footer style = {{padding : 50 }}><Footer_app/></Footer>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}




export default Login;