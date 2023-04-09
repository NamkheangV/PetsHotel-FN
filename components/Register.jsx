import { UploadOutlined } from "@ant-design/icons";
import { Button, Input, Form, Upload } from "antd";
import styles from "@/styles/Register.module.css";

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
    <div className={styles.content}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Register</h1>
        <Form
          name="basic"
          labelCol={{
            span: 9,
          }}
          wrapperCol={{
            span: 18,
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

          <Form.Item label="Your Images" valuePropName="fileList">
            <Upload {...props} listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </div>
      <Button className={styles.button} block>
        Register
      </Button>
    </div>
  );
}
