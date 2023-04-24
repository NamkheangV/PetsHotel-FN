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
import { PlusOutlined } from "@ant-design/icons";
import styles from "@/styles/Booking.module.css";

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

export default function InfoForm() {
  return (
    <div className={styles.container}>
      <Form size="large" labelCol={{ span: 8 }}>
        <Row gutter={100}>
          <Col span={12}>
            <Form.Item label="Firstname">
              <Input placeholder="Suchanart" />
            </Form.Item>

            <Form.Item label="Contact">
              <Input placeholder="091-234-5678" />
            </Form.Item>

            <Form.Item label="Breed">
              <Radio.Group>
                <Radio value="male"> Dog </Radio>
                <Radio value="female"> Cat </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Room Type">
              <Select placeholder="Select Room Type">
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
              <Input placeholder="Khumbungkhla" />
            </Form.Item>

            <Form.Item label="Pet(s)">
              <InputNumber placeholder="0" min={1} max={3} />
            </Form.Item>

            <Form.Item label="Pet name">
              <Input placeholder="Moon, Sunshine, Pepermint" />
            </Form.Item>

            <Form.Item label="Check IN-OUT">
              <RangePicker />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Form.Item label="Pet Image" valuePropName="fileList">
        <Upload {...props} listType="picture-card" maxCount={3}>
          <div>
            <PlusOutlined />
            <div>Upload</div>
          </div>
        </Upload>
      </Form.Item>
    </div>
  );
}
