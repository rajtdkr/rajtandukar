import React from "react";
import {Menu} from "antd";
import {
  Link
} from "react-router-dom";
function Sider_app(){
    return(
        <Menu mode={"inline"}>
            <Menu.Item key="Home">
            <Link to="/" >Home</Link>
            </Menu.Item>

              <Menu.Item key="Location">
            <Link to="/location" >Location</Link>
            </Menu.Item>

            <Menu.Item key="About">
            <Link to="/about" >About</Link>
            </Menu.Item>
        </Menu>
        )
}
export default Sider_app;