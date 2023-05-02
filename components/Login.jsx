import styles from "@/styles/Login.module.css";
import { GoogleLogin } from "react-google-login";
import { Button, Input, Form, Divider, notification } from "antd";

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
            name="username"
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
            name="password"
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

          <Form.Item>
            <Button
              htmlType="submit"
              className={styles.button}
              block
              style={{ width: "20em" }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <Divider plain>or Login with</Divider>
        <GoogleLogin buttonText="Login with Google" />
      </div>
    </>
  );
}
