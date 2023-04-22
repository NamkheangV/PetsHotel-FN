import { Button, Input, Form } from "antd";
import styles from "@/styles/Register.module.css";
import {
  MailOutlined,
  UserOutlined,
  LockOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Register() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.h1}>Register</h1>
          <Form
            labelCol={{
              span: 12,
            }}
            wrapperCol={{
              span: 18,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input Email!",
                },
              ]}
            >
              <Input
                placeholder="123@gmail.com"
                prefix={<MailOutlined />}
                style={{ width: "20em" }}
              />
            </Form.Item>

            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input Username!",
                },
              ]}
            >
              <Input
                placeholder="Username"
                prefix={<UserOutlined />}
                style={{ width: "20em" }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input Password!",
                },
              ]}
            >
              <Input
                placeholder="Password"
                prefix={<LockOutlined />}
                style={{ width: "20em" }}
              />
            </Form.Item>

            <Form.Item
              name="conpass"
              rules={[
                {
                  required: true,
                  message: "Please input confirm password!",
                },
              ]}
            >
              <Input
                placeholder="Confirm Password"
                prefix={<CheckOutlined />}
                style={{ width: "20em" }}
              />
            </Form.Item>
          </Form>
          <Button className={styles.button} block>
            Register
          </Button>
        </div>
      </div>
    </>
  );
}
