import React from "react";
import {Menu} from "antd";
import {MailOutlined} from "@ant-design/icons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const {SubMenu} = Menu;

function Sider_app(){

    return(  <div >
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
                        <Menu.Item key='Location 1'>
                          Location 1
                        </Menu.Item>
                        <Menu.Item key='Location 2'>Location 2
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>



        </div>
        )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


export default Sider_app;