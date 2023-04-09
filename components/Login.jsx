import { useState } from "react";
import styles from "@/styles/Login.module.css";
import { GoogleLogin } from "react-google-login";
import { Button, Input, Form, Divider } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>Login</h1>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 18,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            id="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input username!",
              },
            ]}
          >
            <Input placeholder="user123" />
          </Form.Item>

          <Form.Item
            id="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input password!",
              },
            ]}
          >
            <Input.Password placeholder="abc123" />
          </Form.Item>
        </Form>

        <Button className={styles.button} block>
          Login
        </Button>
        <Divider plain>or Login with</Divider>
        <GoogleLogin buttonText="Login with Google" />
      </div>
    </>
  );
}
