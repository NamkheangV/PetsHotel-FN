import Head from "next/head";
import styles from "@/styles/Login.module.css";
import Link from "next/link";
import { Button, Input, Form } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login | Pets Hotel</title>
      </Head>

      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.h1}>Login</h1>

          <Form
            className={styles.form}
            name="basic"
            labelCol={{
              span: 7,
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

            <Button className={styles.button} block>
              Login
            </Button>
          </Form>

          <div>
            <a>Don't have an account? </a>
            <Link href="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
