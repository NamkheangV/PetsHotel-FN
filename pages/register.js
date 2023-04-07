import styles from "@/styles/register.module.css";
import Link from "next/link";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Input, Form, Upload } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const props = {
  beforeUpload: (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error(`${file.name} is not a file image!`);
    }
    return isJpgOrPng || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

export default function Register() {
  return (
    <div>
      <header>
        <title>Register | Pets Hotel</title>
      </header>

      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.h1}>Register</h1>

          <Form
            className={styles.form}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 18,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input Username!",
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
                  message: "Please input Password!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* <Form.Item
              label="Confirm"
              name="confpass"
              rules={[
                {
                  required: true,
                  message: "Please input Confirm Pass!",
                },
              ]}
            >
              <Input />
            </Form.Item> */}

            <Form.Item label="Upload" valuePropName="fileList">
              <Upload {...props} listType="picture" maxCount={1}>
                <Button icon={<UploadOutlined />}>Your Image</Button>
              </Upload>
            </Form.Item>

            <Button className={styles.button} block>
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
