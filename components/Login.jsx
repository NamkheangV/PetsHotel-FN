import styles from "@/styles/Login.module.css";
import { GoogleLogin } from "react-google-login";
import { Button, Input, Form, Divider, message } from "antd";
import React, { useState, useContext } from "react";
import useAxios from "../lib/useAxios";
import { GlobalContext } from "@/lib/AppContext";
import axios from "axios";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form] = Form.useForm();
  const { setUser } = useContext(GlobalContext);

  const onFinish = (values) => {
    // const { username, password } = values;
    // handleLogin(username, password);
    setUser({ username: "admin", role: "admin"});
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = async (user_id, user_pass) => {
    setLoading(true);
    try {
      const res = await useAxios.post("/auth", {
        user_id,
        user_pass,
      });
      message.open({ type: "success", content: "Logged in successfully! 🎉" });
      form.resetFields();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        if (status === 404) {
          setError("This username does not exist! 🤔");
          message.open({
            type: "error",
            content: "This username does not exist! 😱",
          });
        } else if (status === 401) {
          setError("Incorrect password");
          message.open({ type: "error", content: "Incorrect password! 😱" });
        } else setError("Something went wrong");
      } else setError("Something went wrong.");
    }
  };
  return (
    <>
      <GlobalContext.Provider>
        <div className={styles.container}>
          <h1 className={styles.h1}>Login</h1>
          <Form
            form={form}
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
                style={{ width: "22em" }}
              >
                {loading ? "Loading..." : "Login"}
              </Button>
            </Form.Item>
          </Form>
          <Divider plain>or Login with</Divider>
          <GoogleLogin buttonText="Login with Google" />
        </div>
      </GlobalContext.Provider>
    </>
  );
}
