import { Divider, Row, Col, Typography, Image } from "antd";
import styles from "@/styles/Booking.module.css";

const { Text } = Typography;

export default function ReceiptForm() {
  return (
    <div className={styles.receipt}>
      <Row>
        <Col span={12}>
          <h2>Customer Name </h2>
          <Text>RECEIPT ID : #0012354</Text>
        </Col>
        <Col span={6}>
          <Text>CHECK-IN : 26 - 04 - 2003</Text>
        </Col>
        <Col span={6}>
          <Text>CHECK-OUT : 26 - 04 - 2003</Text>
        </Col>
      </Row>

      <Divider />

      <div className={styles.detail}>
        {/* Header */}
        <Row style={{ fontWeight: "600" }}>
          <Col span={6} className={styles.col}>
            <Text style={{ color: "grey" }}>ROOM TYPE</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text style={{ color: "grey" }}>DAYS</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text style={{ color: "grey" }}>PRICE / DAY</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text style={{ color: "grey" }}>AMOUNT</Text>
          </Col>
        </Row>

        {/* Your Booking */}
        <Row style={{ marginTop: "40px" }}>
          <Col span={6} className={styles.col}>
            <Text>Standard</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text>6</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text>600</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text>500 Baht</Text>
          </Col>
        </Row>

        <Divider style={{ widht: "50%" }} />

        {/* Subtotal */}
        <Row style={{ marginTop: "35px" }}>
          <Col span={12}></Col>
          <Col span={6}>
            <Text style={{ color: "grey" }}>SUBTOTAL</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text>500 Baht</Text>
          </Col>
        </Row>

        {/* Discount */}
        <Row style={{ marginTop: "20px" }}>
          <Col span={12}></Col>
          <Col span={6}>
            <Text style={{ color: "grey" }}>DISCOUNT 10%</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text>50 Baht</Text>
          </Col>
        </Row>

        <Divider style={{ widht: "50%" }} />

        {/* Total */}
        <Row style={{ marginTop: "35px", fontWeight: "600" }}>
          <Col span={12}></Col>
          <Col span={6}>
            <Text>TOTAL</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text style={{ fontSize: "1.6rem" }}>450 Baht</Text>
          </Col>
        </Row>
      </div>
    </div>
  );
}
