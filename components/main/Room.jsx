import styles from "@/styles/Room.module.css";
import { Card, Col, Row } from "antd";

const { Meta } = Card;

export default function Room() {
  return (
    <div id="room" className={styles.page}>
      <h1 className={styles.h1}>ROOMS & SUITES</h1>

      <Row gutter={80} className={styles.row}>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 400,
              height: 400,
            }}
            cover={<img alt="standart" src="/Hero01.jpg" />}
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
            cover={<img alt="deluxe" src="/Hero02.jpg" />}
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
            cover={<img alt="condo" src="/Hero03.jpg" />}
          >
            <Meta title="The Suite" description="Rooms for ......" />
          </Card>
        </Col>
      </Row>

      <Row gutter={80} className={styles.row}>
        <Col span={12}>
          <Card
            hoverable
            style={{
              width: 400,
              height: 400,
            }}
            cover={<img alt="condo" src="/Hero04.jpg" />}
          >
            <Meta title="The Condo" description="Rooms for ......" />
          </Card>
        </Col>

        <Col span={12}>
          <Card
            hoverable
            style={{
              width: 400,
              height: 400,
            }}
            cover={<img alt="delcon" src="/Hero05.jpg" />}
          >
            <Meta title="The Deluxe Condo" description="Rooms for ......" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
