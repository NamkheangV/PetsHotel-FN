import { Button, Input, Form, message, Spin } from "antd";
import styles from "@/styles/Register.module.css";
import {
  MailOutlined,
  UserOutlined,
  LockOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import useAxios from "../lib/useAxios";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { username, password, email, conpass } = values;
    if (password !== conpass) {
      setError("Passwords do not match");
      message.open({ type: "error", content: "Passwords do not match! 😥" });
      return;
    } else {
      handleRegister(username, password, email);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleRegister = async (user_id, user_pass, user_email) => {
    setLoading(true);
    try {
      const res = await useAxios.post("/users", {
        user_id,
        user_pass,
        user_email,
      });
      message.open({ type: "success", content: "Registered successfully! 😘" });
      form.resetFields();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        if (status === 409) {
          setError("This username is already taken");
          message.open({
            type: "error",
            content: "This username is already taken!  😱 ",
          });
        } else setError("Something went wrong");
      } else setError("Something went wrong.");
    }

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.h1}>Register</h1>
          <Form
            form={form}
            name="registerForm"
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
              <Input.Password
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
                  message: "Please input Confirm Pass!",
                },
              ]}
            >
              <Input.Password
                placeholder="Confirm Password"
                prefix={<CheckOutlined />}
                style={{ width: "20em" }}
              />
            </Form.Item>

            <Form.Item></Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className={styles.button}
                block
                onClick={handleRegister}
                style={{ width: "20em" }}
              >
                {loading ? <Spin /> : "Register"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
