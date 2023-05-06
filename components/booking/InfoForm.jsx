import {
  Form,
  Input,
  Select,
  Radio,
  DatePicker,
  InputNumber,
  Row,
  Col,
  message,
  Button,
  Tooltip
} from "antd";
import styles from "@/styles/Booking.module.css";
import DownloadOutlined from "@ant-design/icons/DownloadOutlined";

const { RangePicker } = DatePicker;

export default function InfoForm() {
  const onFinish = (values) => {};

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <Form
        size="large"
        labelCol={{ span: 8 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row style={{ justifyContent: "end" }}>
          <Form.Item>
            <Tooltip title="Save information">
              <Button htmlType="submit" shape="circle">
                <DownloadOutlined />
              </Button>
            </Tooltip>
          </Form.Item>
        </Row>

        <Row gutter={100}>
          <Col span={12}>
            <Form.Item label="Firstname" name="cus_fname">
              <Input placeholder="Suchanart" />
            </Form.Item>

            <Form.Item label="Contact" name="cus_contact">
              <Input placeholder="091-234-5678" />
            </Form.Item>

            <Form.Item label="Breed" name="breed">
              <Radio.Group>
                <Radio value="male"> Dog </Radio>
                <Radio value="female"> Cat </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Room Type" name="roomtype">
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
            <Form.Item label="Lastname" name="cus_lname">
              <Input placeholder="Khumbungkhla" />
            </Form.Item>

            <Form.Item label="Pet(s)" name="petamount ">
              <InputNumber placeholder="0" min={1} max={3} />
            </Form.Item>

            <Form.Item label="Pet name" name="pet_name">
              <Input placeholder="Moon, Sunshine, Pepermint" />
            </Form.Item>

            <Form.Item label="Check IN-OUT" name="checkdate">
              <RangePicker />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}