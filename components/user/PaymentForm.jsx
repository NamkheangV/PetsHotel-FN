import { Form, Upload, Row, Col, Image, Divider, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styles from "@/styles/Booking.module.css";

const fileList = [];
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

export default function PaymForm() {
  return (
    <div className={styles.container2}>
      <Row gutter={50}>
        <Col span={11} style={{ alignItems: "center", backgroundColor: "red" }}>
          <Image src="QR.jpg" width={300} className={styles.img} />
        </Col>

        <Col span={2}>
          <Divider type="vertical" style={{ height: "100%" }} />
        </Col>

        <Col span={11}>
          <Upload {...props} listType="picture" maxCount={1}>
            <Button icon={<UploadOutlined />}>Upload Your Image</Button>
          </Upload>
        </Col>
      </Row>
    </div>
  );
}
