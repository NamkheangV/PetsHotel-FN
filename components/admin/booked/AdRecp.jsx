import { Divider, Row, Col, Typography, Image } from "antd";
import styles from "@/styles/Booking.module.css";
import formatDate from "@/lib/Date";
import { differenceInDays } from 'date-fns';

const { Text } = Typography;

export default function AdRecp({ data }) {
  // get only date
  const getDays = (date) => {
    const days = differenceInDays(
      new Date(date.checkout_date),
      new Date(data.checkin_date)
    );
    return days;
  };
  
  

  return (
    <div className={styles.receipt}>
      <Row>
        <Col span={12}>
          <h2>
            {data.bk_cus_fname} {data.bk_cus_lname}
          </h2>
          <Text>RECEIPT ID : #{data.bk_id}</Text>
        </Col>
        <Col span={6}>
          <Text>CHECK-IN : {formatDate(data.checkin_date)}</Text>
        </Col>
        <Col span={6}>
          <Text>CHECK-OUT : {formatDate(data.checkout_date)}</Text>
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
            <Text>{data.room_type}</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text>
              {getDays(data)} 
            </Text>
          </Col>
          <Col span={6} className={styles.col}>

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
            <h2>450 Baht</h2>
          </Col>
        </Row>
      </div>
    </div>
  );
}
