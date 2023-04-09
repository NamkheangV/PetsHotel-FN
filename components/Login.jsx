import { useState } from "react";
import styles from "@/styles/Login.module.css";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Button, Input, Form, Divider } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>Login</h1>
        <Form
          name="basic"
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
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input password!",
              },
            ]}
          >
            <Input.Password />
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
