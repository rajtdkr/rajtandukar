import {Breadcrumb, Button, Checkbox, Form, Input} from "antd";
import React, {useState} from "react";


function Content_app(){

    const [count, setCount] = useState(0);
    const [status, setStatus] = useState();


       const onFinish = () => {
        setCount(count+1)
        setStatus('Success')


      };

    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    setStatus('Failed')
    };


    return(  <div >


              <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{background: '#fff', padding: 24, minHeight: 580}}
                                 className="site-layout-content">
           <br/>

                                    <p>You submitted {count} times</p>
                                <p>{status}</p>
                            <Form
                                  name="basic"
                                  initialValues={{ remember: true }}
                                  onFinish={onFinish}
                                  onFinishFailed={onFinishFailed}
                                >
                                  <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                  >
                                    <Input />
                                  </Form.Item>

                                  <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                  >
                                    <Input.Password />
                                  </Form.Item>

                                  <Form.Item  name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                  </Form.Item>

                                  <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                      Submit
                                    </Button>
                                  </Form.Item>
                                </Form>
                            </div>
        </div>
        )

}
export default Content_app;