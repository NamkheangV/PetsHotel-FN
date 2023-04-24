import {
  Form,
  Input,
  Select,
  Radio,
  DatePicker,
  InputNumber,
  Upload,
  Row,
  Col,
  message,
} from "antd";
import styles from "@/styles/Booked.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const { RangePicker } = DatePicker;
const props = {
  beforeUpload: (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error(`${file.name} IS NOT FILE IMAGE!`);
    }
    return isJpgOrPng || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

export default function AdInFo() {
  const PetImage = [
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "/ProPic.png",
    },
  ];
  return (
    <div className={styles.container}>
      <Form size="large" labelCol={{ span: 8 }}>
        <Row gutter={100}>
          <Col span={12}>
            <Form.Item label="Firstname">
              <Input defaultValue={"Suchanart"} disabled />
            </Form.Item>

            <Form.Item label="Contact">
              <Input defaultValue={"094-358-6412"} disabled />
            </Form.Item>

            <Form.Item label="Breed">
              <Radio.Group defaultValue={"dog"} disabled>
                <Radio value="dog"> Dog </Radio>
                <Radio value="cat"> Cat </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Room Type">
              <Select defaultValue={"1"} disabled>
                <Select.Option value="1">The Standart</Select.Option>
                <Select.Option value="2">The Deluxe</Select.Option>
                <Select.Option value="3">The Suite</Select.Option>
                <Select.Option value="4">The Condo (Cat only)</Select.Option>
                <Select.Option value="5">
                  The Suite Condo (Cat only)
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Right */}
          <Col span={12}>
            <Form.Item label="Lastname">
              <Input defaultValue={"Khumbungkhla"} disabled />
            </Form.Item>

            <Form.Item label="Pet(s)">
              <InputNumber defaultValue={"1"} min={1} max={3} disabled />
            </Form.Item>

            <Form.Item label="Pet name">
              <Input defaultValue={"Moon, Sunshine, Pepermint"} disabled />
            </Form.Item>

            <Form.Item label="Check IN-OUT">
              <RangePicker />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Form.Item label="Pet Image" valuePropName="PetImage">
        <Upload
          {...props}
          defaultFileList={PetImage}
          listType="picture-card"
          maxCount={3}
          disabled
        >
          <div>
            <PlusOutlined />
            <div>Upload</div>
          </div>
        </Upload>
      </Form.Item>
    </div>
  );
}
