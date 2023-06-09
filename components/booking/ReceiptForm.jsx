import { Divider, Row, Col, Typography, message } from "antd";
import styles from "@/styles/Booking.module.css";
import { use, useEffect, useState } from "react";
import useAxios from "@/lib/useAxios";
import axios from "axios";
import { differenceInDays } from "date-fns";
import formatDate from "@/lib/Date";

const { Text } = Typography;

export default function ReceiptForm({ bookingData }) {
  const { bk_id, checkin_date, checkout_date, room_id } = bookingData;

  const [roomDetail, setRoomDetail] = useState([]);

  useEffect(() => {
    fetchRoom();
  }, [bookingData]);

  const fetchRoom = async () => {
    try {
      const res = await useAxios.get(`/rooms/${room_id}`);
      setRoomDetail(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getDays = (date) => {
    const days = differenceInDays(
      new Date(checkout_date),
      new Date(checkin_date)
    );
    return days;
  };

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setPrice(roomDetail.room_price * getDays(bookingData));
    setDiscount(
      bookingData.user_id !== ""
        ? roomDetail.room_price * getDays(bookingData) * 0.1
        : 0
    );
  }, [bookingData, roomDetail]);

  return (
    <div className={styles.receipt}>
      <Row>
        <Col span={12}>
          <h2>Customer Name </h2>
          <Text>RECEIPT ID : #{bk_id}</Text>
        </Col>
        <Col span={6}>
          <Text>CHECK-IN : {formatDate(checkin_date)}</Text>
        </Col>
        <Col span={6}>
          <Text>CHECK-OUT : {formatDate(checkout_date)}</Text>
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
            <Text>{roomDetail.room_type}</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text>{getDays(bookingData)}</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text>{roomDetail.room_price}</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text>{price}</Text>
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
            <Text>{price}</Text>
          </Col>
        </Row>

        {/* Discount */}
        <Row style={{ marginTop: "20px" }}>
          <Col span={12}></Col>
          <Col span={6}>
            <Text style={{ color: "grey" }}>DISCOUNT 10%</Text>
          </Col>
          <Col span={6} className={styles.col}>
            <Text>{discount}</Text>
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
            <h2>{price - discount}</h2>
          </Col>
        </Row>
      </div>
    </div>
  );
}
