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
  Card,
  Col,
  Row,
} from "antd";

const { Meta } = Card;
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
        <div>
          <h1 className={styles.h1}>ROOMS & SUITES</h1>
        </div>

        <Row gutter={20}>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Standart" description="Rooms for ......" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Standart" description="Rooms for ......" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Standart" description="Rooms for ......" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
