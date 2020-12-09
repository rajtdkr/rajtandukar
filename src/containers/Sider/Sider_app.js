import React from "react";
import {Menu} from "antd";
import {
  Link
} from "react-router-dom";
import {
  HomeOutlined,
    VideoCameraOutlined,
    PictureOutlined,
    GlobalOutlined,
    EllipsisOutlined,
} from '@ant-design/icons';
function Sider_app(){
    return(
        <Menu mode={"inline"}>
            <Menu.Item key="Home">
            <Link to="/" > <HomeOutlined width = {'20px'}/> Home</Link>
            </Menu.Item>

              <Menu.Item key="Location">
            <Link to="/location" > <GlobalOutlined /> Location</Link>
            </Menu.Item>

            <Menu.Item key="About">
            <Link to="/about" > <EllipsisOutlined /> About</Link>
            </Menu.Item>


            <Menu.Item key="ColorChanger">
            <Link to="/colorchanger" > <VideoCameraOutlined /> ColorChanger</Link>
            </Menu.Item>


            <Menu.Item key="Resumeapp">
            <Link to="/resume" > <PictureOutlined /> Spiderman</Link>
            </Menu.Item>
        </Menu>
        )
}
export default Sider_app;