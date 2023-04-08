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

export default function Room() {
  return (
    <div id="roomtest">
      <header>
        <title>Rooms & Suites | Pets Hotel</title>
      </header>

      <div className={styles.page}>
        <div>
          <h1 className={styles.h1}>ROOMS & SUITES</h1>
        </div>

        <div className=""></div>
        <Row gutter={80} style={{}}>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 400,
                height: 400,
              }}
              cover={<img alt="standart" src="/origi05.jpg" />}
            >
              <Meta title="The Standart" description="Rooms for ......" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 400,
                height: 400,
              }}
              cover={<img alt="deluxe" src="/origi04.jpg" />}
            >
              <Meta title="The Deluxe" description="Rooms for ......" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 400,
                height: 400,
              }}
              cover={<img alt="condo" src="/origi03.jpg" />}
            >
              <Meta
                title="The Condo (Cat Only)"
                description="Rooms for ......"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
