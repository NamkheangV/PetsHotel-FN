import styles from "@/styles/Rooms.module.css";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  message,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
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

export default function Rooms() {
  return (
    <div>
      <header>
        <title>Rooms & Suites | Pets Hotel</title>
      </header>

      <div className={styles.page}>
        <div className={styles.container}>
          <Form
            className={styles.form}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            <Form.Item label="Your name">
              <Input />
            </Form.Item>
            <Form.Item label="Contact">
              <Input />
            </Form.Item>
            <Form.Item label="Pet name">
              <Input />
            </Form.Item>

            <Form.Item label="Type">
              <Select>
                <Select.Option value="1">Cat</Select.Option>
                <Select.Option value="2">Dog</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Gender">
              <Radio.Group>
                <Radio value="male"> Male </Radio>
                <Radio value="female"> Female </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Check IN-OUT">
              <RangePicker />
            </Form.Item>

            <Form.Item label="Pet(s)">
              <InputNumber />
            </Form.Item>

            <Form.Item label="Other">
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item label="Upload" valuePropName="fileList">
              <Upload {...props} listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Pet Picture
                  </div>
                </div>
              </Upload>
            </Form.Item>
          </Form>

          <Button className={styles.button} block>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
